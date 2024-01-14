import { mediaInit } from '../../constant';
import { ClassCSS } from '../../types';
import { propertie } from './createPropertieCss';

export const createClass = ({ className, properties, important, screen }: ClassCSS) => {
	let css = '';
	const haveDot = /^\./.test(className);

	if (properties) {
		if (haveDot)
			css += screen && screen !== mediaInit ? `.${screen}\\:${className} {\n` : `.${className} {\n`;
		else css += `${className} {\n`;

		for (const [key, value] of Object.entries(properties)) {
			css += propertie({ key, value, important });
		}
		css += '}\n';
	}

	return css;
};
