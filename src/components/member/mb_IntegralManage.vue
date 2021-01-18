
<template>
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <membersecnavbar></membersecnavbar>
            <div class="main-goods-right">

                <!-- 商品中心内容 -->
                <div >
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing">
                        <!-- 面包屑 -->
                        <div class="mh-coupon-divtop">
                            <el-breadcrumb separator-class="el-icon-arrow-right">
                                <div class="mh_title"> 积分商城 </div> 
                            </el-breadcrumb>     
                        </div>
                        <!-- 面包屑over -->


                        <div class="im_searchView">
                                <div class="sx-input">
                                    <label class="el-form-item__label" style="width: 80px;">活动名称:</label>
                                    <el-input v-model="goodsID" style="width: 190px;min-width: 128px" placeholder="" ></el-input>
                                </div>
                                <div class="vip-item-list_time mh-market-timeleght" >
                                    <label class="el-form-item__label" style="width: 120px;">创建时间:</label>
                                    <el-date-picker v-model="dateValue"
                                        value-format="timestamp" type="daterange" style="width: 260px"
                                        start-placeholder="开始日期" range-separator="至"
                                        end-placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                           
                              <div class="search_btnView">
                                <button @click="searchClick"  type="button" class="el-button el-button--primary el-button--small"><span>筛选</span></button>
                                <button @click="clearDataClick"  type="button" class="el-button el-button--text"><span>清空筛选条件</span></button>
                              </div> 
                        </div>

                        <div class="ms_headerView">
                            <el-button class="smc_addBtn" type="add" size="medium" @click="msg_addCilck">+ 添加商品</el-button>
                            <!-- <el-button class="smg_saveBtn1" type="save" size="medium" @click="msg_saveCilck">保存</el-button> -->
                        </div>

                        <el-table class="cbd_tableView2" :data="tableData" border style="width: 100%">
                            <el-table-column label="商品" align="center" width="180"> 
                                <template slot-scope="scope" > 
                                    <div class="im_goodsView" >
                                        <img :src="scope.row.itemImageUrl" alt="" width="40" height="40" style="margin-right:8px;border-radius: 10px;">
                                        <br>
                                        <div class="im_goodsName">{{scope.row.itemName}}</div>
                                    </div> 
                                </template>
                            </el-table-column>
                            <el-table-column prop="phone" label="规格SKU" align="center"> 
                                <template slot-scope="scope" > 
                                    <div v-for="(itemgoods, indexgoods) of scope.row.skuList" :key="indexgoods" style="display:flex;">
                                                <!-- <el-checkbox class="mscg_checkbox2" v-model="itemgoods.checkboxed" ></el-checkbox> -->
                                                <div class="mscg_specification">
                                                    <div style="display:flex;" v-for="(skuitem, skuindex) of itemgoods.skuPvlist" :key="skuindex">                                        
                                                        <div class="mscg_specification1">{{skuitem[0]}}:</div> 
                                                        <div class="mscg_specification2">{{skuitem[1]}}</div>  
                                                    </div>
                                                </div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="" label="兑换" align="center" width="230"> 
                                <template slot-scope="scope" > 
                                    <div v-for="(itemgoods, indexgoods) of scope.row.skuList" :key="indexgoods" style="display:flex;">
                                                <div class="msg_inputView1">
                                                    <el-input v-model="itemgoods.exchangeIntegral" size="mini" class="msg_priceInput zm_elInput" type="number" >
                                                    </el-input><div class="">积分+</div>
                                                    <el-input v-model="itemgoods.exchangeMoney" size="mini" class="msg_priceInput2 zm_elInput" type="number" >
                                                    </el-input><div class="">元</div>
                                                </div>
                                                <div class="msg_inputView">
                                                    <el-input v-model="itemgoods.integralInventoryTotal" size="mini" class="msg_priceInput zm_elInput" type="number" >
                                                    </el-input>  
                                                </div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="orderNum" label="活动库存" width="100" align="center"> 
                                 <template slot-scope="scope" > 
                                    <div v-for="(itemgoods, indexgoods) of scope.row.skuList" :key="indexgoods" style="display:flex;">
                                                <!-- <div class="msg_inputView"> -->
                                                    <el-input v-model="itemgoods.integralInventoryTotal" size="mini" class="msg_priceInput zm_elInput" type="number" >
                                                    </el-input>  
                                                <!-- </div> -->
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="gradeName" label="已兑换/剩余" width="100" align="center"> 
                                 <template slot-scope="scope" > 
                                    <div v-for="(itemgoods, indexgoods) of scope.row.skuList" :key="indexgoods" style="display:flex;">
                                        <div class="im_inventoryView2">
                                            {{itemgoods.integralInventorySurplus}} / {{itemgoods.integralInventoryTotal- itemgoods.integralInventorySurplus}}
                                        </div>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="integral" label="上下架" width="150" align="center"> 
                                <template slot-scope="scope" > 
                                    <div class="msg_skuTitle8">
                                            <el-switch v-model="scope.row.skuList[0].status" @change="changeSwitch(scope.$index, scope.row)"
                                                active-color="#13ce66" inactive-color="#DCDFE6" 
                                                :active-value='1' :inactive-value='0'
                                                active-text="上架" inactive-text="下架">
                                            </el-switch>
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="integral" label="操作" width="90" align="center"> 
                                <template slot-scope="scope" > 
                                    <el-button class="msg_opreateDetele" size="small" type="text" @click="msg_deleteClick(scope.row, scope.$index)"> 
                                        删除</el-button>
                                </template>
                            </el-table-column>
                        </el-table>



                        <!-- <table class="msg_tableView" border="1 1 1 1" cellspacing="" cellpadding="">
                            <thead>
                                <tr class="msg_tr msg_tr1">
                                    <th class="zm_th tableView1_th">
                                        <div class="msg_skuTitle1"> 商品 </div> 
                                    </th>
                                    <th class="zm_th tableView2_th">
                                        <div class="msg_skuTitle2">
                                            <el-checkbox class="mscg_checkbox1" v-model="allCheckboxed"></el-checkbox>
                                            <div>规格SKU</div>
                                        </div>    
                                        <div class="msg_skuTitle3"> 兑换 </div>
                                        <div class="msg_skuTitle"> 活动库存 </div>
                                        <div class="msg_skuTitle"> 已兑换/剩余 </div>
                                        <div class="msg_skuTitle8"> 上下架 </div> 
                                        <div class="msg_skuTitle9"> 操作 </div>
                                    </th>
                                </tr>
                            </thead>

                            <tr class="msg_tr" v-for="(item, index) in tableData">
                                <td class="msg_td msg_td1">
                                    <div class="im_goodsView" >
                                        <img :src="item.itemImageUrl" alt="" width="40" height="40" style="margin-right:8px;border-radius: 10px;">
                                        <br>
                                        <div class="im_goodsName">{{item.itemName}}</div>
                                    </div>      
                                </td>
                                <td class="msg_td msg_td2" id="" >
                                    <div style="display:flex;"> 
                                        <div class="specification_View">
                                            <div v-for="(itemgoods, indexgoods) of item.skuList" :key="indexgoods" style="display:flex;">
                                                <el-checkbox class="mscg_checkbox2" v-model="itemgoods.checkboxed" ></el-checkbox>
                                                <div class="mscg_specification">
                                                    <div style="display:flex;" v-for="(skuitem, skuindex) of itemgoods.skuPvlist" :key="skuindex">                                        
                                                        <div class="mscg_specification1">{{skuitem[0]}}:</div> 
                                                        <div class="mscg_specification2">{{skuitem[1]}}</div>  
                                                    </div>
                                                </div>

                                                <div class="msg_inputView1">
                                                    <el-input v-model="itemgoods.exchangeIntegral" size="mini" class="msg_priceInput zm_elInput" type="number" >
                                                    </el-input><div class="">积分+</div>
                                                    <el-input v-model="itemgoods.exchangeMoney" size="mini" class="msg_priceInput2 zm_elInput" type="number" >
                                                    </el-input><div class="">元</div>
                                                </div>
                                                <div class="msg_inputView">
                                                    <el-input v-model="itemgoods.integralInventoryTotal" size="mini" class="msg_priceInput zm_elInput" type="number" >
                                                    </el-input>  
                                                </div>
                                                <div class="im_inventoryView2">
                                                    {{itemgoods.integralInventorySurplus}} / {{itemgoods.integralInventoryTotal- itemgoods.integralInventorySurplus}}
                                                </div>
                                            </div>
                                        </div>     
                                        
                                        <div class="msg_skuTitle8">
                                            <el-switch v-model="item.skuList[0].status" @change="changeSwitch(index, item)"
                                                active-color="#13ce66" inactive-color="#DCDFE6" 
                                                :active-value='1' :inactive-value='0'
                                                active-text="上架" inactive-text="下架">
                                            </el-switch>
                                        </div>

                                        <div class="msg_skuTitle9">
                                            <el-button class="msg_opreateDetele" size="small" type="text" @click="msg_deleteClick(item, index)"> 
                                                删除</el-button>
                                        </div>
                                    
                                    </div>
                                </td>
                            </tr>
                        </table> -->

                        <!-- 
                            <el-button class="msg_opreateDetele" size="small" type="text" @click="msg_deleteClick(item, index)"> 
                                    删除</el-button>
                            <el-button class="msg_opreateTop" size="small" type="text" @click="msg_priceClick(item, index)"> 
                                置顶🔝</el-button> 
                        -->

                        <div class="el-row mb_pageView" style="display:flex;justify-content:flex-end;">
                            <div class="mb_pageView-twodiv" >
                                <el-pagination @current-change="handleCurrentChange"
                                    layout="total, prev, pager, next, jumper"
                                    :current-page="currentPage4"
                                    :page-sizes="[100, 200, 300, 400]"
                                    :page-size="10"
                                    :total="totalCount">
                                </el-pagination>
                            </div>
                        </div>

                        <el-button class="msg_saveBtn" type="primary"  @click="msg_saveCilck(1)">保存</el-button>

                        <!-- 选择商品 -->
                        <goodsSpec ref="goodsSpec"></goodsSpec>


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
import membersecnavbar from './membersecnavbar';
import network from '../../utils/api';
import {    
        zm_jsonToString,
        zm_formDataToString,
        zm_tipsMsg,
        zm_timestampToDate
    } from "../../filters/zm_tools"
    import {    
        zm_beArrayContains1,
        zm_beArrayContains2
    } from "../../filters/zm_array"

