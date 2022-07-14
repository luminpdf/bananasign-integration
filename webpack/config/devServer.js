import {devServerProxyConfig} from './devServierProxy';

export const devServerConfig = {
  client: {
    overlay: false,
  },
  headers: {'Access-Control-Allow-Origin': '*'},
  historyApiFallback: true,
  hot: true,
  open: true,
  proxy: devServerProxyConfig,
  static: {
    publicPath: '/',
  },
};
