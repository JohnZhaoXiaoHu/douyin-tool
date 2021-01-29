<template>
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <settingnav></settingnav>
            <div class="main-goods-right">
                <!-- 中心内容 -->
                <div v-loading="loading">
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing mh-mhset_logs_header-body">
                    <div class="mh-mhset_logs_header">
                       <h5>合作管理</h5>    
                    </div>


                    <el-tabs v-model="activeName" @tab-click="handleClick" class="set_cmItemView">
                        <el-tab-pane label="已合作店铺" name="first">
                        </el-tab-pane>
                        <el-tab-pane label="申请合作店铺" name="second">
                        </el-tab-pane>
                    </el-tabs>


                    <!-- table1 -->
                    <el-table :data="tableData" border style="width: 100%" v-bind:class="[isItemView1==0 ? itemView11 : itemView12]">
                        <el-table-column prop="shopName" label="店铺名称" align="center">
                                    <!-- <template slot-scope="scope">
                                        <div style="display: flex;">
                                            <img :src="scope.row.phone" class="sm_imgView" alt="" srcset="">
                                            <div>{{scope.row.shopName}}</div>
                                        </div>
                                    </template> -->
                         </el-table-column>

                        <el-table-column prop="nickName" label="用户名称" align="center"> </el-table-column>
                        <el-table-column prop="area" label="地区" align="center"> </el-table-column>
                        <el-table-column prop="people" label="联系人" align="center"> </el-table-column>
                        <el-table-column prop="userPhone" label="联系电话" align="center"> </el-table-column>
                        <el-table-column prop="wxNumber" label="微信号" align="center"> </el-table-column>
                        <el-table-column prop="qqNumber" label="QQ号" align="center"> </el-table-column>
                        <el-table-column prop="status" label="状态" align="center">  合作中  </el-table-column>
                        <el-table-column label="操作" align="center" width="130">
                             <template slot-scope="scope">
                                <div >
                                    <el-button type="text" size="mini" @click="endOperate(scope.$index)">终止合作</el-button>
                                    <el-button type="text" size="mini" @click="setGoods(scope.$index)">设置商品</el-button>
                                    <el-button type="text" size="mini" @click="lookOrder(scope.$index)">查看合作订单</el-button>
                                </div>
                            </template>
                        </el-table-column>

                     </el-table>

                    <!-- table2 -->
                     <el-table :data="tableData" border style="width: 100%" v-bind:class="[isItemView2==1 ? itemView21 : itemView22]">
                        <el-table-column prop="shopName" label="店铺名称" align="center">
                         </el-table-column>

                        <el-table-column prop="nickName" label="用户名称" align="center"> </el-table-column>
                        <el-table-column prop="area" label="地区" align="center"> </el-table-column>
                        <el-table-column prop="people" label="联系人" align="center"> </el-table-column>
                        <el-table-column prop="userPhone" label="联系电话" align="center"> </el-table-column>
                        <el-table-column prop="remark" label="留言" align="center"> </el-table-column>
    
                        <el-table-column label="意向商品" min-width="170">
                            <template slot-scope="scope">
                                <div style="display: flex;">
                                    <img :src="scope.row.itemPicture" class="set_cmImgView" alt="" srcset="">
                                    <div>
                                        <div style="display: flex;"><div class="set_cmGoods">商品名称：</div> {{scope.row.itemName}}</div>
                                        <div style="display: flex;"><div class="set_cmGoods">商品ID： </div> {{scope.row.itemId}}</div>
                                    </div>
                                </div>
                            </template>
                        </el-table-column>

                        <el-table-column prop="status" label="状态" align="center"> 申请合作  </el-table-column>
                        <el-table-column label="操作" align="center" width="130">
                             <template slot-scope="scope">
                                <div >
                                    <el-button type="text" size="mini" @click="agreeOperate(scope.$index)">同意合作</el-button>
                                </div>
                            </template>
                        </el-table-column>
                     </el-table>


                     <div style="padding:0 20px 15px;border-box">
                        <div class="mh-mhsegt-logs_pages">
                            <el-pagination layout="total, prev, pager, next, jumper"
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage4"
                                :page-sizes="[100, 200, 300, 400]"
                                :page-size="20" :total="totalCount">
                            </el-pagination>
                         </div>
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
import settingnav from './settingnav';
import api from '../../utils/api';
import {
        zm_jsonToString,
        zm_formDataToString
} from "../../filters/zm_tools.js"


