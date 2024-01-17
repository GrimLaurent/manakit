import { RootCSS } from '../../types';
import { rootVar } from './createRootVar';

export const createRoot = ({ name, variables, className, scheme }: RootCSS) => {
	let css = '';

	if (variables) {
		css += className ? `${className} {\n` : `:root {\n`;
		// if (className) css += `${className} {\n`;
		if (scheme) css += `color-scheme: ${scheme};\n`;
		for (const [slug, value] of Object.entries(variables)) {
			const format = slug.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
			css += rootVar({ section: name, slug: format, value });
		}
		// if (className) css += `}\n`;
		css += `}\n`;
	}

	return css;
};
