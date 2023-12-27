import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassFlexAlignSelf({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// flexAlignSelf
		if (screen) {
			response += `.${mediaQueries(screen)}align-self-${key} {\n`;
			response += css({
				key: 'align-self',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.align-self-${key} {\n`;
			response += css({
				key: 'align-self',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassFlexAlignSelf;
