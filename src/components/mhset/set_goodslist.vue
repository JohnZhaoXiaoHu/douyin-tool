<template>
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
                <div class="goods-card_body"  v-loading="loading">
                    <div class="g-card_top">
                    <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/mhset' }">合作管理</el-breadcrumb-item>
                        <el-breadcrumb-item>设置合作商品</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>



            <!--全部列表-->
                   

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
                                <!-- 是否合作 -->
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
                            <el-table-column min-width="115" label="是否合作"  align="center">
                                <template slot-scope="scope">
                                    <div v-if="scope.row.hasChoosed==1" style="color: #3A88FE;">已经合作</div>
                                    <div v-else-if="scope.row.hasChoosed==0">未合作</div>
                                </template>
                            </el-table-column>

                            
                            <el-table-column prop="createTime" min-width="135" label="创建时间" align="center"
                                :formatter="dateFormat" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column min-width="115" label="状态" align="center">
                                <template slot-scope="scope">
                                    <div v-if="scope.row.isIssue==-1">下架</div>
                                    <div v-else-if="scope.row.isIssue==0">仓库</div>
                                    <div v-else-if="scope.row.isIssue==1">上架</div>
                                </template>
                            </el-table-column>
   
                            <!-- <el-table-column prop="handle" label="操作" min-width="150" align="center">
                                <template slot-scope="scope">
                                    <div style="display: flex;">
                                        <div align="center" style="width: 60px;">
                                            <el-button style="margin-left: 5px;" type="text" size="small" @click="editgoodspage(scope.row.id)">商品编辑</el-button>
                                            <el-button v-if="scope.row.isIssue==-1"     type="text" size="small" @click="upDown(scope.row.id, -1)">立即上架</el-button>
                                            <el-button v-else-if="scope.row.isIssue==0" type="text" size="small" @click="upDown(scope.row.id, 0)">去上架</el-button>
                                            <el-button v-else-if="scope.row.isIssue==1" type="text" size="small" @click="upDown(scope.row.id, 1)">立即下架</el-button>
                                        </div>
                                    </div>
                                </template>
                            </el-table-column> -->
                        </el-table>
                    </div> 
 
                    <div class="el-row goods_list_dibu" style="display:flex;justify-content: flex-end;">
                        <div class="goods_list_dibu-onediv">
                            <button type="button" class="el-button el-button--default el-button--small" @click="selectAll()"><span>全选</span></button>
                            <button type="button" class="el-button el-button--default el-button--small" @click="cancelSelectAll()"><span>取消全选</span></button>
                            <!-- <button type="button" class="el-button el-button--default el-button--small"><span>删除</span></button> -->
                            <button type="button" class="el-button el-button--primary el-button--small" @click="setCooperate()"><span>设置合作商品</span></button>
                        </div>
                        <div class="goods_list_dibu-twodiv cssbilie1">
                            <!-- small sizes-->
                            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[100, 200, 300, 400]"
                                    :page-size="20" layout="total, prev, pager, next, jumper"
                                    :total="totalCountone">
                            </el-pagination>
                        </div>
                    </div>
                    <!-- table over-->
                    <div  class="goods-footer"><p  class="copyright">Copyright 蜜獾出品</p></div>
                    <!-- 全部over -->

               
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
import settingnav from './settingnav';
import baseapi from '../../utils/api';
import {    
        zm_jsonToString,
        zm_formDataToString,
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
            mhgoodsid:0,
            distributionType: '',

            loading: false,
            value0:'',
            value1:'',
            // value2:'',
            value3:'',
            value4:'',
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
    created(){
        console.log('--------created 模板渲染前= ');
        //获取页面传递数据：把字符串转为--> 对象
        this.itemData =  eval('(' + this.$route.query.itemData + ')');
        console.log('--->itemData= '+zm_jsonToString(this.itemData));
    },
     mounted(){
        this.request_goodShop(1,1);
        // this.shopStatusNumber(); //商品状态数量
     },
     methods: { 
         //tab状态
        goodshandleSelectionChange(val) {
            this.multipleSelection = val;
            let that = this;
            let str = '';
            val.forEach(function(item,index){
                str += item.id + ','
            })
            that.Categorystr = str.substring(0, str.length-1);
            console.log('---toggleSelection= '+ this.multipleSelection.length);
            console.log('---str= '+ str);
            console.log('---Categorystr= '+ that.Categorystr);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        selectAll(){
            console.log('---this.multipleSelection.length= '+this.multipleSelection.length);
            console.log('---this.goodslist.length= '+this.goodslist.length);
            if (this.multipleSelection.length == this.goodslist.length) {
                return;
            }
            this.goodslist.forEach(row => {
                this.$refs.multipleTable.toggleRowSelection(row);
            });
            // console.log('---multipleSelection= '+zm_jsonToString(this.multipleSelection));
        },
        cancelSelectAll(){
            this.$refs.multipleTable.clearSelection();
        },
        setCooperate(){
            // let item = this.tableData[index];
            let that = this;
            let urlStr = baseapi.setCooperationGoods;
            let params = new FormData();       
            params.append('itemIds', this.Categorystr);  
            params.append('userId', this.itemData.applyerId); 
            params.append('supplierId', this.$cookie.get('supplierId')); 
            console.log('---设置合作商品 params= ', zm_formDataToString(params));

            this.$http({
                method: "post",
                url: urlStr,
                data: params
            })
            .then(function(res){
                 console.log('---请求：设置合作商品= ', zm_jsonToString(res));
                 
                if(res.data.status ==200){
                    that.$message.success("设置成功！");
                    that.request_goodShop(1,1);
                }else{
                    that.$message.error(res.data.message);
                }
            }).catch(function(error){
                console.error('---设置合作商品= ', error);
            }); 

        },
            //审核商品（auditgoods、upDown）
            upDown(id, isIssue){
                let alertTitle = '';
                let successTitle = '';
                let data = new FormData();
                    data.append('itemId',id);

                if (isIssue==-1 || isIssue==0) {
                    alertTitle = '是否立即上架？';
                    successTitle = '上架成功！';
                    data.append('isIssue',1);
                } else {
                    alertTitle = '是否立即下架';
                    successTitle = '下架成功！';
                    data.append('isIssue',-1);
                }

                this.$confirm(alertTitle, '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    
                    this.http.post(baseapi.supplierProductUpdateIsIssue,  data).then(res=>{
                        console.log('---上下架 data= ' + zm_jsonToString(res.data));
                        this.$message.success(successTitle);
                        this.shopshuaixuan(4,1); 
                        // this.shopStatusNumber();
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
                            // that.shopStatusNumber();

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
                            // that.shopStatusNumber();
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
                            // that.shopStatusNumber();   

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
        /**筛选商品列表  --查询商品列表接口*/
         shopshuaixuan(param, page,cao){
            let that = this;
            let params = new FormData();   
            params.append('sinventoryType',this.sinventoryTypevalue);
            this.value0 == '' ? '' :  params.append('sname',this.value0); // 商品
            this.value0 == '' ? '' :  params.append('scode',this.value0); //商品编码   
            this.value4 == '' ? '' :  params.append('scategoryId',this.value4);//分类id
            //分销类型
            this.distributionType == '' ? '' :  params.append('distribute',this.distributionType); 
            params.append('page',page);
            params.append('size',20);
            params.append('isPlatform','');
            params.append('type','');
            params.append('userId',this.itemData.applyerId);

            
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

                    that.$refs.multipleTable.clearSelection();
                    for (let index = 0; index < that.goodslist.length; index++) {
                        const element = that.goodslist[index];
                        if (element.hasChoosed==1) {
                            that.$refs.multipleTable.toggleRowSelection(element);
                        }
                    }
                    clearTimeout(matime);
                },500);
            }) 
         },
  
         cleardata(){
            this.value0='';
            this.value1='';
            this.value3='';
            this.value4='';
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
            params.append('userId',this.itemData.applyerId);
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

                that.goodsallpricearr = goodsallprice;
                that.goodslist = res.data.list;

                let matime =  setInterval(function(){
                    that.loading =  false;
                    that.$refs.multipleTable.clearSelection();
                    for (let index = 0; index < that.goodslist.length; index++) {
                        const element = that.goodslist[index];
                        if (element.hasChoosed==1) {
                            that.$refs.multipleTable.toggleRowSelection(element);
                        }
                    }
                    //  that.goodslist.forEach(row => {
                    //     that.$refs.multipleTable.toggleRowSelection(row);
                    // });
                    clearTimeout(matime);
                },500); 

                 console.log('---查询列表 请求完毕');
            })  

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
        
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.shopshuaixuan(1,val,999);
            // console.log(`当前页: ${val}`);
        }
        },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>