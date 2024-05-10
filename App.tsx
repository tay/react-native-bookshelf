/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from './src/reducers';
import mySaga from './src/sagas';

import BooksListPage from './src/BooksListPage.tsx';

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

// Mount it on the Store
const store = configureStore({
  reducer,
  preloadedState: {},
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middleware),
});

// Then run the saga
sagaMiddleware.run(mySaga);

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <BooksListPage />
    </Provider>
  );
}

export default App;
