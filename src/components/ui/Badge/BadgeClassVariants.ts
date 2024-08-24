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
	dark: true,
	light: true,
	ghost: true,
}

const size ={
	default:'rui-badge-size-default',
	sm:		'rui-badge-size-sm',
	lg: 	'rui-badge-size-lg',
	icon:	'rui-badge-size-icon',
}

const raised = {
	true: 'rui-badge-raised',
	false: ''
}

const rounded = {
	true: 'rui-badge-rounded',
	false: ''
}

export const badgeVariants = cva('rui-badge', {
	variants: {
		variant,
		severity,
		size,
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
		{variant: 'outline', severity: 'ghost', 	class: 'rui-badge-outline-ghost'},
		
		//* Outline
		{variant: 'link', severity: 'default', 	 class: 'rui-badge-link-primary'},
		{variant: 'link', severity: 'secondary', class: 'rui-badge-link-secondary'},
		{variant: 'link', severity: 'success', 	 class: 'rui-badge-link-success'},
		{variant: 'link', severity: 'info', 	 class: 'rui-badge-link-info'},
		{variant: 'link', severity: 'warning', 	 class: 'rui-badge-link-warning'},
		{variant: 'link', severity: 'help', 	 class: 'rui-badge-link-help'},
		{variant: 'link', severity: 'danger', 	 class: 'rui-badge-link-danger'},
		{variant: 'link', severity: 'dark', 	 class: 'rui-badge-link-dark'},
		{variant: 'link', severity: 'light', 	 class: 'rui-badge-link-light'},
		{variant: 'link', severity: 'ghost', 	 class: 'rui-badge-link-ghost'},
	],
	defaultVariants: {
		severity: 'default',
		variant: 'default',
		size: 'default',
		raised: false,
		rounded: false,
	},
});

export type BadgeClassVariantProps = typeof badgeVariants;
export type BadgeVariant = keyof typeof variant;
export type BadgeSeverity = keyof typeof severity;
export type BadgeSize = keyof typeof size;
export type BadgeRaised = keyof typeof raised;
export type BadgeRounded = keyof typeof rounded;