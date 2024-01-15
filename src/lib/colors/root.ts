import { createRoot } from '../../utils';
import { themes } from './theme';

export const colorsRoot = () => {
	let css = '';

	for (const [theme, colors] of Object.entries(themes)) {
		const light: { [key: string]: string } = {};
		const dark: { [key: string]: string } = {};

		for (const [scheme, color] of Object.entries(colors)) {
			if (typeof color === 'string') {
				light[scheme] = color;
				dark[scheme] = color;
			} else {
				if (color && 'light' in color) light[scheme] = color.light;
				if (color && 'dark' in color) dark[scheme] = color.dark;
			}
		}

		if (theme === 'default') {
			// @media prefers-color-scheme light
			css += '@media (prefers-color-scheme: light) {\n';
			css += createRoot({ variables: light, scheme: 'light' });
			css += createRoot({ variables: dark, scheme: 'light', className: '.theme-dark' });
			css += '}\n\n';

			// @media prefers-color-scheme dark
			css += '@media (prefers-color-scheme: dark) {\n';
			css += createRoot({ variables: dark, scheme: 'dark' });
			css += createRoot({ variables: light, scheme: 'dark', className: '.theme-light' });
			css += '}\n\n';
		} else {
			// @media prefers-color-scheme light
			css += '@media (prefers-color-scheme: light) {\n';
			css += createRoot({
				variables: light,
				scheme: 'light',
				className: `[manakit-theme=${theme}]`
			});
			css += createRoot({
				variables: dark,
				scheme: 'light',
				className: `[manakit-theme=${theme}].theme-dark`
			});
			css += '}\n\n';

			// @media prefers-color-scheme dark
			css += '@media (prefers-color-scheme: dark) {\n';
			css += createRoot({ variables: dark, scheme: 'dark', className: `[manakit-theme=${theme}]` });
			css += createRoot({
				variables: light,
				scheme: 'dark',
				className: `[manakit-theme=${theme}].theme-light`
			});
			css += '}\n\n';
		}
	}

	return css;
};
