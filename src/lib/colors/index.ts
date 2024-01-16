import { Themes } from '../../types';
import { colorsClass } from './class';
import { colorsRoot } from './root';

export const colorRoot = ({ themes, dark }: { themes: Themes; dark: boolean }) => {
	let css = '';
	// var
	css += colorsRoot({ themes, dark });
	return css;
};

export const colorClass = ({ themes }: { themes: Themes }) => {
	let css = '';
	// class
	css += colorsClass({ themes });
	return css;
};
