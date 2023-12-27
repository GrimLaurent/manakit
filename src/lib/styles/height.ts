import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassHeight({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// height
		if (screen) {
			response += `.${mediaQueries(screen)}h-${key} {\n`;
			response += css({
				key: 'height',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.h-${key} {\n`;
			response += css({
				key: 'height',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassHeight;
