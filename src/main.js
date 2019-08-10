import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'mint-ui/lib/style.css'
import ajaxFun from './service/requestFun'
import { Button } from 'mint-ui';

Vue.component(Button.name, Button)
Object.assign(Vue.prototype, {
  $http: ajaxFun
});
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
