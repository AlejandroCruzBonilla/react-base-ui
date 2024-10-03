import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { cardVariants, type CardClassVariantProps } from './CardClassVariants';

interface CardProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<CardClassVariantProps> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
	(
		{ className, bordered, raised, rounded, severity, variant, ...props },
		ref,
	) => (
		<div
			ref={ref}
			className={cn(
				cardVariants({
					bordered,
					raised,
					rounded,
					severity,
					variant,
					className,
				}),
			)}
			{...props}
		/>
	),
);
Card.displayName = 'Card';

export { Card, CardProps };
