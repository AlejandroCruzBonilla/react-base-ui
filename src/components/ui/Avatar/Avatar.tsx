import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { AvatarContext } from './AvatarContext';
import {
	avatarVariants,
	type AvatarClassVariantProps,
} from './AvatarClassVariants';

interface AvatarProps
	extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
		VariantProps<AvatarClassVariantProps> {
	src?: string;
	fallback?: string | React.ReactNode;
}

const Avatar = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Root>,
	AvatarProps
>(
	(
		{
			className,
			fallback,
			raised,
			rounded,
			severity,
			size,
			src,
			variant,
			...props
		},
		ref,
	) => (
		<AvatarContext.Provider value={{ src, fallback }}>
			<AvatarPrimitive.Root
				ref={ref}
				className={cn(
					avatarVariants({
						raised,
						rounded,
						severity,
						size,
						variant,
						className,
					}),
				)}
				{...props}
			/>
		</AvatarContext.Provider>
	),
);
Avatar.displayName = AvatarPrimitive.Root.displayName;

export { Avatar, AvatarProps };
