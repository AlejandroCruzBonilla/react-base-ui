import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, type AccordionProps } from '../../src/components/ui/Accordion';

const meta: Meta<AccordionProps> = {
	title: 'Components/Accordion',
	component: Accordion,
	parameters: {
		layout: 'centered',
	},
	argTypes: {},
	tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	// args: {
	// 	label: 'Button',
	// },
};
