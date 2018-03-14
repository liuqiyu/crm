import Vue from 'vue';
import Router from 'vue-router';

const Login = r => require.ensure([], () => r(require('@/views/login/index.vue')), 'login');
const Layout = r => require.ensure([], () => r(require('@/views/layout/index.vue')), 'Layout');
const Overview = r => require.ensure([], () => r(require('@/views/overview/index.vue')), 'Overview');
const Customer = r => require.ensure([], () => r(require('@/views/customer/index.vue')), 'Customer');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          component: Overview,
        },
        {
          path: '/overview',
          name: 'overview',
          component: Overview,
        },
        {
          path: '/customer',
          name: 'customer',
          component: Customer,
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
