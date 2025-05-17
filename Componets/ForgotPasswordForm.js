import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import styles from '../Styles/styles';

const ForgotPasswordForm = ({ onBackToLogin }) => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    if (!email) {
      Alert.alert('Error', 'Please enter your email');
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Success', 'Password reset email sent');
      if (onBackToLogin) onBackToLogin();
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Could not send reset email. Please check the email or try again.');
    }
  };

  return (
    <View style={styles.loginFormContainer}>
      <Text style={styles.titleCreate}>Forgot Your Password?</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.createAccountButton} onPress={handlePasswordReset}>
        <Text style={styles.createAccountText}>Send Reset Email</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onBackToLogin}>
        <Text style={styles.signUpText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordForm;
