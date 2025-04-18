import React, { useState } from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import Header from '../Componets/Header';
import Ubication from '../Componets/Ubication';
import AdBanner from '../Componets/AdBanner';
import PopularServices from './PopularServices';
import LoginForm from '../Componets/LoginForm';
import Footer from '../Componets/Footer';
import styles from '../Styles/styles';
import AllServicesFeed from './AllServicesFeed';

const HomeScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appInnerContainer}>
        <Header isLoggedIn={isLoggedIn} />

        {!isLoggedIn ? (
          <>
            <LoginForm onLogin={() => setIsLoggedIn(true)} />
            <Footer />
          </>
        ) : (
          <>
            <Ubication />
            <AdBanner />
            <ScrollView>
              <PopularServices />
              <AllServicesFeed />
            </ScrollView>
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
