<template>
  <div id="app">
       <!-- <home></home> -->
       <!-- <router-view></router-view> -->

      <keep-alive>
        <!-- 需要缓存的视图组件 --> 
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
        <!-- 不需要缓存的视图组件 -->
        <router-view v-if="!$route.meta.keepAlive"></router-view>

  </div>
</template>
<script>

// import Vue from 'vue';
// import VueRouter from 'vue-router';
//   Vue.use(VueRouter);
  
import home from './components/home';
// import home from './components/goods/goodsissue';
export default {
  name: 'App',
  components:{
   home
  }
}
</script>

<style>
</style>