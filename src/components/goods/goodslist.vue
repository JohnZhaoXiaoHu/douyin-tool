<template>
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
                <div class="goods-card_body"  v-loading="loading">
            <!--选项卡组件-->
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane :label="'出售中(' + chuSz + ')'" name="first">
                </el-tab-pane>
                <el-tab-pane :label="'已售罄(' + yiGq + ')'" name="second">
                </el-tab-pane>
                <el-tab-pane :label="'仓库中(' + cangKz + ')'" name="third" >
                </el-tab-pane>
                <el-tab-pane :label="'警戒库存(' + jinJku + ')'" name="four" >
                </el-tab-pane>
                <el-tab-pane :label="'待审核(' + daiSH + ')'" name="five">
                </el-tab-pane>
            </el-tabs>

            <!--全部列表-->
                   <div class="goods_btn">
                       <router-link to='/goodslist/goodsissue'>
                             <el-button type="primary" size="small">发布商品</el-button>
                       </router-link>
                       <!-- <el-button type="warning" size="small">导出</el-button> -->
                   </div>

                   <div class="shuaixuan mh-goods-shuaixuan">
                       <div class="m-search-box el-row el-row-my-div">
                           <div class="sx-input">
                               <label class="el-form-item__label" style="width: 190px;min-width: 128px">商品名称或编码：</label>
                               <el-input v-model="value0" style="min-width: 200px;" placeholder="请输入商品的名称"></el-input>
                           </div>

                            <div class="goods-sx-btn">
                                <button  type="button" class="el-button el-button--primary el-button--small" @click="shopshuaixuan(1,1)"> <span>筛选</span></button>
                                <button  @click="cleardata" type="button" class="el-button el-button--text"> <span>清空筛选条件</span></button>
                            </div>
                       </div>
                       
                       

                    </div>

                    <!-- 列表 -->
                    <div class="goods_table-all">
                        <el-table ref="multipleTable" :data="goodslist" tooltip-effect="dark" border style="width:100%"
                            :default-sort = "{prop: 'date', order: 'descending'}"
                            @selection-change="goodshandleSelectionChange">     
                            <el-table-column type="selection" width="50" align="center">
                            </el-table-column>
                            <el-table-column  prop="id" abel="商品ID" sortable width="80" align="center">
                            </el-table-column>
                            <el-table-column prop="goods" label="商品" width="300">
                                <template slot-scope="scope">
                                    <div class="goods-table" style="width:100%;">
                                        <img :src="scope.row.picture" alt="" :title="scope.row.name" width="60" height="60" style="cursor: pointer;">
                                        <ul class="good_table-ul" style="width:120px">
                                            <li style="display: flex;align-items: center;">
                                                <span style="width:30px;display: inline-block;">名称:</span> 
                                                <span style="width: 82%; overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{scope.row.name}}</span> 
                                                <!-- <i class="el-icon-edit" @click="updateShopPrice(scope.row.id, scope.row.name)" style="cursor: pointer;"></i> -->
                                            </li>

                                            <li >
                                                <span style="width:40px;">价格:</span>{{scope.row.sellPrice/100}}
                                                <!-- <i class="el-icon-edit" @click="goodspricetan(scope.row.id,scope.$index)"></i> -->
                                            </li>
                                        </ul>
                                    </div>
                                </template>
                            </el-table-column>
                            <!-- <el-table-column prop="inventoryTotal" width="80" label="库存" align="center">
                                <template slot-scope="scope">
                                    <div class="goods-table">
                                        <span>{{scope.row.inventoryTotal}}</span>
                                         <i class="el-icon-edit" style="cursor: pointer;" @click="editkucun(scope.row.id,scope.$index)"></i> 
                                    </div>
                                </template>
                            </el-table-column> -->
                            <!-- <el-table-column prop="saleNum" width="120" label="总销量" show-overflow-tooltip>
                                 <template slot-scope="scope">
                                    <div class="">
                                        <div> 供应商销量: {{scope.row.saleSupplierNum}} </div>
                                        <div> 平台销量: {{scope.row.salePlatformNum}}  </div>
                                    </div>
                                </template>
                            </el-table-column> -->
                            <!-- <el-table-column prop="supplierName" label="供应商" width="120" align="center" show-overflow-tooltip>
                            </el-table-column> -->
                            
                            <el-table-column prop="createTime" min-width="135" label="创建时间" align="center"
                                    :formatter="dateFormat" show-overflow-tooltip>
                            </el-table-column>
                            <!-- <el-table-column prop="createSuserName" label="创建人/审核人" width="100" show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div class="goods-table">
                                        <span>{{scope.row.createSuserName}} </span>
                                        <span v-if="scope.row.checkSuserName != null"> / </span>
                                        <span> {{scope.row.checkSuserName}}</span>
                                    </div>
                                </template>
                            </el-table-column> -->
                            <!-- <el-table-column  prop="sort" label="排序" align="center">
                                <template slot-scope="scope">
                                    <div class="goods-table">
                                        <span>{{scope.row.sort}}</span>
                                        <i class="el-icon-edit" style="cursor: pointer;" @click="sortgoodspricetan(scope.row.id,scope.row.sort)"></i>
                                    </div>
                                </template>
                            </el-table-column> -->
                            <el-table-column prop="handle" label="操作" min-width="150" align="center">
                                <template slot-scope="scope">
                                    <div style="display: flex;">
                                        <div align="center" style="width: 60px;">
                                            <el-button style="margin-left: 5px;" type="text" size="small" @click="editgoodspage(scope.row.id)">编辑商品</el-button>
                                            <el-button v-if="activeName=='five'" type="text" size="small" @click="auditgoods(scope.row.id)">审核发布</el-button>
                                        </div>
                                        <div align="center">  
                                            <!-- <el-button @click="delectgoods(scope.row.id)" type="text" size="small">删除商品</el-button> -->
                                            <!-- <el-button style="margin-left: 0px;" @click="copygoods(scope.row.id)" type="text" size="small">复制商品</el-button> -->
                                        </div>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>

                    <div class="el-row goods_list_dibu" style="display:flex;justify-content: flex-end;">
                        <div class="goods_list_dibu-onediv">
                            <!-- <button type="button" class="el-button el-button--default el-button--small"><span>全选</span></button> -->
                            <!-- <button type="button" class="el-button el-button--default el-button--small"><span>取消全选</span></button> -->
                            <!-- <button type="button" @click="editgoodsGrounp" class="el-button el-button--default el-button--small"><span>改分组</span></button> -->
                            <button type="button" @click="editcategoryevent"  class="el-button el-button--default el-button--small"><span>改分类</span></button>
                            <button type="button"  @click="editUpissue" class="el-button el-button--default el-button--small"><span>下架</span></button>
                            <!-- <button type="button" class="el-button el-button--default el-button--small"><span>删除</span></button> -->
                            <!-- <button type="button" class="el-button el-button--default el-button--small"><span>更多</span></button> -->
                        </div>
                        <div class="goods_list_dibu-twodiv cssbilie1">
                            <!-- small sizes-->
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[100, 200, 300, 400]"
                                    :page-size="20"
                                    layout="total, prev, pager, next, jumper"
                                    :total="totalCountone">
                            </el-pagination>
                        </div>
                    </div>
                    <!-- table over-->
                    <div  class="goods-footer"><p  class="copyright">Copyright 蜜獾出品</p></div>
                    <!-- 全部over -->


            <!-- 修改商品排序 -->
            <!-- <el-dialog title="修改商品排序" :visible.sync="sortgoodseditpriceValue" width="33%">
                <div class="mh-goodslist-pricetan">
                    <span class="mh-goodslist-pricetan_span">商品排序:</span>
                    <div class="mh-goodslist-pricetan_div">
                            <el-input v-model="sortmhgoodsname" type="number"></el-input>
                    </div>                 
                </div>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="sortgoodseditpriceValue = false">取 消</el-button>
                    <el-button type="primary" @click="okShopsort">确 定</el-button>
                </span>
            </el-dialog> -->

            <!-- 商品名字 -->
            <!-- <el-dialog title="修改商品名" :visible.sync="goodseditpriceValue">
                    <div class="mh-goodslist-pricetan">
                        <span class="mh-goodslist-pricetan_span">商品名:</span>
                        <div class="mh-goodslist-pricetan_div">
                            <el-input v-model="mhgoodsname" placeholder="请输入商品名称"></el-input>
                        </div>                 
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="goodseditpriceValue = false">取 消</el-button>
                        <el-button type="primary" @click="okupdateShopPrice">确 定</el-button>
                    </span>
            </el-dialog> -->


              <!--弹窗：修改价格 -->
                <!-- <el-dialog :title="changePriceTitle" :visible.sync="editpriceValue" width="60%">
                       <div class="mh-goodslist-pricetan_div" style="width:100%!important;" v-if="goodsallpricearr[goodsindexpriceid].skuList[0].pvlist.length">
                             <ul class="mh-guige-ul">
                                 <li>规格</li>
                                 <li>价格(元)</li>
                             </ul>
                        </div>     
                    <div class="mh-goodslist-pricetan"   v-for="(itemprice, indexprice) of goodsallpricearr[goodsindexpriceid].skuList" :key="indexprice" style="margin-bottom:18px">
                        <span class="mh-goodslist-pricetan_span" style="max-width:300px!important;text-align: center;border: 1px solid #eee;height:35px;line-height:35px" v-if="goodsallpricearr[goodsindexpriceid].skuList[0].pvlist.length > 0"
                            v-for="(sonitemprice,sonitempriceindex) of itemprice.pvlist" >
                            {{sonitemprice[0]}} : {{sonitemprice[1]}}
                            </span>
                        <span class="mh-goodslist-pricetan_span" v-if="goodsallpricearr[goodsindexpriceid].skuList[0].pvlist.length < 1">商品价格:</span>
                        <div class="mh-goodslist-pricetan_div">
                            <el-input v-if="editPriceType==1"      v-model="itemprice.price"         placeholder="请输入商品价格"></el-input>
                            <el-input v-else-if="editPriceType==2" v-model="itemprice.priceSupply"   placeholder="请输入供货价格"></el-input>
                            <el-input v-else-if="editPriceType==3" v-model="itemprice.pricePlatform" placeholder="请输入分销价格"></el-input>
                        </div>                  
                    </div> 
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="editpriceValue = false">取 消</el-button>
                        <el-button type="primary" @click="editshopprice">确 定</el-button>
                    </span>
                </el-dialog>  -->


                <!-- 弹框：修改库存 -->
                <!-- <el-dialog title="修改库存" :visible.sync="kugoodseditpriceValue" width="40%">
                       <div class="mh-goodslist-pricetan_div" style="width:100%!important;" v-if="goodsallpricearr[kucunindex].skuList[0].pvlist.length">
                             <ul class="mh-guige-ul">
                                 <li>规格</li>
                                 <li>库存(件)</li>
                             </ul>
                        </div>     
                    <div class="mh-goodslist-pricetan"   v-for="(itemprice,indexprice) of goodsallpricearr[kucunindex].skuList" :key="indexprice" style="margin-bottom:18px">
                        <span class="mh-goodslist-pricetan_span" style="max-width:200px!important;text-align: center;border: 1px solid #eee;height:35px;line-height:35px" v-if="goodsallpricearr[kucunindex].skuList[0].pvlist.length > 0"
                            v-for="(sonitemprice,sonitempriceindex) of itemprice.pvlist">
                            {{sonitemprice[0]}} : {{sonitemprice[1]}}
                        </span>
                        <span class="mh-goodslist-pricetan_span" v-if="goodsallpricearr[kucunindex].skuList[0].pvlist.length < 1">商品库存:</span>
                        <div class="mh-goodslist-pricetan_div">
                            <el-input v-model="itemprice.inventoryTotal" type="number" placeholder="请输入库存"></el-input>
                        </div>
                    </div> 
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="kugoodseditpriceValue = false">取 消</el-button>
                        <el-button type="primary" @click="okkucun">确 定</el-button>
                    </span>
                </el-dialog>  -->
               
                <!-- 弹窗：修改分类 -->
                <el-dialog title="修改分类" :visible.sync="scategorygoodsValue" width="30%">
                    <div class="mh-goodslist-pricetan">
                        <span class="mh-goodslist-pricetan_span">修改分类:</span>
                        <div class="mh-goodslist-pricetan_div">
                                  <el-select v-model="catevalue" multiple collapse-tags placeholder="请选择">
                                    <el-option
                                        v-for="item in shopcategory"
                                        :key="item.id"
                                        :label="item.name"
                                        :value="item.id">
                                    </el-option>
                                    </el-select>
                        </div>                 
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="scategorygoodsValue = false">取 消</el-button>
                        <el-button type="primary" @click="okcategorymethod">确 定</el-button>
                    </span>
                </el-dialog> 
                
             
                <div>
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
import secnavbar from './secnavbar';
import baseapi from '../../utils/api';
import {    
        zm_jsonToString,
        zm_formDataToString,
        // zm_tipsMsg,
        // zm_timestampToDate,    
        // zm_getCurrenDate,
        // zm_standardDateToFormatDate
} from "../../filters/zm_tools"


