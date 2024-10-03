import * as React from 'react';

import { cn } from '@/lib/utils';

const CardHeader = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cn('rui-card__header', className)}
		{...props}
	/>
));
CardHeader.displayName = 'CardHeader';

export { CardHeader };
