import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	Separator,
	type SeparatorProps,
} from '../../src/components/ui/Separator';

const meta: Meta<SeparatorProps> = {
	title: 'Components/Separator',
	component: Separator,
	parameters: {
		layout: 'centered',
		controls: { expanded: true, sort: 'alpha' },
	},
	argTypes: {
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
				type: { summary: 'SeparatorSeverity' },
			},
		},
		orientation: {
			control: 'inline-radio',
			options: ['horizontal', 'vertical'],
			table: {
				// disable: true,
				defaultValue: { summary: 'horizontal' },
				type: { summary: 'SeparatorSeverity' },
			},
		},
		decorative: {
			control: 'boolean',
			table: {
				defaultValue: { summary: 'true' },
				type: { summary: 'boolean' },
			},
		},
	},
	args: {
		decorative: true,
		orientation: 'horizontal',
		severity: 'primary',
	},
	tags: ['autodocs'],
	render: (args) => {
		return (
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '0.5rem',
				}}
			>
				<div
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						height: '30px',
						gap: '0.5rem',
					}}
				>
					<div>Element</div>
					<Separator {...args} orientation="vertical" />
					<div>Element</div>
					<Separator {...args} orientation="vertical" />
					<div>Element</div>
				</div>
				<Separator {...args} orientation="horizontal" />
				<div>Element</div>
			</div>
		);
	},
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
