import { cva } from 'class-variance-authority';

const variant = {
	default: true,
	outline: true,
}

const severity = {
	primary: true,
	secondary: true,
	success: true,
	info: true,
	warning: true,
	help: true,
	danger: true,
	light: true,
	dark: true,
	contrast: true,
	ghost: true,
}

const raised = {
	true: 'rui-card-raised',
	false: ''
}

const bordered = {
	true: 'rui-card-bordered',
	false: ''
}

const rounded = {
	none: '',
	medium: 'rui-card-rounded-medium',
}

export const cardVariants = cva('rui-card', {
	variants: {
		bordered,
		raised,
		rounded,
		severity,
		variant,
	},
	compoundVariants: [
		// * Default
		{variant: 'default', severity: 'primary', 	class: 'rui-card-default-primary'},
		{variant: 'default', severity: 'secondary', class: 'rui-card-default-secondary'},
		{variant: 'default', severity: 'success', 	class: 'rui-card-default-success'},
		{variant: 'default', severity: 'info', 		class: 'rui-card-default-info'},
		{variant: 'default', severity: 'warning', 	class: 'rui-card-default-warning'},
		{variant: 'default', severity: 'danger', 	class: 'rui-card-default-danger'},
		{variant: 'default', severity: 'help', 		class: 'rui-card-default-help'},
		{variant: 'default', severity: 'light', 	class: 'rui-card-default-light'},
		{variant: 'default', severity: 'dark', 		class: 'rui-card-default-dark'},
		{variant: 'default', severity: 'contrast', 	class: 'rui-card-default-contrast'},
		
		// * Outline
		{variant: 'outline', severity: 'primary', 	class: 'rui-card-outline-primary'},
		{variant: 'outline', severity: 'secondary',	class: 'rui-card-outline-secondary'},
		{variant: 'outline', severity: 'success',	class: 'rui-card-outline-success'},
		{variant: 'outline', severity: 'info', 		class: 'rui-card-outline-info'},
		{variant: 'outline', severity: 'warning', 	class: 'rui-card-outline-warning'},
		{variant: 'outline', severity: 'danger', 	class: 'rui-card-outline-danger'},
		{variant: 'outline', severity: 'help', 		class: 'rui-card-outline-help'},
		{variant: 'outline', severity: 'light', 	class: 'rui-card-outline-light'},
		{variant: 'outline', severity: 'dark', 		class: 'rui-card-outline-dark'},
		{variant: 'outline', severity: 'contrast', 	class: 'rui-card-outline-contrast'},
	],

	defaultVariants: {
		bordered: false,
		raised: false,
		rounded: 'medium',
		severity: 'light',
		variant: 'default',
	},
});

export type CardClassVariantProps = typeof cardVariants;
export type CardVariant = keyof typeof variant;
export type CardSeverity = keyof typeof severity;
export type CardRaised = keyof typeof raised;
export type CardRounded = keyof typeof rounded;