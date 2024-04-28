import type { ByPass, ByPassStyleProp, ByPassClassNameProp } from '../interfaces';

export const useComponentByPass = <T>(
	props: T,
	byPass: ByPass<T> | undefined 
) => {
	
	const classNames: { [key: string]: string } = {}
	const styles: { [key: string]: ByPassStyleProp | undefined } = {}



	const getClassNameFromByPass = <T>(
		props:T,
		byPassClassNameProp: ByPassClassNameProp<T> | undefined
	):string => {
	
		switch (typeof byPassClassNameProp) {
			case 'function':
				return byPassClassNameProp(props);
			case 'string':
				return byPassClassNameProp;
			default:
				return '';
		}
	}

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
