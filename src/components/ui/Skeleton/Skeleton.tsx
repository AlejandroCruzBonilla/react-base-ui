import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

import {
	skeletonVariants,
	type SkeletonClassVariantProps,
} from './SkeletonClassVariants';

interface SkeletonProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<SkeletonClassVariantProps> {}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
	({ className, raised, rounded, severity, variant, ...props }, ref) => {
		return (
			<div
				className={cn(
					skeletonVariants({
						variant,
						severity,
						raised,
						rounded,
						className,
					}),
				)}
				{...props}
				ref={ref}
			/>
		);
	},
);
export { Skeleton, SkeletonProps };
