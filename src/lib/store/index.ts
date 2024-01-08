import { writable } from 'svelte/store';

export const store = writable<{
	modal: number;
	screens: {
		[key: string]: string;
	};
}>({
	modal: 0,
	screens: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		xxl: '1536px'
	}
});
