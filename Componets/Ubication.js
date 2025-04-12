import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/styles';
import { ZipContext } from '../Context/ZipContext';

const Ubication = () => {
  const zipCode = useContext(ZipContext); // ← aquí tomamos el valor real

  return (
    <View style={styles.ubicationContainer}>
      <Text style={styles.ubicationLabel}>My Ubication</Text>
      <Text style={styles.ubicationValue}>{zipCode || 'Loading...'}</Text> 
    </View>
  );
};

export default Ubication;
