import { displayClass } from './display';
import { positionClass } from './position';

export const layoutClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += displayClass({ screen });
	css += positionClass({ screen });
	return css;
};
