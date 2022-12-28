import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import url from 'rollup-plugin-url';

const pkg = require('./package.json');

export default {
  input: 'packages/src/index.ts',
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
    postcss(),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ['**/*.woff', '**/*.woff2', '**/*.ttf'],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity,
    }),
  ],
};
