import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../Styles/styles';

// 🧪 Simulación de servicios
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
  // Puedes agregar más servicios aquí
];

// Simulamos ubicación del usuario
const userCoords = { latitude: 30.0187, longitude: -95.4693 };

// Calcula distancia en km
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

// Ordenamos por membresía + cercanía
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
    if (distance <= 5) score += 1; // Cerca

    return { ...service, distance, score };
  });

  return scored.sort((a, b) => b.score - a.score);
};

const AllServicesFeed = () => {
  const sortedServices = sortServices();

  return (
    <ScrollView style={styles.feedContainer}>
      <Text style={styles.sectionTitle}>📰 All Services</Text>

      {sortedServices.map((service) => (
        <View key={service.id} style={styles.serviceCard}>
          <Text style={styles.cardTitle}>{service.name}</Text>
          <Text style={styles.cardSub}>Category: {service.category}</Text>
          <Text style={styles.cardSub}>
            Premium: {service.isPremium ? '✅ Yes' : '❌ No'}
          </Text>
          <Text style={styles.cardSub}>
            Distance: {service.distance.toFixed(2)} mi
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default AllServicesFeed;
