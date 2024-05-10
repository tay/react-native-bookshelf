import React from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const BookDetailsScreen = ({route}) => {
  const bookId = route.params.id;
  const books = useSelector(state => state.books);
  const book = books.find(book => book.id === bookId); // TODO: Normalise store
  console.log('BOOK', book);
  return (
    <View>
      <Text>Book: {book.title}</Text>
      <Text>Author: {book.creators.items.map(c => c.name).join(', ')}</Text>
      <Text>No. Pages: {book.pageCount}</Text>
      <Text>ISBN: {book.isbn}</Text>
      <Text>Synopsis: Blah de blah</Text>
    </View>
  );
};

export default BookDetailsScreen;
