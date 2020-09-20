import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';

import { Color } from 'styles';

const styles = StyleSheet.create({
	view_screen: {
		flex: 1,
		backgroundColor: Color.WHITE,
	},
});

export default class QRCode extends React.Component {
	render() {
		return (
			<SafeAreaView style={styles.view_screen}>
				<View />
			</SafeAreaView>
		);
	}
}
