import {babelLoader} from './useLoaderRuleItems';

/**
 * Using @svgr/webpack for handling svg files in react components
 * @see https://react-svgr.com/docs/webpack/
 */
export const svgReactComponentRule = {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  issuer: /\.[jt]sx$/,
  use: [
    babelLoader,
    {
      loader: '@svgr/webpack',
      options: {
        babel: false,
        icon: true,
      },
    },
  ],
};

/**
 * Using file-loader for handling svg files
 * @see https://webpack.js.org/guides/asset-modules/
 */
export const svgRule = {
  test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  issuer: {not: [/\.[jt]sx$/]},
  type: 'asset/inline',
};

export const svgReactRule = {
  test: /\.(png|jp(e*)g|svg|gif)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: 'images/[hash]-[name].[ext]',
      },
    },
  ],
};

export const svgRules = [svgReactRule];
