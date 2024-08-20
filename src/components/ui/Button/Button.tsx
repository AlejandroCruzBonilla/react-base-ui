import React from 'react';
// import { useComponentByPass } from '../../../hooks/useComponentByPass';
import type { ButtonProps } from './interfaces';

export const Button: React.FC<ButtonProps> = (props) => {
	const {
		ariaLabel,
		// byPass,
		children,
		disabled = false,
		icon,
		label,
		onClick,
		// rounded = false,
		// severity,
		// size,
		type = 'button',
		// variant,
	} = props;

	// const { classNames, styles } = useComponentByPass<ButtonProps>(props, byPass);

	// const severityVariantClass =
	// 	severity && variant ? `base-ui__button--${severity}--${variant}`
	// 	: severity ? `base-ui__button--${severity}`
	// 	: variant ? `base-ui__button--${variant}`
	// 	: '';

	return (
		<button
			data-component-section="root"
			aria-label={
				ariaLabel ? ariaLabel
				: label ?
					label
				:	undefined
			}
			type={type}
			onClick={onClick}
			// style={styles['root']}
			disabled={disabled}
		>
			{icon && (
				<span
					data-component-section="icon"
					// style={styles['icon']}
				>
					{typeof icon === 'string' ?
						<i className={icon} />
					:	icon}
				</span>
			)}
			{label && (
				<span
					data-component-section="label"
					// style={styles['label']}
				>
					{label}
				</span>
			)}
			{children}
		</button>
	);
};
