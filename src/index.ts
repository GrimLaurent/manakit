import fs from 'fs/promises';
import { pathCss } from './constant';
import { createRootVar } from './utils';

export const buildCSS = () => {
	let response = '';

	response += `:root {\n`;
	response += createRootVar({ slug: 'test-gloubiboulga', value: 'blue' });
	response += '}\n';
	fs.writeFile(pathCss, response);
};
