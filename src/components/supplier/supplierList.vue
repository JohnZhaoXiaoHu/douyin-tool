<template>
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <supplierNav></supplierNav>
            <div class="main-goods-right">


                <!-- 商品中心内容 -->
                <div v-loading="loading">
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing">
                    <!-- 面包屑 -->
                    <!-- <div class="mh-coupon-divtop">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/supplier' }">供应商列表</el-breadcrumb-item>
                        </el-breadcrumb>     
                    </div> -->
                    <!-- 面包屑over -->

                    <div class="supplier_pageTitle">
                       供应商
                    </div>

                    <div class="search vip-alllist vip-xxxx headeView">

                        <div class="sp_searchView">
                                <div class="sx-input">
                                    <label class="el-form-item__label" style="width: 80px;">活动名称:</label>
                                    <el-input v-model="value1" style="width: 190px;min-width: 128px" placeholder="" ></el-input>
                                </div>
                                <div class="vip-item-list_time mh-market-timeleght" >
                                    <label class="el-form-item__label" style="width: 120px;">创建时间:</label>
                                    <el-date-picker 
                                            v-model="dateValue"
                                            value-format="timestamp" type="daterange" style="width: 260px"
                                            start-placeholder="开始日期"
                                            range-separator="至"
                                            end-placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                           
                              <div class="search_btnView">
                                <button @click="search"  type="button" class="el-button el-button--primary el-button--small"><span>筛选</span></button>
                                <button @click="clearData"  type="button" class="el-button el-button--text"><span>清空筛选条件</span></button>
                              </div> 
                        </div>
 
                        <button @click="chaungJianHuoDong"  type="button" class="el-button el-button--primary el-button--small createBtn">
                            <span>创建供应商</span>
                        </button>
                        <br>
                    </div>
   
                     <div>
                        <supplierTableView :tableData="tableData" :totalCount="totalCount" :listType="listType" 
                            @pageMethodSon="fatherPage">
                        </supplierTableView>
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
import navbar from '../navbar';
import sidebar from '../sidebar';
import supplierNav from './supplierNav';
import baseapi from '../../utils/api';
import supplierTableView from './supplierTableView';
import http from '../../utils/http.js';
// import goodsSpec from '../../resource/goodsSpec_zm.vue';

import {
        zm_getList1,
        zm_getList
    } from "../../filters/zm_data"

import {    
        zm_jsonToString,
        zm_formDataToString, 
        zm_tipsMsg,
        zm_timestampToDate,    
        zm_getCurrenDate,
        zm_standardDateToFormatDate
    } from "../../filters/zm_tools"


export default {
    data() {
        return {
            loading:false,
            tableData: [],
            totalCount:0,
            value1:'',
            dateValue:[],
            startTime: '',
            endTime: '',
            listType: 0,
			itemIndex: 0,
            lastItemIndex: 0,
            selectStatus: 0,
        };
    },
    beforeRouteEnter (to, from, next) {
        // let self = this;
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
               console.log('--->beforeRouteEnter');
                // this.loading = true;
                // vm.getData(1, 0, 0);
            } else {
                next('/login');
            }
		})
    },
    created(){
       console.log('--------created 模板渲染前= ');
    },
    mounted(){
       console.log('--------mounted 安装初始化成功：模板渲染后= '+ zm_getCurrenDate());
       this.getData(1,0);
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
			}
        },
    },
    methods:{
        chaungJianHuoDong(){
            console.log('---创建供应商 11');
            // this.$router.push('/supplier/supplierCreate');
            // let itemData = this.tableData[index];
            this.$router.push({
            path:'/supplier/supplierCreate',
            query:{
                activityData:null,
                isEdit: false,
            }
            });
            // this.$router.push('./qiangGou/chaung_jian.vue');
        },
        getData(page, updown, status){
            let that = this;
            let params = new FormData(); 
            params.append('page', page);  
            params.append('limit',20);
            params.append('sid',this.value1);
            params.append('sname',this.value1);
            params.append('stimeStart', this.startTime);
            params.append('stimeEnd', this.endTime);
            let urlStr = baseapi.TIP + baseapi.sp_list;
                urlStr = baseapi.userIP + baseapi.sp_list;            
            console.log('---供应商列表：params=' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type': 'multipart/form-data',
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    // 'token': this.$cookie.get('token'),			
                }
            }).then(function(res){
                console.log('---供应商response= '+zm_jsonToString(res.data));
                that.loading = false;
                if(res.data.status ==200){
                    that.tableData  = res.data.list;
                    that.totalCount = res.data.total;
                    console.log('---供应商 length= '+that.totalCount);
                } else {
                    that.$message.error(res.data.message);
                }
            },function(res){
                // console.log('----->供应商：报错 response= '+zm_jsonToString(res));
            })
        },
        shuaixuan(){
            this.getData(1, this.itemIndex, this.selectStatus)
        },
        search(){
            //console.log('---搜索：search')
            this.getData(1, this.itemIndex, this.selectStatus);
        },
        clearData(){
            this.value1 = '';
            this.dateValue = '';
        },
        fatherPage(val){
            console.log('-------fatherPage= '+val);
            this.getData(val, this.itemIndex, this.selectStatus)
        },
    },
    components:{
        navbar,supplierNav,sidebar,supplierTableView
    }
}
</script>

<style>
.supplier_pageTitle{
    font-size: 18px !important;
    margin: 0 0 20px 0;

}
.sp_searchView{
    display: flex;
    /* background: antiquewhite; */
    margin: 10px 0 10px 0;
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



   
            
           