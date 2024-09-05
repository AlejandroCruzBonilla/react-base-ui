import type { Meta, StoryObj } from '@storybook/react';
import { LongMessage, type LongMessageProps } from '../../src/components/ui/LongMessage';

const meta: Meta<LongMessageProps> = {
	title: 'Components/Long Message',
	component: LongMessage,
	parameters: {
		layout: 'padded',
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
				'contrast',
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
			options: ['none','default'],
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
		value: 'Text Value',
		raised: false,
		rounded: 'default',
		severity: 'default',
		variant: 'default',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LongMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
