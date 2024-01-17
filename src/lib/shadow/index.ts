import { createClass } from '../../utils';

const properties = [
	{
		className: 'sm',
		value: ['0 1px 2px 0']
	},
	{
		className: 'null',
		value: ['0 1px 3px 0', '0 1px 2px -1px']
	},
	{
		className: 'md',
		value: ['0 4px 6px -1px', '0 2px 4px -2px']
	},
	{
		className: 'lg',
		value: ['0 10px 15px -3px', '0 4px 6px -4px']
	},
	{
		className: 'xl',
		value: ['0 20px 25px -5px', '0 8px 10px -6px']
	},
	{
		className: 'xxl',
		value: ['0 25px 50px -12px']
	},
	{
		className: 'inner',
		value: ['inset 0 2px 4px 0']
	},
	{
		className: 'none',
		value: ['0 0']
	}
];

// class
export const shadowClass = () => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.shadow-' + item.className,
			properties: {
				'box-shadow':
					item?.value?.length === 1
						? `${item?.value[0]} rgba(0, 0, 0, 0.2)`
						: `${item?.value[0]} rgba(0, 0, 0, 0.2), ${item?.value[1]} rgba(0, 0, 0, 0.14)`
			}
		});
	});

	return css;
};
