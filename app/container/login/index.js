import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { StyleView } from 'styles';

import ViewBanner from './viewBanner';
import ViewInfo from './viewInfo';
import ViewAction from './viewAction';

const styles = StyleSheet.create({
	...StyleView,
});

export default class Login extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.view_screen}>
				<ViewBanner />
				<ViewInfo />
				<ViewAction />
			</SafeAreaView>
		);
	}
}
