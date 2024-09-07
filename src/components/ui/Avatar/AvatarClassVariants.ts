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

const size ={
	sm:		'rui-avatar-size-sm',
	medium: 'rui-avatar-size-medium',
	lg: 	'rui-avatar-size-lg',
}

const raised = {
	true: 'rui-avatar-raised',
	false: ''
}

const rounded = {
	none: '',
	medium: 'rui-avatar-rounded-medium',
	full: 'rui-avatar-rounded-full'
}

export const avatarVariants = cva('rui-avatar', {
	variants: {
		raised,
		rounded,
		severity,
		size,
		variant,
	},
	compoundVariants: [
		// * Default
		{variant: 'default', severity: 'primary', 	class: 'rui-avatar-default-primary'},
		{variant: 'default', severity: 'secondary', class: 'rui-avatar-default-secondary'},
		{variant: 'default', severity: 'success', 	class: 'rui-avatar-default-success'},
		{variant: 'default', severity: 'info', 		class: 'rui-avatar-default-info'},
		{variant: 'default', severity: 'warning', 	class: 'rui-avatar-default-warning'},
		{variant: 'default', severity: 'danger', 	class: 'rui-avatar-default-danger'},
		{variant: 'default', severity: 'help', 		class: 'rui-avatar-default-help'},
		{variant: 'default', severity: 'light', 	class: 'rui-avatar-default-light'},
		{variant: 'default', severity: 'dark', 		class: 'rui-avatar-default-dark'},
		{variant: 'default', severity: 'contrast', 	class: 'rui-avatar-default-contrast'},
		{variant: 'default', severity: 'ghost', 	class: 'rui-avatar-default-ghost'},
		
		// * Outline
		{variant: 'outline', severity: 'primary', 	class: 'rui-avatar-outline-primary'},
		{variant: 'outline', severity: 'secondary',	class: 'rui-avatar-outline-secondary'},
		{variant: 'outline', severity: 'success',	class: 'rui-avatar-outline-success'},
		{variant: 'outline', severity: 'info', 		class: 'rui-avatar-outline-info'},
		{variant: 'outline', severity: 'warning', 	class: 'rui-avatar-outline-warning'},
		{variant: 'outline', severity: 'danger', 	class: 'rui-avatar-outline-danger'},
		{variant: 'outline', severity: 'help', 		class: 'rui-avatar-outline-help'},
		{variant: 'outline', severity: 'light', 	class: 'rui-avatar-outline-light'},
		{variant: 'outline', severity: 'dark', 		class: 'rui-avatar-outline-dark'},
		{variant: 'outline', severity: 'contrast', 	class: 'rui-avatar-outline-contrast'},
		{variant: 'outline', severity: 'ghost', 	class: 'rui-avatar-outline-ghost'},
	],
	defaultVariants: {
		raised: false,
		rounded: 'full',
		severity: 'primary',
		size: 'medium',
		variant: 'default',
	},
});

export type AvatarClassVariantProps = typeof avatarVariants;
export type AvatarVariant = keyof typeof variant;
export type AvatarSeverity = keyof typeof severity;
export type AvatarSize = keyof typeof size;
export type AvatarRaised = keyof typeof raised;
export type AvatarRounded = keyof typeof rounded;