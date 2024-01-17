import { createClass } from '../../utils';

const properties = [
	{
		className: 'none',
		properties: {
			'grid-template-columns': 'none'
		}
	},
	{
		className: 'subgrid',
		properties: {
			'grid-template-columns': 'subgrid'
		}
	},
	{
		className: '1',
		properties: {
			'grid-template-columns': 'repeat(1, minmax(0, 1fr))'
		}
	},
	{
		className: '2',
		properties: {
			'grid-template-columns': 'repeat(2, minmax(0, 1fr))'
		}
	},
	{
		className: '3',
		properties: {
			'grid-template-columns': 'repeat(3, minmax(0, 1fr))'
		}
	},
	{
		className: '4',
		properties: {
			'grid-template-columns': 'repeat(4, minmax(0, 1fr))'
		}
	},
	{
		className: '5',
		properties: {
			'grid-template-columns': 'repeat(5, minmax(0, 1fr))'
		}
	},
	{
		className: '6',
		properties: {
			'grid-template-columns': 'repeat(6, minmax(0, 1fr))'
		}
	},
	{
		className: '7',
		properties: {
			'grid-template-columns': 'repeat(7, minmax(0, 1fr))'
		}
	},
	{
		className: '8',
		properties: {
			'grid-template-columns': 'repeat(8, minmax(0, 1fr))'
		}
	},
	{
		className: '9',
		properties: {
			'grid-template-columns': 'repeat(9, minmax(0, 1fr))'
		}
	},
	{
		className: '10',
		properties: {
			'grid-template-columns': 'repeat(10, minmax(0, 1fr))'
		}
	},
	{
		className: '11',
		properties: {
			'grid-template-columns': 'repeat(11, minmax(0, 1fr))'
		}
	},
	{
		className: '12',
		properties: {
			'grid-template-columns': 'repeat(12, minmax(0, 1fr))'
		}
	}
];

// class
export const gridsColsClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.grid-cols-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
