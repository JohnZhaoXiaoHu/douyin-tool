<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <!-- <ul class="main-goods-left" id="main-goods-left_disabled">
                <a href="javascript:void(0)"><li class="goods-left_list is-active"><span>商品列表</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>发布商品</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>商品分类</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>商品分组</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>商品导入</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>我的资源</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>商品设置</span></li></a>
            </ul> -->

            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div>
                    <!--选项卡组件-->
      
                    <!--选项卡组件 over-->
                </div>
                <!-- 商品中心over-->
            </div>
        </div>


        <!--        -->

    </div>
    <!--主体 over-->
    </div>
</template>

<script>

import navbar from './navbar';
import sidebar from './sidebar';
import baseapi from '../api.js';

export default {
    data() {
        return {
         
        };
    },
    mounted(){

    },

    methods:{
  
    },
    components:{
        navbar,sidebar    
    }
}
</script>



   
            
           