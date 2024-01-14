import fs from 'fs/promises';
import { pathCss } from './constant';

import { normalize } from './lib/normalize';
import { fonts } from './lib/fonts';

export const buildCSS = () => {
	let cssString = '';

	cssString += fonts();
	cssString += normalize();

	fs.writeFile(pathCss, cssString);
};
