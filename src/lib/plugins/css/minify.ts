export function minimifyCss(css: string) {
	const response = css.replace(/\n/g, '');
	return response;
}
