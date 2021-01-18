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
                    <!-- 面包屑 -->
                    <!-- <div class="mh-coupon-divtop">
                         <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/marketing' }">营销概况</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/marketing/qiangGouing' }">抢购</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/marketing/qiangGou/setting_page' }">收益排行榜</el-breadcrumb-item>             
                        </el-breadcrumb>   
                    </div> -->
                    <!-- 面包屑over -->


                    <!-- 收益排行榜设置（假数据列表，给用户看的） -->
                    <br>
                    <div>
                        <div class="zm_title5">评价管理</div><br>
                        <!-- 1.1 差评隐藏 -->
                        <div>  
                            <div class="edit-item goods-item goods-set">
                                <div  class="edit-info">
                                    <h3>差评隐藏</h3>
                                    <p>开启该开关后 所有差评将只有评价者能看到自己发布的差评 其他用户看不到  但可在列表上关闭部分差评的隐藏开关 显示部分差评。</p>
                                </div>
                                <div class="goods-item-ctn">
                                    <el-switch v-model="evaHideBad" @change="em_hideClick(1)"></el-switch>
                                </div>
                            </div>              
                        </div>
                        <!-- 1.2 中评隐藏 -->
                        <div>  
                            <div class="edit-item goods-item goods-set">
                                <div  class="edit-info">
                                    <h3>中评隐藏</h3>
                                    <p>开启该开关后 所有中评将只有评价者能看到自己发布的中评 其他用户看不到  但可在列表上关闭部分中评的隐藏开关 显示部分中评</p>
                                </div>
                                <div class="goods-item-ctn">
                                    <el-switch v-model="evaHideOrdinary" @change="em_hideClick(2)"></el-switch>
                                </div>
                            </div>              
                        </div>

                        <br>
                        <div class="rank_zmSerachView">
                            <el-select class="em_typeOptions" v-model="userType" placeholder="请选择" size="mini">
                                <el-option v-for="item in rankOptions" 
                                    :key="item.value" :label="item.label" :value="item.value">
                                </el-option>
                            </el-select>
                             <el-input class="rank_searchInput" v-model="zm_searchInput" placeholder="商品/用户名称" size="medium">
                                <el-button slot="append" icon="el-icon-search" @click="zmSearchClick()"></el-button>
                            </el-input>
                            <el-date-picker class="em_dateView" v-model="dateValue"
                                value-format="timestamp" type="daterange" style="width: 260px"
                                start-placeholder="开始日期" range-separator="至"
                                end-placeholder="结束日期">
                            </el-date-picker>
                            <el-button style="margin: 0px 0 0 10px; height:32px" @click="zmSearchClick"  type="primary" size="mini">搜索</el-button>
                            <el-button style="margin: -3px 0 0 10px;" @click="zm_clearSearchDataClick"  type="text" >清空筛选条件</el-button>
                        </div>

                        <el-button class="good_createEvaluate" type="primary" plain size="medium"  @click="addRankClick(1)"> 
                         创建评论
                        </el-button>

                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="全部" name="first"></el-tab-pane>
                            <el-tab-pane label="好评" name="second"></el-tab-pane>
                            <el-tab-pane label="中评" name="third"></el-tab-pane>
                            <el-tab-pane label="差评" name="four"></el-tab-pane>
                        </el-tabs>

                        <!-- 列表 -->
                        <el-table :data="emListData" border class="em_evaluateTable" >
                            <el-table-column label="用户"  width="150" align="center">  
                                <template slot-scope="scope">
                                   <div style="display: flex;">
                                        <img class="em_goodHeaderImg" :src="scope.row.userHeadPortrait" />
                                        <div class="em_goodName">
                                            <div>ID: {{scope.row.userId}}</div>  
                                            <div>{{scope.row.userNickName}}</div>
                                        </div>
                                   </div>
                                </template>
                            </el-table-column>

                            <el-table-column label="时间" align="center" prop="createTime" :formatter="dateFormat"  width="90"> 
                            </el-table-column>

                            <el-table-column label="评价内容" align="center"> 
                                <template slot-scope="scope">
                                    <div > {{limitEvaluateContent(scope.row)}}  </div>
                                </template>
                             </el-table-column>
                            <el-table-column label="类型" width="50" align="center"> 
                                <template slot-scope="scope">
                                    <div v-if="scope.row.status==2">好评</div>
                                    <div v-else-if="scope.row.status==1">中评</div>
                                    <div v-else-if="scope.row.status==0">差评</div>
                                </template>
                            </el-table-column>
                            <el-table-column label="来源" width="50" align="center" > 
                                <template slot-scope="scope">
                                    <div v-if="scope.row.userType==2">后台</div>
                                    <div v-else-if="scope.row.userType==1" class="em_user">用户</div>
                                </template>
                            </el-table-column>
                            <el-table-column label="关联商品"  width="150" align="center">  
                                <template slot-scope="scope">
                                   <div style="display: flex;" >
                                        <img class="em_goodImg" :src="scope.row.itemImg" />
                                        <div class="zm_evaluateGoodName">
                                            <div>{{scope.row.itemName}}</div>
                                        </div>
                                   </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="隐藏开关" width="80" align="center" > 
                                <template slot-scope="scope">
                                    <el-switch v-model="scope.row.isDelete" active-color="#13ce66" inactive-color="#DCDFE6" 
								    :active-value='2' :inactive-value='0'  @change="changeSwitch(scope.$index, scope.row)">
							        </el-switch>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作" width="150" align="center" > 
                                <template slot-scope="scope">
                                    <div v-if="scope.row.userType==2">
                                        <el-button class="" size="medium" type="text" @click="em_copyClick(scope.$index)"> 复制评论 </el-button>
                                        <el-button class="" size="medium" type="text" @click="em_editClick(scope.$index)"> 编辑 </el-button>
                                        <img class="deleteRankBtn" @click="deleteRankClick(scope.$index)" src="../../../static/images/icon/delete_blue1.png" alt="">
                                    </div>
                                    <div v-else-if="scope.row.userType==1">
                                        <el-button class="" size="medium" type="text" @click="em_lookClick(scope.$index)"> 查看 </el-button>
                                        <img class="deleteRankBtn" @click="deleteRankClick(scope.$index)" src="../../../static/images/icon/delete_blue1.png" alt="">
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                        <!-- small sizes 分页-->
                        <div class="goods_list_dibu-seven em_evaluatePage">
                            <el-pagination @current-change="handleCurrentChange" 
                            :current-page="currentPage" 
                            :page-size="rankPageSize" 
                            :total="totalCount" background layout="total, prev, pager, next, jumper">
                            </el-pagination>
                        </div>
                    </div>
                   

                    <!-- 查看：评论信息 -->
                    <el-dialog title="评论信息" :visible.sync="em_lookDialogVisible" min-width="70%">
                        <div class="em_evaluateMsg">
                            <img class="em_infoHeaderImg" :src="imageUrl" alt="" srcset="">
                            <div class="em_infoName">{{userNickName}}</div>
                            <div class="em_infoTime">{{zm_timestampToDate(createTime.time)}}</div>
                        </div>
                        <div class="em_evaluateMsg">
                            <div class="em_infoContent">{{content}}</div>
                        </div>

                        <div class="em_productFilesWall" id="em_productFilesWall">
                            <el-upload scoped list-type="picture-card" :class="{disabled:uploadDisabled, 'display':uploadDisplay}" 
                                :multiple="bgImg_elUpload_multipleImg" :file-list='bgImg_elUpload_imgFileList' 
                                :limit=bgImg_elUpload_limitNum :auto-upload="false" accept="image/png,image/gif,image/jpg,image/jpeg" 
                                :on-preview="elUpload_handlePictureCardPreview" disabled="false"
                            >
                                <i scoped class="el-icon-plus "></i>
                            </el-upload>
                            <el-dialog :visible.sync="em_dialogVisible" append-to-body>
                                <img width="100%" :src="emc_changeBigImageUrl" alt="">
                            </el-dialog>
                        </div>

                        <el-button class="zm_saveBtn" type="primary" size="medium" @click="em_infoCloseClick">关闭</el-button>
                    </el-dialog>
                    <br><br><br><br><br><br>


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
        zm_formDataToString,
        zm_copyToClip
    } from "../../filters/zm_tools"
