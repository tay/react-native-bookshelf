/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './src/reducers';
import mySaga from './src/sagas';

import BookDetailsScreen from './src/BookDetailsScreen.tsx';
import BooksListScreen from './src/BooksListScreen.tsx';

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
            options={{headerShown: false}}
          />
          <Stack.Screen name="Book" component={BookDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
