<template>
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <zmTestNav></zmTestNav>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <!--选项卡组件内容-->
                <div class="goods-card_body marketing">
                    <!-- 面包屑：导航标题-->
                    <div class="mh-coupon-divtop">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                               <div class="mh_title"> 销售奖 </div> 
                        </el-breadcrumb>     
                    </div>
                    <!-- 面包屑over -->

                    <div class="marketing_div">   
                        测试: ccTest 
                    </div>
                    <br><br>
         

                </div>    
                <!--选项卡组件 over-->
                <!-- 商品中心over-->
            </div>
        </div>
        <!--        -->
    </div>
    <!--主体 over-->
    </div>
</template>

<script>

import navbar from '../navbar';
import sidebar from '../sidebar';
import zmTestNav from './zmTestNav';
import baseapi from '../../utils/api';


export default {
    data() {
        return {
            checkList: ['选中且禁用','复选框 A'],
            citieList2: [],
        };
    },
    watch:{
        checkedCitieList2: function(val) {
			console.log("---checkedCitieList2= "+ val);
        },
     },
    mounted(){


    },
    methods:{
        qiangGou(){
            // this.$router.push('/marketing/qiangGou/shangxiajia');
        },
    },
    components:{
        navbar,zmTestNav,sidebar 
    }
}
</script>
<style>
.mh_title{
    font-size: 15px !important;
}


</style>



   
            
           