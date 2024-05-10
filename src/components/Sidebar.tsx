import {Text, TouchableHighlight, View} from 'react-native';
import React from 'react';

type SidebarProps = {
  formats: Array<string>;
  selectFilter: (filter: string) => void;
};
export const Sidebar = ({formats, selectFilter}: SidebarProps) => {
  return (
    <View>
      <Text>Genres</Text>
      {formats.map(format => (
        <TouchableHighlight key={format} onPress={() => selectFilter(format)}>
          <Text>{format}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};
