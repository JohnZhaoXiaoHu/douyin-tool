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

                    <!-- 面包屑：导航标题-->
                    <div class="mh-coupon-divtop">
                        <el-breadcrumb separator-class="el-icon-arrow-right">
                               <div class="mh_title"> 基本设置 </div> 
                        </el-breadcrumb>     
                    </div>
                    <!-- 面包屑over -->
                   
                   <br>
                        <div class="sg_dlView">
                            <div class="sg_dlView_title">后台名称：</div>
                            <div>
                                <el-input v-model="name" type="spName" class="setp_input" placeholder=""></el-input> 
                            </div>
                        </div>
                        
                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div>logo：</div>
                                </div>
                            </div>
                            <div style="">
                                <!---------------------- 图片浏览墙（开始）图片放大:imgBig_dialogVisible ---------------------->
                                <div class="filesWall">
                                    <el-upload action="#" list-type="picture-card" :class="{disabled:uploadDisabled, 'display':uploadDisplay}" 
                                        :multiple="bgImg_elUpload_multipleImg" :file-list='bgImg_elUpload_imgFileList' 
                                        :limit=bgImg_elUpload_limitNum :auto-upload="false" accept="image/png,image/gif,image/jpg,image/jpeg" 
                                        :on-preview="elUpload_handlePictureCardPreview" 
                                        :on-remove="elUpload_handleRemove" 
                                        :on-change="elUpload_fileChange" 
                                        :on-exceed="elUpload_exceedFile">
                                        <i class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                    <el-dialog :visible.sync="imgBig_dialogVisible">
                                        <img width="100%" :src="imgBig_dialogImageUrl" alt="">
                                    </el-dialog>
                                </div>
                                <div class="setp_logoSize">
                                    建议尺寸：88*88
                                </div>
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div>联系地址：</div>
                                </div>
                            </div>
                            <div>
                                <el-input v-model="address" class="setp_input" placeholder=""></el-input> 
                            </div>
                        </div>

                        <div class="sg_dlView">
                            <div class="sg_dlView_title"> 
                                <div class="sg_dl_titleView">
                                    <div>联系电话：</div>
                                </div>
                            </div>
                            <div>
                                <el-input v-model="phone" type="number" class="setp_input" placeholder=""></el-input> 
                            </div>
                        </div>


                        <el-button class="set_platInfoSave" type="primary" @click="request_infoAddOrUpdate">保存</el-button>
                        <br><br><br>
               
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
import {
    zm_imgToBase64,
    zm_base64ToFile,
} from "../../filters/zm_image";

