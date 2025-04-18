import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import styles from '../Styles/styles';
import Header from '../Componets/Header'; // 👈 Importar header

const BusinessProfile = ({ route }) => {
  const { service } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <Header isLoggedIn={true} /> 

      <ScrollView contentContainerStyle={styles.profileContainer}>
        <Text style={styles.profileTitle}>{service.name}</Text>
        <Text style={styles.profileText}>Type: {service.businessType}</Text>
        <Text style={styles.profileText}>Category: {service.category}</Text>
        <Text style={styles.profileText}>ZIP: {service.zipCode}</Text>
        <Text style={styles.profileText}>
          Description: {service.description || 'No description provided'}
        </Text>

        {service.Subcategorías && (
          <View style={styles.hashtagsRow}>
            {service.Subcategorías.split(',').slice(0, 4).map((tag, i) => (
              <Text key={i} style={styles.hashtag}>#{tag.trim()}</Text>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default BusinessProfile;
