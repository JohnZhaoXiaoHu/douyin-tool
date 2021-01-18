<template>
    <ul class="main-goods-left" id="main-goods-left_disabled">
        <router-link tag="a" to="/wxstore">   
            <li class="goods-left_list"><span>店铺主页</span></li>  
        </router-link>  
        <!-- <router-link tag="a" to="/wxstore/storenav">   
            <li class="goods-left_list"><span>店铺导航</span></li> 
        </router-link>   -->
         <router-link tag="a" to="/wxstore/storemsg">   
            <li class="goods-left_list"><span>店铺信息</span></li> 
         </router-link> 
         <router-link tag="a" to="/wxstore/custom">   
           <li class="goods-left_list"><span>自定义模块</span></li>
        </router-link>  
    </ul>
</template>


