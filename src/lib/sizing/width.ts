import { createClass } from '../../utils';

const properties = [
	{
		className: 'auto',
		properties: {
			width: 'auto'
		}
	},
	{
		className: '0',
		properties: {
			width: 0
		}
	},
	{
		className: '25',
		properties: {
			width: '25%'
		}
	},
	{
		className: '50',
		properties: {
			width: '50%'
		}
	},
	{
		className: '75',
		properties: {
			width: '75%'
		}
	},
	{
		className: '100',
		properties: {
			width: '100%'
		}
	}
];

// class
export const widthClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.w-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
