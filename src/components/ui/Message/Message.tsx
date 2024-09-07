import * as React from 'react';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';
import { messageVariants } from './MessageClassVariants';

interface MessageProps
	extends React.HTMLAttributes<HTMLDivElement>,
		VariantProps<typeof messageVariants> {
	value?: string;
}

const Message = React.forwardRef<HTMLDivElement, MessageProps>(
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
					messageVariants({
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

Message.displayName = 'Message';

export { Message, messageVariants, MessageProps };
