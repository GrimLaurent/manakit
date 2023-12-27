import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassFloat({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// float
		if (screen) {
			response += `.${mediaQueries(screen)}float-${key} {\n`;
			response += css({
				key: 'float',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.float-${key} {\n`;
			response += css({
				key: 'float',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassFloat;
