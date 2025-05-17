import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert,ScrollView } from 'react-native';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import styles from '../Styles/styles';

const SignUpForm = ({ onSignUp, onSwitchToLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    accountType: 'client', 
  });

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { name, email, password, confirmPassword, phone, accountType } = formData;

    if (!name || !email || !password || !confirmPassword || !phone || !accountType) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    if (password.length < 6) {
      Alert.alert('Error', 'La contraseña debe tener al menos 6 caracteres');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const uid = userCredential.user.uid;

      await setDoc(doc(db, 'users', uid), {
        name,
        email,
        phone,
        accountType, 
        createdAt: serverTimestamp(),
      });

      Alert.alert('Éxito', 'Cuenta creada correctamente');
      if (onSignUp) onSignUp(accountType); 

    } catch (error) {
      console.error(error);
      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Error', 'Este correo ya está registrado');
      } else {
        Alert.alert('Error', error.message);
      }
    }
  };

  return (
    <ScrollView style={styles.loginFormContainer}>
      <Text style={styles.titleCreate}>Welcome! Create your account below</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={formData.name}
        onChangeText={(text) => handleChange('name', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={formData.phone}
        onChangeText={(text) => handleChange('phone', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        value={formData.email}
        onChangeText={(text) => handleChange('email', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={formData.password}
        onChangeText={(text) => handleChange('password', text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={formData.confirmPassword}
        onChangeText={(text) => handleChange('confirmPassword', text)}
      />


      <View style={styles.accountTypeContainer}>
        <Text style={styles.labelRe}>Register as:</Text>
        <View style={styles.accountTypeOptions}>
          <TouchableOpacity
            style={[
              styles.accountTypeButton,
              formData.accountType === 'client' && styles.selectedButton,
            ]}
            onPress={() => handleChange('accountType', 'client')}
          >
            <Text style={styles.accountTypeText}>Client</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.accountTypeButton,
              formData.accountType === 'business' && styles.selectedButton,
            ]}
            onPress={() => handleChange('accountType', 'business')}
          >
            <Text style={styles.accountTypeText}>Business</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.createAccountButton} onPress={handleSubmit}>
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onSwitchToLogin}>
        <Text style={styles.signUpText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SignUpForm;
