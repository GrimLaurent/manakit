import { createClass } from '../../utils';

const properties = [
	{
		className: 'start',
		properties: {
			float: 'inline-start'
		}
	},
	{
		className: 'end',
		properties: {
			float: 'inline-end'
		}
	},
	{
		className: 'right',
		properties: {
			float: 'right'
		}
	},
	{
		className: 'left',
		properties: {
			float: 'left'
		}
	},
	{
		className: 'none',
		properties: {
			float: 'none'
		}
	}
];

// class
export const floatClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: 'float-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
