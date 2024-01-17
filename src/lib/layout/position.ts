import { createClass } from '../../utils';

const properties = [
	{
		className: '.static',
		properties: {
			position: 'static'
		}
	},
	{
		className: '.relative',
		properties: {
			position: 'relative'
		}
	},
	{
		className: '.fixed',
		properties: {
			position: 'fixed'
		}
	},
	{
		className: '.absolute',
		properties: {
			position: 'absolute'
		}
	},
	{
		className: '.sticky',
		properties: {
			position: 'sticky'
		}
	}
];

// class
export const positionClass = ({ screen }: { screen: string }) => {
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
