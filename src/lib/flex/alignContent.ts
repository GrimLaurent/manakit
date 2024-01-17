import { createClass } from '../../utils';

const properties = [
	{
		className: 'start',
		properties: {
			'align-content': 'flex-start'
		}
	},
	{
		className: 'end',
		properties: {
			'align-content': 'flex-end'
		}
	},
	{
		className: 'center',
		properties: {
			'align-content': 'center'
		}
	},
	{
		className: 'space-between',
		properties: {
			'align-content': 'space-between'
		}
	},
	{
		className: 'space-around',
		properties: {
			'align-content': 'space-around'
		}
	},
	{
		className: 'space-evenly',
		properties: {
			'align-content': 'space-evenly'
		}
	},
	{
		className: 'stretch',
		properties: {
			'align-content': 'stretch'
		}
	}
];

// class
export const alignContentClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.align-content-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
