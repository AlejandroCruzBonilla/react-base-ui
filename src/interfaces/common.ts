import type { CSSProperties } from 'react';

export type ByPass<T> = {
	[key: string]: ByPassProps<T> | undefined;
};

export interface ByPassProps<T> {
	className?: ByPassClassNameProp<T>;
	style?: ByPassStyleProp;
}

export type ByPassClassNameProp<T> = string | ((props: T) => string);

export type ByPassStyleProp = CSSProperties;
