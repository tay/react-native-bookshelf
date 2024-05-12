import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Drawer} from 'react-native-drawer-layout';

import {
  selectBooks,
  selectBooksByFormat,
  selectIsLoading,
  selectFormats,
} from './slices';
import BooksList from './components/BooksList';
import HamburgerButton from './components/HamburgerButton';
import FilterDrawerContent from './components/FilterDrawerContent.tsx';

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
  const [open, setOpen] = React.useState(false);
  const [filter, setFilter] = React.useState<string | null>(null);

  const isLoading = useSelector(selectIsLoading);
  const books = useSelector((state: State) => {
    return filter ? selectBooksByFormat(state, filter) : selectBooks(state);
  });

  const formats = useSelector(selectFormats);

  useEffect(() => {
    dispatch({type: 'BOOKS_FETCH_REQUESTED'});
  }, [dispatch]);

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerLeft: () => (
        <HamburgerButton onPress={() => setOpen(prevOpen => !prevOpen)} />
      ),
    });
  }, [navigation]);

  const navigateToBook = (bookId: number) => {
    navigation.navigate('Book', {id: bookId});
  };

  const selectFilter = (format: string) => {
    setFilter(format);
    setOpen(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar />
      <Drawer
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
        renderDrawerContent={() => (
          <FilterDrawerContent formats={formats} selectFilter={selectFilter} />
        )}>
        <View style={styles.content}>
          <BooksList books={books} navigateToBook={navigateToBook} />
        </View>
      </Drawer>
    </SafeAreaView>
  );
};

export default BooksListScreen;
