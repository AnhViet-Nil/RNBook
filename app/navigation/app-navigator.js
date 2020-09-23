import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as Screen from 'container';
import Routes from './routes';
import RouteTab from './tab-navigator';

const RootApp = createStackNavigator();

const RouteApp = ({ userID }) => (
	<RootApp.Navigator screenOptions={{ animationEnabled: false }}>
		{userID == null ? (
			<RootApp.Screen
				name={Routes.ROUTE_AUTH}
				options={{ headerShown: false }}
				component={Screen.Login}
			/>
		) : (
			<>
				<RootApp.Screen name={Routes.ROUTE_TAB} component={RouteTab} />
				<RootApp.Screen name={Routes.BOOK} component={Screen.Home} />
			</>
		)}
	</RootApp.Navigator>
);

export default RouteApp;
