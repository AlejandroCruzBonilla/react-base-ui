import type { ByPassProps, ByPass } from '../../interfaces';


export interface ButtonProps {
	ariaLabel?: string;
	byPass?: ButtonByPass;
  children?: React.ReactNode;
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface ButtonByPass extends ByPass<ButtonProps>{
	root?:	ByPassProps<ButtonProps>;
	label?:	ByPassProps<ButtonProps>;
}