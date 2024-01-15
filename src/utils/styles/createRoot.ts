import { RootCSS } from '../../types';
import { rootVar } from './createRootVar';

export const createRoot = ({ variables, className, scheme }: RootCSS) => {
	let css = '';

	if (variables) {
		css += className ? `${className} {\n` : `:root {\n`;
		// if (className) css += `${className} {\n`;
		if (scheme) css += `color-scheme: ${scheme};\n`;
		for (const [slug, value] of Object.entries(variables)) {
			css += rootVar({ slug, value });
		}
		// if (className) css += `}\n`;
		css += `}\n`;
	}

	return css;
};
