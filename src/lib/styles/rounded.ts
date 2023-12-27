import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassRounded({ screen, data }: generateClass) {
	let response = '';
	for (const [key, value] of Object.entries(data)) {
		// rounded
		if (screen) {
			response += `.${mediaQueries(screen)}rounded${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.${mediaQueries(screen)}rounded-ts${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-top-left-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.${mediaQueries(screen)}rounded-te${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-top-right-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.${mediaQueries(screen)}rounded-bs${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-bottom-left-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.${mediaQueries(screen)}rounded-be${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-bottom-right-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.${mediaQueries(screen)}rounded-t${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-top-left-radius',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'border-top-right-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.${mediaQueries(screen)}rounded-b${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-bottom-left-radius',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'border-bottom-right-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.${mediaQueries(screen)}rounded-s${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-top-left-radius',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'border-bottom-left-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.${mediaQueries(screen)}rounded-e${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-top-right-radius',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'border-bottom-right-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			response += `.rounded${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.rounded-ts${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-top-left-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.rounded-te${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-top-right-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.rounded-bs${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-bottom-left-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.rounded-be${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-bottom-right-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.rounded-t${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-top-left-radius',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'border-top-right-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.rounded-b${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-bottom-left-radius',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'border-bottom-right-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.rounded-s${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-top-left-radius',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'border-bottom-left-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			response += `.rounded-e${key && key !== 'null' ? '-' + key : ''} {\n`;
			response += css({
				key: 'border-top-right-radius',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'border-bottom-right-radius',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassRounded;
