<template>
<!-- 创建 -->
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->

    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <marknav></marknav>
            <div class="main-goods-right">
                <!-- 创建内容 -->
                <div>
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing">
                    <!-- 面包屑 -->
                    <div class="mh-coupon-divtop">
                         <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/marketing' }">营销概况</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/marketing/taskPlugin' }">邀请任务</el-breadcrumb-item>
                            <el-breadcrumb-item :to="{ path: '/marketing/taskPlugin/it_create' }">创建任务</el-breadcrumb-item>             
                        </el-breadcrumb>   
                    </div>
                    <!-- 面包屑over -->


                    <br><br>
                    <div class="zm_title3">基础信息</div>
                    <div class="zm_dl">
                        <div class="zm_it_title1">活动名称：</div>
                        <el-input v-model="itName" class="activityName"  placeholder=""></el-input>
                    </div>

                    <div class="zm_dl sx-input">
                        <div class="zm_it_title1">奖励类型：</div>
                        <el-select v-model="prizeKind" placeholder="请选择首页">
                            <el-option v-for="item in options1" :label="item.label"
                                :key="item.value" 
                                :value="item.value">
                            </el-option>
                        </el-select>
                    </div>

                    <div class="zm_dl sx-input">
                        <div class="zm_it_title1">条件设置：</div>
                        <!-- 1、现金红包 -->
                        <div v-bind:class="[prizeKind==3 ? displayRewardType1 : displayRewardType0]">
                            <div class="zm_title3">现金红包</div>
                            <div class="">
                                <div class="it_hongBaoInvitate">
                                    用户邀请
                                    <el-input v-model="inviteorNum" class="companyEarnings2 zm_elInput" size="mini" type="number" placeholder=""></el-input>
                                    个新用户可获得
                                </div>
                                <div class="it_hongBaoTypeView">
                                    <el-checkbox-group class="" v-model="honBaoCheckedList" @change="handleCheckedHonBaoChange">
                                        <el-checkbox v-for="city in honBaoList" :label="city.id" :key="city.id">{{city.name}}</el-checkbox>
                                    </el-checkbox-group>
                                    
                                </div>
                                <div v-bind:class="[isHongBaoGDMoney ? it_hongBaoGDMoney1 : it_hongBaoGDMoney2]"> 
                                     固定红包金额为
                                    <el-input v-model="fixedMoney" class="companyEarnings2 zm_elInput" size="mini" type="number" placeholder=""></el-input>
                                    元
                                </div>
                                <div v-bind:class="[isHongBaoMoney ? it_hongBaoMoney1 : it_hongBaoMoney2]">
                                    <div class="partAward">
                                        红包最高金额为
                                        <el-input v-model="maxMoney" class="companyEarnings2 zm_elInput" size="mini" type="number" placeholder=""></el-input>
                                        元
                                    </div>
                                    <div class="partAward">
                                        红包最低金额为
                                        <el-input v-model="minMoney" class="companyEarnings2 zm_elInput" size="mini" type="number" placeholder=""></el-input>
                                        元
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- 2、抢购优惠券 -->
                        <div v-bind:class="[prizeKind==1 ? displayRewardType2 : displayRewardType0]">
                            <div class="zm_title3">抢购优惠券</div>
                            <div class="it_qiangGouYouHuiQuan">
                                老用户邀请 &nbsp;
                                <el-input v-model="inviteorNum" class="companyEarnings2 zm_elInput" size="mini" type="number" placeholder=""></el-input>
                                 &nbsp; 个新用户可获得一张价值99.9的抢购优惠券  免费参与抢购活动 
                            </div>
                        </div>
                        <!-- 3、积分 -->
                        <div v-bind:class="[prizeKind==2 ? displayRewardType3 : displayRewardType0]">
                            <div class="zm_title3">积分</div>
                            <div class="it_qiangGouYouHuiQuan">
                                老用户每邀请1个新用户可获得 &nbsp;
                                <el-input v-model="integralNum" class="companyEarnings2 zm_elInput" size="mini" type="number" placeholder=""></el-input>
                                 &nbsp; 积分
                            </div>
                        </div>
                        <!-- 4、优惠券 -->
                        <div v-bind:class="[prizeKind==4 ? displayRewardType4 : displayRewardType0]">
                            <div class="zm_title3">优惠券</div>
                            <div class="it_qiangGouYouHuiQuan">
                                老用户邀请 &nbsp;
                                <el-input v-model="inviteorNum" class="companyEarnings2 zm_elInput" size="mini" type="number" placeholder=""></el-input>
                                 &nbsp; 个新用户可获得总额 &nbsp;     
                                <el-input v-model="totalMoney"  disabled  class="companyEarnings2 zm_elInput" size="mini" type="number" placeholder=""></el-input>
                                 元 &nbsp; 的优惠券  
                            </div>

                            <el-button class="it_addYouHuiQuan" plain size="mini" @click="addCouponClick">添加优惠券</el-button>

                            <!-- selectTableData、 multipleSelection-->
                            <div class="selectTableDataView">
                                <el-table :data="multipleSelection" class="selectDataView" width="100%" border :show-header="false"
                                :row-style="{height:'40px'}" 
                                :cell-style="{padding:'0px'}" 
                                >
                                    <el-table-column label="状态">
                                        <template slot-scope="scope">
                                        <div class="selectCouponView">
                                            <div  class="couponInfoView">
                                                <div class="couponMoneyView">
                                                <div class="couponMoneyText"> ￥{{scope.row.tpcMoney/100}} </div>
                                                <div class="restrictMoneyView">
                                                    <div class="couponName">{{scope.row.tpcName}}</div>
                                                    <div>满{{scope.row.tpcRestrictMoney/100}}元可用</div>
                                                </div>
                                                </div>
                                                <div class="lineView"></div>
                                                <div>有效期：{{zm_timestampToDate(scope.row.tpcEndtime)}}前</div>
                                            </div>
                                            <div>
                                                <img @click="trashClick(scope.$index)" class="trashImgView" src="../../../../static/images/icon/trash.png" alt="">
                                            </div>
                                        </div>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>

                        </div>

                        <!-- 5、商品 -->
                        <div v-bind:class="[prizeKind==5 ? displayRewardType5 : displayRewardType0]">
                            <div class="zm_title3">商品：</div>
                            <div class="product_filesWall" id="product_filesWall">
                                <el-upload action="#" scoped list-type="picture-card" :class="{disabled:uploadDisabled, 'display':uploadDisplay}" 
                                    :multiple="bgImg_elUpload_multipleImg" :file-list='bgImg_elUpload_imgFileList' 
                                    :limit=bgImg_elUpload_limitNum :auto-upload="false" accept="image/png,image/gif,image/jpg,image/jpeg" 
                                    :on-preview="elUpload_handlePictureCardPreview" 
                                    :on-remove="elUpload_handleRemove">
                                    <i scoped class="el-icon-plus avatar-uploader-icon"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible1">
                                    <img width="100%" :src="dialogImageUrl1" alt="">
                                </el-dialog>
                            </div>
                        </div>
                        <!-- <div v-bind:class="[prizeKind==5 ? displayRewardType6 : displayRewardType0]">
                            66
                        </div> -->
                    </div>


                    <div class="zm_dl">
                        <div class="zm_it_title1">任务时间：</div>
                        <el-input v-model="effectTime" class="it_restrict zm_elInput" type="number" placeholder=""></el-input> 
                        <div class="zm_it_title1"> &nbsp;&nbsp;小时 </div>
                    </div>

                    <div class="zm_dl">
                        <div class="zm_it_title1 it_num">数 量：&nbsp;&nbsp;&nbsp;</div>
                        <el-input v-model="totalNum" class="it_restrict zm_elInput" type="number" placeholder=""></el-input> 
                    </div>


                        <!-- 优惠券选择 -->
                        <el-dialog title="优惠券选择" :visible.sync="dialogCouponTableVisible" width="70%">
                            <el-table :data="couponTableData" width="100%" border ref="multipleTable"
                                :row-style="{height:'40px'}" 
                                :cell-style="{padding:'0px'}" 
                                @select="handleSelect"
                                @selection-change="handleSelectionChange">
                            >
                                <el-table-column type="selection" width="50" align="center"> </el-table-column>
                                <el-table-column property="tpcName" label="优惠券名称" width="150" align="center"></el-table-column>
                                <el-table-column property="tpcRestrictMoney" label="面额/门槛" width="100" align="center"></el-table-column>
                                <el-table-column label="状态" width="70px" align="center">
                                    <template slot-scope="scope">
                                        <div v-if="scope.row.tpcState==1">待开始</div>
                                        <div v-else-if="scope.row.tpcState==2">进行中</div>
                                        <div v-else-if="scope.row.tpcState==3">已结束</div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="有效时间" align="center">
                                    <template slot-scope="scope" align="left">
                                        <div>
                                            {{zm_timestampToDate(scope.row.tpcStarttime)}} ~ {{zm_timestampToDate(scope.row.tpcEndtime)}}
                                        </div>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <div slot="footer" class="dialog-footer">
                                <el-button @click="dialogCouponTableVisible = false">取消</el-button>
                                <el-button type="primary" @click="selectCouponCilick">确定</el-button>
                            </div>
                        </el-dialog>

                    
                        <br><br>
                        <goodsSpec ref="goodsSpec"></goodsSpec>
                        <el-button class="msc_saveBtn" type="primary"  @click="saveCilck">保存</el-button>
                    
                    </div>    
                    


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


