import { createClass } from '../../utils';

const properties = [
	{
		className: 'fill',
		properties: {
			flex: '1 1 auto'
		}
	},
	{
		className: '1-1',
		properties: {
			flex: '1 1 auto'
		}
	},
	{
		className: '1-0',
		properties: {
			flex: '1 0 auto'
		}
	},
	{
		className: '0-1',
		properties: {
			flex: '0 1 auto'
		}
	},
	{
		className: '0-0',
		properties: {
			flex: '0 0 auto'
		}
	},
	{
		className: '1-1-100',
		properties: {
			flex: '1 1 100%'
		}
	},
	{
		className: '1-0-100',
		properties: {
			flex: '1 0 100%'
		}
	},
	{
		className: '0-1-100',
		properties: {
			flex: '0 1 100%'
		}
	},
	{
		className: '0-0-100',
		properties: {
			flex: '0 0 100%'
		}
	}
];

// class
export const shortlandClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.flex-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
