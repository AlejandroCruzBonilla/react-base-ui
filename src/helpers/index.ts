import type { ByPassClassNameProp } from '../interfaces';

export const getClassNameFromByPass = <T>(
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