import navbar from '../../navbar';
import sidebar from '../../sidebar';
import marknav from '../marknav';
import network from '../../../utils/api';
import goodsSpec from '../../resource/goodsSpec_mh1.vue';
import VueCookie from 'vue-cookie';
import {    
        zm_fundsSetup,
        zm_getList1,
        zm_getList
    } from "../../../filters/zm_data"
import {
        zm_jsonToString,
        zm_formDataToString,
        zm_tipsMsg,
        zm_timestampToDate,  
        zm_DateToTimestamp,  
        zm_getCurrenDate,
        zm_getCurrenTimestamp,
        zm_standardDateToFormatDate
} from "../../../filters/zm_tools"

export default {
    data() {
        return {
            itName: '',
            prizeKind: 3,
            effectTime: '',
            totalNum: '',
            inviteorNum: '',
            integralNum: '',
            redpackageType: '',
            maxMoney: '',
            minMoney: '',
            fixedMoney: '',
            couponIds: '',
            itemId: '',
            totalMoney: '',
            skuId: '',
            mipId: '',

            it_status: false,
            spItemprice: '',
            tableData: [],
            it_activityId: '',
            it_itemData: '',
            it_isEdit: false,
                        
            honBaoList: [],
            honBaoCheckedList: [1],

            displayRewardType0:'displayRewardType0',
            displayRewardType1:'displayRewardType1',
            displayRewardType2:'displayRewardType2',
            displayRewardType3:'displayRewardType3',
            displayRewardType4:'displayRewardType4',
            displayRewardType5:'displayRewardType5',
            displayRewardType6:'displayRewardType6',
            options1: [{
                value: 3,
                label: '现金红包'
                }, {
                value: 1,
                label: '抢购优惠券'
                }, {
                value: 2,
                label: '积分'
                }, {
                value: 4,
                label: '优惠券'
                }, {
                value: 5,
                label: '商品'
                }
            ],
            isHongBaoGDMoney: false,
            isHongBaoMoney: true,
            it_hongBaoGDMoney1: 'it_hongBaoGDMoney1', 
            it_hongBaoGDMoney2: 'it_hongBaoGDMoney2',
            it_hongBaoMoney1: 'it_hongBaoMoney1', 
            it_hongBaoMoney2: 'it_hongBaoMoney2',


            tpcpTpcIdArray: '',
            huiXianList: [],
            couponTableData: [],
            dialogCouponTableVisible: false,
            confirmCouponSelect: false,
            selectTableData: [],
            multipleSelection: [],
            originSelection: [],
            currentSelection: [], 
            getTaskData: '',
            taskHuiXianData: '',
            isEdit: false,
            isRequestEnd: 0,

            //图片浏览墙（背景图）
			imgBig_dialogImageUrl: '',
			imgBig_dialogVisible: false,
			bgImg_elUpload_multipleImg: true,
			bgImg_elUpload_limitNum: 1,
			bgImg_elUpload_imgFileList: [],
			bgImg_elUpload_imgFileListAll: [],
			bgImg_elUpload_imgFiles: [],
			uploadDisabled: false,
			uploadDisplay: true,
			changeBgImg: false,
            imageUrl: 'http://sanyetongsj.oss-cn-shanghai.aliyuncs.com/lct/shop/source/nUoHG99WsYB0KJhx.jpg',
            dialogImageUrl1: '',
            dialogVisible1: false,
            //商品
            goodsMap:new Map(),
            sPrice:'',
            selectProduct: {},

        };
    },
    created(){
        // //获取页面传递数据
        this.getTaskData =  eval('(' + this.$route.query.itemData + ')');
        this.it_isEdit   =  this.$route.query.isEdit;
        console.log('--------created 模板渲染前 it_isEdit= '+this.it_isEdit);
        // console.log('---邀请任务编辑: it_itemData= '+zm_jsonToString(this.it_itemData));
    },
    mounted(){
        console.log('--------mounted 安装初始化成功：模板渲染后= '+ "创建邀请任务活动");
        const cityOptionList = [{
            name: '随机红包',
            id: 1
        }, {
            name: '固定金额红包',
            id: 2
        }];
        this.honBaoList = cityOptionList;
        if(this.it_isEdit){
            console.log('--->数据回显 编辑任务: isEdit= '+zm_jsonToString(this.it_itemData));
            this.itName = this.getTaskData.name;
            this.tpcpTpcIdArray = this.getTaskData.couponIds;
            this.prizeKind = this.getTaskData.prizeKind;
            if (this.getTaskData.prizeKind == 4) {
                // this.itName = this.getTaskData.name;
            }
            // this.requestHuiXianData();
            this.request_taskHuiXianData();
        }
        // 图片墙处理
        this.changeFilesWallClick();
        // 查询优惠券列表
        this.requestCouponData();
        // this.request_taskHuiXianData();

    },
    watch:{
        honBaoCheckedList: function(val) {
            // console.log("---honBaoCheckedList= "+ val);
            if (val.length==1) {
                if (val[0]==1) {
                    this.isHongBaoGDMoney = false;
                    this.isHongBaoMoney   = true;
                }else if (val[0]==2){
                    this.isHongBaoGDMoney = true;
                    this.isHongBaoMoney   = false;
                }
            }
        },
        dialogCouponTableVisible(value) {
            console.log("---dialogCouponTableVisible= "+ value);
            if (value==false) {
                if (this.confirmCouponSelect==false) {
                    // console.log('---关闭了 length: ' + this.multipleSelection.length);
                    var mulLength = this.multipleSelection.length;
                    for (let i = 0; i < mulLength; i++) {
                        // console.log('---关闭了2 length: ' + this.multipleSelection.length);
                        const element = this.multipleSelection[0]; // 填0是因为每次移除后，列表数据改变了
                        // 移除现在的
                        this.$refs.multipleTable.toggleRowSelection(element, false);
                    }
                    for (let i = 0; i < this.originSelection.length; i++) {
                        const element = this.originSelection[i];
                        // 添加原来的：勾选
                        this.$refs.multipleTable.toggleRowSelection(element, true);
                    }
                }
                this.confirmCouponSelect = false;
            }
        },
        isRequestEnd: function(val) {
            console.log('---isRequestEnd: ' + val);
            // if (val==2) {
            //     this.dialogCouponTableVisible = true;
            // }
        },
        goodsMap(val, oldVal){
            //获取商品
            console.log('-----watch: goodsMap= '+ val);
            console.log('-----watch: goodsMap1= '+ zm_jsonToString(val));
            console.log('-----watch: goodsMap2= '+ zm_jsonToString(oldVal));
            this.imageUrl = "http://sanyetongsj.oss-cn-shanghai.aliyuncs.com/lct/shop/source/OnCGgazX187IQRQ1.jpg";
            let newArr = [];
            val.forEach(function (value, key, map) {
                newArr.push(value)
            });
            this.selectProduct = newArr[0];
            this.bgImg_elUpload_imgFileList = [];
            console.log('-----watch: selectProduct= '+ zm_jsonToString(this.selectProduct));
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
         },
        deep:true //true 深度监听

    },
    methods:{
        handleCheckedHonBaoChange(value) {
            //单选处理
            // console.log("---handleCheckedHonBaoChange= "+ value);
            if (this.honBaoCheckedList.length>1) {
                this.honBaoCheckedList.splice(0,1);
            }
        },
        elUpload_handleRemove(file, fileList) {
			console.log('--文件移除时的钩子：file= ' + file + 'fileList= ' + fileList);
            this.uploadDisabled = false;
			this.uploadDisplay = true;
		},
		elUpload_handlePictureCardPreview(file) {
			console.log('--文件放大时的钩子：file= ' + file.url);
			this.dialogImageUrl1 = file.url;
			this.dialogVisible1 = true;
        },
        changeFilesWallClick() {
            // 通过js修改 uploadInputType（只点击不选本地照片）
            let self = this;
            let product_filesWall = document.getElementsByClassName("product_filesWall")[0];
            let fileBtn = product_filesWall.getElementsByClassName("el-upload__input")[0];        
            fileBtn.setAttribute("type","button");
            fileBtn.setAttribute("onclick", "uploadInputClick(event)");
            window.uploadInputClick = function(event){
                console.log('---uploadInputClick 选择商品图片');
                self.$refs.goodsSpec.upgoodsvalue = true;
            }
        },
        addCouponClick(){
            // 添加优惠券
            this.originSelection = this.multipleSelection;
            this.dialogCouponTableVisible = true;
            // this.isRequestEnd =  this.isRequestEnd+1;
            //弹框渲染有延迟
            setTimeout(() => {
                if (this.isRequestEnd == 2) {
                    this.isRequestEnd = this.isRequestEnd +1;
                    this.multipleSelection = []; //清空
                    console.log('--------this.isRequestEnd= '+this.isRequestEnd);
                    // 数据请求完毕：已经添加的 自动勾选
                    for (let index = 0; index < this.huiXianList.length; index++) {
                        const huiXian = this.huiXianList[index];
                        for (let n = 0; n < this.couponTableData.length; n++) {
                            const element = this.couponTableData[n];
                            console.log('---element.tpcId= '+element.tpcId +'、huiXian.tpcId= '+huiXian.tpcId)
                            if (element.tpcId == huiXian.tpcId) {
                                // 已经添加的：勾选
                                this.$refs.multipleTable.toggleRowSelection(this.couponTableData[n], true);
                            } else {
                                // 未添加的：不做处理
                            }
                        }
                    }
                }

            }, 100);

        },
        zm_timestampToDate(val) {
            return zm_timestampToDate(val);
        },
        selectCouponCilick(){
            console.log('---确认选择 multipleSelection= ', zm_jsonToString(this.multipleSelection));
            this.confirmCouponSelect = true;
            this.dialogCouponTableVisible = false;

            //优惠券总金额
            var couponIds = [];
            this.totalMoney = 0;
            for(var i = 0; i < this.multipleSelection.length; i++) {
                var item = this.multipleSelection[i];
                this.totalMoney = this.totalMoney*1 + item.tpcMoney*1;
                couponIds.push(item.tpcId);
            }
            this.totalMoney = this.totalMoney/100;
            this.couponIds = couponIds.toString();

        },
        trashClick(index){
            console.log('删除 index: ' + index);
            // this.selectTableData.splice(index,1);
            if(this.multipleSelection.length>0){
                if (this.$refs.multipleTable) {
                    this.$refs.multipleTable.toggleRowSelection(this.multipleSelection[index], false);
                }else{
                    this.multipleSelection.splice(index,1);
                    //优惠券总金额
                    var couponIds = [];
                    this.totalMoney = 0;
                    for(var i = 0; i < this.multipleSelection.length; i++) {
                        var item = this.multipleSelection[i];
                        this.totalMoney = this.totalMoney*1 + item.tpcMoney*1;
                        couponIds.push(item.tpcId);
                    }
                    this.totalMoney = this.totalMoney/100;
                    this.couponIds = couponIds.toString();
                }
            }
            this.$message.success("删除成功！");
        },
        selectCilick(){
            this.$refs.multipleTable.toggleRowSelection(this.couponTableData[2], true);
        },
        handleSelect(selection, row){
            console.log('选择了 selection.length: ' + selection.length);
        },
        handleSelectionChange(val) {
            // console.log('改变了 val: ' + val);
            // console.log('改变了1 length: ' + this.multipleSelection.length);
            this.multipleSelection = val;
            // console.log('改变了2 length: ' + this.multipleSelection.length);
        },

        saveCilck(){
            // console.log('---保存 itName= ' + this.itName);
            // console.log('---保存 length= ' + this.multipleSelection.length);
            let self = this;
            let params = new FormData();
            this.redpackageType = this.honBaoCheckedList[0];

            if(this.itName=='' || this.itName==null){
                this.$message.warning("名称不能为空！");
                return;
            }
            if(this.inviteorNum=='' || this.inviteorNum==null){
                this.$message.warning("邀请人数不能为空！");
                return;
            }
            if (this.prizeKind==2) {
                 //1、抢购优惠券模式
                if(this.inviteorNum=='' || this.inviteorNum==null){
                    this.$message.warning("邀请人数不能为空！");
                    return;
                }
            }
            if (this.prizeKind==2) {
                //2、积分模式，邀请人数默认为1
                this.inviteorNum = 1; 
                if(this.integralNum=='' || this.integralNum==null){
                    this.$message.warning("积分不能为空！");
                    return;
                }
            }

            if (this.prizeKind==3) {
                //3、现金模式
                if (this.redpackageType==2) {
                    if(this.fixedMoney=='' || this.fixedMoney==null){
                        this.$message.warning("固定红包金额不能为空！");
                        this.maxMoney = '';
                        this.minMoney ='';
                        return;
                    }
                }else{
                    if(this.maxMoney=='' || this.maxMoney==null){
                        this.$message.warning("红包最高金额不能为空！");
                        return;
                    }
                    if(this.minMoney=='' || this.minMoney==null){
                        this.$message.warning("红包最低金额不能为空！");
                        return;
                    }
                    this.fixedMoney = '';
                }
                
            }
            if ( this.prizeKind==4) {
                //4、优惠券模式
                if(this.multipleSelection.length==0){
                    this.$message.warning("至少添加一张优惠券！");
                    return;
                }
            }else if (this.prizeKind==5) {
                //5、商品模式
                if(this.selectProduct.length==0){
                    this.$message.warning("请选择商品！");
                    return;
                }
                params.append('itemPicture', this.selectProduct.imageUrl); 
                params.append('itemId', this.selectProduct.itemId); 
                params.append('skuId', this.selectProduct.id); 
            }
            //优惠券总金额
            var tpcpTotalprice = 0;
            var tpcpTpcIds = [];
            for(var i = 0; i < this.multipleSelection.length; i++) {
                var item = this.multipleSelection[i];
                tpcpTotalprice = item.tpcMoney*1;
                tpcpTpcIds.push(item.tpcId);
            }
            console.log('---couponIds= ' + tpcpTpcIds.toString());

            params.append('name', this.itName);  
            params.append('prizeKind', this.prizeKind); 
            params.append('suserId', this.$cookie.get('suserId')); 
            params.append('effectTime', this.effectTime); 
            params.append('totalNum', this.totalNum); 

            params.append('inviteorNum', this.inviteorNum);  
            params.append('integralNum', this.integralNum); 
            params.append('redpackageType', this.redpackageType); 
            params.append('maxMoney', this.maxMoney*100); 
            params.append('minMoney', this.minMoney*100); 
            params.append('fixedMoney', this.fixedMoney*100); 

            params.append('totalMoney',this.totalMoney*100);
            params.append('couponIds', this.couponIds);  //tpcpTpcIds.toString()
            let urlStr = network.marketingIP + network.it_addInviteTask;
            // urlStr = network.TFIP + network.it_addInviteTask;
            let testText = '';
            if(this.it_isEdit){
                testText = "---编辑任务";
                urlStr = network.TIP + network.it_updateInviteTask;
                params.append('mitId', this.getTaskData.id);
                params.append('mipId', this.taskHuiXianData.mipId);

            }else{
                testText = "---创建任务";
            }
            console.log('---邀请任务-保存 urlStr= ', urlStr+ '\n params'+ zm_formDataToString(params));

           this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type': 'multipart/form-data',
                headers:{
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),			
                }
            })
            .then(function(res){
                console.log(testText+'：response= '+zm_jsonToString(res.data));
                if(res.data.status ==200){
                    if(self.it_isEdit){
                        self.$message.success("修改成功！");
                    }else{
                        self.$message.success("创建成功！");
                    }
                    setTimeout(() =>{
                        self.$router.go(-1)
                    }, 1000);
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.loading = false;
                console.log(testText+'：报错 response= '+zm_jsonToString(res));
            })
        },
        
        request_taskHuiXianData(page, status){
            //请求：邀请任务-回显
            let self = this;
            let urlStr = network.marketingIP + network.it_selectById;
                urlStr = network.marketingApiIP + '/invite/admin/selectById';
            let params = new FormData();  
                params.append('id', this.getTaskData.id);
            console.log('---邀请任务-回显：params=' + zm_formDataToString(params), 'urlStr= ' + urlStr);
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
            })
            .then(function(res){
                console.log('---邀请任务-回显 response= '+zm_jsonToString(res.data));
                if(res.status ==200) {
                    self.taskHuiXianData = res.data.map;
                    //数据回显
                    self.couponIds   = self.taskHuiXianData.couponIds;
                    self.inviteorNum = self.taskHuiXianData.inviteorNum; 
                    self.totalMoney  = self.taskHuiXianData.totalMoney/100; 
                    self.effectTime  = self.taskHuiXianData.effectTime; 
                    self.totalNum    = self.taskHuiXianData.totalNum; 
                    self.integralNum    = self.taskHuiXianData.integralNum; 
                    self.redpackageType = self.taskHuiXianData.redpackageType; 
                    self.maxMoney    = self.taskHuiXianData.maxMoney/100; 
                    self.minMoney    = self.taskHuiXianData.minMoney/100; 
                    self.fixedMoney  = self.taskHuiXianData.fixedMoney/100; 

                    self.honBaoCheckedList = [self.redpackageType];
                    self.selectProduct = {
                        id: self.taskHuiXianData.skuId,
                        itemId: self.taskHuiXianData.itemId,
                        imageUrl: self.taskHuiXianData.itemPicture,
                    }   
                     //商品图片墙
                    let filesWallImage = {
                        uid: self.taskHuiXianData.itemId,
                        raw: {
                                "uid": self.taskHuiXianData.skuId
                        },
                        percentage: 0,
                        name: '',
                        url: self.taskHuiXianData.itemPicture,
                        status: "ready",
                    };
                    self.bgImg_elUpload_imgFileList.push(filesWallImage);
                    self.uploadDisabled = true;
                    self.uploadDisplay = false;
                    if (self.taskHuiXianData.prizeKind==4) {
                        //优惠券回显请求
                        self.request_couponsHuiXianData();   
                    }
                               
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                console.log('----->邀请任务-回显：报错 response= '+zm_jsonToString(res));
            })

        },
        request_couponsHuiXianData(page, status){
            //请求：回显优惠券列表
            let self = this;
            let urlStr = network.TIP + network.cp_selectByTpcid;
            let params = new FormData();  
            params.append('tpcIds',this.taskHuiXianData.couponIds);
            console.log('---回显优惠券列表：params=' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(res){
                console.log('---回显优惠券列表response= '+zm_jsonToString(res.data));
                if(res.status ==200){
                    self.isRequestEnd =  self.isRequestEnd+1;
                    self.huiXianList = res.data;
                    // self.selectTableData = res.data;
                    self.multipleSelection = res.data;               

                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                console.log('----->回显优惠券列表：报错 response= '+zm_jsonToString(res));
            })
        },
        requestCouponData(page, status){
            // 查询优惠券列表
            let self = this;
            let params = new FormData();  
            params.append('pageNum', 0);  
            params.append('pageSize',20);
            params.append('tpcName','');
            params.append('tpcType',0);
            params.append('tpcState',0); 
            let urlStr = network.TIP + network.cp_findall;
            // urlStr = "http://172.16.1.84:8083/tPanicbuyConpon/findall";
            console.log('---查询优惠券列表：params=' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(res){
                // console.log('---查询优惠券列表response= '+zm_jsonToString(res.data));
                console.log('---查询优惠券列表 total= '+res.data.total);
                self.loading = false;
                if(res.status ==200){
                    self.couponTableData = res.data.list;
                    self.totalCount = res.data.total;
                    self.isRequestEnd =  self.isRequestEnd+1;
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                console.log('----->查询优惠券：报错 response= '+zm_jsonToString(res));
            })

        }

    },
    components:{
        navbar,marknav,sidebar,VueCookie, goodsSpec
    }
}
</script>


