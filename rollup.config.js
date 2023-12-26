import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from '@rollup/plugin-typescript';

export default {
	input: 'src/lib/plugins/index.ts',
	output: {
		file: 'dist-vite/index.js',
		format: 'es',
		sourcemap: true
	},
	external: ['fs/promises', 'path', 'chokidar'],
	plugins: [peerDepsExternal(), typescript({ tsconfig: './tsconfig.rollup.json' })]
};
