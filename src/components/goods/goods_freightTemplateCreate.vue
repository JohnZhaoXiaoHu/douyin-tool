<template>
<!-- 新增运费模版 -->
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
                                <!-- isFaBu: 是否来自发布 -->
                                <el-breadcrumb-item v-if="isFaBu==false" :to="{ path: '/goodslist/goods_freightTemplate' }">运费模版</el-breadcrumb-item>
                                <el-breadcrumb-item v-else-if="isFaBu==true" :to="{ path: '/goodslist/goodsissue' }">商品发布</el-breadcrumb-item>
                                <el-breadcrumb-item :to="{ path: '/goodslist/goods_freightTemplateCreate' }">{{tfc_name}}</el-breadcrumb-item>
                            </el-breadcrumb>   
                        </div>
                        <!-- 面包屑over -->

                        <br><br>
                        <!-- 
                            新增运费模版
                            ftc: freightTemplateCreate
                         -->                        
                        <div class="ftc_elementView">
                            <div class="ftc_elementTitle">模版名称：</div>
                            <el-input v-model="sftTemplateName" class="ftc_input"  placeholder=""></el-input>
                        </div>

                        <div class="ftc_elementView">
                            <div class="ftc_elementTitle">计费方式：</div>
                            <div class="ftc_billingWay">
                                <el-radio v-model="sftTemplateType" label="1">按件数</el-radio>
                                <el-radio v-model="sftTemplateType" label="2">按重量</el-radio>
                            </div>
                        </div>

                        <div class="ftc_elementView">
                            <div class="ftc_elementTitle">运送方式：</div>
                            <div class="ftc_transportExplain">
                               除指定地区外，其余地区的运费采用“默认运费”
                            </div>
                        </div>
                      
                        <div class="ftc_normalTransportView">
                            <div class="ftc_normalTransportTitle1">全国默认运费</div>
                            <div class="ftc_normalTransportTitle">{{firstThing}}</div>
                            <el-input v-model="sftTemplateFirst" size="mini" class="ftc_normalTransportInput zm_elInput" type="number" placeholder=""></el-input>

                            <div class="ftc_normalTransportTitle">运费（元）</div>
                            <el-input v-model="sftTemplateFirstprice" size="mini" class="ftc_normalTransportInput zm_elInput" type="number" placeholder=""></el-input>

                            <div class="ftc_normalTransportTitle">{{continueThing}}</div>
                            <el-input v-model="sftTemplateNext" size="mini" class="ftc_normalTransportInput zm_elInput" type="number" placeholder=""></el-input>

                            <div class="ftc_normalTransportTitle">续费（元）</div>
                            <el-input v-model="sftTemplateNextprice" size="mini" class="ftc_normalTransportInput zm_elInput" type="number" placeholder=""></el-input>
                        </div>

                        <!-- :show-header="false" border-->
                        <div class="ftc_transportTitle">
                            <div>指定区域设置运费</div> 
                            <div class="ftc_transportSubTitle">（非必填）</div>
                        </div>
                        <div class="ftc_transportContent">
                            <el-table :data="ft_tableData1"  class="ft_transporTableView" >
                                <el-table-column label="区域" width="200"> 
                                    <template slot-scope="scope" >
                                        <div  class="ft_transporTableTitle" @click="selectRegionClick1(scope.$index)">
                                            <!-- <el-button class="ftc_Area" size="small" type="text" @click="selectRegionClick1(scope.$index)"> 
                                            {{scope.row.sftcTemplateArea}}</el-button> -->
                                            {{scope.row.sftcTemplateArea}}
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column :label="firstThing" width="140" align="center"> 
                                    <template slot-scope="scope">
                                        <div class="ft_transporTableContent">
                                          <el-input v-model="scope.row.sftcTemplateFirst" size="mini" class="ft_transporTableInput zm_elInput" type="number" placeholder=""></el-input>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="运费（元）" width="140" align="center"> 
                                    <template slot-scope="scope">
                                        <div class="ft_transporTableContent">
                                            <el-input v-model="scope.row.sftcTemplateFirstprice" size="mini" class="ft_transporTableInput zm_elInput" type="number" placeholder=""></el-input>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column :label="continueThing" width="140" align="center"> 
                                    <template slot-scope="scope">
                                        <div class="ft_transporTableContent" align="center">
                                            <el-input v-model="scope.row.sftcTemplateNext" size="mini" class="ft_transporTableInput zm_elInput" type="number" placeholder=""></el-input>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="续费（元）" width="140" align="center"> 
                                    <template slot-scope="scope">
                                        <div class="ft_transporTableContent">
                                            <el-input v-model="scope.row.sftcTemplateNextprice" size="mini" class="ft_transporTableInput zm_elInput" type="number" placeholder=""></el-input>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作" width="60" align="center"> 
                                    <template slot-scope="scope">
                                        <el-button class="" size="small" type="text" @click="delete_yunFeiClick(scope.$index)"> 
                                         删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-button class="ft_addBtn" size="small" type="text" @click="add_yunFeiClick()"> 
                                +添加
                            </el-button>
                        </div>
                        
                        <!-- :show-header="false" border 选择区域
                        @change="changeSwitch(scope.$index, scope.row)"-->
                        <div class="ftc_transportTitle">
                            <div>指定条件包邮</div> 
                            <div class="ftc_transportSubTitle">（非必填）</div>
                        </div>
                        <div class="ftc_transportContent">
                            <el-table :data="ft_tableData2" class="ft_transporTableView" >
                                <el-table-column label="区域" width="200"> 
                                    <template slot-scope="scope" >
                                        <div class="ft_transporTableTitle" @click="selectRegionClick2(scope.$index)">
                                            <!-- <el-button class="ftc_Area" size="small" type="text" @click="selectRegionClick2(scope.$index)"> 
                                            {{scope.row.sftfTemplateArea}}</el-button> -->
                                            {{scope.row.sftfTemplateArea}}
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="  设置包邮条件" prop="sftfTemplateType" > 
                                    <template slot-scope="scope">
                                        <div class="ft_transporTableContent">
                                            <el-select v-model="scope.row.sftfTemplateType"  >
                                                <el-option v-for="item in options" :label="item.label" :value="item.value" :key="item.value">
                                                </el-option>
                                            </el-select>
                                            
                                            <div class="ft_tableSub">满</div>
                                            <el-input v-model="scope.row.sftfTemplateMoneyorcount" size="mini" class="ft_transporTableInput zm_elInput" type="number" placeholder="">
                                            </el-input>
                                            <div class="ft_tableSub" v-if="scope.row.sftfTemplateType==1">元 包邮</div>
                                            <div class="ft_tableSub" v-else-if="scope.row.sftfTemplateType==2">件 包邮</div>
                                        </div>
                                    </template>
                                </el-table-column>
                                <el-table-column label="操作" width="100" align="center"> 
                                    <template slot-scope="scope">
                                        <el-button class="" size="small" type="text" @click="delete_baoYouClick(scope.$index)"> 
                                         删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            <el-button class="ft_addBtn" size="small" type="text" @click="add_baoYouClick()"> 
                                +添加
                            </el-button>
                        </div>

                        <div class="ftc_transportTitle">
                            <div>不发货地区</div> 
                            <div class="ftc_transportSubTitle">（非必填）</div>
                        </div>
                        <div  class="ft_transporTableTitle2" @click="selectRegionClick3()">
                            {{sftTemplateDontsend}}
                        </div>


                        <br><br><br><br>
                        <div class="emc_btnView">
                            <el-button class="emc_saveBtn" type="primary" size="medium" @click="saveCilck()">保存</el-button>
                        </div>
                    </div>    
                    
                    <!-- 选择区域（弹框）-->
                    <el-dialog title="选择区域" :visible.sync="regionTableDialogVisible" width="70%">
                        <div class="ftc_selectRegionView">
                            <!-- <div class="zm_rankMsg">
                                省: &nbsp;
                                <el-select size='small' v-model="provinceIndex" placeholder="请选择地区" style="width: 140px; font-size: 13px;" 
                                v-bind:class="provinceClassSelect">
                                    <el-option style="font-size: 13px;" v-for="(item, index) in provinceList" 
                                    :key="index" :label="item" :value="index">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="zm_rankMsg">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 市/区: &nbsp;
                                <el-select size='small' v-model="cityIndex" placeholder="请选择地区" style="width: 140px; font-size: 13px;" 
                                v-bind:class="cityClassSelect">
                                    <el-option style="font-size: 13px;" v-for="(item, index) in cityList" 
                                    :key="index" :label="item" :value="index">
                                    </el-option>
                                </el-select>
                            </div> -->

                            <!-- 默认的 区域 -->
                            <div class="normalRegionView">
                                <el-input placeholder="输入关键字进行过滤" v-model="filterText" >
                                </el-input>

                                <el-tree :data="treeData" show-checkbox node-key="id"
                                :default-expand-all="tree1_expand_all"
                                :props="defaultProps"
                                :filter-node-method="filterNode"
                                ref="tree1"
                                @check-change="tree_checkChange"
                                @check="tree_check"
                                @node-expand="tree_nodeExpand"
                                @node-collapse="tree_nodeCollapse()">
                                </el-tree>
                            </div>

                            <!-- 被选中的 区域 -->
                            <div class="selectRegionView">
                                <el-tree :data="selectTreeData" node-key="id" default-expand-all
                                    ref="tree2"
                                    :show-checkbox="false"
                                    :expand-on-click-node="false">
                                    <span class="custom-tree-node" slot-scope="{ node, data }">
                                        <span>{{ node.label }}</span>
                                        <span>
                                            <el-button plain size="mini" icon="el-icon-delete" class=""
                                                @click="() => tree_remove(node, data)">
                                            </el-button>
                                        </span>
                                    </span>
                                </el-tree>
                            </div>

                        </div>
                        <div slot="footer" class="dialog-footer">
					        <el-button class="zm_saveBtn" type="primary" size="medium" @click="closeRegionTableDialog">保存</el-button>
				        </div>
                    </el-dialog>
                    <br><br><br><br><br><br>
                    
                    <!-- <goodsSpec ref="goodsSpec"></goodsSpec> -->

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
// import goodsSpec from '../resource/goodsSpec_mh2.vue';
// import VueCookie from 'vue-cookie';
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
import { zm_beArrayContains1, zm_beArrayContains2 } from '../../filters/zm_array';


