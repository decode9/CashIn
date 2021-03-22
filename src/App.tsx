import { hot } from 'react-hot-loader';
import React from 'react';
import { Main } from './views';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Main/>
    </PersistGate>
  </Provider>
);

export default hot(module)(App)