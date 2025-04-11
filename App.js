import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import Header from './Componets/Header';
import LoginForm from './Componets/LoginForm';
import Footer from './Componets/Footer';
import HomeScreen from './Pages/HomeScreen'; // <-- este es nuevo
import styles from './Styles/styles';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appInnerContainer}>
        <Header isLoggedIn={isLoggedIn} />

        {isLoggedIn ? (
          <HomeScreen />
        ) : (
          <View style={styles.contentWithFooter}>
            <LoginForm onLogin={() => setIsLoggedIn(true)} />
            <Footer />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
