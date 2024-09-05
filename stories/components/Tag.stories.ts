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
				'primary',
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
				defaultValue: { summary: 'primary' },
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
			control: 'select',
			options: ['none', 'medium', 'full'],
			table: {
				defaultValue: { summary: 'medium' },
				type: { summary: 'TagRounded' },
			},
		},
		children: {
			table: {
				type: { summary: 'ReactNode' },
			},
		},
	},
	args: {
		children: 'React Node',
		value: 'Text Value',
		raised: false,
		rounded: 'medium',
		severity: 'primary',
		variant: 'default',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
