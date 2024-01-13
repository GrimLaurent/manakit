/* eslint-disable @typescript-eslint/no-var-requires */
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';

const pkg = require('./package.json');

export default {
	input: 'src/index.ts',
	output: {
		file: pkg.main,
		format: 'es',
		sourcemap: true
	},
	external: ['fs/promises', 'path', 'chokidar'],
	plugins: [peerDepsExternal(), typescript()]
};
