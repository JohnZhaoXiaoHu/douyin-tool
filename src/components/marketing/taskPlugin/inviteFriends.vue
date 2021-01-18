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
                <div v-loading="loading">
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing">
                    <!-- 面包屑 -->
                    <div class="mh-coupon-divtop">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/marketing' }">营销概况</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/marketing/miaoSha' }">邀请好友</el-breadcrumb-item>
                        </el-breadcrumb>     
                    </div>
                    <!-- 面包屑over -->

                    <div class=" headeView">

                        <div class="it_searchView">
                                
                                <div class="it_searchView1">
                                    <div class="zm_inputView">
                                        <div class="zm_inputTitle" style="">任务名称:</div>
                                        <el-input v-model="activityName" style="width: 190px;min-width: 128px" placeholder="" ></el-input>
                                    </div>
                                    <div class="zm_inputView it_inputView" >
                                        <div class="zm_inputTitle">创建时间:</div>
                                        <el-date-picker 
                                                v-model="dateValue"
                                                value-format="timestamp" type="daterange" style="width: 260px"
                                                start-placeholder="开始日期"
                                                range-separator="至"
                                                end-placeholder="结束日期">
                                        </el-date-picker>
                                    </div>
                                </div>


                                <div class="it_searchView1">
                                    <div class="zm_inputView">
                                        <div class="zm_inputTitle">奖励类型:</div>
                                        <el-select v-model="prizeKind" placeholder="请选择首页">
                                            <el-option v-for="item in options1" :label="item.label"
                                                :key="item.value" 
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>
                                    <div class="search_btnView">
                                        <button @click="search"  type="button" class="el-button el-button--primary el-button--small"><span>筛选</span></button>
                                        <button @click="clearData"  type="button" class="el-button el-button--text"><span>清空筛选条件</span></button>
                                    </div> 
                                </div>                              
                        </div>
 
                        <button @click="chaungJianTask"  type="button" class="el-button el-button--primary el-button--small createBtn"><span>创建任务</span></button>
                        <br>
                    </div>
                     <div>
                        <inviteFriends_list :tableData="tableData" :totalCount="totalCount" :listType="listType" @pageMethodSon="fatherPage">

                        </inviteFriends_list>
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

import VueCookie from 'vue-cookie';
import navbar from '../../navbar';
import sidebar from '../../sidebar';
import marknav from '../marknav';
import baseapi from '../../../utils/api';
import inviteFriends_list from './inviteFriends_list';
import http from '../../../utils/http.js';
// import goodsSpec from '../../resource/goodsSpec_zm.vue';
import {
        zm_getList1,
        zm_getList
    } from "../../../filters/zm_data"
import {    
        zm_jsonToString,
        zm_tipsMsg,
        zm_timestampToDate,    
        zm_getCurrenDate,
        zm_standardDateToFormatDate, zm_formDataToString
    } from "../../../filters/zm_tools"

