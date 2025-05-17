import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import styles from '../Styles/styles';
import Header from '../Componets/Header';

const user = {
  name: 'Jane Smith',
  description: 'Looking for reliable services in my area.',
  phone: '555-987-6543',
  photo: 'https://via.placeholder.com/150x150.png?text=User+Photo',
};

const UserProfile = () => {
  return (
    <>
      <Header isLoggedIn={true} setIsLoggedIn={() => {}} hideSearch={true} />

      <ScrollView style={styles.appInnerContainer}>
        <Text style={styles.sectionTitle}>User Profile</Text>

        {/* Photo, name, description */}
        <View style={styles.profileSection}>
          <Image
            source={{ uri: user.photo }}
            style={styles.profilePhoto}
          />

          <Text style={styles.profileName}>{user.name}</Text>
          <Text style={styles.profileDescription}>{user.description}</Text>
        </View>

        {/* Phone */}
        <View style={styles.profileSection}>
          <Text style={styles.profileLabel}>📞 Phone:</Text>
          <Text>{user.phone}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default UserProfile;
