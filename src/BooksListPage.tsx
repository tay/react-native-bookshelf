import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, StatusBar, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useDispatch, useSelector} from 'react-redux';

import BookCard from './BookCard';

const darkMode = false;

const Loading = () => {
  return <Text>Loading</Text>;
};

const BooksList = (props: {books: Array<any>}) => {
  return (
    <>
      <Text>Books</Text>
      {props.books.map((book, _i) => (
        <BookCard key={book.id} id={book.id} title={book.title} />
      ))}
    </>
  );
};

const BooksListPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'BOOKS_FETCH_REQUESTED'});
  }, [dispatch]);

  const books = useSelector(state => state.books);

  return (
    <SafeAreaView>
      <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: darkMode ? Colors.black : Colors.white,
          }}>
          <View>{books ? <BooksList books={books} /> : <Loading />}</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BooksListPage;
