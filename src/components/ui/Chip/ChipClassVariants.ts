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
	dark: true,
	light: true,
	contrast: true,
	ghost: true,
}

const raised = {
	true: 'rui-chip-raised',
	false: ''
}

const rounded = {
	none: '',
	medium: 'rui-chip-rounded-medium',
	full: 'rui-chip-rounded-full'
}

export const chipVariants = cva('rui-chip', {
	variants: {
		variant,
		severity,
		raised,
		rounded,
	},
	compoundVariants: [
		// * Default
		{variant: 'default', severity: 'primary', 	class: 'rui-chip-default-primary'},
		{variant: 'default', severity: 'secondary', class: 'rui-chip-default-secondary'},
		{variant: 'default', severity: 'success', 	class: 'rui-chip-default-success'},
		{variant: 'default', severity: 'info', 		class: 'rui-chip-default-info'},
		{variant: 'default', severity: 'warning', 	class: 'rui-chip-default-warning'},
		{variant: 'default', severity: 'help', 		class: 'rui-chip-default-help'},
		{variant: 'default', severity: 'danger', 	class: 'rui-chip-default-danger'},
		{variant: 'default', severity: 'dark', 		class: 'rui-chip-default-dark'},
		{variant: 'default', severity: 'light', 	class: 'rui-chip-default-light'},
		{variant: 'default', severity: 'contrast', 	class: 'rui-chip-default-contrast'},
		{variant: 'default', severity: 'ghost', 	class: 'rui-chip-default-ghost'},
		
		// * Outline
		{variant: 'outline', severity: 'primary', 	class: 'rui-chip-outline-primary'},
		{variant: 'outline', severity: 'secondary',	class: 'rui-chip-outline-secondary'},
		{variant: 'outline', severity: 'success',	class: 'rui-chip-outline-success'},
		{variant: 'outline', severity: 'info', 		class: 'rui-chip-outline-info'},
		{variant: 'outline', severity: 'warning', 	class: 'rui-chip-outline-warning'},
		{variant: 'outline', severity: 'help', 		class: 'rui-chip-outline-help'},
		{variant: 'outline', severity: 'danger', 	class: 'rui-chip-outline-danger'},
		{variant: 'outline', severity: 'dark', 		class: 'rui-chip-outline-dark'},
		{variant: 'outline', severity: 'light', 	class: 'rui-chip-outline-light'},
		{variant: 'outline', severity: 'contrast', 	class: 'rui-chip-outline-contrast'},
		{variant: 'outline', severity: 'ghost', 	class: 'rui-chip-outline-ghost'},
	],
	defaultVariants: {
		severity: 'primary',
		variant: 'default',
		raised: false,
		rounded: 'full',
	},
});

export type ChipClassVariantProps = typeof chipVariants;
export type ChipVariant = keyof typeof variant;
export type ChipSeverity = keyof typeof severity;
export type ChipRaised = keyof typeof raised;
export type ChipRounded = keyof typeof rounded;