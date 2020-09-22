import React from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';

import { GoogleSignin } from '@react-native-community/google-signin';

import { connect } from 'react-redux';
import * as actions from 'redux/actions';

import { Color } from 'styles';

const styles = StyleSheet.create({
	view_screen: {
		flex: 1,
		backgroundColor: Color.WHITE,
	},
});

class Home extends React.Component {
	handleSignOutGoogle = async () => {
		try {
			await GoogleSignin.revokeAccess();
			await GoogleSignin.signOut();
			this.props.removeInfoUser();
		} catch (error) {
			console.log('Logout Error', error);
		}
	};

	render() {
		return (
			<SafeAreaView style={styles.view_screen}>
				<Button title={'logout'} onPress={this.handleSignOutGoogle} />
			</SafeAreaView>
		);
	}
}

export default connect(null, actions)(Home);
