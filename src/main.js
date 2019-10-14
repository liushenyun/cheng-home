import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import 'mint-ui/lib/style.css'
// import ajaxFun from './service/requestFun'
import { Button, Tabbar, TabItem, TabContainer, TabContainerItem,
  Cell, Toast, Picker,
  Loadmore, InfiniteScroll, Spinner,
  DatetimePicker, Switch, MessageBox,Popup  } from 'mint-ui'
import LinkageBase from './components/linkageBase';
import PickerS from './components/PickerS/index'
import ShowScan from './components/ShowScan/index'
import EventQueue from './common/js/eventQueue'

Vue.use(PickerS);
Vue.use(ShowScan);
Vue.use(LinkageBase);
Vue.use(InfiniteScroll);
Vue.component(Spinner.name, Spinner);
Vue.component(Loadmore.name, Loadmore);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Button.name, Button)
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Cell.name, Cell);
Vue.component(Picker.name, Picker);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Switch.name, Switch);
Vue.component(MessageBox.name, MessageBox); //弹框组件  页面调用无效
Vue.component(Popup.name, Popup);
Object.assign(Vue.prototype, {
  $toast: Toast,
  $eventQueue: new EventQueue()
});
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
