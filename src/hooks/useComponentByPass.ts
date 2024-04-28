import { getClassNameFromByPass } from '../helpers';
import type { ByPass, ByPassStyleProp } from '../interfaces';

export const useComponentByPass = <T>(
	props: T,
	byPass: ByPass<T> | undefined 
) => {
	
	const classNames: { [key: string]: string } = {}
	const styles: { [key: string]: ByPassStyleProp | undefined } = {}

	if (typeof byPass !== 'undefined') {

		Object.keys(byPass).forEach(key => {
			
			classNames[key] = 
				getClassNameFromByPass<T>(props,byPass[key]?.className);
	
			styles[key] = byPass[key]?.style;
	
		});
	}


	return {
		classNames,
		styles
	}
}
