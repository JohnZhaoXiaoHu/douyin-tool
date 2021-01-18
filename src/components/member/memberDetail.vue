<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <membersecnavbar></membersecnavbar>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                 <div class="goods-card_body">
                   <!-- 选项卡start -->
                    <div style="margin-bottom:20px;padding-bottom: 12px;border-bottom: 1px dashed #eee;">
                         <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/memberlist' }">会员列表</el-breadcrumb-item>
                            <el-breadcrumb-item>会员详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div class="memDetail-div_parent">   
                        <div class="memDetail-div">
                            <dl>
                                <dt>ID : </dt>
                                <dd>{{list.userId}}</dd>
                            </dl>
                             <dl>
                                <dt>姓名 : </dt>
                                <dd>{{list.userNickName}}</dd>
                            </dl>
                             <dl>
                                <dt>微信昵称 : </dt>
                                <dd>{{list.wxNickName}}</dd>
                            </dl>
                        </div>
                        <div class="memDetail-div">
                            <dl>
                                <dt>邮箱 : </dt>
                                <dd>{{list.userEmail == null ? '----' : list.userEmail}}</dd>
                            </dl>
                             <dl>
                                <dt>生日 : </dt>
                                <dd>{{list.userBirthdayTime == null ? '' : list.userBirthdayTime.time | formatDate}}</dd>
                            </dl>
                             <dl>
                                <dt>账户余额 : </dt>
                                <dd>{{list.balance == undefined || list.balance == null ? '0.00' :  parseFloat(list.balance/100)}}</dd>
                            </dl>
                        </div>
                        <div class="memDetail-div">
                            <dl>
                                <dt>创建时间 : </dt>
                                <dd>{{list.userCreateTime == null || list.userCreateTime == undefined ? '----' : list.userCreateTime.time|formatDate}}</dd>
                            </dl>
                             <dl>
                                <dt>备注 : </dt>
                                <dd>{{list.userRemark == null ?'----':list.userRemark}}</dd>
                            </dl>
                             <dl>
                                <dt>微信OpenID : </dt>
                                <dd>{{list.wxOpenId}}</dd>
                            </dl>
                        </div>
                        <div class="memDetail-div">
           
                            <dl>
                                <dt>上级 : </dt>
                                <dd v-if="list.pwxNickName">{{list.pwxNickName}}</dd>
                            </dl>
                            <dl>
                                <dt>佣金余额 : </dt>
                                <dd v-if="list.cmsUsable">{{parseFloat(list.cmsUsable/100)}}</dd>
                            </dl>
                            <dl>
                                <dt>佣金总收入 : </dt>
                                <dd v-if="list.cmsTotal">{{parseFloat(list.cmsTotal/100)}}</dd>
                            </dl> 
                       
                        </div>
                        <div class="memDetail-div">
                             <dl>
                                <dt>待收益佣金 : </dt>
                                <dd v-if="list.cmsPend">{{parseFloat(list.cmsPend)/100}}</dd>
                            </dl>
                            <dl  v-if="list.chPassTime">
                                <dt>成为推客时间 : </dt>
                                <dd>{{list.rcmPassTime.time | formatDate}}</dd>
                            </dl>
                            <dl v-if="list.chPassTime">
                                <dt>成为渠道商时间 : </dt>
                                <dd>{{list.chPassTime.time | formatDate}}</dd>
                            </dl>               
                        </div>
                    </div>

                    <div>
                        <template>
                        <el-tabs v-model="activeName" @tab-click="handleClick" type="border-card">
                            <el-tab-pane label="消费能力" name="first">
                                <div class="memDetail-onetwodiv">
                                    <dl>
                                        <dt>总计订单</dt>
                                        <dd>{{ alltatle.totalOrderNum == undefined ||   alltatle.totalOrderNum == null ? '0' : alltatle.totalOrderNum}}笔</dd>
                                    </dl>
                                    <dl>
                                        <dt>总消费金额</dt>
                                        <dd>{{ alltatle.totalOrderMoney == undefined ||   alltatle.totalOrderMoney == null ? '0' : parseFloat(alltatle.totalOrderMoney/100)}}元</dd>
                                    </dl>
                                    <dl>
                                        <dt>本月定单</dt>
                                        <dd>{{ alltatle.monthOrderNum == undefined ||   alltatle.monthOrderNum == null ? '0' : alltatle.monthOrderNum}}笔</dd>
                                    </dl>
                                    <dl>
                                        <dt>本月消费金额</dt>
                                        <dd>{{ alltatle.monthOrderMoney == undefined ||   alltatle.monthOrderMoney == null ? '0' : parseFloat(alltatle.monthOrderMoney/100)}}元</dd>
                                    </dl>
                                </div>
                                <div>
                                    <template>
                                    <el-table
                                        :data="orderdata"
                                        border
                                        style="width: 100%">
                                        <el-table-column
                                        prop="no"
                                        label="订单编号"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                        prop="receiverName"
                                        label="收货人"
                                       >
                                        </el-table-column>
                                        <el-table-column
                                        prop="receiverPhone"
                                        label="收货人电话">
                                        </el-table-column>
                                        <el-table-column
                                            label="商品总价">
                                           <template slot-scope="scope">
                                            <div class="goods-table">
                                                <span>{{parseFloat(scope.row.moneyTotalReal/100)}}</span>                                       
                                            </div>
                                            </template>
                                            show-overflow-tooltip>
                                        </el-table-column>
                                        <el-table-column
                                            label="实付金额">
                                           <template slot-scope="scope">
                                            <div class="goods-table">
                                                <span>{{parseFloat(scope.row.moneyTotalReal/100)}}</span>                                       
                                            </div>
                                            </template>
                                            show-overflow-tooltip>
                                        </el-table-column>
                                  
                                        <el-table-column
                                            label="订单状态">
                                           <template slot-scope="scope">
                                            <div class="goods-table">
                                                <span v-if="scope.row.status == -4">系统关闭</span>
                                                <span v-if="scope.row.status == -3">用户拒收</span>
                                                <span v-if="scope.row.status == -2">用户取消</span>
                                                <span v-if="scope.row.status == -1">未付款</span>
                                                <span v-if="scope.row.status == 0">待发货</span>
                                                <span v-if="scope.row.status == 1">配送中</span>
                                                <span v-if="scope.row.status == 2">退款完成</span>
                                                <span v-if="scope.row.status == 3">已收货</span>
                                                <span v-if="scope.row.status == 4">正在付款</span>
                                                <span v-if="scope.row.status == 5">正在取消</span>
                                                <span v-if="scope.row.status == 6">取消审核</span>
                                                <span v-if="scope.row.status == 7">已完成</span>
                                                <span v-if="scope.row.status == 8">发起售后</span>                                      
                                            </div>
                                        </template>
                                            show-overflow-tooltip>
                                        </el-table-column>
                                         <el-table-column
                                        prop="createTime"
                                         :formatter="dateFormat"
                                        label="交易创建时间">
                                        </el-table-column>
                                         <el-table-column
                                        prop="finishTime"
                                         :formatter="dateFormat"
                                        label="交易完成时间">
                                        </el-table-column>

                                    </el-table>
                                    </template>
                                </div>
                                <div class="el-row goods_list_dibu" style="padding-top:12px">
                                    <div class="goods_list_dibu-onediv"></div>
                                    <div class="goods_list_dibu-twodiv">
                                        <el-pagination
                                                @size-change="handleSizeChange"
                                                @current-change="handleCurrentChange"
                                                :current-page="currentPage4"
                                                :page-sizes="[100, 200, 300, 400]"
                                                :page-size="20"
                                                layout="total, prev, pager, next, jumper"
                                                :total="firsttotalCount">
                                        </el-pagination>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="积分信息" name="second">
                                 <div>
                                    <template>
                                    <el-table
                                        :data="tableData"
                                        border
                                        style="width: 100%">
                                        <el-table-column
                                        prop="date"
                                        label="来源用途"
                                       >
                                        </el-table-column>
                                        <el-table-column
                                        prop="name"
                                        label="积分变化前"
                                      >
                                        </el-table-column>
                                        <el-table-column
                                        prop="address"
                                        label="积分变化">
                                        </el-table-column>
                                        <el-table-column
                                        prop="name"
                                        label="积分变化后"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                        prop="address"
                                        label="日期">
                                        </el-table-column>
                                         <el-table-column
                                        prop="address"
                                        label="备注">
                                        </el-table-column>                         

                                    </el-table>
                                    </template>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="持有的优惠券" name="third">
                                <div>
                                    <template>
                                    <el-table
                                        :data="coupondata"
                                        border
                                        style="width: 100%">
                                        <el-table-column
                                        prop="name"
                                        label="优惠券名称"
                                       >
                                        </el-table-column>
                                

                                        <el-table-column
                                            prop="money"
                                            label="面值">
                                        <template slot-scope="scope">
                                        <div class="goods-table">
                                            <span>{{parseFloat(scope.row.money/100)}}</span>
                                        
                                        </div>
                                        </template>
                                        show-overflow-tooltip>
                                        </el-table-column>


                                        <el-table-column
                                        prop="address"
                                        label="所需积分">
                                        </el-table-column>
                                         <el-table-column
                                            width="300px"
                                            prop="moneyCommission"
                                            label="有效期">
                                        <template slot-scope="scope">
                                        <div class="goods-table">
                                           {{scope.row.startTime.time  | formatDate }}
                                          至
                                           {{ scope.row.endTime.time | formatDate}}

                                        </div>
                                        </template>
                                        show-overflow-tooltip>
                                    </el-table-column>
                                        <el-table-column
                                        prop="address"
                                        label="来源">
                                        </el-table-column>
                                    <el-table-column
                                            prop="moneyCommission"
                                            label="兑换时间">
                                        <template slot-scope="scope">
                                        <div class="goods-table">
                                           {{ scope.row.useTime  == undefined  || scope.row.useTime == null ? '' :   scope.row.useTime.time  | formatDate }}
                                        </div>
                                        </template>
                                        show-overflow-tooltip>
                                    </el-table-column>
                                          
                                    </el-table>
                                    </template>
                                </div>
                                 <div class="el-row goods_list_dibu" style="padding-top:12px">
                                    <div class="goods_list_dibu-onediv"></div>
                                    <div class="goods_list_dibu-twodiv">
                                        <el-pagination
                                                @size-change="handleSizeChange"
                                                @current-change="handleCurrentChange"
                                                :current-page="currentPage4"
                                                :page-sizes="[100, 200, 300, 400]"
                                                :page-size="20"
                                                layout="total, prev, pager, next, jumper"
                                                :total="thirdtotalCount">
                                        </el-pagination>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="余额变动记录" name="fourth">
                                <div>
                                    <template>
                                    <el-table
                                        :data="balancedata"
                                        border
                                        style="width: 100%">
    
                                        <el-table-column
                                            label="变动前">
                                           <template slot-scope="scope">
                                            <div class="goods-table">
                                                <span>{{parseFloat(scope.row.balanceBefore/100)}}</span>                                       
                                            </div>
                                        </template>
                                            show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column
                                            label="变动金额">
                                           <template slot-scope="scope">
                                            <div class="goods-table">
                                                <span v-if="parseFloat(scope.row.money/100) > 0"  style="color:#5Cb87A">+{{parseFloat(scope.row.money/100)}}</span>  
                                                <span v-if="parseFloat(scope.row.money/100) < 0"  style="color:#F56C6C">{{parseFloat(scope.row.money/100)}}</span>                                      
                                            </div>
                                        </template>
                                            show-overflow-tooltip>
                                    </el-table-column>
                                         <el-table-column
                                            label="变动后">
                                           <template slot-scope="scope">
                                            <div class="goods-table">
                                                <span>{{parseFloat(scope.row.balanceAfter/100)}}</span>                                       
                                            </div>
                                        </template>
                                            show-overflow-tooltip>
                                    </el-table-column>
                                        <el-table-column
                                        prop="typeMsg"
                                        label="类型"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                        prop="createTime"
                                        :formatter="dateFormat"
                                        label="创建时间">
                                        </el-table-column>
                                         <el-table-column
                                        prop="remark"
                                        label="备注">
                                        </el-table-column>                      
                                    </el-table>
                                    </template>
                                </div>
                                 <div class="el-row goods_list_dibu" style="padding-top:12px">
                                    <div class="goods_list_dibu-onediv"></div>
                                    <div class="goods_list_dibu-twodiv">
                                        <el-pagination
                                                @size-change="handleSizeChange"
                                                @current-change="handleCurrentChange"
                                                :current-page="currentPage4"
                                                :page-sizes="[100, 200, 300, 400]"
                                                :page-size="20"
                                                layout="total, prev, pager, next, jumper"
                                                :total="fourthtotalCount">
                                        </el-pagination>
                                    </div>
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="佣金明细" name="five">
                                 <div>
                                    <template>
                                    <el-table
                                        :data="commdata"
                                        border
                                        style="width: 100%">
                                        <el-table-column                              
                                        prop="createTime"
                                        :formatter="dateFormat"
                                        label="申请时间"
                                       >
                                        </el-table-column>
                                  
                                        <el-table-column
                                            prop="moneyCommission"
                                            label="交易金额(元)">
                                        <template slot-scope="scope">
                                        <div class="goods-table">
                                            <span style="color:#5Cb87A">+{{parseFloat(scope.row.moneyCommission/100)}}</span>
                                        
                                        </div>
                                        </template>
                                        show-overflow-tooltip>
                                    </el-table-column>
                                        <el-table-column
                                        prop="type"
                                        label="佣金类型">
                                        </el-table-column>
                                        <el-table-column
                                        prop="createTime"
                                        :formatter="dateFormat"
                                        label="创建时间"
                                        >
                                        </el-table-column>
                                        <el-table-column  
                                        prop="remark"                                                       
                                        label="备注">
                                        </el-table-column>                      
                                    </el-table>
                                    </template>
                                </div>
                                <div class="el-row goods_list_dibu" style="padding-top:12px">
                                    <div class="goods_list_dibu-onediv"></div>
                                    <div class="goods_list_dibu-twodiv">
                                        <el-pagination
                                                @size-change="handleSizeChange"
                                                @current-change="handleCurrentChange"
                                                :current-page="currentPage4"
                                                :page-sizes="[100, 200, 300, 400]"
                                                :page-size="20"
                                                layout="total, prev, pager, next, jumper"
                                                :total="fivetotalCount">
                                        </el-pagination>
                                    </div>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                        </template>
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
import membersecnavbar from './membersecnavbar';
import baseapi from '../../utils/api';
import {formatDate} from "../../filters/date";
export default {
      data() {
        return {
            activeName: 'first',
            tableData: [],
            alltatle:'',
            commdata:[],
            orderdata:[],
            balancedata:[],
            parentid:0,
            list:[],
            coupondata:[],
            firsttotalCount:0,
            thirdtotalCount:0,
            fourthtotalCount:0,
            fivetotalCount:0,
            thisTableIndex:0
        };
    },
    filters : {
        formatDate(time) {
            if(time == '' || time == undefined || time == null){
                return '';
            }else{
            let date = new Date(time)
                return formatDate(date, 'yyyy-MM-dd hh:mm:ss')    
            }       
        }
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
              next();
            } else {
                next('/login');
            }
		})
	},
    mounted(){
        this.parentid = this.$route.params.id;
        this.getdata();
        this.CommissionMethod(1);
        this.balanceMethod(1);
        this.xiaofeiMetdoh();
        this.userOrderNum(1);
        this.couponMethod(1);
        
    },
    methods: {
        getdata(){
            let that = this;
            let data = new FormData();       
            this.$http({
                method: "post",
                url: baseapi.vipDetailApi,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:that.parentid }
            })
            .then(function(res){
                if(res.data.status ==505){
                    that.$message.error('服务器异常');
                    return false;
                }
                if(res.data.status ==500){
                    that.$message.error(res.data.message);
                    return false;
                }
                if(res.data.status ==200){
                  that.list = res.data.data;
                } 
            }).catch(function(error){
                console.error(error+'服务器请求失败');
            }); 
        },
        //佣金记录
        CommissionMethod(page){
            let that = this;
            let data = new FormData();
            data.append('suid',this.parentid)
            data.append('page',page);
            data.append('limit',20);
            this.$http({
                method: "post",
                url: baseapi.CommissionApi,
                data: data
            })
            .then(function(res){
              if(res.data.status ==200){
                console.log('佣金记录',res);
                that.commdata = res.data.list;
                that.fivetotalCount = res.data.totalCount;
              }
              if(res.data.status != 200){
                  that.$message.error(res.data.message)
              }   
            })
        },
        //余额变动记录
        balanceMethod(page){
            let that = this;
            let data = new FormData();
            data.append('suid',this.parentid)
            data.append('page',page);
            data.append('limit',50);
            this.$http({
                method: "post",
                url: baseapi.balanceApi,
                data: data
            })
            .then(function(res){
              if(res.data.status ==200){
                console.log('余额记录',res);
                that.balancedata = res.data.list;
                that.fourthtotalCount = res.data.totalCount;
              }
              if(res.data.status != 200){
                  that.$message.error(res.data.message)
              }   
            })
        },
        //消费能力
        xiaofeiMetdoh(){         
            let that = this; 
            let data = new FormData();           
            this.$http({
                method: "post",
                url: baseapi.xiaofeiApi,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId'),userId:  this.parentid  }
            })
            .then(function(res){
                 console.log('消费能力',res);
                 that.alltatle = res.data.data;
            }); 
        },
        //消费能力 --该用户订单数
        userOrderNum(page){
            let that = this;
            let data = new FormData();
            data.append('page',page);
            data.append('limit',20);
            data.append('suid',this.parentid);
            this.$http({
                method: "post",
                url: baseapi.selectOrdecrList,
                data: data
            })
            .then(function(res){
              if(res.data.status ==200){
                console.log('订单数',res);
                that.orderdata = res.data.list;
                that.firsttotalCount  = res.data.totalCount
              }
              if(res.data.status != 200){
                  that.$message.error(res.data.message)
              }   
            })
        },
        //优惠券
        couponMethod(page){
            let that = this; 
            let data = new FormData();   
            data.append('page',page);
            data.append('limit',20);        
            this.$http({
                method: "post",
                url: baseapi.couponApi,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId'),userId:  this.parentid  }
            })
            .then(function(res){
                 console.log('优惠券',res);
                 that.coupondata = res.data.list;
                 that.thirdtotalCount =  res.data.totalCount;
            }); 
        },
        handleClick(tab, event) {
            // console.log(tab, event);
            this.thisTableIndex = tab.index;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(val);
            if(this.thisTableIndex == 0){
                this.userOrderNum(val);
                return false;
            }
            if(this.thisTableIndex == 1){
                return false;
            }
            if(this.thisTableIndex == 2){
                this.couponMethod(val);
                return false;
            }
            if(this.thisTableIndex == 3){
                this.balanceMethod(val);
                return false;
            }
            if(this.thisTableIndex == 4){
                this.CommissionMethod(val);
                return false;
            }


        },
        dateFormat(row, column, cellValue, index){
             const daterc = row[column.property];
             if(daterc!=null){
             const dateMat= new Date(daterc.time);
             const year = dateMat.getFullYear();
             const month = dateMat.getMonth() + 1;
             const day = dateMat.getDate();
             const hh = dateMat.getHours();
             const mm = dateMat.getMinutes();
             const ss = dateMat.getSeconds();
             const timeFormat= this.getzf(year) + "-" + this.getzf(month)  + "-" + this.getzf(day) + " " + this.getzf(hh)  + ":" + this.getzf(mm) + ":" + this.getzf(ss);
                    return timeFormat;
             }          
        },
        //补0操作  
        getzf(num){  
            if(parseInt(num) < 10){  
                num = '0'+num;  
            }  
            return num;  
        },
        },
    components:{
        navbar,sidebar,membersecnavbar    
    }
}
</script>

