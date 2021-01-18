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
                  <div class="goods-card_body"  v-loading="loading">
                    <!--小程序店主页-->
                    <div class="store-header-zidingyi member-title">
                        <button type="button" class="el-button el-button--primary" @click="addvipmethod(1)"><span>添加会员等级</span></button>
                    </div>


                    <div class="store-table">
                        <el-table
                                :data="viplist"
                                stripe
                                border
                                @selection-change="handleSelectionChange">
                                style="width: 100%">
                            <el-table-column
                                    type="selection"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="name"
                                    label="等级名称"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="weight"
                                    label="等级权重"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="userNum"
                                    label="人数"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="discount"
                                    label="折扣"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="upJye"
                                    label="满足条件（交易额）"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="upJycs"
                                    label="满足条件（交易次数）"
                            >
                            </el-table-column>
                            <el-table-column
                                    prop="handle"
                                    label="操作"
                                    width="220"
                            >
                                <template  slot-scope="scope">
                                    <div>
                                        <button  @click="addvipmethod(2,scope.row)" type="button" class="el-button el-button--default el-button--mini"><span>编辑</span></button>  
                                        <button  @click="delectvip(scope.row.id)"  type="button" class="el-button el-button--danger el-button--mini"><!----><!----><span>删除</span></button>        
                                       
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                    <div class="store_page member-store_page">
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
                    <!--小程序店铺主页over-->
                </div>
                <!-- 商品中心over-->
            </div>
        </div>
        <!--新增会员等级弹窗 -->
        <el-dialog :title="titlemethod" :visible.sync="dialogFormVisible">
            <div class="add-shop-cate">
                <div class="df-basic_row_new el-form-item">
                    <label for="item_title" class="el-form-item__label" style="width: 150px;">等级权重:</label>
                    <div class="el-form-item__content" style="margin-left: 150px;">
                        <div class="el-input el-input--small" style="width: 88%; display: flex;">
                            <div class="el-input">
                                <input type="number" autocomplete="off" placeholder="数值越大,等级越高" class="el-input__inner" v-model="addzhong">
                            </div>

                        </div>
                        <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                    </div>
                </div>   


                <div class="df-basic_row_new el-form-item">
                    <label for="item_title" class="el-form-item__label" style="width: 150px;">等级名称</label>
                    <div class="el-form-item__content" style="margin-left: 150px;">
                        <div class="el-input el-input--small" style="width: 88%; display: flex;">
                            <div class="el-input">
                                <input type="text" autocomplete="off" placeholder="0" v-model="addname" class="el-input__inner">
                            </div>

                        </div>
                        <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                    </div>
                </div>

                    <div class="df-basic_row_new el-form-item">
                    <label for="item_title" class="el-form-item__label" style="width: 150px;">交易额:</label>
                    <div class="el-form-item__content" style="margin-left: 150px;">
                        <div class="el-input el-input--small" style="width: 88%; display: flex;">
                            <div class="el-input">
                                <input type="number" autocomplete="off" class="el-input__inner" placeholder="为空不做判断" v-model="addjye">
                            </div>

                        </div>
                        <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                    </div>
                </div>   

                    <div class="df-basic_row_new el-form-item">
                    <label for="item_title" class="el-form-item__label" style="width: 150px;">交易次数:</label>
                    <div class="el-form-item__content" style="margin-left: 150px;">
                        <div class="el-input el-input--small" style="width: 88%; display: flex;">
                            <div class="el-input">
                                <input type="number" autocomplete="off" class="el-input__inner" placeholder="为空不做判断" v-model="addjych">
                            </div>

                        </div>
                        <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                    </div>
                </div>   

                    <div class="df-basic_row_new el-form-item">
                    <label for="item_title" class="el-form-item__label" style="width: 150px;">会员折扣:</label>
                    <div class="el-form-item__content" style="margin-left: 150px;">
                        <div class="el-input el-input--small" style="width: 88%; display: flex;">
                            <div class="el-input">
                                <input type="number" autocomplete="off" class="el-input__inner" placeholder="请输入0.1~10之间的数字,值为空代表不设置折扣" v-model="addvipzhe">
                            </div>

                        </div>
                        <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                    </div>
                </div>   

                    <div class="df-basic_row_new el-form-item">
                    <label for="item_title" class="el-form-item__label" style="width: 150px;">账户余额:</label>
                    <div class="el-form-item__content" style="margin-left: 150px;">
                        <div class="el-input el-input--small" style="width: 88%; display: flex;">
                            <div class="el-input">
                                <input type="number" autocomplete="off" class="el-input__inner" placeholder="余额大于等于多少  会员" v-model="addzhange">
                            </div>
                                <div style="margin:0 10px">
                                    -
                                </div>
                                <div class="el-input">
                                <input type="number" autocomplete="off" placeholder="余额小于多少  成为会员" class="el-input__inner" v-model="addzhanges">
                            </div>

                        </div>
                        <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                    </div>
                </div> 

                
                    <div class="df-basic_row_new el-form-item" >
                    <label for="item_title" class="el-form-item__label" style="width: 150px;">指定商品:</label>
                    <div class="el-form-item__content" style="margin-left: 150px;">
                        <div class="el-input el-input--small" style="width: 88%; display: flex;">
                            <div  v-for="(itemimg,indeximg) of goodsimgarr" :key="indeximg" class="membergrade-mh">
                            <i @click="delectimg(indeximg)" class="el-icon-close " style="position: absolute;right: 1px;top: -5px;cursor: pointer;color:#000"></i>
                            <img :src="itemimg.imageUrl" alt="" srcset=""  class="mhmemberhradeimg">  
                            </div>
                        
                            <div class="mh-xxcard-add"  @click="getsonimg" ><i  class="iconfont icon-add1" style="color: rgb(64, 158, 255);"></i></div>

                        </div>
                        <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                    </div>
                </div>     

                    <div class="df-basic_row_new el-form-item">
                    <label for="item_title" class="el-form-item__label" style="width: 150px;">购买条件:</label>
                    <div class="el-form-item__content" style="margin-left: 150px;">
                        <div class="el-input el-input--small" style="width: 88%; display: flex;">
                            <div class="el-input">
                                <el-radio v-model="addradio" label="1">购买一件</el-radio>

                            </div>
                                <div class="el-input">
                                    <el-radio v-model="addradio" label="0">购买所有</el-radio>
                            </div>

                        </div>
                        <!--   <div class="tips el-col el-col-24 df-tps-zi">默认为0,为0取总设置</div>-->
                    </div>
                    </div>   
                    <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display:flex;justify-content:center">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                    <el-button type="primary" @click="newcategory">确 定</el-button>               
                </div>
            </div>
        </el-dialog>
        <!-- 弹窗over-->

        <!-- 修改/编辑会员等级弹窗 -->
            <!-- 同上传不同的id参数区分 1  新增  2  修改 -->
        <!-- 弹窗over -->
           <upshop ref="imgsrc"> </upshop>
    
    </div>
    <!--主体 over-->
    </div>
