<template>
<!-- 拼团活动 -->
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
                    <!-- 面包屑 -->
                    <div class="mh-coupon-divtop">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                                 <el-breadcrumb-item :to="{ path: '/marketing' }">营销概况</el-breadcrumb-item>
                                 <el-breadcrumb-item :to="{ path: '/marketing/newman' }">拼团</el-breadcrumb-item>
                              
                        </el-breadcrumb>     
                    </div>
                    <!-- 面包屑over -->
                
                    <!--  -->
                    <div class="mh-coupon-newcreat_btn">
                        <el-button type="primary" size="small" @click="creatCoupon">新建拼团活动</el-button>
                       <div class="mh-coupon-newcreat_btndiv">
                            <el-input
                                placeholder="现金红包名称"
                                prefix-icon="el-icon-search"
                                v-model="couponinput">
                            </el-input>
                             <el-button size="small">搜索</el-button>
                       </div>
                    </div>

                     <div>
                        <el-tabs type="border-card">
                            <el-tab-pane label="所有促销">
                                <template>
                                    <el-table
                                    :data="tableData"
                                    style="width: 100%">
                                    <el-table-column
                                        prop="name"
                                        label="商品"
                                   >
                                    </el-table-column>
                                    <el-table-column
                                        prop="name"
                                        label="金额"
                                     >
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="有效时间">
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="活动状态">
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="订单实付金额">
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="成团订单数">
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="成团人数">
                                    </el-table-column>
                                    <el-table-column
                                        prop="address"
                                        label="操作">
                                    </el-table-column>

                                    </el-table>
                                </template>
                            </el-tab-pane>
                            <el-tab-pane label="未开始">配置管理</el-tab-pane>
                            <el-tab-pane label="进行中">角色管理</el-tab-pane>
                            <el-tab-pane label="已结束">定时任务补偿</el-tab-pane>
                            <el-tab-pane label="待审核">定时任务补偿</el-tab-pane>
                        </el-tabs>

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

import navbar from '../../navbar';
import sidebar from '../../sidebar';
import marknav from '../marknav';
import baseapi from '../../../utils/api';

export default {
    data() {
        return {

        };
    },
    mounted(){

    },

    methods:{
        creatCoupon(){
           	this.$router.push('/marketing/collage/creatcollage');
        }
    },
    components:{
        navbar,marknav,sidebar 
    }
}
</script>
<style>

</style>



   
            
           