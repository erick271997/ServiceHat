import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/styles';

const Ubication = () => {
  return (
    <View style={styles.ubicationContainer}>
      <Text style={styles.ubicationLabel}>My Ubication</Text>
      <Text style={styles.ubicationValue}>77001</Text> 
    </View>
  );
};

export default Ubication;
