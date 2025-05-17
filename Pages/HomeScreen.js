import React, { useState } from 'react';
import { ScrollView, View, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Componets/Header';
import Ubication from '../Componets/Ubication';
import AdBanner from '../Componets/AdBanner';
import PopularServices from './PopularServices';
import LoginForm from '../Componets/LoginForm';
import SignUpForm from '../Componets/SignUpForm';
import ForgotPasswordForm from '../Componets/ForgotPasswordForm';
import Footer from '../Componets/Footer';
import styles from '../Styles/styles';
import AllServicesFeed from './AllServicesFeed';
import { useAuth } from '../Context/AuthContext';

const HomeScreen = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigation = useNavigation();
  const [view, setView] = useState('login'); // 'login' | 'signup' | 'forgot'
  const handleSignUp = (accountType) => {
    setIsLoggedIn(true);
  
    setTimeout(() => {
      if (accountType === 'business') {
        navigation.navigate('BusinessInfoForm');
      } else {
        navigation.navigate('UserProfile');
      }
    }, 300);
  };
  

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.appInnerContainer}>
        <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

        {!isLoggedIn ? (
          <>
            {view === 'login' && (
              <LoginForm
                onLogin={() => setIsLoggedIn(true)}
                onSwitchToSignUp={() => setView('signup')}
                onSwitchToForgotPassword={() => setView('forgot')}
              />
            )}
            {view === 'signup' && (
              <SignUpForm
                onSignUp={handleSignUp}
                onSwitchToLogin={() => setView('login')}
              />
            )}
            {view === 'forgot' && (
              <ForgotPasswordForm
                onBackToLogin={() => setView('login')}
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
