import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassWidth({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// width
		if (screen) {
			response += `.${mediaQueries(screen)}w-${key} {\n`;
			response += css({
				key: 'width',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.w-${key} {\n`;
			response += css({
				key: 'width',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassWidth;
