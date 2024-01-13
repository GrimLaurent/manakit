import { buildCSS } from '../..';
import { initialize } from './env';

export function manakit() {
	return {
		name: 'manakit-css-vite',
		async configResolved() {
			const value = await initialize();

			buildCSS();
			return console.log('manakit is up', value);
		}
	};
}
