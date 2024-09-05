import type { Meta, StoryObj } from '@storybook/react';
import { Chip, type ChipProps } from '../../src/components/ui/Chip';

const meta: Meta<ChipProps> = {
	title: 'Components/Chip',
	component: Chip,
	parameters: {
		layout: 'centered',
		controls: { expanded: true, sort: 'alpha' },
	},
	argTypes: {
		variant: {
			control: 'select',
			options: ['default', 'outline', 'link'],
			table: {
				defaultValue: { summary: 'default' },
				type: { summary: 'ChipVariant' },
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
				'ghost',
			],
			table: {
				defaultValue: { summary: 'primary' },
				type: { summary: 'ChipSeverity' },
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
			options: ['none', 'medium', 'full'],
			table: {
				defaultValue: { summary: 'full' },
				type: { summary: 'ChipRounded' },
			},
		},
		children: {
			table: {
				type: { summary: 'ReactNode' },
			},
		},
	},
	args: {
		children: 'React Node',
		value: 'Text Value',
		raised: false,
		rounded: 'full',
		severity: 'primary',
		variant: 'default',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
