import { cva } from 'class-variance-authority';

const variant = {
	default: true,
	outline: true,
}

const severity = {
	default: true,
	secondary: true,
	success: true,
	info: true,
	warning: true,
	help: true,
	danger: true,
	dark: true,
	light: true,
	contrast: true,
	ghost: true,
}

const raised = {
	true: 'rui-badge-raised',
	false: ''
}

const rounded = {
	none: '',
	default: 'rui-badge-rounded-medium',
	full: 'rui-badge-rounded-full'
}

export const badgeVariants = cva('rui-badge', {
	variants: {
		variant,
		severity,
		raised,
		rounded,
	},
	compoundVariants: [
		// * Default
		{variant: 'default', severity: 'default', 	class: 'rui-badge-default-primary'},
		{variant: 'default', severity: 'secondary', class: 'rui-badge-default-secondary'},
		{variant: 'default', severity: 'success', 	class: 'rui-badge-default-success'},
		{variant: 'default', severity: 'info', 		class: 'rui-badge-default-info'},
		{variant: 'default', severity: 'warning', 	class: 'rui-badge-default-warning'},
		{variant: 'default', severity: 'help', 		class: 'rui-badge-default-help'},
		{variant: 'default', severity: 'danger', 	class: 'rui-badge-default-danger'},
		{variant: 'default', severity: 'dark', 		class: 'rui-badge-default-dark'},
		{variant: 'default', severity: 'light', 	class: 'rui-badge-default-light'},
		{variant: 'default', severity: 'contrast', 	class: 'rui-badge-default-contrast'},
		{variant: 'default', severity: 'ghost', 	class: 'rui-badge-default-ghost'},
		
		// * Outline
		{variant: 'outline', severity: 'default', 	class: 'rui-badge-outline-primary'},
		{variant: 'outline', severity: 'secondary',	class: 'rui-badge-outline-secondary'},
		{variant: 'outline', severity: 'success',	class: 'rui-badge-outline-success'},
		{variant: 'outline', severity: 'info', 		class: 'rui-badge-outline-info'},
		{variant: 'outline', severity: 'warning', 	class: 'rui-badge-outline-warning'},
		{variant: 'outline', severity: 'help', 		class: 'rui-badge-outline-help'},
		{variant: 'outline', severity: 'danger', 	class: 'rui-badge-outline-danger'},
		{variant: 'outline', severity: 'dark', 		class: 'rui-badge-outline-dark'},
		{variant: 'outline', severity: 'light', 	class: 'rui-badge-outline-light'},
		{variant: 'outline', severity: 'contrast', 	class: 'rui-badge-outline-contrast'},
		{variant: 'outline', severity: 'ghost', 	class: 'rui-badge-outline-ghost'},
	],
	defaultVariants: {
		severity: 'default',
		variant: 'default',
		raised: false,
		rounded: 'default',
	},
});

export type BadgeClassVariantProps = typeof badgeVariants;
export type BadgeVariant = keyof typeof variant;
export type BadgeSeverity = keyof typeof severity;
export type BadgeRaised = keyof typeof raised;
export type BadgeRounded = keyof typeof rounded;