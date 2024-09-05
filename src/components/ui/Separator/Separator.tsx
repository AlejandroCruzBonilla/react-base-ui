import * as React from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import {
	separatorVariants,
	type SeparatorOrientation,
	type SeparatorClassVariantProps,
} from './SeparatorClassVariants';

interface SeparatorProps
	extends 
		React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>,
		VariantProps<SeparatorClassVariantProps> {
			orientation: SeparatorOrientation
		}

const Separator = React.forwardRef<
	React.ElementRef<typeof SeparatorPrimitive.Root>,
	SeparatorProps
>(
	(
		{
			className,
			severity,
			orientation = 'horizontal',
			decorative = true,
			...props
		},
		ref,
	) => (
		<SeparatorPrimitive.Root
			ref={ref}
			decorative={decorative}
			orientation={orientation}
			className={cn(
				separatorVariants({
					severity,
					orientation
				}),
				className,
			)}
			{...props}
		/>
	),
);
Separator.displayName = SeparatorPrimitive.Root.displayName;

export { Separator, SeparatorProps };
