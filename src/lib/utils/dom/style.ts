import { store } from '../../store';
/* eslint-disable @typescript-eslint/no-explicit-any */
export const styleName = (props?: string, component?: object) => {
	let response = '';
	if (component) {
		for (const [, data] of Object.entries(component)) {
			if (data.value) {
				if (data.value.includes('--')) {
					// is var
					response = response + '' + data.property + ':var(' + data.value + ');';
				} else {
					response = response + '' + data.property + ':' + data.value + ';';
				}
			}
		}
	}
	if (props) {
		response = response + ' ' + props;
	}

	if (response !== '') return response.trim();
	else return undefined;
};

interface StyleMapValue {
	[index: number]: string | object;
}

export const styleMap = (styleObj: {
	[k: string]: string | StyleMapValue | undefined;
}): string | undefined => {
	const response = Object.entries(styleObj)
		.filter(([name, value]) => name && value)
		.map(([name, value]) => {
			if (name === 'default') {
				return ` ${value};`;
			} else if (typeof value === 'object' && name === 'sizing') {
				return ` ${getSizeWithMediaQueries(value[0], value[1] as any)}`;
			} else if (typeof value === 'string' || value === undefined) {
				return getStyleString(name, value);
			}
		});

	return response.length > 0 ? response.join('').trim() : undefined;
};

const getStyleString = (name: string, value: string | undefined): string => {
	if (!value) return '';

	if (value.includes('$$')) {
		return ` ${name}: var(--color-${value.replaceAll('$$', '')});`;
	} else if (value.includes('--')) {
		return ` ${name}: var(${value});`;
	} else {
		return ` ${name}: ${value};`;
	}
};

// export const styleMap = (styleObj: {
// 	[k: string]: string | object | undefined;
// }): string | undefined => {
// 	const response = Object.entries(styleObj)
// 		.filter(([name, value]) => name && value)
// 		.map(([name, value]) => {
// 			if (name === 'default') {
// 				return ` ${value};`;
// 			} else if (typeof value === 'object') {
// 				if (name === 'sizing') {
// 					const sizes = getSizeWithMediaQueries((value as any)[0], (value as any)[1]);
// 					return ` ${sizes}`;
// 				}
// 			} else {
// 				if (value!.includes('$$')) {
// 					return ` ${name}: var(--color-${value!.replaceAll('$$', '')});`;
// 				} else if (value!.includes('--')) {
// 					return ` ${name}: var(${value});`;
// 				} else {
// 					return ` ${name}: ${value};`;
// 				}
// 			}
// 		});

// 	return response.length > 0 ? response.join('').trim() : undefined;
// };

interface ScreenProperties {
	[key: string]: string;
}

// const getSizeWithMediaQueries = (property: any, screen: ScreenProperties): string | undefined => {
// 	let response = '';
// 	if (property?.width) {
// 		if (typeof property.width === 'string') {
// 			response += ` width: ${property.width};`;
// 		} else {
// 			const matchingBreakpoint = findBreakpoint(screen[0], property.width);
// 			if (matchingBreakpoint !== null) response += ` width: ${property.width[matchingBreakpoint]};`;
// 		}
// 	}
// 	if (property?.height) {
// 		if (typeof property.height === 'string') {
// 			response += ` height: ${property.height};`;
// 		} else {
// 			const matchingBreakpoint = findBreakpoint(screen[0], property.height);
// 			if (matchingBreakpoint !== null)
// 				response += ` height: ${property.height[matchingBreakpoint]};`;
// 		}
// 	}
// 	if (property?.minWidth) {
// 		if (typeof property.minWidth === 'string') {
// 			response += ` min-width: ${property.minWidth};`;
// 		} else {
// 			const matchingBreakpoint = findBreakpoint(screen[0], property.minWidth);
// 			if (matchingBreakpoint !== null)
// 				response += ` min-width: ${property.minWidth[matchingBreakpoint]};`;
// 		}
// 	}
// 	if (property?.maxWidth) {
// 		if (typeof property.maxWidth === 'string') {
// 			response += ` max-width: ${property.maxWidth};`;
// 		} else {
// 			const matchingBreakpoint = findBreakpoint(screen[0], property.maxWidth);
// 			if (matchingBreakpoint !== null)
// 				response += ` max-width: ${property.maxWidth[matchingBreakpoint]};`;
// 		}
// 	}
// 	if (property?.minHeight) {
// 		if (typeof property.minHeight === 'string') {
// 			response += ` min-height: ${property.minHeight};`;
// 		} else {
// 			const matchingBreakpoint = findBreakpoint(screen[0], property.minHeight);
// 			if (matchingBreakpoint !== null)
// 				response += ` min-height: ${property.minHeight[matchingBreakpoint]};`;
// 		}
// 	}
// 	if (property?.maxHeight) {
// 		if (typeof property.maxHeight === 'string') {
// 			response += ` max-height: ${property.maxHeight};`;
// 		} else {
// 			const matchingBreakpoint = findBreakpoint(screen[0], property.maxHeight);
// 			if (matchingBreakpoint !== null)
// 				response += ` max-height: ${property.maxHeight[matchingBreakpoint]};`;
// 		}
// 	}

