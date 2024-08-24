import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { badgeVariants } from './BadgeClassVariants';

interface BadgeProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof badgeVariants> {
	value?: string;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
	({ className, raised, rounded, severity, variant, value, children, ...props }, ref) => {
		return (
			<div
				ref={ref}
				className={cn(
					badgeVariants({
						variant,
						severity,
						raised,
						rounded,
						className,
					}),
					className,
				)}
				{...props}
			>
				{ value ? value : children}
			</div>
		);
	},
);

Badge.displayName = 'Badge';

export { Badge, badgeVariants, BadgeProps };
