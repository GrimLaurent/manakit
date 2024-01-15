import fs from 'fs/promises';
import { pathCss } from './constant';

import { normalize } from './lib/normalize';
import { btnStatic, btnResponsive } from './components/btn';
import { colorRoot } from './lib/colors';

const responsive = {
	none: '0',
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	xxl: '1536px'
};

export const buildCSS = () => {
	let cssString = '';

	// root
	cssString += colorRoot();

	// class
	cssString += normalize();
	cssString += btnStatic();

	for (const [screen, value] of Object.entries(responsive)) {
		if (screen !== 'none') cssString += `@media screen and (min-width: ${value}) {\n`;
		cssString += btnResponsive({ screen });
		if (screen !== 'none') cssString += '}\n\n';
	}

	fs.writeFile(pathCss, cssString);
};
