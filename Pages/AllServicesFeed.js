import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const userCoords = { latitude: 30.0187, longitude: -95.4693 };

function getDistanceInKm(lat1, lon1, lat2, lon2) {
  const toRad = (value) => (value * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const AllServicesFeed = () => {
  const [services, setServices] = useState([]);
  const navigation = useNavigation();

  const fetchServices = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'businesses'));
      const fetchedServices = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const scored = fetchedServices.map((service) => {
        const lat = service?.location?.latitude;
        const lon = service?.location?.longitude;
        let distance = 0;
        let score = 0;

        if (lat && lon) {
          distance = getDistanceInKm(userCoords.latitude, userCoords.longitude, lat, lon);
          if (distance <= 5) score += 1;
        }

        if (service.membership) score += 2;

        return { ...service, distance, score };
      });

      const sorted = scored.sort((a, b) => b.score - a.score);
      setServices(sorted);
    } catch (error) {
      console.error('Error loading services:', error);
    }
  };

  useEffect(() => {
    fetchServices(); // initial fetch
    const interval = setInterval(fetchServices, 2 * 60 * 1000); // every 2 minutes
    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView style={styles.feedContainer}>
      <Text style={styles.feedTitle}>📰 All Services</Text>

      {services.map((service) => (
        <TouchableOpacity
          key={service.id}
          style={styles.feedCard}
          onPress={() => navigation.navigate('BusinessProfile', { service })}
        >
          <View style={styles.feedImagePlaceholder} />
          <View style={styles.feedInfo}>
            <Text style={styles.cardTitle}>{service.name}</Text>
            <Text style={styles.cardSub}>📂 {service.category}</Text>
            <Text style={styles.cardSub}>
              📍 {service.distance.toFixed(1)} km
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default AllServicesFeed;
