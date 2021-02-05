<template>
<!-- 商品：评价管理 -->
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <secnavbar></secnavbar>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div>
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing">

                    <!-- 收益排行榜设置（假数据列表，给用户看的） -->
                    <br>
                    <div>
                        <br>
                       
                        <div class="ft_title">
                            运费模板
                        </div>

                        <div class="ft_BtnView">
                            <!-- <el-button class="good_createEvaluate" type="primary" plain size="medium"  @click="ft_addReightTemplateClick(1)"> 
                            +添加模板
                            </el-button> -->
                            <el-button class="good_createEvaluate" type="text" size="medium"  @click="freightCalculationRules()"> 
                            运费计算规则
                            </el-button>
                        </div>

                        <!-- 列表 border-->
                        <el-table :data="ftListData" style="width: 100%" border="">
                            
                            <el-table-column prop="name" label="模板ID"  width="200" align="center">
                                <template slot-scope="scope" >
                                    <div>{{scope.row.template.id}}</div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="name" label="模板名称" >
                                <template slot-scope="scope" >
                                    <div>{{scope.row.template.template_name}}</div>
                                </template>
                            </el-table-column>
                            
                        </el-table>
                        
                        <!-- small sizes 分页-->
                        <!-- <div class="goods_list_dibu-seven em_evaluatePage">
                            <el-pagination @current-change="handleCurrentChange" 
                            :current-page="currentPage" 
                            :page-size="rankPageSize" 
                            :total="totalCount" background layout="total, prev, pager, next, jumper">
                            </el-pagination>
                        </div> -->

                    </div>
                    <br><br><br><br><br><br>

                     <!-- 弹框：运费计算规则 -->
                    <el-dialog title="运费计算规则" :visible.sync="ft_calculationRulesDialogVisible" width="600px">
                        <div class="ft_calculationRulesView">
                             
                            <h5> 1.商品关联设置： </h5> 
                            每件商品，仅可设置一种运费收取方式，即：统一运费，或指定运费模版
                            <br>
                            统一运费：按商品一次计收运费，如统一运费10元，单笔购买n件同一商品，均只收取10元运费；单笔订单购买多种商品，分别设置不同金额
                            <br>
                            统一运费，已最高运费金额收取。例如单笔购买三件商品运费为统一运费分别1、2、3，收取运费为3元
                            <br><br>

                            <h5> 2.运费模版： </h5> 
                            选择相应的运费模版，目前有2种，按件 按重量  
                            运费模版设置默认运费，然后可指定不同 域的运费，每指定区域自动按默认运费计算
                            <br><br>
                            
                            同一订单，不同或相同商品设置同一运费模版：则按该模版进行累计计算
                            <br>
                            例如模版为重量模版；首重1kg为5元，续重每kg 加5元  不满1kg的按1kg 计算
                            <br>
                            商品a为1kg,,b为1kg ,两商品使用同一模版，则按商品累计为2kg,计算出运费为10元

                            <br><br>
                            同一订单，不同商品设置不同的运费模版：则分别按模版计算出每个商品的运费，进行累加计算
                            <br><br>
                            同一订单，有的商品设置的是统一运费  ，有的商品设置的是运费模版，则分别计算不同商品的运费，再进行累加计算                        
                        </div>
                        
                        <el-button class="ft_calculationRulesBtn" type="primary" size="medium" @click="ft_calculationRules()">我知道了</el-button>
                    </el-dialog>
                    <br><br><br><br><br><br>

                    <!-- 弹框： 模板列表-->
                    <el-dialog title="模板列表" :visible.sync="ft_tableDialogVisible" width="700px">
                        <div class="gq_zmtuanId">
                            <freightTemplate_list ref="ftList" :tableData="ft_tableData" :totalCount="totalCount" 
                            @ftl_ToFatherSelect="ft_selectBackClick" 
                            @pageMethodSon="ft_fatherPage">
                            </freightTemplate_list>
                        </div>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="ft_closeclick">确认</el-button>
                        </div>
                    </el-dialog>

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
import baseapi from '../../utils/api';
import secnavbar from './secnavbar';
import freightTemplate_list from './goods_freightTemplate_list';

import {    
        zm_fundsSetup,
        zm_getList1,
        zm_getList
    } from "../../filters/zm_data"
import {    
        zm_jsonToString,
        zm_tipsMsg,
        zm_timestampToDate,
        zm_getCurrenDate,
        zm_getCurrenTimestamp,
        zm_standardDateToFormatDate,
        zm_formDataToString
    } from "../../filters/zm_tools"

import { zm_dateFormat } from '../../filters/zm_dateTime';

