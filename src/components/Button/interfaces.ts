import type{ CSSProperties } from 'react';

export interface ButtonProps {
	ariaLabel?: string;
	byPass?: ButtonByPass;
  children?: React.ReactNode;
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface ButtonByPass {
	root?: ButtonBypassProps;
	label?: ButtonBypassProps;
}

export interface ButtonBypassProps {
	className?: string | ((props: ButtonProps) => string);
	style?: CSSProperties;
}
