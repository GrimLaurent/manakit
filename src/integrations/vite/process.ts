export function manakit() {
	return {
		name: 'manakit-css-vite',
		async configResolved() {
			return console.log('manakit is up');
		}
	};
}
