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
                            <el-breadcrumb-item :to="{ path: '/ordersafe' }">退款维权</el-breadcrumb-item>
                            <el-breadcrumb-item>退款详情</el-breadcrumb-item>
                
                            </el-breadcrumb>
                        </div>


                        <div style="margin-bottom:30px">
                            <el-steps :active="active" align-center v-if="routertype == 1">
                                <el-step  v-if="list.createTime != null"    title="买家申请维权" :description="list.createTime.time |formatDate "></el-step>
                                <el-step v-if="list.refundTime != null" title="退款完成" :description="list.refundTime.time |formatDate"></el-step>
                                <el-step v-if="list.refundTime == null" title="退款完成"></el-step>
                            </el-steps>
                        </div>

                         <div style="margin-bottom:30px">
                            <el-steps :active="active" align-center v-if="routertype == 2">
                                <el-step    v-if="list.createTime != null" title="买家申请维权" :description="list.createTime.time |formatDate"></el-step>
                                <el-step  v-if="list.sendTime != null" title="买家寄回商品" :description="list.sendTime.time |formatDate"></el-step>
                                   <el-step  v-if="list.sendTime == null" title="买家寄回商品"></el-step>
                                <el-step  v-if="list.refundTime != null" title="退款完成" :description="list.refundTime.time |formatDate"></el-step>
                                <el-step  v-if="list.refundTime == null" title="退款完成"></el-step>
                            </el-steps>
                        </div>

                         <div style="margin-bottom:30px">
                            <el-steps :active="active" align-center v-if="routertype== 3">
                                <el-step title="买家申请维权"  v-if="list.createTime != null"  :description="list.createTime.time |formatDate"></el-step>
                                <el-step title="买家寄回商品"   v-if="list.sendTime != null" :description="list.sendTime.time |formatDate "></el-step>
                                <el-step title="卖家寄出商品"  description="2020-04-08 09:19:49"></el-step>
                                <el-step  v-if="list.refundTime != null" title="买家确认收货" :description="list.refundTime.time |formatDate"></el-step>
                            </el-steps>
                        </div>

                        
             


                        <div class="osofeDe0-div">
                            <div class="osofeDe0-div_one">
                                 <h5 class="osofeDe-title">售后维权</h5>
                                <div class="osofeDe-div_div">
                                    <img class="osofeDe-div_img" onerror="javascript:this.src='https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/websyt/index/default-boy.png';"  src="" alt="">
                                    <span class="osofeDe-div_span">{{list.wNickName}}</span>
                                </div>
                                <dl>
                                    <dt>期望结果:</dt>
                                    <dd>{{list.type == 1 ?'仅退款' : list.type == 2 ? '退货退款' : '换货'}}</dd>
                                </dl>
                                 <dl>
                                    <dt>退款金额:</dt>
                                    <dd>¥{{parseFloat(list.money/100)}}</dd>
                                </dl>
                                <dl>
                                    <dt>维权原因:</dt>
                                    <dd>其他</dd>
                                </dl>
                                <dl>
                                    <dt>备注:</dt>
                                    <dd>{{list.remark}}</dd>
                                </dl>
                                <div class="osofeDe0-div_onedotto"></div>

                                <dl>
                                    <dt>维权编号:</dt>
                                    <dd>{{list.no}}</dd>   
                                </dl>
                                <dl>
                                    <dt>订单编号:</dt>
                                    <dd>{{list.orderNo}}</dd>   
                                </dl> 
                                 <dl>
                                    <dt>付款时间:</dt>
                                    <dd v-if="list.payTime != null">{{list.payTime.time | formatDate}}</dd>   
                                </dl> 
                                 <dl>
                                    <dt>会员ID:</dt>
                                    <dd>{{list.userId}}</dd>   
                                </dl>
                                 <dl>
                                    <dt>会员昵称:</dt>
                                    <dd>{{list.wNickName}}</dd>   
                                </dl>
                                 <dl>
                                    <dt>收货地址:</dt>
                                    <dd>{{list.orderReceiverAddress}}</dd>   
                                </dl>
                                <dl>
                                    <dt>物流信息:</dt>
                                    <dd>----</dd>   
                                </dl>
                                 <dl>
                                    <dt>运费:</dt>
                                    <dd>¥ {{parseFloat(list.moneyDeliver/100)}}</dd>   
                                </dl> 
                                  <dl>
                                    <dt>合计优惠:</dt>
                                    <dd>¥ 0.00</dd>   
                                </dl>
                                 <dl>
                                    <dt>实收总计:</dt>
                                    <dd>¥{{parseFloat(list.moneyTotalReal/100)}}</dd>   
                                </dl>
                            </div>
                            <div class="osofeDe0-div_two">
                                <i  class="el-icon-warning osofeDe0-div_twoimg" style="color: rgb(230, 162, 60);"></i>
                                <div class="osofeDe0-div_twodiv">
                                     <dl>
                                        <dt class="osofeDe-title">商家{{list.status == -1 ? '拒绝' : list.status == 0 ? '待审核':list.status == 1 ?'同意' : '' }}</dt>
                                        <dd v-if="list.status != -1">{{list.course == 2 ? '退款完成' : list.course == 3 ? '已收货':list.course == 4 ?'确认退款' :list.course == -1 ? '拒绝' : list.course == 0 ? '待售后确认收货':list.course == 1?'配送中' : '' }}</dd>
                                    </dl>
                                    <dl v-if="list.reason != null && list.reason != ''">
                                        <dt class="osofeDe-title">拒绝原因</dt>
                                        <dd>{{list.reason == '' || list.reason == undefined ||list.reason == null ? '' : list.reason }}</dd>
                                    </dl>
                                    <dl>
                                        <dt class="osofeDe-title">维权说明</dt>
                                        <dd>{{list.illustration == undefined || list.illustration == null ? '未填写' : list.illustration}}</dd>
                                    </dl>
                                     <dl>
                                        <dt class="osofeDe-title">审核凭证</dt>
                                        <dd class="mh-wqimg">
                                            <img :src="shenheimg" alt="" @click="imgBing" width="150" height="150">
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>

                        <div class="ordersaft-bot-list" v-if="false">
                            <h5>维权过程</h5>
                            <dl class="ordersaft-bot-listdl">
                                <dt>
                                    <span class="ordersaft-bot-list-span">卖家 </span>
                                    <span>2020-04-14 15:14:52</span>
                                </dt>
                                <dd>  拒绝 了本次退款申请，买家还可以重新发起</dd>
                            </dl>

                               <dl class="ordersaft-bot-listdl">
                                <dt>
                                    <span class="ordersaft-bot-list-span">买家 </span>
                                    <span>2020-04-14 15:14:52</span>
                                </dt>
                                <dd>    发起了退款申请，等待商家处理</dd>
                            </dl>
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
        <el-dialog :visible.sync="dialogVisible" @close="closeguan" custom-class="mh-weiquan_img">
                <img width="100%" :src="dialogImageUrl" alt="">
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

