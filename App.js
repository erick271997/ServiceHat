import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ZipProvider } from './Context/ZipContext';

import HomeScreen from './Pages/HomeScreen';
import BusinessProfile from './Pages/BusinessProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ZipProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="BusinessProfile" component={BusinessProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </ZipProvider>
  );
}
