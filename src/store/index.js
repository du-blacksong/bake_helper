//个人在modules下创建自己的模块
import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules
});
