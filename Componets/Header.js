import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import MenuButton from './MenuButton';
import styles from '../Styles/styles';

const Header = ({ isLoggedIn, onMenuPress }) => {
  const navigation = useNavigation(); // ✅ acceso directo a navegación

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTopRow}>
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={() => navigation.navigate('Home')} // ✅ lleva a HomeScreen
        >
          <Image source={require('../Imagen/logo2.png')} style={styles.logoImage} />
          <Text style={styles.logoText}>ServiceHot</Text>
        </TouchableOpacity>

        {isLoggedIn ? (
          <MenuButton onPress={onMenuPress} />
        ) : (
          <LoginButton />
        )}
      </View>

      {isLoggedIn && <SearchBar />}
    </View>
  );
};

export default Header;
