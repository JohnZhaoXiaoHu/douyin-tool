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
                    <div class="goods-cate-onediv">
                        <!-- <span  class="el-tag el-tag--warning shoplistgo">
                            商品分类链接：https://mihuanshop.com
                            <button type="button" class="el-button el-button--warning el-button--mini" style="margin-left: 20px;"><span v-clipboard:copy="catelink" v-clipboard:success="onCopy">复制</span></button>
                        </span> -->
                    </div>

                    <div class="shoplist el-col el-col-24 goods-cate">
                            <div  class="classified">商品分类展示：</div>
                            <div>
                                <el-radio v-model="radio" label="1" @change="shopcateone">商品分类1</el-radio>
                                <i  class="el-icon-question item_icon" style="cursor: pointer;" @mouseenter="StopRoll(1)" @mouseleave="UpRoll(1)"></i>
                                <img v-show="isimages" src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/styleimg1.jpg" alt="" class="xxxximg">    
                            </div>
                            <div>
                                <el-radio v-model="radio" label="2" @change="shopcatetwo">商品分类2</el-radio>
                                <i style="cursor: pointer;"  @mouseenter="StopRoll(2)" @mouseleave="UpRoll(2)" class="el-icon-question item_icon"></i>
                                <img v-show="isimagestwo" src=" https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/styleimg2.jpg" alt="" class="xxxximg">            
                            </div>
                    </div>

                    <div class="goods-cate-addson">
                        <button type="button" class="el-button el-button--primary el-button--small" @click="dialogFormVisible = true"><span>添加一级分类</span></button>
                        <div class="el-input el-input--medium el-input-group el-input-group--append goods-cate-addson-div">
                            <input type="text" autocomplete="off" class="el-input__inner">
                            <div class="el-input-group__append"><i  class="el-icon-search"></i></div>
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
                                    label="分类名称"
                                    sortable
                                    >

                            </el-table-column>
                            <el-table-column
                                    prop="spuNum"
                                    label="商品数量"
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
                                    prop="handle"
                                    label="操作"
                                    min-width="120">
                                <template slot-scope="scope">
                                    <div>
                                          <el-button type="text" size="small" @click="intoDetail(scope.row.id)">编辑</el-button>
                                        <!-- <el-button type="text" size="small" @click="editscategory(scope.row.name,scope.row.id,scope.row.img,scope.row.serial,scope.row.redirect)">编辑</el-button> -->
                                        <el-button type="text" size="small" @click="tuiguangmethod(scope.row.id)">推广</el-button>
                                        <el-button type="text" size="small" @click="startcategory(scope.row.id,scope.row.status)" v-if="scope.row.status == 1">禁用</el-button>
                                          <el-button type="text" size="small" @click="startcategory(scope.row.id,scope.row.status)" v-if="scope.row.status == 0">启用</el-button>
                                        <el-button type="text" size="small" @click="dectcatrgory(scope.row.id)">删除</el-button>
                                        <el-switch
                                             v-model="scope.row.ischeck"
                                           active-color="#13ce66" inactive-color="#DCDFE6" 
                                            @change="switchEv(scope.row)"
                                           >
                                        </el-switch>
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>

                    <div class="el-row goods_list_dibu  mh-goodscategory">
                        <!-- <div class="goods_list_dibu-onediv">
                            <button type="button" class="el-button el-button--default el-button--small"><span>全选</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>取消全选</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>批量删除</span></button>
                        </div> -->
                        <div class="goods_list_dibu-twodiv cssbilie1">
                            <!-- small sizes-->
                            <el-pagination
                                    @size-change="handleSizeChange"
                                    @current-change="handleCurrentChange"
                                    :current-page="currentPage4"
                                    :page-sizes="[100, 200, 300, 400]"
                                    :page-size="20"
                                    layout="total, prev, pager, next, jumper"
                                    :total="totalCount">
                            </el-pagination>
                        </div>
                    </div>
                    <!-- table over-->

                    <!--弹窗start-->

                    <!--弹窗over -->
                    <el-dialog title="添加一级分类" :visible.sync="dialogFormVisible">
                        <div class="add-shop-cate">
                            <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label mh-start_red" style="width: 150px;">分类名称：</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input">
                                            <input type="text" autocomplete="off" placeholder="请填写分类名称" v-model="category" class="el-input__inner">
                                        </div>

                                    </div>
                                    <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                                </div>
                            </div>
                            <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 150px;">上传图片：</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input">
                                            <div style="position: relative;">
                                                <img :src="goodscategoryimgOne" alt="" width="60" height="60" style="border:1px dotted #eee" >
                                                <img v-if="goodscategoryimgOne != ''"  @click="delectImgCate" src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/jinze/tool/delete.png" alt="" srcset="" style=" position: absolute; width: 15px; top: -8px;left: 58px;cursor: pointer;">
                                            </div>
                                            <button @click="getsonimg" type="button" class="el-button el-button--text"><span>上传图片(只能选取一张)</span></button>
                                        </div>

                                    </div>
                                    <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                                </div>
                            </div>
                            <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 150px;">分类排序：</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input">
                                            <input type="number" autocomplete="off" class="el-input__inner" v-model="cateorder">
                                        </div>

                                    </div>
                                    <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                                </div>
                            </div>
                            <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 150px;">链接地址：</label>
                                <div class="el-form-item__content" style="margin-left: 150px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input">
                                            <input type="text" autocomplete="off" class="el-input__inner" v-model="lianjie">
                                        </div>

                                    </div>
                                    <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                                </div>
                            </div>
                            <div slot="footer" class="dialog-footer add-shop-cate-footer">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="newcategory">确 定</el-button>
                            </div>
                        </div>
                    </el-dialog>

               

                    <!-- 商品推广 -->
                    <el-dialog title="商品分类推广" :visible.sync="tuidialogFormVisible">
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


                    
                 
                 
                 
                 
                
                    <imgsrc ref="imgsrc"> </imgsrc>
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
import imgsrc from "../resource/imgsrc";
export default {
     data() {
        return {
            loading: false,
            totalCount:0,
            editsortid:'',
            goodscategoryimgOne:'',
            isimages:false,
            isimagestwo:false,

            catelink:'https://mihaunshop.com',
            shop_lisk_input:'',

            tuidialogFormVisible:false,
            dialogFormVisible: false,//添加一级 
            //分类名称
            category:'',    
            editcategory:'',
            editcateorder:'',
            editlianjie:'',
            cateorder:'',
            lianjie:'',

            radio: '1', // 假的单选框
            currentPage4: 1, //分页
            tableData: [],
  
            arrlength:0,
            accuseVisible:false, //上传图片
            sonurl:'',
            sharercode:'',
            downimg:'',
            mpShowvalue:true
        }
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
    mounted(){
     
    },
    methods: {  
        switchEv(param){
            console.log(param);
           let data = new FormData();

            data.append('id',param.id);
            
            data.append('pid',0)
            if(param.ischeck) {
                data.append('mpShow',1);
            } else {
                data.append('mpShow',0);
            }
            data.append('name',param.name);
            data.append('imgs',param.img);
            data.append('redirect',param.redirect || '');

            this.http.post( baseapi.editcategory,data).then(res=>{
                this.$message.success('修改成功');
                this.getdata();                
            })  

        },
        tuiguangmethod(id){
            this.tuidialogFormVisible = true;
            this.getQrCode(id);
        },
        //获取二维码路径地址
        getQrCode(id){
            let that = this; 
            let data = new FormData();      
            this.shop_lisk_input = "page/category/category?scategoryId="+id;
            this.catelink = "page/category/category?scategoryId="+id;
            let path = encodeURIComponent("page/category/category?scategoryId="+id);    
            this.$http({
                method: "get",
                url:baseapi.PIP + '/miniprogram/wx/mini/qrcode/page/get.do?path=' + path + '&openId='+that.$cookie.get('openId'),
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
        delectImgCate(){
                this.goodscategoryimgOne = '';
            } ,
        getsonimg(){
            // alert('添加一级分类')
            this.$refs.imgsrc.imgdialogFormVisible = true;
            this.$refs.imgsrc.pid = 9;
        },    

        //上传图片
        showDilog () {
            this.accuseVisible = true
        },
        StopRoll(id){
            if(id == 1){
                this.isimages = true;
                this.isimagestwo = false;
            }else{
                this.isimages = false;
                this.isimagestwo = true;
            }
        },
        UpRoll(id){
            this.isimages = false;
            this.isimagestwo = false
        },
        //商品分类展示设置
        shopcateone(){
            this.$message.success({
                showClose: true,
                message: '设置成功',
                type:'success',
                duration:600
            });
        },
         shopcatetwo(){
            this.$message.success({
                showClose: true,
                message: '设置成功',
                type:'success',
                duration:600
            });
        },
        // 复制成功时的回调函数
        onCopy (e) {
        this.$message.success("内容已复制到剪切板！")
        },
        intoDetail(id){
              this.$router.push({
                path: `/goodslist/goodscategoryDetail/${id}`
            })
        },
        //旧版删除
        editscategory(ad1,ad2,ad3,ad4,ad5){         
     
            this.editcategory = ad1;
            this.editcateorder = ad2;
            this.goodscategoryimgOne = ad3;
            this.editsortid = ad4;
            this.editlianjie = ad5;
        },
    

        //修改状态
        startcategory(param,catestatus){  
             let that = this;
             let notestr = ''; 
             catestatus == 1  ? notestr='禁用' : notestr = '启用';
             this.$confirm('确定'+ notestr+'该分类吗, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                
                let data = new FormData();
                if(catestatus == 1){
                    data.append('status',0); 
                }
                if(catestatus == 0){
                    data.append('status',1);  
                }
                    data.append('id',param); 
                that.http.post( baseapi.qycategory,data).then(res=>{
                    that.$message.success("修改状态成功");
                    that.getdata();
                    that.dialogFormVisible = false;
                }) 
    
                }).catch(function(err){
                    console.log(err);
            });  
              
        },

        dectcatrgory(param){
               let that = this; 
                this.$confirm('确定将该分类删除, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                    }).then(() => {
                        let data = new FormData();  
                        data.append('id',param);                           
                        that.http.post( baseapi.delectcategory,data).then(res=>{
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

                    }).catch(function(err){
                        console.log(err);
                });  
        } ,
        //新增一级分类
        newcategory(){
            let that = this; 
            let data = new FormData();
            data.append('serial',that.cateorder);  
            data.append('name',that.category); 
            data.append('redirect',that.lianjie);
            data.append('imgs',that.goodscategoryimgOne);
            data.append('type',0);

            this.http.post( baseapi.addcategory,data).then(res=>{
                that.$message.success("添加成功");
                that.dialogFormVisible = false;
                that.getdata();
                //添加成功清除操作
                that.category = '';
                that.lianjie = '';
                that.goodscategoryimgOne = '';
                that.cateorder = '';
            })       
        },
        dateFormat(row, column, cellValue, index){
           let daterc = row[column.property];
               if(daterc!=null){
                   let dateMat= new Date(daterc);
                   let year = dateMat.getFullYear();
                   let month = dateMat.getMonth() + 1;
                   let day = dateMat.getDate();
                   let hh = dateMat.getHours();
                   let mm = dateMat.getMinutes();
                   let ss = dateMat.getSeconds();
                   let timeFormat= this.getzf(year) + "-" + this.getzf(month)  + "-" + this.getzf(day) + " " + this.getzf(hh)  + ":" + this.getzf(mm) + ":" + this.getzf(ss);
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
        //请求列表数据     
        getdata(){
            let data = new FormData();
            data.append('page',1);  
            data.append('limit',20);            
            this.http.post( baseapi.shopcatexiang,data).then(res=>{
            this.totalCount = res.data.list.length;
                console.log(res.data.list);
                res.data.list.forEach((item)=>{
                    if (item.mpShow == 1) {
                        item.ischeck = true;
                    }else{
                         item.ischeck = false;
                    }
                })
                this.tableData = res.data.list;
                this.loading = false;
            }) 
        },

        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        }
    },
    components:{
        navbar,sidebar,secnavbar,imgsrc    
    }
}
</script>
<style>
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
.xxxximg{
    width: 242px;
    height: 444px;
    position: absolute;
    z-index: 999999;
}
.mh-goodscategory{
    widows: 100%;
    display: flex;
    justify-content: flex-end;
}
</style>