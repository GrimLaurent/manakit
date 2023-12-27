import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassFlexJustify({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// flexJustify
		if (screen) {
			response += `.${mediaQueries(screen)}justify-${key} {\n`;
			response += css({
				key: 'justify-content',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.justify-${key} {\n`;
			response += css({
				key: 'justify-content',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassFlexJustify;
