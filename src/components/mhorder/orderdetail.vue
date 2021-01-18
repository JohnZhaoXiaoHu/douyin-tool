<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
           <shopnavbar></shopnavbar>

            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div class="osofeDe-main">
                    <!--维权详情  -->
                    <div>
                        <div class="osofeDe-mainb">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/order' }">所有订单</el-breadcrumb-item>
                            <el-breadcrumb-item>订单详情</el-breadcrumb-item>
                
                            </el-breadcrumb>
                        </div>

                            <!-- v-if="list.status != -4"  已关闭的订单状态 -->
                        <div style="margin-bottom:30px" >
                            <el-steps :active="active" align-center > 
                                <el-step  v-if="list.createTime" title="买家下单" :description="list.createTime.time |formatDate "></el-step>
                                <el-step  v-if="list.payTime" title="买家付款" :description="list.payTime.time |formatDate"></el-step>
                                <el-step  v-if="list.deliveryTime" title="商家发货" :description="list.deliveryTime.time |formatDate"></el-step>
                                <el-step  v-if="list.receiveTime" title="买家收货" :description="list.receiveTime.time |formatDate"></el-step>
                                <el-step  v-if="list.finishTime" title="交易完成" :description="list.finishTime.time |formatDate"></el-step>
                            </el-steps>
                        </div>

                  

                    
                        
             


                        <div class="osofeDe0-div">
                            <div class="osofeDe0-div_one">
                             
                                <dl>
                                    <dt>订单编号:</dt>
                                    <dd>{{list.no}}</dd>
                                </dl>
                                 <dl>
                                    <dt>付款方式:</dt>
                                    <dd>{{list.payFrom == 1 ? '支付宝支付' : list.payFrom == 2 ? '微信支付' : list.payFrom == 3 ? '余额支付' : list.payFrom == 4 ? '线下付款' : list.payFrom == 5 ? '货到付款' : '未付款' }}</dd>
                                </dl>
                           
                                <div class="osofeDe0-div_onedotto"></div>

                                <dl>
                                    <dt>配送方式:</dt>
                                    <dd>{{list.deliverType == 1 ? '快递' : list.deliverType == 2 ? '自提' : ''}}</dd>   
                                </dl>
                                <dl>
                                    <dt>自提地址 :</dt>
                                    <dd>{{list.receiverAddress}}</dd>   
                                </dl> 
                                 <dl>
                                    <dt>买家留言:</dt>
                                    <dd>{{list.remark ? list.remark : "无"}}</dd>
                                </dl> 
                                 <dl>
                                    <dt>会员ID:</dt>
                                    <dd>{{list.userId}}</dd>   
                                </dl>
                                 <dl>
                                    <dt>会员昵称:</dt>
                                    <dd>{{user.nickname}}</dd>   
                                </dl>
                                 <dl>
                                    <dt>优惠券抵:</dt>
                                    <dd>￥0.00</dd>   
                                </dl>
                               
                            </div>
                            <div class="osofeDe0-div_two">
                                <div class="osofeDe0-div_onediv">
                                    <i  class="el-icon-warning osofeDe0-div_twoimg" style="color: rgb(230, 162, 60);"></i>
                                    <div class="osofeDe0-div_twodiv">
                                        <dl>
                                            <dt class="osofeDe-title" v-if="goodsTypeStatus != 10">订单状态：{{zuiStatus}}</dt>
                                             <dt class="osofeDe-title" v-if="goodsTypeStatus == 10">订单状态：{{TypezuiStatus}}</dt>
                                            <dd v-if="zuiStatus == 1">买家已付款，请尽快发货，否则买家有权申请退款</dd>
                                        </dl>
                                
                                    </div>
                                </div>

                                <div class="osofeDe0-div_fivediv">
                                    <!-- <el-button type="primary" size="mini">发货</el-button> -->
                                    <button  type="button" @click="beizhu" class="el-button el-button--text"><span>备注</span></button>
                                </div>

                                <div class="osofeDe0-div_fourdiv">
                                   卖家备注 &nbsp;:&nbsp; {{list.note}}

                                </div>



                                <div class="osofeDe0-div_twodivxx">
                                    <div class="osofeDe0-div_twodiv_div">
                                       <p> 温馨提醒：</p>
                                       <p> 如果无法发货，请及时与买家联系并说明情况后进行退款；</p>
                                       <p> 买家申请退款后，须征得买家同意后再发货，否则买家有权拒收货</p>
                                 
                                    </div>
                                </div>
                            </div>
                        </div>

                          <div class="ordersaft-bot-list" >
                            <div class="titleheade">佣金信息</div>
                            <div class="ordersaft_list-div">
                                <ul class="ordersaft_list-divul">
                                    <li  v-for="(orderlistitem,orderlistindex) of  orderList" :key="orderlistindex" v-if="orderList.length!=0">
                                        {{orderlistitem.userNickName != null ? orderlistitem.userNickName  : orderlistitem.userName }} :    
                                        &nbsp; &nbsp;
                                        <a class="ordersaft_list-divul_a" @click="geRenzhong(orderlistitem.userId)"> {{orderlistitem.userName}}</a>
                                         &nbsp; &nbsp; 
                                        <span style="color: rgb(51, 51, 51);">¥{{orderlistitem.moneyCommission}}</span>
                                         &nbsp; 
                                        {{orderlistitem.formula}}  
                                    </li>
                                    <li  v-if="orderList.length==0">该订单无佣金信息</li>
                                </ul>
                            </div>
                        </div>

                        <div class="ordersaft-bot-list" >
                            <ul class="ordersaft-bot-listtitleul">
                                <li class="listtitleul_one">商品</li>
                                <li class="listtitleul_two">单价/购买数量</li>
                                <li class="listtitleul_two">优惠(￥)</li>
                                <li class="listtitleul_two">积分抵现(￥)</li>
                                <li class="listtitleul_two">小计(￥)</li>
                                <li class="listtitleul_two">状态</li>
                                <li class="listtitleul_two">快递单号</li>
                            </ul>
                            <div>
                                <div class="ordersaft_list-div orderdetail-goodslist" v-for="(goodsitem,goodsindex) of  goodsList" :key="goodsindex">
                                    <div class="orderdetail-goodslist_one">
                                        <img :src="goodsitem.imageurl" alt="" srcset="">
                                        <span>{{goodsitem.name}}</span>
                                    </div>

                                        <div class="orderdetail-goodslist_two">
                                        <span>{{goodsitem.money}}</span>
                                        <span>{{goodsitem.quantity}}</span>
                                    </div>
                                    <span class="orderdetail-goodslist_therr"> 0.00   </span>
                                    <span class="orderdetail-goodslist_therr"> 0.00   </span>
                                    <span class="orderdetail-goodslist_therr"> {{goodsitem.moneyTotal}}  </span>
                                    <!-- <span class="orderdetail-goodslist_therr"> {{goodsitem.status | currency}} </span> -->
                                    <span v-if="goodsTypeStatus != 10"  class="orderdetail-goodslist_therr"> {{zuiStatus}} </span>
                                    <span v-if="goodsTypeStatus == 10" class="orderdetail-goodslist_therr"> {{TypezuiStatus}} </span>
                                    <!-- zuiStatus -->
                                    <span class="orderdetail-goodslist_therr">{{goodsitem.logisticsNo ? goodsitem.logisticsNo : '' }} </span>
                                 </div>
                            </div>

                            <div class="orderdetail-overdiv">
                                <span >订单共{{goodsLength}}件商品，总计：</span>
                                <span  style="color: rgb(245, 108, 108);">
                                ￥{{allprice}}
                                <!---->
                                （含运费 ￥0.00
                                <!---->）
                                 </span>
                            </div>
                   
                        </div>

                      

                    </div>
                    <!--  -->
                </div>
                <!-- 商品中心over-->
              
            </div>
        </div>

              
        <!--        -->

    </div>
    <!--主体 over-->
    <el-dialog title="卖家备注" :visible.sync="dialogFormVisible" width="50%" custom-class="m-orderdetail">
        <div class="add-shop-cate">
            <div class="df-basic_row_new el-form-item">
                <label for="item_title" class="el-form-item__label" style="width: 80px;">备注信息</label>
                <div class="el-form-item__content" style="margin-left: 50px;">
                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                        <div class="el-input" id="orderdetail">
                            <el-input type="textarea" :rows="5" v-model="textareacontent" maxlength="150" show-word-limit></el-input>
                        </div>

                    </div>
                    <div class="tips el-col el-col-24 df-tps-zi" style="padding-left:29px">温馨提示：该备注仅作为商家对订单的标记，不会被买家查看到。</div>
                </div>
            </div>
            <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="resbeizhu">确 定</el-button>
            </div>
        </div>
    </el-dialog>




    </div>
