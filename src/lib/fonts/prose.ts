import { createClass } from '../../utils';

// const variables = {
// 	'prose-h1-size': 'var(--mk-text-4xl)',
// 	'prose-h1-weight': '800',
// 	'prose-h2-size': 'var(--mk-text-2xl)',
// 	'prose-h2-weight': '700',
// 	'prose-h3-size': 'var(--mk-text-2xl)',
// 	'prose-h3-weight': '600',
// 	'prose-h4-size': 'var(--mk-text-xl)',
// 	'prose-h4-weight': '600',
// 	'prose-kdh-size': 'var(--mk-text-sm)',
// 	'prose-kdh-weight': '500',
// 	'prose-p-size': 'var(--mk-text-base)',
// 	'prose-p-weight': '400'
// };

// root
export const fontsProse = () => {
	const css = '';
	// css += createRoot({ variables });
	return css;
};

// class
export const prose = () => {
	let css = '';

	css += createClass({
		className: '.prose :where(.prose > :first-child) *',
		properties: {
			'margin-top': 0
		}
	});

	css += createClass({
		className: '.prose h1',
		properties: {
			'font-weight': 'var(--mk-prose-h1-weight)',
			'font-size': 'var(--mk-prose-h1-size)',
			'margin-top': 0,
			'margin-bottom': '0.89em',
			'line-height': '1.11'
		}
	});

	css += createClass({
		className: '.prose h2',
		properties: {
			'font-weight': '700',
			'font-size': 'var(--mk-text-2xl)',
			'margin-top': '2em',
			'margin-bottom': '1em',
			'line-height': '1.33'
		}
	});

	css += createClass({
		className: '.prose h3',
		properties: {
			'font-weight': 'var(--mk-prose-h2-weight)',
			'font-size': 'var(--mk-prose-h2-size)',
			'margin-top': '1.6em',
			'margin-bottom': '0.6em',
			'line-height': '1.6'
		}
	});

	css += createClass({
		className: '.prose h4',
		properties: {
			'font-weight': 'var(--mk-prose-h4-weight)',
			'font-size': 'var(--mk-prose-h4-size)',
			'margin-top': '1.6em',
			'margin-bottom': '0.5em',
			'line-height': ' 1.5'
		}
	});

	css += createClass({
		className: '.prose code',
		properties: {
			padding: '1px 8px',
			'border-radius': '0.25rem',
			'font-weight': 'initial'
		}
	});

	css += createClass({
		className: '.prose kdh',
		properties: {
			'margin-bottom': 0,
			'border-radius': '0.25rem',
			'font-weight': 'var(--mk-prose-kdh-weight)',
			'font-size': 'var(--mk-prose-kdh-size)',
			padding: '0.35rem 0.20rem'
		}
	});

	css += createClass({
		className: '.prose p',
		properties: {
			'margin-top': '1.25em',
			'margin-bottom': '1.25em',
			'font-weight': 'var(--mk-prose-p-weight)',
			'font-size': 'var(--mk-prose-p-size)'
		}
	});

	return css;
};
