import { createClass } from '../../utils';

const properties = [
	{
		className: 'auto',
		properties: {
			height: 'auto'
		}
	},
	{
		className: 'screen',
		properties: {
			height: '100dvh'
		}
	},
	{
		className: '0',
		properties: {
			height: 0
		}
	},
	{
		className: '25',
		properties: {
			height: '25%'
		}
	},
	{
		className: '50',
		properties: {
			height: '50%'
		}
	},
	{
		className: '75',
		properties: {
			height: '75%'
		}
	},
	{
		className: '100',
		properties: {
			height: '100%'
		}
	}
];

// class
export const heightClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.h-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
