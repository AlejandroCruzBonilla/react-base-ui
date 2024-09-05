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
}

const raised = {
	true: 'rui-skeleton-raised',
	false: ''
}

const rounded = {
	none: '',
	default: 'rui-skeleton-rounded-medium',
	full: 'rui-skeleton-rounded-full'
}

export const skeletonVariants = cva('rui-skeleton', {
	variants: {
		variant,
		severity,
		raised,
		rounded,
	},
	compoundVariants: [
		// * Default
		{variant: 'default', severity: 'default', 	class: 'rui-skeleton-default-primary'},
		{variant: 'default', severity: 'secondary', class: 'rui-skeleton-default-secondary'},
		{variant: 'default', severity: 'success', 	class: 'rui-skeleton-default-success'},
		{variant: 'default', severity: 'info', 		class: 'rui-skeleton-default-info'},
		{variant: 'default', severity: 'warning', 	class: 'rui-skeleton-default-warning'},
		{variant: 'default', severity: 'help', 		class: 'rui-skeleton-default-help'},
		{variant: 'default', severity: 'danger', 	class: 'rui-skeleton-default-danger'},
		{variant: 'default', severity: 'dark', 		class: 'rui-skeleton-default-dark'},
		{variant: 'default', severity: 'light', 	class: 'rui-skeleton-default-light'},
		{variant: 'default', severity: 'contrast', 	class: 'rui-skeleton-default-contrast'},
		
		// * Outline
		{variant: 'outline', severity: 'default', 	class: 'rui-skeleton-outline-primary'},
		{variant: 'outline', severity: 'secondary',	class: 'rui-skeleton-outline-secondary'},
		{variant: 'outline', severity: 'success',	class: 'rui-skeleton-outline-success'},
		{variant: 'outline', severity: 'info', 		class: 'rui-skeleton-outline-info'},
		{variant: 'outline', severity: 'warning', 	class: 'rui-skeleton-outline-warning'},
		{variant: 'outline', severity: 'help', 		class: 'rui-skeleton-outline-help'},
		{variant: 'outline', severity: 'danger', 	class: 'rui-skeleton-outline-danger'},
		{variant: 'outline', severity: 'dark', 		class: 'rui-skeleton-outline-dark'},
		{variant: 'outline', severity: 'light', 	class: 'rui-skeleton-outline-light'},
		{variant: 'outline', severity: 'contrast', 	class: 'rui-skeleton-outline-contrast'},
	],
	defaultVariants: {
		severity: 'default',
		variant: 'default',
		raised: false,
		rounded: 'default',
	},
});

export type SkeletonClassVariantProps = typeof skeletonVariants;
export type SkeletonVariant = keyof typeof variant;
export type SkeletonSeverity = keyof typeof severity;
export type SkeletonRaised = keyof typeof raised;
export type SkeletonRounded = keyof typeof rounded;