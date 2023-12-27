import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassFlexAlign({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// flexAlign
		if (screen) {
			response += `.${mediaQueries(screen)}align-${key} {\n`;
			response += css({
				key: 'align-items',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.align-${key} {\n`;
			response += css({
				key: 'align-items',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassFlexAlign;
