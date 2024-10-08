import * as React from 'react';

import { cn } from '@/lib/utils';

const CardBody = React.forwardRef<
	HTMLDivElement,
	React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
	<div ref={ref} className={cn('rui-card__body', className)} {...props} />
));
CardBody.displayName = 'CardBody';

export { CardBody };
