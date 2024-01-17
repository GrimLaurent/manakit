import { createClass } from '../../utils';

const properties = [
	{
		className: 'auto',
		properties: {
			'grid-auto-columns': 'auto'
		}
	},
	{
		className: 'min',
		properties: {
			'grid-auto-columns': 'min-content'
		}
	},
	{
		className: 'max',
		properties: {
			'grid-auto-columns': 'max-content'
		}
	},
	{
		className: 'fr',
		properties: {
			'grid-auto-columns': 'minmax(0, 1fr)'
		}
	}
];

// class
export const gridsAutoColumnClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.auto-cols-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
