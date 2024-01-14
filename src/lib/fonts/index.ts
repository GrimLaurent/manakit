import { fontsFamily } from './family';

export const fonts = () => {
	let css = '';

	css += fontsFamily();

	return css;
};
