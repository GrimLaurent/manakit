import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassDisplay({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// display
		if (screen) {
			response += `.${mediaQueries(screen)}${key} {\n`;
			response += css({
				key: 'display',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.${key} {\n`;
			response += css({
				key: 'display',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassDisplay;
