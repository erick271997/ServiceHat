import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/styles';

const MenuButton = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const goToProfile = () => {
    setMenuVisible(false); // Oculta el menú
    navigation.navigate('UserProfile'); // Navega al perfil
  };

  return (
    <View style={{ position: 'relative' }}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Ionicons name="menu" size={24} color="#1E90FF" />
      </TouchableOpacity>

      {isMenuVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableOpacity style={styles.menuItem} onPress={goToProfile}>
            <Text style={styles.menuText}>👤 My Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>📄 Terms & Conditions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>🚪 Logout</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default MenuButton;
