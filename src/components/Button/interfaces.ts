import type { ByPassProps, ByPass, Severity } from '../../interfaces';

export interface ButtonProps {
	ariaLabel?: string;
	byPass?: ButtonByPass;
	children?: React.ReactNode;
	disabled?: boolean;
	icon?: string | React.ReactNode;
	label?: string;
	onClick?: () => void;
	rounded?: boolean;
	severity?: Severity;
	size?: ButtonSize;
	type?: ButtonType;
	variant?: ButtonVariant;
}

export type ButtonSize = 'small' | 'large';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ButtonVariant = 'outline' | 'text';
export interface ButtonByPass extends ByPass<ButtonProps> {
	icon?: ByPassProps<ButtonProps>;
	label?: ByPassProps<ButtonProps>;
	root?: ByPassProps<ButtonProps>;
}
