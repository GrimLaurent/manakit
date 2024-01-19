import { createClass } from '../../utils';

const properties = [
	{
		className: '.btn-xs',
		properties: {
			height: '1.5rem',
			'min-height': '1.5rem',
			'padding-left': '0.5rem',
			'padding-right': '0.5rem',
			'font-size': '.75rem'
		}
	},
	{
		className: '.btn-sm',
		properties: {
			height: '2rem',
			'min-height': '2rem',
			'padding-left': '.75rem',
			'padding-right': '.75rem',
			'font-size': '.875rem'
		}
	},
	{
		className: '.btn-md',
		properties: {
			height: '3rem',
			'min-height': '3rem',
			'padding-left': '1rem',
			'padding-right': '1rem',
			'font-size': '.875rem'
		}
	},
	{
		className: '.btn-lg',
		properties: {
			height: '44px',
			'min-height': '44px',
			'padding-left': '1.5rem',
			'padding-right': '1.5rem',
			'font-size': '1.125rem'
		}
	},
	{
		className: '.btn-xl',
		properties: {
			height: '52px',
			'min-height': '52px',
			'padding-left': '1.5rem',
			'padding-right': '1.5rem',
			'font-size': '1.125rem'
		}
	}
];

// class
export const btnSizeClass = ({ screen }: { screen: string }) => {
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
