import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectActiveBooks, selectFormats, selectIsLoading} from './slices';

import BooksList from './components/BooksList';
import HamburgerButton from './components/HamburgerButton';
import {Sidebar} from './components/Sidebar';

const Loading = () => {
  return <Text>Loading</Text>;
};

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
  },
  content: {
    flex: 1,
    backgroundColor: '#ffc', // DEBUG
  },
});

const BooksListScreen = ({navigation}: ScreenProps) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [showSidebar, setShowSidebar] = useState(false);
  const books = useSelector(selectActiveBooks);
  const formats = useSelector(selectFormats);
  const toggleSidebar = () => setShowSidebar((showSidebar) => !showSidebar)

  useEffect(() => {
    dispatch({type: 'BOOKS_FETCH_REQUESTED'});
  }, [dispatch]);

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerLeft: () => (
        <HamburgerButton onPress={toggleSidebar} />
      ),
    });
  }, [navigation]);

  const navigateToBook = (bookId: number) => {
    navigation.navigate('Book', {id: bookId});
  };

  const selectFilter = (filter: string) => {
    dispatch({type: 'BOOKS_FILTER_CHANGED', filter});
    setShowSidebar(false);
  };

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar />
      {showSidebar && <Sidebar formats={formats} selectFilter={selectFilter} />}
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