export default {
    data() {
        return {
            loading : true,
            activeName:'first',

            tableData:[],
            totalCount:0,
            value1:'',
            value2:'',

            itemActiveName: 'first',
            itemIndex: 0,
            itemLastIndex: 0,
            isItemView1: 0,
            isItemView2: 0,
            itemView11: 'itemView11', itemView12: 'itemView12',
            itemView21: 'itemView21', itemView22: 'itemView22',
        };
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.request_partnerShop(1);
            } else {
                next('/login');
            }
		})
	},
    mounted(){
       
    },
    methods:{
        //tab点击事件
        handleClick(tab, event) {
            console.log('---tab.index= '+tab.index);
            this.itemIndex = tab.index;
            this.isItemView1= this.itemIndex;
            this.isItemView2= this.itemIndex;
            if (this.itemIndex==0) {
                this.request_partnerShop(1);
            }else if (this.itemIndex==1) {
                this.request_applyShop(1);
            }

        },
        endOperate(index){
            let item = this.tableData[index];
            let that = this;
            let urlStr = api.supplierCooperationCancel;
            let params = new FormData();       
            params.append('id', item.id);  
            console.log('---终止合作 params=' + zm_formDataToString(params) +'\n urlStr= ', urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(res){
                console.log('---终止合作 response= '+zm_jsonToString(res.data));
                if(res.data.status ==200){
                    that.$message.success("终止成功！");
                    that.request_partnerShop(1);
                }else{
                    that.$message.error(res.data.message);
                }
            }).catch(function(error){
                // console.error('---终止合作= ', error);
            }); 

        },
        setGoods(index){
            console.log('---设置商品 index= '+index);
            let itemData = this.tableData[index];
            this.$router.push({
                path: "../mhset/set_goodslist",
                query: {
                    itemData: JSON.stringify(itemData), 
                    isEdit:true
                },
            });
        },
        lookOrder(index){
            console.log('---查看合作订单 index= '+index);
        },
        agreeOperate(index){
            let item = this.tableData[index];
            let that = this;
            let urlStr = api.supplierCooperationAgree;
            let params = new FormData();       
            params.append('id', item.id);  
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(res){
                if(res.data.status ==200){
                    that.$message.success("同意成功！");
                    that.request_applyShop(1);
                }else{
                    that.$message.error(res.data.message);
                }
            }).catch(function(error){
                console.error('---申请合作店铺= ', error);
            }); 

        },
        request_partnerShop(page, status){
            let that = this;
            let params = new FormData();       
            params.append('page', page);  
            params.append('limit',20);
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("supplierId", '2');
            }
            let urlStr = api.supplierCooperationPartnerShop;           
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(res){
                console.log('---合作店铺列表 urlStr= ', urlStr+ '\n params'+ zm_formDataToString(params)
                +'\n:response= '+zm_jsonToString(res.data));

                if(res.data.status ==200){
                    let data =   res.data.list;
                    that.tableData = data;
                    that.totalCount = res.data.totalCount;
                    that.loading = false;  
                }else{
                    that.$message.error(res.data.message);
                }
            }).catch(function(error){
                console.error(error);
            }); 
        },
        request_applyShop(page, status){
            let that = this;
            let params = new FormData();       
            params.append('page', page);  
            params.append('limit',20);
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("supplierId", '2');
            }
            let urlStr = api.supplierCooperationApplyShop;
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(res){
                console.log('---申请合作店铺 urlStr= ', urlStr+ '\n params'+ zm_formDataToString(params)
                +'\n:response= '+zm_jsonToString(res.data));

                if(res.data.status ==200){
                    let data =   res.data.list;
                    that.tableData = data;
                    that.totalCount = res.data.totalCount;
                    that.loading = false; 
                }else{
                    that.$message.error(res.data.message);
                }
            }).catch(function(error){
                console.error('---申请合作店铺= ', error);
            }); 
        },
        shuaixuan(){
            this.request_partnerShop(1,9)
        },
        handleCurrentChange(val){
            this.request_partnerShop(val)
        },
       
    },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>

<style>
/****************** itemView: 显示/隐藏 ******************/
.itemView11 { display: '';} .itemView12 { display: none;}
.itemView21 { display: '';} .itemView22 { display: none;}

.set_cmGoods{
    color: #3388FF;
}
.set_cmImgView{
    width: 20px;
    height: 20px;
    margin-top: 10px;
    margin-right: 10px;
}
.set_cmItemView{
    margin: 20px;
}
.sm_imgView{
    width: 20px;
    height: 20px;
}
.mh-mhset-logs_select .el-input__icon{
    line-height: 28px;
}
.mh-mhset_logs_header-body{
    padding: 0 !important;
    box-sizing: border-box;
}
.mh-mhset_logs_header{
   width:100%;
   border-bottom: 1px solid #ebeef5;
   padding: 18px 20px;
  
   margin-bottom: 20px;
       box-sizing: border-box;
   
}
.mh-mhset_logs_header>h5{
    color: #303133;
    font-weight: normal;
}
.mh-mhsegt-logs_pages{
    width: 100%;
    display: flex;
    justify-items: center;
    justify-content: flex-end;
    margin: 15px 0 0;
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

</style>




            
           