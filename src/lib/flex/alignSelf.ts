import { createClass } from '../../utils';

const properties = [
	{
		className: 'start',
		properties: {
			'align-self': 'flex-start'
		}
	},
	{
		className: 'end',
		properties: {
			'align-self': 'flex-end'
		}
	},
	{
		className: 'center',
		properties: {
			'align-self': 'center'
		}
	},
	{
		className: 'baseline',
		properties: {
			'align-self': 'baseline'
		}
	},
	{
		className: 'stretch',
		properties: {
			'align-self': 'stretch'
		}
	},
	{
		className: 'auto',
		properties: {
			'align-self': 'auto'
		}
	}
];

// class
export const alignSelfClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.align-self-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
