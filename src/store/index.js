
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);//状态管理对象安装  store 类   install方法  mapActions/mapGeters函数
//安装 全局每个vue头上打造 store

//创建角色

import actions from './actions';
import mutations from './mutations';
import state from './state'; // 仓库
import getters from './getters';


export default new Vuex.Store({
    actions,mutations,state,getters
}) 