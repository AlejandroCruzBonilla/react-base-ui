import * as React from 'react';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
// import type { VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { AvatarContext } from './AvatarContext';

interface AvatarImageProps
	extends React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image> {}

const AvatarImage = React.forwardRef<
	React.ElementRef<typeof AvatarPrimitive.Image>,
	AvatarImageProps
>(({ className, src, ...props }, ref) => {
	const avatarContext = React.useContext(AvatarContext);

	const avatarImage = src || avatarContext.src || '';

	return (
		<AvatarPrimitive.Image
			ref={ref}
			className={cn('rui-avatar__image', className)}
			src={avatarImage}
			{...props}
		/>
	);
});
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export { AvatarImage, AvatarImageProps };
