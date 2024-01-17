import { createClass } from '../../utils';

const properties = [
	{
		className: 'grow-0',
		properties: {
			'flex-grow': 0
		}
	},
	{
		className: 'grow-1',
		properties: {
			'flex-grow': 1
		}
	},
	{
		className: 'shrink-0',
		properties: {
			'flex-shrink': 0
		}
	},
	{
		className: 'shrink-1',
		properties: {
			'flex-shrink': 1
		}
	}
];

// class
export const growShrinkClass = ({ screen }: { screen: string }) => {
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
