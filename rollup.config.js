import alias from '@rollup/plugin-alias';
import json from '@rollup/plugin-json';
import sass from 'rollup-plugin-sass';
// import svg from 'rollup-plugin-svg-import';
import svg from 'rollup-plugin-svg';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
    },
  ],
  plugins: [
    sass({insert: true}),
    // typescript(),
    typescript({
      tsconfig: 'tsconfig.json',
      module: 'esnext',
    }),
    alias({
      entries: {
        '@src/*': 'src/*',
        '@images/*': 'src/images/*',
        '@assets/*': 'src/assets/*',
        '@styles/*': 'src/styles/*',
        '@hook/*': 'src/hook/*',
        '@utils/*': 'src/utils/*',
        '@constants/*': 'src/constants/*',
        '@components/*': 'src/components/*',
      },
    }),
    svg(),
    json(),
  ],
  external: ['react', 'react-dom'],
};
