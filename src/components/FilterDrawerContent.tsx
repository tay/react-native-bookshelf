import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';

type FilterDrawerContentProps = {
  formats: Array<string>;
  selectFormat: (format: string) => void;
};

const FilterDrawerContent = ({formats, selectFormat}: FilterDrawerContentProps) => {
  return (
    <SafeAreaView>
      <Text>=Genres=</Text>
      {/*TODO: Style the header*/}
      {formats.map(format => {
        return (
          <DrawerItem
            accessibilityLabel={`View only ${format}`}
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
