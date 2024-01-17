import { createClass } from '../../utils';

const properties = [
	{
		className: 'none',
		value: 0
	},
	{
		className: 'sm',
		value: '0.125rem'
	},
	{
		className: 'null',
		value: '0.25rem'
	},
	{
		className: 'lg',
		value: '0.375rem'
	},
	{
		className: 'xl',
		value: '0.5rem'
	},
	{
		className: 'xxl',
		value: '0.75rem'
	},
	{
		className: 'full',
		value: '9999px'
	},
	{
		className: 'circle',
		value: '50%'
	}
];

// class
export const radiusClass = () => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: item.className === 'null' ? '.rounded' : '.rounded-' + item.className,
			properties: {
				'border-radius': item.value
			}
		});
	});

	properties.forEach((item) => {
		css += createClass({
			className: item.className === 'null' ? '.rounded-tl' : '.rounded-tl-' + item.className,
			properties: {
				'border-top-left-radius': item.value
			}
		});
	});

	properties.forEach((item) => {
		css += createClass({
			className: item.className === 'null' ? '.rounded-tr' : '.rounded-tr-' + item.className,
			properties: {
				'border-top-right-radius': item.value
			}
		});
	});

	properties.forEach((item) => {
		css += createClass({
			className: item.className === 'null' ? '.rounded-bl' : '.rounded-bl-' + item.className,
			properties: {
				'border-bottom-left-radius': item.value
			}
		});
	});

	properties.forEach((item) => {
		css += createClass({
			className: item.className === 'null' ? '.rounded-br' : '.rounded-br-' + item.className,
			properties: {
				'border-bottom-right-radius': item.value
			}
		});
	});

	properties.forEach((item) => {
		css += createClass({
			className: item.className === 'null' ? '.rounded-t' : '.rounded-t-' + item.className,
			properties: {
				'border-top-left-radius': item.value,
				'border-top-right-radius': item.value
			}
		});
	});

	properties.forEach((item) => {
		css += createClass({
			className: item.className === 'null' ? '.rounded-b' : '.rounded-b-' + item.className,
			properties: {
				'border-bottom-left-radius': item.value,
				'border-bottom-right-radius': item.value
			}
		});
	});

	return css;
};