</template>

<script>

import navbar from '../navbar';
import sidebar from '../sidebar';
import shopnavbar from './shopnavbar';
import baseapi from '../../utils/api';
import {formatDate} from "../../filters/date";
/**
 *  维权订单状态
 *   1 同意   -1 拒绝  0  待审核
 */
var app0;
export default {
    data() {
        return {
            allprice:0,
            user:{
                userId:0,
                no:0,
                nickname:''
            },
            goodsList:[],
            orderList:[],
            zuiStatus:'',
            TypezuiStatus:'',
            dialogFormVisible:false,
            textareacontent:'',
            goodsLength:0,

            dialogVisible:false,
            shenheimg:'',
            dialogImageUrl:'',
            active:5,
            routerid:'',
            routertype:'',
            list:'',
            goodsTypeStatus:0,
            goodsReqstatus: {
                "0": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "0",
                "property": "待发货",
                "id": 75
                },
                "1": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "1",
                "property": "配送中",
                "id": 76
                },
                "2": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "2",
                "property": "退款完成",
                "id": 77
                },
                "3": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "3",
                "property": "确认收货",
                "id": 78
                },
                "4": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "4",
                "property": "正在付款",
                "id": 79
                },
                "5": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "5",
                "property": "正在取消",
                "id": 80
                },
                "6": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "6",
                "property": "取消审核",
                "id": 81
                },
                "7": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "7",
                "property": "已完成",
                "id": 82
                },
                "8": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "8",
                "property": "发起售后",
                "id": 83
                },
                "9": {
                "pid": 70,
                "remark": "拼团订单才会使用该字段",
                "type": 14,
                "name": "9",
                "property": "正在拼团",
                "id": 96
                },
                "-1": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "-1",
                "property": "未付款",
                "id": 74
                },
                "-2": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "-2",
                "property": "用户取消",
                "id": 73
                },
                "-3": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "-3",
                "property": "用户拒收",
                "id": 72
                },
                "-4": {
                "pid": 70,
                "remark": "",
                "type": 14,
                "name": "-4",
                "property": "系统关闭",
                "id": 71
                }
                },
        };
    },
    filters : {
        formatDate(time) {
            if(time == undefined || time == null){
                return '----';
            }else{
            let date = new Date(time)
                return formatDate(date, 'yyyy-MM-dd hh:mm')    
            }       
        },
        currency(status){
            console.log(status);
            console.log(app0.goodsReqstatus[status]);
             return  app0.goodsReqstatus[status].property
        }
    },
    beforeCreate: function () {
        app0 = this;
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
        let routerStr = this.$route.params.id;
        console.log(routerStr);
        let str =  routerStr.split("&")   
        this.user.userId = str[0].split('=')[1];
        this.user.no = str[1].split('=')[1];
        this.user.nickname = str[2].split('=')[1];

        this.reqdata();    
        this.orderfinance(); 
      
    },

    methods:{
        beizhu(){
            this.dialogFormVisible = true
        },  
        resbeizhu() {
            let data = new FormData();
            let that = this;
            data.append('no', this.user.no);
            data.append('note', that.textareacontent);

            this.$http({
                    method: "post",
                    url: baseapi.mhorderupodate,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data",userId: this.user.userId }
                })
                .then(function(res) {
                    console.log(res);
                    if (res.status == 200) {
                        that.$message.success('备注成功');
                        that.dialogFormVisible = false;
                        that.reqdata();    
                    } else {
                        that.$message('备注失败');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                    that.$message('备注失败');
                });
        },
        //请求状态数据字典
        // http://106.15.192.67:8080/user/dict/type?t=14
      
         shujuSmole(parme){
            let that = this;
            let data = new FormData();       
            this.$http({
                method: "post",
                url:baseapi.sysbelNum14,//随便一个工程名
                data: data
            })
            .then(function(res){
                console.log(res);
                if(res.data.status ==505){
                    that.$message.error('服务器异常');
                    return false;
                }
                if(res.data.status ==500){
                    that.$message.error(res.data.message);
                    return false;
                }
                if(res.data.status ==200){

                    let data = res.data.data;
                    that.zuiStatus = data[parme].property;

                } 
            }).catch(function(error){
                console.error(error);
            }); 
        },
        geRenzhong(userid){
               this.$router.push({
                path: `/memberlist/memberDetail/${userid}`
            })
        },
        closeguan(){
            this.dialogVisible = false;
        },
        imgBing(){
            this.dialogImageUrl = this.shenheimg;
            this.dialogVisible = true;
        },
        reqdata(){
            let that = this;
            let data = new FormData();       
            data.append('no', this.user.no);  
            this.$http({
                method: "post",
                url: baseapi.orderDetailMehod,
                data: data,
                headers: { "Content-Type": "multipart/form-data", userId: that.user.userId }
            })
            .then(function(res){
                console.log(res);
                if(res.data.status ==505){
                    that.$message.error('服务器异常');
                    return false;
                }
                if(res.data.status ==500){
                    that.$message.error(res.data.message);
                    return false;
                }
                if(res.data.status ==200){
                    that.goodsTypeStatus = res.data.order.type;
                    if(res.data.order.status == 10 && res.data.order.type ==10) {
                        that.TypezuiStatus = "抢购中"
                    }

                    if(res.data.order.status == 0 && res.data.order.type ==10) {
                        that.TypezuiStatus = "抢购成功, 待发货"
                    }

                    if(res.data.order.status == 2 && res.data.order.type ==10) {
                        that.TypezuiStatus = "退款完成"
                    }

                     if(res.data.order.status == -4 && res.data.order.type ==10) {
                        that.TypezuiStatus = "交易关闭"
                    }

                    if(res.data.order.status == 1 && res.data.order.type ==10) {
                        that.TypezuiStatus = "已发货"
                    }

                     if(res.data.order.status == 3  && res.data.order.type ==10) {
                        that.TypezuiStatus = "已收货"
                    }

                    if(res.data.order.status == 7  && res.data.order.type ==10) {
                        that.TypezuiStatus = "已完成"
                    }

                    let goodsList = res.data.order.detailList;
                    let allprice = 0;
                    goodsList.forEach(function(item,index){
                        item.money = parseFloat(item.money/100).toFixed(2);
                        allprice +=  parseFloat(item.money) ; 
                        item.moneyTotal = parseFloat(item.moneyTotal/100).toFixed(2);
                    })
                    that.goodsList = goodsList;
                    that.list = res.data.order;
                  
                    that.allprice =  parseFloat(allprice).toFixed(2);
                    that.goodsLength = goodsList.length
                    that.shujuSmole(res.data.order.status);

                  
                } 
            }).catch(function(error){
                console.error(error);
            }); 
        },
        orderfinance(){
            let that = this;
            let data = new FormData();       
            data.append('no', this.user.no);  
            data.append('page', 1);
            data.append('limit', 20); 
            this.$http({
                method: "post",
                url: baseapi.orderfinance,
                data: data,
                headers: { "Content-Type": "multipart/form-data", userId: that.user.userId }
            })
            .then(function(res){
                console.log(res);
                if(res.data.status ==505){
                    that.$message.error('服务器异常');
                    return false;
                }
                if(res.data.status ==500){
                    that.$message.error(res.data.message);
                    return false;
                }
                if(res.data.status ==200){
                  let orderList = res.data.list;
                  orderList.forEach(function(item,index){
                      item.moneyCommission = parseFloat(item.moneyCommission/100).toFixed(2);
                  })
                 that.orderList = orderList;

                  
                } 
            }).catch(function(error){
                console.error(error);
            }); 
        },


    },
    components:{
        navbar,sidebar,shopnavbar    
    }
}
</script>

