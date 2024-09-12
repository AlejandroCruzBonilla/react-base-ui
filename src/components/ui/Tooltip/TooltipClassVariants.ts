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
	true: 'rui-tooltip-raised',
	false: ''
}

const rounded = {
	none: '',
	medium: 'rui-tooltip-rounded-medium',
	full: 'rui-tooltip-rounded-full'
}

export const tooltipVariants = cva('rui-tooltip', {
	variants: {
		raised,
		rounded,
		severity,
		variant,
	},
	compoundVariants: [
		// * Default
		{variant: 'default', severity: 'primary', 	class: 'rui-tooltip-default-primary'},
		{variant: 'default', severity: 'secondary', class: 'rui-tooltip-default-secondary'},
		{variant: 'default', severity: 'success', 	class: 'rui-tooltip-default-success'},
		{variant: 'default', severity: 'info', 		class: 'rui-tooltip-default-info'},
		{variant: 'default', severity: 'warning', 	class: 'rui-tooltip-default-warning'},
		{variant: 'default', severity: 'danger', 	class: 'rui-tooltip-default-danger'},
		{variant: 'default', severity: 'help', 		class: 'rui-tooltip-default-help'},
		{variant: 'default', severity: 'light', 	class: 'rui-tooltip-default-light'},
		{variant: 'default', severity: 'dark', 		class: 'rui-tooltip-default-dark'},
		{variant: 'default', severity: 'contrast', 	class: 'rui-tooltip-default-contrast'},
		
		// * Outline
		{variant: 'outline', severity: 'primary', 	class: 'rui-tooltip-outline-primary'},
		{variant: 'outline', severity: 'secondary',	class: 'rui-tooltip-outline-secondary'},
		{variant: 'outline', severity: 'success',	class: 'rui-tooltip-outline-success'},
		{variant: 'outline', severity: 'info', 		class: 'rui-tooltip-outline-info'},
		{variant: 'outline', severity: 'warning', 	class: 'rui-tooltip-outline-warning'},
		{variant: 'outline', severity: 'danger', 	class: 'rui-tooltip-outline-danger'},
		{variant: 'outline', severity: 'help', 		class: 'rui-tooltip-outline-help'},
		{variant: 'outline', severity: 'light', 	class: 'rui-tooltip-outline-light'},
		{variant: 'outline', severity: 'dark', 		class: 'rui-tooltip-outline-dark'},
		{variant: 'outline', severity: 'contrast', 	class: 'rui-tooltip-outline-contrast'},
	],
	defaultVariants: {
		raised: false,
		rounded: 'medium',
		severity: 'primary',
		variant: 'default',
	},
});

export type TooltipClassVariantProps = typeof tooltipVariants;
export type TooltipVariant = keyof typeof variant;
export type TooltipSeverity = keyof typeof severity;
export type TooltipRaised = keyof typeof raised;
export type TooltipRounded = keyof typeof rounded;