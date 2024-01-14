import { PropertieCSS } from '../../types';

export const propertie = ({ key, value, important }: PropertieCSS) => {
	return `${key}: ${value} ${important ? '!important' : ''};\n`;
};
