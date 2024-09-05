import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton, type SkeletonProps } from '../../src/components/ui/Skeleton';

const meta: Meta<SkeletonProps> = {
	title: 'Components/Skeleton',
	component: Skeleton,
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
				type: { summary: 'SkeletonVariant' },
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
				'contrast',
			],
			table: {
				defaultValue: { summary: 'default' },
				type: { summary: 'SkeletonSeverity' },
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
				type: { summary: 'SkeletonRounded' },
			},
		},
		children: {
			table: {
				type: { summary: 'ReactNode' }
			}
		}
	},
	args: {
		raised: false,
		rounded: 'default',
		severity: 'default',
		variant: 'default',
		style: {
			width: '100px',
			height: '100px'
		}
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
