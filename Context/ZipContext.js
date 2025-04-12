import React, { createContext, useState, useEffect } from 'react';
import { Platform } from 'react-native';
import * as Location from 'expo-location';

export const ZipContext = createContext();

export const ZipProvider = ({ children }) => {
  const [zipCode, setZipCode] = useState(null);

  useEffect(() => {
   
    if (Platform.OS === 'web') {
      console.log('🌐 Modo web detectado — usando ZIP de prueba');
      setZipCode('77090');
      return;
    }

    // Timeout por si se tarda mucho
    let timeout = setTimeout(() => {
      if (!zipCode) {
        console.log('⏰ Tiempo excedido. No se obtuvo ZIP.');
        setZipCode('TimeOut');
      }
    }, 10000);

    (async () => {
      try {
        console.log('🔍 Solicitando permisos...');
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== 'granted') {
          console.log('❌ Permiso denegado');
          setZipCode('PermissionDenied');
          return;
        }

        console.log('✅ Permiso concedido');
        let location = await Location.getCurrentPositionAsync({});
        console.log('📍 Coordenadas:', location.coords);

        let geocode = await Location.reverseGeocodeAsync(location.coords);
        console.log('📦 Geocode:', geocode);

        if (geocode && geocode.length > 0 && geocode[0].postalCode) {
          clearTimeout(timeout);
          setZipCode(geocode[0].postalCode);
        } else {
          clearTimeout(timeout);
          setZipCode('UnknownZIP');
        }
      } catch (error) {
        clearTimeout(timeout);
        console.log('💥 Error:', error);
        setZipCode('Error');
      }
    })();
  }, []);

  return (
    <ZipContext.Provider value={zipCode}>
      {children}
    </ZipContext.Provider>
  );
};
