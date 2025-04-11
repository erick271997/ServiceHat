import React from 'react';
import { View, Image, Text } from 'react-native';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import styles from '../Styles/styles';
import MenuButton from './MenuButton';
const Header = ({ isLoggedIn, onMenuPress }) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTopRow}>
        <View style={styles.logoContainer}>
          <Image source={require('../Imagen/logo2.png')} style={styles.logoImage} />
          <Text style={styles.logoText}>ServiceHot</Text>
        </View>

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
