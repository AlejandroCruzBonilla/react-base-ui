import * as React from 'react';

import { cn } from '@/lib/utils';

const CardFooter = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('rui-card__footer', className)}
		{...props}
	/>
));
CardFooter.displayName = 'CardFooter';

export { CardFooter };
