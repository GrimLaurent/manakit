import type { generateClass } from '../types';

function setRootCSS({ data, dark }: generateClass) {
	let response = '';
	if (data) {
		if (!dark) {
			// no use darkmode
			response += ':root {\n';
			for (const [key, value] of Object.entries(data)) {
				if (typeof value === 'string') {
					response += ` --color-${key}: ${value};\n`;
				} else if (typeof value === 'object' && value?.light) {
					response += ` --color-${key}: ${value?.light};\n`;
				}
			}
			response += '}\n\n';
		} else {
			// @media prefers-color-scheme light
			response += '@media (prefers-color-scheme: light) {\n';
			// light
			response += ':root {\n';
			response += 'color-scheme: light;\n';
			for (const [key, value] of Object.entries(data)) {
				if (typeof value === 'object' && value?.light) {
					response += ` --color-${key}: ${value.light};\n`;
				} else if (typeof value === 'string') {
					response += ` --color-${key}: ${value};\n`;
				}
			}
			response += '}\n\n';
			// dark in light
			response += '.dark {\n';
			response += 'color-scheme: light;\n';
			for (const [key, value] of Object.entries(data)) {
				if (typeof value === 'object' && value?.dark) {
					response += ` --color-${key}: ${value.dark};\n`;
				} else if (typeof value === 'string') {
					response += ` --color-${key}: ${value};\n`;
				}
			}
			response += '}\n\n';
			response += '}\n\n';
			// END @media prefers-color-scheme light

			// @media prefers-color-scheme dark
			response += '@media (prefers-color-scheme: dark) {\n';
			// dark
			response += ':root {\n';
			response += 'color-scheme: dark;\n';
			for (const [key, value] of Object.entries(data)) {
				if (typeof value === 'object' && value?.dark) {
					response += ` --color-${key}: ${value.dark};\n`;
				} else if (typeof value === 'string') {
					response += ` --color-${key}: ${value};\n`;
				}
			}
			response += '}\n\n';
			// light in dark
			response += '.light {\n';
			response += 'color-scheme: dark;\n';
			for (const [key, value] of Object.entries(data)) {
				if (typeof value === 'object' && value?.light) {
					response += ` --color-${key}: ${value.light};\n`;
				} else if (typeof value === 'string') {
					response += ` --color-${key}: ${value};\n`;
				}
			}
			response += '}\n\n';
			response += '}\n\n';
			// END @media prefers-color-scheme dark
		}
	}
	return response;
}

export default setRootCSS;
