module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react-hooks/recommended',
		'plugin:storybook/recommended',
		"plugin:prettier/recommended",
	],
	ignorePatterns: [
		'dist',
		'.eslintrc.cjs',
		'.prettierrc.cjs',
		'webpack.config.cjs'
	],
	parser: '@typescript-eslint/parser',
	plugins: ['react-refresh', "prettier"],
	rules: {
		"@typescript-eslint/consistent-type-imports": "error",
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
	},
}
