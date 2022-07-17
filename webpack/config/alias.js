import {join} from 'path';

import {rootDir} from '../utils/env';

export const aliasItems = {
  '@src': join(rootDir, '/src'),
  '@images': join(rootDir, '/src/images'),
  '@styles': join(rootDir, '/src/styles'),
  '@components': join(rootDir, '/src/components'),
  '@hook': join(rootDir, '/src/hook'),
  '@utils': join(rootDir, '/src/utils'),
  '@constants': join(rootDir, '/src/constants'),
};
