import { createClass } from '../../utils';

// class
export const btnClass = () => {
	let css = '';

	css += createClass({
		className: '.btn',
		properties: {
			position: 'relative',
			display: 'inline-flex',
			height: '2.25rem',
			'min-height': '2.25rem',
			'flex-shrink': 0,
			cursor: 'pointer',
			'user-select': 'none',
			'flex-wrap': 'wrap',
			'align-items': 'center',
			'justify-content': 'center',
			'border-radius': '.5rem',
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
			'outline-color': 'var(--color-outline)',
			'border-width': '1px',
			'background-color': 'var(--color-surface-container)',
			color: 'var(--color-on-surface)'
		}
	});

	css += createClass({
		className: ':where(.btn:is(input[type=checkbox])), :where(.btn:is(input[type=radio]))',
		properties: {
			width: 'auto',
			appearance: 'none',
			margin: 0
		}
	});

	css += createClass({
		className: '.btn:is(input[type=checkbox])::after, .btn:is(input[type=radio])::after',
		properties: {
			content: 'attr(aria-label)'
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
			'background-color': '#d9dadc',
			color: '#b9babe'
		}
	});

	return css;
};
