// import { createClass } from '../../utils';

import { themes } from './theme';

// const properties = [
// 	{
// 		className: '.btn-wide',
// 		properties: {
// 			width: '16rem'
// 		}
// 	},
// 	{
// 		className: '.btn-block',
// 		properties: {
// 			width: '100%'
// 		}
// 	},
// 	{
// 		className: '.btn-circle',
// 		properties: {
// 			height: '3rem',
// 			width: '3rem',
// 			padding: 0,
// 			'border-radius': '9999px'
// 		}
// 	},
// 	{
// 		className: '.btn-square',
// 		properties: {
// 			height: '3rem',
// 			width: '3rem',
// 			padding: 0
// 		}
// 	}
// ];

// class
export const colorsClass = () => {
	const css = '';

	// properties.forEach((item) => {
	// 	css += createClass({
	// 		className: item.className,
	// 		properties: item.properties,
	// 		screen
	// 	});
	// });

	for (const [theme, colors] of Object.entries(themes)) {
	}

	return css;
};
