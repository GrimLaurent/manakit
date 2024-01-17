import { createClass } from '../../utils';

const properties = [
	{
		className: 'start',
		properties: {
			'justify-content': 'flex-start'
		}
	},
	{
		className: 'end',
		properties: {
			'justify-content': 'flex-end'
		}
	},
	{
		className: 'center',
		properties: {
			'justify-content': 'center'
		}
	},
	{
		className: 'space-between',
		properties: {
			'justify-content': 'space-between'
		}
	},
	{
		className: 'space-around',
		properties: {
			'justify-content': 'space-around'
		}
	},
	{
		className: 'space-evenly',
		properties: {
			'justify-content': 'space-evenly'
		}
	}
];

// class
export const justifyClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.justify-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
