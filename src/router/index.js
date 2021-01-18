import Vue from 'vue'
import VueRouter from 'vue-router';

console.dir(VueRouter);
Vue.use(VueRouter);//安装    内部实现:Vue.component('router-link',routerLink),


import routes from './router.config'

let router = new VueRouter(routes);

export default router