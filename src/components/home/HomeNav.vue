<template>
    <ul class="main-goods-left" id="main-goods-left_disabled">
        
        <!-- 概览、页面、 用户-->
        <router-link tag="a" to="/home">   
          <li class="goods-left_list"><span>基础指标概览</span></li>
        </router-link>  

        <router-link tag="a" to="/home/hm_pageBasicData">   
          <li class="goods-left_list"><span>页面基础数据</span></li>
        </router-link> 
        
        <router-link tag="a" to="/home/hm_userBehaviorAnalysis">   
          <li class="goods-left_list"><span>用户行为分析</span></li>
        </router-link>  
<!-- src/components/home/hm_BasicIndicators.vue -->

    </ul>
</template>