export default {
     data() {
        return {
            sinventoryTypevalue:1,
            downimg:'',
            kuitemid:'',
            kuid:0,   
            kugoodseditpriceValue:false,
            kunmae:0,
            chuSz:0,
            yiGq:0,
            cangKz:0,
            jinJku:0,
            daiSH:0,
            sortid:0,
            sortgoodseditpriceValue:false,
            sortmhgoodsname:0,
            catevalue:[],
            // shopgrounpvalueArr:[],
            scategorygoodsValue:false,
            shopcategory:[],
            Categorystr:'',
            sortgoodsValue:false,
            sortvaluedata:0,
            goodsallpricearr:[{skuList:[{itemId: 94, pvlist: [], price: 3500, id: 129, suserId: 2}]}],
            inggoodsone:0,
            editgoodsname:'',
            goodseditpriceValue:false,
            mhgoodsname:'',
            sharercode:'',
            // shopgrounpvalue:'',//商品分组
            // catelink:'https://mihaunshop.com',//复制链接
            // shopcategory:[],   
            // dialogFormVisible1:false,
            mhgoodsid:0,
            distributionType: '',

            loading: false,
            value0:'',
            value1:'',
            // value2:'',
            value3:'',
            value4:'',
            // value5:'',
            // value6:'',
            // value7:'',
            // value8:'',
            kucunindex:0,
        
            shoppricevalue:'',//商品价格
            goodsid:'',//商品id

            //修改价格状态
            editpriceValue:false,
            editPriceType:1,
            changePriceTitle: "修改价格",
            shopnamenumber:'',
            goodslist:[],
            visible: false,
            activeName: 'first',

            goodsindexpriceid:0,
            value1:'',
            // shopgrounp: [{
            //     value: '1',
            //     label: '全选'
            // }, {
            //     value: '2',
            //     label: '家用电器'
            // }],

            options: [{
                value: '1',
                label: '无'
            }],
            value: '',
            tableData: [{}],
            input:'1',
            multipleSelection: [],
            // dialogFormVisible: false,//推广链接
            // dialogFormFUgou:false,
            shop_lisk_input:'https://mihuanshop.com',
            radio: '1', // 假的单选框
            currentPage4: 1, //分页,
            totalCountone:0,
            FLOG:true
        };
    },
        //路由前置
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
        this.request_goodShop(1,1);
        // this.shopStatusNumber(); //商品状态数量
     },
     methods: {
            //审核商品
            auditgoods(id){
                this.$confirm('审核通过后,该商品将直接上架, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    let data = new FormData();
                    data.append('ids',id);
                    this.http.post(baseapi.goodsanditApi,data).then(res=>{
                        this.$message.success('审核成功');
                        this.shopshuaixuan(4,1); 
                        this.shopStatusNumber();
                    }) 
                })
            },
            editcategoryevent(){
                if(this.Categorystr == ''){
                    this.$message.warning('至少选择一项商品');
                    return false;
                }
                this.scategorygoodsValue = true;
            },
            //改分类
            okcategorymethod(){
                let that = this; 
                let newArr = this.catevalue;
                let znewArr =  newArr.join(",");
                let newStr = znewArr.substring(0,znewArr.length-1);      
                if(that.Categorystr == ''){
                    that.$message.warning('至少选择一项商品');
                    return false;
                }
                let data = new FormData();
                data.append('ids',that.Categorystr);   
                data.append('categoryIds',znewArr)   ;

                this.http.post( baseapi.editgoodsCategory,data).then(res=>{
                    that.$message.success("修改分类成功");
                    that.scategorygoodsValue = false;
                    that.catevalue = [];
                    that.shopshuaixuan(1,1);
                })   
            },
            //tab状态
            goodshandleSelectionChange(val) {
                let that = this;
                let str = '';
                val.forEach(function(item,index){
                    str += item.id + ','
                })
                that.Categorystr = str.substring(0,str.length-1);
            
            },
            //修改商品上下架   -1  下架  1上架  2审核中   0 未上架
            editUpissue(){
                let that = this; 
                if (that.Categorystr == '') {
                    that.$message.warning('至少选择一项商品');
                    return false;
                }
                this.$confirm('确定下架所选商品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        let data = new FormData();
                        data.append('ids',that.Categorystr);   
                        data.append('isissue',0)  
                        this.http.post( baseapi.issueGoodsApi,data).then(res=>{
                            that.$message.success('修改上下架成功');
                            that.shopshuaixuan(1,1);
                            that.shopStatusNumber();

                        })       
                    }); 
            },
            editDownissue(){
                let that = this; 
                if (that.Categorystr == '') {
                    that.$message.warning('至少选择一项商品');
                    return false;
                }
                this.$confirm('确定上架所选商品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        let data = new FormData();
                        data.append('ids',that.Categorystr);   
                        data.append('isissue',1)  
                        this.http.post( baseapi.issueGoodsApi,data).then(res=>{
                            that.$message.success('修改上架成功');
                            that.shopshuaixuan(1,1);
                            that.shopStatusNumber();
                        })       
                    }); 
            },
            //编辑商品进入页面
            editgoodspage(papams){      
                this.$router.push({ path: `/goodslist/goodsDetail/${papams}`})
            },
            //删除商品
            delectgoods(id){
                let that = this; 
                this.$confirm('确定将该商品删除吗, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    let data = new FormData();
                    data.append('id',id)
                    this.http.post( baseapi.delectgoods,data).then(res=>{
                        console.log(res);
                        if(res.data.status == 200){
                            that.$message.success('删除成功');
                            that.shopshuaixuan(1,1);
                            that.shopStatusNumber();   

                        }
                    })  
                });    
            },
            //修改商品名字
            updateShopPrice(goodsid,goodsname){
                this.goodseditpriceValue = true;
                this.mhgoodsid = goodsid;
                this.mhgoodsname = goodsname;
            },
            okupdateShopPrice(){
                let that = this; 
                let data = new FormData();
                data.append('name',that.mhgoodsname);
                data.append('id',that.mhgoodsid);
                this.http.post( baseapi.goodsShopNameTwo,data).then(res=>{
                    that.goodseditpriceValue = false;
                    that.shopshuaixuan(1,1);
                })  
        },
        //获取供应商列表
        getSupp(){
            let data = new FormData();
            this.http.post( baseapi.getSupp,data).then(res=>{
                that.goodseditpriceValue = false;
                that.shopshuaixuan(1,1);
            })               
        },
        // 复制商品
        copygoods(param){
            let that = this;          
            this.$confirm('您将复制该商品, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    let data = new FormData();  
                        data.append('itemId',param);
                        this.http.post( baseapi.copygoods,data).then(res=>{

                            if(res.data.status == 200){
                                that.$message.success('复制成功');
                                that.request_goodShop(1,1);
                                that.shopStatusNumber();
                            }
                         
                        })                         
                 });    
            },
        /**筛选商品列表  --查询商品列表接口*/
         shopshuaixuan(param, page,cao){
            let that = this;
            let params = new FormData();   
            params.append('sinventoryType',this.sinventoryTypevalue);



            // if(param != undefined && param != null ){
            //     data.append('sinventoryType',param);
            // }
            this.value0 == '' ? '' :  params.append('sname',this.value0); // 商品
            this.value0 == '' ? '' :  params.append('scode',this.value0); //商品编码
            // this.shopgrounpvalue == '' ? '' :  params.append('sgroupId',this.shopgrounpvalue);  //商品分组
            // this.value2 == '' ? '' :  params.append('stype',this.value2);    //商品类型
            // this.value3 == '' ? '' :  data.append('type',this.value3);    
            this.value4 == '' ? '' :  params.append('scategoryId',this.value4);//分类id
            // this.value5 == '' ? '' :  params.append('ssalesF',this.value5);   //销量开始
            // this.value6 == '' ? '' :  params.append('ssalesT',this.value6);   //销量结束
            // this.value7 == '' ? '' :  params.append('name',this.value7);     //价格
            // this.value8 == '' ? '' :  params.append('name',this.value8); 
            //分销类型
            this.distributionType == '' ? '' :  params.append('distribute',this.distributionType); 
            params.append('page',page);
            params.append('size',20);
            params.append('isPlatform','');
            params.append('type','');
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("supplierId", '2');
            }


            // supplierProductList baseapi.getGoodsListApi
            this.http.post( baseapi.supplierProductList, params).then(res=>{
                console.log('---查询商品列表= ' + zm_jsonToString(res.data));
                if(res.data.list.length == 0){
                    that.goodslist = [];
                    return false;
                }     
                that.totalCountone = res.data.totalCount;
                let goodsallprice = res.data.list;
                that.goodslist    = res.data.list;
                
                that.goodsallpricearr = goodsallprice;
                let matime   = setInterval(function(){
                    that.loading = false;
                    // that.goodslist = res.data.list;
                    clearTimeout(matime);
                },200);
            }) 
         },
  
        //商品状态数量
        shopStatusNumber(){
            let that = this; 
            let data = new FormData();          
            this.http.post( baseapi.goodsNumber,data).then(res=>{
                console.log('商品状态数量数据',data.list);
                 let list = res.data.num;
                that.chuSz = list["item.sell.num"];
                that.yiGq = list["item.sell.out.num"];
                that.cangKz = list["item.out.num"]; //下架
                that.jinJku = list["item.sell.little.num"]
                that.daiSH = list["item.audit.num"];
            })    
          },

         cleardata(){
            this.value0='';
            this.value1='';
            this.value3='';
            this.value4='';
            // this.value5='';
            // this.value6='';
            // this.value7='';
            // this.value8='';
            this.shopgrounpvalue = '';
            this.$message.success('清除成功');
         },
         //时间处理函数
         dateFormat(row, column, cellValue, index){
              const daterc = row.createTime.time;
                if(daterc!=null){
                 const dateMat= new Date(daterc);
                 const year = dateMat.getFullYear();
                 const month = dateMat.getMonth() + 1;
                 const day = dateMat.getDate();
                 const hh = dateMat.getHours();
                 const mm = dateMat.getMinutes();
                 const ss = dateMat.getSeconds();
                 const timeFormat= this.getzf(year) + "-" + this.getzf(month)  + "-" + this.getzf(day) + " " + this.getzf(hh)  + ":" + this.getzf(mm) + ":" + this.getzf(ss);
                    return timeFormat;
             }             
          },
       //补0操作  
        getzf(num){  
            if(parseInt(num) < 10){  
                num = '0'+num;  
            }  
            return num;  
        },
        /** 查询列表数据 **/
        request_goodShop(param,page){
            let that = this;
            let params = new FormData();    
            if(param != undefined && param != null ){
                params.append('sinventoryType',param);
            }
            params.append('page',page);
            params.append('size',20);
            params.append('isPlatform','');
            params.append('type','');
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("supplierId", '2');
            }

            //getGoodsListApi 
            this.http.post( baseapi.supplierProductList, params).then(res=>{
                console.log('---商品查询列表= ',zm_jsonToString(res.data));
                if(res.data.list){
                    
                }else{
                    that.goodslist = [];
                    that.loading =  false;
                    return false;
                }
                console.log('---查询列表.length= ',res.data.list.length);
                that.inggoodsone   = res.data.list.length;
                // that.totalCountone = res.data.totalCount;
                let goodsallprice  = res.data.list;
                // goodsallprice.forEach(function(item,index){
                //     item.skuList.forEach(function(item,index){
                //         item.price         = item.price / 100;
                //         item.priceSupply   = item.priceSupply/100;
                //         item.pricePlatform = item.pricePlatform/100;
                //     }) 
                // })

                that.goodsallpricearr = goodsallprice;
                let matime =  setInterval(function(){
                    that.loading =  false;
                    that.goodslist = res.data.list;
                    clearTimeout(matime);
                },200); 

                 console.log('---查询列表 请求完毕');

            })  

        },
        goodspricetan(id,index){ //零售价
            this.goodsindexpriceid = index;
            this.goodsid = id;
            this.editpriceValue = true;  
            this.changePriceTitle = "修改零售价";
            this.editPriceType = 1;
            this.goodsindexpriceid = index;
            console.log('---零售价 index= '+index+ '、item= '+zm_jsonToString(this.goodsallpricearr[index].skuList));
            // console.log('---零售价item= '+zm_jsonToString(this.goodsallpricearr[index]));
        },
        gongHuoPrice(id,index){ //供货价
            this.goodsindexpriceid = index;
            this.goodsid = id;
            this.editpriceValue = true;
            this.changePriceTitle = "修改供货价"; 
            this.editPriceType = 2;
            console.log('---供货价 index= '+index+ '、item= '+zm_jsonToString(this.goodsallpricearr[index].skuList));
        },
        pingTaiPrice(id,index){ //分销价
            this.goodsindexpriceid = index;
            this.goodsid = id;
            this.editpriceValue = true; 
            this.changePriceTitle = "修改分销价"; 
            this.editPriceType = 3;
            console.log('---分销价 index= '+index+ '、item= '+zm_jsonToString(this.goodsallpricearr[index].skuList));
        },
        sortgoodspricetan(id,sort){
            this.sortid = id;
            this.sortgoodseditpriceValue = true; 
            this.sortmhgoodsname = sort;    
        },
        editkucun(id,index){
            this.kucunindex = index;   
            this.kuitemid= id;
            this.kugoodseditpriceValue = true;    
        },
        okkucun(){
            let that = this;
            let newArr = this.goodslist[this.kucunindex].skuList;
            let upArr = []
            newArr.forEach(function(item,index){
                upArr.push({"id":  item.id ,"inventoryTotal": parseInt(item.inventoryTotal),"inventorySurplus":parseInt(item.inventoryTotal)})
            });     
            let data = new FormData();
           
            data.append('itemId', this.kuitemid );
            data.append('skus',JSON.stringify(upArr));
            this.http.post( baseapi.editshopprice,data).then(res=>{
                this.$message.success('修改库存成功');
                this.kugoodseditpriceValue = false;
                this.shopshuaixuan(1,1,999);
            }) 
        },
        okShopsort(){
            let that = this;
            let data = new FormData();
            data.append('id',that.sortid)
            data.append('sort', that.sortmhgoodsname ); 

            this.http.post( baseapi.sortGoodsApi,data).then(res=>{
                that.$message.success("修改排序价格成功");
                that.sortgoodseditpriceValue = false;
                that.shopshuaixuan(1,1);
             })  
        },
        
        //修改商城价格
        editshopprice(id){
            let that = this;
            let newArr = this.goodslist[this.goodsindexpriceid].skuList;
            let upArr = []
            newArr.forEach(function(item,index){
                // upArr.push({"id": item.id ,"price":parseInt(item.price*100)})
                if (that.editPriceType==1) {
                    upArr.push({"id": item.id ,"price":parseInt(item.price*100)});
                } else if (that.editPriceType==2) {
                    upArr.push({"id": item.id ,"priceSupply":parseInt(item.priceSupply*100)});
                } else if (that.editPriceType==3) {
                    upArr.push({"id": item.id ,"pricePlatform":parseInt(item.pricePlatform*100)});
                }
            });     
            let data = new FormData();
            data.append('itemId', this.goodsid );
            data.append('skus',JSON.stringify(upArr));
            console.log('---params：' + zm_formDataToString(data))

            this.http.post( baseapi.editshopprice,data).then(res=>{
                that.$message.success("修改价格成功");
                that.editpriceValue = false;
                that.shopshuaixuan(1,1);
            })  
        },
        handleClick(tab, event) { 
            if(tab.index == 1){
                this.sinventoryTypevalue = 0;
                this.shopshuaixuan('0',1);    
            }else if(tab.index == 2){
                this.sinventoryTypevalue = 3;
                this.shopshuaixuan(3,1); 
            }else if(tab.index == 3){
                this.sinventoryTypevalue = 2;
                this.shopshuaixuan(2,1);    
            }else if(tab.index == 4){
                this.sinventoryTypevalue = 4;
                this.shopshuaixuan(4,1); 
            }else{
                this.sinventoryTypevalue = 1;
                this.shopshuaixuan(1,1); 
            }

        },
        //表格
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.shopshuaixuan(1,val,999);
            // console.log(`当前页: ${val}`);
        }
        },
    components:{
        navbar,sidebar,secnavbar    
    }
}
</script>