import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';

import {selectBookById} from './slices.ts';
import BookDetailsView from './components/BookDetailsView.tsx';

const BookDetailsScreen = ({navigation, route}: ScreenProps) => {
  const id = route.params.id;
  const book = useSelector((state: State) => id && selectBookById(state, id));
  useEffect(() => book && navigation.setOptions({title: book.title}));

  if (!book) {
    return <Text>Book not found: {id}</Text>;
  }

  return <BookDetailsView book={book} />;
};

export default BookDetailsScreen;
