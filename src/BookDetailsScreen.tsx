import React from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {selectBookById} from './slices';
import BookDetailCard from './components/BookDetailCard.tsx';

const BookDetailsScreen = ({navigation, route}: ScreenProps) => {
  const id = route.params.id;
  const book = useSelector((state: State) => id && selectBookById(state, id));

  if (!book) {
    return <Text>Book not found: {id}</Text>;
  }
  navigation.setOptions({title: book.title});

  return <BookDetailCard book={book} />;
};

export default BookDetailsScreen;
