import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassOrder({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// order
		if (screen) {
			response += `.${mediaQueries(screen)}order-${key} {\n`;
			response += css({
				key: 'order',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.order-${key} {\n`;
			response += css({
				key: 'order',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassOrder;
