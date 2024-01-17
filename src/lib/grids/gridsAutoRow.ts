import { createClass } from '../../utils';

const properties = [
	{
		className: 'auto',
		properties: {
			'grid-auto-rows': 'auto'
		}
	},
	{
		className: 'min',
		properties: {
			'grid-auto-rows': 'min-content'
		}
	},
	{
		className: 'max',
		properties: {
			'grid-auto-rows': 'max-content'
		}
	},
	{
		className: 'fr',
		properties: {
			'grid-auto-rows': 'minmax(0, 1fr)'
		}
	}
];

// class
export const gridsAutoRowClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.auto-rows-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