<style scoped>


.ordersaft_list-divul_a{
    font-size: 14px !important;
    color: #409eff;
    text-decoration: none;
    cursor: pointer;
}
.orderdetail-overdiv{
    width: 98%;
    display: flex;
    justify-content: flex-end;
    padding: 10px;
}
.orderdetail-goodslist{
    display: flex;
    align-items: center;
    padding: 10px;

}
.orderdetail-goodslist_one{
    width: 30%;
    display: flex;
}
.orderdetail-goodslist_two{
    width: 12%;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 2rem;
}
.orderdetail-goodslist_therr{
     width: 12%;
     display: inline-block;
     text-align: center;
}
.orderdetail-goodslist_one img{
    width: 60px;
    height: 60px;
    margin-right: 6px;
}
.ordersaft_list-divul li{
    padding: 10px;
    line-height: 2rem;
}
.osofeDe0-div_fivediv{
     padding-left: 58px;
     margin-bottom: 12px;
}
.osofeDe0-div_fourdiv{
    border-top: 1px dashed #dcdfe6;
    border-bottom: 1px dashed #dcdfe6;
    word-break: break-word;
    padding: 20px;
    margin-bottom: 16px;
    padding-left: 58px;
    color: #303133;
}


.osofeDe0-div_twodivxx{
    padding-left: 58px;

}
.osofeDe0-div_twodiv_div p:nth-child(1){
    color: rgb(230, 162, 60);
       line-height: 24px;
}
.osofeDe0-div_twodiv_div p:nth-child(2),.osofeDe0-div_twodiv_div p:nth-child(3){
   color: #303133;
   line-height: 24px;
}


