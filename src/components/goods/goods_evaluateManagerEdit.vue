<template>
<!-- 编辑评价 -->
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <secnavbar></secnavbar>
            <div class="main-goods-right">
                <!-- 创建内容 -->
                <div>
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing">
                        <!-- 面包屑 -->
                        <div class="mh-coupon-divtop">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <el-breadcrumb-item :to="{ path: '/goodslist/goods_evaluateManager' }">评价管理</el-breadcrumb-item>
                                <el-breadcrumb-item :to="{ path: '/goodslist/goods_evaluateManagerEdit' }">编辑评价</el-breadcrumb-item>
                            </el-breadcrumb>   
                        </div>
                        <!-- 面包屑over -->

                        <br><br>
                        <!-- 
                            编辑评价
                            emc: evaluate Manager Create
                            eme: evaluate Manager Edit
                         -->
                        <div class="zm_dl vip-alllist vip-xxxx">
                            <div class="zm_dl_title1">活动商品：</div>
                            <div class="emc_productFilesWall" id="emc_productFilesWall">
                                <el-upload action="#" scoped list-type="picture-card" :class="{disabled:uploadDisabled, 'display':uploadDisplay}" 
                                    :multiple="bgImg_elUpload_multipleImg" :file-list='bgImg_elUpload_imgFileList' 
                                    :limit=bgImg_elUpload_limitNum :auto-upload="false" accept="image/png,image/gif,image/jpg,image/jpeg" 
                                    :on-preview="elUpload_handlePictureCardPreview" 
                                    :on-remove="elUpload_handleRemove">
                                    <i scoped class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible1">
                                    <img width="100%" :src="emc_changeBigImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </div>

                        <div class="zm_dl">
                            <div class="zm_dl_title1">评论类型：</div>
                            <el-checkbox-group class="emc_typeView" v-model="emc_typeList">
                                <el-checkbox label="2" value="2">好评</el-checkbox>
                                <el-checkbox label="1" value="1">中评</el-checkbox>
                                <el-checkbox label="0" value="0">差评</el-checkbox>
                            </el-checkbox-group>
                        </div>

                        <div class="zm_dl">
                            <div class="zm_dl_title1">评论内容：</div>
                            <el-input v-model="emc_content" class="emc_content" type="textarea" 
                            rows="5" placeholder=""></el-input> 
                        </div>


                        <div class="emc_itemView">
                            <div class="emc_title">图片（最多可上传9张图片）</div>
                            <div class="emc_productFilesWall">
                                <el-upload action="#" scoped list-type="picture-card"
                                    :multiple="emc_selfie_multipleImg" 
                                    :file-list='emc_selfie_imgFileList' 
                                    :limit=emc_selfie_limitNum :auto-upload="false" accept="image/png,image/gif,image/jpg,image/jpeg" 
                                    :on-preview="emc_selfie_handlePictureCardPreview" 
                                    :on-remove="emc_selfie_handleRemove"
                                    :on-change="emc_fileChange" 
					                :on-exceed="emc_exceedFile">
                                    <i scoped class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <el-dialog :visible.sync="emc_selfie_dialogVisible">
                                    <img width="100%" :src="emc_selfie_dialogImageUrl" alt="">
                                </el-dialog>
                            </div>
                        </div>

                        <br><br><br><br>
                        <div class="emc_btnView">
                            <el-button class="emc_saveBtn" type="primary" size="medium" @click="saveCilck(3)">保存</el-button>
                        </div>
                    </div>    
                    <!-- 商品列表 -->
                    <goodsSpec ref="goodsSpec"></goodsSpec>

                    <!--选项卡组件 over-->
                </div>
                <!-- 商品中心over-->
            </div>
        </div>
        <!--  -->
    </div>
    <!--主体 over-->
    </div>
</template>

<script>


import navbar from '../navbar';
import sidebar from '../sidebar';
import secnavbar from './secnavbar';
import baseapi from '../../utils/api';
import goodsSpec from '../resource/goodsSpec_zm.vue';
import {    
        zm_fundsSetup,
        zm_getList1,
        zm_getList
    } from "../../filters/zm_data"
import {
        zm_jsonToString,
        zm_formDataToString,
        zm_tipsMsg,
        zm_timestampToDate,    
        zm_getCurrenDate,
        zm_getCurrenTimestamp,
        zm_standardDateToFormatDate
} from "../../filters/zm_tools"
import { zm_dateFormat } from '../../filters/zm_dateTime';

