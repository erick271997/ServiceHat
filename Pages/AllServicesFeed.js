import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';
import { useNavigation } from '@react-navigation/native';

// Servicios simulados
const services = [
  {
    id: 1,
    name: 'AutoFix Pro',
    category: 'Mechanic',
    location: { latitude: 30.018, longitude: -95.469 },
    zipCode: '77090',
    isPremium: true,
  },
  {
    id: 2,
    name: 'Sparkling Clean',
    category: 'Cleaning',
    location: { latitude: 30.025, longitude: -95.470 },
    zipCode: '77091',
    isPremium: false,
  },
  {
    id: 3,
    name: 'Cool Air Experts',
    category: 'Air-conditioning',
    location: { latitude: 30.012, longitude: -95.480 },
    zipCode: '77090',
    isPremium: false,
  },
];

// Ubicación simulada del usuario
const userCoords = { latitude: 30.0187, longitude: -95.4693 };

// Cálculo de distancia
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

// Ordenar por membresía y cercanía
const sortServices = () => {
  const scored = services.map((service) => {
    const distance = getDistanceInKm(
      userCoords.latitude,
      userCoords.longitude,
      service.location.latitude,
      service.location.longitude
    );

    let score = 0;
    if (service.isPremium) score += 2;
    if (distance <= 5) score += 1;

    return { ...service, distance, score };
  });

  return scored.sort((a, b) => b.score - a.score);
};

const AllServicesFeed = () => {
  const sortedServices = sortServices();
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.feedContainer}>
      <Text style={styles.feedTitle}>📰 All Services</Text>

      {sortedServices.map((service) => (
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
              📍 {service.distance.toFixed(1)} millas
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default AllServicesFeed;
