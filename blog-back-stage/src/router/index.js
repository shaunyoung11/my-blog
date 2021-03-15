import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Write from '../components/article/Write';
import Manage from '../components/article/Manage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/write',
        name: 'Write',
        component: Write,
      },
      {
        path: '/manage',
        name: 'Manage',
        component: Manage,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
