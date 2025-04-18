import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../Styles/styles';
import Header from '../Componets/Header';

const user = {
  type: 'business',
  name: 'John Doe',
  description: 'Ofrecemos servicios de jardinería y paisajismo en toda el área.',
  phone: '555-123-4567',
  location: {
    country: 'USA',
    city: 'Houston',
    address: '123 Main St',
    zipcode: '77090',
    yearFounded: 2015,
  },
  businessInfo: {
    businessType: 'LLC',
    category: 'Servicios Generales',
    subcategories: ['Jardinería', 'Paisajismo', 'Poda de árboles'],
  },
  gallery: [
    { description: 'Proyecto de patio trasero', date: '2024-05-01' },
    { description: 'Diseño de jardín zen', date: '2024-03-15' },
  ]
};

const UserProfile = () => {
  return (
    <>
      <Header isLoggedIn={true} hideSearch={true} />

      <ScrollView style={styles.appInnerContainer}>
        <Text style={styles.sectionTitle}> Profile</Text>

        {/* Foto, nombre, descripción */}
        <View style={styles.profileSection}>
        <Image
  source={{ uri: 'https://via.placeholder.com/100x100.png?text=User' }}
  style={styles.profilePhoto}
/>

          <View style={styles.profilePhotoPlaceholder} />
          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.profileDescription}>{user.description}</Text>
        </View>

        {/* Teléfono */}
        <View style={styles.profileSection}>
          <Text style={styles.profileLabel}>📞 Phone:</Text>
          <Text>{user.phone}</Text>
        </View>

        {/* Ubicación */}
        {user.type === 'business' && (
          <View style={styles.profileSection}>
            <Text style={styles.profileLabel}>🌎 Location:</Text>
            <Text>Country: {user.location.country}</Text>
            <Text>City: {user.location.city}</Text>
            <Text>Address: {user.location.address}</Text>
            <Text>Zipcode: {user.location.zipcode}</Text>
          </View>
        )}

        {/* Info de negocio */}
        {user.type === 'business' && (
          <View style={styles.profileSection}>
            <Text style={styles.profileLabel}>🏷️ Business Info:</Text>
            <Text>Type: {user.businessInfo.businessType}</Text>
            <Text>Category: {user.businessInfo.category}</Text>
            <Text>Subcategories:</Text>
            {user.businessInfo.subcategories.map((item, i) => (
              <Text key={i} style={styles.hashtag}>#{item}</Text>
            ))}
          </View>
        )}

        {/* Año y lugar */}
        <View style={styles.profileSection}>
          <Text style={styles.profileLabel}>📅 Foundation:</Text>
          <Text>Founded: {user.location.yearFounded}</Text>
          <Text>Place: {user.location.city}, {user.location.country}</Text>
        </View>

        {/* Galería */}
        <View style={styles.profileSection}>
          <Text style={styles.profileLabel}>🖼️ Gallery:</Text>
          {user.gallery.map((item, i) => (
            <View key={i} style={styles.galleryItem}>
              <View style={styles.profilePhotoPlaceholder} />
              <Text>{item.description}</Text>
              <Text>{item.date}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default UserProfile;
