<template>
  <div class='mh-goods-tanchuup'>
                <el-dialog title="商品列表" :visible.sync="upgoodsvalue"  @close="offtanMwth" width="80%">
                    <div class="goods-cate-addson" style="justify-content: flex-end;">
                    
                        <div class="el-input el-input--medium el-input-group el-input-group--append" style="width:200px"  >
                            <input type="text" autocomplete="off" class="el-input__inner">
                            <div class="el-input-group__append"><i class="el-icon-search"></i></div>
                        </div>
                    </div>

                    <!-- table-->
                    <div class="goods_table-all">
                        <!-- tooltip-effect="dark" -->
                        <el-table ref="multipleTable" :data="tableData" style="width: 100%"                                
                                @select="gouxuan" size="mini" :default-sort = "{prop: 'date', order: 'descending'}"                         
                                @selection-change="handleSelectionChange">
                             <el-table-column
                                prop="goods"
                                label="商品"
                                width="300px"
                               >
                                <template slot-scope="scope">
                                    <div class="goods-table" style="display: flex;"><img :src="scope.row.imageUrl" alt="" width="40" height="40" style="margin-right:8px;border-radius: 10px;"><span>{{scope.row.name}}</span></div>
                                </template>
                            </el-table-column>
                     
                            <el-table-column
                                label="规格"                              
                                show-overflow-tooltip>
                                 <template slot-scope="scope">
                                    <div v-for="(itemgoods,indexgoods) of scope.row.skuList" :key="indexgoods" style="display:flex;justify-content: flex-end;">
                                        <dl v-for="(skuitem,skuindex) of itemgoods.pvlist" :key="skuindex" style="width:250px;display:flex">
                                            <dt>{{skuitem[0]}}</dt> 
                                            <span style="display: inline-block;margin: 0 10px;">:</span>
                                            <dd>{{skuitem[1]}}</dd>               
                                        </dl>
                                            <el-checkbox v-model="itemgoods.numid" @change="handleChange(scope.$index, indexgoods, scope.row, itemgoods)"></el-checkbox>
                                            <!-- <el-input-number  size="mini"  v-model="itemgoods.numid" @change="handleChange(scope.row,itemgoods)" :min="0"  label="数量"></el-input-number>                           -->
                                    </div>
                                    <!-- <div class="goods-table" style="display: flex;"><img :src="scope.row.imageUrl" alt="" width="40" height="40" style="margin-right:8px;border-radius: 10px;"><span>{{scope.row.name}}</span></div> -->
                                </template>
                            </el-table-column>
                           
                        </el-table>
                    </div>

                    <div class="el-row goods_list_dibu" style="display:flex;justify-content:flex-end;">
                        
                        <div class="goods_list_dibu-twodiv" >
                            <!-- small sizes-->
                            <el-pagination
                               

                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[100, 200, 300, 400]"
                                    :page-size="10"
                                    layout="total, prev, pager, next, jumper"
                                    :total="totalCount">
                            </el-pagination>
                        </div>
                    </div>
                    <!-- table over-->

                      <span slot="footer" class="dialog-footer">
                            <el-button @click="offtanMwth">取 消</el-button>
                            <el-button type="primary" @click="getChild">确 定</el-button>
                      </span>
                    </el-dialog>
            </div>
           
</template>

<script>
import baseapi from '../../utils/api';
import {    
        zm_jsonToString,
        zm_tipsMsg,
        zm_timestampToDate
    } from "../../filters/zm_tools"

