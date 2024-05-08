import React from 'react';
import classnames from 'classnames';
import { useComponentByPass } from '../../hooks/useComponentByPass';
import type { ButtonProps } from './interfaces';

/**
 * * icon.
 * * style variants (rounded, outline, text)
 * * severity variants
 * * sizes
 * * ? add isLoading state
 */

export const Button: React.FC<ButtonProps> = (props) => {
	const {
		ariaLabel,
		byPass,
		children,
		disabled = false,
		icon,
		label,
		onClick,
		rounded = false,
		severity,
		size,
		type = 'button',
		variant,
	} = props;

	const { classNames, styles } = useComponentByPass<ButtonProps>(props, byPass);

	const severityVariantClass =
		severity && variant ? `base-ui__button--${severity}--${variant}`
		: severity ? `base-ui__button--${severity}`
		: variant ? `base-ui__button--${variant}`
		: '';

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
			className={classnames(
				'base-ui__button',
				severityVariantClass,
				size ? `base-ui__button--${size}` : '',
				classNames['root'],
				{ 'base-ui--rounded': rounded },
			)}
			style={styles['root']}
			disabled={disabled}
		>
			{icon && (
				<span
					data-component-section="icon"
					className={classnames('base-ui__button-icon', classNames['icon'])}
					style={styles['icon']}
				>
					{typeof icon === 'string' ?
						<i className={icon} />
					:	icon}
				</span>
			)}
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
