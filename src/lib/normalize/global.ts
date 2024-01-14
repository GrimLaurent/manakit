import { createClass } from '../../utils';

export const normalizeGlobal = () => {
	let css = '';

	css += createClass({
		className: '*, :before, :after',
		properties: {
			'box-sizing': 'border-box',
			'border-width': 0,
			'border-style': 'solid',
			'border-color': '#e5e7eb'
		}
	});

	return css;
};
