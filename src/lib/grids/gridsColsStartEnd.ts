import { createClass } from '../../utils';

const properties = [
	{
		className: 'auto',
		properties: {
			'grid-column': 'auto'
		}
	},
	{
		className: 'span-1',
		properties: {
			'grid-column': 'span 1 / span 1'
		}
	},
	{
		className: 'span-2',
		properties: {
			'grid-column': 'span 2 / span 2'
		}
	},
	{
		className: 'span-3',
		properties: {
			'grid-column': 'span 3 / span 3'
		}
	},
	{
		className: 'span-4',
		properties: {
			'grid-column': 'span 4 / span 4'
		}
	},
	{
		className: 'span-5',
		properties: {
			'grid-column': 'span 5 / span 5'
		}
	},
	{
		className: 'span-6',
		properties: {
			'grid-column': 'span 6 / span 6'
		}
	},
	{
		className: 'span-7',
		properties: {
			'grid-column': 'span 7 / span 7'
		}
	},
	{
		className: 'span-8',
		properties: {
			'grid-column': 'span 8 / span 8'
		}
	},
	{
		className: 'span-9',
		properties: {
			'grid-column': 'span 9 / span 9'
		}
	},
	{
		className: 'span-10',
		properties: {
			'grid-column': 'span 10 / span 10'
		}
	},
	{
		className: 'span-11',
		properties: {
			'grid-column': 'span 11 / span 11'
		}
	},
	{
		className: 'span-12',
		properties: {
			'grid-column': 'span 12 / span 12'
		}
	},
	{
		className: 'span-full',
		properties: {
			'grid-column': '1 / -1'
		}
	},
	{
		className: 'start-auto',
		properties: {
			'grid-column-start': 'auto'
		}
	},
	{
		className: 'start-1',
		properties: {
			'grid-column-start': 1
		}
	},
	{
		className: 'start-2',
		properties: {
			'grid-column-start': 2
		}
	},
	{
		className: 'start-3',
		properties: {
			'grid-column-start': 3
		}
	},
	{
		className: 'start-4',
		properties: {
			'grid-column-start': 4
		}
	},
	{
		className: 'start-5',
		properties: {
			'grid-column-start': 5
		}
	},
	{
		className: 'start-6',
		properties: {
			'grid-column-start': 6
		}
	},
	{
		className: 'start-7',
		properties: {
			'grid-column-start': 7
		}
	},
	{
		className: 'start-8',
		properties: {
			'grid-column-start': 8
		}
	},
	{
		className: 'start-9',
		properties: {
			'grid-column-start': 9
		}
	},
	{
		className: 'start-10',
		properties: {
			'grid-column-start': 10
		}
	},
	{
		className: 'start-11',
		properties: {
			'grid-column-start': 11
		}
	},
	{
		className: 'start-12',
		properties: {
			'grid-column-start': 12
		}
	},
	{
		className: 'start-13',
		properties: {
			'grid-column-start': 13
		}
	},
	{
		className: 'end-auto',
		properties: {
			'grid-column-end': 'auto'
		}
	},
	{
		className: 'end-1',
		properties: {
			'grid-column-end': 1
		}
	},
	{
		className: 'end-2',
		properties: {
			'grid-column-end': 2
		}
	},
	{
		className: 'end-3',
		properties: {
			'grid-column-end': 3
		}
	},
	{
		className: 'end-4',
		properties: {
			'grid-column-end': 4
		}
	},
	{
		className: 'end-5',
		properties: {
			'grid-column-end': 5
		}
	},
	{
		className: 'end-6',
		properties: {
			'grid-column-end': 6
		}
	},
	{
		className: 'end-7',
		properties: {
			'grid-column-end': 7
		}
	},
	{
		className: 'end-8',
		properties: {
			'grid-column-end': 8
		}
	},
	{
		className: 'end-9',
		properties: {
			'grid-column-end': 9
		}
	},
	{
		className: 'end-10',
		properties: {
			'grid-column-end': 10
		}
	},
	{
		className: 'end-11',
		properties: {
			'grid-column-end': 11
		}
	},
	{
		className: 'end-12',
		properties: {
			'grid-column-end': 12
		}
	},
	{
		className: 'end-13',
		properties: {
			'grid-column-end': 13
		}
	}
];

// class
export const gridsColsStartEndClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: '.col-' + item.className,
			properties: item.properties,
			screen
		});
	});

	return css;
};
