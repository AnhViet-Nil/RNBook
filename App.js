/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import { LogBox } from 'react-native';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import Navigation from 'navigation';
import store from 'redux/stores';

export default class App extends React.Component {
	componentDidMount() {
		// LogBox.ignoreLogs()([]);
	}

	render() {
		const persistor = persistStore(store);
		return (
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Navigation />
				</PersistGate>
			</Provider>
		);
	}
}
