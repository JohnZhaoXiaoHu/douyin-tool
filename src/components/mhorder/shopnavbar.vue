<template>
    <ul class="main-goods-left" id="main-goods-left_disabled">
        <router-link tag="a" to="/order">   
            <li class="goods-left_list"><span>订单列表</span></li>          
        </router-link>  
        <router-link tag="a" to="/ordersafe">   
            <li class="goods-left_list"><span>维权订单</span></li>          
        </router-link>  
            <!-- <router-link tag="a" to="/orderevaluate">   
            <li class="goods-left_list"><span>评价管理</span></li>          
        </router-link>  -->
        <router-link tag="a" to="/orderbatch">   
            <li class="goods-left_list"><span>批量发货</span></li>          
        </router-link> 
           
        <!-- <router-link tag="a" to="/orderset">   
            <li class="goods-left_list"><span>订单设置</span></li>          
        </router-link>  -->
    </ul>
</template>