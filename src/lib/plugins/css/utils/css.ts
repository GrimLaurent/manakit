import type { Css } from '../../../types';

export const css = ({ key, value, important }: Css) => {
	return `${key}: ${value} ${important ? '!important' : ''};\n`;
};