export default {
    data() {
        return {
            evaluateData: '',
            spId: '',
            emc_evaluateData: '',
            emc_typeList: '',
            emc_type:'',
            emc_content: '',
            //图片浏览墙（背景图）
			imgBig_dialogImageUrl: '',
			imgBig_dialogVisible: false,
			bgImg_elUpload_multipleImg: true,
			bgImg_elUpload_limitNum: 1,
			bgImg_elUpload_imgFileList: [],
			// bgImg_elUpload_imgFileListAll: [],
			// bgImg_elUpload_imgFiles: [],
			uploadDisabled: false,
			uploadDisplay: true,
			changeBgImg: false,
            imageUrl: 'http://sanyetongsj.oss-cn-shanghai.aliyuncs.com/lct/shop/source/nUoHG99WsYB0KJhx.jpg',
            emc_changeBigImageUrl: '',
            dialogVisible1: false,
            isJPG: true,
            isLimit2M: true,
            //自拍浏览墙
			emc_selfie_multipleImg: true,
			emc_selfie_limitNum: 9,
			emc_selfie_imgFileList: [],
			emc_selfie_imgFiles: [],
            emc_selfie_imageUrl: 'http://sanyetongsj.oss-cn-shanghai.aliyuncs.com/lct/shop/source/nUoHG99WsYB0KJhx.jpg',
            emc_selfie_dialogImageUrl: '',
            emc_selfie_dialogVisible: false,
            emc_delurls: [],
            //商品
            goodsMap: new Map(),
            sPrice:'',
            selectProduct: {},
        };
    },
    created(){
       console.log('--------created 模板渲染前（编辑评价）');
        //获取页面传递数据：
        this.evaluateData =  eval('(' + this.$route.query.evaluateData + ')');
        this.selectProduct.imageUrl = this.evaluateData.itemImg;
        console.log('--->编辑评价: evaluateData= '+zm_jsonToString(this.evaluateData));
        console.log('--->编辑评价: imageUrl= '+this.selectProduct.imageUrl);
        this.request_detailData();

    },
    mounted(){
        console.log('--------mounted 模板渲染后（编辑评价）= '+ zm_getCurrenDate());
        // 修改相片墙 点击事件
        this.changeFilesWallClick();
        let filesWallImage = {
				name: this.evaluateData.itemName,
				url: this.evaluateData.itemImg,
				status: "ready",
			};
        this.bgImg_elUpload_imgFileList.push(filesWallImage);
        this.uploadDisabled = true;
        this.uploadDisplay  = false;
        this.emc_content    = this.evaluateData.content;
        this.emc_type       = this.evaluateData.status;
        this.emc_typeList   = [this.evaluateData.status+'']
        // this.emc_typeList   = ['2'];

    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
               console.log('--->beforeRouteEnter');
                // vm.getData(1,0);
            } else {
                next('/login');
            }
		})
    },
    watch:{
        emc_typeList: function(val) {
            console.log("---emc_typeList= "+ val);
            if (this.emc_typeList.length>=2) {
                this.emc_typeList.splice(0,1);
                this.emc_type = this.emc_typeList[0];
                // console.log("---emc_type= "+ this.emc_type);
            }
        },
        goodsMap(val, oldVal){
            //获取商品
            console.log('-----watch: goodsMap= '+ val);
            console.log('-----watch: goodsMap= '+ zm_jsonToString(val));
            this.imageUrl = "http://sanyetongsj.oss-cn-shanghai.aliyuncs.com/lct/shop/source/OnCGgazX187IQRQ1.jpg";
            let newArr = [];
            val.forEach(function (value, key, map) {
                newArr.push(value)
            });
            this.bgImg_elUpload_imgFileList = [];
            this.selectProduct = newArr[0];
            // console.log('-----watch: newArr= '+ zm_jsonToString(newArr));
            // console.log('-----this.selectProduct.id= '+ this.selectProduct.id);
            let filesWallImage = {
				uid: this.selectProduct.id,
				raw: {
					"uid": this.selectProduct.id
				},
				percentage: 0,
				name: this.selectProduct.name,
				url: this.selectProduct.imageUrl,
				status: "ready",
			};
            this.bgImg_elUpload_imgFileList.push(filesWallImage);
            this.uploadDisabled = true;
            this.uploadDisplay = false;
            // this.spItemprice = this.selectProduct.price;
         },
         deep:true //true 深度监听
    },
    methods:{
        zm_el_checkbox(index){
            console.log('---zm_el_checkbox: index= ' + index);
        },
        zm_timestampToDate(val){
            return zm_timestampToDate(val);
        },
        request_detailData(){
            
            let self = this;
            let urlStr = baseapi.TIP + baseapi.em_detail;
            let params = new FormData();       
            params.append('id', this.evaluateData.id);  
            urlStr = baseapi.TIP + "/order/evaluation/admin/detail";
            // urlStr = "http://172.16.1.218:8080/evaluation/admin/detail"
            console.log('---params：' + zm_formDataToString(params), 'urlStr= ', urlStr)
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.evaluateData.userId,
                }
            }).then(function(res){
                // console.log('---请求详情 res= '+ res.data);
                console.log('---请求详情 data= '+ zm_jsonToString(res.data.data));
                if(res.status ==200){
                    self.emc_evaluateData = res.data.data;
                    // self.emc_evaluateData = res.data.data.mediaList[0];

                    for (let i=0; i <  self.emc_evaluateData.mediaList.length; i++) {
                        const element =  self.emc_evaluateData.mediaList[i];
                        let filesWallImage = {
                            uid: element.oeId,
                            percentage: 0,
                            name: element.type,
                            url: element.url,
                            status: "ready",
                        };
                        self.emc_selfie_imgFileList.push(filesWallImage);
                    }
                    self.selectProduct.itemId   = self.emc_evaluateData.itemList[0].itemId;
                    console.log('--->编辑评价: itemId= '+self.selectProduct.itemId);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
        elUpload_handleRemove(file, fileList) {
			console.log('--文件移除时的钩子：file= ' + file + 'fileList= ' + this.bgImg_elUpload_imgFileList.length);
            this.uploadDisabled = false;
			this.uploadDisplay = true;
		},
		elUpload_handlePictureCardPreview(file) {
			console.log('--文件放大时的钩子：file= ' + file.url);
			this.emc_changeBigImageUrl = file.url;
			this.dialogVisible1 = true;
		},
        emc_selfie_handleRemove(file, fileList) {
            console.log('--自拍：文件移除时的钩子_file= ' + file + '、fileList= ' + fileList.length);
            this.emc_selfie_imgFiles = fileList;
            console.log('--fileList= ' + zm_jsonToString(file));
            // delurls： 需要删除的图片的url数组  emc_delurls
            this.emc_delurls.push(file.url);
		},
		emc_selfie_handlePictureCardPreview(file) {
			console.log('--自拍：文件放大时的钩子_file= ' + file.url);
			this.emc_selfie_dialogImageUrl = file.url;
			this.emc_selfie_dialogVisible = true;
        },
        emc_exceedFile(files, fileList) {
		    console.log('--自拍： 文件超出个数限制时的钩子_file= ' + files.length + '、fileList= ' + fileList.length);
			this.$message({
				message: `只能选择 ${this.emc_selfie_limitNum} 个文件，当前共选择了 ${files.length + fileList.length} 个`,
				type: 'warning'
			});
		},
		emc_fileChange(file, fileList) {
			console.log('---文件状态改变时的钩子： change：file= ' + file + '、fileList= ' + fileList.length);
			console.log('---fileList= ', zm_jsonToString(fileList));
			// console.log('---file= ', zm_jsonToString(file));
			// console.log('---file1= ', file.raw);
            this.emc_selfie_imgFiles = fileList;
			// for(var i = 0; i < fileList.length; i++) {
			// 	var fileDic = fileList[i];
			// 	console.log('---file= ', fileDic.raw);
            // }
		},
        creatCoupon(){
           	this.$router.push('/marketing/coupon/CouponDetail');
        },
        lookDetail(index){
            console.log("---查看" + index);
            //对象转为字符串 传给下个页面
            let itemData = this.giftPackList[index];
            this.$router.push({
                path: "/marketing/coupon/giftPackCreate",
                query: {
                    giftPackData: JSON.stringify(itemData), 
                    isEdit:true
                },
            });
        },
        toClear(){
            console.log('---清空：toClear= ');
            this.emc_content = '';
            this.bgImg_elUpload_imgFileList = [];
            this.uploadDisabled = false;
            this.uploadDisplay = true;
            this.emc_selfie_imgFileList = [];
        },
        saveCilck(type){
            console.log('---保存：saveCilck_type= '+type);
            if(this.selectProduct.imageUrl=='' || this.selectProduct.imageUrl==null){
                this.$message.warning('商品不能为空！');
                return;
            }
            if(this.emc_content=='' || this.emc_content==null){
                this.$message.warning('评论内容不能为空！');
                return;
            }
            let params = new FormData();  
            params.append('content',this.emc_content);
            params.append('no','')
            params.append('status',2)
            params.append('fsService','98');
            params.append('fsLogistics','97');
            params.append('fsGoods','96');
            for (let index = 0; index < this.emc_selfie_imgFiles.length; index++) {
                const element = this.emc_selfie_imgFiles[index];
                params.append('files', element.raw); 
            }
            params.append('itemId',this.selectProduct.itemId);
            params.append('id',this.evaluateData.id); //需要删除的图片的url数组
            params.append('delurls',JSON.stringify(this.emc_delurls)); //需要删除的图片的url数组

            let self = this;
            let urlStr = baseapi.TIP + baseapi.em_update;
            // urlStr = baseapi.TIP + "/order/evaluation/admin/update";
            // urlStr = "http://172.16.1.218:8080/evaluation/admin/update";
            console.log('---params：' + zm_formDataToString(params), 'urlStr= ', urlStr);

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
                'token': this.$cookie.get('token'),
                }
            }).then(function(res){
                console.log('---创建 response= '+zm_jsonToString(res));
                if(res.status ==200){
                    self.loading = false;
                    self.$message.success("保存成功！");
                    //   setTimeout(() =>{
                    //         self.$router.go(-1)
                    //     }, 1000);
                } else {
                    self.$message.error(res.data.message);
                }
            })
        },
        changeFilesWallClick() {
            // 通过js修改 uploadInputType（只点击不选本地照片）
            let self = this;
            let emc_productFilesWall = document.getElementsByClassName("emc_productFilesWall")[0];
            let fileBtn = emc_productFilesWall.getElementsByClassName("el-upload__input")[0];        
            fileBtn.setAttribute("type","button");
            fileBtn.setAttribute("onclick", "uploadInputClick(event)");
            window.uploadInputClick = function(event){
                console.log('---uploadInputClick 选择商品图片');
                self.$refs.goodsSpec.upgoodsvalue = true;
            }
        },
        //提示弹框：'success'  warning
		zm_alterView(message, type, center) {
			var setCenter = true;
			var setType = 'success';
			if(center != null || center != undefined) {
				setCenter = center;
			}
			if(type != null || type != undefined) {
				setType = type;
			}
			this.$message({
				type: setType,
				showClose: true,
				message: message,
				center: setCenter
			});
		},
         //时间处理函数
        dateFormat(row, column, cellValue, index){
            return zm_dateFormat(daterc.time);           
         },
    },
    components:{
        navbar,secnavbar,sidebar,goodsSpec
    }
}
</script>


