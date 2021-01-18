<template>
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <marknav></marknav>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div>
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing">
                        <!-- <h1 class="marketing_h1">抢购</h1> -->
                        <!-- 面包屑 -->
                        <div class="mh-coupon-divtop">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/marketing' }">营销概况</el-breadcrumb-item>
                                <el-breadcrumb-item :to="{ path: '/marketing/qiangGouing' }">抢购</el-breadcrumb-item>             
                            </el-breadcrumb> 
                        </div>
                        <!-- 面包屑over -->

                        <div class="marketing_div">   
                            <dl class="marketing_div_dl" @click="qiangGou">
                                <dt>
                                    <img src="../../../static/images/icon/qg_qiang2.png" alt="抢购" class="menu-img">
                                </dt>
                                <dd>
                                    <span class="marketing_div_dl-span">抢购</span>
                                    <span class="marketing_div_dl-twospan">商品上下架</span>
                                </dd>
                            </dl>   

                            <dl class="marketing_div_dl"  @click="setting">
                                <dt>
                                  <img src="../../../static/images/icon/qg_setting1.png" alt="设置" class="menu-img">
                                </dt>
                                <dd>
                                    <span class="marketing_div_dl-span">统一设置</span>
                                    <span class="marketing_div_dl-twospan">设置抢购规则</span>
                                </dd>
                            </dl>  

                            <dl class="marketing_div_dl"  @click="settingRank">
                                <dt>
                                  <img src="../../../static/images/icon/qg_rank.png" alt="设置" class="menu-img">
                                </dt>
                                <dd>
                                    <span class="marketing_div_dl-span">排行榜</span>
                                    <span class="marketing_div_dl-twospan">收益排行版设置</span>
                                </dd>
                            </dl>    
  

                        </div>

                    </div>    
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

import navbar from '../navbar';
import sidebar from '../sidebar';
import marknav from './marknav';
import baseapi from '../../utils/api';

export default {
    data() {
        return {
         
        };
    },
    mounted(){

    },
    methods:{
        // qiangGou(){
        //     //shangxiajia
        //     // this.$router.push('/marketing/qiangGou/shangxiajia');
        //        this.$router.push('/marketing/qiangGou/qiang_gou');
        // },
        // chuangjian(){
        //     this.$router.push('/marketing/qiangGou/chaung_jian');
        // },
        // setting(){
        //     this.$router.push('/marketing/qiangGou/setting_page');
        // },
        // settingRank(){
        //     this.$router.push('/marketing/qiangGou/earningsRank');
        // }

    },
    components:{
        navbar,marknav,sidebar 
    }
}
</script>
<style>
.marketing_div{
    display: flex;
}

.marketing_div_dl{
    width: 30%;
    display: flex;
    align-items: center;
     height: 60px;
    padding: 10px;
    margin: 10px 10px;
    border-radius: 6px;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    background-color: #f2f2f2;
    cursor: pointer;
    display: flex;
}
.marketing_div_dl dt img{
    width: 40px;
    height: 40px;
    margin-right: 10px;
}
.marketing_div_dl dd{
    display: flex;
    flex-direction: column;
}
.marketing_div_dl-span{
    color:#303133;
    font-weight: 700;
}

.marketing_div_dl-twospan{
    color: #666;
}
</style>



   
            
           