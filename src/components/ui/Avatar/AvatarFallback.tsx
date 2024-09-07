import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
// import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { AvatarContext } from './AvatarContext';

interface AvatarFallbackProps
	extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback> {}

const AvatarFallback = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Fallback>,
	AvatarFallbackProps
>(({ className, children, ...props }, ref) => {
	const avatarContext = React.useContext(AvatarContext);

	const avatarFallback =
		children ? children
		: avatarContext.fallback ? avatarContext.fallback
		: '';
	return (
		<AvatarPrimitive.Fallback
			ref={ref}
			className={cn(
				'rui-avatar__fallback',
				className,
			)}
			{...props}
		>
			{avatarFallback}
		</AvatarPrimitive.Fallback>
	);
});
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;

export { AvatarFallback, AvatarFallbackProps };
