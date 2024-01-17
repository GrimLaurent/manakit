import { createClass } from '../../utils';

const properties = [
	{
		className: 'none',
		properties: {
			'grid-template-rows': 'none'
		}
	},
	{
		className: 'subgrid',
		properties: {
			'grid-template-rows': 'subgrid'
		}
	},
	{
		className: '1',
		properties: {
			'grid-template-rows': 'repeat(1, minmax(0, 1fr))'
		}
	},
	{
		className: '2',
		properties: {
			'grid-template-rows': 'repeat(2, minmax(0, 1fr))'
		}
	},
	{
		className: '3',
		properties: {
			'grid-template-rows': 'repeat(3, minmax(0, 1fr))'
		}
	},
	{
		className: '4',
		properties: {
			'grid-template-rows': 'repeat(4, minmax(0, 1fr))'
		}
	},
	{
		className: '5',
		properties: {
			'grid-template-rows': 'repeat(5, minmax(0, 1fr))'
		}
	},
	{
		className: '6',
		properties: {
			'grid-template-rows': 'repeat(6, minmax(0, 1fr))'
		}
	},
	{
		className: '7',
		properties: {
			'grid-template-rows': 'repeat(7, minmax(0, 1fr))'
		}
	},
	{
		className: '8',
		properties: {
			'grid-template-rows': 'repeat(8, minmax(0, 1fr))'
		}
	},
	{
		className: '9',
		properties: {
			'grid-template-rows': 'repeat(9, minmax(0, 1fr))'
		}
	},
	{
		className: '10',
		properties: {
			'grid-template-rows': 'repeat(10, minmax(0, 1fr))'
		}
	},
	{
		className: '11',
		properties: {
			'grid-template-rows': 'repeat(11, minmax(0, 1fr))'
		}
	},
	{
		className: '12',
		properties: {
			'grid-template-rows': 'repeat(12, minmax(0, 1fr))'
		}
	}
];

// class
export const gridsRowsClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.grid-rows-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
