import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert, ScrollView, Image, Platform, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { db, storage } from '../firebaseConfig';
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as uuid from 'react-native-uuid';
import styles from '../Styles/styles';
import Header from '../Componets/Header';

const BusinessInfoForm = ({ onRegistered, existingBusiness }) => {
  const [formData, setFormData] = useState({
    businessName: existingBusiness?.businessName || '',
    businessType: existingBusiness?.businessType || '',
    foundationYear: existingBusiness?.foundationYear || '',
    workType: existingBusiness?.workType || '',
    mainCategory: existingBusiness?.mainCategory || '',
    subcategories: existingBusiness?.subcategories || '',
    phone: existingBusiness?.phone || '',
    email: existingBusiness?.email || '',
    address: existingBusiness?.address || '',
    neighborhood: existingBusiness?.neighborhood || '',
    zipCode: existingBusiness?.zipCode || '',
    description: existingBusiness?.description || '',
    schedule: existingBusiness?.schedule || '',
    socialMedia: existingBusiness?.socialMedia || '',
    website: existingBusiness?.website || '',
  });

  const [portfolioImages, setPortfolioImages] = useState(existingBusiness?.portfolio || []);

  const handleChange = (name, value) => setFormData({ ...formData, [name]: value });

  const pickImage = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'Permission is required to access the gallery');
        return;
      }
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.7,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const description = 'Uploaded image';
      setPortfolioImages([...portfolioImages, { uri, description }]);
    }
  };

  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const fileRef = ref(storage, `portfolio/${uuid.v4()}.jpg`);
    await uploadBytes(fileRef, blob);
    return await getDownloadURL(fileRef);
  };

  const handleSubmit = async () => {
    const requiredFields = [
      'businessName', 'businessType', 'foundationYear', 'workType',
      'mainCategory', 'subcategories', 'phone', 'email', 'address', 'neighborhood', 'description'
    ];

    for (let field of requiredFields) {
      if (!formData[field]) {
        Alert.alert('Required field', `${field} is missing.`);
        return;
      }
    }

    try {
      const uploadedImages = [];
      for (let img of portfolioImages) {
        if (img.uri && !img.url) {
          const url = await uploadImage(img.uri);
          uploadedImages.push({ url, description: img.description });
        } else {
          uploadedImages.push(img);
        }
      }

      if (existingBusiness?.id) {
        const docRef = doc(db, 'businesses', existingBusiness.id);
        await updateDoc(docRef, {
          ...formData,
          portfolio: uploadedImages,
          updatedAt: serverTimestamp(),
        });
        Alert.alert('Success', 'Business updated.');
      } else {
        const docRef = await addDoc(collection(db, 'businesses'), {
          ...formData,
          portfolio: uploadedImages,
          createdAt: serverTimestamp(),
        });
        Alert.alert('Success', 'Business registered.');
        if (onRegistered) onRegistered(docRef.id);
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to register/update business.');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header isLoggedIn={true} setIsLoggedIn={() => {}} />
      <ScrollView contentContainerStyle={styles.profileContainer}>
        <Text style={styles.titleCreate}>Business Registration Form</Text>

        <TextInput style={styles.input} placeholder="Business Name *" value={formData.businessName} onChangeText={(t) => handleChange('businessName', t)} />
        <TextInput style={styles.input} placeholder="Business Type *" value={formData.businessType} onChangeText={(t) => handleChange('businessType', t)} />
        <TextInput style={styles.input} placeholder="Year of Foundation *" keyboardType="number-pad" value={formData.foundationYear} onChangeText={(t) => handleChange('foundationYear', t)} />
        <TextInput style={styles.input} placeholder="Type of Work *" value={formData.workType} onChangeText={(t) => handleChange('workType', t)} />
        <TextInput style={styles.input} placeholder="Main Category *" value={formData.mainCategory} onChangeText={(t) => handleChange('mainCategory', t)} />
        <TextInput style={styles.input} placeholder="Subcategories * (comma-separated)" value={formData.subcategories} onChangeText={(t) => handleChange('subcategories', t)} />
        <TextInput style={styles.input} placeholder="Phone *" keyboardType="phone-pad" value={formData.phone} onChangeText={(t) => handleChange('phone', t)} />
        <TextInput style={styles.input} placeholder="Email *" keyboardType="email-address" value={formData.email} onChangeText={(t) => handleChange('email', t)} />
        <TextInput style={styles.input} placeholder="Address *" value={formData.address} onChangeText={(t) => handleChange('address', t)} />
        <TextInput style={styles.input} placeholder="Neighborhood *" value={formData.neighborhood} onChangeText={(t) => handleChange('neighborhood', t)} />
        <TextInput style={styles.input} placeholder="ZIP Code" keyboardType="number-pad" value={formData.zipCode} onChangeText={(t) => handleChange('zipCode', t)} />
        <TextInput style={styles.input} placeholder="Business Description *" multiline numberOfLines={4} value={formData.description} onChangeText={(t) => handleChange('description', t)} />
        <TextInput style={styles.input} placeholder="Operating Hours" value={formData.schedule} onChangeText={(t) => handleChange('schedule', t)} />
        <TextInput style={styles.input} placeholder="Social Media Links" value={formData.socialMedia} onChangeText={(t) => handleChange('socialMedia', t)} />
        <TextInput style={styles.input} placeholder="Website (optional)" value={formData.website} onChangeText={(t) => handleChange('website', t)} />

        <Text style={styles.sectionTitle}>Work Portfolio:</Text>
        {portfolioImages.map((img, index) => (
          <View key={index} style={styles.portfolioItem}>
            <Image source={{ uri: img.uri || img.url }} style={styles.portfolioImage} />
            <Text style={styles.portfolioDescription}>{img.description}</Text>
          </View>
        ))}

        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadButtonText}>Upload Image</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.createAccountButton} onPress={handleSubmit}>
          <Text style={styles.createAccountText}>{existingBusiness ? 'Update Business' : 'Register Business'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BusinessInfoForm;