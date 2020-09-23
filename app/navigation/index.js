import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import RNBootSplash from 'react-native-bootsplash';

import { connect } from 'react-redux';
import * as actions from 'redux/actions';

import RouteApp from './app-navigator';

class Navigation extends React.Component {
	constructor() {
		super();
		RNBootSplash.hide(); // immediate
		StatusBar.setBarStyle('dark-content', true);
	}

	render() {
		return (
			<NavigationContainer>
				<RouteApp userID={this.props.userID} />
			</NavigationContainer>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userID: state.auth.infoUser.id,
	};
};

export default connect(mapStateToProps, actions)(Navigation);