<style>
.goods_list_dibu-twodiv .el-input__inner{
    height: 28px!important;
}
.vip-alllist .el-input__inner{
    height: 32px;
    line-height: 32px;
}

.vip-alllist .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;

}
.vip-alllist .el-icon-arrow-down {
    font-size: 12px;
}
 .el-dropdown{
     font-size: 12px;
     color: #409EFF;
     cursor: pointer;
     width: 50px;
     height: 32px;
     margin-left: 10px;
}
 .el-dropdown-link{
     font-size: 12px;
}

.vip-item-list_time .el-input__icon{
    display: flex;
    align-items: center;
}

.vip-item-list_time .el-range-separator{
    display: flex;
    align-items: center;
}


.vip-xxxx .el-input__icon {
    line-height: 32px;
}

.memDetail-div{
    display: flex;
    margin-bottom: 25px;
    
}
.memDetail-div>dl{
    width: 33%;
    display: flex;
    align-items: center;
}
.memDetail-div>dl dt{
    margin-right: 10px;
}
.memDetail-div>dl dd{
   color: #606266;
}
.memDetail-onetwodiv{
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    margin-bottom: 30px;
}
.memDetail-onetwodiv>dl{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
.memDetail-onetwodiv>dl dt{
    font-size: 14px !important;
    line-height: 22px;
    margin-bottom: 4px;
    color: #666
}
.memDetail-onetwodiv>dl dd{
    font-size: 22px !important;
    color: #333;
}
.memDetail-div_parent{
    margin-bottom: 30px;
  border-bottom: 1px dashed rgb(238, 238, 238);
}
</style>