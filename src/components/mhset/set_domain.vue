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
                        <el-tab-pane label="域名绑定" name="first">  </el-tab-pane>
                        <el-tab-pane label="域名申请" name="second"> </el-tab-pane>
                    </el-tabs>


                    <!-- 1、域名绑定 -->
                    <div v-bind:class="[isItemView1==0 ? itemView11 : itemView12]">
                        <br>
                        
                        
                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>域名：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="domain" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>工信部备案号：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="recordSn" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title">状态：</div>
                            <div>
                                <div class="setd_state">已审核通过</div>
                            </div>
                        </div>

                        <el-button class="setd_save" type="primary" @click="request_domainUpdate">保存</el-button>
                        <br><br><br>
                    </div>

                    <!-- 2、域名申请 -->
                    <div v-bind:class="[isItemView2==1 ? itemView21 : itemView22]">
                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>账号：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="account" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>域名：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="newDomain" class="spItemprice" placeholder=""></el-input> 
                                <div class="sg_dlView_subTitle">域名不需要带前缀，例：baidu.com</div>
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>公司名称：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="companyName" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>联系人姓名：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="contactName" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>联系人手机号：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="contactPhone" type="number" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>邮政编码：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="postalCode" type="number" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>省市：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-select size='small' v-model="addressIndex" placeholder="请选择地区" style="width: 140px; font-size: 13px;" v-bind:class="addressClassSelect">
                                    <el-option style="font-size: 13px;" v-for="(item, index) in cityList" :key="index" :label="item" :value="index">
                                    </el-option>
                                </el-select>
                                <!-- <el-input v-model="longinName" type="number" class="spItemprice" placeholder=""></el-input>  -->
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>地址：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="address" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>邮箱：</div>
                                </div>
                            </div>
                            <div class="set_content">
                                <el-input v-model="email" type="number" class="spItemprice" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div class="sg_dlView_star">*</div>
                                    <div>营业执照：</div>
                                </div>
                            </div>
                            <div>
                                <el-upload class="upload-demo" action="#" :auto-upload="false" multiple :limit="1"
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                :on-exceed="handleExceed"
                                :file-list="fileList"
                                :on-change="elUpload_fileChange">
                                <el-button size="small" type="primary">选择照片</el-button>
                                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                                </el-upload>
                            </div>
                        </div>


 
                        <el-button class="setd_save" type="primary" @click="request_domainAdd">保存</el-button>
                        <br><br><br>

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
import api from '../../utils/api';;
import network from "../../utils/api";
import {
    zm_jsonToString,
    zm_formDataToString,
} from "../../filters/zm_tools";

