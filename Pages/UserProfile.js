import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, ScrollView, Image, SafeAreaView } from 'react-native';
import { db } from '../firebaseConfig';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import styles from '../Styles/styles';
import Header from '../Componets/Header';

const UserProfile = ({ userId }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    description: '',
    photo: '',
  });

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSave = async () => {
    const { name, phone, description, photo } = formData;

    if (!name || !phone || !description) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    try {
      await setDoc(doc(db, 'users', userId), {
        ...formData,
        updatedAt: serverTimestamp(),
      });
      Alert.alert('Success', 'Profile updated.');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to save profile.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header isLoggedIn={true} setIsLoggedIn={() => {}} hideSearch={true} />

      <ScrollView style={styles.appInnerContainer}>
        <Text style={styles.sectionTitle}>Edit Your Profile</Text>

        <View style={styles.profileSection}>
          <Image
            source={{ uri: formData.photo || 'https://via.placeholder.com/150x150.png?text=User+Photo' }}
            style={styles.profilePhoto}
          />
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            value={formData.name}
            onChangeText={(text) => handleChange('name', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={formData.phone}
            onChangeText={(text) => handleChange('phone', text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Short Description"
            multiline
            numberOfLines={4}
            value={formData.description}
            onChangeText={(text) => handleChange('description', text)}
          />
        </View>

        <TouchableOpacity style={styles.createAccountButton} onPress={handleSave}>
          <Text style={styles.createAccountText}>Save Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserProfile;
