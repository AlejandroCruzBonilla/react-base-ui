import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	Avatar,
	AvatarImage,
	AvatarFallback,
} from '../../src/components/ui/Avatar';
import type {
	AvatarProps,
	AvatarImageProps,
	AvatarFallbackProps,
} from '../../src/components/ui/Avatar';
import { UserRound } from 'lucide-react';

const meta: Meta<AvatarProps> = {
	title: 'Components/Avatar',
	component: Avatar,
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
				type: { summary: 'AvatarVariant' },
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
				type: { summary: 'AvatarSeverity' },
			},
		},
		size: {
			control: 'select',
			options: ['sm', 'medium', 'lg'],
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
				type: { summary: 'AvatarRounded' },
			},
		},
	},
	args: {
		fallback: 'AC',
		raised: false,
		rounded: 'full',
		severity: 'primary',
		size: 'medium',
		src: 'https://picsum.photos/200',
		variant: 'default',
	},
	tags: ['autodocs'],
	render: (args) => {
		return (
			<div style={{ display: 'flex', gap: '1rem' }}>
				<Avatar {...args}>
					<AvatarImage />
					<AvatarFallback />
				</Avatar>
				<Avatar {...args}>
					<AvatarFallback>
						<UserRound width="80%" height="80%" />
					</AvatarFallback>
				</Avatar>
			</div>
		);
	},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