export default {
    data() {
        return {
            dialogVisible:false,
            shenheimg:'',
            dialogImageUrl:'',
            active:1,
            routerid:'',
            routertype:'',
            list:''
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
        let routerStr = this.$route.params.id;
        let str =  routerStr.split("&")   
        this.routerid = str[0].split('=')[1] ;
        // this.routertype = str[1].split('=')[1];
        // this.course == 2 ? this.active =2 : this.active =1;
        this.reqdata();     
    },

    methods:{
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
            data.append('no',that.routerid);  
            this.$http({
                method: "post",
                url: baseapi.weiquanDelacdetail,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
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
                    that.list = res.data.data;


                    that.shenheimg =  res.data.data.mediaList[0].path;
                    that.routertype = res.data.data.type;
       
                    let timecourse = res.data.data.course;

                    let type = res.data.data.type;

                    let status = res.data.data.status
                    
                    if(type == 2 && status==1){
                         that.active =2 
                    }

                    if(type == 1 && status==-1){
                         that.active =2
                    }
                     if(type == 1 && status==1&& timecourse == 2){
                         that.active =2
                    }
                    if(type == 1 && status==3){
                         that.active =2
                    }


                    if(type == 2 && status==-1){
                        that.active =3
                    }
                    if(type == 2 && status==1 && timecourse == 3){
                        that.active =2
                    }

                    if(type == 2 && status==1 && timecourse == 2){
                        that.active =3
                    }
                  
                } 
            }).catch(function(error){
                console.error(error);
            }); 
        }
    },
    components:{
        navbar,sidebar,shopnavbar    
    }
}
</script>

<style scoped>
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
.osofeDe0-div_twodiv>dl{
    margin-bottom: 12px;
}
.osofeDe0-div_twodiv>dl dd{
        color: #606266;
}
.osofeDe0-div_twodiv>dl dt{
    margin-bottom: 6px;
}
.osofeDe0-div_twoimg{
    font-size: 40px !important;
    margin-right: 20px;
}
.osofeDe0-div_two{
    display: flex;
    padding: 20px 0 0 40px;
    box-sizing: border-box;
}
.osofeDe0-div_onedotto{
    width: 100%;
    height: 1px;
    border-bottom: 1px dotted #999;
    margin-bottom: 10px;
}
.osofeDe0-div_one{
    border-radius: 4px;
    width: 340px;
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
    width: 52px;
    /* margin-bottom: 20px; */
}
.osofeDe0-div_one>dl dd{
color: #909399;
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
    padding: 20px;
    box-sizing: border-box;
}
.ordersaft-bot-list>h5{
    font-size: 14px !important;
    margin-bottom: 8px;
}
.mh-wqimg>img{
    border:2px double #fff;
    border-radius: 4px;
}
</style>