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
                 <div class="goods-card_body">
                     <!--  -->
                    <div style="margin-bottom:20px;padding-bottom: 12px;border-bottom: 1px dashed #eee;">
                         <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/memberlist' }">会员列表</el-breadcrumb-item>
                            <el-breadcrumb-item>创建订单</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <!-- <div style="background-color: #f4f4f5;color: #909399;padding: 8px 16px;border-radius:10px;margin-bottom:18px">
                        <div style="color: #909399;font-weight:700;margin-bottom:8px">昵称 / id:</div>
                        <div>{{ '蜜獾二哥' }} /  {{200}}</div>
                    </div> -->
                    <div style="background-color: #f4f4f5;color: #909399;padding: 8px 16px;border-radius:4px;margin-bottom:18px">
                        <h5 class="mh-creaorderh5">详细信息</h5>
                    </div>
                    <div class="mh-creaorder">
                        <span>选择商品</span>
                        <el-button type="primary" size="mini" @click="selectgoogs">选择商品</el-button>
                    </div>
                    <!--选项卡组件-->
                    <div class="mh-creteorder-tab" v-if="tableData.length != 0">
                        <template>
                        <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                            prop="name"
                            label="名称"
                           >
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="价格">
                               <template slot-scope="scope">
                          <span>{{scope.row.price/100}}</span>
              
                      </template>
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="规格">
                        <template slot-scope="scope">
                            <dl v-for="(item,index) of scope.row.pvlist" :key="index" >
                                <dt><span>{{item[0]}}</span></dt>
                                <dd> <span>{{item[1]}}</span></dd>
                            </dl>
                        
                       </template>
                        </el-table-column>

                       <el-table-column
                            prop="numid"
                            label="数量">
                        </el-table-column>
      
                     

                        <el-table-column
                            prop="inventoryTotal"
                            label="库存">
                        </el-table-column>
                        <el-table-column
                        prop="handle"
                        label="操作"
                      >
                        show-overflow-tooltip>
                     <template slot-scope="scope">
                        <div>
                            <el-button type="text" size="small" @click="delectid(scope.$index)">删除</el-button>
                        </div>
                      </template>
                      </el-table-column>
                        </el-table>
                       </template>
                    </div>

                    <div class="mh-creaorder">
                        <span>实付金额</span>
                        <el-input v-model="sPrice" placeholder="请输入实付金额"></el-input>
                        <font style="vertical-align: inherit;color: red;" >（注：请先选择商品再修改实付金额）</font>
                    </div>
                    <div class="mh-creaorder" >
                        <span>用户收货地址</span>
                        <el-select v-model="selectaddressvalue"   @change="selectaddressMethod" placeholder="请选择用户地址">
                            <el-option
                          
                            v-for="item in addresslist"
                            :key="item.id"
                            :label="item.xaddress"
                            :value="item.id">
                            </el-option>
                        </el-select>
                        <el-button type="danger" size="mini" @click="chongxuanMethod">重选</el-button>
                        <el-button type="success" size="mini" @click="addressdialogFormVisible = true">添加地址</el-button>
                    </div>
                    <div  class="mh-creaorderdl">
                        <dl>
                            <dt>昵称 / id  : </dt>
                            <dd>{{mhWxname}} - {{parentid}}</dd>
                        </dl>
                        
                        <dl>
                            <dt>收货人姓名 : </dt>
                            <dd>{{note.name}}</dd>
                        </dl>
                        <dl>
                            <dt>收货人手机 : </dt>
                            <dd>{{note.phone}}</dd>
                        </dl>           
                    </div>
  
                <div class="mh-creatorder-btn">
                     <el-button type="primary" size="small" @click="creatOrderMethod">创建订单</el-button>
                </div>
           
                <goodsSpec ref="goodsSpec"></goodsSpec>
                <!-- 修改地址 -->
                <el-dialog title="新增收货地址" :visible.sync="addressdialogFormVisible" width="40%">
                        <div class="add-shop-cate">
                            <div class="df-basic_row_new el-form-item" style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">收货人姓名 :</label>
                                <div class="el-form-item__content" style="margin-left: 50px;width:60%;flex:1">                
                                    <el-input type="text" v-model="startAddressName"></el-input>                                   
                                </div>
                            </div>
                            <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">收货人手机号 : </label>
                                <div class="el-form-item__content" style="margin-left: 50px;width:60%;flex:1">                     
                                     <el-input type="text" v-model="startAddressPhone"   maxlength="11" show-word-limit></el-input>                            
                                </div>
                            </div>
                             <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">新收货地址 : </label>
                                <div class="el-form-item__content" style="margin-left: 50px;width:60%;flex:1">                                 
                                    <el-cascader
                                    :change-on-select="true"     
                                    v-model="addressvalue"
                                    :options="addressjsonop"
                                    :props="{ expandTrigger: 'hover',children:'childList',value:'id',label:'name' }"
                                    @change="handleChange"></el-cascader>
                                </div>
                            </div>
                             <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">详细地址 : </label>
                                <div class="el-form-item__content" style="margin-left: 50px;width:60%;flex:1" >
                                    <el-input type="textarea" v-model="xingaxiadress"></el-input>                      
                                </div>
                            </div>
                        
                            <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                <el-button @click="addressdialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="addAdressMethod">确 定</el-button>
                            </div>
                        </div>
                    </el-dialog>

                    <!-- 修改地址over -->



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
import baseapi from '../../utils/api';
import goodsSpec from '../resource/goodsSpec.vue';
import addressjson from "../../../static/address.json";
let that = this;
export default {
      data() {
        return {
            addresslist:[],
            options: [{
            value: '选项1',
            label: '黄金糕'
            }],
            selectaddressvalue:'',
            addressvalue: '',
            startAddressName:'',
            startAddressPhone:'',
            xingaxiadress:'',
            addressjsonop:[],
            address:'',
            sPrice:'',
            tableData: [],
            addressdialogFormVisible:false,
            note:'',
            parentid:0,
            mhWxname:'',
            goodsMap:new Map()
        };
    },
    watch:{
        goodsMap(val, oldVal){
            let allprice = 0;
            let newArr = [];
            val.forEach(function (value, key, map) {
                newArr.push(value)
                allprice +=  parseFloat(value.price/100)  * value.numid
            });
            this.tableData = newArr;
            this.sPrice = allprice;
         },
         deep:true //true 深度监听
    },
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
        let newArr = [];
        for (var i in addressjson.region) {
            newArr.push(addressjson.region[i]);
        }

        this.addressjsonop = newArr;
        this.getshouhuoaddress();
        this.parentid = this.$route.params.id;
        this.mhWxname =  sessionStorage.getItem('wxname');
    },
    methods: {
        //选择地址筛选联系方式
        selectaddressMethod(val){
            let str =  this.addresslist.filter(function(item){
                if(item.id == val){
                    return item;
                }
            })
            this.note = str[0];
        },
        //创建订单
        creatOrderMethod(){
            let that = this;
            let goodsArr = this.tableData;
        
            if(goodsArr.length == 0){
                this.$message.error('商品必选');
                return false;
            }
            if(this.selectaddressvalue == ''){
                this.$message.error('请选择收货地址');
                return false;
            }
          let newArr= [];
          goodsArr.forEach(function(item){
              newArr.push({'id':item.id,'suserId':that.$cookie.get('userId'),'itemType':1,
              'quantity':item.numid,'price': parseFloat(item.price)})
          })
            let data = new FormData();
            data.append('receiveId',this.selectaddressvalue);//收货地址id
            // data.append('payFrom',3),//支付来源
            data.append('source',6),
            data.append('moneyGoods',parseFloat(that.sPrice * 100));//总价
            data.append('moneyTotal',parseFloat(that.sPrice * 100));//总价所有价格
            data.append('moneyTotalReal',parseFloat(that.sPrice * 100));//实付金额
            data.append('moneyDeliver',0),//物流
            data.append('remark','');
            data.append('payName','创建订单');
            data.append('deliverType',1);//物流方式  1快递  2自提  
            data.append('skus',JSON.stringify(newArr));
            this.$http({
                method: "post",
                data:data,
                url:baseapi.MIP+'/order/order/admin/new',
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:'442' }
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 500){
                    that.$message.error(res.data.message);
                    return false;
                }
                if(res.data.status == 505){
                    that.$message.error(res.data.message);
                    return false;
                }
                if(res.data.status == 200){
                    that.$message.success('创建成功');
                    that.$router.push({
                        path: '/memberlist'
                    })
                }
            })

        },
        //新增用户收货地址
        addAdressMethod(){
            let that = this;
            let data = new FormData();
            let newarr  = this.addressvalue[this.addressvalue.length-1]
            data.append('name',this.startAddressName);
            data.append('phone',this.startAddressPhone);      
            data.append('regionId',newarr);
            data.append('address',this.xingaxiadress);
            this.$http({
                method: "post",
                data:data,
                url:baseapi.MIP+'/order/receiveinfo/admin/add',
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:'442' }
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 500){
                    that.$message.error(res.data.message);
                    return false;
                }
                if(res.data.status == 505){
                    that.$message.error(res.data.message);
                    return false;
                }
                if(res.data.status == 200){
                    that.addressdialogFormVisible = false;
                    that.$message.success('添加地址成功');
                }
            })
        },
        // 获取地址列表
        getshouhuoaddress(){
            let that = this;
            this.$http({
                method: "post",
                url:baseapi.MIP+'/order/receiveinfo/admin/list',
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:'442' }
            })
            .then(function(res){
                let list =  res.data.list;
                list.forEach(function(item){
                    item.xaddress = item.province + item.city + item.county + item.address;
                })
                that.addresslist =  list;
            })
        },
        //重选
        chongxuanMethod(){
            this.selectaddressvalue = '';
        },
        //属性弹框组件
        selectgoogs(){
            this.$refs.goodsSpec.upgoodsvalue = true;
        },
        delectid(id){  
            this.$confirm('确定删除该商品, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                  this.tableData.splice(id,1);
            })
        },
        reqaddress(){
            this.http.post( baseapi.reqaddress).then(res=>{
                this.vipaddress = res.data.list;
            }) 
        },

    },
    components:{
        navbar,sidebar,membersecnavbar,goodsSpec    
    }
}
</script>

<style>
.mh-creaorderh5{
    color: #303133;
    font-weight: 700;
}
.mh-creaorder{
    display: flex;
    align-items: center;
    margin-bottom: 20px;

}
.mh-creaorder>span{
        color: #606266;
        display: inline-block;
        width: 100px;
        text-align: right;
        margin-right: 18px;
}
.mh-creaorder .el-input{
width: 200px;
margin-right: 18px;
}
.mh-creaorderdl>dl{
    display: flex;
    align-items:center ;
    color: #606266;
    margin-bottom: 20px;
}

.mh-creaorderdl>dl dt{
    width: 100px;
    text-align: right;
    margin-right: 15px;
}
.mh-creatorder-btn{
   display: flex;
   justify-content: center;
   margin-top:40px
}
.mh-creteorder-tab{
    margin-bottom: 30px;
}
</style>