import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../Componets/Header';
import styles from '../Styles/styles';

const TermsAndConditions = () => {
  return (
    <View style={{ flex: 1 }}>
<Header isLoggedIn={true} setIsLoggedIn={() => {}} hideSearch={true} />

      <ScrollView style={styles.termsContainer}>
        <Text style={styles.sectionTitle}>📄 Terms & Conditions</Text>

        <Text style={styles.termsText}>
          Welcome to ServiceHot! By using our app, you agree to the following terms:
        </Text>

        <Text style={styles.termsText}>
          1. You are responsible for the accuracy of the information you provide.
        </Text>
        <Text style={styles.termsText}>
          2. We do not guarantee the quality or legality of services offered by third-party providers.
        </Text>
        <Text style={styles.termsText}>
          3. Premium members may receive additional visibility within the app.
        </Text>
        <Text style={styles.termsText}>
          4. All communication between users and service providers is external to this app.
        </Text>
        <Text style={styles.termsText}>
          5. Any misuse of the platform will lead to account suspension or removal.
        </Text>
        <Text style={styles.termsText}>
          6. We may update these terms at any time without prior notice.
        </Text>

        <Text style={styles.termsText}>
          For more information, please contact us through the app support section.
        </Text>
      </ScrollView>
    </View>
  );
};

export default TermsAndConditions;
