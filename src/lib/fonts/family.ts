import { createRoot } from '../../utils';

export const initialFamily = {
	'font-title': 'Roboto',
	'font-body': 'Roboto'
};

export const family = () => {
	let css = '';
	css += createRoot({ name: 'font', variables: initialFamily });
	return css;
};
