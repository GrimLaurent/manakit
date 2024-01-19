import { createClass } from '../../utils';

const properties = [
	{
		className: '.btn-info',
		properties: {
			'background-color': 'var(--color-info)',
			color: 'var(--color-on-info)'
		}
	},
	{
		className: '.btn-success',
		properties: {
			'background-color': 'var(--color-success)',
			color: 'var(--color-on-success)'
		}
	},
	{
		className: '.btn-warning',
		properties: {
			'background-color': 'var(--color-warning)',
			color: 'var(--color-on-warning)'
		}
	},
	{
		className: '.btn-error',
		properties: {
			'background-color': 'var(--color-error)',
			color: 'var(--color-on-error)'
		}
	},
	{
		parentClassName: '.btn-outline',
		className: '.btn-info',
		properties: {
			color: 'var(--color-info)'
		}
	},
	{
		parentClassName: '.btn-outline',
		className: '.btn-success',
		properties: {
			color: 'var(--color-success)'
		}
	},
	{
		parentClassName: '.btn-outline',
		className: '.btn-warning',
		properties: {
			color: 'var(--color-warning)'
		}
	},
	{
		parentClassName: '.btn-outline',
		className: '.btn-error',
		properties: {
			color: 'var(--color-error)'
		}
	},
	{
		parentClassName: '.btn-text',
		className: '.btn-info',
		properties: {
			color: 'var(--color-info)'
		}
	},
	{
		parentClassName: '.btn-text',
		className: '.btn-success',
		properties: {
			color: 'var(--color-success)'
		}
	},
	{
		parentClassName: '.btn-text',
		className: '.btn-warning',
		properties: {
			color: 'var(--color-warning)'
		}
	},
	{
		parentClassName: '.btn-text',
		className: '.btn-error',
		properties: {
			color: 'var(--color-error)'
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
