import { fontsFamily } from './family';
import { fontsSize } from './size';

import { fontsProse, prose } from './prose';

export const fonts = () => {
	let css = '';

	// root
	css += fontsFamily();
	css += fontsSize();
	css += fontsProse();

	// class
	css += prose();

	return css;
};
