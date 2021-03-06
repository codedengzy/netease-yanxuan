import './assets/reset.css'
import './assets/rem'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {
  Button, Col, Row, Icon, Field, Tab, Tabs,
  Swipe, SwipeItem, Grid, GridItem, CountDown,
  Tabbar, TabbarItem, Sidebar, SidebarItem, NavBar,
  GoodsAction, GoodsActionIcon, GoodsActionButton,Sku,Uploader,Dialog    
} from 'vant'

Vue.use(Button).use(Col).use(Row).use(Icon).use(Field).use(Tab)
  .use(Tabs).use(Swipe).use(SwipeItem).use(Grid).use(GridItem).use(CountDown)
  .use(Tabbar).use(TabbarItem).use(Sidebar).use(SidebarItem).use(NavBar )
  .use(GoodsAction).use(GoodsActionButton).use(GoodsActionIcon).use(Sku).use(Dialog)
  .use(Uploader);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
