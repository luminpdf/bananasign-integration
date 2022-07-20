import alias from '@rollup/plugin-alias';
import {babel} from '@rollup/plugin-babel';
// import autoprefixer from 'autoprefixer'
// import sass from 'node-sass'
// import includePaths from 'rollup-plugin-includepaths';
// import font from 'rollup-plugin-font';
import json from '@rollup/plugin-json';
import {nodeResolve} from '@rollup/plugin-node-resolve';
// import rjson from "@rollup/plugin-json";
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import autoExternal from 'rollup-plugin-auto-external';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import copy from 'rollup-plugin-copy';
// import styles from "rollup-plugin-styles";
// import nodePolyfills from 'rollup-plugin-node-polyfills';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import sass from 'rollup-plugin-sass';
// import replace from '@rollup/plugin-replace';
// import uglify from 'rollup-plugin-uglify'
// import livereload from 'rollup-plugin-livereload'
// import serve from 'rollup-plugin-serve'
// import postcss from 'rollup-plugin-postcss';
import scss from 'rollup-plugin-scss';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import pkg from './package.json';

let production = process.env.NODE_ENV == 'production';
export default {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named',
      sourcemap: true,
      strict: false,
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
  ],
  external: ['react', 'react-dom', '@styles/styles.scss'],
  plugins: [
    peerDepsExternal({
      includeDependencies: true,
    }),
    cleanup(),
    url({
      limit: Infinity, // inline files < 10k, copy files > 10k
      include: ['**/*.svg'], // defaults to .svg, .png, .jpg and .gif files
      emitFiles: true, // defaults to true
      fileName: '[dirname][name][extname]',
    }),
    svgr(),
    // rjson(),
    json(),
    scss({
      insert: true,
      prefix: `@import "src/styles/styles.scss";`,
      include: ['/**/*.css', '/**/*.scss', '/**/*.sass'],
      // output: "dist/index.scss",
      failOnError: true,
    }),
    // includePaths({
    //   // include: {},
    //   paths: ['src/assets/fonts/MarkPro/MarkPro.ttf'],
    //   // external: [],
    //   extensions: ['.ttf',]
    // }),
    typescript({
      tsconfig: 'tsconfig.json',
      module: 'esnext',
      useTsconfigDeclarationDir: true,
      tsconfig: './tsconfig.json',
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
    nodeResolve({
      browser: true,
      jsnext: true,
      main: true,
      exportConditions: ['default', 'module', 'import'],
      preferBuiltins: true,
    }),
    babel({
      // exclude: './node_modules/**',
      // babelHelpers: 'bundled',
      babelrc: false,
      presets: [['@babel/preset-env', {modules: false}], '@babel/preset-react'],
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      exclude: 'node_modules/**',
      babelHelpers: 'inline',
    }),
    commonjs({
      include: /node_modules/,
      namedExports: {
        // This is needed because react/jsx-runtime exports jsx on the module export.
        // Without this mapping the transformed import import {jsx as _jsx} from 'react/jsx-runtime' will fail.
        'react/jsx-runtime': ['jsx', 'jsxs', 'Fragment'],
        'react/jsx-dev-runtime': ['jsxDEV', 'Fragment'],
      },
    }),
    copy({
      targets: [
        {
          src: 'src/assets/fonts',
          dest: 'dist/assets',
        },
        // {
        //   src: "src/styles",
        //   dest: "dist",
        // },
      ],
    }),
    terser(),
    // production && uglify(),
    autoExternal(),
  ],
};
