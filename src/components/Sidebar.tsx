import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import React from 'react';

type SidebarProps = {
  formats: Array<string>;
  selectFilter: (filter: string) => void;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export const Sidebar = ({formats, selectFilter}: SidebarProps) => {
  return (
    <View style={styles.container}>
      <Text>Genres</Text>
      {formats.map(format => (
        <TouchableHighlight key={format} onPress={() => selectFilter(format)}>
          <Text>{format}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};
