import React from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import { connect } from 'react-redux';
import * as actions from 'redux/actions';

// import RNBootSplash from 'react-native-bootsplash';

import RouteApp from './app-navigator';

class Navigation extends React.Component {
	constructor() {
		super();
		// RNBootSplash.hide(); // immediate
		StatusBar.setBarStyle('dark-content', true);
	}

	render() {
		return (
			<NavigationContainer>
				<RouteApp routeName={this.props.token} />
			</NavigationContainer>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		token: state.auth.token,
	};
};

export default connect(mapStateToProps, actions)(Navigation);
