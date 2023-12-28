export const className = (props?: string, component?: object) => {
	let response;
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
		response += ' ' + props;
	}

	if (response) return response.trim();
	else return response;
};
