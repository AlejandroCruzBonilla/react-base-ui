import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonProps } from '../../src/components/Button';

const meta: Meta<ButtonProps> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	args: {
		type: 'button',
	},
	argTypes: {
		children: { control: 'text' },
		icon: { control: 'text' },
		onClick: { table: { disable: true } },
		size: { control: 'inline-radio' },
		type: { control: 'inline-radio' },
		variant: { control: 'inline-radio' },
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Button',
	},
};

export const Size: Story = {
	args: {
		label: 'Button',
		size: 'large',
	},
};

export const Children: Story = {
	args: {
		label: 'Button',
		children: 'Children',
	},
};

export const Icon: Story = {
	args: {
		label: 'Button',
		icon: 'fa-solid fa-sun',
	},
};

export const Severity: Story = {
	args: {
		label: 'Button',
		severity: 'primary',
	},
};

export const Variant: Story = {
	args: {
		label: 'Button',
		variant: 'outline',
	},
};

export const SeverityAndVariant: Story = {
	args: {
		label: 'Button',
		severity: 'primary',
		variant: 'outline',
	},
};

export const Rounded: Story = {
	args: {
		label: 'Button',
		severity: 'primary',
		rounded: true,
	},
};

export const CustomClassNames: Story = {
	args: {
		label: 'Button',
		byPass: {
			root: {
				className: 'custom_button',
			},
			label: {
				className: 'custom_button_label',
			},
		},
	},
};