export default {
    data() {
        return {             
            value1:false,
            //图片浏览墙（背景图）
			imgBig_dialogImageUrl: '',
			imgBig_dialogVisible: false,
			bgImg_elUpload_multipleImg: true,
			bgImg_elUpload_limitNum: 1,
			bgImg_elUpload_imgFileList: [],
			bgImg_elUpload_imgFiles: [],
			uploadDisabled: false,
			uploadDisplay: true,
			changeBgImg: false,
            imageUrl: 'http://sanyetongsj.oss-cn-shanghai.aliyuncs.com/lct/shop/source/nUoHG99WsYB0KJhx.jpg',
            dialogImageUrl1: '',
            dialogVisible1: false,
            logoImgFile: '',
            platformInfoData: '',
            headportraitPicture: "",
            name: "",
            address: "",
            phone: "",
            isLogoChange: false,
        };
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                // vm.request_infoFindBySuserId();
            } else {
                next('/login');
            }
        })
    },
    mounted() {
        console.log("--------mounted 平台信息");
        this.request_infoFindBySuserId(false);
    },
    methods:{
        elUpload_exceedFile(files, fileList) {
			console.log('--文件超出个数限制时的钩子： file= ' + files.length + '、fileList= ' + fileList.length);
			this.$notify.warning({
				title: '警告',
				message: `只能选择 ${this.bgImg_elUpload_limitNum} 个文件，当前共选择了 ${files.length + fileList.length} 个`
			});
		},
		elUpload_fileChange(file, fileList) {
			console.log('--文件状态改变时的钩子： change：file= ' + file + '、fileList= ' + fileList.length);
            console.log('---file1= ', this.bgImg_elUpload_imgFileList[0].raw);
            console.log('---file2= ', file.raw);
            this.isLogoChange = true;
            this.logoImgFile = file;
            this.uploadDisabled = true;
            this.uploadDisplay = false;
			this.changeBgImg = true;
		},
		elUpload_handleRemove(file, fileList) {
			console.log('--文件移除时的钩子：file= ' + file + 'fileList= ' + fileList);
			this.uploadDisabled = false;
			this.uploadDisplay = true;
			this.changeBgImg = true;
		},
		elUpload_handlePictureCardPreview(file) {
			// console.log('--文件放大时的钩子：file= ' + file.url);
			this.imgBig_dialogImageUrl = file.url;
			this.imgBig_dialogVisible = true;
        },
        /** url 转换成img */
        getBase64Image(img) {
            var canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, img.width, img.height);
            var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
            var dataURL = canvas.toDataURL("image/" + ext);
            return dataURL;
        },
        btof(data, fileName) {
            const dataArr = data.split(",");
            const byteString = atob(dataArr[1]);
            const options = {
                type: "image/jpeg",
                endings: "native"
            };
            const u8Arr = new Uint8Array(byteString.length);
            for (let i = 0; i < byteString.length; i++) {
                u8Arr[i] = byteString.charCodeAt(i);
            }
            return new File([u8Arr], fileName + ".jpg", options);
        },
        // 请求：查询saas平台信息
        request_infoFindBySuserId(refresh){
            let self = this;    
            let params = new FormData();
                params.append('suserId', this.$cookie.get('userId'));
            let urlStr = network.userIP + network.set_infoFindBySuserId;
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            }).then(function(response){
                console.log('---查询saas平台信息 urlStr= ', urlStr +'\n:response= '+zm_jsonToString(response.data));
                if(response.data.status == 200){
                    self.platformInfoData = response.data;
                    self.headportraitPicture = self.platformInfoData.headportrait;
                    self.name   = self.platformInfoData.name;
                    self.address= self.platformInfoData.address;
                    self.phone  = self.platformInfoData.phone;
                    // logo
                    if (refresh==false) {
                        self.isLogoChange = false;
                        let filesWallImage = {
                            uid: self.platformInfoData.suserId,
                            raw: {
                                "uid": self.platformInfoData.suserId
                            },
                            percentage: 0,
                            name: self.platformInfoData.name,
                            url: self.platformInfoData.headportrait,
                            status: "ready",
                        };
                        self.bgImg_elUpload_imgFileList = [];
                        self.bgImg_elUpload_imgFileList.push(filesWallImage);
                        self.uploadDisabled = true;
                        self.uploadDisplay = false;

                        //imgURL-->base64，转换base64到file
                        let imgURL = self.platformInfoData.headportrait;
                        let image = new Image();
                        image.src = imgURL;
                        image.setAttribute("crossOrigin", "Anonymous");
                        image.onload = function () {
                            var base64 = self.getBase64Image(image);
                            var file = self.btof(base64, self.platformInfoData.name);
                            self.logoImgFile = file;
                            console.log('---imgFile= ', file);
                        };
                    }

                    self.$cookie.set('miHuanLogo', self.platformInfoData.headportrait, 7);
                    self.$cookie.set('miHuanName', self.platformInfoData.name, 7);
                    let miHuanName = document.getElementsByClassName("miHuanName")[0];
                    let miHuanLogo = document.getElementsByClassName("miHuanLogo")[0];
                    let navMhLogo  = document.getElementsByClassName("navMhLogo")[0];
                    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
                    if (self.platformInfoData.headportrait) {
                        miHuanName.text = self.platformInfoData.name;
                        miHuanLogo.src = self.platformInfoData.headportrait;
                        navMhLogo.src  = self.platformInfoData.headportrait;

                        link.type = 'image/x-icon';
                        link.rel = 'shortcut icon';
                        // link.href = 'http://www.stackoverflow.com/favicon.ico';
                        link.href = self.platformInfoData.headportrait;
                        document.getElementsByTagName('head')[0].appendChild(link);
                    }
                }else if(response.data.status == 500 && response.data.message == "当前suserId未被注册") {
                    //当前信息为设置过
                }
            })
        },
        // 修改平台信息
        request_infoAddOrUpdate(){
            if(this.name=='' || this.name==null){
                this.$message.warning('后台名称不能为空！'); return;
            }
            if(this.address=='' || this.address==null){
                this.$message.warning('联系地址不能为空！'); return;
            }
            if(this.phone=='' || this.phone==null){
                this.$message.warning('联系电话不能为空！'); return;
            }
            if(this.logoImgFile=='' || this.logoImgFile==null){
                if (this.bgImg_elUpload_imgFileList.length>0) {
                    this.logoImgFile = this.bgImg_elUpload_imgFileList[0];
                }
            }
            if(this.logoImgFile=='' || this.logoImgFile==null){
                this.$message.warning('logo不能为空！'); return;
            }
            let self = this;    
            let params = new FormData();
                params.append('suserId', this.$cookie.get('userId'));
                params.append('name', this.name);
                params.append('address', this.address);
                params.append('phone', this.phone);
            if(this.isLogoChange){
                params.append('headportraitPicture', this.logoImgFile.raw);
            }else{
                params.append('headportraitPicture', this.logoImgFile);
            }

            let urlStr = network.userIP + network.set_infoAddOrUpdate;
            console.log('---设置：平台信息 urlStr= ', urlStr+ '\n:params'+ zm_formDataToString(params));

            this.$http({
                method: "post",
                url: urlStr,
                data: params
            }).then(function(response){
                // console.log('---设置：平台信息 urlStr= ', urlStr+ '\n:params'+ zm_formDataToString(params)
                // +'\n:response= '+zm_jsonToString(response.data));
                if(response.data.status == 200){
                    self.$message.success("保存成功");
                    self.request_infoFindBySuserId(true);
                }
            })
        },
    },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>

<style scoped >

.mh_title{
    font-size: 15px !important;
}
.setp_logoSize{
    margin: 10px 0 0 5px;
}
/******* 商品墙：.product_filesWall *******/
.filesWall, coupon_filesWall {
	margin-left: 10px;
	width: 200px;
}
.filesWall >>> .el-upload-list--picture-card .el-upload-list__item,
.filesWall >>> .el-upload--picture-card {
	width: 80px !important;
	height: 80px !important;
}
#filesWall >>> .el-upload--picture-card {
    width: 80px !important;
	height: 80px !important;
	line-height: 80px !important;
}
.filesWall >>> .disabled .el-upload--picture-card {
	display: none;
}
.filesWall >>> .display .el-upload--picture-card {
	display: '';
}

.set_platInfoSave{
    margin: 10px 10px 10px 200px;
}
.sg_dlView{
    display: flex;
    margin: 10px 10px 30px 0px;
}
.sg_dlView_title{
    margin-top: 6px;
    width: 85px;
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
.setp_input {
    width: 260px;
    height: 26px;
}



</style>



   
            
           