import React from 'react';
import { ScrollView } from 'react-native';
import Ubication from '../Componets/Ubication';
import styles from '../Styles/styles'; // ✅ Este import es el que te falta

const HomeScreen = () => {
  return (
    <ScrollView style={styles.homeScreenContainer}>
      <Ubication />
    </ScrollView>
  );
};

export default HomeScreen;
