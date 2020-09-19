import { scaleFont } from './mixins';

// Font Family
const FONT_FAMILY_REGULAR = 'AvenirNext-Regular';
const FONT_FAMILY_BOLD = 'AvenirNext-Bold';
const FONT_FAMILY_ITALIC = 'AvenirNext-Italic';
const FONT_FAMILY_MEDIUM = 'AvenirNext-Medium';
const FONT_FAMILY_MEDIUM_ITALIC = 'AvenirNext-MediumItalic';

// Font Weight
const FONT_WEIGHT_REGULAR = '400';
const FONT_WEIGHT_BOLD = '700';

// Font Size
const FONT_SIZE_16 = scaleFont(16);
const FONT_SIZE_14 = scaleFont(14);

// Line Height
const LINE_HEIGHT_20 = scaleFont(20);
const LINE_HEIGHT_16 = scaleFont(16);

// Font Style
const FONT_REGULAR = {
	fontFamily: FONT_FAMILY_REGULAR,
	fontWeight: FONT_WEIGHT_REGULAR,
};
const FONT_BOLD = {
	fontFamily: FONT_FAMILY_BOLD,
	fontWeight: FONT_WEIGHT_BOLD,
};

export {
	FONT_FAMILY_REGULAR,
	FONT_FAMILY_BOLD,
	FONT_FAMILY_ITALIC,
	FONT_FAMILY_MEDIUM,
	FONT_FAMILY_MEDIUM_ITALIC,
	FONT_SIZE_16,
	FONT_SIZE_14,
	LINE_HEIGHT_20,
	LINE_HEIGHT_16,
	FONT_REGULAR,
	FONT_BOLD,
};
