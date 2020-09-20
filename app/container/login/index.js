import React from 'react';
import { SafeAreaView, Button, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import * as actions from 'redux/actions';

import { Color } from 'styles';

const styles = StyleSheet.create({
	view_screen: {
		flex: 1,
		backgroundColor: Color.WHITE,
	},
});

class Login extends React.Component {
	handleNavigateApp = () => {
		this.props.saveToken('token');
	};

	render() {
		return (
			<SafeAreaView style={styles.view_screen}>
				<Button title={'login'} onPress={this.handleNavigateApp} />
			</SafeAreaView>
		);
	}
}

export default connect(null, actions)(Login);
