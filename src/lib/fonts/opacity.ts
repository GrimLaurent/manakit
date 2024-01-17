import { createClass } from '../../utils';

const properties = [
	{
		className: 'high-emphasis',
		value: 1
	},
	{
		className: 'medium-emphasis',
		value: 0.7
	},
	{
		className: 'disabled',
		value: 0.38
	}
];

// class
export const opacityClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.text-' + item.className,
			properties: {
				opacity: item.value
			},
			screen
		});
	});

	return css;
};
