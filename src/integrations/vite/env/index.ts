import { pathConfiguration, pathPackage, pathRoot } from '../../../constant';
import { getConfig, setConfig } from '../../config';

export const initialize = async () => {
	try {
		return await getConfig({ path: pathConfiguration });
	} catch (err) {
		return await setConfig({
			path: pathPackage,
			dest: pathRoot
		});
	}
};
