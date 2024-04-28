module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'webpack.config.cjs'],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh'],
	rules: {
		"@typescript-eslint/consistent-type-imports": "error",
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],

	},
}