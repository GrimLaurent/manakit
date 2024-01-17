import { createClass } from '../../utils';

const properties = [
	{
		className: 'left',
		value: 'left'
	},
	{
		className: 'right',
		value: 'right'
	},
	{
		className: 'center',
		value: 'center'
	},
	{
		className: 'justify',
		value: 'justify'
	},
	{
		className: 'start',
		value: 'start'
	},
	{
		className: 'end',
		value: 'end'
	}
];

// class
export const alignClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.text-' + item.className,
			properties: {
				'text-align': item.value
			},
			screen
		});
	});

	return css;
};
