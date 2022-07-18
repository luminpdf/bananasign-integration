import {join} from 'path';

import {rootDir} from '../utils/env';

export const aliasItems = {
  '@src': join(rootDir, '/src'),
  '@images': join(rootDir, '/src/images'),
  '@styles': join(rootDir, '/src/styles'),
  '@components': join(rootDir, '/src/components'),
  '@hooks': join(rootDir, '/src/hooks'),
  '@utils': join(rootDir, '/src/utils'),
  '@constants': join(rootDir, '/src/constants'),
  '@assets': join(rootDir, '/src/assets'),
};
