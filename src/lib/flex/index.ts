import { alignContentClass } from './alignContent';
import { alignSelfClass } from './alignSelf';
import { directionClass } from './direction';
import { justifyClass } from './justify';
import { shortlandClass } from './shortland';
import { growShrinkClass } from './growShrink';
import { wrapClass } from './wrap';

export const flexClass = ({ screen }: { screen: string }) => {
	let css = '';
	// class
	css += alignContentClass({ screen });
	css += shortlandClass({ screen });
	css += directionClass({ screen });
	css += justifyClass({ screen });
	css += alignSelfClass({ screen });
	css += wrapClass({ screen });
	css += growShrinkClass({ screen });
	return css;
};
