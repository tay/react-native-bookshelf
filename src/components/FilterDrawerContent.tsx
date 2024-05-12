import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';

type DrawerContentProps = {
  formats: Array<string>;
  selectFormat: (format: string) => void;
};

const FilterDrawerContent = ({formats, selectFormat}: DrawerContentProps) => {
  return (
    <SafeAreaView>
      <Text>=Genres=</Text>
      {/*TODO: Style the header*/}
      {formats.map(format => {
        return (
          <DrawerItem
            key={format}
            label={format}
            onPress={() => selectFormat(format)}
          />
        );
      })}
    </SafeAreaView>
  );
};

export default FilterDrawerContent;
