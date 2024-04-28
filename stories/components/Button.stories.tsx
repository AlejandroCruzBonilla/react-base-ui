import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Button, type ButtonProps }  from '../../src/components/Button';


const meta: Meta<ButtonProps>  = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
	argTypes:{
		onClick: {action: 'clicked'},
		children: {control: 'text'}
	},
  tags: ['autodocs'],

  // args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    label: 'Button',
  },
};


export const WithChildren: Story = {
	args: {
		children: <div>Children</div>,
	},
};

export const customClassNames: Story = {
	args: {
		label: 'Button',
	},
};
