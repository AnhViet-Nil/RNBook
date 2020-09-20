// You can put your store inside this redux store folder.
import { createStore, applyMiddleware } from 'redux';

import createSagaMiddleware from 'redux-saga';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import rootReducers from 'redux/reducers';
import rootSaga from 'redux/saga';

const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
	whitelist: ['auth'],
};

const persistedReducer = persistReducer(persistConfig, rootReducers);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
