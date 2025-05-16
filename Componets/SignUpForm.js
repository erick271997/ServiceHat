import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';
import styles from '../Styles/styles';

const SignUpForm = ({ onSignUp, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '' 
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async () => {
    // Validaciones básicas
    if (!formData.name || !formData.email || !formData.password || !formData.phone) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    if (formData.password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    if (!/^\d+$/.test(formData.phone)) {
      Alert.alert('Error', 'El número de teléfono debe contener solo dígitos');
      return;
    }

    try {
      // Aquí llamarías a tu API/backend
      const response = await fetch('https://tuapi.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone // Enviar el número telefónico al backend
        })
      });

      const data = await response.json();

      if (response.ok) {
        onSignUp(data); // Pasar los datos del usuario registrado
      } else {
        Alert.alert('Error', data.message || 'Error en el registro');
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar al servidor');
      console.error('Error:', error);
    }
  };

  return (
    <View style={styles.loginFormContainer}>
      <Text style={styles.titleCreate}>Welcome! Create your account below</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        placeholderTextColor="#999"
        keyboardType="phone-pad"
        value={formData.phone}
        onChangeText={(Number) => handleChange('phone', Number)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleChange('password', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        placeholderTextColor="#999"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(text) => handleChange('confirmPassword', text)}
      />

      <TouchableOpacity 
        style={styles.createAccountButton} 
        onPress={handleSubmit}
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onSwitchToLogin}>
        <Text style={styles.signUpText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpForm;