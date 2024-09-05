import { cva } from 'class-variance-authority';


const severity = {
	default: 'rui-separator-default-primary',
	secondary: 'rui-separator-default-secondary',
	success: 'rui-separator-default-success',
	info: 'rui-separator-default-info',
	warning: 'rui-separator-default-warning',
	help: 'rui-separator-default-help',
	danger: 'rui-separator-default-danger',
	dark: 'rui-separator-default-dark',
	light: 'rui-separator-default-light',
	contrast: 'rui-separator-default-contrast',
}

const orientation = {
	horizontal: 'rui-separator-orientation-horizontal',
	vertical: 'rui-separator-orientation-vertical',
}

export const separatorVariants = cva('rui-separator', {
	variants: {
		severity,
		orientation,
	},
	defaultVariants: {
		severity: 'default',
		orientation: 'horizontal',
	},
});

export type SeparatorClassVariantProps = typeof separatorVariants;
export type SeparatorSeverity = keyof typeof severity;
export type SeparatorOrientation = keyof typeof orientation;