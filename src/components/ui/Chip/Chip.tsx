import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { chipVariants } from './ChipClassVariants';

interface ChipProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof chipVariants> {
	value?: string;
}

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(
	(
		{
			className,
			raised,
			rounded,
			severity,
			variant,
			value,
			children,
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				className={cn(
					chipVariants({
						variant,
						severity,
						raised,
						rounded,
						className,
					}),
				)}
				{...props}
			>
				{value ? value : children}
			</div>
		);
	},
);

Chip.displayName = 'Chip';

export { Chip, chipVariants, ChipProps };
