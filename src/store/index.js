/**
 * index
 * create by lqy 2018/3/9
 */

import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

const state = {
  breadcrumb: [],
  navDefaultIndex: null,
  tableHeight: 0,
  customerList: [
    {
      id: 1,
      name: '刘翔',
      gender: 1,
      age: 24,
      height: 180,
      weight: 66,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 2,
      name: '刘勇',
      gender: 1,
      age: 20,
      height: 180,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 3,
      name: '刘露',
      gender: 0,
      age: 20,
      height: 160,
      weight: 40,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 4,
      name: '刘苏',
      gender: 0,
      age: 20,
      height: 158,
      weight: 45,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 5,
      name: '刘倩倩',
      gender: 0,
      age: 60,
      height: 155,
      weight: 42,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 6,
      name: '刘宏',
      gender: 1,
      age: 22,
      height: 172,
      weight: 120,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 7,
      name: '刘谦',
      gender: 1,
      age: 12,
      height: 150,
      weight: 30,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 8,
      name: '刘侃',
      gender: 1,
      age: 24,
      height: 175,
      weight: 70,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 9,
      name: '刘能',
      gender: 1,
      age: 78,
      height: 178,
      weight: 80,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 10,
      name: '刘66',
      gender: 1,
      age: 1,
      height: 172,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 11,
      name: '刘大',
      gender: 1,
      age: 35,
      height: 176,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 12,
      name: '刘发',
      gender: 1,
      age: 55,
      height: 172,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 12,
      name: '刘好',
      gender: 1,
      age: 51,
      height: 176,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 13,
      name: '刘月',
      gender: 0,
      age: 71,
      height: 172,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 14,
      name: '刘饿',
      gender: 0,
      age: 81,
      height: 175,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 15,
      name: '刘防范',
      gender: 1,
      age: 31,
      height: 173,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 16,
      name: '刘版本',
      gender: 1,
      age: 88,
      height: 177,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 17,
      name: '刘留',
      gender: 1,
      age: 13,
      height: 178,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 18,
      name: '刘美女',
      gender: 1,
      age: 21,
      height: 161,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 19,
      name: '刘天天',
      gender: 1,
      age: 45,
      height: 175,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 20,
      name: '刘倍v',
      gender: 1,
      age: 28,
      height: 177,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 21,
      name: '刘突然',
      gender: 1,
      age: 11,
      height: 172,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
    {
      id: 22,
      name: '刘就会',
      gender: 1,
      age: 1,
      height: 172,
      weight: 60,
      province: '江西省',
      city: '吉安市',
      area: '泰和县',
      address: '碧溪镇',
    },
  ],
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
});
