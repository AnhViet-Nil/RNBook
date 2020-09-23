import { StyleSheet } from 'react-native';

import Color from './color';

const styleView = StyleSheet.create({
	view_screen: {
		flex: 1,
		backgroundColor: Color.WHITE,
	},
	shadow_bottom: {
		shadowColor: Color.ORANGE,
		shadowOffset: { width: 0, height: 3 },
		shadowOpacity: 0.35,
		shadowRadius: 10,

		elevation: 3,
		backgroundColor: Color.WHITE,
	},
	shadow_top: {
		shadowColor: Color.ORANGE,
		shadowOffset: { width: 0, height: -3 },
		shadowOpacity: 0.35,
		shadowRadius: 10,

		elevation: 3,
		backgroundColor: Color.WHITE,
	},
});

export default styleView;
