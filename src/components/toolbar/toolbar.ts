import { createClass } from '../../utils';

// class
export const toolbarClass = () => {
	let css = '';

	css += createClass({
		className: '.toolbar',
		properties: {
			display: 'flex',
			'align-items': 'center',
			padding: '.5rem',
			'min-height': '4rem',
			width: '100%'
		}
	});

	return css;
};
