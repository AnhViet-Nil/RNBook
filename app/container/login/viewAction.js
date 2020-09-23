import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import {
	GoogleSignin,
	statusCodes,
} from '@react-native-community/google-signin';
import { BoxShadow } from 'react-native-shadow';

import { connect } from 'react-redux';
import * as actions from 'redux/actions';

import { Icon } from 'component';
import AppConfig from 'utils/appConfig';

import I18n from 'language';
import { StyleText, Mixins, Color, Photo } from 'styles';

const WIDTH_BUTTON = Mixins.scaleSizeWidth(220);
const HEIGHT_BUTTON = Mixins.scaleSizeWidth(50);

const styles = StyleSheet.create({
	view_container: {
		flex: 1,
		width: '100%',
		alignItems: 'center',
	},
	text_guide: {
		...StyleText.text_italic_14_grayDark,
		marginBottom: 3,
	},
	button_login: {
		alignItems: 'center',
		justifyContent: 'center',
		width: WIDTH_BUTTON,
		height: HEIGHT_BUTTON,
		borderRadius: 5,
		backgroundColor: Color.ORANGE,
	},
});

class ViewAction extends Component {
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
			<View style={styles.view_container}>
				<Text style={styles.text_guide}>{I18n.t('login.guide')}</Text>
				<BoxShadow
					setting={{
						width: WIDTH_BUTTON,
						height: HEIGHT_BUTTON,
						color: Color.ORANGE,
						border: 8,
						radius: 5,
						opacity: 0.2,
						x: 0,
						y: 3,
					}}>
					<TouchableOpacity
						style={styles.button_login}
						onPress={this.handleSignInGoogle}>
						<Icon source={Photo.ICON_GOOGLE} />
					</TouchableOpacity>
				</BoxShadow>
			</View>
		);
	}
}

export default connect(null, actions)(ViewAction);