export default {
    data() {
        return {
            dateValue:[],
            zm_searchInput: '',
            currentPage: 1,
			totalCount: 0,
            rankPageSize: 20,
            //ft_tableContentView
			ft_tableContentView: true,
			ft_tableContentView1: 'ft_tableContentView1',
			ft_tableContentView2: 'ft_tableContentView2',
            //
            rankListData:[],
            rankItemData: '',
            ftListData:[],
            ft_selectIndex: 0,
            ft_calculationRulesDialogVisible:false,
            //模板列表 弹框
            ft_tableDialogVisible:false,
            ft_tableData:[],
        };
    },
    created(){
       //console.log('--------created 模板渲染前= ');
       this.request_freightTemplateList();
    },
    mounted(){
       console.log('--------mounted 安装初始化成功：模板渲染后 ');
    },
    methods:{
        ft_closeclick(){
            console.log('---ftList= ' +this.$refs.ftList);
            // 父组件传数据 给 子组件
            this.$refs.ftList.son_sconfirmCilck('确认选择');
            this.ft_tableDialogVisible = false;
        },
        ft_selectBackClick(obj){
            console.log('---父组件接收数据 obj= ' +obj);
        },
        ft_fatherPage(val){
            console.log('-------ft_fatherPage= '+val);
        },
        //时间处理函数
        dateFormat(row, column, cellValue, index){
           const daterc = row[column.property];
           return zm_dateFormat(daterc);          
        },
         ft_calculationRules(){
            this.ft_calculationRulesDialogVisible = false;
        },
        zm_clearSearchDataClick(){
            this.zm_searchInput = '';
        },
        handleCurrentChange: function(currentPage) {
			//分页：点击第几页（请求分页数据：改变时会触发	当前页currentPage） 
			console.log('---当前页 currentPage= ', currentPage)
			this.currentPage = currentPage
			this.request_freightTemplateList();
		},
        //---------------------运费模板列表--------------------- 
        request_freightTemplateList(){
            let self = this;
            let params = new FormData();   
            params.append('page', 0);
            params.append('size', 100);

            let urlStr = baseapi.TIP + baseapi.ft_findAll;
                urlStr = baseapi.supplierFreightTemplateList;
            // urlStr = "http://172.16.1.84:8083/panicbuy/freight/findAll";

            console.log('---运费模板列表: urlStr= '+urlStr + '\n params= '+ zm_formDataToString(params));
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
            }).then(function(res){
                console.log('---运费模板列表：response= '+zm_jsonToString(res.data));
                if(res.status ==200){
                    if (res.data.data && res.data.data.List) {
                        if (res.data.data.List.length>0) {
                            self.ftListData   = res.data.data.List;
                            self.ft_tableData = res.data.data.List;
                            self.totalCount   = res.data.data.Count;
                            console.log('---运费模板列表: length= '+self.ftListData.length);
                        }
                    }
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
            // src/components/shopMin
        },
        ft_addReightTemplateClick(){
            // 创建模板
            // this.$router.push('/goodslist/goods_freightTemplateCreate');
            this.$router.push({
            path:'/goodslist/goods_freightTemplateCreate',
                query:{
                    ftDetailData:null,
                    isFaBu: false,
                }
            })
        },
        freightCalculationRules(){
            // 运费计算规则
            this.ft_calculationRulesDialogVisible = true;
        },
        ft_copyClick(index){
            //复制模板
            this.ft_selectIndex = index;
            this.toCopy();
        },
        ft_editClick(index){
            //编辑
            console.log('---ft_editClick= '+index);
            let itemData = this.ftListData[index];
            this.$router.push({
            path:'/goodslist/goods_freightTemplateCreate',
                query:{
                    ftDetailData:JSON.stringify(itemData),
                    isFaBu: false,
                }
            })
        },
        ft_deleteClick(index){
            console.log('---ft_deleteClick= '+index);
            this.ft_selectIndex = index;
            //运费模板（删除）
            this.zm_messageBox("您确定要删除运费模板？", '温馨提示', "确定", "取消",'', 1);
        },
         toCopy(index){
            //复制模板
            let item = this.ftListData[this.ft_selectIndex];
            let self = this;
            let params = new FormData();       
            params.append('id', item.tShopFreightTemplate.sftTemplateId);

            let urlStr = baseapi.TIP + baseapi.ft_copy;
            // urlStr = "http://172.16.1.84:8083/panicbuy/freight/copy";
            console.log('---复制模板: urlStr= '+urlStr + '\n params= '+ zm_formDataToString(params));

            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            }).then(function(res){
                if(res.status ==200){
                    self.$message.success('复制成功！');
                    self.request_freightTemplateList();
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
        toDelete(index){
            console.log('---toDelete= '+this.ft_selectIndex);
            //运费模板（删除）
            let item = this.ftListData[this.ft_selectIndex];
            let self = this;
            let params = new FormData();       
            params.append('id', item.tShopFreightTemplate.sftTemplateId);  
            let urlStr = baseapi.TIP + baseapi.ft_delete;
            // urlStr = "http://172.16.1.84:8083/panicbuy/freight/delete";

            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            }).then(function(res){
                if(res.status ==200){
                    self.ftListData.splice(self.ft_selectIndex, 1);
                    self.$message.success('删除成功！');
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
        //询问弹框（success / info / warning / error）
	      zm_messageBox(message, title, confirmText, cancelText, infoType, thingType) {
            var tipType = 'warning'; 
            if(infoType){
              tipType = infoType;
            }
            let self = this;
            this.$confirm(message, title, {
              confirmButtonText: confirmText,
              cancelButtonText: cancelText,
              type: tipType,
              center: true
            }).then(() => {
              if(thingType==1){
                // 删除活动
                self.toDelete();
              }
            }).catch(() => {
               //取消
            });
      },
    },
    components:{
        navbar, sidebar, secnavbar, freightTemplate_list
    }
}
</script>

<style scoped>

.ft_title{
    font-size: 17px !important;
    font-weight: 500 !important;
    color: red;
    margin: 0 0 10px 10px;
}

.noSendAreaView{
    color: #606266;
    border-left:solid 1px #EBEEF5;
    border-right:solid 1px #EBEEF5;
    border-bottom:solid 1px #EBEEF5;
    /* background: lavenderblush; */
    margin-bottom: 30px;
    display: flex;
    height: 44px;
}
.noSend_Area{
    /* background: yellow; */
    width: 350px;
    margin-top: 10px;
    margin-left: 10px;
}
.noSend_status{
    margin-top: 10px;
}

/* .ft_TableView{
    color: #333;
} */
/* .ft_TableView1{
    background: #ffffff;
} */
    /* margin-bottom: 30px; */
/* 
.ft_TableView2{
    border-bottom:solid 1px #EBEEF5;
} */


/* .ft_TableView >>> tr:hover>td{
    background-color: #ffffff !important;
} */
  /* 去除中间分割线 */
/* .ft_TableView >>> .el-table__row>td{
  
	border: none;
} */
/* 去除最下边分割线 */
/* .el-table::before {
     
	height: 0px !important;
} */

.ft_tableHeaderView{
    /* background: yellow;  */
    height: 35px;
    border: 1px solid #EBEEF5;
}
.ft_tableContentView1{
    display: flex;
    height: 35px;
    border-bottom: 1px solid #EBEEF5;
    border-left: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    /* color: #606266; */
}
.ft_tableContentView2{
    display: flex;
    height: 35px;
    border-left: 1px solid #EBEEF5;
    border-right: 1px solid #EBEEF5;
    color: #606266;
}

.ft_tableTitle1{
    float: left;
    margin-top: 5px;
    margin: 5px 0 0 10px;
    color: #222222 !important;
    font-size: 13px !important;
    font-weight: 500 !important;
}
.ft_opreateView1 {
    display: inline-flex; 
    float: right;
    margin-right: 10px;
}

.ft_tableTitle{
    width: 352px;
    margin-top: 5px;
    margin: 5px 0 0 10px;
}
.ft_opreateView {
    display: inline-flex; 
    margin-right: 10px;
}

.ft_subTitle, .ft_subContent{
    width: 100px;
    align-content: center;
    margin-top: 5px;
}



.em_dateView{
 margin: 0 20px 0 20px;
}
.rank_zmSerachView{
    margin: 20px 0 10px 0;
    display: flex;
}
.rank_searchInput {
	width: 255px;
    /* margin: 0px 0 0px 20px; */
}        

.goods_list_dibu-seven{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.em_evaluatePage{
    margin-top: 20px;
}

.ft_calculationRulesBtn {
    margin: 50px 0 30px 40%;
}

.mh-follow-coupondiv{
    padding-left: 98px;
    margin-top: 20px;
}
.mh-follow-coupontxt .el-input__icon{
    line-height: 32px !important;
}

.zm_dl{
    display: flex;
    margin: 10px 10px 30px 10px;
}
.zm_title5{
    font-size: 14px !important;
    font-weight: 500;
}
.deleteRankBtn {
	margin: 20px 0 0px 15px !important;
	width: 13px;
	height: 13px;
}
.good_createEvaluate{
    margin: 20px 0 10px 10px;
}

</style>



   
            
           