import { buildCSSFile } from './css/process.js';

export function manakit() {
	return {
		name: 'manakit-css-vite',
		async configResolved() {
			console.log('Manakit => Config Resolved');
			buildCSSFile();
		}
	};
}
