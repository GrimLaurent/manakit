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
	},
	{
		className: '.btn-outline',
		properties: {
			'border-color': 'currentColor',
			'background-color': 'transparent'
		}
	},
	{
		className: '.btn-text',
		properties: {
			'background-color': 'transparent'
		}
	}
];

// class
export const btnTypeClass = () => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: item.className,
			properties: item.properties
		});
	});

	return css;
};
