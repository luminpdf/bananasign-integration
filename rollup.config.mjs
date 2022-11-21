import alias from '@rollup/plugin-alias';
import {babel} from '@rollup/plugin-babel';
import {nodeResolve} from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import svgr from '@svgr/rollup';
import autoExternal from 'rollup-plugin-auto-external';
import cleanup from 'rollup-plugin-cleanup';
import commonjs from 'rollup-plugin-commonjs';
import scss from 'rollup-plugin-scss';
import {terser} from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import dts from "rollup-plugin-dts";
import image from '@rollup/plugin-image';

export default [
  {
    input: 'src/index.tsx',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'auto',
      },
    ],
    external: ['react', 'react-dom', '@styles/styles.scss'],
    plugins: [
      cleanup(),
      url({
        limit: Infinity,
        include: ['**/*.svg'],
      }),
      svgr(),
      image({
        include: '**/*.gif'
      }),
      scss({
        insert: true,
        include: ['**/**/*.scss', '/**/*.sass'],
        failOnError: true,
      }),
      typescript({
        tsconfig: 'tsconfig.json',
      }),
      alias({
        entries: {
          '@src/*': '/Users/mac/Documents/Project/bananasign-integration/src',
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
        presets: [
          ['@babel/preset-env', {modules: false}],
          '@babel/preset-react',
        ],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        exclude: 'node_modules/**',
        babelHelpers: 'inline',
      }),
      commonjs({
        include: /node_modules/,
        namedExports: {
          'react/jsx-runtime': ['jsx', 'jsxs', 'Fragment'],
          'react/jsx-dev-runtime': ['jsxDEV', 'Fragment'],
        },
      }),
      terser(),
      autoExternal(),
    ],
  },
  {
    input: "./bananasign-widget.d.ts",
    output: [{ file: "dist/banansign-widget.d.ts", format: "es" }],
    plugins: [dts()],
  },
];
