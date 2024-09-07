import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { longMessageVariants } from './LongMessageClassVariants';

interface LongMessageProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof longMessageVariants> {
	value?: string;
}

const LongMessage = React.forwardRef<HTMLDivElement, LongMessageProps>(
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
					longMessageVariants({
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

LongMessage.displayName = 'LongMessage';

export { LongMessage, longMessageVariants, LongMessageProps };
