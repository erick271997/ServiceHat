import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../Styles/styles';
import Header from '../Componets/Header'; 
import { TouchableOpacity } from 'react-native';
import  SaveToAgenda  from './saveToAgenda;'; // Asegúrate de que esta función esté definida en tu archivo de utilidades
const BusinessProfile = ({ route }) => {
  const { service } = route.params || {};

  console.log('🧾 Servicio recibido:', service);
  if (!service) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: No se encontró el servicio.</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1 }}>
<Header isLoggedIn={true} setIsLoggedIn={() => {}} />

      <ScrollView contentContainerStyle={styles.profileContainer}>
      <Image
  source={{
    uri: service.imageUrl || 'https://via.placeholder.com/150',
  }}
  style={styles.profileImage}
 

/>

        <Text style={styles.profileTitle}>{service.name}</Text>
        <Text style={styles.profileText}>Type: {service.businessType}</Text>
        <Text style={styles.profileText}>Category: {service.category}</Text>
        <Text style={styles.profileText}>ZIP: {service.zipCode}</Text>
        <Text style={styles.profileText}>
          Description: {service.description || 'No description provided'}


        </Text>
        {service && (
  <TouchableOpacity onPress={() => SaveToAgenda(service)}>
    <Text style={styles.saveButton}>💾 Save Service</Text>
  </TouchableOpacity>
)}


                 {/* Estrellas (ejemplo con 4 de 5) */}
<View style={styles.ratingStars}>
  <Text style={styles.star}>★</Text>
  <Text style={styles.star}>★</Text>
  <Text style={styles.star}>★</Text>
  <Text style={styles.star}>★</Text>
  <Text style={[styles.star, { color: '#CCC' }]}>★</Text>
</View>

<View style={styles.infoSection}>
  <Text style={styles.profileText}>📍 Dirección: {service.address || 'No disponible'}</Text>
  <Text style={styles.profileText}>📞 Teléfono: {service.phone || 'No disponible'}</Text>
</View>

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
