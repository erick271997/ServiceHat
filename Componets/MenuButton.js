import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Styles/styles';

const MenuButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={onPress}>
      <Ionicons name="menu" size={24} color="#1E90FF" /> 
    </TouchableOpacity>
  );
};

export default MenuButton;
