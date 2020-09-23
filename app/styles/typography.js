import Mixins from './mixins';

// Font Family
const FONT_FAMILY_REGULAR = 'AvenirNext-Regular';
const FONT_FAMILY_BOLD = 'AvenirNext-Bold';
const FONT_FAMILY_ITALIC = 'AvenirNext-Italic';
const FONT_FAMILY_MEDIUM = 'AvenirNext-Medium';
const FONT_FAMILY_MEDIUM_ITALIC = 'AvenirNext-MediumItalic';

// Font Size
const FONT_SIZE_24 = Mixins.scaleFont(24);
const FONT_SIZE_16 = Mixins.scaleFont(16);
const FONT_SIZE_14 = Mixins.scaleFont(14);
const FONT_SIZE_12 = Mixins.scaleFont(12);

const Typography = {
	FONT_FAMILY_REGULAR,
	FONT_FAMILY_BOLD,
	FONT_FAMILY_ITALIC,
	FONT_FAMILY_MEDIUM,
	FONT_FAMILY_MEDIUM_ITALIC,
	FONT_SIZE_24,
	FONT_SIZE_16,
	FONT_SIZE_14,
	FONT_SIZE_12,
};
export default Typography;
