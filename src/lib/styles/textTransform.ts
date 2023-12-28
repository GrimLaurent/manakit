import { css } from '../plugins/css';
import { generateClass } from '../types';

function setClassTextTransform({ data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// textTransform
		response += `.text-${key} {\n`;
		response += css({
			key: 'text-transform',
			value: `${value}`,
			important: true
		});
		response += '}\n';
	}

	response += `.text-break  {\n`;
	response += css({
		key: 'overflow-wrap',
		value: `break-word`,
		important: true
	});
	response += css({
		key: 'word-break',
		value: `break-word`,
		important: true
	});
	response += '}\n';

	response += `.text-no-break  {\n`;
	response += css({
		key: 'white-space',
		value: `nowrap`,
		important: true
	});
	response += '}\n';

	response += `.text-truncate  {\n`;
	response += css({
		key: 'white-space',
		value: `nowrap`,
		important: true
	});
	response += css({
		key: 'overflow',
		value: `hidden`,
		important: true
	});
	response += css({
		key: 'text-overflow',
		value: `ellipsis`,
		important: true
	});
	response += '}\n';

	return response;
}

export default setClassTextTransform;
