import { createRoot } from '../../utils';

const variables = {
	'font-title': 'Roboto',
	'font-body': 'Roboto'
};

export const fontsFamily = () => {
	let css = '';
	css += createRoot({ variables });
	return css;
};
