/**
 * actions
 * create by lqy 2018/3/9
 */

import { BREADCRUMB, NAVDEFAULTINDEX, TABLEHEIGHT } from './mutation-types';
import heights from './../utils/heights';

const setBreadCrumb = ({ commit }, val) => {
  commit(BREADCRUMB, val);
};

const setNavDefaultIndex = ({ commit }, val) => {
  commit(NAVDEFAULTINDEX, val);
};

const setTableHeight = async ({ commit }, val) => {
  const height = await heights(val);
  commit(TABLEHEIGHT, height);
};

export default {
  setBreadCrumb,
  setNavDefaultIndex,
  setTableHeight,
};
