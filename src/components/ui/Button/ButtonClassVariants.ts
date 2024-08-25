import { cva } from 'class-variance-authority';

const variant = {
	default: true,
	outline: true,
	link: true,
}

const severity = {
	default: true,
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

const size ={
	default:'rui-button-size-default',
	sm:		'rui-button-size-sm',
	lg: 	'rui-button-size-lg',
	icon:	'rui-button-size-icon',
}

const raised = {
	true: 'rui-button-raised',
	false: ''
}

const rounded = {
	none: '',
	medium: 'rui-button-rounded-medium',
	full: 'rui-button-rounded-full'
}

export const buttonVariants = cva('rui-button', {
	variants: {
		variant,
		severity,
		size,
		raised,
		rounded,
	},
	compoundVariants: [
		// * Default
		{variant: 'default', severity: 'default', 	class: 'rui-button-default-primary'},
		{variant: 'default', severity: 'secondary', class: 'rui-button-default-secondary'},
		{variant: 'default', severity: 'success', 	class: 'rui-button-default-success'},
		{variant: 'default', severity: 'info', 		class: 'rui-button-default-info'},
		{variant: 'default', severity: 'warning', 	class: 'rui-button-default-warning'},
		{variant: 'default', severity: 'danger', 	class: 'rui-button-default-danger'},
		{variant: 'default', severity: 'help', 		class: 'rui-button-default-help'},
		{variant: 'default', severity: 'light', 	class: 'rui-button-default-light'},
		{variant: 'default', severity: 'dark', 		class: 'rui-button-default-dark'},
		{variant: 'default', severity: 'contrast', 	class: 'rui-button-default-contrast'},
		{variant: 'default', severity: 'ghost', 	class: 'rui-button-default-ghost'},
		
		// * Outline
		{variant: 'outline', severity: 'default', 	class: 'rui-button-outline-primary'},
		{variant: 'outline', severity: 'secondary',	class: 'rui-button-outline-secondary'},
		{variant: 'outline', severity: 'success',	class: 'rui-button-outline-success'},
		{variant: 'outline', severity: 'info', 		class: 'rui-button-outline-info'},
		{variant: 'outline', severity: 'warning', 	class: 'rui-button-outline-warning'},
		{variant: 'outline', severity: 'danger', 	class: 'rui-button-outline-danger'},
		{variant: 'outline', severity: 'help', 		class: 'rui-button-outline-help'},
		{variant: 'outline', severity: 'light', 	class: 'rui-button-outline-light'},
		{variant: 'outline', severity: 'dark', 		class: 'rui-button-outline-dark'},
		{variant: 'outline', severity: 'contrast', 	class: 'rui-button-outline-contrast'},
		{variant: 'outline', severity: 'ghost', 	class: 'rui-button-outline-ghost'},
		
		// * Link
		{variant: 'link', severity: 'default', 	 class: 'rui-button-link-primary'},
		{variant: 'link', severity: 'secondary', class: 'rui-button-link-secondary'},
		{variant: 'link', severity: 'success', 	 class: 'rui-button-link-success'},
		{variant: 'link', severity: 'info', 	 class: 'rui-button-link-info'},
		{variant: 'link', severity: 'warning', 	 class: 'rui-button-link-warning'},
		{variant: 'link', severity: 'danger', 	 class: 'rui-button-link-danger'},
		{variant: 'link', severity: 'help', 	 class: 'rui-button-link-help'},
		{variant: 'link', severity: 'light', 	 class: 'rui-button-link-light'},
		{variant: 'link', severity: 'dark', 	 class: 'rui-button-link-dark'},
		{variant: 'link', severity: 'contrast',  class: 'rui-button-link-contrast'},
		{variant: 'link', severity: 'ghost', 	 class: 'rui-button-link-ghost'},
	],
	defaultVariants: {
		severity: 'default',
		variant: 'default',
		size: 'default',
		raised: false,
		rounded: 'medium',
	},
});

export type ButtonClassVariantProps = typeof buttonVariants;
export type ButtonVariant = keyof typeof variant;
export type ButtonSeverity = keyof typeof severity;
export type ButtonSize = keyof typeof size;
export type ButtonRaised = keyof typeof raised;
export type ButtonRounded = keyof typeof rounded;