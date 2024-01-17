import { btnClass } from './btn';
import { btnColorClass } from './color';
import { btnSizeClass } from './size';
import { btnTypeClass } from './type';

export const btnStatic = () => {
	let css = '';
	// class
	css += btnClass();
	css += btnColorClass();
	return css;
};

export const btnResponsive = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += btnSizeClass({ screen });
	css += btnTypeClass({ screen });
	return css;
};
