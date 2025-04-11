import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../Styles/styles';

const LoginButton = () => {
  const handleLogin = () => {
    // Aquí más adelante iría la navegación a LoginScreen
    console.log('Ir a Login');
  };

  return (
    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
      <Text style={styles.loginButtonText}>Login</Text>
    </TouchableOpacity>
  );
};

export default LoginButton;
