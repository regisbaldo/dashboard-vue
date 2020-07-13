import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import router from './router'
import axios from 'axios'
import { Model } from 'vue-api-query'

import 'element-ui/lib/theme-chalk/index.css'
import "./assets/css/crm.css";

Vue.config.productionTip = false

Vue.component('crm-menu', require('./components/Menu.vue').default);

Model.$http = axios
Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
