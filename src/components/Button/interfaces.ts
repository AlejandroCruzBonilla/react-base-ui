import type { ReactNode } from 'react';
import type { ByPassProps, ByPass, Severity } from '../../interfaces';

export interface ButtonProps {
	/** ARIA label for accessibility */
	ariaLabel?: string;
	/** ByPass configuration for button */
	byPass?: ButtonByPass;
	/** Content to be rendered inside the button */
	children?: ReactNode;
	/** Disables the button if true */
	disabled?: boolean;
	/** Icon to be displayed alongside the button label */
	icon?: string | ReactNode;
	/** Text label for the button */
	label?: string;
	/** Function triggered when the button is clicked */
	onClick?: () => void;
	/** Rounds the button's corners if true */
	rounded?: boolean;
	/** Severity level of the button */
	severity?: Severity;
	/** Size of the button */
	size?: ButtonSize;
	/** Type of button */
	type?: ButtonType;
	/** Variant of the button:*/
	variant?: ButtonVariant;
}

/** Size options for the button */
export type ButtonSize = 'small' | 'large';

/** Type options for the button */
export type ButtonType = 'button' | 'submit' | 'reset';

/** Variant options for the button */
export type ButtonVariant = 'outline' | 'text';

/** ByPass configuration for Button component */
export interface ButtonByPass extends ByPass<ButtonProps> {
	/** ByPass configuration for the icon element */
	icon?: ByPassProps<ButtonProps>;
	/** ByPass configuration for the label element */
	label?: ByPassProps<ButtonProps>;
	/** ByPass configuration for the root button element */
	root?: ByPassProps<ButtonProps>;
}
