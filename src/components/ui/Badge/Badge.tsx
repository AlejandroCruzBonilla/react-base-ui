import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { badgeVariants } from './BadgeClassVariants';

interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
	({ className, raised, rounded, severity, size, variant, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					badgeVariants({
						variant,
						severity,
						size,
						raised,
						rounded,
						className,
					}),
					className,
				)}
				{...props}
			/>
		);
	},
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants, BadgeProps };
