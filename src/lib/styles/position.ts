import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassPosition({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// position
		if (screen) {
			response += `.${mediaQueries(screen)}${key} {\n`;
			response += css({
				key: 'position',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.${key} {\n`;
			response += css({
				key: 'position',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassPosition;