export default {
    data() {
        return { 
            tfc_name:'新增运费模版',
            isEdit: false,
            isFaBu: false,
            ftDetailData: '',
            freightTemplateData: '',
            sftIsdelete: 0,
            sftTemplateName:'',
            sftTemplateType: '1',
            sftTemplateFirst:'',
            sftTemplateFirstprice:'',
            sftTemplateNext:'',
            sftTemplateNextprice:'',
            sftTemplateCreatetime:'',
            sftTemplateDeletetime:'',
            sftTemplateUpdatetime:'',
            sftTemplateDontsend:'选择区域',
            sftTemplateDontsendareaid:'',
            // spId: '',
            tableData: [],
            firstThing: '首件（件）',
            continueThing: '续件（件）',
            ft_tableData1: [],
            ft_tableData2: [],
            selectIndex1: 0,
            selectIndex2: 0,
            selectTable1: false,
            selectTable2: false,
            item1_1: {},
            item2_1: {},
            options: [{
                value: 1,
                label: '金额'
                }, {
                value: 2,
                label: '件数'
                }],
            // sftfTemplateType: '1',
            //省市
            regionTableDialogVisible: false,
            treeData:[],
            selectTreeData:[],
            tree1_expand_all: false,
            fatherChecked: false,
            sonChecked: false,
            tree_cityCheckedList: [],
            tree_cityIdCheckedList: [],
            filterText: '',

			addressSelected: '',
			addressIndex: '',
			index: 0,
			regionList:[],
			provinceList: [],
            provinceNumList: [],
            provinceIndex: '',
            province:'',
            provinceId:'',
            cityList: [],
            cityNumList: [],
            cityIndex: '',
            city:'',
            cityId:'',
        };
    },
    created(){
        console.log('--------created 模板渲染前');
        this.ftDetailData =  eval('(' + this.$route.query.ftDetailData + ')');
        this.isFaBu =  eval('(' + this.$route.query.isFaBu + ')');
        console.log('--->模板详情: ftDetailData= '+zm_jsonToString(this.ftDetailData));
        console.log('--->模板详情: isFaBu= '+ this.isFaBu);


        for (let i = 0; i < this.ftDetailData.length; i++) {
            const element = this.ftDetailData[i];
            for (let n=0; n< element.tShopFreightTemplateContents.length; n++) {
                const item = element.tShopFreightTemplateContents[n];
                if (this.sftTemplateType) {
                    item.sftcTemplateFirstprice = item.sftcTemplateFirstprice/100;
                    item.sftcTemplateNextprice  = item.sftcTemplateNextprice/100;
                } else {
                    item.sftcTemplateFirstprice = item.sftcTemplateFirstprice;   
                    item.sftcTemplateNextprice  = item.sftcTemplateNextprice;
                }
            }

            for (let m=0; m< element.tShopFreightTemplateFrees.length; m++) {
                const item = element.tShopFreightTemplateFrees[m];
                if (item.sftfTemplateType*1 == 1 ) {
                    item.sftfTemplateMoneyorcount = item.sftfTemplateMoneyorcount/100;
                } else {
                    // item.sftfTemplateMoneyorcount = item.sftfTemplateMoneyorcount;
                }
            }            
        }
   
        
    },
    mounted(){
        console.log('--------mounted 安装初始化成功：模板渲染后= '+ zm_getCurrenDate());
        // this.request_getData();
        this.request_regionData();
        // var itemData =  eval('(' + this.$route.query.itemData + ')') //把传过来的字符串转为对象操作
        
        if (this.ftDetailData==null || this.ftDetailData=='') {
            this.isEdit = false;
            this.tfc_name = '新增运费模版';
            console.log('-----创建');
            var item1_1 = {
                sftcId: '',
                sftcTemplateId: '',
                sftcTemplateArea: '选择区域',
                sftcTemplateAreaId: '',
                sftcTemplateFirst: '',
                sftcTemplateFirstprice: '',
                sftcTemplateNext: '',
                sftcTemplateNextprice: '',
                sftcTemplateIsdelete: '',
                sftcTemplateCreatetime: '',
                sftcTemplateUpdatetime: '',
                sftcTemplateDeletetime: '',
            }; 
            var item2_1 = {
                sftfId: '',
                sftfTemplateId: '',
                sftfTemplateArea: '选择区域',
                sftfTemplateAreaId: '',
                sftfTemplateType: 1,
                sftfTemplateMoneyorcount: '',
                sftfTemplateIsdelete: '',
                sftfTemplateCreatetime: '',
                sftfTemplateUpdatetime: '',
                sftfTemplateDeletetime: '',
            };
            //默认
            this.ft_tableData1 = [item1_1];
            this.ft_tableData2 = [item2_1];
        }else {
            this.isEdit = true;
            this.tfc_name = '编辑运费模版';
            console.log('-----编辑');
             //默认
            this.sftTemplateName        = this.ftDetailData.tShopFreightTemplate.sftTemplateName;
            this.sftTemplateType        = this.ftDetailData.tShopFreightTemplate.sftTemplateType+"";
            this.sftTemplateFirst       = this.ftDetailData.tShopFreightTemplate.sftTemplateFirst;
            this.sftTemplateFirstprice  = this.ftDetailData.tShopFreightTemplate.sftTemplateFirstprice/100;
            this.sftTemplateNext        = this.ftDetailData.tShopFreightTemplate.sftTemplateNext;
            this.sftTemplateNextprice   = this.ftDetailData.tShopFreightTemplate.sftTemplateNextprice/100;
            this.sftTemplateDontsend    = this.ftDetailData.tShopFreightTemplate.sftTemplateDontsend;
            this.sftTemplateDontsendareaid = this.ftDetailData.tShopFreightTemplate.sftTemplateDontsendareaid;

            // this.ft_tableData1 = this.ftDetailData.tShopFreightTemplateContents;
            // this.ft_tableData2 = this.ftDetailData.tShopFreightTemplateFrees;
            for (let i = 0; i < this.ftDetailData.tShopFreightTemplateContents.length; i++) {
                const element = this.ftDetailData.tShopFreightTemplateContents[i];
                element.sftcTemplateFirstprice = element.sftcTemplateFirstprice/100;
                element.sftcTemplateNextprice = element.sftcTemplateNextprice/100;
                this.ft_tableData1.push(element);
            }
            for (let i = 0; i < this.ftDetailData.tShopFreightTemplateFrees.length; i++) {
                const element = this.ftDetailData.tShopFreightTemplateFrees[i];                
                if (element.sftfTemplateType*1 == 1) {
                    element.sftfTemplateMoneyorcount = element.sftfTemplateMoneyorcount/100;
                }
                this.ft_tableData2.push(element);
            }
        }
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
               console.log('--->beforeRouteEnter');
                // vm.request_getData(1,0);
            } else {
                next('/login');
            }
		})
    },
    watch:{
        sftTemplateType: function(val) {
            console.log("---计费方式: sftTemplateType= "+ val);
            if (val==1) {
                this.firstThing     = '首件（件）';
                this.continueThing  = '续件（件）';
            } else {
                this.firstThing     = '首重（kg）';
                this.continueThing  = '续重（kg）';
            }
        },
        provinceIndex: function(val) {
            this.provinceId = this.provinceNumList[val];
            this.province   = this.provinceList[val];
            this.request_regionDataById(this.provinceId);
            console.log("---provinceIndex= "+ val +'、provinceId= '+this.provinceId+'、province= '+this.province);
        },
        cityIndex: function(val) {
            this.cityId = this.cityNumList[val];
            this.city   = this.provinceList[val];
            console.log("---cityIndex= "+ val +'、cityId= '+this.cityId+'、city= '+this.city);
        },
        filterText(val) {
            this.$refs.tree1.filter(val);
        }
    },
    methods:{
        filterNode(value, data) {
            if (!value) return true;
            return data.label.indexOf(value) !== -1;
        },
        changeSwitch(index, rowItem) {
		    // var item = this.tableData[index];
            // console.log('---changeSwitch 选择了: index_' + index + '、sftfTemplateType= ' + rowItem.sftfTemplateType);
		},
        closeRegionTableDialog(){
            //关闭（区域选择器）
            // var region = '';
            // var regionId = '';
            // var province = this.provinceList[this.provinceIndex];
            // var city     = this.cityList[this.cityIndex];
            // region   = province +','+ city;
            // regionId = this.provinceId +','+ this.cityId;
            // if (this.selectTable1) {
            //     var item = this.ft_tableData1[this.selectIndex1];
            //     item.sftcTemplateArea   = region;
            //     item.sftcTemplateAreaId = regionId;
            // } else {
            //     var item = this.ft_tableData2[this.selectIndex2];
            //     item.sftfTemplateArea   = region;
            //     item.sftfTemplateAreaId = regionId;
            // }
            // if (province=='' || province==null) {
            //     this.$message.warning('请选择省区！'); 
            //     return;
            // } 
            // if (city=='' || city==null) {
            //     this.$message.warning('请选择市区！'); 
            //     return;
            // } 
            // this.regionTableDialogVisible = false;
            // var str = 222;
            // str.toString();

            if (this.selectTable1==true && this.selectTable2==false){
                var item = this.ft_tableData1[this.selectIndex1];
                if (this.tree_cityCheckedList.length>0) {
                    item.sftcTemplateArea = this.tree_cityCheckedList.toString();
                    item.sftcTemplateAreaId = JSON.parse(JSON.stringify( this.tree_cityIdCheckedList ));
                } else {
                    item.sftcTemplateArea = "选择区域";
                    item.sftcTemplateAreaId = "";
                }
            } else if (this.selectTable1==false && this.selectTable2==true){
                var item = this.ft_tableData2[this.selectIndex2];
                if (this.tree_cityCheckedList.length>0) {
                    item.sftfTemplateArea = this.tree_cityCheckedList.toString();
                    item.sftfTemplateAreaId = JSON.parse(JSON.stringify( this.tree_cityIdCheckedList ));
                } else {
                    item.sftfTemplateArea = "选择区域";
                    item.sftfTemplateAreaId = "";
                }
            } else {
                if (this.tree_cityCheckedList.length>0) {
                    this.sftTemplateDontsend = this.tree_cityCheckedList.toString();
                    this.sftTemplateDontsendareaid = JSON.parse(JSON.stringify( this.tree_cityIdCheckedList ));
                } else {
                    this.sftTemplateDontsend = "选择区域";
                    this.sftTemplateDontsendareaid = "";
                }
            }   
            this.regionTableDialogVisible = false;

        },
        selectRegionClick1(index){
            // ------------------------- 区域选择1  -------------------------
            this.selectIndex1 = index;
            this.selectTable1 = true;
            this.selectTable2 = false;
            this.regionTableDialogVisible = true;
            this.tree1_expand_all = false;

            var item = this.ft_tableData1[index];
            console.log('---选择: 指定区域设置运费 index= '+index +'、'+item.sftcTemplateAreaId);
            console.log('---sftcTemplateAreaId1= '+item.sftcTemplateAreaId.length);
            console.log('---this.$refs.tree1= '+this.$refs.tree1);
            if (this.isEdit) {
                //编辑
                var areaIds1 = item.sftcTemplateAreaId;
                areaIds1 = areaIds1.substring(1, areaIds1.length);
                areaIds1 = areaIds1.substring(0, areaIds1.length-1);
                areaIds1 = areaIds1.split(',');
                console.log('---选择: 指定区域设置运费 index= '+index +'、'+areaIds1);
                let sftcTemplateAreaIds1 = [];
                for (let i = 0; i < areaIds1.length; i++) {
                    const element = areaIds1[i];
                    sftcTemplateAreaIds1.push(element*1);//转为数字
                }
                console.log('---sftcTemplateAreaIds1= '+sftcTemplateAreaIds1.length);
                let outTime = 0;// 视图渲染的慢（做个定时器）
                if (this.$refs.tree1==undefined) {
                    outTime = 500;
                } else {
                    outTime = 5;
                }
                setTimeout(() => {
                    if (sftcTemplateAreaIds1==null || sftcTemplateAreaIds1==undefined || sftcTemplateAreaIds1.length==0) {
                        this.$refs.tree1.setCheckedKeys([]); 
                    }else{
                        this.$refs.tree1.setCheckedKeys( sftcTemplateAreaIds1 );
                    }
                }, outTime);
                
            } else {
                // 创建
                if (this.$refs.tree1) {
                    if (item.sftcTemplateAreaId==null || item.sftcTemplateAreaId==undefined || item.sftcTemplateAreaId.length==0) {
                        console.log('---sftcTemplateAreaId= null');
                        this.$refs.tree1.setCheckedKeys([]); 
                    }else{
                        this.$refs.tree1.setCheckedKeys( item.sftcTemplateAreaId );
                    }
                }
            }
        },
        selectRegionClick2(index){
            // ------------------------- 区域选择2  -------------------------
            this.selectIndex2 = index;
            this.selectTable1 = false;
            this.selectTable2 = true;
            this.regionTableDialogVisible = true;

            var item = this.ft_tableData2[index];
            // console.log('---选择: 指定条件包邮 index= '+index +'、'+item.sftfTemplateAreaId);
            if (this.isEdit) {
                //编辑
                var areaIds2 = item.sftfTemplateAreaId;
                areaIds2 = areaIds2.substring(1, areaIds2.length);
                areaIds2 = areaIds2.substring(0, areaIds2.length-1);
                areaIds2 = areaIds2.split(',');
                // console.log('---选择: 指定区域设置运费 index= '+index +'、'+areaIds2);
                let sftfTemplateAreaId2 = [];
                for (let i = 0; i < areaIds2.length; i++) {
                    const element = areaIds2[i];
                    sftfTemplateAreaId2.push(element*1); //转为数字
                }
                let outTime = 0; // 视图渲染的慢（做个定时器）
                if (this.$refs.tree1==undefined) {
                    outTime = 500;
                } else {
                    outTime = 5;
                }
                setTimeout(() => {
                    if (sftfTemplateAreaId2==null || sftfTemplateAreaId2==undefined || sftfTemplateAreaId2.length==0) {
                        this.$refs.tree1.setCheckedKeys([]); 
                    }else{
                        this.$refs.tree1.setCheckedKeys( sftfTemplateAreaId2 );
                    }
                }, outTime);
            } else {
                // 创建
                if (this.$refs.tree1) {
                    if (item.sftfTemplateAreaId==null || item.sftfTemplateAreaId==undefined || item.sftfTemplateAreaId.length==0) {
                        this.$refs.tree1.setCheckedKeys([]); 
                    }else{
                        this.$refs.tree1.setCheckedKeys( item.sftfTemplateAreaId );
                    }
                }
            }
        },
        selectRegionClick3(){
            // ------------------------- 区域选择3  -------------------------
            this.selectTable1 = false;
            this.selectTable2 = false;
            this.regionTableDialogVisible = true;
            // console.log('---选择: 不发货地区 index= '+this.sftTemplateDontsendareaid);
            if (this.isEdit) {
                //编辑
                var areaIds3 = this.sftTemplateDontsendareaid;
                areaIds3 = areaIds3.substring(1, areaIds3.length);
                areaIds3 = areaIds3.substring(0, areaIds3.length-1);
                areaIds3 = areaIds3.split(',');
                let sftTemplateDontsendId3 = [];
                for (let i = 0; i < areaIds3.length; i++) {
                    const element = areaIds3[i];
                    sftTemplateDontsendId3.push(element*1); //转为数字
                }
                let outTime = 0; // 视图渲染的慢（做个定时器）
                if (this.$refs.tree1==undefined) {
                    outTime = 500;
                } else {
                    outTime = 5;
                }
                setTimeout(() => {
                    if (sftTemplateDontsendId3==null || sftTemplateDontsendId3==undefined || sftTemplateDontsendId3.length==0) {
                        this.$refs.tree1.setCheckedKeys([]); 
                    }else{
                        this.$refs.tree1.setCheckedKeys( sftTemplateDontsendId3 );
                    }
                }, outTime);
            } else {
                // 创建
                if (this.$refs.tree1) {
                    if (this.sftTemplateDontsendId==null || this.sftTemplateDontsendId==undefined || this.sftTemplateDontsendId.length==0) {
                        this.$refs.tree1.setCheckedKeys([]); 
                    }else{
                        this.$refs.tree1.setCheckedKeys( this.sftTemplateDontsendId );
                    }
                }
            }

        },
        delete_yunFeiClick(index){
            //指定区域设置运费: 删除
            let item = this.ft_tableData1[index];
            if (item.sftcId=='' || item.sftcId==null) {
                this.ft_tableData1.splice(index,1);
            } else {
                this.selectIndex1 = index;
                this.toDelete(item.sftcId, index, 1);
            }           
        },
        delete_baoYouClick(index){
            //指定条件包邮: 删除
            let item = this.ft_tableData2[index];
            if (item.sftfId=='' || item.sftfId==null) {
                this.ft_tableData2.splice(index,1);
            } else {
                this.selectIndex2 = index;
                this.toDelete(item.sftfId, index, 2);
            }  
        },
        add_yunFeiClick(){
            //指定区域设置运费: 添加
             var item1_1 = {
                sftcId: '',
                sftcTemplateId: '',
                sftcTemplateArea: '选择区域',
                sftcTemplateAreaId: '',
                sftcTemplateFirst: '',
                sftcTemplateFirstprice: '',
                sftcTemplateNext: '',
                sftcTemplateNextprice: '',
                sftcTemplateIsdelete: '',
                sftcTemplateCreatetime: '',
                sftcTemplateUpdatetime: '',
                sftcTemplateDeletetime: '',
            };
            this.ft_tableData1.push(item1_1);
        },
        add_baoYouClick(){
            //指定条件包邮: 添加
            var item2_1 = {
                sftfId: '',
                sftfTemplateId: '',
                sftfTemplateArea: '选择区域',
                sftfTemplateAreaId: '',
                sftfTemplateType: 1,
                sftfTemplateMoneyorcount: '',
                sftfTemplateIsdelete: '',
                sftfTemplateCreatetime: '',
                sftfTemplateUpdatetime: '',
                sftfTemplateDeletetime: '',
        };
            this.ft_tableData2.push(item2_1);
        },
        zm_timestampToDate(val){
            return zm_timestampToDate(val);
        },
        saveCilck(type){
            console.log('---保存：saveCilck_type= '+type);
            if(this.sftTemplateName=='' || this.sftTemplateName==null){
                this.$message.warning('模板名称不能为空！'); return;
            }
            if(this.sftTemplateFirst=='' || this.sftTemplateFirst==null){
                this.$message.warning('默认运费首件不能为空！'); return;
            }
            if(this.sftTemplateFirstprice=='' || this.sftTemplateFirstprice==null){
                this.$message.warning('默认运费运费不能为空！'); return;
            }
            if(this.sftTemplateNext=='' || this.sftTemplateNext==null){
                this.$message.warning('默认运费续件不能为空！'); return;
            }
            if(this.sftTemplateNextprice=='' || this.sftTemplateNextprice==null){
                this.$message.warning('默认运费续费不能为空！'); return;
            }
            var tableData1= true;
            var tableData2= true;
            // for (let i = 0; i < this.ft_tableData1.length; i++) {
            //     const element = this.ft_tableData1[i];
            //     if(element.sftcTemplateArea=="选择区域"){
            //         console.log('---sftcTemplateArea= '+element.sftcTemplateArea);
            //         this.$message.warning('指定区域运费设置 要选择区域！'); 
            //         tableData1 = false;
            //         break;
            //     }
            //     if(element.sftcTemplateFirst=='' || element.sftcTemplateFirst==null 
            //       || element.sftcTemplateFirstprice=='' || element.sftcTemplateFirstprice==null 
            //       || element.sftcTemplateNext=='' || element.sftcTemplateNext==null 
            //       || element.sftcTemplateNextprice=='' || element.sftcTemplateNextprice==null 
            //     ){
            //         this.$message.warning('指定区域运费设置不能为空！'); 
            //         tableData1 = false;
            //         break;
            //     }
            // }
            // if (tableData1==false) {
            //     return;
            // }
            // for (let i = 0; i < this.ft_tableData2.length; i++) {
            //     const element = this.ft_tableData2[i];
            //     if(element.sftfTemplateArea=="选择区域"){
            //         this.$message.warning('指定条件包邮设置 要选择区域！'); 
            //         tableData2 = false;
            //         break;
            //     }
            //     if(element.sftfTemplateMoneyorcount=='' || element.sftfTemplateMoneyorcount==null){
            //         this.$message.warning('指定条件包邮设置不能为空！'); 
            //         tableData2 = false;
            //         break;
            //     }
            // }
            // if (tableData2==false) {
            //     return;
            // }
            // console.log('---ft_tableData1= ' + zm_jsonToString(this.ft_tableData1));
            // console.log('---ft_tableData2= ' + zm_jsonToString(this.ft_tableData2));

            // item.sftcTemplateFirstprice = element.sftcTemplateFirstprice*100;
            // item.sftcTemplateNextprice  = element.sftcTemplateNextprice*100;



            //为了保存失败后，不对原数据造成影响
            let ft_tableData1 = [];
            let ft_tableData2 = [];
            for (let i = 0; i < this.ft_tableData1.length; i++) {
                const element = this.ft_tableData1[i];
                let sftcTemplateFirstprice = 0;
                if (this.sftTemplateType) {
                    sftcTemplateFirstprice = element.sftcTemplateFirstprice*100;
                    sftcTemplateNextprice  = element.sftcTemplateNextprice*100;
                } else {
                    sftcTemplateFirstprice = element.sftcTemplateFirstprice;   
                    sftcTemplateNextprice  = element.sftcTemplateNextprice;
                }
                let item = {
                    sftcId:             element.sftcId,
                    sftcTemplateId:     element.sftcTemplateId,
                    sftcTemplateArea:   element.sftcTemplateArea,
                    sftcTemplateAreaId: element.sftcTemplateAreaId.toString(),
                    sftcTemplateFirst:  element.sftcTemplateFirst,
                    sftcTemplateFirstprice: sftcTemplateFirstprice,
                    sftcTemplateNext:       element.sftcTemplateNext,
                    sftcTemplateNextprice:  sftcTemplateNextprice,
                    sftcTemplateIsdelete:   element.sftcTemplateIsdelete,
                    sftcTemplateCreatetime: element.sftcTemplateCreatetime,
                };
                    ft_tableData1.push(item);
            }

            for (let i = 0; i < this.ft_tableData2.length; i++) {
                    const element = this.ft_tableData2[i];                   
                    //为了保存失败后，不对原数据造成影响
                    let sftfTemplateMoneyorcount = 0;
                    if (element.sftfTemplateType*1 == 1 ) {
                        sftfTemplateMoneyorcount = element.sftfTemplateMoneyorcount*100;
                    } else {
                        sftfTemplateMoneyorcount = element.sftfTemplateMoneyorcount;
                    }
                    let item = {
                        sftfId:             element.sftfId,
                        sftfTemplateId:     element.sftfTemplateId,
                        sftfTemplateArea:   element.sftfTemplateArea,
                        sftfTemplateAreaId: element.sftfTemplateAreaId.toString(),
                        sftfTemplateType:   element.sftfTemplateType,
                        sftfTemplateMoneyorcount: sftfTemplateMoneyorcount,
                        sftfTemplateIsdelete:   element.sftfTemplateIsdelete,
                        sftcTemplateCreatetime: element.sftcTemplateCreatetime,
                    };
                    
                    ft_tableData2.push(item);
            }

             var params = {
                // sftTemplateType:1,
                // sftTemplateName:'梭梭树',
                // sftTemplateFirst:'11',
                // sftTemplateFirstprice:"888",
                // sftTemplateNext:'2',
                // sftTemplateNextprice:"666",
                sftTemplateType: this.sftTemplateType,
                sftTemplateName: this.sftTemplateName,
                sftTemplateFirst: this.sftTemplateFirst,
                sftTemplateFirstprice: this.sftTemplateFirstprice*100,
                sftTemplateNext: this.sftTemplateNext,
                sftTemplateNextprice: this.sftTemplateNextprice*100,
                tShopFreightTemplateContents: ft_tableData1,
                tShopFreightTemplateFrees: ft_tableData2,
                sftTemplateDontsend: this.sftTemplateDontsend,
                sftTemplateDontsendareaid: this.sftTemplateDontsendareaid.toString(),
                // sftTemplateDontsendareaid: this.sftTemplateDontsendareaid.toString(),
            }

            let self = this;
            let urlStr = baseapi.TIP + baseapi.ft_update;
            if (this.isEdit) {
                //编辑
                //  urlStr = "http://172.16.1.84:8083/panicbuy/freight/update";   
                 urlStr = baseapi.TIP + baseapi.ft_update;              
                 params['sftTemplateId'] = this.ftDetailData.tShopFreightTemplate.sftTemplateId;
            } else {
                //创建
                //  urlStr = "http://172.16.1.84:8083/panicbuy/freight/insert";
                 urlStr = baseapi.TIP + baseapi.ft_insert;
            }
            console.log('---urlStr1= ', baseapi.TIP);
            console.log('---urlStr2= ', baseapi.ft_insert);
            console.log('---params：' + zm_jsonToString(params), 'urlStr= ', urlStr)
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            }).then(function(res){
                console.log('---创建 response= '+zm_jsonToString(res));
                if(res.status ==200){                    
                    if (self.isEdit) {
                        self.$message.success("编辑成功！");
                    } else {
                        self.$message.success("创建成功！");
                    }
                    setTimeout(() =>{
                        self.$router.go(-1)
                    }, 1000);
                } else {
                    self.$message.error(res.data.message);
                }
            })
        },
        toDelete(id, index, type){
            let self = this;
            let urlStr = baseapi.TIP + baseapi.qg_delete;
            let params = new FormData();       
            params.append('id', id);  
            if (type==1) {
                //删除: 指定区域运费设置
                urlStr = "http://172.16.1.84:8083/panicbuy/freight/deletecontent";
                urlStr = baseapi.TIP + baseapi.ft_deletecontent;
            } else {
                //删除: 指定条件包邮
                urlStr = "http://172.16.1.84:8083/panicbuy/freight/deletefree";
                urlStr = baseapi.TIP + baseapi.ft_deletefree;
            }
            console.log('---params：' + zm_jsonToString(params), 'urlStr= ' + urlStr);
            this.$http({method: "post",
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            }).then(function(res){
                console.log('---删除：response= '+zm_jsonToString(res.data));
                if(res.status ==200){
                    self.tableData.splice(self.selectIndex, 1);
                    self.$message.success('删除成功！');
                    if (type==1) {
                        //删除: 指定区域运费设置
                        self.ft_tableData1.splice(index,1);
                    } else {
                        //删除: 指定条件包邮
                        self.ft_tableData2.splice(index,1);
                    }
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
         //时间处理函数
        dateFormat(row, column, cellValue, index){
            return zm_dateFormat(daterc.time);           
        },
        tree_nodeExpand(data, node, ele){
            // 节点被展开时触发的事件
            // console.log('---打开：node_expand= '+zm_jsonToString(data));
            // console.log('---打开：node_expand= '+node.expanded);
            // console.log('---打开：node_expand= '+ele +'\n');
            data.expanded = true;
            for (let i = 0; i < data.children.length; i++) {
                const element = data.children[i];
                element.expanded = true;
            }
        },
        tree_nodeCollapse(){
            // 节点被关闭时触发的事件
            console.log('---关闭：node_collapse');
        },
        tree_checkChange(data, checked, childrenChecked){

            return;
            // 节点选中状态发生变化时的回调
            console.log('---点击状态1：check_change= '+zm_jsonToString(data));
            console.log('---点击状态2：check_change= '+checked +'、'+childrenChecked);
            this.fatherChecked = checked;
            this.sonChecked    = childrenChecked;

            var currentData =  JSON.parse(JSON.stringify(data));
            //有下级列表
            if (data.children.length>0) {
                console.log('---1.有下级列表');
                if (checked==true && childrenChecked==false) {
                    //选中的 就添加（选中的是父级）
                    console.log('---1.有下级列表 选中的是父级= '+data.id +'\n\n\n');
                    // console.log('---1.有下级列表 选中的是父级 selectTreeData= '+zm_jsonToString(this.selectTreeData));
                    // 移除原来的
                    for (let i = 0; i < this.selectTreeData.length; i++) {
                        const element = this.selectTreeData[i];
                        if (element.id == data.id) {
                            this.selectTreeData.splice(i, 1);
                            break;
                        }
                    }
                    // 添加最新的
                    this.selectTreeData.push(currentData);

                } else {
                    if (checked==false && childrenChecked==false) {
                        //反选的 就移除
                         console.log('---1.有下级列表 反选的是父级1 selectTreeData= '+zm_jsonToString(this.selectTreeData));
                        for (let i = 0; i < this.selectTreeData.length; i++) {
                            const element = this.selectTreeData[i];
                            if (element.id == data.id) {
                                console.log('---1.有下级列表 反选的是父级');
                                this.selectTreeData.splice(i, 1);
                                break;
                            }
                        }
                        console.log('---1.有下级列表 反选的是父级2 selectTreeData= '+zm_jsonToString(this.selectTreeData) +'\n\n\n');
                    } 
                }
            } else {
                console.log('---2.无下级列表 \n\n\n');
                //data.children.length==0
                //无下级列表
                 if (checked==true && childrenChecked==false)  {
                     if (data.expanded==false) {
                         //选中的 就添加
                         this.selectTreeData.push(currentData);
                     }
                } else {
                    //反选的 就移除
                   
                }
            }

            // self.selectTreeData = treeData;
        },
        tree_check(data, odjNode){
            // 当复选框被点击的时候触发
            // console.log('---check1：data= '+zm_jsonToString(data));
            // console.log('---check2：odjNode= '+zm_jsonToString(odjNode));
            // console.log('---checkedKeys1= '+zm_jsonToString(odjNode.checkedKeys));
            // console.log('---checkedKeys2= '+zm_jsonToString(this.$refs.tree1.getCheckedKeys()));

            this.tree_cityCheckedList = [];
            this.tree_cityIdCheckedList= [];

            this.tree_cityIdCheckedList= JSON.parse(JSON.stringify(odjNode.checkedKeys));
            let regionId1 = "";
            let regionId2 = "";

            for (let i = 0; i < odjNode.checkedNodes.length; i++) {
                const element = odjNode.checkedNodes[i];
                if (element.children.length==0) {
                    //直辖市
                    regionId2 = element.id +"";
                    // console.log('---regionId= '+regionId1.substring(0,2) +'、'+regionId2.substring(0,2));
                    if (regionId1.substring(0,2) != regionId2.substring(0,2)) {
                        this.tree_cityCheckedList.push(element.label);
                    }
                } else {
                    if (zm_beArrayContains2(element.id, this.tree_cityIdCheckedList)) {
                        //添加省
                        regionId1 = element.id +"";
                        this.tree_cityCheckedList.push(element.label);
                    }else{
                        for (let n=0; n < element.children.length; n++) {
                            const item = element.children[n];
                            //添加省的 下级市
                            this.tree_cityCheckedList.push(item.label);
                        }
                    }
                }
            }

            return;

            

        //    if (odjNode.halfCheckedNodes.length>0) {
        //        // 子节点被点击
        //         let fatherNode = odjNode.halfCheckedNodes[0];
        //         let isBreak = false;
        //         let fatherSelecded = false; //父级是否 已经被选中
        //         let sonSelecded    = false; //子级是否被选中
        //         let regionNull     = false; //父级是否被清空
        //         var regionId1 = data.id +"";
        //         var regionId2 = "";
        //         for (let i=0; i < odjNode.halfCheckedNodes.length; i++) {
        //            const element = odjNode.halfCheckedNodes[i];
        //            //区域是否相同
        //            regionId2 = element.id +"";
        //            if (regionId1.substring(0,2) == regionId2.substring(0,2)) {
        //                regionNull = false;
        //                fatherNode = element;
        //                break;
        //            }else{
        //                regionNull = true;
        //            }
        //         }
        //         console.log('---父级是否被清空 regionId1= '+regionId1);
        //         console.log('---父级是否被清空 regionNull= '+regionNull);
        //         console.log('---父级是否被清空 selectTreeData= '+zm_jsonToString(this.selectTreeData));
        //         var regionId3 = "";
        //         if (regionNull) {
        //             for (let i=0; i < this.selectTreeData.length; i++) {
        //                 const element = this.selectTreeData[i];
        //                 regionId3 = element.id +"";
        //                 if (regionId1.substring(0,2) == regionId3.substring(0,2)) {
        //                     this.selectTreeData.splice(i,1);
        //                 }
        //             }
        //         }
               
        //         console.log('---check fatherNodeId= '+fatherNode.id);
        //         var son =  JSON.parse(JSON.stringify(data));
        //         if (this.fatherChecked) {
        //            //一、子节点被 选中
        //             let father = null;
        //             for (let i = 0; i < this.selectTreeData.length; i++) {
        //                 const element = this.selectTreeData[i];
        //                 if (element.id == fatherNode.id) {
        //                     //1、此父级 不是第一次被选中
        //                     fatherSelecded = true;
        //                     father = element;
        //                     break;
        //                 }else{
        //                     //2、此父级 第一次被选中
        //                     fatherSelecded = false;
        //                 }
        //             }

        //             if (fatherSelecded == false) {
        //                 //此父级 第一次被选中
        //                 console.log('---1.此父级 第一次被选中');
        //                 father = { 
        //                     id: fatherNode.id, 
        //                     label: fatherNode.label, 
        //                     children: [] 
        //                 };
        //                 father.children.push(son);
        //                 this.selectTreeData.push(father);
        //             } else {
        //                 console.log('---2.此父级 不是第一次被选中');
        //                 father.children.push(son);
        //                 // this.selectTreeData.push(father);
        //             }
                   
                   
        //        } else {
        //            //二、子节点被 反选（删除）
        //            for (let i = 0; i < this.selectTreeData.length; i++) {
        //                 const element = this.selectTreeData[i];
        //                 if (element.id == fatherNode.id) {
        //                     for (let n=0; n < element.children.length; n++) {
        //                         const item = element.children[n];
        //                         //子级已经被选中 则删除
        //                         if (item.id == data.id) {
        //                             element.children.splice(n, 1);
        //                             isBreak = true;
        //                             break;
        //                         }
        //                     }
        //                 }
        //                 if (isBreak) {
        //                     break;
        //                 }
        //             }

        //        }
        //    } else {
        //        // 父节点被点击
        //        // odjNode.halfCheckedNodes.length==0
        //        if (this.fatherChecked==true && this.sonChecked==false) {
        //            // 父节点被选中
        //        } else if (this.fatherChecked==false && this.sonChecked==false) {
        //            // 父节点被反选
        //            if (odjNode.checkedKeys.length > 0) {
        //                 var regionId1 = data.id +"";
        //                 for (let i=0; i < this.selectTreeData.length; i++) {
        //                     const element = this.selectTreeData[i];
        //                     var regionId2 = element.id +"";
        //                     if (regionId1.substring(0,2) == regionId2.substring(0,2)) {
        //                         this.selectTreeData.splice(i,1);
        //                     }
        //                 }
        //            } else {
        //                this.selectTreeData = [];
        //            }
        //        }
        //    }
        //    console.log('---check3= '+odjNode+'\n\n');

        },
        tree_remove(node, data) {
            const parent = node.parent;
            const children = parent.data.children || parent.data;
            const index = children.findIndex(d => d.id === data.id);
            const element = children[index];
            
            console.log('---tree_remove: index = '+index);
            console.log('---tree_remove: data.id   = '+data.id);
            console.log('---tree_remove: element.id= '+element.id);
            console.log('---tree_remove: getCheckedKeys= '+this.$refs.tree2.getCheckedKeys());
            console.log('---tree_remove: children= '+zm_jsonToString(children));  
            // console.log('---tree_remove: parent.parent.data= '+zm_jsonToString(parent.parent.data));  
            console.log('---tree_remove: parent.data= '+zm_jsonToString(parent.data));  

            // console.log(this.$refs.tree.getCheckedNodes());
            const getCheckedKeys = JSON.parse(JSON.stringify( this.$refs.tree1.getCheckedKeys() ));
            console.log('---tree1_remove: getCheckedNodes= '+this.$refs.tree1.getCheckedNodes());
            console.log('---tree1_remove: getCheckedKeys1= '+this.$refs.tree1.getCheckedKeys().length+'、' +this.$refs.tree1.getCheckedKeys());
            console.log('---tree1_remove: getCheckedKeys2= '+getCheckedKeys.length+'、' +getCheckedKeys);
            
            let regionId1 = data.id +"";
            let regionId2 = "";
            if (parent.data.id== null || parent.data.id==undefined) {
                
                let checkedKeys = JSON.parse(JSON.stringify( getCheckedKeys ));
                // let hasParent = false;
                for (let i=getCheckedKeys.length-1; i>=0; i--) {
                    const element = getCheckedKeys[i];
                    // console.log('---tree_remove: elementId= '+element +'、'+data.id);
                    regionId2 = element +"";
                    if (regionId1.substring(0,2) == regionId2.substring(0,2)) {
                        console.log('---tree_remove= '+ i + '、regionId= ' +regionId1.substring(0,2) +'、'+regionId2.substring(0,2));
                        // 属于父级 的内容（tree1）
                        getCheckedKeys.splice(i,1);
                    }
                }

                console.log('---tree1_remove: checkedKeys3= '+getCheckedKeys.length+'、' +getCheckedKeys);
                // getCheckedKeys.splice(0,1); //移除父级选择
                // 删除父级（tree2）
                children.splice(index, 1);
                this.$refs.tree1.setCheckedKeys( getCheckedKeys );
                return;
            }

            // 删除子级（tree2）
            let hasParent = false;
            for (let i = 0; i < getCheckedKeys.length; i++) {
                const element = getCheckedKeys[i];
                console.log('---tree_remove: elementId= '+element +'、'+parent.data.id);
                if (parent.data.id == element) {
                    // getCheckedKeys.splice(0,1); //移除父级选择（这里移除会改变容量，从而导致错误）
                    hasParent = true;
                }
                if (data.id == element) {
                    getCheckedKeys.splice(i,1);
                    break;
                }
            }
            if (hasParent) {
                getCheckedKeys.splice(0,1); //移除父级选择
            }
            
            children.splice(index, 1);
            if (getCheckedKeys.length==0) {
                parent.parent.data.splice(index, 1);
            }
            console.log('---tree1_remove: getCheckedKeys3= '+getCheckedKeys.length+'、' +getCheckedKeys);
            // this.$refs.tree1.setCheckedKeys([]); 
            this.$refs.tree1.setCheckedKeys( getCheckedKeys );
           
            console.log('---tree1_remove: getCheckedKeys4= '+this.$refs.tree1.getCheckedKeys().length+'、' +this.$refs.tree1.getCheckedKeys());
            

        },
        request_regionData(){
            //请求：区域列表
            let self = this;
            let urlStr = baseapi.mh_regionAllList;  
            console.log('---区域列表 urlStr= '+urlStr);          
            this.$http({
                method: "get",
                url: urlStr,
                'Content-Type':'Application/json'
            }).then(function(res){
                console.log('---区域列表 response= '+zm_jsonToString(res.data));
                if(res.status ==200){
                    self.regionList = res.data.list;

                    let treeData = [];
                    for (let i = 0; i < self.regionList.length; i++) {
                        const element = self.regionList[i];
                        //添加结点
                        const father = { 
                            id: element.id, 
                            label: element.name, 
                            children: [],
                            expanded: false,
                        };
                        if (element.childList) {
                            for (let n= 0; n<element.childList.length; n++) {
                                const item = element.childList[n];
                                const son = { 
                                    id: item.id, 
                                    label: item.name, 
                                    children: [],
                                    expanded: false,
                                };
                                father.children.push(son);
                            }
                        }
                        treeData.push(father);
                    }
                    self.treeData = treeData;
                    // self.selectTreeData = treeData;
                    
					// for(var i = 0; i < self.regionList.length; i++) {
					// 	var region = self.regionList[i];
					// 	self.provinceList.push(region[1])
					// 	self.provinceNumList.push(region[0])
					// }
                    // console.log('---provinceList：' + self.provinceList, '\n\n---provinceNumList：' + self.provinceNumList);
                } else {
                    that.$message.error(res.data.message);
                }
            })
        },
        request_regionDataById(regionId){
            //请求：市/区列表
            if (regionId==null || regionId=='') {
                return;
            }
            let self = this;
            let urlStr = "https://api.mihuanshop.com/user/region/list?regionId=" + regionId;
            // console.log('---市/区 urlStr= ', urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                'Content-Type':'Application/json'
            })
            .then(function(res){
                // console.log('---市/区列表 response= '+zm_jsonToString(res.data));
                if(res.status ==200){
                    var regionList = res.data.list;
                    self.cityList = [];
                    self.cityNumList = [];
					for(var i = 0; i < regionList.length; i++) {
						var region = regionList[i];
						self.cityList.push(region[1])
						self.cityNumList.push(region[0])
					}
                    console.log('---cityList= ' + self.cityList, '\n\n---cityNumList= ' + self.cityNumList);
                } else {
                    that.$message.error(res.data.message);
                }
            })
        },        
    },
    components:{
        navbar,secnavbar,sidebar
    }
}

