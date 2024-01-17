import { createClass } from '../../utils';

const properties = [
	{
		className: 'first',
		properties: {
			order: -1
		}
	},
	{
		className: '0',
		properties: {
			order: 0
		}
	},
	{
		className: '1',
		properties: {
			order: 1
		}
	},
	{
		className: '2',
		properties: {
			order: 2
		}
	},
	{
		className: '3',
		properties: {
			order: 3
		}
	},
	{
		className: '4',
		properties: {
			order: 4
		}
	},
	{
		className: '5',
		properties: {
			order: 5
		}
	},
	{
		className: '6',
		properties: {
			order: 6
		}
	},
	{
		className: '7',
		properties: {
			order: 7
		}
	},
	{
		className: '8',
		properties: {
			order: 8
		}
	},
	{
		className: '9',
		properties: {
			order: 9
		}
	},
	{
		className: '10',
		properties: {
			order: 10
		}
	},
	{
		className: '11',
		properties: {
			order: 11
		}
	},
	{
		className: '12',
		properties: {
			order: 12
		}
	},
	{
		className: 'last',
		properties: {
			order: 13
		}
	}
];

// class
export const orderClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.order-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
