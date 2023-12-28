import { css } from '../plugins/css';
import { generateClass } from '../types';

function setClassFontEmphasis({ data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// fontEmphasis

		response += `.font-weight-${key} {\n`;
		response += css({
			key: 'font-weight',
			value: `${value}`,
			important: true
		});
		response += '}\n';
	}

	response += `.font-italic {\n`;
	response += css({
		key: 'font-style',
		value: `italic`,
		important: true
	});
	response += '}\n';
	return response;
}

export default setClassFontEmphasis;
