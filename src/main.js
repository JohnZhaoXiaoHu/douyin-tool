// import Vue from 'vue'
import App from './App';
import './assets/css/home.css';

//peter
import Axios from "axios";
import VueAxios from "vue-axios";;
import UTIL from "./utils/utils";
import ElementUI from "element-ui"
import "element-ui/lib/theme-chalk/index.css"
Vue.use(ElementUI);
import router from './router';
import customrichtextform from "./components/module/richtext/richtextform.vue"
import customrichtext from "./components/module/richtext/richtext.vue"

Vue.component("customrichtextform", customrichtextform)
Vue.component("customrichtext", customrichtext)

import VueUeditor from "vue-ueditor"
import qs from 'qs'


Vue.component("VueUeditor", VueUeditor);
Vue.prototype.$emptyvue = new Vue();

import GlobalConfig from "./router/global.js"
Vue.use(GlobalConfig);

Vue.prototype.$qs = qs;

import resourcemodal from "./components/module/modal/resourcemodal"
import goodmodal from "./components/module/modal//goodmodal.vue"
import goodgroupmodal from "./components/module/modal/goodgroupmodal.vue"
import marketingmodal from "./components/module/modal/marketingmodal.vue"
import categorymodal from "./components/module/modal/categorymodal.vue"
import sevengoodmodal from "./components/module/modal/sevengoodmodal.vue"


Vue.component("marketingmodal", marketingmodal)
Vue.component("goodmodal", goodmodal)
Vue.component("resourcemodal", resourcemodal)
Vue.component("goodgroupmodal", goodgroupmodal)
Vue.component("categorymodal", categorymodal)
Vue.component("sevengoodmodal", sevengoodmodal)

//全局封装
//引入post请求封装类
//import Request from '@/utils/request.js' // 引入封装的文件
//const { request } = Request;
//Vue.prototype.$request = request; // 挂载到全局上
//Vue.use(ElementUI);


//挂载时间锤处理函数
// import moment from 'moment';
// Vue.prototype.$moment = moment;

//黏贴复制模块
import VueClipboard from 'vue-clipboard2';
Vue.use(VueClipboard);

import axios from 'axios';
//挂载原型在组件内部 this.$http
Vue.prototype.$http = axios;


import http from './utils/http.js';
Vue.prototype.http = http ;

import https from './utils/https.js'
Vue.prototype.https = https ;


//全局有起来cookie
import VueCookie from 'vue-cookie';
Vue.use(VueCookie);


// 添加请求拦截器
// axios.defaults.baseURL = 'http://api.mihuanshop.com';
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  if( VueCookie.get('userId')){
    config.headers.common['suserId']=VueCookie.get('userId');
    config.headers.common['roleId']=VueCookie.get('roleId');
    config.headers.common['adminId']=VueCookie.get('adminId');
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


//全局路由
router.beforeEach((to, from, next) => {

  let toDepth = to.path.split('/').length
  let fromDepth = from.path.split('/').length
  // console.log('---全局路由 from.path= '+from.path);
  // console.log('---全局路由   to.path= '+to.path);
  // console.log('---全局路由 toDepth= '+toDepth);
  // console.log('---全局路由 fromDepth= '+fromDepth);
  if (toDepth < fromDepth) {
    // console.log('<--返回 back')

  } else if (toDepth > fromDepth)  {
    // console.log('-->进入 enter...')

  }else if (toDepth == fromDepth) {
    // console.log('---平行页...')

  }
  next();
 
})

//全局过滤器

Vue.filter('money',function(data=0,currency='¥ ',digit=2){  //data 传过来的参数
  return currency + (data/100).toFixed(digit);
})

Vue.filter('dateFormat', function(originVal) {
    const dt = new Date(originVal)
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')
    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
})





Vue.config.productionTip = false;

import store from './store';

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
})
