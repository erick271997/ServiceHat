import React from 'react';
import { View, Text } from 'react-native';
import styles from '../Styles/styles';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>© 2025 ServiceHot. All rights reserved.</Text>
    </View>
  );
};

export default Footer;