export default {
    data() {
        return {             
             value1:false,
            // itemView 
            itemActiveName: 'first',
            itemIndex: 0,
            itemLastIndex: 0,
            isItemView1: 0,
            isItemView2: 0,
            itemView11: 'itemView11',
            itemView12: 'itemView12',
            itemView21: 'itemView21',
            itemView22: 'itemView22',
            fileList: [],
            //省市
            addressSelected: "",
            addressIndex: "",
            index: 0,
            regionList: [],
            cityList: [],
            provinceList: [],
            provinceNumList: [],
            domainData: '',
            domain: '',
            recordSn: '',

            account: '',
            newDomain: '',
            companyName: '',
            contactName: '',
            contactPhone: '',
            postalCode: '',
            regionId: '',
            address: '',
            email: '',
            businessLicensePicture: '',
            businessLicensePictureFile: '',
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
    watch: {
        addressIndex: function(val) {
            this.regionId = this.provinceNumList[val];
            console.log('addressIndex: ' + val);
            console.log('cityList: ' + zm_jsonToString(this.cityList[val]));
            console.log('regionId: ' + this.regionId);
            
        }
    },
    mounted() {
        // console.log("--------mounted 域名设置");
        this.request_cityList();
        this.request_getData();
    },
    methods:{
        itemView_selectClick(tab, event) {
            // console.log('---tab.index= '+tab.index);
			// console.log('---lastItemIndex= '+this.lastItemIndex + '  itemIndex= '+  this.itemIndex);
            this.itemIndex = tab.index;
            this.isItemView1= this.itemIndex,
            this.isItemView2= this.itemIndex,
			    //处理事务。。。
			this.lastItemIndex = this.itemIndex;
        },
        //--------------------上传文件--------------------
        handleRemove(file, fileList) {
            // console.log('---上传文件= '+file, fileList);
        },
        handlePreview(file) {
            // console.log('---上传文件= '+file);
        },
        handleExceed(files, fileList) {
            this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${ file.name }？`);
        },
        elUpload_fileChange(file, fileList) {
			// console.log('--文件状态改变时的钩子： change：file= ' + file + '、fileList= ' + fileList.length);
            console.log('---file1= ', file.raw);
            this.businessLicensePictureFile = file;
        },
        // 请求：回显数据
        request_getData(){
            let self = this;    
            let params = new FormData();
                params.append('suserId', this.$cookie.get('userId'));
            let urlStr = network.userIP + network.set_domainFindOne;
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(response){
                console.log('---域名回显 urlStr= ', urlStr +'\n:response= '+zm_jsonToString(response.data));
                if(response.data.status == 200){
                    self.domainData = response.data;
                    self.domain   = self.domainData.domain;
                    self.recordSn = self.domainData.recordSn;
                }
            })
        },
        // 申请域名
        request_domainAdd(){
            if(this.account=='' || this.account==null){
                this.$message.warning('账号不能为空！'); return;
            }
            if(this.newDomain=='' || this.newDomain==null){
                this.$message.warning('域名不能为空！'); return;
            }
            if(this.companyName=='' || this.companyName==null){
                this.$message.warning('公司名称不能为空！'); return;
            }
            if(this.contactName=='' || this.contactName==null){
                this.$message.warning('联系人姓名不能为空！'); return;
            }
            if(this.contactPhone=='' || this.contactPhone==null){
                this.$message.warning('联系人手机号不能为空！'); return;
            }
            if(this.postalCode=='' || this.postalCode==null){
                this.$message.warning('邮政编码不能为空！'); return;
            }
            if(this.regionId=='' || this.regionId==null){
                this.$message.warning('省市不能为空！'); return;
            }
            if(this.address=='' || this.address==null){
                this.$message.warning('地址不能为空！'); return;
            }
            if(this.email=='' || this.email==null){
                this.$message.warning('邮箱不能为空！'); return;
            }
            if(this.businessLicensePictureFile=='' || this.businessLicensePictureFile==null){
                this.$message.warning('营业执照不能为空！'); return;
            }

            let self = this;    
            let params = new FormData();
                params.append('suserId', this.$cookie.get('userId'));
                params.append('account', this.account);
                params.append('domain', this.newDomain);
                params.append('companyName', this.companyName);
                params.append('contactName', this.contactName);
                params.append('contactPhone', this.contactPhone);
                params.append('postalCode', this.postalCode);
                params.append('regionId', this.regionId);
                params.append('address', this.address);
                params.append('email', this.email);
                params.append('businessLicensePicture', this.businessLicensePictureFile.raw);
            let urlStr = network.userIP + network.set_domainAdd;

            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(response){
                console.log('---域名申请 urlStr= ', urlStr+ '\n:params'+ zm_formDataToString(params)
                +'\n:response= '+zm_jsonToString(response.data));
                if(response.data.status == 200){
                    self.$message.success("提交申请成功");
                }
            })
        },
        request_domainUpdate(){
            if(this.domain=='' || this.domain==null){
                this.$message.warning('域名不能为空！');
                return;
            }
            if(this.recordSn=='' || this.recordSn==null){
                this.$message.warning('工信部备案号不能为空！');
                return;
            }
            let self = this;    
            let params = new FormData();
                params.append('suserId', this.$cookie.get('userId'));
                params.append('id', this.domainData.id);
                params.append('domain', this.domain);
                params.append('recordSn', this.recordSn);
            let urlStr = network.userIP + network.set_domainUpdate;
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(response){
                console.log('---域名修改 urlStr= ', urlStr+ '\n:params'+ zm_formDataToString(params)
                +'\n:response= '+zm_jsonToString(response.data));
                if(response.data.status == 200){
                    self.$message.success("保存成功");
                }
            })
        },
        // 请求地区		
        request_cityList() {
            let self = this;
            var urlStr = network.userIP +'/user' + "/region/list";
                urlStr = network.userIP + network.tk_regionList;
            this.$http({
                method: "post",
                url: urlStr,
            }).then(function(res){
                self.regionList = res.data.list;
                for(var i = 0; i < self.regionList.length; i++) {
                    var region = self.regionList[i];
                    self.provinceList.push(region[1])
                    self.provinceNumList.push(region[0])
                }
                self.cityList = self.provinceList;
                // console.log('---地区: res= '+zm_jsonToString(res.data));
                // console.log('---provinceList：' + self.provinceList, '\n---provinceNumList：' + self.provinceNumList);
            },function(res){
                self.$message.error(res.data.message);
            })			
        },
    },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>

<style scoped >

.set_content{
    width: 90%;
}
.setd_save{
    margin: 10px 10px 10px 80px;
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
.setd_state{
    margin-top: 5px;
    color: white;
    background: lightgreen;
    padding: 5px;
}
.sg_dlView_star{
    color: red;
}
.spItemprice{
    /* margin-right: 20px; */
    height: 26px;
}


/****************** itemView: 显示/隐藏 ******************/
.itemView11 { display: '';}
.itemView12 { display: none;}
.itemView21 { display: '';}
.itemView22 { display: none;}



</style>



   
            
           