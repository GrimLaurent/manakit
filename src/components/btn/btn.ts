import { createClass } from '../../utils';

// class
export const btnClass = () => {
	let css = '';

	css += createClass({
		className: '.btn',
		properties: {
			display: 'inline-flex',
			height: '3rem',
			'min-height': '3rem',
			'flex-shrink': 0,
			cursor: 'pointer',
			'user-select': 'none',
			'flex-wrap': 'wrap',
			'align-items': 'center',
			'justify-content': 'center',
			'border-radius': 'var(--btn-rounded,.5rem)',
			'border-color': 'transparent',
			'padding-left': '1rem',
			'padding-right': '1rem',
			'text-align': 'center',
			'font-size': '.875rem',
			'line-height': '1em',
			gap: '0.5rem',
			'font-weight': 600,
			'text-decoration-line': 'none',
			'transition-duration': '.2s',
			'border-width': 'var(--btn-border,1px)',
			'outline-color': 'red',
			'background-color': 'green'
		}
	});

	css += createClass({
		className: '.btn:hover',
		properties: {
			'border-color': 'orange',
			'background-color': 'cyan'
		}
	});

	css += createClass({
		className: '.btn:focus-visible',
		properties: {
			'outline-style': 'solid',
			'outline-width': '2px',
			'outline-offset': '2px'
		}
	});

	css += createClass({
		className: '.btn-disabled, .btn[disabled]',
		properties: {
			'pointer-events': 'none',
			'background-color': 'gray',
			color: 'darkgray'
		}
	});

	return css;
};
