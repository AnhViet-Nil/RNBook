module.exports = {
	root: true,
	parser: 'babel-eslint',
	env: {
		jest: true,
		es6: true,
	},
	extends: ['@react-native-community', 'airbnb', 'prettier', 'prettier/react'],
	plugins: [
		'import',
		'react',
		'jsx-a11y',
		'eslint-plugin-prettier',
		'eslint-plugin-react',
	],
	rules: {
		'react/prop-types': 0,
		'react/prefer-stateless-function': [0],
		'react/destructuring-assignment': [
			0,
			'always',
			{ ignoreClassFields: true },
		],
		'react/jsx-curly-brace-presence': [
			1,
			{ props: 'always', children: 'always' },
		],
		'react/jsx-filename-extension': [1, { allow: 'as-needed' }],
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
	},
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
