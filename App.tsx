/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './src/reducers';
import mySaga from './src/sagas';

import BooksListScreen from './src/BooksListScreen';
import BookDetailsScreen from './src/BookDetailsScreen';
import HamburgerButton from './src/components/HamburgerButton';
import SearchInput from './src/components/SearchInput';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Mount it on the Store
const store = configureStore({
  reducer,
  preloadedState: {
    isLoading: true,
    books: [],
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

// Then run the saga
sagaMiddleware.run(mySaga);

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  // @ts-ignore
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Library"
            component={BooksListScreen}
            options={() => ({
              headerLeft: () => (
                <HamburgerButton
                  onPress={() => {
                    return;
                  }}
                />
              ), // required to prevent FOUC
              headerRight: () => <SearchInput />,
            })}
          />
          <Stack.Screen name="Book" component={BookDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
