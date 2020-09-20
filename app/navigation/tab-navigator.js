import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Image, Color } from 'styles';
import I18n from 'language';

import * as Screen from 'container';
import { IconTab } from 'component';

import Routes from './routes';

const StackTab = createStackNavigator();
const RootTab = createBottomTabNavigator();

const StackHome = () => (
	<StackTab.Navigator>
		<StackTab.Screen name={Routes.HOME} component={Screen.Home} />
	</StackTab.Navigator>
);

const StackQRCode = () => (
	<StackTab.Navigator>
		<StackTab.Screen name={Routes.QR_CODE} component={Screen.QRCode} />
	</StackTab.Navigator>
);

const StackUser = () => (
	<StackTab.Navigator>
		<StackTab.Screen name={Routes.USER} component={Screen.User} />
	</StackTab.Navigator>
);

const tabs = [
	{
		id: 0,
		name: Routes.TAB_HOME,
		component: StackHome,
		label: I18n.t('tab.home'),
		iconActive: Image.HOME_ACTIVE,
		iconInactive: Image.HOME_INACTIVE,
	},
	{
		id: 1,
		name: Routes.TAB_QR_CODE,
		component: StackQRCode,
		label: I18n.t('tab.qrCode'),
		iconActive: Image.QR_CODE_ACTIVE,
		iconInactive: Image.QR_CODE_INACTIVE,
	},
	{
		id: 2,
		name: Routes.TAB_USER,
		component: StackUser,
		label: I18n.t('tab.user'),
		iconActive: Image.USER_ACTIVE,
		iconInactive: Image.USER_INACTIVE,
	},
];

const RouteTab = () => (
	<RootTab.Navigator
		initialRouteName={Routes.TAB_HOME}
		tabBarOptions={{
			activeTintColor: Color.ORANGE,
			inactiveTintColor: Color.GRAY,
		}}>
		{tabs.map((tab) => (
			<RootTab.Screen
				key={tab.id}
				name={tab.name}
				component={tab.component}
				options={{
					tabBarLabel: tab.label,
					tabBarIcon: ({ focused }) => (
						<IconTab source={focused ? tab.iconActive : tab.iconInactive} />
					),
				}}
			/>
		))}
	</RootTab.Navigator>
);

export default RouteTab;
