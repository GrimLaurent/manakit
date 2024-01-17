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

	css += createClass({
		className: 'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre',
		properties: {
			margin: 0
		}
	});

	css += createClass({
		className: 'h1, h2, h3, h4, h5, h6',
		properties: {
			'font-size': 'inherit',
			'font-weight': 'inherit'
		}
	});

	css += createClass({
		className: 'img, svg, video, canvas, audio, iframe, embed, object ',
		properties: {
			display: 'block',
			'vertical-align': 'middle'
		}
	});

	return css;
};
