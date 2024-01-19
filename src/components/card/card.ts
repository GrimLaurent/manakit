import { createClass } from '../../utils';

// class
export const cardClass = () => {
	let css = '';

	css += createClass({
		className: '.card',
		properties: {
			position: 'relative',
			display: 'flex',
			padding: '.5rem',
			'flex-direction': 'column',
			'border-radius': '1rem'
		}
	});

	css += createClass({
		className: '.card .card-body',
		properties: {
			display: 'flex',
			flex: '1 1 auto',
			'flex-direction': 'column',
			padding: '2rem',
			gap: '0.5rem'
		}
	});

	css += createClass({
		className: '.card-body',
		properties: {
			display: 'flex',
			flex: '1 1 auto',
			'flex-direction': 'column',
			padding: '2rem',
			gap: '0.5rem'
		}
	});

	css += createClass({
		className: '.card-body :where(p)',
		properties: {
			'flex-grow': 1
		}
	});

	css += createClass({
		className: '.card-title',
		properties: {
			display: 'flex',
			'align-items': 'center',
			gap: '0.5rem',
			'font-size': '1.25rem',
			'line-height': '1.75rem',
			'font-weight': 600
		}
	});

	css += createClass({
		className: '.card figure',
		properties: {
			display: 'flex',
			'align-items': 'center',
			'justify-content': 'center'
		}
	});

	css += createClass({
		className: '.card :where(figure:first-child)',
		properties: {
			overflow: 'hidden',
			'border-start-start-radius': 'inherit',
			'border-start-end-radius': 'inherit',
			'border-end-start-radius': 'unset',
			'border-end-end-radius': 'unset'
		}
	});

	css += createClass({
		className: '.card :where(figure:last-child)',
		properties: {
			overflow: 'hidden',
			'border-start-start-radius': 'unset',
			'border-start-end-radius': 'unset',
			'border-end-start-radius': 'inherit',
			'border-end-end-radius': 'inherit'
		}
	});

	css += createClass({
		className: '.card-actions',
		properties: {
			display: 'flex',
			'flex-wrap': 'wrap',
			'align-items': 'flex-start',
			gap: '0.5rem',
			'border-end-end-radius': 'unset'
		}
	});

	css += createClass({
		className: '.card.image-full',
		properties: {
			display: 'grid'
		}
	});

	css += createClass({
		className: '.card.image-full::before, .card.image-full>*',
		properties: {
			'grid-column-start': 1,
			'grid-row-start': 1
		}
	});

	css += createClass({
		className: '.card.image-full::before',
		properties: {
			position: 'relative',
			content: '""',
			'z-index': 10,
			'border-radius': '1rem',
			'background-color': 'var(--color-shadow)',
			opacity: 0.75
		}
	});

	css += createClass({
		className: '.card-side',
		properties: {
			'align-items': 'stretch',
			'flex-direction': 'row'
		}
	});

	return css;
};