<style scoped >



.it_addYouHuiQuan{
    margin: 30px 0 0px 0;
}
.it_hongBaoInvitate{
    margin: 20px 0 0px 0;
}
.it_hongBaoTypeView{
    display: flex;
    margin: 30px 0 30px 0;
}

/****************** 显示/隐藏 ******************/
.it_hongBaoGDMoney2 { display: none;}
.it_hongBaoGDMoney1{
    display: '';
    margin: 10px 0 0 0;
}
.it_hongBaoMoney2 { display: none;}
.it_hongBaoMoney1{
    display: flex;
    margin: 10px 0 0 0;
}

.it_qiangGouYouHuiQuan{
    margin: 10px 0 0 0px;
}
.displayRewardType0{
    display: none;
}
.displayRewardType1{
    display: '';
    /* height: 100px;  */
    width: 700px;
    padding: 10px 10px 20px 10px;
    border: 0.5px solid #f0f7ff;
    /* background: yellow;  */
}
.displayRewardType2{
    display: '';
    /* height: 100px;  */
    width: 700px;
    padding: 10px 10px 20px 10px;
    border: 0.5px solid #f0f7ff;
    /* background: yellowgreen; */
}
.displayRewardType3{
    display: '';
    /* height: 100px;  */
    width: 700px;
    padding: 10px 10px 20px 10px;
    border: 0.5px solid #f0f7ff;
    /* background: lavenderblush; */
}
.displayRewardType4{
    display: '';
    width: 700px;
    padding: 10px 10px 20px 10px;
    border: 0.5px solid #f0f7ff;
    /* background: lavender; */
}
.displayRewardType5{
    display: '';
    width: 700px;
    padding: 10px 10px 20px 10px;
    border: 0.5px solid #f0f7ff;
    /* background: lightpink; */
}
.displayRewardType6{
    display: '';
    height: 100px; width: 700px;
    padding: 10px 10px 20px 10px;
    border: 0.5px solid #f0f7ff;
    /* background: lightblue; */
}
.it_num{
    text-align: right;
}


