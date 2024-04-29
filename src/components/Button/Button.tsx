import React from 'react';
import classnames from 'classnames';
import { useComponentByPass } from '../../hooks/useComponentByPass';
import type { ButtonProps } from './interfaces';

export const Button: React.FC<ButtonProps> = (props) => {
	const {
		ariaLabel,
		byPass,
		children,
		disabled = false,
		label,
		onClick,
		type = 'button',
	} = props;

	const { classNames, styles } = useComponentByPass<ButtonProps>(props, byPass);

	return (
		<button
			data-component-section="root"
			aria-label={ariaLabel ? ariaLabel : label ? label : undefined}
			type={type}
			onClick={onClick}
			className={classnames('base-ui__button', classNames['root'])}
			style={styles['root']}
			disabled={disabled}
		>
			{label && (
				<span
					data-component-section="label"
					className={classnames('base-ui__button-label', classNames['label'])}
					style={styles['label']}
				>
					{label}
				</span>
			)}
			{children}
		</button>
	);
};
