<template>
  <div class='mh-goods-tanchuup'>
                <el-dialog title="上架商品" :visible.sync="upgoodsvalue"  @close="offtanMwth" >
                    <div class="goods-cate-addson">
                        <div>
                            <!-- 发布 -->
                              <router-link to="/goodslist/goodsissue">                             
                                 <button type="button" class="el-button el-button--default"><span>新建</span></button>
                            </router-link> 
                            <!-- 发布over -->
                            <!-- 商品列表 -->
                            <router-link to="/goodslist">           
                            <button type="button" class="el-button el-button--default"><span>商品管理</span></button>
                               </router-link> 
                            <!-- 商品列表over -->
                            <button type="button" class="el-button el-button--default"><span>刷新</span></button>
                        </div>
                        <div class="el-input el-input--medium el-input-group el-input-group--append goods-cate-addson-div">
                            <input type="text" autocomplete="off" class="el-input__inner">
                            <div class="el-input-group__append"><i data-v-2b21add8="" class="el-icon-search"></i></div>
                        </div>
                    </div>

                    <!-- table-->
                    <div class="goods_table-all">
                        <el-table
                                ref="multipleTable"
                                :data="tableData"
                                tooltip-effect="dark"
                                @select="gouxuan"
                              
                                style="width: 100%"
                                :default-sort = "{prop: 'date', order: 'descending'}"
                                size="mini"
                                @selection-change="handleSelectionChange">
                            <el-table-column
                                    type="selection"
                                   >
                            </el-table-column>
                             <el-table-column
                                    prop="goods"
                                    label="标题"
                                    min-width="145">
                                <template slot-scope="scope">
                                    <div class="goods-table" style="display: flex;"><img :src="scope.row.imageUrl" alt="" width="40" height="40" style="margin-right:8px;border-radius: 10px;"><span>{{scope.row.name}}</span></div>
                                </template>
                            </el-table-column>
                     
                            <el-table-column
                                    prop="createtime"
                                    label="创建时间"
                                    :formatter="dateFormat"
                                    show-overflow-tooltip>
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
export default {
     data() {
        return {
        totalCount:0,
        tableData: [],
        upgoodsvalue:false,
        radio: '1', 
        currentPage4: 1, 
        dialogFormVisible: false,//添加一级 
        imgarr:[]
        }
    },
    mounted(){
        this.upShopGetData(1);
    },
    methods: {  
        getChild () {
            let newarr = this.$parent.goodsimgarr;
            if(newarr.length != 0){
                  this.$parent.goodsimgarr = newarr.concat(this.imgarr);
            }else{
                  this.$parent.goodsimgarr = this.imgarr;
            }

            this.upgoodsvalue = false;
            this.imgarr = [];
            this.$refs.multipleTable.clearSelection(); 
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
                console.log('上架商品',res);      
                that.tableData = res.data.list;       
                that.totalCount = res.data.totalCount;
            })
            .catch(function(error){
                console.log(error);
            })  ; 
       },
        // 复制成功时的回调函数
        dateFormat(row, column, cellValue, index){
             const daterc = row[column.property];
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
        handleSelectionChange(){

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