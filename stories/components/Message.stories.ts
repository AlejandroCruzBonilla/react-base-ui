import type { Meta, StoryObj } from '@storybook/react';
import { Message, type MessageProps } from '../../src/components/ui/Message';

const meta: Meta<MessageProps> = {
	title: 'Components/Message',
	component: Message,
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
				type: { summary: 'MessageVariant' },
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
				type: { summary: 'MessageSeverity' },
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
				type: { summary: 'MessageRounded' },
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
		value: 'Message text is required',
		raised: false,
		rounded: 'default',
		severity: 'default',
		variant: 'default',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
