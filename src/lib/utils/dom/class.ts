export const className = (base?: string, props?: string, component?: object) => {
	let response = base || '';
	if (component) {
		for (const [, data] of Object.entries(component)) {
			switch (typeof data.value) {
				case 'boolean':
				case 'string':
					if (data.value) response = response + ' ' + data.class;
			}
		}
	}
	if (props) {
		response = response + ' ' + props;
	}
	return response.trim();
};
