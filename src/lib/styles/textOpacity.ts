import { css } from '../plugins/css';
import { generateClass } from '../types';

function setClassTextOpacity({ data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// textOpacity
		response += `.text-${key} {\n`;
		response += css({
			key: 'opacity',
			value: `${value}`,
			important: true
		});
		response += '}\n';
	}
	return response;
}

export default setClassTextOpacity;
