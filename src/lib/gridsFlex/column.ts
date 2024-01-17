import { createClass } from '../../utils';

const properties = [
	{
		className: '.columns',
		properties: {
			width: `100%`,
			padding: `12px`
		}
	},
	{
		className: '.column-1',
		properties: {
			flex: `0 0 calc((100% / 12) * 1)`,
			'max-width': `calc((100% / 12) * 1)`
		}
	},
	{
		className: '.column-2',
		properties: {
			flex: `0 0 calc((100% / 12) * 2)`,
			'max-width': `calc((100% / 12) * 2)`
		}
	},
	{
		className: '.column-3',
		properties: {
			flex: `0 0 calc((100% / 12) * 3)`,
			'max-width': `calc((100% / 12) * 3)`
		}
	},
	{
		className: '.column-4',
		properties: {
			flex: `0 0 calc((100% / 12) * 4)`,
			'max-width': `calc((100% / 12) * 4)`
		}
	},
	{
		className: '.column-5',
		properties: {
			flex: `0 0 calc((100% / 12) * 5)`,
			'max-width': `calc((100% / 12) * 5)`
		}
	},
	{
		className: '.column-6',
		properties: {
			flex: `0 0 calc((100% / 12) * 6)`,
			'max-width': `calc((100% / 12) * 6)`
		}
	},
	{
		className: '.column-7',
		properties: {
			flex: `0 0 calc((100% / 12) * 7)`,
			'max-width': `calc((100% / 12) * 7)`
		}
	},
	{
		className: '.column-8',
		properties: {
			flex: `0 0 calc((100% / 12) * 8)`,
			'max-width': `calc((100% / 12) * 8)`
		}
	},
	{
		className: '.column-9',
		properties: {
			flex: `0 0 calc((100% / 12) * 9)`,
			'max-width': `calc((100% / 12) * 9)`
		}
	},
	{
		className: '.column-10',
		properties: {
			flex: `0 0 calc((100% / 12) * 10)`,
			'max-width': `calc((100% / 12) * 10)`
		}
	},
	{
		className: '.column-11',
		properties: {
			flex: `0 0 calc((100% / 12) * 11)`,
			'max-width': `calc((100% / 12) * 11)`
		}
	},
	{
		className: '.column-12',
		properties: {
			flex: `0 0 calc((100% / 12) * 12)`,
			'max-width': `calc((100% / 12) * 12)`
		}
	}
];

// class
export const columnClass = ({ screen }: { screen: string }) => {
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
