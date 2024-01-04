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

export const classMap = (classObj: { [k: string]: string | boolean | undefined }): string => {
	return Object.entries(classObj)
		.filter(([name, value]) => name !== '' && value)
		.map(([name, value]) => {
			if ((name === 'default' && value) || name === 'component') {
				// $$props.class // component class
				return `${value}`;
			} else {
				// components class
				return typeof value === 'boolean' ? name : `${name}-${value}`;
			}
		})
		.join(' ');
};
