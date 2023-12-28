import { css, mediaQueries } from '../plugins/css';
import { generateClass } from '../types';

function setClassTextAlign({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// textAlign
		if (screen) {
			response += `.${mediaQueries(screen)}text-${key} {\n`;
			response += css({
				key: 'text-align',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.text-${key} {\n`;
			response += css({
				key: 'text-align',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassTextAlign;
