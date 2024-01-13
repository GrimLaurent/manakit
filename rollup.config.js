import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/integrations/vite/index.ts',
	output: {
		file: 'build/index.js',
		format: 'es',
		sourcemap: true
	},
	external: ['fs/promises', 'path', 'chokidar'],
	plugins: [peerDepsExternal(), typescript()]
};
