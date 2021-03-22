import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';
import sagas from './sagas';

const persistConfig = {
  key: 'root',
  storage: storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const sagaMiddleware = createSagaMiddleware();
const store: any = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

const persistor = persistStore(store);

export { store, persistor };
