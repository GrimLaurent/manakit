import { createClass } from '../../utils';

export const normalizeHTML = () => {
	let css = '';

	css += createClass({
		className: 'html',
		properties: {
			'line-height': 1.5,
			'tab-size': 4,
			'font-family': 'var(--font-body)',
			'font-feature-settings': 'normal',
			'font-variation-settings': 'normal'
		}
	});

	css += createClass({
		className: 'body',
		properties: {
			margin: 0,
			'line-height': 'inherit'
		}
	});

	css += createClass({
		className: 'dialog',
		properties: {
			padding: 0
		}
	});

	return css;
};
