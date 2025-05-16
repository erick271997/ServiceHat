import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Styles/styles';

const LoginButton = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Navega al inicio
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });
  };
console.log(handleLogin);
  return (
    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
      <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
