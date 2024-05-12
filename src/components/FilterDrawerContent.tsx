import React from 'react';
import {DrawerItem} from '@react-navigation/drawer';
import {Text} from 'react-native';

type DrawerContentProps = {
  formats: Array<string>;
  selectFilter: (format: string) => void;
};

const FilterDrawerContent = ({formats, selectFilter}: DrawerContentProps) => {
  return (
    <>
      <Text>=Genres=</Text>{/*TODO: Style the header*/}
      {formats.map(format => {
        return (
          <DrawerItem
            key={format}
            label={format}
            onPress={() => selectFilter(format)}
          />
        );
      })}
    </>
  );
};

export default FilterDrawerContent;
