import { mediaInit } from '../../constant';
import { ClassCSS } from '../../types';
import { propertie } from './createPropertieCss';

export const createClass = ({
	parentClassName,
	className,
	properties,
	important,
	screen
}: ClassCSS) => {
	let css = '';
	const haveDot = /^\./.test(className);

	if (properties) {
		if (haveDot) {
			const classNameClearDot = className.slice(1);
			css +=
				screen && screen !== mediaInit
					? parentClassName
						? `${parentClassName}.${screen}\\:${classNameClearDot} {\n`
						: `.${screen}\\:${classNameClearDot} {\n`
					: parentClassName
						? `${parentClassName}.${classNameClearDot} {\n`
						: `.${classNameClearDot} {\n`;
		} else {
			css += parentClassName ? `${parentClassName}${className} {\n` : `${className} {\n`;
		}

		for (const [key, value] of Object.entries(properties)) {
			css += propertie({ key, value, important });
		}
		css += '}\n';
	}

	return css;
};
