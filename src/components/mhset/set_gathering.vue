<template>
<!-- 收款设置 -->
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
                    <el-tabs class="zm_tabs" v-model="itemActiveName" @tab-click="itemView_selectClick" style="margin: 20px 0 0 20px;">
                        <el-tab-pane label="账户余额" name="first">  </el-tab-pane>
                        <el-tab-pane label="微信支付" name="second"> </el-tab-pane>
                        <el-tab-pane label="支付宝"  name="third">   </el-tab-pane>
                        <el-tab-pane label="线下支付" name="fourth">  </el-tab-pane>
                        <el-tab-pane label="货到付款" name="five">    </el-tab-pane>
                    </el-tabs>


                    <!-- 1、账户余额 -->
                    <div v-bind:class="[isItemView1==0 ? itemView11 : itemView12]">
                        <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>账户余额支付</h3>
                                <p>开通账户余额支付，所有会员在店铺的消费可以直接使用余额付款</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch @change="subMit('fnBlPay')" v-model="fnBlPay"></el-switch>
                            </div>
                        </div>
                    </div>

                    <!-- 2、微信支付 -->
                    <div v-bind:class="[isItemView2==1 ? itemView21 : itemView22]">
                        <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>退款金额原路退回</h3>
                                <p>开启后，微信支付的订单退款通过商家微信账户，余额自动退回微信账户</p>
                                <p>关闭后，退款到会员余额</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch @change="subMit('fnWxBackWay')" v-model="fnWxBackWay"></el-switch>
                            </div>
                        </div>

                        <div class="sg_p12View" >
                            <div class="sg_p12" >上传appicilent_cert.p12文件:</div>
                            <el-upload class="upload-demo" action="#" multiple :limit="1"
                            :auto-upload="false"
                            :on-preview="handlePreview"
                            :on-remove="handleRemove"
                            :before-remove="beforeRemove"
                            :on-exceed="handleExceed"
                            :on-change="elUpload_fileChange" 
                            :file-list="fileList">
                            <el-button size="small" type="primary">点击上传</el-button>
                            <div slot="tip" class="el-upload__tip">只能上传p12文件，且不超过500kb</div>
                            </el-upload>
                        </div>
                        

                        <!-- <el-button class="sg_save" type="primary" @click="saveClick2">保存</el-button> -->

                        <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>微信支付收款设置</h3>
                                <p>还没开通微信支付
                                    <a class="" href="https://mp.weixin.qq.com/cgi-bin/readtemplate?t=news/open-app-apply-guide_tmpl&amp;lang=zh_CN">
                                    立即免费申请开通微信支付接口</a>
                                </p>
                                <p>关闭后，退款到会员余额</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch @change="subMit('fnWxProceeds')" v-model="fnWxProceeds"></el-switch>
                            </div>
                        </div>

                        <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>微信H5支付开关</h3>
                                <p>开启后，结算时可以使用微信H5支付</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch @change="subMit('fnWxH5')" v-model="fnWxH5"></el-switch>
                            </div>
                        </div>

                        <br>
                        <div class="sg_dlView">
                            <div class="sg_dlView_title">AppSecret：</div>
                            <div class="set_content">
                                <el-input v-model="fnWxAppSecret" class="spItemprice" placeholder=""></el-input> 
                                <div class="sg_dlView_subTitle">审核后在公众平台开启开发模式后可查看</div>
                            </div>
                        </div>

                        <!-- <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div>公众号AppId：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="fnWxAppId" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div>小程序AppId：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="fnWxMpAppId" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div> -->
                        
                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>MCH_ID：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="fnWxMchId" class="spItemprice" placeholder=""></el-input> 
                                <div class="sg_dlView_subTitle">微信支付商户号，审核通过后，在微信发送的邮件中查看</div>
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>Key：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="fnWxKey" class="spItemprice" placeholder=""></el-input> 
                                <div class="sg_dlView_subTitle">商户支付密钥Key。请登录 微信支付商户平台，在【账户设置-安全设置-API安全】中设置</div>
                            </div>
                        </div>

                        <el-button class="sg_save2" type="primary" @click="saveClick(2)">保存</el-button>
                        <br><br><br>

                    </div>

                    <!-- 3、支付宝 -->
                    <div v-bind:class="[isItemView3==2 ? itemView31 : itemView32]">
                        <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>退款金额原路退回</h3>
                                <p>开启后，支付宝的订单退款自动退回到支付宝账户</p>
                                <p>关闭后，支付宝支付的订单退款会员需要指定退款账户</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch @change="subMit('fnAliBackWay')" v-model="fnAliBackWay"></el-switch>
                            </div>
                        </div>

                        <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>支付宝收款设置</h3>
                                 <p>还没开通微信支付
                                    <a class="" href="https://b.alipay.com/signing/productSet.htm?navKey=all">
                                    在线申请</a>
                                </p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch @change="subMit('fnAliProceeds')" v-model="fnAliProceeds"></el-switch>
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>AppId：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="fnAliAppId" type="number" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>支付宝公钥：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="fnAliPublicKey" type="number" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div>支付宝私钥文件：</div>
                                </div>
                            </div>
                            <!-- <div class="sg_dlView_title">支付宝私钥文件：</div> -->
                            <div>
                                <el-upload class="upload-demo" action="#" multiple :limit="1"
                                :auto-upload="false"
                                :on-change="elUpload_fileChange2"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                :on-exceed="handleExceed"
                                :file-list="fileList2">
                                <el-button size="small" type="primary">点击上传</el-button>
                                <div slot="tip" class="el-upload__tip">例：rsa_private_key.pem</div>
                                </el-upload>
                            </div>
                        </div>

                        <el-button class="sg_save3" type="primary" @click="saveClick(3)">保存</el-button>
                    </div>
                    <!-- 4、线下支付 -->
                    <div v-bind:class="[isItemView4==3 ? itemView41 : itemView42]">
                        <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>线下支付收款设置</h3>
                                <p>用户选择线下支付时显示的内容，建议银行卡号或支付宝账号，请认真填写并核对信息</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch @change="subMit('fnOfflineProceeds')" v-model="fnOfflineProceeds"></el-switch>
                            </div>
                        </div>
                    </div>
                    <!-- 5、货到付款 -->
                    <div v-bind:class="[isItemView5==4 ? itemView51 : itemView52]">
                       <div class="edit-item goods-item goods-set">
                            <div  class="edit-info">
                                <h3>货到付款</h3>
                                <p>开通货到付款，所有会员在店铺的消费可以直接使用货到付款</p>
                            </div>
                            <div class="goods-item-ctn">
                                <el-switch @change="subMit('fnCashProceeds')" v-model="fnCashProceeds"></el-switch>
                            </div>
                        </div>
                    </div>
               
                    <!--选项卡组件 over-->
                </div>
                <!-- 商品中心over-->
            </div>
        </div>
        <!-- -->

    </div>
    <!--主体 over-->
    </div>
