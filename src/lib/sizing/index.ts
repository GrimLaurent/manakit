import { heightClass } from './height';
import { widthClass } from './width';

export const sizingClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += widthClass({ screen });
	css += heightClass({ screen });
	return css;
};
