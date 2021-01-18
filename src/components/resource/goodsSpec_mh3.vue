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
                        <el-table ref="multipleTable" :data="tableData" style="width: 100%" size="mini"                         
                                @select="gouxuan"                           
                                :default-sort = "{prop: 'date', order: 'descending'}"
                                @selection-change="handleSelectionChange">
                             <el-table-column  prop="goods" label="商品"  width="300px">
                                <template slot-scope="scope">
                                    <div class="goods-table" style="display: flex;"><img :src="scope.row.imageUrl" alt="" width="40" height="40" style="margin-right:8px;border-radius: 10px;"><span>{{scope.row.name}}</span></div>
                                </template>
                            </el-table-column>
                     
                            <el-table-column label="规格" show-overflow-tooltip>
                                 <template slot-scope="scope">
                                    <div style="display:flex;justify-content: flex-end;">
                                        <div class="gs_productInfo">价格区间：{{scope.row.priceStart/100}} ~ {{scope.row.priceEnd/100}}</div>
                                        <div class="gs_productInfo">销量：{{scope.row.salesVolume}}</div>
                                        <el-checkbox class="gs_productInfo" v-model="scope.row.numId" 
                                          @change="handleChange(scope.$index, scope.row, scope.row.id)">
                                        </el-checkbox>
                                     </div>
                                     

                                    <!-- <div v-for="(itemgoods, goodsIndex) of scope.row.skuList" :key="goodsIndex" style="display:flex;justify-content: flex-end;">
                                        <dl v-for="(skuitem,skuindex) of itemgoods.pvlist" :key="skuindex" style="width:250px;display:flex">
                                            <dt>{{skuitem[0]}}</dt> 
                                            <span style="display: inline-block;margin: 0 10px;">:</span>
                                            <dd>{{skuitem[1]}}</dd>               
                                        </dl>
                                            <el-checkbox v-model="itemgoods.numid" @change="handleChange(scope.$index, goodsIndex, scope.row, itemgoods)"></el-checkbox>
                                    </div> -->
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
import {    
        zm_beArrayContains1,
        zm_beArrayContains2
    } from "../../filters/zm_array"

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
            goodsMap: new Map(),
            goodsMapKeys: [],
            father_goodsMapKeys: [],
            father_indexs: {},
            father_tableData: [],
            itemIndex: 0,
            goodsIndex: 0,
            isSelected: false,
            itemIndexLast: 0,
            indexgoodsLast: 0, 
        }
    },
    mounted(){
        //请求：已上架商品
        this.upShopGetData(1);        

    },
    methods: {  
        // 来自 父组件（商品管理列表页）
        son_sconfirmCilck(tableData, obj, itemId){
            // console.log('---商品管理：子组件获取响应= '+obj);
            // console.log('---商品管理：子组件获取响应= '+tableData);
            this.goodsMap.clear();
            this.father_goodsMapKeys = [];
            this.father_tableData = tableData;

            // let goodsMapKeys = [];
            // let indexs = {};
            let hasKeys = false;
            for (let i = 0; i < this.father_tableData.length; i++) {
                const element = this.father_tableData[i];
                this.father_goodsMapKeys.push(element.id);
                // console.log('---商品管理：子组件获取响应= '+i +'、element.id= '+element.id);
                this.father_indexs[element.id] = i;
            }
            if (this.father_goodsMapKeys.length>0) {
                hasKeys = true
            }
            // console.log('---indexs= ', zm_jsonToString(this.father_indexs)); 
            // console.log('---goodsMapKeys= ', this.father_goodsMapKeys); 
            console.log('---goodsSpec_mh3 上架商品3', this.tableData.length); 
            if (this.tableData.length==0) {
                console.log('---商品列表 未请求完毕！！！');
                return;
            }
            let self = this;
            // 定位已选 SPU、SKU（msId），用于修改使用
            this.tableData.forEach(function(item, index){
                if (itemId!='' && itemId!=null) {
                    //从原表中删除的
                    if (item.id == itemId) {
                        item.numId = false; 
                    }
                }
                if (hasKeys) {
                    if (zm_beArrayContains1(item.id, self.father_goodsMapKeys)) {
                        item.numId = true; 
                        self.goodsMap.set(item.id, item);

                        // console.log('---已选择 item.id= ', item.id); 
                        var spuIndex = self.father_indexs[item.id]; //找到已选的位置
                        const spu    = self.father_tableData[spuIndex];//拿出SPU
                        // console.log('---已选择 spu = ', zm_jsonToString(spu)); 

                        for (let n = 0; n < item.skuList.length; n++) {
                            const sku1 = item.skuList[n];
                            const selectSku2 = spu.skuList[n];
                            sku1.msId = selectSku2.msId;
                        }
                    }else{
                        // console.log('---没选择2 item.id= ', item.id); 
                        item.numId = false; 
                    }
                } else {
                    // console.log('---没选择1 item.id= ', item.id); 
                    item.numId = false; 
                }
            });
            // console.log('---含已选择：商品列表 this.tableData = ', zm_jsonToString(this.tableData)); 
          
      },
        //@change="handleChange(scope.$index, goodsIndex, scope.row, itemgoods)">
        //  handleChange(itemIndex, goodsIndex, node, dan) {
        handleChange(itemIndex, node, id) {
            // console.log('---node= '+ zm_jsonToString(node) );
            console.log('---id= '+ node.id );

            //是否是 第一次选择
            // if (this.isSelected) {
            //     //移除上一次选的
            //     var item = this.tableData[this.itemIndexLast];
            //     item.numId = false;
            //     this.goodsMap.delete(item.id);
            // } 
            //事件处理...
            // this.isSelected = true;
            // console.log('---goodsMap：Keys= ', this.goodsMap.keys());
            // console.log('---goodsMap：Keys= ', this.goodsMap.keys().length);
            // console.log('---goodsMap：Keys= ', zm_jsonToString(this.goodsMap.keys()));


            let goodsMapKeys = [];
            this.goodsMap.forEach(function (value, key, map) {
                goodsMapKeys.push(key);
            });
            // console.log('---goodsMapKeys= ', goodsMapKeys);
            // console.log('---goodsMapKeys= ', goodsMapKeys.length);
            // console.log('---goodsMapKeys= ', zm_jsonToString(goodsMapKeys));
            // console.log('---numId= '+node.numId); 
                        
            this.itemIndex = itemIndex;
            if (node.numId) {
                if (goodsMapKeys.length>0) {
                    if (!zm_beArrayContains1(node.id ,goodsMapKeys)) {
                    // if (!this.goodsMap.hasOwnProperty(node.id) ) {
                        this.goodsMap.set(node.id, node);
                        // this.goodsMapKeys
                        console.log('---添加'); 
                    }else{
                        console.log('---已经存在'); 
                    }
                } else {
                    console.log('---添加'); 
                    this.goodsMap.set(node.id, node);
                }
            } else {
                console.log('---删除');
                this.goodsMap.delete(node.id);
            }   
            this.itemIndexLast = itemIndex;
            //事件处理（结束）

            // let goodsMapKeys2 = [];
            // this.goodsMap.forEach(function (value, key, map) {
            //     goodsMapKeys2.push(key);
            // });
            // console.log('---goodsMapKeys2= ', goodsMapKeys2);
            // console.log('---goodsMapKeys2= ', goodsMapKeys2.length);
            // console.log('---goodsMapKeys2= ', zm_jsonToString(goodsMapKeys2));

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

        dealData(list, totalCount){

            let self = this;
            let goodsMapKeys = [];
            let hasKeys = false;
            let current_hasKeys = false;

            self.goodsMap.forEach(function (value, key, map) {
                goodsMapKeys.push(key);
            });
                if (goodsMapKeys.length>0) {
                    hasKeys = true;
                    current_hasKeys = true;
                }else {
                    goodsMapKeys = this.father_goodsMapKeys;   
                    if (goodsMapKeys.length>0) {
                        hasKeys = true
                    }
                }

                console.log('---goodsMapKeys2', goodsMapKeys); 
                list.forEach(function(item,index){
                    if (hasKeys) {
                        if (zm_beArrayContains1(item.id, goodsMapKeys)) {
                            item.numId = true; 
                            console.log('---已选择 item.id= ', item.id); 
                            
                            // 是商品管理页-已选中的数据（不是现在选择的）
                            if (current_hasKeys==false && self.father_goodsMapKeys.length>0) {
                                self.goodsMap.set(item.id, item);
                            } else {
                                // console.log('---添加'); 
                                // self.goodsMap.set(item.id, item);
                            }
                            if (self.father_tableData.length>0) {
                                var spuIndex = self.father_indexs[item.id];     //找到已选的位置
                                const spu    = self.father_tableData[spuIndex]; //拿出SPU
                                // console.log('---已选择 spu = ', zm_jsonToString(spu)); 
                                for (let n = 0; n < item.skuList.length; n++) {
                                    const sku1 = item.skuList[n];
                                    const selectSku2 = spu.skuList[n];
                                    sku1.msId = selectSku2.msId;
                                }
                            }
                        }else{
                            // console.log('---没选择2 item.id= ', item.id); 
                            item.numId = false; 
                        }
                    } else {
                        // console.log('---没选择1 item.id= ', item.id); 
                        item.numId = false; 
                    }

                    item.skuList.forEach(function(sonitem, sonindex){
                        sonitem.msId = '';
                    })  
                });
                this.tableData  = list;   
                this.totalCount = totalCount;
                console.log('---goodsSpec_mh3 上架商品2', this.tableData.length); 

        },
       //请求：已上架商品
       upShopGetData(page){

            // console.log('---00 goodsMap：Keys= ', this.goodsMap.keys());
            // console.log('---11 goodsMap：Keys', zm_jsonToString(this.goodsMap.keys()));
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
                
            }).then(function(res){
                console.log('---goodsSpec_mh3 上架商品1',zm_jsonToString(res.data));  
                console.log('---goodsSpec_mh3 上架商品1',res.data.list.length); 
                let list = res.data.list;
                
                setTimeout(() => {
                    that.dealData(list, res.data.totalCount);
                }, 100);

            }).catch(function(error){
                console.log('---已上架商品: error= ' +error);
            }); 
       },

        handleSelectionChange(val){
            this.goodsspec = val;
        },
        handleSizeChange(){

        },
        handleCurrentChange(value){
            //请求：已上架商品
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

.gs_productInfo{
    margin-right: 20px;
}

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