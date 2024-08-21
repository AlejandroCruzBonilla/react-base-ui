import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonProps } from '../../src/components/ui/Button/Button';

const meta: Meta<ButtonProps> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: 'Button',
		variant: 'secondary'
		// disabled: true,
	}
};
export const Danger: Story = {
	args: {
		children: 'Button',
		variant: 'danger',
	}
};

