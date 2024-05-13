import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {
  selectBooks,
  selectBooksByFormat,
  selectIsLoading,
  selectFormats,
} from './slices';
import BooksListView from './components/BooksListView';
import FilterDrawerContent from './components/FilterDrawerContent.tsx';

const Loading = () => {
  return <Text>Loading</Text>;
};

const Drawer = createDrawerNavigator();

const FilteredBooksListScreen = ({navigation, route}: ScreenProps) => {
  const format = route.params.format;

  const books = useSelector((state: State) => {
    return format ? selectBooksByFormat(state, format) : selectBooks(state);
  });

  const navigateToBook = (bookId: number) => {
    navigation.navigate('Book', {id: bookId});
  };

  return <BooksListView books={books} navigateToBook={navigateToBook} />;
};

const BooksListScreen = ({navigation}: ScreenProps) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const formats = useSelector(selectFormats);

  useEffect(() => {
    dispatch({type: 'BOOKS_FETCH_REQUESTED'});
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }
  const navigateToFormat = (format: string) => {
    navigation.navigate('FilteredBooksListScreen', {format: format});
  };

  return (
    <Drawer.Navigator
      drawerContent={() => (
        <FilterDrawerContent
          selectFormat={navigateToFormat}
          formats={formats}
        />
      )}>
      <Drawer.Screen
        name="FilteredBooksListScreen"
        options={{title: 'Library', headerTitleAlign: 'left'}}
        initialParams={{filter: null}}
        component={FilteredBooksListScreen}
      />
    </Drawer.Navigator>
  );
};

export default BooksListScreen;
