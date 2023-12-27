import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassPadding({ screen, data }: generateClass) {
	let response = '';
	for (const [, value] of Object.entries(data)) {
		// padding top
		if (screen) {
			response += `.${mediaQueries(screen)}pt-${value}  {\n`;
			response += css({
				key: 'padding-top',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding bottom
			response += `.${mediaQueries(screen)}pb-${value}  {\n`;
			response += css({
				key: 'padding-bottom',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding left
			response += `.${mediaQueries(screen)}pl-${value}  {\n`;
			response += css({
				key: 'padding-left',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding right
			response += `.${mediaQueries(screen)}pr-${value}  {\n`;
			response += css({
				key: 'padding-right',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding left & right
			response += `.${mediaQueries(screen)}px-${value}  {\n`;
			response += css({
				key: 'padding-left',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'padding-right',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding top bottom
			response += `.${mediaQueries(screen)}py-${value}  {\n`;
			response += css({
				key: 'padding-top',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'padding-bottom',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding all
			response += `.${mediaQueries(screen)}pa-${value}  {\n`;
			response += css({
				key: 'padding',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		} else {
			// padding top
			response += `.pt-${value}  {\n`;
			response += css({
				key: 'padding-top',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding bottom
			response += `.pb-${value}  {\n`;
			response += css({
				key: 'padding-bottom',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding left
			response += `.pl-${value}  {\n`;
			response += css({
				key: 'padding-left',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding right
			response += `.pr-${value}  {\n`;
			response += css({
				key: 'padding-right',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding left & right
			response += `.px-${value}  {\n`;
			response += css({
				key: 'padding-left',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'padding-right',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding top bottom
			response += `.py-${value}  {\n`;
			response += css({
				key: 'padding-top',
				value: `${value}`,
				important: true
			});
			response += css({
				key: 'padding-bottom',
				value: `${value}`,
				important: true
			});
			response += '}\n';
			// padding all
			response += `.pa-${value}  {\n`;
			response += css({
				key: 'padding',
				value: `${value}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassPadding;
