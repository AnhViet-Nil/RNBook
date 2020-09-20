import I18n from 'i18n-js';
import * as RNLocalize from 'react-native-localize';

import en from './localize/en';
import ja from './localize/ja';

const locales = RNLocalize.getLocales();

if (Array.isArray(locales)) {
	I18n.locale = locales[0].languageTag;
}

I18n.fallbacks = true;
I18n.defaultLocale = 'he';
I18n.translations = {
	en,
	ja,
};

export default I18n;
