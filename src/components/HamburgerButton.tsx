import React from 'react';
import {Image, StyleSheet, TouchableHighlight} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 30,
    height: 30,
  },
});

const HamburgerButton = ({onPress}: {onPress: () => void}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <Image style={styles.image} source={require('./hamburger.svg.png')} />
    </TouchableHighlight>
  );
};

export default HamburgerButton;
