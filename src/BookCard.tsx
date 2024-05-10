import React from 'react';
import {Text, View} from 'react-native';

type BookCardProps = {
  id: number;
  title: string;
};

const BookCard = (props: BookCardProps) => {
  return (
    <View>
      <Text>Book: {props.title}</Text>
    </View>
  );
};

export default BookCard;
