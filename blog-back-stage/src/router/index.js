import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Write from '../components/article/Write';
import Manage from '../components/article/Manage';
import Overview from '../components/blog/Overview';
import Links from '../components/page/Links';
import About from '../components/page/About';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/overview',
        name: 'OverView',
        component: Overview,
      },
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
      {
        path: '/links',
        name: 'Links',
        component: Links,
      },
      {
        path: '/about',
        name: 'About',
        component: About,
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
