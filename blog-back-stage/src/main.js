import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import './plugin/element';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:3000';
Vue.use(router);
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
