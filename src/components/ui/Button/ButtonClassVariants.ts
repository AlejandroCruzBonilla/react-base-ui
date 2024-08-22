import { cva } from 'class-variance-authority';


// link: 'text-primary underline-offset-4 hover:underline',


const variant = {
	default: '',
	outline: '',
	link: '',
}
const severity = {
	default: '',
	secondary: '',
	success: '',
	info: '',
	warning: '',
	help: '',
	danger: '',
	dark: '',
	light: '',
	ghost: '',
}

const size ={
	default: 'h-10 px-4 py-2',
	sm: 'h-9 rounded-md px-3',
	lg: 'h-11 rounded-md px-8',
	icon: 'h-10 w-10',
}

export const buttonVariants = cva('rui-button', {
	variants: {
		variant,
		severity,
		size,
	},
	compoundVariants: [
		// Default
		{variant: 'default', severity: 'default', 	class: 'rui-button-default-primary'},
		{variant: 'default', severity: 'secondary', class: 'rui-button-default-secondary'},
		{variant: 'default', severity: 'success', 	class: 'rui-button-default-success'},
		{variant: 'default', severity: 'info', 		class: 'rui-button-default-info'},
		{variant: 'default', severity: 'warning', 	class: 'rui-button-default-warning'},
		{variant: 'default', severity: 'help', 		class: 'rui-button-default-help'},
		{variant: 'default', severity: 'danger', 	class: 'rui-button-default-danger'},
		{variant: 'default', severity: 'dark', 		class: 'rui-button-default-dark'},
		{variant: 'default', severity: 'light', 	class: 'rui-button-default-light'},
		{variant: 'default', severity: 'ghost', 	class: 'rui-button-default-ghost'},
		// Outline
		{variant: 'outline', severity: 'default', 	class: 'rui-button-outline-primary'},
		{variant: 'outline', severity: 'secondary', class: 'rui-button-outline-secondary'},
		{variant: 'outline', severity: 'success', 	class: 'rui-button-outline-success'},
		{variant: 'outline', severity: 'info', 		class: 'rui-button-outline-info'},
		{variant: 'outline', severity: 'warning', 	class: 'rui-button-outline-warning'},
		{variant: 'outline', severity: 'help', 		class: 'rui-button-outline-help'},
		{variant: 'outline', severity: 'danger', 	class: 'rui-button-outline-danger'},
		{variant: 'outline', severity: 'dark', 		class: 'rui-button-outline-dark'},
		{variant: 'outline', severity: 'light', 	class: 'rui-button-outline-light'},
		{variant: 'outline', severity: 'ghost', 	class: 'rui-button-outline-ghost'},
	],
	defaultVariants: {
		severity: 'default',
		variant: 'default',
		size: 'default',
	},
});

export type ButtonClassVariantProps = typeof buttonVariants;
export type ButtonVariant = keyof typeof variant;
export type ButtonSeverity = keyof typeof severity;
export type ButtonSize = keyof typeof size;