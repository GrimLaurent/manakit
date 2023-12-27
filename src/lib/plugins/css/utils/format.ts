/* eslint-disable @typescript-eslint/no-explicit-any */
export const formatProperties = (preset: any, custom?: any) => {
	if (custom) {
		console.log('format Properties', { ...preset, ...custom });
		return { ...preset, ...custom };
	} else {
		return preset;
	}
};
