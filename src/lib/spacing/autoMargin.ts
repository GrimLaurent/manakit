import { createClass } from '../../utils';

const properties = [
	{
		className: '.ms-auto',
		properties: {
			'margin-inline-start': 'auto'
		}
	},
	{
		className: '.me-auto',
		properties: {
			'margin-inline-end': 'auto'
		}
	},
	{
		className: '.ms-auto',
		properties: {
			'margin-inline-start': 'auto'
		}
	},
	{
		className: '.me-auto',
		properties: {
			'margin-inline-end': 'auto'
		}
	}
];

// class
export const autoMarginClass = ({ screen }: { screen: string }) => {
	let css = '';

	properties.forEach((item) => {
		css += createClass({
			className: item.className,
			properties: item.properties,
			important: true,
			screen
		});
	});

	return css;
};