import {
    zm_translateImgToBase64,    
    zm_translateBase64ImgToFile,
    zm_translateBase64ImgToBlob,
    zm_getBase64,
    zm_getBase64Image,
    zm_imgToBase64,
    zm_dataURLtoFile
} from "../../filters/zm_image"
import { zm_dateFormat } from '../../filters/zm_dateTime';

export default {
    data() {
        return {
            spAutostaues:false,
            spusAutoRefund:false,
            dateValue:[],
            rankOptions: [
                {
                value: '0',
                label: '全部'
                }, 
                {
                value: '1',
                label: '用户'
                }, {
                value: '2',
                label: '后台'
            }],
            timeStart: '',
            timeEnd: '',
            userType: '',
            zm_searchInput: '',
            currentPage: 1,
			totalCount: 0,
			rankPageSize: 20,
            //
            em_lookDialogVisible: false,
            emListData:[],
            emItemData: '',
            // imageUrl: '',
            imageFile: '',
            imageBase64: '',
            //图片浏览墙（背景图）
			imgBig_dialogImageUrl: '',
			imgBig_dialogVisible: false,
			bgImg_elUpload_multipleImg: true,
			bgImg_elUpload_limitNum: 9,
			bgImg_elUpload_imgFileList: [],
			uploadDisabled: false,
			uploadDisplay: true,
			changeBgImg: false,
            imageUrl: 'http://sanyetongsj.oss-cn-shanghai.aliyuncs.com/lct/shop/source/nUoHG99WsYB0KJhx.jpg',
            emc_changeBigImageUrl: '',
            em_dialogVisible: false,
            //查看
            userHeadPortrait: '',
            userNickName: '',
            createTime: '',
            content: '',
            //itemView
			activeName: 'first', 
            itemIndex:0,
            status: '',
            lookDetailData: '',
            settingData: '',
            evaHideBad: false,
			evaHideOrdinary: false,
        };
    },
    created(){
       //console.log('--------created 模板渲染前= '+ zm_timestampToDate(1533293827000));
       this.request_emList();
    },
    mounted(){
       console.log('--------mounted 安装初始化成功：模板渲染后= '+ zm_getCurrenDate());
       this.em_requestSettingData();
    },
    watch: {
         dateValue: function(val) {
		    console.log('---selectDate: ' + val)
			if(val && val!='' && val.length>0) {
				// this.timeStart = zm_standardDateToFormatDate(val[0], 1);
                // this.timeEnd = zm_standardDateToFormatDate(val[1], 1);
                this.timeStart = val[0];
                this.timeEnd = val[1];
                console.log("---timeStart= "+ this.timeStart+ "、timeEnd= "+this.timeEnd);
			}
        },
        em_lookDialogVisible: function (val) {
            //console.log('em_lookDialogVisible: ' + val)
            if (val==false) {
                this.bgImg_elUpload_imgFileList = [];
                this.uploadDisabled = false;
                this.uploadDisplay = true;
            }
        },
        userType: function (val) {
            console.log('userType: ' + val);
            this.currentPage = 1;
            this.request_emList();
        },
    },
    methods:{
        limitEvaluateContent(row,index){
            if (row.content.length>30) {
                return row.content.substring(0, 30);
            } else {
                return row.content;
            }
        },
        //时间处理函数
        dateFormat(row, column, cellValue, index){
           const daterc = row[column.property];
           return zm_dateFormat(daterc.time);          
        },
        zm_timestampToDate(val){
            return zm_timestampToDate(val);
        },
        em_requestSettingData(){
            //设置回显
            let self = this;
            let urlStr = baseapi.userIP + baseapi.setting_detail;
            let params = new FormData();    
            params.append('spuinfo', 1);   
            params.append('suserId', this.$cookie.get('suserId'));   
            // urlStr = baseapi.TIP + "/user/setting/detail";

            // urlStr = "http://172.16.1.218:8080/user/user/rcm/setting/detail"
            // urlStr = "http://172.16.1.218:8080/setting/detail"
            // urlStr = "http://172.16.1.218:8080/rcm/setting/detail"
            // urlStr = "http://saas.chainfos.com/user/user/rcm/setting/detail"
            // urlStr = "http://api.chainfos.com/user/setting/detail"
            urlStr = "http://saas.mihuanshop.com/user/user/setting/detail"


            console.log('---params：' + zm_formDataToString(params), 'urlStr= ', urlStr)
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),
                }
            }).then(function(res){
                console.log('---设置回显 res' + zm_jsonToString(res.data))
                if(res.data.status==200){
                    self.settingData = res.data.setting;
                    if (self.settingData.evaHideBad!=null) {
                        self.evaHideBad = Boolean(self.settingData.evaHideBad*1);
                    }
                    if (self.settingData.evaHideOrdinary !=null) {
                        console.log('---evaHideOrdinary');
                        self.evaHideOrdinary = Boolean(self.settingData.evaHideOrdinary*1);
                    }
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
        em_hideClick(type){
            //隐藏评论（1.隐藏差评、2.隐藏中评）
            let self = this;
            let urlStr = baseapi.TIP + baseapi.setting_update;
            let params = new FormData();       
            if (type==1) {
                params.append('evaHideBad', this.evaHideBad*1);
            } else if (type==2) {
                params.append('evaHideOrdinary', this.evaHideOrdinary*1);
            }
            // urlStr = baseapi.TIP + "/user/setting/admin/update";
            // urlStr = "http://172.16.1.218:8080/setting/admin/update"
            console.log('---params：' + zm_formDataToString(params), 'urlStr= ', urlStr)
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),
                }
            }).then(function(res){
                console.log('---隐藏评论 res' + zm_jsonToString(res.data))
                if(res.data.status==200){
                    self.$message.success('保存成功！');
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
        changeSwitch(index){
            //评论（显示/隐藏： 0所有人可见、2隐藏）
            var item = this.emListData[index];
            let self = this;
            let urlStr = baseapi.TIP + baseapi.em_invisible;
            let params = new FormData();       
            params.append('id', item.id);  
            params.append('invisible', item.isDelete); 
            // urlStr = baseapi.TIP + "/order/evaluation/admin/invisible";
            // urlStr = "http://172.16.1.218:8080/evaluation/admin/invisible"
            // console.log('---changeSwitch= '+item.id +"\n isDelete= "+item.isDelete);
            // console.log('---params：' + zm_formDataToString(params), 'urlStr= ', urlStr)
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': item.userId,
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),
                }
            }).then(function(res){
                // console.log('---评论（显示、隐藏）res' + zm_jsonToString(res))
                if(res.data.status==200){
                    self.$message.success('保存成功！');
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
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
        handleClick(tab, event) {
            console.log('---tab.index= ', tab.index);
            this.itemIndex = tab.index;
			if(tab.index == 0) {        this.status = '';
			} else if(tab.index == 1) { this.status = '2';
			} else if(tab.index == 2) { this.status = '1';
			} else if(tab.index == 3) { this.status = '0';
			}
			this.currentPage = 1;
			this.request_emList();
	    },
        // 0.不排序 1.正序 2.倒序
        zmSearchClick(){
            //console.log('---zmSearchClick= '+this.zm_searchInput);
            this.currentPage = 1;
            this.request_emList();
        },
        zm_clearSearchDataClick(){
            this.zm_searchInput = '';
            this.userType = '';
            this.timeStart = '';
            this.timeEnd = '';
            this.dateValue = [];
        },
        handleCurrentChange: function(currentPage) {
			//分页：点击第几页（请求分页数据：改变时会触发	当前页currentPage） 
			console.log('---当前页 currentPage= ', currentPage)
			this.currentPage = currentPage
			this.request_emList();
		},
        elUpload_handleRemove(file, fileList) {
            //console.log('--文件移除时的钩子：file= ' + file + 'fileList= ' + fileList);
            this.imageFile = '';
            this.uploadDisabled = false;
			this.uploadDisplay = true;
		},
		elUpload_handlePictureCardPreview(file) {
			console.log('--文件放大：file= ' + file.url);
			this.emc_changeBigImageUrl = file.url;
			this.em_dialogVisible = true;
        },
        //---------------------评论列表--------------------- 
        request_emList(){
            let self = this;
            let params = new FormData(); 
            params.append('page', this.currentPage);  
            params.append('limit', 20);
            params.append('timeStart', this.timeStart);
            params.append('timeEnd', this.timeEnd);
            params.append('userType',this.userType);
            params.append('status', this.status);
            params.append('kw', this.zm_searchInput);
            let urlStr = baseapi.TIP + baseapi.em_list;
            // urlStr = baseapi.TIP + "/order/evaluation/admin/list";
            // urlStr = "http://172.16.1.218:8080/evaluation/admin/list"

            console.log('---评论列表 urlStr= '+urlStr + '\n params= '+ zm_formDataToString(params));
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                headers:{
                'Content-Type':'application/json',
                'suserId': this.$cookie.get('suserId'),
                }
            }).then(function(res){
                console.log('---评论列表：response= '+zm_jsonToString(res.data));
                console.log('---评论列表: totalCount= '+res.data.totalCount);
                if(res.status ==200){
                    if (res.data) {
                        if (res.data.list.length>0) {
                            self.emListData = res.data.list;
                            self.totalCount = res.data.totalCount;
                        }else{
                            self.emListData = [];
                            self.totalCount = res.data.totalCount;
                        }
                    }
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                console.log('---评论列表：response= '+zm_jsonToString(res));
            })
        },
        addRankClick(type){
            //创建评论
            this.$router.push('/goodslist/goods_evaluateManagerCreate');
        },
         em_editClick(index){
            //编辑响应
            console.log('---编辑 em_editClick= '+index);
            let itemData = this.emListData[index];
            this.$router.push({
                path:'/goodslist/goods_evaluateManagerEdit',
                query:{
                    evaluateData:JSON.stringify(itemData),
                }
            })
        },
        em_infoCloseClick(){
            //关闭（查看详情）
            this.em_lookDialogVisible = false;
        },
        em_lookClick(index){
            //打开（查看详情）
            this.bgImg_elUpload_imgFileList = [];
            this.emItemData = this.emListData[index];
            this.em_lookDialogVisible = true;
            //console.log('---emItemData index= '+index);
            //console.log('---emItemData= '+zm_jsonToString(this.emItemData));
            var uploadItem = {
				uid: this.emItemData.spraId,
				raw: {
					"uid": this.emItemData.spraId
				},
				percentage: 0,
				name: this.emItemData.spraUsername,
				url: this.emItemData.spraUserheadurl,
				status: "ready",
			};
            // this.bgImg_elUpload_imgFileList.push(uploadItem);
            // this.bgImg_elUpload_imgFileList.push(uploadItem);
            // this.bgImg_elUpload_imgFileList.push(uploadItem);
            
            this.uploadDisabled = true;
            this.uploadDisplay = false;
            this.userHeadPortrait= this.emItemData.userHeadPortrait;
            this.userNickName = this.emItemData.userNickName;
            this.content = this.emItemData.content;
            this.createTime = this.emItemData.createTime;
        },
        deleteRankClick(index){
            //删除评论
            let item = this.emListData[index];
            let self = this;
            let urlStr = baseapi.TIP + baseapi.em_delete;
            let params = new FormData();       
            params.append('id', item.id);  
            // urlStr = baseapi.TIP + "/order/evaluation/admin/delete";
            // urlStr = "http://172.16.1.218:8080/evaluation/admin/delete"
            console.log('---params：' + zm_formDataToString(params), 'urlStr= ', urlStr)
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': item.userId,
                }
            }).then(function(res){
                if(res.status ==200){
                    self.emListData.splice(index, 1);
                    self.$message.success('删除成功！');
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
         em_copyClick(index){
            //复制
            console.log('---复制em_copyClick= '+index);
            let item = this.emListData[index];
            // if (zm_copyToClip(item.content)) {
            //     this.$message.success('复制成功！');
            // }else{
            //     this.$message.warning('无评论内容！');
            // }
            let self = this;
            let urlStr = baseapi.TIP + baseapi.em_copy;
            let params = new FormData();       
            params.append('id', item.id);  
            // urlStr = baseapi.TIP + "/order/evaluation/admin/copy";
            // urlStr = "http://172.16.1.218:8080/evaluation/admin/copy"
            console.log('---params：' + zm_formDataToString(params), 'urlStr= ', urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': item.userId,
                }
            }).then(function(res){
                console.log('---复制res= '+zm_jsonToString(res));
                if(res.status ==200){
                    self.request_emList();
                    self.$message.success('复制成功！');
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
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
		}
    },
    components:{
        navbar,sidebar,secnavbar
    }
}
</script>

<style scoped>

.em_user{
    color: rgba(10, 105, 230, 0.692);
}
.em_typeOptions {
    width: 100px;
}
.em_dateView{
 margin: 0 20px 0 20px;
}
.em_infoHeaderImg{
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
.em_infoName{
    margin: 10px 10px 10px 10px;
}
.em_infoTime{
    margin: 10px 10px 10px 100px;
}
.em_infoContent{
    width: 400px;
    color: #333;
}

.rank_zmSerachView{
    margin: 20px 0 10px 0;
    display: flex;
}
.rank_searchInput {
	width: 255px;
    margin: 0px 0 0px 20px;
}        

.goods_list_dibu-seven{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}
.em_evaluateTable{
    color: #333;
}
.em_evaluatePage{
    margin-top: 20px;
}
.em_evaluateMsg{
    display: flex;
    margin: 0px 0 40px 0;
}
/* 商品墙 */
.em_productFilesWall {
	margin-left: 10px;
	width: 400px;
}
.em_productFilesWall >>> .el-upload-list--picture-card .el-upload-list__item,
.em_productFilesWall >>> .el-upload--picture-card {
	width: 80px !important;
	height: 80px !important;
}
#em_productFilesWall >>> .el-upload--picture-card {
    width: 80px !important;
	height: 80px !important;
	line-height: 80px !important;
}
.em_productFilesWall >>> .disabled .el-upload--picture-card {
	display: none;
}
.em_productFilesWall >>> .display .el-upload--picture-card {
	display: '';
}
.em_productFilesWall >>> .el-upload-list--picture-card .el-upload-list__item-status-label {
    /* 隐藏选中对勾 */
	/* display: none; */
    /* background: #ffffff; */
    width: 0px;
    height: 0px;
}


.em_goodHeaderImg{
    height: 40px;
    width: 40px;
    margin: 5px 0 0 0px;
    border-radius: 20px;
}
.em_goodImg{
    height: 40px;
    width: 40px;
    margin: 5px 0 0 0px;
}
.em_goodName{
    margin: 0px 0 0 10px;
}
.zm_evaluateGoodName{
    margin: 15px 0 0 10px;
}
.zm_saveBtn {
    margin: 50px 0 100px 40%;
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
    margin: 20px 0 10px 0px;
}

</style>



   
            
           