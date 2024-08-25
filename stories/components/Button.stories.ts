import type { Meta, StoryObj } from '@storybook/react';
import {
	Button,
	type ButtonProps,
} from '../../src/components/ui/Button/Button';

const meta: Meta<ButtonProps> = {
	title: 'Components/Button',
	component: Button,
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
				type: { summary: 'ButtonVariant' },
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
				'danger',
				'help',
				'light',
				'dark',
				'contrast',
				'ghost',
			],
			table: {
				defaultValue: { summary: 'default' },
				type: { summary: 'ButtonSeverity' },
			},
		},
		size: {
			control: 'select',
			options: ['default', 'sm', 'lg', 'icon'],
			table: {
				defaultValue: { summary: 'default' },
				type: { summary: 'ButtonSize' },
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
			options: ['none','medium','full'],
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
		},
		disabled: {
			control: 'boolean',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
		},
	},
	args: {
		children: 'React Node',
		disabled: false,
		raised: false,
		rounded: 'medium',
		severity: 'default',
		size: 'default',
		variant: 'default',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
