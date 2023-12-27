import { buildCSSFile } from '../css/process';
import { getConfig } from './config/get';
import { setConfig } from './config/set';
import { configurationPathRoot, pathDefaultConfig, pathRootConfig } from './path.js';

export function manakit() {
	return {
		name: 'manakit-css-vite',
		async configResolved() {
			let configuration; // settings project

			try {
				configuration = await getConfig({ path: configurationPathRoot });
			} catch (err) {
				await setConfig({
					path: pathDefaultConfig,
					dest: pathRootConfig
				});
			}

			console.log('manakit Resolved', configuration);
			buildCSSFile(configuration);
		},
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		async configureServer(server: any) {
			server.watcher.add('./');
			server.watcher.on('change', async (filePath: string) => {
				if (String(filePath).includes('.manakit.cjs')) {
					let configuration; // settings project

					try {
						configuration = await getConfig({
							path: configurationPathRoot
						});
					} catch (err) {
						await setConfig({
							path: pathDefaultConfig,
							dest: pathRootConfig
						});
					}

					console.log('manakit Watcher', configuration);
					buildCSSFile(configuration);
				}
			});
		}
	};
}