.ordersaft-bot-listdl{
   color: #303133;  
   margin-bottom: 10px;
}
.ordersaft-bot-listdl>dt{
    padding: 6px 0;
    border-bottom:1px dashed #e4e7ed
}
.ordersaft-bot-listdl>dd{
     padding: 6px 0;
}
.ordersaft-bot-list-span{
    font-weight:500
}
.ordersafe-qiuone_divspan{
    font-size: 16px !important;
    margin-bottom: 4px;
}
.osofeDe0-div_twodiv{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.osofeDe0-div_twodiv>dl dd{
        color: #606266;
        line-height: 2.5rem;
}

.osofeDe0-div_twoimg{
    font-size: 40px !important;
    margin-right: 20px;
}
.osofeDe0-div_two{
    flex: 1;
    padding: 20px 0 0 40px;
    box-sizing: border-box;
}
.osofeDe0-div_onediv{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.osofeDe0-div_onedotto{
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #999;
    margin-bottom: 10px;
}
.osofeDe0-div_one{
    border-radius: 4px;
    width: 300px;
    padding: 20px;
    border:1px dotted #dcdfe6;
}
.osofeDe0-div_one>dl{
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.osofeDe0-div_one>dl dt{
    color: #606266;
    margin-right: 12px;
    font-weight: 500;
    padding: 0 12px 0 0;
    text-align: right;
    width: 55px;
    /* margin-bottom: 20px; */
}
.osofeDe0-div_one>dl dd{
    color: #909399;
    flex:1;
    line-height: 2rem;
}
.osofeDe-div_span{
    color: #909399;
}
.osofeDe-div_div{
    display: flex;
    align-items: center
    ;
}
.osofeDe-div_img{
    width: 60px;
    height: 60px;
    margin: 12px 10px 12px 0;
}
.osofeDe-title{
    color: #303133;
    font-size: 14px;
    font-weight: 700;
}
.osofeDe0-div{
    display: flex;
    margin-bottom: 20px;
}

.ordersafe-qiuone_div{
    position: relative;
    width: 120px;
    bottom: -40px;

}
.ordersafe-qiuone_div>span{
    display: inline-block;
    width: 120px;
    text-align: center;
    color: #409eff;
}
.osofeDe-mainb{
    margin-bottom: 30px;
}
.osofeDe-main{
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    padding: 20px;
    box-sizing: border-box;
    border-radius: 4px;
}
.ordersaft-bot-list{
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-sizing: border-box;
    margin-bottom: 50px;
    border: 1px solid #ebeef5;
    background-color: #fff;
    color: #303133;
    border-radius: 4px;

    transition: .3s;
}
.ordersaft-bot-listtitleul{
    padding: 10px;
    width: 100%;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-sizing: border-box;
    background-color: #fff;
    color: #303133;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    display: flex;
    align-items: center;
    background: #c0c4cc;
    transition: .3s; 
}

.listtitleul_one{
    width: 30%;
}
.listtitleul_two{
    width: 12%;
    text-align: center;
}
.ordersaft-bot-list .titleheade{
    padding: 10px;
    width: 100%;
   box-sizing: border-box;
       background: #c0c4cc;
       color: #303133;
       border-top-left-radius: 4px;
          border-top-right-radius: 4px;
}
.mh-wqimg>img{
    border:2px double #fff;
    border-radius: 4px;
}
</style>