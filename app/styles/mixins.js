import { Dimensions, PixelRatio } from 'react-native';

// Size Iphone X/XS/11 Pro 375 x 812 px
const baseWidthX = 375;
const baseHeightX = 812;

const { WINDOW_WIDTH, WINDOW_HEIGHT } = Dimensions.get('window');

const scaleSizeHeight = (size) =>
	Math.round((WINDOW_HEIGHT / baseWidthX) * size);
const scaleSizeWidth = (size) =>
	Math.round((WINDOW_WIDTH / baseHeightX) * size);

const scaleFont = (size) => size * PixelRatio.getFontScale();

const dimensions = (top, right, bottom = top, left = right, property) => {
	const styles = {};

	styles[`${property}Top`] = top;
	styles[`${property}Top`] = right;
	styles[`${property}Top`] = bottom;
	styles[`${property}Top`] = left;
	return styles;
};

const margin = (top, right, bottom, left) => {
	return dimensions(top, right, bottom, left, 'margin');
};

const padding = (top, right, bottom, left) => {
	return dimensions(top, right, bottom, left, 'padding');
};

const boxShadow = (
	color,
	offset = { height: 3, width: 3 },
	radius = 8,
	opacity = 0.2,
) => {
	return {
		shadowColor: color,
		shadowOffset: offset,
		shadowOpacity: opacity,
		shadowRadius: radius,
		elevation: radius,
	};
};

export {
	margin,
	padding,
	boxShadow,
	scaleFont,
	scaleSizeHeight,
	scaleSizeWidth,
};
