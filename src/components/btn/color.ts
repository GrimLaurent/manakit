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
	}
];

// class
export const btnColorClass = ({ screen }: { screen: string }) => {
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
