import fs from 'fs/promises';
import { pathCss } from './constant';

import { normalize } from './lib/normalize';
// import { fonts } from './lib/fonts';
import { btn } from './components/btn';

export const buildCSS = () => {
	let cssString = '';

	// cssString += fonts(); // WIP
	cssString += normalize();
	cssString += btn();

	fs.writeFile(pathCss, cssString);
};
