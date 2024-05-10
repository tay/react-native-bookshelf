import React from 'react';

import {StyleSheet, TextInput} from 'react-native';
const styles = StyleSheet.create({
  input: {
    height: 24,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: 100,
  },
});

const SearchInput = () => {
  return <TextInput placeholder="search" style={styles.input} />;
};

export default SearchInput;
