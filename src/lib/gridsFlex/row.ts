import { createClass } from '../../utils';

const properties = [
	{
		className: '.row',
		properties: {
			display: 'flex',
			'flex-wrap': 'wrap',
			flex: '1 1 auto',
			margin: '-12px'
		}
	},
	{
		className: '.row.row--no-gutters',
		properties: {
			margin: 0
		}
	},
	{
		className: '.row.row--no-gutters > [class*=column-]',
		properties: {
			padding: 0
		}
	}
];

// class
export const rowClass = () => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: item.className,
			properties: item.properties
		});
	});

	return css;
};
