module.exports = {
	root: true,
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'airbnb-base',
		'airbnb-typescript/base',
		'plugin:svelte/recommended',
		'plugin:svelte/prettier',
		'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'import'],
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
			},
		},
	],
	parserOptions: {
		project: 'tsconfig.json',
		sourceType: 'module',
		extraFileExtensions: ['.svelte'],
		ecmaVersion: 2020,
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	settings: {
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: 'tsconfig.json',
			},
		},
	},
	rules: {
		'arrow-body-style': ['error', 'as-needed'],
		'prefer-arrow-callback': ['error', { allowNamedFunctions: false }],
		'import/no-extraneous-dependencies': 0,
		'@typescript-eslint/semi': 0,
		'import/prefer-default-export': 0,
		'import/no-mutable-exports': 0,
		'import/extensions': 0,
		'import/no-unresolved': 0,
	},
}
