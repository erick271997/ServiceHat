import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ZipProvider } from './Context/ZipContext';
import { AuthProvider } from './Context/AuthContext'; // 👈 IMPORTANTE

import HomeScreen from './Pages/HomeScreen';
import BusinessProfile from './Pages/BusinessProfile';
import UserProfile from './Pages/UserProfile';
import ServiceSave from './Pages/saveToAgenda;';
import TermsAndConditions from './Pages/TermsConditions';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider> {/* ✅ Proveedor global de login */}
      <ZipProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="BusinessProfile" component={BusinessProfile} />
            <Stack.Screen name="UserProfile" component={UserProfile} />
            <Stack.Screen name="ServiceSave" component={ServiceSave} />
            <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </ZipProvider>
    </AuthProvider>
  );
}