.msc_add{
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
}
.msc_btn{
  margin-right: 10px;
}
.msc_operate{
    display: flex;
    justify-content: center;
}


.trashImgView {
    width: 30px;
    height: 30px;
    margin: 38px 0 0 20px;
}
.rewardTable{
    /* width: 60%; */
    /* width: 500px; */
    color: #333;
}
.msc_saveBtn {
    margin: 60px 0 100px 40%;
    width: 150px;
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
    margin: 10px 10px 40px 10px;
}
.zm_dl_content {
    margin-top: 8px;
}
.zm_it_title1{
    margin-top: 8px;
    width: 75px;
    /* background: yellow; */
}
.zm_title3{
    font-size: 15px !important;
    font-weight: 500;
}
.zm_title5{
    font-weight: 500;
}


.activityName {
    width: 200px;
    height: 26px;
}
.it_restrictChecked{
    margin-top: 8px;
    margin-left: 20px;
}
.it_restrict{
    width: 80px;
    height: 26px;
}

.spTeammatecount {
    width: 100px;
    height: 26px;
}

.zm_elInput >>> .el-input__inner{
    padding: 0 0px !important;
    text-align: center;
}
.companyEarnings {
    width: 70px;
    height: 26px;
}
.companyEarnings2 {
    width: 100px;
    height: 26px;
}
.partAwardView{
    display: flex;
}
.partAward{
    margin-right: 50px;
}

