/**
 * mutatiuon
 * create by lqy 2018/3/9
 */

import { BREADCRUMB, NAVDEFAULTINDEX, TABLEHEIGHT } from './mutation-types';

const mutations = {
  [BREADCRUMB](state, val) {
    state.breadcrumb = val;
  },
  [NAVDEFAULTINDEX](state, val) {
    state.navDefaultIndex = val;
  },
  [TABLEHEIGHT](state, val) {
    state.tableHeight = val;
  },
};

export default mutations;
