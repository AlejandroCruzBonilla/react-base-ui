import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
	Card,
	CardBody,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '../../src/components/ui/Card';

import type { CardProps } from '../../src/components/ui/Card';

// TODO: Sort Props, add missing props
const meta: Meta<CardProps> = {
	title: 'Components/Card',
	component: Card,
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
				type: { summary: 'ButtonVariant' },
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
				'danger',
				'help',
				'light',
				'dark',
				'contrast',
			],
			table: {
				defaultValue: { summary: 'primary' },
				type: { summary: 'ButtonSeverity' },
			},
		},
		rounded: {
			control: 'select',
			options: ['none', 'medium'],
			table: {
				defaultValue: { summary: 'medium' },
				type: { summary: 'ButtonRounded' },
			},
		},
	},
	args: {
		bordered: false,
		raised: false,
		rounded: 'medium',
		severity: 'light',
		// variant: 'default',
	},
	tags: ['autodocs'],
	render: (args) => {
		return (
			<div style={{ display: 'flex', margin: '10% 0' }}>
				<Card {...args}>
					<CardHeader>
						<CardTitle>Lorem ipsum dolor</CardTitle>
						<CardDescription>
							Lorem ipsum dolor sit amet consectetur fugit sapiente quae.
						</CardDescription>
					</CardHeader>
					<CardBody>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, sit
						temporibus architecto sequi suscipit, dignissimos eos ipsam
						cupiditate fugit sapiente odit quos quae, sed voluptate quas quia
						voluptatem beatae quasi.
					</CardBody>
					<CardFooter>
						Saepe perferendis facilis reiciendis eius voluptatum accusamus
						exercitationem fuga perspiciatis ducimus natus?
					</CardFooter>
				</Card>
			</div>
		);
	},
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
