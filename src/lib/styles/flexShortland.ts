import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassFlexShortland({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// flexShortland
		if (screen) {
			response += `.${mediaQueries(screen)}flex-${key} {\n`;
			response += css({
				key: 'flex',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.flex-${key} {\n`;
			response += css({
				key: 'flex',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassFlexShortland;
