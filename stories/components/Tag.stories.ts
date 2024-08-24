import type { Meta, StoryObj } from '@storybook/react';
import { Tag, type TagProps } from '../../src/components/ui/Tag';

const meta: Meta<TagProps> = {
	title: 'Components/Tag',
	component: Tag,
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
				type: { summary: 'TagVariant' },
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
				type: { summary: 'TagSeverity' },
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
			control: 'boolean',
			table: {
				defaultValue: { summary: 'false' },
				type: { summary: 'boolean' },
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
		rounded: false,
		severity: 'default',
		variant: 'default',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
