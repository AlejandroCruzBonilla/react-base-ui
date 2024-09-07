import { createContext, type ReactNode } from 'react';

interface AvatarContext {
	src?: string;
	fallback?: string | ReactNode;
}

export const AvatarContext = createContext({} as AvatarContext);
