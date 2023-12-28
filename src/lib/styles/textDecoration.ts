import { css } from '../plugins/css';
import { generateClass } from '../types';

function setClassTextDecoration({ data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// textDecoration
		response += `.text-decoration-${key} {\n`;
		response += css({
			key: 'text-decoration',
			value: `${value}`,
			important: true
		});
		response += '}\n';
	}
	return response;
}

export default setClassTextDecoration;
