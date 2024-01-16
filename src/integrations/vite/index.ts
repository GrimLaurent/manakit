import { buildCSS } from '../..';
import { initialize } from './env';

import { initialTheme } from '../../lib/colors/theme';
import { initialResponsive } from '../../index';
import { mergeThemes } from '../config';

export function manakit() {
	return {
		name: 'manakit-css-vite',
		async configResolved() {
			const value = await initialize();

			const themes = mergeThemes(initialTheme, value?.theme);
			const responsive = value?.screens
				? { ...initialResponsive, ...value?.screens }
				: initialResponsive;

			buildCSS({ dark: value?.dark || false, themes, responsive });
			return console.log('manakit is up', value);
		}
	};
}