</template>


<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import settingnav from './settingnav';
import network from "../../utils/api";
import {
    zm_jsonToString,
    zm_formDataToString,
} from "../../filters/zm_tools";
import { zm_nullToBlankString } from '../../filters/zm_object_string';


export default {
    data() {
        return {             
            
            // itemView 
            itemActiveName: 'first',
            itemIndex: 0,
            itemLastIndex: 0,
            isItemView1: 0,
            isItemView2: 0,
            isItemView3: 0,
            isItemView4: 0,
            isItemView5: 0,
            itemView11: 'itemView11',
            itemView12: 'itemView12',
            itemView21: 'itemView21',
            itemView22: 'itemView22',
            itemView31: 'itemView31',
            itemView32: 'itemView32',
            itemView41: 'itemView41',
            itemView42: 'itemView42',
            itemView51: 'itemView51',
            itemView52: 'itemView52',
            settingData: '',
            fnBlPay:false,
            // fnBlPay: '',
            fnBlWdApply: '',
            fnCms2bl: '',
            fnCms2blAudit: '',
            fnBl2cms: '',
            fnBlTransfer: '',
            fnWdSupport: '',
            fnAliBatchPay: '',
            fnWxBatchPay: '',
            fnWxPayVerify: '',
            fnWdOnetimeLowest: '',
            fnWdMaxtimeMonth: '',
            fnWdServiceCharge: '',
            fnWdTimeEffect: '',
            fnWdTimeStart: '',
            fnWdTimeEnd: '',
            fnWdHint: '',
            evaHideBad: '',
            evaHideOrdinary: '',
            fnWxBackWay: '',
            fnWxApiclientP12: '',
            fnWxProceeds: '',
            fnWxH5: '',
            fnWxAppSecret: '',
            fnWxMchId: '',
            fnWxAppId: '',
            fnWxMpAppId: '',
            fnWxKey: '',
            fnAliBackWay: '',
            fnAliProceeds: '',
            fnAliAppId: '',
            fnAliPublicKey: '',
            fnAliPrivateKey: '',
            fnOfflineProceeds: '',
            fnCashProceeds: '',
            haveFiles: '',
            fileList: [],
            fileList2: [],
            wxp12File:'',
            aliPemFile:'',
        };
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                // vm.getdata();
            } else {
                next('/login');
            }
        })
    },
    mounted() {
        console.log("--------mounted 收款设置");
        this.request_getData();
    },
    methods:{
        itemView_selectClick(tab, event) {
            // console.log('---tab.index= '+tab.index);
			// console.log('---lastItemIndex= '+this.lastItemIndex + '  itemIndex= '+  this.itemIndex);
            this.itemIndex = tab.index;
            this.isItemView1= this.itemIndex,
            this.isItemView2= this.itemIndex,
            this.isItemView3= this.itemIndex,
            this.isItemView4= this.itemIndex,
            this.isItemView5= this.itemIndex,
			    //处理事务。。。
			this.lastItemIndex = this.itemIndex;
        },
        elUpload_fileChange(file, fileList) {
			// console.log('--文件状态改变时的钩子： change：file= ' + file + '、fileList= ' + fileList.length);
			// console.log('---fileList= ', zm_jsonToString(fileList));
		    // console.log('---file= ', zm_jsonToString(file));
            // console.log('---file1= ', file.raw);
            // console.log('---name= ', file.raw.name);
            // console.log('---wxp12FileNames= ', fileNames);
            // console.log('---fileName= ', suffix);
            this.fileList = [];
            this.wxp12File = file;
            var fileNames = this.wxp12File.name.split('.');
            var suffix = fileNames[1];
            if (suffix == 'p12') {
                console.log('---is p12 file');
                this.fileList.push(file);
            }else{
                this.$message.warning('请上传 p12文件');
                this.fileList = [];
            }
        },
        elUpload_fileChange2(file, fileList) {
			// console.log('--文件状态改变时的钩子2： change：file= ' + file + '、fileList= ' + fileList.length);
             this.fileList = [];
            this.aliPemFile = file;
            var fileNames = this.aliPemFile.name.split('.');
            var suffix = fileNames[1];
            if (suffix == 'pem') {
                this.fileList2.push(file);
                console.log('---is pem file');
            }else{
                this.$message.warning('请上传 pem文件');
                this.fileList2 = [];
            }
		},
        // 请求：回显设置数据
        request_getData(){
            let self = this;    
            let params = new FormData();
                params.append('suserId', this.$cookie.get('userId'));
            // let urlStr = network.settingTx;
            let urlStr = network.userIP + network.set_settingDetail;
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            }).then(function(response){
                console.log('---设置回显 urlStr= ', urlStr +'\n:response= '+zm_jsonToString(response.data));
                if(response.data.status == 200){
                    let settingInfo  = response.data.setting;
                    self.settingData = settingInfo;
                    self.fnBlPay           = Boolean(settingInfo.fnBlPay*1);
                    self.fnWxBackWay       = Boolean(settingInfo.fnWxBackWay*1);
                    self.fnWxProceeds      = Boolean(settingInfo.fnWxProceeds*1);
                    self.fnWxH5            = Boolean(settingInfo.fnWxH5*1);
                    self.fnAliBackWay      = Boolean(settingInfo.fnAliBackWay*1);
                    self.fnAliProceeds     = Boolean(settingInfo.fnAliProceeds*1);
                    self.fnOfflineProceeds = Boolean(settingInfo.fnOfflineProceeds*1);
                    self.fnCashProceeds    = Boolean(settingInfo.fnCashProceeds*1);

                }
            })
        },
        // 请求：设置保存
        saveClick(type){
            
            let self = this;    
            let params = new FormData();
            if (type==2) {
                if(this.fnWxMchId=='' || this.fnWxMchId==null){
                    this.$message.warning('微信支付 MCH_ID不能为空！'); return;
                }
                if(this.fnWxKey=='' || this.fnWxKey==null){
                    this.$message.warning('微信支付 Key不能为空！'); return;
                }
                if (this.fileList.length > 0) {
                    params.append('fnWxApiclientP12', this.wxp12File.raw);
                    params.append('haveFiles', 1);
                }
                params.append('fnWxBackWay', Number(this.fnWxBackWay));
                params.append('fnWxProceeds', Number(this.fnWxProceeds));
                params.append('fnWxH5', Number(this.fnWxH5));
                params.append('fnWxAppSecret', this.fnWxAppSecret);
                params.append('fnWxMchId', this.fnWxMchId);
                params.append('fnWxAppId', this.fnWxAppId);
                params.append('fnWxMpAppId', this.fnWxMpAppId);
                params.append('fnWxKey', this.fnWxKey);

            }else if (type==3) {
                if(this.fnAliAppId=='' || this.fnAliAppId==null){
                    this.$message.warning('支付宝支付 AppId不能为空！'); return;
                }
                if(this.fnAliPublicKey=='' || this.fnAliPublicKey==null){
                    this.$message.warning('支付宝支付 Key不能为空！'); return;
                }
                if (this.fileList2.length > 0) {
                    params.append('fnAliPrivateKey', this.aliPemFile.raw);
                    params.append('haveFiles', 1);
                }
                // params.append('fnAliBatchPay', this.fnAliBatchPay);
                params.append('fnAliBackWay', Number(this.fnAliBackWay));
                params.append('fnAliProceeds', Number(this.fnAliProceeds));
                params.append('fnAliAppId', zm_nullToBlankString(this.fnAliAppId));
                params.append('fnAliPublicKey', zm_nullToBlankString(this.fnAliPublicKey));
            }
                // // params.append('usGrade', this.usGrade);
                // params.append('fnBlPay',       Number(this.fnBlPay));
                // params.append('fnBlWdApply',   Number(this.fnBlWdApply));
                // params.append('fnCmsWdApply',  Number(this.fnCmsWdApply));
                // params.append('fnCms2bl',      Number(this.fnCms2bl));
                // params.append('fnCms2blAudit', Number(this.fnCms2blAudit));
                // params.append('fnBl2cms',      Number(this.fnBl2cms));
                // params.append('fnBlTransfer',  Number(this.fnBlTransfer));

                // params.append('fnWdSupport', this.fnWdSupport);
                // // params.append('fnAliBatchPay', this.fnAliBatchPay);
                // params.append('fnWxBatchPay', this.fnWxBatchPay);
                // params.append('fnWxPayVerify', this.fnWxPayVerify);
                // params.append('fnWdOnetimeLowest', this.fnWdOnetimeLowest);
                // params.append('fnWdMaxtimeMonth', this.fnWdMaxtimeMonth);
                // params.append('fnWdServiceCharge', this.fnWdServiceCharge);
                // params.append('fnWdTimeEffect', this.fnWdTimeEffect);

                // params.append('fnWdTimeStart', this.fnWdTimeStart);
                // params.append('fnWdTimeEnd', this.fnWdTimeEnd);
                // params.append('fnWdHint', this.fnWdHint);
                // params.append('evaHideBad', this.evaHideBad);
                // params.append('evaHideOrdinary', this.evaHideOrdinary);
                // params.append('fnOfflineProceeds', this.fnOfflineProceeds);
                // params.append('fnCashProceeds', this.fnCashProceeds);
                // params.append('haveFiles', this.haveFiles);
            let urlStr = network.userIP + network.set_settingUpdate;
                // urlStr = " http://172.16.1.218:4040/setting/admin/update"
                // let urlStr = network.settingSz;
                console.log('---信息设置 urlStr= ', urlStr+ '\n:params'+ zm_formDataToString(params));

            this.$http({
                method: "post",
                url: urlStr,
                data: params
            }).then(function(response){
                console.log('---信息设置 urlStr= ', urlStr+ '\n:params'+ zm_formDataToString(params)
                +'\n:response= '+zm_jsonToString(response.data));

                if(response.data.status == 200){
                    self.$message.success("信息设置成功");
                }
            })
        },
        //--------------------上传文件--------------------
        handleRemove(file, fileList) {
            console.log('---上传文件= '+file, fileList);
        },
        handlePreview(file) {
            console.log('---上传文件= '+file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        // 设置 checked
        subMit(checkedType){
            let that = this;    
            let params = new FormData();
            // that.value1 ?  params.append('fnBlPay',1) :  params.append('fnBlPay',0);
            if (checkedType=='fnBlPay') {
                 params.append('fnBlPay', Number(this.fnBlPay));
            }
            if (checkedType=='fnWxBackWay') {
                 params.append('fnWxBackWay', Number(this.fnWxBackWay));
            }
            if (checkedType=='fnWxProceeds') {
                 params.append('fnWxProceeds', Number(this.fnWxProceeds));
            }
            if (checkedType=='fnWxH5') {
                 params.append('fnWxH5', Number(this.fnWxH5));
            }
            if (checkedType=='fnAliBackWay') {
                 params.append('fnAliBackWay', Number(this.fnAliBackWay));
            }
            if (checkedType=='fnAliProceeds') {
                 params.append('fnAliProceeds', Number(this.fnAliProceeds));
            }
            if (checkedType=='fnOfflineProceeds') {
                 params.append('fnOfflineProceeds', Number(this.fnOfflineProceeds));
            }
            if (checkedType=='fnCashProceeds') {
                 params.append('fnCashProceeds', Number(this.fnCashProceeds));
            }
            // let urlStr = network.settingSz;
            let urlStr = network.userIP + network.set_settingUpdate;
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(res){
                console.log('---信息设置1 urlStr= ', urlStr+ '\n:params'+ zm_formDataToString(params)
                +'\n:res= '+zm_jsonToString(res.data));
                if(res.data.status == 200){
                    that.$message.success('设置成功');
                    // that.getdata();
                }
            })
        },
        // getdata(){
        //     let that = this;    
        //     let data = new FormData(); 
        //     let urlStr = network.settingTx;
        //     this.$http({
        //         method: "post",
        //         url: urlStr,
        //         data: data
        //     })
        //     .then(function(res){
        //         // console.log(res);
        //          console.log('---信息设置1 urlStr= ', urlStr+'\n:response= '+zm_jsonToString(res.data));
        //         if(res.data.status == 200){
        //             let settingInfo = res.data.setting;
        //             // settingInfo.fnBlPay == 1 ? that.value1= true : that.value1 = false;
        //             that.fnBlPay           = Boolean(settingInfo.fnBlPay*1);
        //             that.fnWxBackWay       = Boolean(settingInfo.fnWxBackWay*1);
        //             that.fnWxProceeds      = Boolean(settingInfo.fnWxProceeds*1);
        //             that.fnWxH5            = Boolean(settingInfo.fnWxH5*1);
        //             that.fnAliBackWay      = Boolean(settingInfo.fnAliBackWay*1);
        //             that.fnAliProceeds     = Boolean(settingInfo.fnAliProceeds*1);
        //             that.fnOfflineProceeds = Boolean(settingInfo.fnOfflineProceeds*1);
        //             that.fnCashProceeds    = Boolean(settingInfo.fnCashProceeds*1);
        //         }else{
        //             that.$message.error('状态码:'+res.data.status+' ,错误提示:'+res.data.message);
        //         }   
        //     })
        // }
    },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>

