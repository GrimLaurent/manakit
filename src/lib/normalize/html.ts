import { createClass } from '../../utils';

export const normalizeHTML = () => {
	let css = '';

	css += createClass({
		className: 'html',
		properties: {
			'line-height': 1.5,
			'tab-size': 4,
			'font-family': 'var(--mk-font-body)',
			'font-feature-settings': 'normal',
			'font-variation-settings': 'normal'
		}
	});

	return css;
};
