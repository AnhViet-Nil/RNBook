import React from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';

import {
	GoogleSignin,
	statusCodes,
} from '@react-native-community/google-signin';

import { connect } from 'react-redux';
import * as actions from 'redux/actions';

import { Color } from 'styles';
import AppConfig from 'utils/appConfig';

const styles = StyleSheet.create({
	view_screen: {
		flex: 1,
		backgroundColor: Color.WHITE,
	},
});

class Login extends React.Component {
	constructor() {
		super();
		GoogleSignin.configure({
			webClientId: AppConfig.CLIENT_ID_GOOGLE,
			offlineAccess: true,
			iosClientId: AppConfig.CLIENT_ID_IOS,
		});
	}

	handleSignInGoogle = async () => {
		try {
			await GoogleSignin.hasPlayServices({
				showPlayServicesUpdateDialog: true,
			});
			const userInfo = await GoogleSignin.signIn();
			this.props.saveInfoUser(
				userInfo.user.id,
				userInfo.user.email,
				userInfo.user.photo,
				userInfo.user.name,
			);
		} catch (error) {
			if (error.code === statusCodes.SIGN_IN_CANCELLED) {
				console.log('Login Cancel ', statusCodes.SIGN_IN_CANCELLED);
			} else if (error.code === statusCodes.IN_PROGRESS) {
				console.log('Login InProgress ', statusCodes.IN_PROGRESS);
			} else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
				console.log(
					'Login Not Available ',
					statusCodes.PLAY_SERVICES_NOT_AVAILABLE,
				);
			} else {
				console.log('Login Error ', error);
			}
		}
	};

	render() {
		return (
			<SafeAreaView style={styles.view_screen}>
				<Button title={'login'} onPress={this.handleSignInGoogle} />
			</SafeAreaView>
		);
	}
}

export default connect(null, actions)(Login);
