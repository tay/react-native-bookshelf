import React from 'react';
import {Text, View} from 'react-native';

type BookPageProps = {
  bookId: number;
};
const BookDetailsPage = ({bookId}: BookPageProps) => {
  return (
    <View>
      <Text>~Book Page~ Book Id: {bookId}</Text>
    </View>
  );
};

export default BookDetailsPage;
