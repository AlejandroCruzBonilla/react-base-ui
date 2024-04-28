import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, type ButtonProps } from '../../src/components/Button';


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
	args: {
		label: 'Button',
	},
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {

};


export const WithChildren: Story = {
	args: {
		children: "Children",
	},
};

export const WithCustomClassNames: Story = {
	args: {
		byPass: {
			"root": {
				"className": "custom_button"
			},
			"label": {
				"className": "custom_button_label"
			}
		}
	}
};
