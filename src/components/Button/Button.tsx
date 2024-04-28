import React from 'react'
import classnames from 'classnames';
import type { ButtonProps } from './interfaces';

export const Button: React.FC<ButtonProps> = (props) => {

	const { 
		ariaLabel,
		byPass,
		children,
		label,
		onClick,
		type = 'button',
	} = props

	console.log(byPass);

	// if(typeof byPassProps?.classNames?.root === 'function') {
	// 	console.log(byPassProps.classNames.root(props));
	// }

  return (
		<button
			data-component-section='root'
			aria-label={
				ariaLabel
				? ariaLabel
				: label ? label : undefined
			}
			type={type}
			onClick={onClick}
			className={
				classnames('base-ui__button')
			}
			style={byPass?.root?.style}
		
		>
			<span>{label}</span>
			{children}
		</button>
	);
};

