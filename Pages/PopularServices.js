import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/styles';

const PopularServices = () => {
  const navigation = useNavigation();

  const userCoords = { latitude: 30.0187, longitude: -95.4693 };

  const services = [
    {
      id: 1,
      name: 'AutoFix Pro',
      category: 'Mechanic',
      description: 'Servicio de reparación de vehículos',
      Subcategorías: 'Car repair, oil change, tire rotation, brake service',
      rating: 4.8,
      businessType: 'LLC',
      zipCode: '77090',
      location: { latitude: 30.0175, longitude: -95.4715 },
    },
    {
      id: 2,
      name: 'Sparkling Clean',
      category: 'Cleaning',
      description: 'Servicio de limpieza de hogares',
      Subcategorías: 'Deep cleaning, carpet, office, window cleaning',
      rating: 4.5,
      businessType: 'Individual',
      zipCode: '77091',
      location: { latitude: 30.0181, longitude: -95.4701 },
    },
    {
      id: 3,
      name: 'Builder Max',
      category: 'Construction',
      description: 'Remodelación y construcción',
      Subcategorías: 'Remodeling, roofing, plumbing, electrical',
      rating: 4.6,
      businessType: 'S-Corp',
      zipCode: '77092',
      location: { latitude: 30.0191, longitude: -95.4691 },
    },
    {
      id: 4,
      name: 'Houston Tow',
      category: 'Crane',
      description: 'Servicio de grúas',
      Subcategorías: 'Towing, recovery, emergency assist',
      rating: 4.2,
      businessType: 'LLC',
      zipCode: '77091',
      location: { latitude: 30.0215, longitude: -95.4705 },
    },
    {
      id: 5,
      name: 'Nail Art Studio',
      category: 'Manicure',
      description: 'Cuidado de uñas y manos',
      Subcategorías: 'Nails, manicure, pedicure, design',
      rating: 4.9,
      businessType: 'Individual',
      zipCode: '77093',
      location: { latitude: 30.0241, longitude: -95.4680 },
    },
    {
      id: 6,
      name: 'Cool Air Experts',
      category: 'Air-conditioning',
      description: 'Instalación y reparación de A/C',
      Subcategorías: 'AC install, AC repair, maintenance',
      rating: 4.7,
      businessType: 'LLC',
      zipCode: '77090',
      location: { latitude: 30.0200, longitude: -95.4750 },
    },
  ];

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

      const distance = getDistanceInKm(
        userCoords.latitude,
        userCoords.longitude,
        service.location.latitude,
        service.location.longitude
      );

      if (distance <= 2) score += 3;
      else if (distance <= 5) score += 2;
      else if (distance <= 10) score += 1;

      if (service.rating >= 4.5) score += 2;
      else if (service.rating >= 4.0) score += 1;

      if (service.businessType === 'LLC') score += 2;
      if (service.businessType === 'S-Corp') score += 1;

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
            <Text style={styles.cardSub}>TC: {service.businessType}</Text>
            <Text style={styles.descriptionText}>
              {service.description || 'Sin descripción disponible'}
            </Text>
            <Text style={styles.cardSub}>Categoría: {service.category}</Text>

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
