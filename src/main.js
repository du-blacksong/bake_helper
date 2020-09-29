/*
引入各模块的index文件
* */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './static/css/minireset.min.css'
import './static/iconfont/iconfont.css'
//插件引入
import "./plugins";

//请求引入
import axios from "./api/ajax";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

new Vue({
  beforeCreate() {
    // 将当前vm作为总线对象挂到Vue原型对象上
    Vue.prototype.$bus = this;
  },
  router,
  store,
  render: h => h(App)
}).$mount("#app");