.rewardPercent {
    width: 50px;
    height: 26px;
    text-align:center;
    border: 1px solid #f0f0ff !important;
}
.rewardMoney{
    width: 60px;
    height: 26px;
    text-align:center;
    border: 1px solid #f0f0ff !important;
    /* border:5px solid red; */
}

/**************** 优惠券 ****************/
.selectTableDataView .el-table tbody tr:hover>td { 
    background-color:#ffffff!important
}
.selectDataView{
    margin: 20px 0 0 0;
    width:700px;
}
.selectCouponView{
    display: flex;
}
.trashImgView {
    width: 30px;
    height: 30px;
    margin: 38px 0 0 50px;
}

.couponInfoView{
  padding: 5px;
  border: 1px solid #dddddd;
  width: 300px !important;
  margin: 10px 10px 10px 0;
  /* background: yellow; */
}
.couponMoneyView{
    display: flex;
}
.couponMoneyText{
  font-size: 20px !important;
  font-weight: 800;
  color:  #D58300;
  background: #f0f0f0;
  width: 70px;
  height: 60px;
  line-height: 60px;
  text-align: center;

}
.restrictMoneyView{
  margin: 5px 0 0 10px;
  /* background: yellow; */
}
.couponName{
  margin: 0px 0 10px 8px;
}

/******* 商品墙：.product_filesWall *******/
.product_filesWall, coupon_filesWall {
	margin-left: 10px;
    margin-top: 10px;
	width: 200px;
}
.product_filesWall >>> .el-upload-list--picture-card .el-upload-list__item,
.product_filesWall >>> .el-upload--picture-card {
	width: 80px !important;
	height: 80px !important;
}
#product_filesWall >>> .el-upload--picture-card {
    width: 80px !important;
	height: 80px !important;
	line-height: 80px !important;
}
.product_filesWall >>> .disabled .el-upload--picture-card {
	display: none;
}
.product_filesWall >>> .display .el-upload--picture-card {
	display: '';
}

</style>



   
            
           