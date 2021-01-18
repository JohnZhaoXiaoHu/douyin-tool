<template>
    <ul class="main-goods-left" id="main-goods-left_disabled">

        <!-- 
            set_platformInfo、 set_domain
         -->
         
        <router-link tag="a" to="/mhset">   
            <li class="goods-left_list"><span>用户信息</span></li> 
        </router-link> 
            
        <router-link tag="a" to="/mhset/set_common">   
            <li class="goods-left_list"><span>通用设置</span></li> 
        </router-link> 

        <router-link tag="a" to="/mhset/set_takeCommission">   
            <li class="goods-left_list"><span>抽佣设置</span></li> 
        </router-link> 
        
        <router-link tag="a" to="/mhset/cashconfig">   
            <li class="goods-left_list"><span>提现设置</span></li>  
        </router-link>  
        <!-- payment 改为 gathering -->
        <router-link tag="a" to="/mhset/set_gathering">   
            <li class="goods-left_list"><span>收款设置</span></li>  
        </router-link>  
        <router-link tag="a" to="/mhset/set_domain">   
            <li class="goods-left_list"><span>域名设置</span></li>  
        </router-link> 


        <router-link tag="a" to="/mhset/permission/1">   
            <li class="goods-left_list"><span>权限设置</span></li> 
        </router-link>  
        
        <router-link tag="a" to="/mhset/logs">   
            <li class="goods-left_list"><span>操作记录</span></li> 
        </router-link> 

        <router-link tag="a" to="/mhset/set_notify">   
            <li class="goods-left_list"><span>通知设置</span></li> 
        </router-link> 
        
        

    </ul>
</template>


