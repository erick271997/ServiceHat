import React, { useState } from 'react';
import { SafeAreaView, View, ScrollView } from 'react-native';

import Header from '../Componets/Header';
import LoginForm from '../Componets/LoginForm';
import Footer from '../Componets/Footer';
import Ubication from '../Componets/Ubication';
import AdBanner from '../Componets/AdBanner';
import PopularServices from '../Pages/PopularServices';

import styles from '../Styles/styles';

const HomeScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Cambia a false para probar el login

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appInnerContainer}>
        <Header isLoggedIn={isLoggedIn} />

        {isLoggedIn ? (
          <>
            <Ubication />
            <AdBanner />
            <ScrollView>
              <PopularServices />
            </ScrollView>
          </>
        ) : (
          <View style={styles.contentWithFooter}>
            <LoginForm onLogin={() => setIsLoggedIn(true)} />
            <Footer />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
