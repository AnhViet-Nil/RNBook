import { StyleSheet } from 'react-native';

import Typography from './typography';
import Color from './color';

const styleText = StyleSheet.create({
	text_medium_24_grayDark: {
		fontFamily: Typography.FONT_FAMILY_MEDIUM,
		fontSize: Typography.FONT_SIZE_24,
		color: Color.GRAY_DARK,
	},
	text_regular_16_grayMidnight: {
		fontFamily: Typography.FONT_FAMILY_REGULAR,
		fontSize: Typography.FONT_SIZE_16,
		color: Color.GRAY_MIDNIGHT,
	},
	text_regular_14_graymidnight: {
		fontFamily: Typography.FONT_FAMILY_REGULAR,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.GRAY_MIDNIGHT,
	},
	text_regular_14_graylight: {
		fontFamily: Typography.FONT_FAMILY_REGULAR,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.GRAY_LIGHT,
	},
	text_regular_14_white: {
		fontFamily: Typography.FONT_FAMILY_REGULAR,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.WHITE,
	},
	text_italic_14_grayDark: {
		fontFamily: Typography.FONT_FAMILY_ITALIC,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.GRAY_DARK,
	},
	text_italic_14_orange: {
		fontFamily: Typography.FONT_FAMILY_ITALIC,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.ORANGE,
	},
	text_italic_14_grayLight: {
		fontFamily: Typography.FONT_FAMILY_ITALIC,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.GRAY_LIGHT,
	},
	text_medium_14_gray: {
		fontFamily: Typography.FONT_FAMILY_MEDIUM,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.GRAY,
	},
	text_medium_14_white: {
		fontFamily: Typography.FONT_FAMILY_MEDIUM,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.WHITE,
	},
	text_medium_14_orange: {
		fontFamily: Typography.FONT_FAMILY_MEDIUM,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.ORANGE,
	},
	text_medium_14_grayMidnight: {
		fontFamily: Typography.FONT_FAMILY_MEDIUM,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.GRAY_MIDNIGHT,
	},
	text_mediumItalic_14_grayLight: {
		fontFamily: Typography.FONT_FAMILY_MEDIUM_ITALIC,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.GRAY_LIGHT,
	},
	text_bold_14_midnight: {
		fontFamily: Typography.FONT_FAMILY_REGULAR,
		fontSize: Typography.FONT_SIZE_14,
		color: Color.GRAY_MIDNIGHT,
	},
	text_italic_12_grayDark: {
		fontFamily: Typography.FONT_FAMILY_ITALIC,
		fontSize: Typography.FONT_SIZE_12,
		color: Color.GRAY_DARK,
	},
});

export default styleText;
