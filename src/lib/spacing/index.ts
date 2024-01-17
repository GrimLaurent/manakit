import { autoMarginClass } from './autoMargin';
import { marginClass } from './margin';
import { paddingClass } from './padding';

export const spacingClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += autoMarginClass({ screen });
	css += marginClass({ screen });
	css += paddingClass({ screen });
	return css;
};