<style scoped >
/* emc: evaluate Manager Create
   scoped
 */

.emc_typeView{
    margin-top: 8px;
}

/* 商品墙：.product_filesWall  */
.emc_productFilesWall, coupon_filesWall {
	margin-left: 10px;
	width: 600px;
}
.emc_productFilesWall >>> .el-upload-list--picture-card .el-upload-list__item,
.emc_productFilesWall >>> .el-upload--picture-card {
	width: 80px !important;
	height: 80px !important;
}
#emc_productFilesWall >>> .el-upload--picture-card {
    width: 80px !important;
	height: 80px !important;
	line-height: 80px !important;
}
.emc_productFilesWall >>> .disabled .el-upload--picture-card {
	display: none;
}
.emc_productFilesWall >>> .display .el-upload--picture-card {
	display: '';
}


.emc_btnView{
    display: flex;
    margin-bottom: 100px;
    justify-content: center;
}
.emc_saveBtn {
    margin: 0px 0 0px 40px;
}
.emc_saveBtn1 {
    margin-left:-50px;
}
.emc_itemView{
    margin: 10px 10px 40px 10px;
}
.emc_title{
    margin-bottom: 8px;
}

.zm_dl{
    display: flex;
    margin: 10px 10px 40px 10px;
}
.zm_dl_title1{
    margin-top: 8px;
}

.emc_content{
    width: 400px;
    /* height: 26px; */
}


</style>



   
            
           