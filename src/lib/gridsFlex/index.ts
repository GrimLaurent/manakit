import { columnClass } from './column';
import { orderClass } from './order';
import { rowClass } from './row';

export const gridsFlexStaticClass = () => {
	let css = '';
	// class
	css += rowClass();
	return css;
};

export const gridsFlexClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += columnClass({ screen });
	css += orderClass({ screen });
	return css;
};
