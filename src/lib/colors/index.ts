import { colorsClass } from './class';
import { colorsRoot } from './root';

export const colorRoot = () => {
	let css = '';
	// var
	css += colorsRoot();
	return css;
};

export const colorClass = () => {
	let css = '';
	// class
	css += colorsClass();
	return css;
};
