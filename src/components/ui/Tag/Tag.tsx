import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { tagVariants } from './TagClassVariants';

interface TagProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof tagVariants> {
	value?: string;
}

const Tag = React.forwardRef<HTMLDivElement, TagProps>(
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
					tagVariants({
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

Tag.displayName = 'Tag';

export { Tag, tagVariants, TagProps };
