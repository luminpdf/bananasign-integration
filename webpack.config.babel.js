// You can use import if you name your file webpack.config.babel.js; webpack will run babel on the config file
import merge from 'webpack-merge';

import baseConfig from './webpack/base';
import devConfig from './webpack/dev';
import prodConfig from './webpack/prod';
import {isProd} from './webpack/utils/env';

export default () =>
  isProd ? merge(baseConfig, prodConfig) : merge(baseConfig, devConfig);
