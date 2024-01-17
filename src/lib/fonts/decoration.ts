import { createClass } from '../../utils';

const properties = [
	{
		className: 'none',
		value: 'none'
	},
	{
		className: 'line-through',
		value: 'line-through'
	},
	{
		className: 'overline',
		value: 'overline'
	},
	{
		className: 'underline',
		value: 'underline'
	}
];

// class
export const decorationClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.text-decoration-' + item.className,
			properties: {
				'text-decoration': item.value
			},
			screen
		});
	});

	return css;
};
