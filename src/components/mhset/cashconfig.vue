
<template>
<!-- 提现设置 -->
<!-- 提现设置 模板 -->
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <settingnav></settingnav>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div class="goods-card_body">
                    <!--选项卡组件-->
                     <div>
                       <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>账户余额申请提现</h3>
                                <p>关闭账户余额申请提现功能，会员账户内的余额只能用户店铺消费。</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch v-model="value1"></el-switch>
                            </div>
                        </div>

                         <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>佣金申请提现</h3>
                                <p>关闭佣金申请提现功能，会员账户内的佣金不能提现。</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch v-model="value2"></el-switch>
                            </div>
                        </div>

                         <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>佣金转余额</h3>
                                <p>开启后，佣金可以转余额。</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch v-model="value3"></el-switch>
                            </div>
                        </div>

                         <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>佣金转余额审核</h3>
                                <p>开启后，佣金转余额需要进行审核。</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch v-model="value4"></el-switch>
                            </div>
                        </div>

                         <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>余额转佣金</h3>
                                <p>开启后，余额可以转佣金。</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch v-model="value5"></el-switch>
                            </div>
                        </div>

                          <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>余额转赠</h3>
                                <p>开启后，余额可以转余额。</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch v-model="value6"></el-switch>
                            </div>
                        </div>

                     </div>

                     <div>
                        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="160px" class="demo-ruleForm">
                            <el-form-item label="提现支持方式:" prop="type">
                                <el-checkbox-group v-model="ruleForm.typeplay">
                                <el-checkbox label="支付宝付款" name="typeplay"></el-checkbox>
                                <el-checkbox label="微信付款" name="typeplay"></el-checkbox>
                                <el-checkbox label="线下付款" name="typeplay"></el-checkbox>
          
                                </el-checkbox-group>
                                <div class="pNode">
                                    <span>如需使用支付宝或微信支付自动转账，请先设置好支付宝和微信支付的账号信息; 线下转账方式是推客提现时，填写自己的收款帐户信息，管理员再根据信息手工转账</span>
                                </div>
                            </el-form-item>

                            <el-form-item label="支付宝批量付款:" prop="delivery">
                                <el-switch v-model="ruleForm.zfb"></el-switch>
                                <div class="pNode">
                                    <span>开启以后，可以实现支付宝批量发放提现，自动转账。</span>
                                    <a class="pNode_a" target="view_window" href="https://b.alipay.com/signing/productSetV2.htm?mrchportalwebServer=https%3A%2F%2Fmrchportalweb.alipay.com">开通支付宝批量付款</a>
                                </div>
                            </el-form-item>

                              <el-form-item label="微信批量付款:" prop="delivery">
                                <el-switch v-model="ruleForm.wxplay"></el-switch>
                                <div class="pNode">
                                    <span>开启以后，可以实现微信支付批量发放提现，自动转账。</span>
                                </div>
                            </el-form-item>

                             <el-form-item label="微信支付姓名校验:" prop="resource">
                                <el-radio-group v-model="ruleForm.play">
                                    <el-radio label="检验真实姓名"></el-radio>
                                    <el-radio label="仅当用户是实用用户时校验真实姓名"></el-radio>
                                    <el-radio label="不校验真实姓名"></el-radio>
                                </el-radio-group>
                                <div class="pNode">
                                    如果选择校验真实姓名，微信服务器将会自动校验收款人与微信绑定的银行卡姓名是否一致
                                </div>
                            </el-form-item>

                            <el-form-item label="单次最低提现金额:" prop="name">
                                 <div class="mh-cash-setting"> <el-input v-model="ruleForm.maney"></el-input><span>元</span></div>
                            </el-form-item>

                            <el-form-item label="单个会员每月提现次数:" prop="name">
                                <div class="mh-cash-setting"> <el-input v-model="ruleForm.vipnum"></el-input><span>次</span></div>
                            </el-form-item>

                            <!-- <el-form-item label="佣金返余额比例:" prop="name">
                                <div class="mh-cash-setting"> <el-input v-model="ruleForm.yongby"></el-input><span>%</span></div>
                            </el-form-item> -->

                             <el-form-item label="手续费:" prop="name">
                                 <div class="mh-cash-setting"> <el-input v-model="ruleForm.shoufei"></el-input><span>%</span></div>
                            </el-form-item>

                            <el-form-item label="分时段开启:" prop="name">
                                <el-time-picker
                                    v-model="time"
                                    value-format="HH:mm:ss"
                                    range-separator="至"
                                    start-placeholder="开始时间"
                                    end-placeholder="结束时间"
                                    placeholder="选择时间范围">
                                </el-time-picker>
                                <span class="mh-cash-span">至</span>
                                <el-time-picker
                                    v-model="time1"
                                    value-format="HH:mm:ss"
                                    range-separator="至"
                                    start-placeholder="开始时间"
                                    end-placeholder="结束时间"
                                    placeholder="选择时间范围">
                                </el-time-picker>
                            </el-form-item>

                             <el-form-item label="周几生效:" prop="type">
                                <el-checkbox-group v-model="ruleForm.timezhou">
                                    <el-checkbox label="周一" name="timezhou"></el-checkbox>
                                    <el-checkbox label="周二" name="timezhou"></el-checkbox>
                                    <el-checkbox label="周三" name="timezhou"></el-checkbox>
                                    <el-checkbox label="周四" name="timezhou"></el-checkbox>
                                    <el-checkbox label="周五" name="timezhou"></el-checkbox>
                                    <el-checkbox label="周六" name="timezhou"></el-checkbox>
                                    <el-checkbox label="周日" name="timezhou"></el-checkbox>
                                </el-checkbox-group>
            
                            </el-form-item>
                         
                           
                           
                            <el-form-item label="提现提示信息" prop="desc">
                                <el-input type="textarea" :rows="5" v-model="ruleForm.desc" maxlength="100" show-word-limit></el-input>
                                <div style="color: #999;">
                                    最多只能输入100个字
                                </div>
                            </el-form-item>
                            <!-- <el-form-item>
                                <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
                            </el-form-item> -->
                        </el-form>

                        <div style="display:flex;justify-content: center;">
                             <el-button @click="onSubMit" type="primary" size="small">保存</el-button>
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
export default {
    data() {
        return {
            add:'',
            //   src: 'http://test.mihuanshop.com/MicroDistribution/SettingManager/sm_tiXianCash.html'        
            value1:true,
            value2:true,
            value3:true,
            value4:true,
            value5:true,
            value6:true,
            time:'',
            time1:'',  
            ruleForm: {
                typeplay: [],
                zfb:false,
                wxplay:false,
                play:[],//支付验证
                maney:'',
                vipnum:'',//vip提现次数
                yongby:'',
                shoufei:'',
              
                timezhou:[],
                desc: ''
         },
        rules: {
            maney:[
                {type:'string', required: true, message: '单次最低提现金额', trigger: 'blur'}
            ],
            time: [
                { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
            ],
            timezhou: [
                { type: 'date', required: true, message: '请选择周几', trigger: 'change' }
            ]
            }
        };
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.getdata();
            } else {
                next('/login');
            }
        })
    },
    mounted(){

    },
    methods:{
        onSubMit(){
            let that = this;    
            let data = new FormData();
            that.value1 ?  data.append('fnBlWdApply',1) :  data.append('fnBlWdApply',0);
            that.value2 ?  data.append('fnCmsWdApply',1) :  data.append('fnCmsWdApply',0);   
            that.value3 ?  data.append('fnCms2bl',1) :  data.append('fnCms2bl',0);
            that.value4 ?  data.append('fnCms2blAudit',1) :  data.append('fnCms2blAudit',0);
            that.value5 ?  data.append('fnBl2cms',1) :  data.append('fnBl2cms',0);   
            that.value6 ?  data.append('fnBlTransfer',1) :  data.append('fnBlTransfer',0);
    
            let newOneStr = '';
          
            that.ruleForm.typeplay.forEach(function(item){
                if (item == '支付宝付款') {
                    newOneStr += '1,' 
                } else if (item == '微信付款') {
                    newOneStr += '2,'  
                }else if(item == '线下付款'){
                    newOneStr += '4,'  
                }     
            })
         
            data.append('fnWdSupport',newOneStr.substring(0, newOneStr.length - 1));

            if ( that.ruleForm.play == '检验真实姓名'){
                data.append('fnWxPayVerify',1);
            } else if (that.ruleForm.play == '不校验真实姓名') {
                data.append('fnWxPayVerify',0);
            }else{
                data.append('fnWxPayVerify',2);
            }

            data.append('fnWdOnetimeLowest',parseFloat(that.ruleForm.maney) * 100);
            data.append('fnWdMaxtimeMonth',that.ruleForm.vipnum);
            data.append('fnWdServiceCharge',that.ruleForm.shoufei);
            data.append('fnWdTimeStart',that.time);
            data.append('fnWdTimeEnd',that.time1);
            data.append('fnWdHint', that.ruleForm.desc);

            let zhouData = that.ruleForm.timezhou;
            let zhouStr = '';    
            zhouData.forEach(function(item){
                if (item == '周一') {
                   zhouStr +='1,'
                } else if (item == '周二') {
                   zhouStr +='2,'
                } else if (item == '周三'){
                   zhouStr +='3,'
                } else if (item == '周四') {
                    zhouStr +='4,'
                } else if (item == '周五') {
                    zhouStr +='5,'
                } else if (item == '周六') {
                    zhouStr +='6,'
                }else{
                    zhouStr +='0,' 
                }
            })

            data.append('fnWdTimeEffect',zhouStr.substring(0, zhouStr.length - 1))

 
                  
            this.$http({
                method: "post",
                url: api.settingSz,
                data: data
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 200){
                    that.$message.success('操作成功');
                    that.getdata();
                }

                if(res.data.status != 200){
                    that.$message.error('状态码:'+res.data.status+' ,错误信息:'+res.data.message);
                }
                
            })
        },
        getdata(){
           let that = this;    
           let data = new FormData(); 
            this.$http({
                method: "post",
                url: api.settingTx,
                data: data
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 200){
                    let list = res.data.setting;
                    that.value1 = list.fnBlWdApply == 1 ? true : false;
                    that.value2 = list.fnCmsWdApply == 1 ? true : false;   
                    that.value3 = list.fnCms2bl == 1 ? true : false;
                    that.value4 = list.fnCms2blAudit == 1 ? true : false;
                    that.value5 = list.fnBl2cms == 1 ? true : false;
                    that.value6 = list.fnBlTransfer == 1 ? true : false;  
                    
                    let aa = list.fnWdSupport.split(","); //提现支持方式
                    let newArr = [];
                    aa.forEach(function(item){
                        if (item == 1) {
                          newArr.push('支付宝付款')  
                        } else if (item == 2) {
                           newArr.push('微信付款')   
                        }else if ( item == 4){
                           newArr.push('线下付款')  
                        }
                    })
                    // console.log(newArr);
                    that.ruleForm.typeplay = newArr;


                    if (list.fnWxPayVerify == 1) {
                        that.ruleForm.play = '检验真实姓名';
                    } else if (list.fnWxPayVerify == 0){
                        that.ruleForm.play = '不校验真实姓名';
                    } else{
                        that.ruleForm.play = '仅当用户是实用用户时校验真实姓名';
                    }


                    // fnWxPayVerify
                    
                     // fnAliBatchPay       //支付宝批量不支持
                     // fnWxBatchPay        //微信批量不支持
                     // 分 换 元 /100
                    that.ruleForm.maney =  list.fnWdOnetimeLowest/100;//单次最低提现
                    that.ruleForm.vipnum = list.fnWdMaxtimeMonth; //提现次数

                    that.ruleForm.shoufei = list.fnWdServiceCharge; // 提现手续费    
                    that.time = list.fnWdTimeStart ;      //开始时间
                    that.time1 = list.fnWdTimeEnd; //结束时间
                    that.ruleForm.desc =  list.fnWdHint ;// 提示信息

                    let zhouData = list.fnWdTimeEffect.split(","); //提现支持方式
                    let zhouDataArr = [];
                    zhouData.forEach(function(item){
                        console.log(item);
                        if (item == 1) {
                           zhouDataArr.push('周一')  
                        } else if (item == 2) {
                           zhouDataArr.push('周二')   
                        } else if (item == 3){
                            zhouDataArr.push('周三')   
                        } else if (item == 4) {
                            zhouDataArr.push('周四')   
                        } else if (item == 5) {
                            zhouDataArr.push('周五')   
                        } else if (item == 6) {
                            zhouDataArr.push('周六')   
                        }else{
                            zhouDataArr.push('周日')   
                        }
                    })

                    console.log(zhouDataArr);

                    that.ruleForm.timezhou = zhouDataArr;


                    

                    
                }
            })

