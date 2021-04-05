import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import './plugin/element';
import 'element-ui/lib/theme-chalk/index.css';
import url from './config';

Vue.config.productionTip = false;
axios.defaults.baseURL = url;
axios.interceptors.request.use((config) => {
  console.log(config);
  config.headers.Authorization = window.sessionStorage.getItem('uat');
  return config;
});
Vue.use(router);
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
