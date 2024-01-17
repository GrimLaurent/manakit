import { fontsFamily } from './family';
import { fontsSize } from './size';

import { fontsProse, prose } from './prose';
import { alignClass } from './align';
import { decorationClass } from './decoration';
import { opacityClass } from './opacity';
import { transformClass } from './transform';

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

export const fontsStaticClass = () => {
	let css = '';

	// class
	css += transformClass();
	return css;
};

export const fontsClass = ({ screen }: { screen: string }) => {
	let css = '';

	// class
	css += alignClass({ screen });
	css += decorationClass({ screen });
	css += opacityClass({ screen });
	return css;
};
