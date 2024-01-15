import { createClass } from '../../utils';

const properties = [
	{
		className: '.btn-wide',
		properties: {
			width: '16rem'
		}
	},
	{
		className: '.btn-block',
		properties: {
			width: '100%'
		}
	},
	{
		className: '.btn-circle',
		properties: {
			height: '3rem',
			width: '3rem',
			padding: 0,
			'border-radius': '9999px'
		}
	},
	{
		className: '.btn-square',
		properties: {
			height: '3rem',
			width: '3rem',
			padding: 0
		}
	}
];

// class
export const btnTypeClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
