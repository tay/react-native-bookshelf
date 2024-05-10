import React, {useEffect} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import './hamburger.svg';
import BooksList from './BooksList';

const Loading = () => {
  return <Text>Loading</Text>;
};

const styles = StyleSheet.create({
  menubar: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hamburger: {
  },
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
});

const Menubar = () => {
  return (
    <View style={styles.menubar}>
      <Image
        style={{width: 30, height: 30}}
        source={require('./hamburger.svg.png')}
      />
      <Text style={styles.header}>Library</Text>
      <TextInput placeholder="search" style={styles.search} />
    </View>
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
      <StatusBar />
      <Menubar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        {books ? <BooksList books={books} /> : <Loading />}
      </ScrollView>
    </SafeAreaView>
  );
};

export default BooksListPage;
