import { createClass } from '../../utils';

const properties = [
	{
		className: '.block',
		properties: {
			display: 'block'
		}
	},
	{
		className: '.inline-block',
		properties: {
			display: 'inline-block'
		}
	},
	{
		className: '.inline',
		properties: {
			display: 'inline'
		}
	},
	{
		className: '.flex',
		properties: {
			display: 'flex'
		}
	},
	{
		className: '.inline-flex',
		properties: {
			display: 'inline-flex'
		}
	},
	{
		className: '.table',
		properties: {
			display: 'table'
		}
	},
	{
		className: '.table-table',
		properties: {
			display: 'table-table'
		}
	},
	{
		className: '.table-caption',
		properties: {
			display: 'table-caption'
		}
	},
	{
		className: '.table-cell',
		properties: {
			display: 'table-cell'
		}
	},
	{
		className: '.table-column',
		properties: {
			display: 'table-column'
		}
	},
	{
		className: '.table-column-group',
		properties: {
			display: 'table-column-group'
		}
	},
	{
		className: '.table-footer-group',
		properties: {
			display: 'table-footer-group'
		}
	},
	{
		className: '.table-header-group',
		properties: {
			display: 'table-header-group'
		}
	},
	{
		className: '.table-row-group',
		properties: {
			display: 'table-row-group'
		}
	},
	{
		className: '.table-row',
		properties: {
			display: 'table-row'
		}
	},
	{
		className: '.flow-root',
		properties: {
			display: 'flow-root'
		}
	},
	{
		className: '.grid',
		properties: {
			display: 'grid'
		}
	},
	{
		className: '.inline-grid',
		properties: {
			display: 'inline-grid'
		}
	},
	{
		className: '.contents',
		properties: {
			display: 'contents'
		}
	},
	{
		className: '.list-item',
		properties: {
			display: 'list-item'
		}
	},
	{
		className: '.none',
		properties: {
			display: 'none'
		}
	}
];

// class
export const displayClass = ({ screen }: { screen: string }) => {
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
