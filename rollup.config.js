import alias from '@rollup/plugin-alias';
import sass from 'rollup-plugin-sass';
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
    typescript(),
    alias({
      entries: {
        '@src/*': 'src/*',
        '@images/*': 'src/images/*',
        '@styles/*': 'src/styles/*',
        '@hook/*': 'src/hook/*',
        '@utils/*': 'src/utils/*',
        '@constants/*': 'src/constants/*',
        '@components/*': 'src/components/*',
      },
    }),
  ],
  external: ['react', 'react-dom'],
};