<style scoped >


.sg_p12View{
    display: flex;
    margin: 20px 0 30px 10px;
}
.sg_p12{
    font-size: 15px !important;
    margin: 5px 20px 0 0;
}
.sg_save{
    margin: 10px 10px 10px 0px;
}
.sg_save2, .sg_save3{
    margin: 10px 10px 10px 40%;
}

.set_content{
    width: 90%;
}
.sg_dlView{
    display: flex;
    margin: 10px 10px 30px 0px;
}
.sg_dlView_title{
    margin-top: 6px;
    width: 100px;
    text-align: right;
    font-size: 14px !important;
}
.sg_dl_titleView{
    display:flex; 
    float: right;
}
.sg_dlView_subTitle{
    margin-top: 10px;
    color: #666666;
}
.sg_dlView_star{
    color: red;
}
.activityName, .spItemprice, .spSkucost{
    /* width: 200px; */
    height: 26px;
}
.zm_elInput >>> .el-input__inner{
    padding: 0 0px !important;
    text-align: center;
}


/****************** itemView: 显示/隐藏 ******************/
.itemView11 { display: '';}
.itemView12 { display: none;}
.itemView21 { display: '';}
.itemView22 { display: none;}
.itemView31 { display: '';}
.itemView32 { display: none;}
.itemView41 { display: '';}
.itemView42 { display: none;}
.itemView51 { display: '';}
.itemView52 { display: none;}


</style>



   
            
           