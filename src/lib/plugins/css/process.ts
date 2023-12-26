import fs from 'fs/promises';
import path from 'path';

export const pathCssPackage = path.resolve(`node_modules/manakit/dist`, 'app.css');

export function buildCSSFile() {
	let response = '';
	response += `.ms-sm-auto {\n`;
	response += 'margin-inline-start: auto';
	response += '}\n';

	fs.writeFile(pathCssPackage, response);
}
