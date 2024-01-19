import { cardClass } from './card';
import { cardTypeClass } from './type';

export const cardStatic = () => {
	let css = '';
	// class
	css += cardClass();
	return css;
};

export const cardResponsive = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += cardTypeClass({ screen });
	return css;
};
