import { createClass } from '../../utils';

const properties = [
	{
		className: '.card-side',
		properties: {
			'align-items': 'stretch',
			'flex-direction': 'row'
		}
	}
];

// class
export const cardTypeClass = ({ screen }: { screen: string }) => {
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
