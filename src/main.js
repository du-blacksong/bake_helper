/*
引入各模块的index文件
* */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import './static/css/minireset.min.css'
import './static/iconfont/iconfont.css'

//移动端适配
import "amfe-flexible"

//插件引入
import "./plugins";

//请求引入
import axios from "./api/ajax";
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;
//图片懒加载
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)
//引入meta插件
import Meta from 'vue-meta';
Vue.use(Meta);
//引入播放插件(没用)
// import VideoPlayer from 'vue-video-player'
// import 'vue-video-player/src/custom-theme.css'
// import 'video.js/dist/video-js.css'
//
// Vue.use(VideoPlayer)

//SEO
router.beforeEach((to, from, next) => {
  if (to.meta.metaInfo)
    store.commit("CAHNGE_META_INFO", to.meta.metaInfo)
  next()
});

new Vue({
  beforeCreate() {
    // 将当前vm作为总线对象挂到Vue原型对象上
    Vue.prototype.$bus = this;
  },
  router,
  store,
  metaInfo(){
    return {
      title: this.$store.state.metaInfo.title,
      meta: [
        {
          name: "keywords",
          content: this.$store.state.metaInfo.keywords
        }, {
          name: "description",
          content: this.$store.state.metaInfo.description
        }
      ]
    }
  },
  render: h => h(App)
}).$mount("#app");
