import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipProvider } from '../../src/components/ui/Tooltip';

import type { TooltipProps } from '../../src/components/ui/Tooltip';

import { Button } from '../../src/components/ui/Button/Button';
// TODO: Sort Props, add missing props
const meta: Meta<TooltipProps> = {
	title: 'Components/Tooltip',
	component: Tooltip,
	parameters: {
		layout: 'centered',
		controls: { expanded: true, sort: 'alpha' },
	},
	argTypes: {
		disableHoverableContent: {
			control: 'boolean',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
		},
		align: {
			control: 'select',
			options: ['start', 'center', 'end'],
			table: {
				defaultValue: { summary: 'center' },
				type: { summary: 'enum' },
			},
		},
		sideOffset: {
			control: 'number',
			table: {
				defaultValue: { summary: '0' },
				type: { summary: 'number' },
			},
		},
		side: {
			control: 'select',
			options: ['top', 'right', 'bottom', 'left'],
			table: {
				defaultValue: { summary: 'top' },
				type: { summary: 'enum' },
			},
		},
		alignOffset: {
			control: 'number',
			table: {
				defaultValue: { summary: '0' },
				type: { summary: 'number' },
			},
		},
		delayDuration: {
			control: 'number',
			table: {
				defaultValue: { summary: '700' },
				type: { summary: 'number' },
			},
		},
		variant: {
			control: 'select',
			options: ['default', 'outline'],
			table: {
				defaultValue: { summary: 'default' },
				type: { summary: 'TooltipVariant' },
			},
		},
		severity: {
			control: 'select',
			options: [
				'primary',
				'secondary',
				'success',
				'info',
				'warning',
				'help',
				'danger',
				'dark',
				'light',
				'contrast',
			],
			table: {
				defaultValue: { summary: 'primary' },
				type: { summary: 'TooltipSeverity' },
			},
		},
		raised: {
			control: 'boolean',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
		},
		withArrow: {
			control: 'boolean',
			table: {
				defaultValue: { summary: 'true' },
				type: { summary: 'boolean' },
			},
		},
		withPortal: {
			control: 'boolean',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
		},
		forceMount: {
			control: 'inline-radio',
			options: [true, undefined],
			table: {
				defaultValue: { summary: 'undefined' },
				type: { summary: 'boolean' },
			},
		},
		rounded: {
			control: 'select',
			options: ['none', 'medium', 'full'],
			table: {
				defaultValue: { summary: 'medium' },
				type: { summary: 'TooltipRounded' },
			},
		},
	},
	args: {
		content: 'Tooltip',
		align: 'center',
		alignOffset: 0,
		delayDuration: 700,
		side: 'top',
		sideOffset: 0,
		forceMount: undefined,

		raised: false,
		rounded: 'medium',
		severity: 'primary',
		variant: 'default',

		withArrow: true,
		withPortal: false,
		disableHoverableContent: false,
	},
	tags: ['autodocs'],
	render: (args) => {
		return (
			<div style={{ display: 'flex', margin: '10% 0' }}>
				<TooltipProvider>
					<Tooltip {...args} asChild>
						<Button severity="contrast">Hover</Button>
					</Tooltip>
				</TooltipProvider>
			</div>
		);
	},
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