// 	return response;
// };

const getSizeWithMediaQueries = (property: any, screen: ScreenProperties): string => {
	const properties = ['width', 'height', 'minWidth', 'maxWidth', 'minHeight', 'maxHeight'];
	let response = '';

	properties.forEach((prop) => {
		if (property?.[prop]) {
			const value = property[prop];
			const cssProperty = prop.replace(/([A-Z])/g, '-$1').toLowerCase();
			const index = findBreakpoint(screen[0], value);
			if (index && index !== null) {
				const breakpointValue = typeof value === 'string' ? value : value[index];

				if (breakpointValue) {
					response += ` ${cssProperty}: ${breakpointValue};`;
				}
			}
		}
	});

	return response;
};

function findBreakpoint(
	screenWidth: string | null,
	sizes: { [key: string]: string }
): string | null {
	let numericSize = 0;
	if (screenWidth !== null) numericSize = parseInt(screenWidth, 10);

	let breakpoints: { [key: string]: string } = {};
	store.subscribe((state) => {
		breakpoints = state.screens;
	});

	const sortedEntries = Object.entries(sizes).sort((a, b) => parseInt(b[1]) - parseInt(a[1]));
	const sortedSizes: { [key: string]: string } = {};
	for (const entry of sortedEntries) {
		sortedSizes[entry[0]] = entry[1];
	}

	for (const [breakpoint] of Object.entries(sortedSizes)) {
		const point = parseInt(breakpoints[breakpoint], 10) || 0;
		const minPoint = parseInt(breakpoints['sm'], 10) || 0;

		if (numericSize >= point) {
			return breakpoint;
		} else if (numericSize < minPoint) {
			return 'sm';
		}
	}

	return null;
}

// function findBreakpoint(screenWidth, sizes) {
// 	const numericSize = parseInt(screenWidth, 10);
// 	let breakpoints: Array<any> | undefined;
// 	store.subscribe((state) => {
// 		breakpoints = state.screens;
// 	});

// 	const sortedEntries = Object.entries(sizes).sort((a, b) => {
// 		return parseInt(b[1]) - parseInt(a[1]);
// 	});

// 	const sortedSizes = {};
// 	for (const entry of sortedEntries) {
// 		sortedSizes[entry[0]] = entry[1];
// 	}

// 	for (const [breakpoint, value] of Object.entries(sortedSizes)) {
// 		const point = parseInt(breakpoints[breakpoint]);
// 		const minPoint = parseInt(breakpoints['sm']);

// 		if (numericSize >= point) {
// 			console.log(`${breakpoint}: ${value}`);
// 			return breakpoint;
// 		} else if (numericSize < minPoint) {
// 			return 'sm';
// 		}
// 	}

// 	return null;
// }
