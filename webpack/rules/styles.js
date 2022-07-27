import {arrayFilterEmpty} from '../utils/helpers';
import {
  cssLoaderItems,
  cssModulesSupportLoaderItems,
  postCssLoader,
  resolveUrlLoader,
  sassLoaderItems,
} from './useLoaderRuleItems';

/** sass **/
export const sassModulesRule = {
  test: /\.module\.s([ca])ss$/,
  use: arrayFilterEmpty([
    ...cssModulesSupportLoaderItems,
    postCssLoader,
    resolveUrlLoader,
    ...sassLoaderItems,
  ]),
};

export const sassRule = {
  test: /\.s([ca])ss$/,
  exclude: /\.module.scss$/,
  use: arrayFilterEmpty([
    ...cssLoaderItems,
    postCssLoader,
    resolveUrlLoader,
    ...sassLoaderItems,
  ]),
};

export const sassRules = [sassModulesRule, sassRule];
