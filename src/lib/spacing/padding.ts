import { createClass } from '../../utils';

const properties = [
	{
		size: '0',
		value: 0
	},
	{
		size: '1',
		value: '1px'
	},
	{
		size: '2',
		value: '2px'
	},
	{
		size: '3',
		value: '3px'
	},
	{
		size: '4',
		value: '4px'
	},
	{
		size: '5',
		value: '5px'
	},
	{
		size: '6',
		value: '6px'
	},
	{
		size: '7',
		value: '7px'
	},
	{
		size: '8',
		value: '8px'
	},
	{
		size: '9',
		value: '9px'
	},
	{
		size: '10',
		value: '10px'
	},
	{
		size: '11',
		value: '11px'
	},
	{
		size: '12',
		value: '12px'
	},
	{
		size: '13',
		value: '13px'
	},
	{
		size: '14',
		value: '14px'
	},
	{
		size: '15',
		value: '15px'
	},
	{
		size: '16',
		value: '16px'
	}
];

// class
export const paddingClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.pt-' + item.size,
			properties: {
				'padding-top': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.mb-' + item.size,
			properties: {
				'margin-bottom': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.pl-' + item.size,
			properties: {
				'padding-left': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.pr-' + item.size,
			properties: {
				'padding-right': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.px-' + item.size,
			properties: {
				'padding-left': `${item?.value}`,
				'padding-right': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.py-' + item.size,
			properties: {
				'padding-top': `${item?.value}`,
				'padding-bottom': `${item?.value}`
			},
			important: true,
			screen
		});
		css += createClass({
			className: '.p-' + item.size,
			properties: {
				padding: `${item?.value}`
			},
			important: true,
			screen
		});
	});

	return css;
};
