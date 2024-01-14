import { normalizeGlobal } from './global';
import { normalizeHTML } from './html';

export const normalize = () => {
	let css = '';

	css += normalizeGlobal();
	css += normalizeHTML();

	return css;
};
