import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import styles from '../Styles/styles';

const PopularServices = () => {
  const navigation = useNavigation();
  const [services, setServices] = useState([]);

  const userCoords = { latitude: 30.0187, longitude: -95.4693 };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const today = new Date();
        const lastSunday = new Date(today.setDate(today.getDate() - today.getDay()));

        const querySnapshot = await getDocs(query(
          collection(db, 'businesses'),
          where('membership', '==', true),
          where('lastUpdated', '>=', lastSunday)
        ));

        const fetchedServices = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setServices(fetchedServices);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    fetchServices();
  }, []);

  function getDistanceInKm(lat1, lon1, lat2, lon2) {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function getTopServices() {
    const scoredServices = services.map((service) => {
      let score = 0;
      const lat = service?.location?.latitude;
      const lon = service?.location?.longitude;

      if (lat && lon) {
        const distance = getDistanceInKm(
          userCoords.latitude,
          userCoords.longitude,
          lat,
          lon
        );

        if (distance <= 2) score += 3;
        else if (distance <= 5) score += 2;
        else if (distance <= 10) score += 1;
      }

      if (service.rating >= 4.5) score += 2;
      else if (service.rating >= 4.0) score += 1;

      return { ...service, score };
    });

    const sorted = scoredServices.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return a.name.localeCompare(b.name);
    });

    const uniqueCategories = new Set();
    const finalList = [];

    for (const service of sorted) {
      if (!uniqueCategories.has(service.category)) {
        uniqueCategories.add(service.category);
        finalList.push(service);
      }
    }

    return finalList;
  }

  const topServices = getTopServices();

  return (
    <View style={styles.populasresContainer}>
      <Text style={styles.sectionTitle}>Most Popular This Week</Text>

      {topServices.map((service) => (
        <TouchableOpacity
          key={service.id}
          style={styles.serviceCard}
          onPress={() => navigation.navigate('BusinessProfile', { service })}
        >
          <View style={styles.imagePlaceholder} />
          <View style={styles.serviceInfo}>
            <Text style={styles.cardTitle}>{service.name}</Text>
            <Text style={styles.descriptionText}>
              {service.description || 'No description available'}
            </Text>
            <Text style={styles.cardSub}>Category: {service.category}</Text>

            {service.Subcategorías && (
              <View style={styles.hashtagsRow}>
                {service.Subcategorías.split(',').slice(0, 4).map((tag, i) => (
                  <Text key={i} style={styles.hashtag}>#{tag.trim()}</Text>
                ))}
              </View>
            )}

            <Text style={styles.zipCode}>ZIP: {service.zipCode}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default PopularServices;
