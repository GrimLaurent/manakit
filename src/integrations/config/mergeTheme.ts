import { Themes } from '../../types';

export const mergeThemes = (themes: Themes, props?: Themes) => {
	const mergedThemes = { ...themes };

	if (props) {
		for (const themeKey in props) {
			if (Object.prototype.hasOwnProperty.call(props, themeKey)) {
				if (mergedThemes[themeKey]) {
					mergedThemes[themeKey] = { ...mergedThemes[themeKey], ...props[themeKey] };
				} else {
					mergedThemes[themeKey] = props[themeKey];
				}
			}
		}
	}

	return mergedThemes;
};
