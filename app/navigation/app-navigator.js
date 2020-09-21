import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as Screen from 'container';
import Routes from './routes';
import RouteTab from './tab-navigator';

const RootApp = createStackNavigator();

const RouteApp = ({ routeName }) => (
	<RootApp.Navigator screenOptions={{ animationEnabled: false }}>
		{routeName ? (
			<>
				<RootApp.Screen name={Routes.ROUTE_TAB} component={RouteTab} />
				<RootApp.Screen name={Routes.BOOK} component={Screen.Home} />
			</>
		) : (
			<RootApp.Screen
				name={Routes.ROUTE_AUTH}
				options={{ headerShown: false }}
				component={Screen.Login}
			/>
		)}
	</RootApp.Navigator>
);

export default RouteApp;
