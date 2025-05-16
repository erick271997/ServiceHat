import React, { useState, useContext } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/styles';

// ✅ Puedes pasar el estado desde HomeScreen como prop, pero aquí te muestro cómo se vería
const MenuButton = ({ setIsLoggedIn }) => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const goToProfile = () => {
    setMenuVisible(false);
    navigation.navigate('UserProfile');
  };

  const goToSaved = () => {
    setMenuVisible(false);
    navigation.navigate('ServiceSave');
  };

  const goToTerms = () => {
    setMenuVisible(false);
    navigation.navigate('TermsAndConditions');
  };

  const handleLogout = () => {
    setMenuVisible(false);
    setIsLoggedIn(false); 
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

      <TouchableOpacity style={styles.menuItem} onPress={goToSaved}>
        <Text style={styles.menuText}>🗂️ Saved Services</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={goToTerms}>
        <Text style={styles.menuText}>📄 Terms & Conditions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
        <Text style={styles.menuText}>🚪 Logout</Text>
      </TouchableOpacity>
    </View>
  )}
</View>
  );
};

export default MenuButton;
