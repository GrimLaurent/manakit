import { toolbarClass } from './toolbar';

export const toolbarStatic = () => {
	let css = '';
	// class
	css += toolbarClass();
	return css;
};
