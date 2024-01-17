import { createClass } from '../../utils';

const properties = [
	{
		className: 'lowercase',
		value: 'lowercase'
	},
	{
		className: 'uppercase',
		value: 'uppercase'
	},
	{
		className: 'capitalize',
		value: 'capitalize'
	},
	{
		className: 'none',
		value: 'none'
	}
];

// class
export const transformClass = () => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.text-' + item.className,
			properties: {
				'text-transform': item.value
			}
		});
	});

	css += createClass({
		className: '.text-break',
		properties: {
			'overflow-wrap': `break-word`,
			'word-break': `break-word`
		}
	});

	css += createClass({
		className: '.text-no-break',
		properties: {
			'white-space': 'nowrap'
		}
	});
	css += createClass({
		className: '.text-overflow',
		properties: {
			'white-space': 'nowrap',
			overflow: 'hidden',
			'text-overflow': 'ellipsis'
		}
	});
	return css;
};