import goodsSpec from '../resource/goodsSpec_mh4.vue';

export default {
     data() {
        return {
            num: 1,
            totalCount:0,
            tableData: [],
            selectIds: [],
            currentPage4: 1, 
            // ms_sessionData: '',
            allCheckboxed: 0,
            goodsID: '',
            dateValue: '',
            startTime: '',
            endTime: '',
            //商品
            goodsMap: new Map(),
            fatherGoodsMapKeys: [],
            sPrice:'',
            selectProduct: {},
        }
    },
    created(){
        // console.log('--------created 模板渲染前');
       
    },
    mounted(){
        console.log('--------mounted 安装初始化成功：模板渲染后 商品管理');
        this.tableData = [];
        let self = this;
        setTimeout(()=>{
            self.request_skulist(1, 1);
        }, 200);
        // // 父组件传数据 给 子组件
        // this.$refs.goodsSpec.son_sconfirmCilck(this.tableData, '已经选择的商品');
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){

            } else {
                next('/login');
            }
		})
    },
     watch:{
        dateValue: function(val) {
		    console.log('---selectDate: ' + val)
			if(val) {
				this.startTime = zm_standardDateToFormatDate(val[0], 1);
                this.endTime   = zm_standardDateToFormatDate(val[1], 1);
                // this.startTime = val[0];
                // this.endTime = val[1];
                console.log("---startTime= "+ this.startTime+ "、endTime= "+this.endTime);
			}
        },
        allCheckboxed: function(val) {
            console.log('---allCheckboxed= ' + val);
            // let list = res.data.list;
            this.tableData.forEach(function(item,index){
                item.skuList.forEach(function(sonitem, sonindex){
                    sonitem.numid = val;
                    sonitem.checkboxed = val;     //是否被选择
                })   
            });
        },
        goodsMap(val, oldVal){
            //获取商品
            // console.log('-----watch: goodsMap= '+ val);
            // console.log('-----watch: goodsMap1= '+ zm_jsonToString(val));
            // console.log('-----watch: goodsMap2= '+ zm_jsonToString(oldVal));
            let newArr = [];
            val.forEach(function (value, key, map) {
                newArr.push(value)
            });
            console.log('-----newArr.length= '+ newArr.length);
            console.log('---fatherGoodsMapKeys= '+this.fatherGoodsMapKeys); 
            console.log('-----watch: goodsMap2 newArr= '+ zm_jsonToString(newArr));

            this.selectIds = [];
            let tableData = [];
            let addTableData = [];
            let self = this;
            newArr.forEach(function(item, index){
                // 积分商品Id 是否被选中
                if (zm_beArrayContains1(item.id, self.fatherGoodsMapKeys)) {
                    // item.numId = true; //已选中
                    // self.goodsMap.set(item.id, item);
                }else{
                    // 未选中
                    console.log('-----watch: goodsMap2 未选中 item= '+ zm_jsonToString(item));
                    addTableData.push( item ); 
                    self.tableData.push( item );
                }
            });
            // console.log('-----tableData.length= '+ tableData.length);
            // console.log('-----addTableData.length= '+ addTableData.length);
            //请求：积分-添加商品
            this.request_addProduct(addTableData);
         },
         deep:true //true 深度监听
    },
    methods: {  
        changeSwitch(index, rowItem) {
			//var item = this.tableData[index];
            console.log('---changeSwitch 选择了: index_' + index + '、spZdsc= ' + rowItem.spZdsc);
            this.msg_saveCilck(2, rowItem);
		},
        searchClick(){
             this.request_skulist(1, 1);
        },
        clearDataClick(){
            this.goodsID = '';
            this.dateValue = '';
            this.stimeStart = '';
            this.stimeEnd = '';
        },
        msg_addCilck(){
            this.$refs.goodsSpec.upgoodsvalue = true;
        },
        sendToGoodsSpec(){
            this.$refs.goodsSpec.son_sconfirmCilck(this.tableData, '已经选择的商品');
        },
        //请求：添加商品
        request_addProduct( addTableData ){
            console.log('---添加积分商品' );
            let self = this;
            let productList = [];
            let item = {
                itemId: '',
                skuId: '',
                integralInventoryTotal:'',
                integralInventorySurplus:1,
                exchangeIntegral: '',
                exchangeMoney: '',
                id: '',
            };
            for (let i=0; i<addTableData.length; i++) {
                const element   = addTableData[i];
                console.log('---积分-添加商品 element_'+i+'= '+ zm_jsonToString(element)); 
                item.itemId     = element.id; // spuId
                for (let n = 0; n < element.skuList.length; n++) {
                    // console.log('---积分-添加商品 skuItem_'+ n+'= '+ zm_jsonToString(skuItem)); 
                    // sku信息
                    const skuItem = element.skuList[n];
                    item.skuId                   = skuItem.id;
                    item.integralInventoryTotal  = 1;
                    item.exchangeIntegral = 1;
                    item.exchangeMoney    = 1*100;
                    item.status           = 0;
                    productList.push( JSON.parse(JSON.stringify(item)) );//JSON 防止指针重复数据
                }
            }
            let urlStr = network.integralApiIP + network.int_skuUpdate;
                // urlStr = "http://172.16.1.218:9090/sku/admin/update";
            let params = new FormData();       
            params.append('skus', JSON.stringify( productList));            
            console.log('---积分-添加商品 urlStr= ', urlStr+ '\n params'+ zm_formDataToString(params)); 
           
            this.$http({ 
                method: "post", 
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            }).then(function(res){
                console.log('---积分-添加商品：response= '+zm_jsonToString(res.data));
                if(res.data.status ==200){
                    self.$message.success("添加成功！");
                    self.request_skulist(1, 2); //刷新列表
                } else {
                    self.$message.error(res.data.message);
                }
            })
            
        },
        //修改积分商品 type: 1.保存全部、2修改上下架状态
        msg_saveCilck(type, changeData){
            
            let self = this;
            let productList = [];
            if (type==1) {
                console.log('---请求_修改商品：1保存全部' );
                var item = {
                    itemId: '',
                    skuId: '',
                    inventorySurplus: '',
                    exchangeIntegral: '',
                    exchangeMoney: '',
                    inventoryTotal: '',
                    id: '',
                };
                for (let i = 0; i < this.tableData.length; i++) {
                        const element = this.tableData[i];
                        // item.itemId = element.itemId;
                        for (let n = 0; n < element.skuList.length; n++) {
                            // sku信息
                            const skuItem = element.skuList[n];
                            // skuItem.id    = skuItem.integralSkuId;
                            skuItem.exchangeMoney           = skuItem.exchangeMoney*100;
                            skuItem.integralInventoryTotal  = skuItem.integralInventoryTotal*1;
                            skuItem.exchangeIntegral        = skuItem.exchangeIntegral*1;
                            skuItem.status= skuItem.status;
                            productList.push( JSON.parse(JSON.stringify(skuItem)) );
                            skuItem.exchangeMoney           = skuItem.exchangeMoney/100;
                        }
                }
            } else if (type==2) {
                console.log('---请求_修改商品：2修改上下架状态' );
                const skuItem = changeData.skuList[0];
                // skuItem.id    = skuItem.integralSkuId;
                skuItem.status= skuItem.status*1;
                skuItem.exchangeMoney = skuItem.exchangeMoney*100;
                productList.push( JSON.parse(JSON.stringify(skuItem)) );
                skuItem.exchangeMoney = skuItem.exchangeMoney/100;
            }
            let urlStr = network.integralApiIP + network.int_skuUpdate;
                // urlStr = "http://172.16.1.218:9090/sku/admin/update";
            let params = new FormData();       
            params.append('skus', JSON.stringify( productList));            
            console.log('---积分: 修改商品 urlStr= ', urlStr+ '\n params'+ zm_formDataToString(params)); 
           
            this.$http({ 
                method: "post", 
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            }).then(function(res){
                console.log('---积分 修改商品：response= '+zm_jsonToString(res.data));
                if(res.data.status ==200){
                    self.$message.success("保存成功！");
                    setTimeout(() =>{
                        // self.$router.go(-1);
                        // self.$router.back(-1);
                        // self.$router.back();
                    }, 1000);
                } else {
                    self.$message.error(res.data.message);
                }
            })
        },
       //请求：积分商品管理列表
       request_skulist(page, type){
            let self = this;
            let params = new FormData();
                params.append('page', page);  
                params.append('limit',20);
                params.append('uid',this.goodsID);
                params.append('stimeStart', this.startTime);
                params.append('stimeEnd', this.endTime);
            let urlStr = network.integralApiIP + network.int_skulist;

            // console.log('---积分商品管理列表 urlStr= ', urlStr+ '\n params'+ zm_formDataToString(params)); 
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
            }).then(function(res){
                console.log('---积分商品管理列表 urlStr= ', urlStr+ '\n params'+ zm_formDataToString(params)
                +'\n:response= '+zm_jsonToString(res.data));
                // console.log('---积分商品管理列表 原数据= ',zm_jsonToString(res.data)); 
                if (res.data.list==null) {
                    return;
                }                 
                let list = res.data.list;
                self.tableData = res.data.list;
                let tableData = res.data.list;
                let spu_Item = {
                    inventoryTotal: '',
                    createtime: '',
                    skuList: [],
                    skuPvlist: [],
                    checkSuser: '',
                    checkSuserName: '',
                    isIssue: '',
                    createSuserName: '',
                    priceEnd: '',
                    priceStart: '',
                    sort: '',
                    inventorySurplus: '',

                    saleNum: '',
                    createSuser: '',
                    viewnum: '',
                    brandId: '',
                    imageUrl: '',
                    name: '',
                    itemImageUrl: '',
                    itemName: '',
                    id: '',
                    opreateType: 1,
                    exchangeIntegral: '',
                    skuInventorySurplus: '',
                    exchangeMoney: '',
                }
                console.log('---积分商品管理列表 原数据 list.length= ', list.length); 

                var last_spuId = '';
                for (let i = 0; i < tableData.length; i++) {
                    const element = tableData[i];
                    var spuId = element.itemId;
                    element.spuId    = element.itemId;
                    element.name     = element.itemName;
                    element.imageUrl = element.itemImageUrl;

                    for (let n = 0; n < element.skuList.length; n++) {
                        var skuItem = element.skuList[n];
                        // skuItem.integralSkuId            = skuItem.id;              //主键id
                        // skuItem.integralSkuInventoryTotal= skuItem.inventoryTotal;  //活动总库存
                        // skuItem.exchangeIntegral=          skuItem.exchangeIntegral;//兑换积分
                        // skuItem.exchangeMoney=             skuItem.exchangeMoney;   //兑换金额
                        // skuItem.status=                    skuItem.status;          //状态，1上架0下架
                        // skuItem.id      = element.skuId;     //skuId
                        skuItem.exchangeMoney = skuItem.exchangeMoney/100;
                        skuItem.itemId  = element.itemId;    //spuId
                        skuItem.skuList = element.skuPvlist;   //规格 skuPvlist
                        skuItem.checkboxed = false;          //是否被选择
                    }
                }
                self.tableData = tableData;
                // console.log('---积分商品管理列表 处理后= ',zm_jsonToString(tableData)); 
                console.log('---积分商品管理列表 处理后 list.length= ', tableData.length); 
                if (type==1) {
                    self.$refs.goodsSpec.son_sconfirmCilck(self.tableData, '已经选择的商品');
                }
                // self.sendToGoodsSpec();
            }).catch(function(error){
                console.log('---积分商品管理列表 error= ', error);
            }); 
        },
        msg_deleteClick(item, index){
            console.log('---删除商品 index= '+index +'、item= '+zm_jsonToString(item));
            let itemId = item.itemId;
            let self = this;
            let urlStr = network.integralApiIP + network.int_delete;
            let params = new FormData();       
                params.append('itemId', item.itemId);  
            console.log('---删除商品 params：' + zm_formDataToString(params), 'urlStr= ', urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type':'Application/json'
            })
            .then(function(res){
                console.log('---删除商品：response= '+zm_jsonToString(res));
                if(res.status ==200){
                    self.$message.success("删除商品 成功！");
                    self.tableData.splice(index, 1);
                    self.$refs.goodsSpec.son_sconfirmCilck(self.tableData, '已经选择的商品', itemId);
                } else {
                    self.$message.error(res.data.message);
                }
            })

        },
        handleCurrentChange(value){
            // 分页
            this.request_skulist(value, 1);
        },
    },
    components:{
        navbar,membersecnavbar,sidebar, goodsSpec
    }
}
</script>

