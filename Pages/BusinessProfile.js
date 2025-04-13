import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styles from '../Styles/styles'; // Importa tus estilos desde el archivo de estilos
import { Image } from 'react-native';

const BusinessProfile = ({ route }) => {
  const { service } = route.params;
  const isBusiness = service.businessType !== 'Individual'; // condición clave

  return (
    <ScrollView style={styles.container}>
        <Image
  source={{ uri: service.image || 'https://via.placeholder.com/300x150.png?text=Service+Image' }}
  style={styles.profileImage}
/>

      <Text style={styles.title}>{service.name}</Text>

      <View style={styles.section}>
        <Text style={styles.label}>📄 Description:</Text>
        <Text style={styles.text}>{service.description || 'No description available'}</Text>
      </View>

      {isBusiness && (
        <>
          <View style={styles.section}>
            <Text style={styles.label}>🏢 Account Type:</Text>
            <Text style={styles.text}>{service.businessType}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>📅 Founded:</Text>
            <Text style={styles.text}>{service.founded || 'Not provided'}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>📍 Address:</Text>
            <Text style={styles.text}>{service.address || 'Not provided'}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>🌆 City:</Text>
            <Text style={styles.text}>{service.city || 'Not provided'}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>🌍 Country:</Text>
            <Text style={styles.text}>{service.country || 'Not provided'}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>📞 Phone:</Text>
            <Text style={styles.text}>{service.phone || 'Not provided'}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>⭐ Rating:</Text>
            <Text style={styles.text}>{service.rating || 'No rating yet'}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.label}>🏷️ Category:</Text>
            <Text style={styles.text}>{service.category}</Text>
          </View>

          {service.subcategories && (
            <View style={styles.section}>
              <Text style={styles.label}>🔖 Subcategories:</Text>
              {service.subcategories.split(',').map((sub, index) => (
                <Text key={index} style={styles.hashtag}>#{sub.trim()}</Text>
              ))}
            </View>
          )}

          <View style={styles.section}>
            <Text style={styles.label}>🏷️ ZIP Code:</Text>
            <Text style={styles.text}>{service.zipCode || 'N/A'}</Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};


  
export default BusinessProfile;
