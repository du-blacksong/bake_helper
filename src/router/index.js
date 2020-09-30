//这里基本不许更改，个人在routes下创建自己的模块
import Vue from "vue";
import VueRouter from "vue-router";

/*
 路由器对象模块
 */

// 缓存原型上的push函数
const originPush = VueRouter.prototype.push;
const originReplace = VueRouter.prototype.replace;
// 给原型对象上的push指定新函数函数
VueRouter.prototype.push = function(location, onComplete, onAbort) {
  console.log("push()", onComplete, onAbort);
  // 判断如果没有指定回调函数, 通过call调用源函数并使用catch来处理错误
  if (onComplete === undefined && onAbort === undefined) {
    return originPush.call(this, location).catch(() => {});
    // return originPush.call(this, location).catch(() => {})
  } else {
    // 如果有指定任意回调函数, 通过call调用源push函数处理
    originPush.call(this, location, onComplete, onAbort);
  }
};
VueRouter.prototype.replace = function(location, onComplete, onAbort) {
  if (onComplete === undefined && onAbort === undefined) {
    return originReplace
      .call(this, location, onComplete, onAbort)
      .catch(() => {});
  } else {
    originReplace.call(this, location, onComplete, onAbort);
  }
};

Vue.use(VueRouter);
import routes from "./routers";
// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home
//   },
//   {
//     path: "/about",
//     name: "About",
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
// ];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  linkActiveClass:"active",
  linkExactActiveClass:"exactActive"
});

export default router;
