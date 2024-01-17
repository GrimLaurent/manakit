import { createClass } from '../../utils';

const properties = [
	{
		className: '.btn-info',
		properties: {
			'background-color': 'var(--mk-info)'
		}
	},
	{
		className: '.btn-success',
		properties: {
			'background-color': 'var(--mk-success)'
		}
	},
	{
		className: '.btn-warning',
		properties: {
			'background-color': 'var(--mk-warning)'
		}
	},
	{
		className: '.btn-error',
		properties: {
			'background-color': 'var(--mk-error)'
		}
	},
	{
		parentClassName: '.btn-outline',
		className: '.btn-info',
		properties: {
			color: 'var(--mk-info)'
		}
	},
	{
		parentClassName: '.btn-outline',
		className: '.btn-success',
		properties: {
			color: 'var(--mk-success)'
		}
	},
	{
		parentClassName: '.btn-outline',
		className: '.btn-warning',
		properties: {
			color: 'var(--mk-warning)'
		}
	},
	{
		parentClassName: '.btn-outline',
		className: '.btn-error',
		properties: {
			color: 'var(--mk-error)'
		}
	}
];

// class
export const btnColorClass = () => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			parentClassName: item.parentClassName,
			className: item.className,
			properties: item.properties
		});
	});

	return css;
};
