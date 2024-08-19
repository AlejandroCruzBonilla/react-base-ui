import React from 'react';
import type { AccordionProps } from './interfaces';

export const Accordion: React.FC<AccordionProps> = () => {
	return (
		<details>
			<summary>Details</summary>
			Details
		</details>
	);
};
