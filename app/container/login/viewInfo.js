import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import I18n from 'language';
import { StyleText } from 'styles';

const styles = StyleSheet.create({
	view_container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text_welcome: {
		...StyleText.text_medium_24_grayDark,
		marginBottom: 5,
	},
	text_introductory: {
		...StyleText.text_regular_14_graymidnight,
		width: '70%',
		textAlign: 'center',
	},
});

export default class ViewInfo extends Component {
	render() {
		return (
			<View style={styles.view_container}>
				<Text style={styles.text_welcome}>{I18n.t('login.welcome')}</Text>
				<Text style={styles.text_introductory}>
					{I18n.t('login.introductory')}
				</Text>
			</View>
		);
	}
}