export default {
    data() {
        return {
            loading:false,
            tableData: [],
            totalCount:0,
            activityName:'',
            dateValue:[],
            startTime: '',
            endTime: '',
            listType: 0,
            selectStatus: 0,
            prizeKind: "",
            options1: [{
                value: 3,
                label: '现金红包'
                }, {
                value: 1,
                label: '抢购优惠券'
                }, {
                value: 2,
                label: '积分'
                }, {
                value: 4,
                label: '优惠券'
                }, {
                value: 5,
                label: '商品'
                }
            ],
        };
    },
    beforeRouteEnter (to, from, next) {
        // let self = this;
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
               // console.log('--->beforeRouteEnter');
                // vm.request_getData(0, 0, 0);
            } else {
                next('/login');
            }
		})
    },
    created(){
    //    console.log('--------created 模板渲染前= ');
    },
    mounted(){
    //    console.log('--------mounted 安装初始化成功：模板渲染后= '+ zm_getCurrenDate());
       this.request_getData(1, 1);
    },
    watch:{
        dateValue: function(val) {
		    console.log('---selectDate: ' + val)
			if(val) {
				this.startTime = zm_standardDateToFormatDate(val[0], 1);
                this.endTime = zm_standardDateToFormatDate(val[1], 1);
                // this.startTime = val[0];
                // this.endTime = val[1];
                console.log("---startTime= "+ this.startTime+ "、endTime= "+this.endTime);
			}else{
                this.startTime = '';
                this.endTime   = '';
            }
        },
    },
    methods:{
        chaungJianTask(){ 
            console.log('---创建任务');
            this.$router.push({
                path:'/marketing/taskPlugin/itCreate',
                query:{
                    itemData: JSON.stringify([]),
                    isEdit: false,
                }
            })
        },
        request_getData(page, type){
            let that = this;
            let params = new FormData();       
            // params.append('pagenum', page);  
            // params.append('pagesize',20);
            params.append('nameorid',this.activityName);
            params.append('startTime', this.startTime);
            params.append('endTime', this.endTime);
            params.append('type', this.prizeKind);     
            let urlStr = baseapi.marketingIP + baseapi.it_inviteList;

            // urlStr = baseapi.TFIP + '/seckill/admin/seckillList';
            console.log('---邀请任务：params=' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            }).then(function(res){
                console.log('----邀请任务 response= '+zm_jsonToString(res.data));
                if(res.data.status ==200){
                    if (res.data.list) {
                        console.log('----邀请任务 data.length= '+res.data.list.length);
                        that.tableData = res.data.list;
                        that.totalCount = res.data.total;
                    }else{
                        that.tableData = [];
                        that.totalCount = 0;
                    }
                } else {
                    that.$message.error(res.data.message);
                }
            },function(res){
                 that.$message.error(res.data.message);
            })
        },
        shuaixuan(){
            this.request_getData(1, this.selectStatus)
        },
        search(){
            //console.log('---搜索：search')
            // this.request_getData(page, updown, status);
            this.request_getData(1, this.selectStatus);
        },
        clearData(){
            this.activityName = '';
            this.dateValue = '';
        },
        fatherPage(val){
            console.log('-------fatherPage= '+val);
            this.request_getData(val, this.selectStatus)
        },
    },
    components:{
        navbar,marknav,sidebar,inviteFriends_list
    }
}
</script>
<style>

.it_searchView{
    /* display: flex; */
    margin: 10px 0 10px 0;
}
.it_searchView1{
    display: flex;
    margin: 10px 0 10px 0;
}
.zm_inputView{
    display: flex;
}
.it_inputView{
    margin-left: 30px;
}
.zm_inputTitle{
    margin-top: 8px;
    margin-right: 8px;
    /* background: yellow; */
}

.goods_list_dibu-seven{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}
.mh-seven-div{
    display: flex;
    /* flex-direction: column; */
    align-items: center;
}
.mh-seven-div-span{
    display: flex;
    align-items: center;
    width: 100%;
    overflow:hidden; /*超出的部分隐藏起来。*/ 
    white-space:nowrap;/*不显示的地方用省略号...代替*/
    text-overflow:ellipsis;/* 支持 IE */
}
.mh-seven-div-parent{
    width: 150px;
}

.mh-seven-div-span>span:nth-child(2){
    width: 80%;
      overflow:hidden; /*超出的部分隐藏起来。*/ 
    white-space:nowrap;/*不显示的地方用省略号...代替*/
    text-overflow:ellipsis;/* 支持 IE */
}
.mh-market-timeleght .el-date-editor .el-range__icon{
    line-height: 26px !important
}
.mh-market-timeleght .el-date-editor .el-range-separator{
    line-height: 26px !important
}

.search_btnView{
    margin-left: 50px;  
}
.createBtn {
    margin: 20px;
}

.zm_tabs .el-tabs__item {
	font-size: 18px !important;
}


</style>



   
            
           