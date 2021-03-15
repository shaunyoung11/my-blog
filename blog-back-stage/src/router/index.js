import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Write from '../components/article/Write';
import Manage from '../components/article/Manage';
import Overview from '../components/blog/Overview';
import Links from '../components/page/Links';
import About from '../components/page/About';
import SubHome from '../components/global/SubHome';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        name: 'Home',
        component: SubHome,
      },
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
