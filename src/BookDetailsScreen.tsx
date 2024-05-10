import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectBookById} from './slices';

const BookDetailsScreenMenubar = ({book}: {book: Book}) => {
  return <Text>{book.title}</Text>;
};

const BookDetailsScreen = ({
  route,
  navigation,
}: {
  route: RouteType;
  navigation: any;
}) => {
  // @ts-ignore
  const id: number = route.params.id;
  const book = useSelector(state => selectBookById(state, id));
  if (!book) {
    return (
      <View>
        <Text>Book not found: {id}</Text>
      </View>
    );
  }
  navigation.setOptions({title: book.title});

  return (
    <SafeAreaView>
      <View>
        <Text>Book: {book.title}</Text>
        <Text>Author: {book.creators.items.map(c => c.name).join(', ')}</Text>
        <Text>No. Pages: {book.pageCount}</Text>
        <Text>ISBN: {book.isbn}</Text>
        <Text>Synopsis: Blah de blah</Text>
      </View>
    </SafeAreaView>
  );
};

export default BookDetailsScreen;
