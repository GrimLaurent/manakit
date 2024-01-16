import fs from 'fs/promises';
import { pathCss } from './constant';

import { normalize } from './lib/normalize';
import { btnStatic, btnResponsive } from './components/btn';
import { colorClass, colorRoot } from './lib/colors';
import { Themes } from './types';

export const initialResponsive = {
	none: '0',
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	xxl: '1536px'
};

export const buildCSS = ({
	dark,
	themes,
	responsive
}: {
	dark: boolean;
	themes: Themes;
	responsive: object;
}) => {
	let cssString = '';

	// root
	cssString += colorRoot({ themes, dark });

	// class
	cssString += normalize();
	cssString += btnStatic();
	cssString += colorClass({ themes });

	for (const [screen, value] of Object.entries(responsive)) {
		if (screen !== 'none') cssString += `@media screen and (min-width: ${value}) {\n`;
		cssString += btnResponsive({ screen });
		if (screen !== 'none') cssString += '}\n\n';
	}

	fs.writeFile(pathCss, cssString);
};