</template>
<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import membersecnavbar from './membersecnavbar';
import baseapi from '../../utils/api';
import upshop from '../resource/upshop.vue';

export default {
      data() {
        return {
            loading:true,
            totalCount:0,
            fatherdata:false,
            goodsimgarr:[],
            titlemethod:'',
            editdatalist:{},
            addzhong:'',
            addname:'',
            addjye:'',
            addjych:'',
            addvipzhe:'',
            addzhange:'',
            addzhanges:'',
            addradio:"1",
            dialogFormVisible: false,//添加一级 
            methodid:'',
            editid:'',  
            viplist:[],    
            tableData: [],
            currentPage4: 1, //分页
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
    mounted(){
       
    },
    methods: {
    getsonimg(){
       this.$refs.imgsrc.upgoodsvalue = true;
       this.$refs.imgsrc.pid = 1;
    },
    delectimg(index){
       this.goodsimgarr.splice(index,1);
    },            
    //新增会员等级弹窗
    addvipmethod(parme,id){
        if (parme == 1) {
          this.methodid =1;
          this.addzhong = '';
          this.addname =  '';
          this.addjye= '';
          this.addjych =  '';
          this.addvipzhe =  '';
          this.addzhange =  '';  
          this.addzhanges =  '';
          this.goodsimgarr = '' ;
          this.addradio = '';
          this.titlemethod = '新增会员等级';
        } else {
            this.editdatalist =id;
            this.methodid =2;
            this.editid = id.id;
            this.titlemethod = '编辑会员等级';
            let data = new FormData();
            data.append('id',id.id);
            data.append('page',1);
            data.append('limit',1);
            this.http.post( baseapi.seeVipdengjiDetail,data).then(res=>{
                console.log('等级详情',res.data.data);
                let  editList = res.data.data; 
                this.addzhong = editList.weight;
                this.addname = editList.name;
                this.addjye= editList.upJye;
                this.addjych = editList.upJycs;
                this.addvipzhe = editList.discount;
                this.addzhange = editList.upBalancef;  
                this.addzhanges = editList.upBalancet;
                this.goodsimgarr =editList.spuList ;
                this.addradio = editList.upSpusNum.toString();
            }) 
        }
        this.dialogFormVisible= true ;
    },
    //新增 --  修改
    newcategory(){
        let that = this; 
        let data = new FormData();
        if(that.methodid == 1){  //新增状态
            data.append('name',that.addname);  
            data.append('weight',that.addzhong); 
            if(that.addjye != "")data.append('upJye',that.addjye);
            if(that.addjych != "")data.append('upJycs',that.addjych); 
            if(that.addvipzhe != '')data.append('discount',that.addvipzhe);          
            if(that.addzhange != '') data.append('upBalancef',that.addzhange);
            if(that.addzhanges != '')data.append('upBalancet',that.addzhanges);
            if(that.goodsimgarr.length != 0){
                let jiebain = [];
                for(let a =0;a<that.goodsimgarr.length;a++){
                        jiebain.push(that.goodsimgarr[a].id);
                    }
                data.append('upSpus',jiebain.join(','))
            }
            data.append('upSpusNum',that.addradio)  
            this.$http({
                method: "post",
                url: baseapi.addvipdengji,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
            })
            .then(function(res){
                    if(res.data.status ==200) {         
                        that.dialogFormVisible = false;
                        that.getdata();  // 在请求一次
                        that.addzhong='';
                        that.addname='';
                        that.addjye='';
                        that.addjych='';
                        that.addvipzhe='';
                        that.addzhange='';
                        that.addzhanges='';
                        that.addradio="1";
                        that.goodsimgarr = [];
                        that.$message({
                            showClose: true,
                            message: '添加成功',
                            type:'success',
                            duration:600
                        });                    
                    }else{
                            that.$message.error("新增失败 , "+res.data.message);
                    }
            }).catch(function(err){
                that.dialogFormVisible = false;
                    that.$message("添加失败,服务器开小差");
                    console.log(err);
            });  
            }else{
                //修改编辑状态
                data.append('id',that.editid); 
                data.append('name',that.addname);  
                data.append('weight',that.addzhong); 
                if(that.addjye != ""){
                    data.append('upJye',that.addjye); 
                }
                if(that.addjych != ""){
                    data.append('upJycs',that.addjych); 
                }
                if(that.addvipzhe != ''){
                data.append('discount',that.addvipzhe);          
                }
                if(that.addzhange != ''){
                    data.append('upBalancef',that.addzhange)
                }
                if(that.addzhanges != ''){
                    data.append('upBalancet',that.addzhanges)
                }

                 if(that.goodsimgarr.length != 0){
                    let jiebain = [];
                    for(let a =0;a<that.goodsimgarr.length;a++){
                         jiebain.push(that.goodsimgarr[a].id);
                     }
                    data.append('upSpus',jiebain.join(','))
                }

                data.append('upSpusNum',that.addradio)  
                this.$http({
                    method: "post",
                    url: baseapi.editvipdengji,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
                })
                .then(function(res){
                        if(res.data.status ==200) {
                            that.$message.success("编辑成功");
                            that.dialogFormVisible = false;
                            that.getdata();  
                        }else{
                             that.$message("编辑失败 , "+res.data.message);
                        } ;         
                }).catch(function(err){
                    that.dialogFormVisible = false;
                    that.$message("编辑失败,服务器开小差");
                });  
            }         
    },    
    //请求列表
    getdata(){
        let data = new FormData();
        data.append('page',1);
        data.append('limit',20); 
        this.http.post( baseapi.vipdengji,data).then(res=>{
            console.log(res.data.list);
            this.viplist = res.data.list;
            this.totalCount  = res.data.totalCount; 
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
    },
    handleSelectionChange(val) {
        this.multipleSelection = val;
    },
    //删除会员等级
    delectvip(id){
        this.$confirm('确定将会员等级删除, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
            let data = new FormData();
            data.append('id',id); 
            data.append('isDelete',1);      
            this.http.post( baseapi.editvipdengji,data).then(res=>{
                this.$message.success("删除成功");
                this.getdata();  // 在请求一次
                })                       
            });  
        }
    },
    components:{
        navbar,sidebar,membersecnavbar,upshop    
    },
   
}
</script>
<style>
.member-store_page{
    width: 100%;
    text-align: right;
    margin-top: 14px
}
.member-title{
    margin-bottom: 15px
}
</style>