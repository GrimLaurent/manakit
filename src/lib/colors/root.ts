import { Themes } from '../../types';
import { createRoot } from '../../utils';

export const colorsRoot = ({ themes, dark }: { themes: Themes; dark: boolean }) => {
	let css = '';

	for (const [theme, colors] of Object.entries(themes)) {
		const lightMode: { [key: string]: string } = {};
		const darkMode: { [key: string]: string } = {};

		for (const [scheme, color] of Object.entries(colors)) {
			if (typeof color === 'string') {
				lightMode[scheme] = color;
				if (dark) darkMode[scheme] = color;
			} else {
				if (color && 'light' in color) lightMode[scheme] = color.light;
				if (dark && color && 'dark' in color) darkMode[scheme] = color.dark;
			}
		}

		if (theme === 'default') {
			// @media prefers-color-scheme light
			if (dark) css += '@media (prefers-color-scheme: light) {\n';
			css += createRoot({ variables: lightMode, scheme: dark ? 'light' : undefined });
			if (dark)
				css += createRoot({ variables: darkMode, scheme: 'light', className: '.theme-dark' });
			if (dark) css += '}\n\n';

			if (dark) {
				// @media prefers-color-scheme dark
				css += '@media (prefers-color-scheme: dark) {\n';
				css += createRoot({ variables: darkMode, scheme: 'dark' });
				css += createRoot({ variables: lightMode, scheme: 'dark', className: '.theme-light' });
				css += '}\n\n';
			}
		} else {
			// @media prefers-color-scheme light
			if (dark) css += '@media (prefers-color-scheme: light) {\n';
			css += createRoot({
				variables: lightMode,
				scheme: dark ? 'light' : undefined,
				className: `[manakit-theme=${theme}]`
			});
			if (dark)
				css += createRoot({
					variables: darkMode,
					scheme: 'light',
					className: `[manakit-theme=${theme}].theme-dark`
				});
			if (dark) css += '}\n\n';

			if (dark) {
				// @media prefers-color-scheme dark
				css += '@media (prefers-color-scheme: dark) {\n';
				css += createRoot({
					variables: darkMode,
					scheme: 'dark',
					className: `[manakit-theme=${theme}]`
				});
				css += createRoot({
					variables: lightMode,
					scheme: 'dark',
					className: `[manakit-theme=${theme}].theme-light`
				});
				css += '}\n\n';
			}
		}
	}

	return css;
};
