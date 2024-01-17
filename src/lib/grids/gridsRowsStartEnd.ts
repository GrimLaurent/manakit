import { createClass } from '../../utils';

const properties = [
	{
		className: 'auto',
		properties: {
			'grid-row': 'auto'
		}
	},
	{
		className: 'span-1',
		properties: {
			'grid-row': 'span 1 / span 1'
		}
	},
	{
		className: 'span-2',
		properties: {
			'grid-row': 'span 2 / span 2'
		}
	},
	{
		className: 'span-3',
		properties: {
			'grid-row': 'span 3 / span 3'
		}
	},
	{
		className: 'span-4',
		properties: {
			'grid-row': 'span 4 / span 4'
		}
	},
	{
		className: 'span-5',
		properties: {
			'grid-row': 'span 5 / span 5'
		}
	},
	{
		className: 'span-6',
		properties: {
			'grid-row': 'span 6 / span 6'
		}
	},
	{
		className: 'span-7',
		properties: {
			'grid-row': 'span 7 / span 7'
		}
	},
	{
		className: 'span-8',
		properties: {
			'grid-row': 'span 8 / span 8'
		}
	},
	{
		className: 'span-9',
		properties: {
			'grid-row': 'span 9 / span 9'
		}
	},
	{
		className: 'span-10',
		properties: {
			'grid-row': 'span 10 / span 10'
		}
	},
	{
		className: 'span-11',
		properties: {
			'grid-row': 'span 11 / span 11'
		}
	},
	{
		className: 'span-12',
		properties: {
			'grid-row': 'span 12 / span 12'
		}
	},
	{
		className: 'span-full',
		properties: {
			'grid-row': '1 / -1'
		}
	},
	{
		className: 'start-auto',
		properties: {
			'grid-row-start': 'auto'
		}
	},
	{
		className: 'start-1',
		properties: {
			'grid-row-start': 1
		}
	},
	{
		className: 'start-2',
		properties: {
			'grid-row-start': 2
		}
	},
	{
		className: 'start-3',
		properties: {
			'grid-row-start': 3
		}
	},
	{
		className: 'start-4',
		properties: {
			'grid-row-start': 4
		}
	},
	{
		className: 'start-5',
		properties: {
			'grid-row-start': 5
		}
	},
	{
		className: 'start-6',
		properties: {
			'grid-row-start': 6
		}
	},
	{
		className: 'start-7',
		properties: {
			'grid-row-start': 7
		}
	},
	{
		className: 'start-8',
		properties: {
			'grid-row-start': 8
		}
	},
	{
		className: 'start-9',
		properties: {
			'grid-row-start': 9
		}
	},
	{
		className: 'start-10',
		properties: {
			'grid-row-start': 10
		}
	},
	{
		className: 'start-11',
		properties: {
			'grid-row-start': 11
		}
	},
	{
		className: 'start-12',
		properties: {
			'grid-row-start': 12
		}
	},
	{
		className: 'start-13',
		properties: {
			'grid-row-start': 13
		}
	},
	{
		className: 'end-auto',
		properties: {
			'grid-row-end': 'auto'
		}
	},
	{
		className: 'end-1',
		properties: {
			'grid-row-end': 1
		}
	},
	{
		className: 'end-2',
		properties: {
			'grid-row-end': 2
		}
	},
	{
		className: 'end-3',
		properties: {
			'grid-row-end': 3
		}
	},
	{
		className: 'end-4',
		properties: {
			'grid-row-end': 4
		}
	},
	{
		className: 'end-5',
		properties: {
			'grid-row-end': 5
		}
	},
	{
		className: 'end-6',
		properties: {
			'grid-row-end': 6
		}
	},
	{
		className: 'end-7',
		properties: {
			'grid-row-end': 7
		}
	},
	{
		className: 'end-8',
		properties: {
			'grid-row-end': 8
		}
	},
	{
		className: 'end-9',
		properties: {
			'grid-row-end': 9
		}
	},
	{
		className: 'end-10',
		properties: {
			'grid-row-end': 10
		}
	},
	{
		className: 'end-11',
		properties: {
			'grid-row-end': 11
		}
	},
	{
		className: 'end-12',
		properties: {
			'grid-row-end': 12
		}
	},
	{
		className: 'end-13',
		properties: {
			'grid-row-end': 13
		}
	}
];

// class
export const gridsRowsStartEndClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.row-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
