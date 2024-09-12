import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import type { VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import {
	tooltipVariants,
	type TooltipClassVariantProps,
} from './TooltipClassVariants';

const TooltipProvider = TooltipPrimitive.Provider;

const TooltipRoot = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipContent = TooltipPrimitive.Content;

const TooltipPortal = TooltipPrimitive.Portal;

const TooltipArrow = TooltipPrimitive.Arrow;

interface TooltipProps
	extends VariantProps<TooltipClassVariantProps>,
		Omit<React.ComponentProps<typeof TooltipPrimitive.Root>, 'children'>,
		Omit<React.ComponentProps<typeof TooltipPrimitive.Portal>, 'children'>,
		Omit<
			React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>,
			'children' | 'content'
		> {
	children: React.ReactNode;
	content: React.ReactNode | string;
	arrowWidth?: number;
	arrowHeight?: number;
	withArrow?: boolean;
	withPortal?: boolean;
}

const Tooltip = React.forwardRef<
	React.ElementRef<typeof TooltipPrimitive.Content>,
	TooltipProps
>(
	(
		{
			//* Root
			defaultOpen,
			open,
			onOpenChange,
			delayDuration,
			disableHoverableContent,
			//* Portal
			container,
			forceMount,
			//* Content
			asChild,
			className,
			//* Arrow
			arrowWidth,
			arrowHeight,
			//* Variants
			raised,
			rounded,
			severity,
			variant,
			//* Custom
			children,
			content,
			withArrow = true,
			withPortal = false,
			//* Rest for Content
			...props
		},
		ref,
	) => {
		const TooltipContentWrapper = React.memo(
			({ forceMount }: { forceMount?: true }) => (
				<TooltipContent
					ref={ref}
					forceMount={forceMount}
					className={cn(
						tooltipVariants({
							raised,
							rounded,
							severity,
							variant,
							className,
						}),
					)}
					{...props}
				>
					{content}
					{withArrow && (
						<TooltipArrow
							width={arrowWidth}
							height={arrowHeight}
							className="rui-tooltip__arrow"
						/>
					)}
				</TooltipContent>
			),
		);

		return (
			<TooltipRoot
				{...{
					defaultOpen,
					open,
					onOpenChange,
					delayDuration,
					disableHoverableContent,
				}}
			>
				<TooltipTrigger asChild={asChild}>{children}</TooltipTrigger>
				{withPortal ?
					<TooltipPortal container={container} forceMount={forceMount}>
						<TooltipContentWrapper />
					</TooltipPortal>
				:	<TooltipContentWrapper forceMount={forceMount} />}
			</TooltipRoot>
		);
	},
);

export {
	Tooltip,
	TooltipProvider,
	TooltipProps,
};
