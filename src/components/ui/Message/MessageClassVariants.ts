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
	ghost: true,
}

const raised = {
	true: 'rui-message-raised',
	false: ''
}

const rounded = {
	true: 'rui-message-rounded',
	false: ''
}

export const messageVariants = cva('rui-message', {
	variants: {
		variant,
		severity,
		raised,
		rounded,
	},
	compoundVariants: [
		// * Default
		{variant: 'default', severity: 'default', 	class: 'rui-message-default-primary'},
		{variant: 'default', severity: 'secondary', class: 'rui-message-default-secondary'},
		{variant: 'default', severity: 'success', 	class: 'rui-message-default-success'},
		{variant: 'default', severity: 'info', 		class: 'rui-message-default-info'},
		{variant: 'default', severity: 'warning', 	class: 'rui-message-default-warning'},
		{variant: 'default', severity: 'help', 		class: 'rui-message-default-help'},
		{variant: 'default', severity: 'danger', 	class: 'rui-message-default-danger'},
		{variant: 'default', severity: 'dark', 		class: 'rui-message-default-dark'},
		{variant: 'default', severity: 'light', 	class: 'rui-message-default-light'},
		{variant: 'default', severity: 'ghost', 	class: 'rui-message-default-ghost'},
		
		// * Outline
		{variant: 'outline', severity: 'default', 	class: 'rui-message-outline-primary'},
		{variant: 'outline', severity: 'secondary',	class: 'rui-message-outline-secondary'},
		{variant: 'outline', severity: 'success',	class: 'rui-message-outline-success'},
		{variant: 'outline', severity: 'info', 		class: 'rui-message-outline-info'},
		{variant: 'outline', severity: 'warning', 	class: 'rui-message-outline-warning'},
		{variant: 'outline', severity: 'help', 		class: 'rui-message-outline-help'},
		{variant: 'outline', severity: 'danger', 	class: 'rui-message-outline-danger'},
		{variant: 'outline', severity: 'dark', 		class: 'rui-message-outline-dark'},
		{variant: 'outline', severity: 'light', 	class: 'rui-message-outline-light'},
		{variant: 'outline', severity: 'ghost', 	class: 'rui-message-outline-ghost'},
	],
	defaultVariants: {
		severity: 'default',
		variant: 'default',
		raised: false,
		rounded: false,
	},
});

export type MessageClassVariantProps = typeof messageVariants;
export type MessageVariant = keyof typeof variant;
export type MessageSeverity = keyof typeof severity;
export type MessageRaised = keyof typeof raised;
export type MessageRounded = keyof typeof rounded;