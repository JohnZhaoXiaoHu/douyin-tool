<template>
    <ul class="main-goods-left" id="main-goods-left_disabled">
        <router-link tag="a" to="/memberlist">   
          <li class="goods-left_list"><span>会员列表</span></li>
        </router-link>  

        <router-link tag="a" to="/memberlist/membergrade">   
           <li class="goods-left_list is-active"><span>会员等级</span></li>
        </router-link>  

        <router-link tag="a" to="/memberlist/membercentre">   
          <li class="goods-left_list"><span>会员中心</span></li>
        </router-link>  

        <router-link tag="a" to="/memberlist/memberset">   
             <li class="goods-left_list"><span>会员设置</span></li>
        </router-link>  

        <router-link tag="a" to="/memberlist/mb_IntegralSetting">   
             <li class="goods-left_list"><span>积分设置</span></li>
        </router-link>  

        <router-link tag="a" to="/memberlist/mb_IntegralManage">   
             <li class="goods-left_list"><span>积分商城</span></li>
        </router-link>  
    </ul>
</template>