export default {
     data() {
        return {
            num: 1,
            totalCount:0,
            tableData: [],
            upgoodsvalue:false,
            radio: '1', 
            currentPage4: 1, 
            dialogFormVisible: false,//添加一级 
            imgarr:[],
            goodsspec:[],
            goodsMap:new Map(),
            itemIndex: 0,
            indexgoods: 0,
            isSelected: false,
            itemIndexLast: 0,
            indexgoodsLast: 0,
        }
    },
    created(){
        // 
        console.log('--------created 模板渲染前= goodsSpec_mh1');
    },
    mounted(){
        console.log('--------mounted 模板渲染前= goodsSpec_mh1');
        this.upShopGetData(1);
    },
    updated(){
    	console.log('--------updated 数据更新时= goodsSpec_mh1');

    },
    methods: {  
        // handleChange(node,dan) {
        handleChange(itemIndex, indexgoods, node, dan) {

            // console.log('---item= '+ zm_jsonToString(node) );
            console.log('---imageUrl= '+ node.imageUrl );

            if (this.isSelected) {
               var item = this.tableData[this.itemIndexLast];
               var itemgoods= item.skuList[this.indexgoodsLast];
               itemgoods.numid = false;
               this.goodsMap.delete(itemgoods.id);
            } 
            this.isSelected = true;
            this.itemIndex = itemIndex;
            this.indexgoods = indexgoods;
            //事件处理...
            dan.name     = node.name;  
            dan.imageUrl = node.imageUrl 
            dan.checkSuserName   = node.checkSuserName;  
            dan.inventoryTotal = node.inventoryTotal;
            dan.inventorySurplus = node.inventorySurplus;
            dan.saleNum          = node.saleNum;
            dan.priceStart  = node.priceStart;
            dan.priceEnd    = node.priceEnd;
            // dan.viewnum          = node.viewnum;
            // dan.brandId          = node.brandId;

            // this.goodsMap.set(dan.id, dan);
            // map id 唯一 去重  
            if (dan.numid != 0) {
                this.goodsMap.set(dan.id,dan);
            } else {
                this.goodsMap.delete(dan.id);
                // console.log( this.goodsMap);
            }   

            //事件处理（结束）
            this.itemIndexLast  = itemIndex;
            this.indexgoodsLast = indexgoods;

        },
        getChild () {
            this.$parent.goodsMap =  null;
            this.$parent.goodsMap = this.goodsMap;
            this.upgoodsvalue = false;
            // this.goodsspec.forEach(function(item,index))
            // this.$parent.goodsimgarr = this.imgarr;
            // this.imgarr = [];
            // this.$refs.multipleTable.clearSelection(); 
        },
        offtanMwth(){
            this.upgoodsvalue = false;
            this.imgarr = [];
              this.$refs.multipleTable.clearSelection(); 
        },
       //已上架商品请求
       upShopGetData(page){
           let that = this;
           let data = new FormData();
                data.append('page',page);
                data.append('limit',10);
                data.append('sinventoryType',1); 
                this.$http({
                method: "post",
                url: baseapi.getGoodsListApi,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId')  }
            })
            .then(function(res){
                // console.log('---上架商品',zm_jsonToString(res.data));  
                console.log('---上架商品',res.data.list.length); 
                let list = res.data.list;
                list.forEach(function(item,index){
                    item.skuList.forEach(function(sonitem,sonindex){
                        sonitem.numid = 0;
                    })     
                });
                that.tableData = list;   
                that.totalCount = res.data.totalCount;
            })
            .catch(function(error){
                console.log(error);
            })  ; 
       },

        handleSelectionChange(val){
            this.goodsspec = val;
        },
        handleSizeChange(){

        },
        handleCurrentChange(value){
            this.upShopGetData(value);
        },
        gouxuan(selection,row){
            // this.$message.success('选择成功');
            this.imgarr = selection;  
            // console.log(selection);
            // console.log(row);
        }
  
    },
    components:{
     
    }
}
</script>

<style>
.mh-goods-tanchuup .el-table th>.cell{
    text-align: center;
}
.mh-goods-tanchuup .el-table td{
   text-align: center;
}
.mh-goods-tanchuup .el-input__inner{
  height: 28px !important;
}
.mh-goods-tanchuup .el-dialog__body{
    padding: 20px 20px 0;
}
.mh-goods-tanchuup .goods_list_dibu{
    margin-bottom: 18px;
}
 .goods-cate-onediv{
    margin-bottom: 10px;
}
.goods-cate{
    display: flex;
    align-items: center;
    font-size: 15px;
    color: rgb(96, 98, 102);
    margin-bottom: 20px;
}
.goods-cate div i{
    color: rgb(96, 98, 102);
    font-size: 12px;
}
.goods-cate div{
    margin-right: 30px;
}
.goods-cate div .el-radio{
    margin-right: 0;
}
.goods-cate-addson{
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
}
.goods-cate-addson-div{
    width: 20%!important;
}
.add-shop-cate-footer{
    display: flex;
    justify-content: center;
} 

</style>