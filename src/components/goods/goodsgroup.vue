<!--自css 商品分组组件-->
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

                    <div class="edit-item goods-item">
                        <div  class="edit-info">
                            <h3>设置分组权限后，其它会员能否看到分组中商品</h3>
                        <p>开启时，非指定用户可在店铺首页、商品列表页看到对应商品，但无权限打开详情页；</p>
                        <p>关闭时，对应分组商品非指定用户始终不可见；</p><p>注：若需要解除访问权限，请调整或删除分组。</p>
                        </div>
                        <div class="goods-item-ctn">
                            <el-switch
                                v-model="value1"
                               >
                        </el-switch>
                        </div>
                    </div>


                    <div class="goods-cate-addson">

                        <button type="button" class="el-button el-button--primary el-button--small" @click="intomihuancomponent"><span>新建商品分组</span></button>

                        <div style="width: 90%;display:flex;justify-content: flex-end">
                            <!-- <div class="goods-item-state">
                                <span class="goods-item-state-span">分组状态:</span>
                                <el-select v-model="value" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div> -->
                            <div class="el-input el-input--medium el-input-group el-input-group--append  goods-cate-addson-name">
                                <div class="goods-cate-addson-div-sondiv">
                                    <span>分组名称:</span>
                                    <input type="text" autocomplete="off" class="el-input__inner">
                                </div>

                                <div class="el-input-group__append"><i data-v-2b21add8="" class="el-icon-search"></i></div>
                            </div>
                        </div>
                    </div>

                    <!-- table-->
                    <div class="goods_table-all">
                        <el-table
                                ref="multipleTable"
                                :data="tableData"
                                tooltip-effect="dark"
                                border
                                style="width: 100%"
                                :default-sort = "{prop: 'date', order: 'descending'}"
                                size="mini"
                                @selection-change="handleSelectionChange">
                            <el-table-column
                                    type="selection"
                                   >
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="分组名称"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="goods"
                                    label="商品数量"
                                    sortable
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="serial"
                                    label="排序"
                                    show-overflow-tooltip
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="createTime"
                                    label="创建时间"
                                     :formatter="dateFormat"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="person"
                                    label="创建人"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="status"
                                    label="状态"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column
                                    prop="handle"
                                    label="操作"
                                    min-width="170">
                                    <template slot-scope="scope">
                                    <div>
                                        <el-button type="text" size="small" @click="editGrounpnote(scope.row.id,scope.row.name,scope.row.serial)">编辑</el-button>
                                        <!-- <el-button  @click="tuiguangmethod(scope.row.id)" type="text" size="small">推广</el-button> -->
                                        <el-button  @click="forbiddenclick(scope.row.id,scope.row.status)" type="text" size="small">{{scope.row.status == 0 ? '启用' : '禁用'}}</el-button>
                                        <el-button type="text" size="small"  @click="dectcatrgory(scope.row.id)">删除</el-button>
                                    </div>

                                </template>
                            </el-table-column>
                        </el-table>
                    </div>

                    <div class="el-row goods_list_dibu">
                        <div class="goods_list_dibu-onediv">
                        </div>
                        <div class="goods_list_dibu-twodiv cssbilie1">
                            <!-- small sizes-->
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[100, 200, 300, 400]"
                                    :page-size="100"
                                    layout="total, prev, pager, next, jumper"
                                    :total="1">
                            </el-pagination>
                        </div>
                    </div>
                    <!-- table over-->

                    <!--弹窗start-->

                    <!--弹窗over -->
                    <el-dialog title="修改分组信息" :visible.sync="dialogFormVisible">
                        <div class="add-shop-cate">
                            <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 150px;">分类名称：</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input">
                                            <input type="text" v-model="editgrounpdata.name" autocomplete="off" placeholder="0" class="el-input__inner">
                                        </div>

                                    </div>
                                    <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                                </div>
                            </div>
                            <!-- <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 150px;">上传图片：</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input">
                                            <button type="button" class="el-button el-button--text"><span>上传图片</span></button>
                                        </div>

                                    </div>
                                      <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>
                                </div>
                            </div>  -->
                            <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 150px;">分类排序：</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input">
                                            <input type="number"  v-model="editgrounpdata.serial" autocomplete="off" class="el-input__inner">
                                        </div>

                                    </div>
                                      <div class="tips el-col el-col-24 df-tps-zi">数字越大,排序越前</div>
                                </div>
                            </div>
                            <!-- <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 150px;">链接地址：</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input">
                                            <input type="text" autocomplete="off" class="el-input__inner">
                                        </div>

                                    </div>
                                      <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                                <!-- </div>
                            </div>  -->
                            <div class="el-dialog__footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="goodsGrounpOk">确 定</el-button>
                            </div>
                        </div>
                    </el-dialog>
                </div>
                <!-- 商品中心over-->

                <!-- 商品分组推广 -->
                  <!-- 商品推广 -->
                <el-dialog title="商品分组推广" :visible.sync="tuidialogFormVisible">
                           <el-tabs type="card">
                            <el-tab-pane label="微信小程序">
                            <div class="shop_dialog">
                                <span class="shop_dialog_tit">商品推广</span>
                                <div>
                                    <el-input placeholder="请输入内容" v-model="shop_lisk_input" :disabled="true"  ></el-input>
                                    <button v-clipboard:copy="catelink" v-clipboard:success="onCopy"  type="button" class="el-button el-button--primary"><span>复制</span></button>
                                </div>
                            </div>
                            <div class="shop_dialog_erweima">
                                <span class="shop_dialog_tit">二维码</span>
                                <div>
                                    <img width="120" height="120"  :src="sharercode">
                                    <a class="shop_dialog_code_a btn btn-default" id="down_qrcode" download="商品推广"  :href="downimg">下载二维码</a>
                                    <!-- <a class="shop_dialog_code_a btn btn-default" download="商品推广">下载二维码</a> -->
                                </div>
                            </div>
                                <div class="el-dialog__footer">
                                    <button  type="button" class="el-button el-button--default"><span @click="tuidialogFormVisible = false">确 认</span></button>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                </el-dialog>










                <!--  -->
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
export default {
     data() {
        return {
            loading:true,
            editgrounpdata:{
                'id':'',
                'name':'',
                'serial':''
            },
            catelink:'https://mihaunshop.com',//复制
            shop_lisk_input:'',
            tuidialogFormVisible:false, //分组推广
            options:[],
            radio: '1', // 假的单选框
            currentPage4: 1, //分页
            tableData: [{
                goodsid: 1,
                goods: "20",
                pv: '200',
                stock:'2019-10-29 11:18:13',
                total:2000,
                creatime:'2016-05-02',
                person:'蒋金泽',
                sort:1,
                handle:'ds ',
                state: '禁用'

            }],
            dialogFormVisible: false,//添加一级
            value1: true,
            value:'',
            sharercode:'',
            downimg:''
        };
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.getdata();
            } else {
                next('/login');
            }
		})
	},
    mounted(){},
     methods: {
         tuiguangmethod(id){
             this.tuidialogFormVisible = true;
             this.getQrCode(id);
         },
        // 复制成功时的回调函数
        onCopy (e) {
             this.$message.success("商品分组推广链接已复制到剪切板！")
        },
        getQrCode(id){
            let that = this; 
            let data = new FormData();      
            this.shop_lisk_input = "page/index/indexdetail/indexdetail?id="+id;
            this.catelink = "page/index/indexdetail/indexdetail?id="+id;
            let path = encodeURIComponent("page/index/indexdetail/indexdetail?id="+id);    
            this.$http({
                method: "get",
                url:baseapi.PIP+'/miniprogram/wx/mini/qrcode/page/get.do?path=' + path + '&openId='+that.$cookie.get('openId'),
                  headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                if(res.data.status ==301){
                    that.$message.warning('检测到你登录过期');
                    that.$router.push({
                        path: '/login',
                    })
                    return false;
                }
                if(res.data.status ==200){
                    that.sharercode =  res.data.data;   
                    that.downimg =  res.data.data;
                }
            }); 
        },
         getdata(){
            let data = new FormData();
            data.append('page',1);
            data.append('limit',20);    
            this.http.post( baseapi.mhgoodsgrounplist,data).then(res=>{
                this.tableData = res.data.list;
                this.loading = false;
            })   
         },
         //修改分组
        editGrounpnote(id,name,serial){
            this.dialogFormVisible = true;
            this.editgrounpdata = {
                'id':id,
                'name':name,
                'serial':serial
            }

        },
        goodsGrounpOk(){
            let data = new FormData();  
                data.append('id',this.editgrounpdata.id); 
                data.append('name',this.editgrounpdata.name); 
                data.append('serial',this.editgrounpdata.serial); 

                this.http.post( baseapi.mhgoodsgrounpedit,data).then(res=>{
                    if(res.data.status  == 200){
                    this.$message.success('修改成功');
                    this.dialogFormVisible = false;
                    this.getdata();
                    }else if(res.data.status  == 505){
                        this.$message('服务器开小差了');
                    }else{
                        this.$message(res.data.message);
                    }
                }) 
        },
        //启用禁用
        forbiddenclick(id,status){
            let thisStatus = status == 1 ? '禁用' : '启用';
            let that = this; 
                this.$confirm('确定'+thisStatus+'该分组, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        let data = new FormData();  
                        let setStatus  = status == 1 ? '0' : 1;
                        data.append('id',id); 
                        data.append('status',setStatus); 

                        this.http.post( baseapi.mhgoodsgrounpedit,data).then(res=>{
                            if(res.data.status  == 200){
                                that.$message.success(thisStatus + '成功');
                                that.getdata();
                            }else if(res.data.status  == 505){
                                that.$message('服务器开小差了');
                            }else{
                                that.$message(res.data.message);
                            }
                        })  
                    .catch(function(err){
                        console.log(err);
                    });
            })  
        },
                                                                
         //删除分组
         dectcatrgory(param){
               let that = this; 
                this.$confirm('确定删除该分组, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        let data = new FormData();  
                        data.append('id',param); 
                        data.append('isDelete',1); 

                        this.http.post( baseapi.mhgoodsgrounpedit,data).then(res=>{
                            let  paramid = param;
                            for(let i = 0; i < that.tableData.length; i++){
                            　　if(that.tableData[i].id == paramid){
                                    that.tableData.splice(i,1);
                            　　　　}
                            　　}                                
                            that.tableData = that.tableData;
                            if(res.data.status  == 200){
                                    console.log( that.tableData);
                            that.$message.success('删除成功');

                            }else if(res.data.status  == 505){
                                that.$message('服务器开小差了');
                            }else{
                                that.$message(res.data.message);
                            }
                        })  
                    .catch(function(err){
                        console.log(err);
                    });
            })  
        },
         dateFormat(row, column, cellValue, index){
          const daterc = row[column.property];
              if(daterc!=null){
              const dateMat= new Date(daterc.time);
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
            getzf(num){  
                if(parseInt(num) < 10){  
                    num = '0'+num;  
                }  
                return num;  
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            intomihuancomponent(){
                  this.$router.push({ path:'/goods/goodsgroup/addgoodsgroup'  })
            }
    },
    components:{
        navbar,sidebar,secnavbar    
    }
}
</script>
