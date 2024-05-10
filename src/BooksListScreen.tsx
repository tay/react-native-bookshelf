import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {selectActiveBooks, selectFormats, selectIsLoading} from './slices';

import BooksList from './components/BooksList.tsx';
import HamburgerButton from './components/HamburgerButton.tsx';

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

type SidebarProps = {
  formats: Array<string>;
  selectFilter: (filter: string) => void;
};
const Sidebar = ({formats, selectFilter}: SidebarProps) => {
  return (
    <View>
      <Text>Genres</Text>
      {formats.map(format => (
        <TouchableHighlight key={format} onPress={() => selectFilter(format)}>
          <Text>{format}</Text>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const BooksListScreen = ({navigation}: {navigation: Navigation}) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const [showSidebar, setShowSidebar] = useState(false);
  const books = useSelector(selectActiveBooks);
  const formats = useSelector(selectFormats);

  useEffect(() => {
    dispatch({type: 'BOOKS_FETCH_REQUESTED'});
  }, [dispatch]);

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerLeft: () => (
        <HamburgerButton onPress={() => setShowSidebar(true)} />
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
