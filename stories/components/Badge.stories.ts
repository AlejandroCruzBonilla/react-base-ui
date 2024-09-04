import type { Meta, StoryObj } from '@storybook/react';
import { Badge, type BadgeProps } from '../../src/components/ui/Badge';

const meta: Meta<BadgeProps> = {
	title: 'Components/Badge',
	component: Badge,
	parameters: {
		layout: 'centered',
		controls: { expanded: true, sort: 'alpha' },
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'outline'],
			table: {
				defaultValue: { summary: 'default' },
				type: { summary: 'BadgeVariant' },
			},
		},
		severity: {
			control: 'select',
			options: [
				'default',
				'secondary',
				'success',
				'info',
				'warning',
				'help',
				'danger',
				'dark',
				'light',
				'ghost',
			],
			table: {
				defaultValue: { summary: 'default' },
				type: { summary: 'BadgeSeverity' },
			},
		},
		raised: {
			control: 'boolean',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
		},
		rounded: {
			control: 'select',
			options: ['none','default','full'],
			table: {
				defaultValue: { summary: 'default' },
				type: { summary: 'BadgeRounded' },
			},
		},
		children: {
			table: {
				type: { summary: 'ReactNode' }
			}
		}
	},
	args: {
		children: 'React Node',
		value: '50',
		raised: false,
		rounded: 'default',
		severity: 'default',
		variant: 'default',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
