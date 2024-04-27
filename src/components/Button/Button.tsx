import React from 'react'
import type { ButtonProps } from './interfaces';

export const Button: React.FC<ButtonProps> = ({ label, children, onClick }) => {
  return (
		<button onClick={onClick}>
			{label&&<span>{label}</span>}
			{children}
		</button>
	);
};

