import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from '../Styles/styles';

const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for services..."
        placeholderTextColor="#888"
      />

      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="filter" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
