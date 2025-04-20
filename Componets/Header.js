import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import MenuButton from './MenuButton';
import styles from '../Styles/styles';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTopRow}>
      <TouchableOpacity
  style={styles.logoContainer}
  onPress={() => navigation.reset({
    index: 0,
    routes: [{ name: 'Home' }],
  })}
>

          <Image source={require('../Imagen/logo2.png')} style={styles.logoImage} />
          <Text style={styles.logoText}>ServiceHot</Text>
        </TouchableOpacity>

        {isLoggedIn ? (
          <MenuButton setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginButton />
        )}
      </View>

      {isLoggedIn && <SearchBar />}
    </View>
  );
};


export default Header;
