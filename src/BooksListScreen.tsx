import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import './hamburger.svg';
import BooksList from './BooksList';
import {selectActiveBooks, selectIsLoading} from './slices.ts';

const Loading = () => {
  return <Text>Loading</Text>;
};

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
  navbar: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hamburger: {},
  header: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  search: {
    alignSelf: 'flex-end',
    height: 24,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    width: 100,
  },
  content: {
    flex: 1,
    backgroundColor: '#ffc', // DEBUG
  },
});

const BooksListScreenNavbar = () => {
  return (
    <View style={styles.navbar}>
      <TouchableHighlight>
        <Image
          style={{width: 30, height: 30}}
          source={require('./hamburger.svg.png')}
        />
      </TouchableHighlight>
      <Text style={styles.header}>Library</Text>
      <TextInput placeholder="search" style={styles.search} />
    </View>
  );
};

const BooksListScreen = ({navigation}: {navigation: Navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'BOOKS_FETCH_REQUESTED'});
  }, [dispatch]);

  const isLoading = useSelector(selectIsLoading);
  const books = useSelector(selectActiveBooks);

  const navigateToBook = (bookId: number) => {
    navigation.navigate('Book', {id: bookId});
  };

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar />
      <BooksListScreenNavbar />
      <View style={styles.content}>
        {isLoading ? (
          <Loading />
        ) : (
          <BooksList books={books} navigateToBook={navigateToBook} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default BooksListScreen;
