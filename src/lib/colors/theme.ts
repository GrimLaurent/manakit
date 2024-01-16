import { Themes } from '../../types';

export const initialTheme: Themes = {
	default: {
		error: { light: '#B3261E', dark: '#F2B8B5' },
		warning: { light: '#fdb400', dark: '#fdb400' },
		success: { light: '#4caf50', dark: '#4caf50' },
		info: { light: '#2196f3', dark: '#2196f3' },
		test1: { light: '#2196f3' },
		test2: { dark: '#B3261E' },
		test3: '#B3261E'
	},
	vador: {
		info: { light: 'pink', dark: 'green' },
		test1: { light: 'yellow' },
		test2: { dark: 'blue' },
		test3: 'orange'
	}
};