</script>

<style scoped >

.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }


/* .ft_transporTableTitle >>> .el-button--text {
    color: #4B75FF !important;
} */
.ft_transporTableTitle {
    color: #4B75FF !important;
}
.ft_transporTableTitle2 {
    color: #4B75FF !important;
    margin: 10px 0 0 80px;
}

.ftc_selectRegionView{
    display: flex;
    margin-left: 20px;
}
.normalRegionView {
    width: 260px;
    background:lavenderblush
}
.selectRegionView{
    width: 260px;
    /* background:yellowgreen; */
    margin-left: 20px;
}

 .ftc_elementView{
     display: flex;
     margin-bottom:20px ;
 }
 .ftc_elementTitle{
    font-size: 13px !important;
    font-weight: 500;
    margin-top: 8px;
}
.ftc_input {
    width: 200px;
}
.ftc_billingWay{
    margin-top: 9px;
}
.ftc_transportExplain{
    margin-top: 8px;
    margin-left: 2px;
    color: red;
}
.ftc_normalTransportView{
    display: flex;
    border: 1px solid #dddddd;
    height: 50px;
    width: 700px;
    margin-left: 65px;
    font-weight: 500;
    font-size: 13px !important;
    margin-top: -10px;
}
.ftc_normalTransportTitle1{
    margin-left: 10px;
    margin-top: 15px;
    font-weight: 600;
    font-size: 13px !important;
}
.ftc_normalTransportTitle{
    margin-left: 20px;
    margin-top: 15px;
}
.ftc_normalTransportInput{
    width: 60px;
    height: 20px !important;
    margin-top: 8px;
}
.zm_elInput >>> .el-input__inner{
    padding: 0 0px !important;
    text-align: center;
}