<style scoped>

.mh_title{
    font-size: 15px !important;
}

.im_goodsView{
    text-align: center;
}
.im_goodsName{
    margin-left: -8px;
}
.im_searchView{
    display: flex;
    margin: 10px 0 10px 0;
}

.msg_saveBtn {
    margin: 60px 0 100px 40%;
    width: 150px;
}
.msg_tableView{
    border: 0.8px solid #DFE6E8;
	border-collapse: collapse;
    padding: 10px;
    margin: 0 0 30px 0;
    background: white;
    background-color: white;
}
.zm_th{
    padding: 10px !important;
}
.tableView2_th{
    display: flex;
}
.msg_tr{
    padding: 10px !important;
    margin: 10px;
}
.msg_tr1{
    border-bottom:solid 1px #EBEEF5;
}
.msg_td{
   padding: 10px !important;
   border-bottom:solid 1px #EBEEF5;
}
.msg_td1, .msg_td2{
     border-right:solid 1px #EBEEF5;
}
.msg_skuTitle{
    width: 80px;
    margin: 0 5px 0 5px;
    height: 40px;
    line-height: 40px;
}
.msg_skuTitle1{
    width: 130px;
    height: 40px;
    line-height: 40px;
}
.msg_skuTitle2{
    width: 525px;
    display: flex;
    height: 40px;
    line-height: 40px;
}
.msg_skuTitle3{
    width: 220px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.msg_inputView1{
    width: 220px;
    display: flex;
    height: 40px;
    line-height: 40px;
    text-align: center;
    
}
.msg_skuTitle8{
    width: 120px;
    height: 40px;
    line-height: 40px;
}
.msg_skuTitle9{
    width: 80px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.msg_opreateTop{
    margin-left: -2px;
}


.msg_inputView{
    display: flex;
}
.im_inventoryView2{
    margin: 8px 0 0 0px;
    width: 90px;
    text-align: center;
}
.msg_priceInput{
    width: 70px;
    height: 20px !important;
    justify-content: center !important;
    align-content: center !important;
    margin: 0 5px 20px 15px;
}
.msg_priceInput2{
    width: 70px;
    height: 20px !important;
    justify-content: center !important;
    align-content: center !important;
    margin: 0 5px 20px 5px;
}
.msg_opreateNumberInput{
    width: 60px;
    height: 20px !important;
    margin-bottom: 12px;
}
.el-input >>> .el-input__inner{
    padding: 0 0px !important;
    text-align: center;
}

.mscg_price{
    width: 80px;
    margin-left: 10px;
    text-align: center;
    /* background: lightgoldenrodyellow; */
    height: 35px;
    line-height: 35px;
}
.mscg_checkbox1{
    margin-right: 10px;
}
.mscg_checkbox2{
    margin-right: 10px;
    margin-top: 8px;
}
.mscg_specification{
    min-width: 300px;
    display:flex;
}
.mscg_specification1{
    width: 60px;
    height: 35px;
    line-height: 35px;
    margin-left: 5px;
}
.mscg_specification2{
    min-width: 240px;
    height: 35px;
    line-height: 35px;
    border-right:solid 1px #EBEEF5;
}

.smc_addBtn{
    width: 150px;
    color: #ffffff;
    background: #D33932;
    border-color: #D33932;
}
.el-button--add:focus,
.el-button--add:hover {
    color: #fff;
    background: #e93912;
    border-color: #e93912;
}
.smg_saveBtn1{
    display: inline-flex; float: right;
    color: #ffffff;
    background: #1358C2;
    border-color: #1358C2;
}
.el-button--save:focus,
.el-button--save:hover {
    color: #fff;
    background: #4b86d8;
    border-color: #4b86d8;
}

/* .ms_goodsView{
    margin: 20px 20px 80px 20px;
}
.ms_goodsView .el-table th>.cell{
    text-align: center;
}
.ms_goodsView .el-table td{
   text-align: center;
}
.ms_goodsView .el-input__inner{
  height: 28px !important;
}
.ms_goodsView .el-dialog__body{
    padding: 20px 20px 0;
}
.ms_goodsView .mb_pageView {
    margin-bottom: 80px;
    margin-top: 20px;
} */
.mb_pageView {
    margin-bottom: 80px;
    margin-top: 30px;
}
.ms_headerView{
    width: 100%;
    margin: 50px 50px 20px 0;
}


</style>