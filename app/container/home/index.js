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

class Home extends React.Component {
	handleNavigateAuth = () => {
		this.props.removeToken();
	};

	render() {
		return (
			<SafeAreaView style={styles.view_screen}>
				<Button title={'logout'} onPress={this.handleNavigateAuth} />
			</SafeAreaView>
		);
	}
}

export default connect(null, actions)(Home);