// createTime: null
// fnAliBatchPay: "1"
// fnBl2cms: "1"
// fnBlPay: "1"    账户余额支付
// fnBlTransfer: "0"
// fnBlWdApply: "1"
// fnCms2bl: "1"
// fnCms2blAudit: "1"
// fnCmsWdApply: "1"
// fnWdHint: null
// fnWdMaxtimeMonth: "1"
// fnWdOnetimeLowest: "10000"
// fnWdServiceCharge: "0.00"
// fnWdSupport: "1,2,3"
// fnWdTimeEffect: "3"
// fnWdTimeEnd: "17:00:00"
// fnWdTimeStart: "08:00:00"
// fnWxBatchPay: "1"
// fnWxPayVerify: "1"
// suserId: "2"
// updateTime: null
// usGrade: "0"
    




        }
    },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>
<style>
.pNode {
    position: absolute;
    bottom: -18px;
    line-height: 15px;
    color: #999
}
.demo-ruleForm .el-form-item{
    position: relative;
    margin-bottom: 30px;
}
.demo-ruleForm .el-form-item .mh-cash-setting .el-input__inner{
    height: 32px;
    line-height: 32px;
    width: 130px;
}
.demo-ruleForm .el-form-item  .mh-cash-setting .el-input{
     width: 130px;
     margin-right: 10px;
}
.mh-cash-setting{
    display: flex;
    align-items: center;
}
.demo-ruleForm .el-form-item  .el-range__icon{
    line-height: 25px;
}
.demo-ruleForm .el-form-item .el-date-editor .el-range-separator{
    line-height: 25px;
}
.demo-ruleForm .el-form-item  .el-textarea__inner{
    width: 400px;
    height: 140px;
}
.demo-ruleForm .el-form-item  .el-textarea{
    width: 400px;
}
.pNode_a{
    font-size: 14px;
    color: #409eff;
    text-decoration: none;
}

.mh-cash-span{
    display: inline-block;
    margin:  0 10px;
}
</style>