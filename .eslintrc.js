module.exports = {
	root: true,
	extends: ['@react-native-community'],
	plugins: ['import'],
	settings: {
		'import/resolver': {
			node: {
				paths: ['app'],
				alias: {
					_assets: './app/assets',
					_component: './app/component',
					_container: './app/container',
					_language: './app/language',
					_navigation: './app/navigation',
					_redux: './app/redux',
					_service: './app/service',
					_style: './app/style',
					_utils: './app/utils',
				},
			},
		},
	},
};
