import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: Object.keys(pkg.peerDependencies || {}),
  plugins: [
    peerDepsExternal(),
    typescript({
      useTsconfigDeclarationDir: true,
      typescript: require('typescript'),
    }),
  ],
};
