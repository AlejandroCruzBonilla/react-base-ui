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
	true: 'rui-long_message-raised',
	false: ''
}

const rounded = {
	none: '',
	medium: 'rui-long_message-rounded-medium',
}

export const longMessageVariants = cva('rui-long_message', {
	variants: {
		raised,
		rounded,
		severity,
		variant,
	},
	compoundVariants: [
		// * Default
		{variant: 'default', severity: 'primary', 	class: 'rui-long_message-default-primary'},
		{variant: 'default', severity: 'secondary', class: 'rui-long_message-default-secondary'},
		{variant: 'default', severity: 'success', 	class: 'rui-long_message-default-success'},
		{variant: 'default', severity: 'info', 		class: 'rui-long_message-default-info'},
		{variant: 'default', severity: 'warning', 	class: 'rui-long_message-default-warning'},
		{variant: 'default', severity: 'help', 		class: 'rui-long_message-default-help'},
		{variant: 'default', severity: 'danger', 	class: 'rui-long_message-default-danger'},
		{variant: 'default', severity: 'dark', 		class: 'rui-long_message-default-dark'},
		{variant: 'default', severity: 'light', 	class: 'rui-long_message-default-light'},
		{variant: 'default', severity: 'contrast', 	class: 'rui-long_message-default-contrast'},
		{variant: 'default', severity: 'ghost', 	class: 'rui-long_message-default-ghost'},
		
		// * Outline
		{variant: 'outline', severity: 'primary', 	class: 'rui-long_message-outline-primary'},
		{variant: 'outline', severity: 'secondary',	class: 'rui-long_message-outline-secondary'},
		{variant: 'outline', severity: 'success',	class: 'rui-long_message-outline-success'},
		{variant: 'outline', severity: 'info', 		class: 'rui-long_message-outline-info'},
		{variant: 'outline', severity: 'warning', 	class: 'rui-long_message-outline-warning'},
		{variant: 'outline', severity: 'help', 		class: 'rui-long_message-outline-help'},
		{variant: 'outline', severity: 'danger', 	class: 'rui-long_message-outline-danger'},
		{variant: 'outline', severity: 'dark', 		class: 'rui-long_message-outline-dark'},
		{variant: 'outline', severity: 'light', 	class: 'rui-long_message-outline-light'},
		{variant: 'outline', severity: 'contrast', 	class: 'rui-long_message-outline-contrast'},
		{variant: 'outline', severity: 'ghost', 	class: 'rui-long_message-outline-ghost'},
	],
	defaultVariants: {
		raised: false,
		rounded: 'medium',
		severity: 'primary',
		variant: 'default',
	},
});

export type LongMessageClassVariantProps = typeof longMessageVariants;
export type LongMessageVariant = keyof typeof variant;
export type LongMessageSeverity = keyof typeof severity;
export type LongMessageRaised = keyof typeof raised;
export type LongMessageRounded = keyof typeof rounded;