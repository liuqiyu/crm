import Vue from 'vue';
import Router from 'vue-router';

const Login = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'login');
const Layout = r => require.ensure([], () => r(require('@/views/layout/index.vue')), 'Layout');
const Overview = r => require.ensure([], () => r(require('@/views/overview/index.vue')), 'Overview');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'overview',
          component: Overview
        },
        {
          path: '/overview',
          name: 'overview',
          component: Overview
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
