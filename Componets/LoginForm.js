import React from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import styles from '../Styles/styles';

const LoginForm = ({ onLogin, onSwitchToSignUp }) => {
  const navigation = useNavigation(); 

  return (
    <View style={styles.loginFormContainer}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
      />

      <TouchableOpacity>
        <Text style={styles.forgotPasswordText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.createAccountButton} onPress={onLogin}>
        <Text style={styles.createAccountText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onSwitchToSignUp}>
  <Text style={styles.signUpText}>Create Account</Text>
</TouchableOpacity>

    </View>
  );
};

export default LoginForm;