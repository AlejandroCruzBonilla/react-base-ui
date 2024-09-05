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
				'primary',
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
				defaultValue: { summary: 'primary' },
				type: { summary: 'ButtonSeverity' },
			},
		},
		size: {
			control: 'select',
			options: ['sm', 'medium', 'lg', 'icon'],
			table: {
				defaultValue: { summary: 'medium' },
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
			options: ['none', 'medium', 'full'],
			table: {
				defaultValue: { summary: 'medium' },
				type: { summary: 'ButtonRounded' },
			},
		},
		disabled: {
			control: 'boolean',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
			},
		},
		asChild: {
			table: {
				disable: true,
			},
		},
	},
	args: {
		children: 'React Node',
		disabled: false,
		raised: false,
		rounded: 'medium',
		severity: 'primary',
		size: 'medium',
		variant: 'default',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
