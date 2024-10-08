import * as React from 'react';

import { cn } from '@/lib/utils';

const CardDescription = React.forwardRef<
	HTMLParagraphElement,
	React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
	<p
		ref={ref}
		className={cn('rui-card__description', className)}
		{...props}
	/>
));
CardDescription.displayName = 'CardDescription';

export { CardDescription };