.ftc_transportTitle{
    display: flex;
    margin: 50px 0 5px 65px;
    font-weight: 500;
}
.ftc_transportSubTitle{
    font-size: 11px;
    /* font-weight: 300; */
    color: #bbbbbb;
}

.ftc_transportContent{
    margin: 5px 0 5px 65px;
    border: 0.5px solid #dddddd;
}


.emc_btnView{
    display: flex;
    margin-bottom: 100px;
    justify-content: center;
}
.emc_saveBtn {
    margin: 0px 0 0px 40px;
}

.ft_transporTableView >>> .el-table__row>td{
    /* 去除中间分割线 */
    border: none;
}
.ft_transporTableView >>> th.is-leaf {
    /* 去除最上边分割线 */
    border: none;
}
.el-table::before {
     /* 去除最下边分割线 (有效)*/
    height: 0px;
}
.ft_transporTableView {
    margin: 10px 0px 0px 0px;
    /* width: 800px; */
}
.ft_transporTableView  >>> td {
    padding: 5px !important;
}
.ft_transporTableView >>> tbody tr:hover>td { 
    background-color:#ffffff !important;
}
.ft_transporTableContent{
    /* background: yellow; */
    margin: 2px;
    display: flex;
}
.ft_transporTableView .ft_transporTableInput {
    width: 100px;
    height: 20px !important;
    margin-bottom: 10px;
}
.ft_tableSub{
    margin:5px 10px 0 10px ;
}
.ft_addBtn {
    margin: 5px 0 0 20px;
}



</style>



   
            
           