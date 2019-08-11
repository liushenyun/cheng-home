import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'mint-ui/lib/style.css'
import ajaxFun from './service/requestFun'
import { Button, Tabbar, TabItem, TabContainer, TabContainerItem,
  Cell } from 'mint-ui'

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button)
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);

Object.assign(Vue.prototype, {
  $http: ajaxFun
});
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
