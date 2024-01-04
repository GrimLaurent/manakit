/* eslint-disable @typescript-eslint/no-explicit-any */
export const styleName = (props?: string, component?: object) => {
	let response = '';
	if (component) {
		for (const [, data] of Object.entries(component)) {
			if (data.value) {
				if (data.value.includes('--')) {
					// is var
					response = response + '' + data.property + ':var(' + data.value + ');';
				} else {
					response = response + '' + data.property + ':' + data.value + ';';
				}
			}
		}
	}
	if (props) {
		response = response + ' ' + props;
	}

	if (response !== '') return response.trim();
	else return undefined;
};

export const styleMap = (styleObj: { [k: string]: string | undefined }): string | undefined => {
	const response = Object.entries(styleObj)
		.filter(([name, value]) => name && value)
		.map(([name, value]) => {
			if (name === 'default') {
				return ` ${value};`;
			} else {
				if (value!.includes('$$')) {
					return ` ${name}: var(--color-${value!.replaceAll('$$', '')});`;
				} else if (value!.includes('--')) {
					return ` ${name}: var(${value});`;
				} else {
					return ` ${name}: ${value};`;
				}
			}
		});

	return response.length > 0 ? response.join('').trim() : undefined;
};
