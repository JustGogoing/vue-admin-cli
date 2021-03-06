/*
 * @Author: sdx
 * @Date: 2020-07-05 17:03:22
 * @LastEditTime: 2020-07-06 19:01:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-admin-cli/src/router/index.js
 */

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./modules";
Vue.use(VueRouter);

// 修复重复push当前路由的报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  scrollBehavior: () => ({ y: 0 }),
  routes
});

export default router;
