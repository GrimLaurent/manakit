import { createClass } from '../../utils';

const properties = [
	{
		className: 'row',
		properties: {
			'grid-auto-flow': 'row'
		}
	},
	{
		className: 'col',
		properties: {
			'grid-auto-flow': 'column'
		}
	},
	{
		className: 'dense',
		properties: {
			'grid-auto-flow': 'dense'
		}
	},
	{
		className: 'row-dense',
		properties: {
			'grid-auto-flow': 'row dense'
		}
	},
	{
		className: 'row-col',
		properties: {
			'grid-auto-flow': 'column dense'
		}
	}
];

// class
export const gridsAutoFlowClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.grid-flow-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
