module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended'
	],
	'overrides': [
		{
			'env': {
				'node': true
			},
			'files': [
				'.eslintrc.{js,cjs}'
			],
			'parserOptions': {
				'sourceType': 'script'
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module',
	},
	'plugins': [
		'@typescript-eslint',
		'react'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'max-lines': [
			'error',
			300
		],
		'react/react-in-jsx-scope': 'off',
		'no-trailing-spaces': 'error',
		'padding-line-between-statements': 'error',
		'no-console': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'array-bracket-spacing': 'error',
		'max-len': [
			'error',
			150
		],
		'newline-before-return': 1,
		'no-multi-spaces': 1,
		'no-useless-computed-key': 1,
	},
};
