import React from 'react';
import { ScrollView } from 'react-native';
import Ubication from '../Componets/Ubication';
import styles from '../Styles/styles'; 
import AdBanner from '../Componets/AdBanner';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.homeScreenContainer}>
      <Ubication />
      <AdBanner />
    </ScrollView>
  );
};

export default HomeScreen;
