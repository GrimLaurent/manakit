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
