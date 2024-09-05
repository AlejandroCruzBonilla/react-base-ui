import { cva } from 'class-variance-authority';

const variant = {
	default: true,
	outline: true,
	link: true,
}

const severity = {
	primary: true,
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
	true: 'rui-tag-raised',
	false: ''
}

const rounded = {
	none: '',
	medium: 'rui-tag-rounded-medium',
	full: 'rui-tag-rounded-full'
}

export const tagVariants = cva('rui-tag', {
	variants: {
		variant,
		severity,
		raised,
		rounded,
	},
	compoundVariants: [
		// * Default
		{variant: 'default', severity: 'primary', 	class: 'rui-tag-default-primary'},
		{variant: 'default', severity: 'secondary', class: 'rui-tag-default-secondary'},
		{variant: 'default', severity: 'success', 	class: 'rui-tag-default-success'},
		{variant: 'default', severity: 'info', 		class: 'rui-tag-default-info'},
		{variant: 'default', severity: 'warning', 	class: 'rui-tag-default-warning'},
		{variant: 'default', severity: 'help', 		class: 'rui-tag-default-help'},
		{variant: 'default', severity: 'danger', 	class: 'rui-tag-default-danger'},
		{variant: 'default', severity: 'dark', 		class: 'rui-tag-default-dark'},
		{variant: 'default', severity: 'light', 	class: 'rui-tag-default-light'},
		{variant: 'default', severity: 'contrast', 	class: 'rui-tag-default-contrast'},
		{variant: 'default', severity: 'ghost', 	class: 'rui-tag-default-ghost'},
		
		// * Outline
		{variant: 'outline', severity: 'primary', 	class: 'rui-tag-outline-primary'},
		{variant: 'outline', severity: 'secondary',	class: 'rui-tag-outline-secondary'},
		{variant: 'outline', severity: 'success',	class: 'rui-tag-outline-success'},
		{variant: 'outline', severity: 'info', 		class: 'rui-tag-outline-info'},
		{variant: 'outline', severity: 'warning', 	class: 'rui-tag-outline-warning'},
		{variant: 'outline', severity: 'help', 		class: 'rui-tag-outline-help'},
		{variant: 'outline', severity: 'danger', 	class: 'rui-tag-outline-danger'},
		{variant: 'outline', severity: 'dark', 		class: 'rui-tag-outline-dark'},
		{variant: 'outline', severity: 'light', 	class: 'rui-tag-outline-light'},
		{variant: 'outline', severity: 'contrast', 	class: 'rui-tag-outline-contrast'},
		{variant: 'outline', severity: 'ghost', 	class: 'rui-tag-outline-ghost'},

		// * Link
		{variant: 'link', severity: 'primary', 	 class: 'rui-tag-link-primary'},
		{variant: 'link', severity: 'secondary', class: 'rui-tag-link-secondary'},
		{variant: 'link', severity: 'success', 	 class: 'rui-tag-link-success'},
		{variant: 'link', severity: 'info', 	 class: 'rui-tag-link-info'},
		{variant: 'link', severity: 'warning', 	 class: 'rui-tag-link-warning'},
		{variant: 'link', severity: 'help', 	 class: 'rui-tag-link-help'},
		{variant: 'link', severity: 'danger', 	 class: 'rui-tag-link-danger'},
		{variant: 'link', severity: 'dark', 	 class: 'rui-tag-link-dark'},
		{variant: 'link', severity: 'light', 	 class: 'rui-tag-link-light'},
		{variant: 'link', severity: 'contrast',	 class: 'rui-tag-link-contrast'},
		{variant: 'link', severity: 'ghost', 	 class: 'rui-tag-link-ghost'},
	],
	defaultVariants: {
		severity: 'primary',
		variant: 'default',
		raised: false,
		rounded: 'medium',
	},
});

export type TagClassVariantProps = typeof tagVariants;
export type TagVariant = keyof typeof variant;
export type TagSeverity = keyof typeof severity;
export type TagRaised = keyof typeof raised;
export type TagRounded = keyof typeof rounded;