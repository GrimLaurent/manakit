import { generateClass } from '../types';
import { css, mediaQueries } from '../plugins/css';

function setClassMargin({ screen, data }: generateClass) {
	let response = '';
	for (const [, value] of Object.entries(data)) {
		// margin
		if (screen) {
			response += `.${mediaQueries(screen)}mt-${value}  {\n`;
			response += css({
				key: 'margin-top',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			// margin bottom
			response += `.${mediaQueries(screen)}mb-${value}  {\n`;
			response += css({
				key: 'margin-bottom',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			// margin left
			response += `.${mediaQueries(screen)}ml-${value}  {\n`;
			response += css({
				key: 'margin-left',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			//margin right
			response += `.${mediaQueries(screen)}mr-${value}  {\n`;
			response += css({
				key: 'margin-right',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			// margin left & right
			response += `.${mediaQueries(screen)}mx-${value}  {\n`;
			response += css({
				key: 'margin-left',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += css({
				key: 'margin-right',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			// margin top bottom
			response += `.${mediaQueries(screen)}my-${value}  {\n`;
			response += css({
				key: 'margin-top',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += css({
				key: 'margin-bottom',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			// margin all
			response += `.${mediaQueries(screen)}ma-${value}  {\n`;
			response += css({
				key: 'margin',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
		} else {
			// margin top
			response += `.mt-${value}  {\n`;
			response += css({
				key: 'margin-top',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			// margin bottom
			response += `.mb-${value}  {\n`;
			response += css({
				key: 'margin-bottom',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			// margin left
			response += `.ml-${value}  {\n`;
			response += css({
				key: 'margin-left',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			//margin right
			response += `.mr-${value}  {\n`;
			response += css({
				key: 'margin-right',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			// margin left & right
			response += `.mx-${value}  {\n`;
			response += css({
				key: 'margin-left',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += css({
				key: 'margin-right',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			// margin top bottom
			response += `.my-${value}  {\n`;
			response += css({
				key: 'margin-top',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += css({
				key: 'margin-bottom',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
			// margin all
			response += `.ma-${value}  {\n`;
			response += css({
				key: 'margin',
				value: `${value}${value !== 'auto' ? 'px' : ''}`,
				important: true
			});
			response += '}\n';
		}
	}
	return response;
}

export default setClassMargin;
