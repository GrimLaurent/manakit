import { modalClass } from './modal';

export const modalStatic = () => {
	let css = '';
	// class
	css += modalClass();
	return css;
};
