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
import SignUpForm from '../Componets/SignUpForm';
import { useAuth } from '../Context/AuthContext'; // ✅ NUEVO

const HomeScreen = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth(); // ✅ reemplaza props
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appInnerContainer}>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        {!isLoggedIn ? (
          <>
            {showSignUp ? (
              <SignUpForm
                onSignUp={() => {
                  setShowSignUp(false);
                  setIsLoggedIn(true); 
                }}
                onSwitchToLogin={() => setShowSignUp(false)}
              />
            ) : (
              <LoginForm
                onLogin={() => setIsLoggedIn(true)}
                onSwitchToSignUp={() => setShowSignUp(true)}
              />
            )}
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
