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
                <div v-loading="loading">
                    <!--选项卡组件-->
                    <div class="goods-card_body marketing mh-mhset_logs_header-body">
                    <!-- 面包屑 -->
                    <div class="mh-mhset_logs_header">
                       <h5>操作日志</h5>    
                    </div>
                    <!-- 面包屑over -->

                    <div class="shuaixuan vip-alllist vip-xxxx" style="padding:0 20px;box-sizing:border-box">

                        <div class="m-search-box el-row el-row-my-div">
                            <div>
                                <el-input placeholder="收货人/手机号" v-model="input3" class="input-with-select">
                                    <el-button slot="append" icon="el-icon-search"></el-button>
                                </el-input>
                            </div>
                        </div>
                    </div>
                
    
                     <div style="padding:0 20px 15px; border-box">
                         <!-- stripe -->
                        <template>
                            <el-table :data="tableData" style="width: 100%" class="sa_TableView">

                                <el-table-column prop="phone" label="" >
                                    <template slot-scope="scope">
                                        <div class="sa_cell">
                                            <div style="display: flex;">
                                                <div>收货人：{{scope.row.name}}</div>
                                                <img :src="scope.row.phone" class="sm_imgView" alt="" srcset="">
                                            </div>
                                            <div style="display: flex;">
                                                <div>联系电话：{{scope.row.name}}</div>
                                            </div>
                                            <div style="display: flex;">
                                                <div>省市：{{scope.row.name}}</div>
                                            </div>
                                            <div style="display: flex;">
                                                <div>详细地址：{{scope.row.name}}</div>
                                            </div>

                                            <div class="sa_opreate">
                                                <button v-if="scope.$index==0" type="danger" plain size="mini" class="sa_normal1" @click="normalClick">默认</button>
                                                <el-button v-if="scope.$index!=0" type="info" plain size="mini" class="sa_normal" @click="setNoramlClick">设为默认</el-button>
                                                <el-button type="danger" round size="mini" class="sa_edit" @click="editClick">编辑</el-button>
                                            </div>
                                        </div>
                                    </template>
                                </el-table-column>

                            </el-table>

                            <div class="mh-mhsegt-logs_pages">
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
                        </template>

                     </div>
                    </div>    



                     <!-- 修改已有地址地址 -->
                        <el-dialog title="修改收货地址" :visible.sync="startaddressdialogFormVisible" width="40%">
                            <div class="add-shop-cate">
                                <div class="df-basic_row_new el-form-item" style="display:flex">
                                    <label for="item_title" class="el-form-item__label" style="width: 100px;">收货人姓名:</label>
                                    <div class="el-form-item__content" style="margin-left: 20px;width:70%">
                                        <el-input type="text" v-model="startAddressName"></el-input>                  
                                    </div>
                                </div>
                                <div class="df-basic_row_new el-form-item" style="display:flex">
                                    <label for="item_title" class="el-form-item__label" style="width: 100px;">收货人手机号: </label>
                                        <div class="el-form-item__content" style="margin-left: 20px;width:70%">
                                            <el-input type="text" v-model="startAddressPhone"   maxlength="11"   show-word-limit></el-input>
                                        </div>       
                                    
                                </div>
                                <div class="df-basic_row_new el-form-item" style="display:flex">
                                    <label for="item_title" class="el-form-item__label" style="width: 100px;">当前收货地址: </label>
                                        <div class="el-form-item__content" style="margin-left: 20px;width:70%">
                                            <el-input type="text" v-model="startAddress" disabled="true"></el-input> 
                                            <el-button type="info" plain size="mini" @click="editthisDress">修改当前收货地址</el-button>                
                                        </div>       
                                </div>
            
                                <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                    <el-button @click="startaddressdialogFormVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="startAddressid">确 定</el-button>
                                </div>
                            </div>
                        </el-dialog>
                    <!-- 修改已有地址over -->
                    <!-- 修改地址 -->
                    <el-dialog title="修改收货地址" :visible.sync="addressdialogFormVisible" width="40%">
                        <div class="add-shop-cate">
                            <div class="df-basic_row_new el-form-item" style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 100px;">收货人姓名:</label>
                                <div class="el-form-item__content" style="margin-left: 20px;width:60%;flex:1">                
                                    <el-input type="text" v-model="startAddressName"></el-input>                                   
                                </div>
                            </div>
                            <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 100px;">收货人手机号: </label>
                                <div class="el-form-item__content" style="margin-left: 20px;width:60%;flex:1">                     
                                     <el-input type="text" v-model="startAddressPhone"   maxlength="11" show-word-limit></el-input>                            
                                </div>
                            </div>
                             <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 100px;">新收货地址: </label>
                                <div class="el-form-item__content" style="margin-left: 20px;width:60%;flex:1">
                                    <el-cascader v-model="addressvalue" @change="handleChange"
                                    :change-on-select="true"     
                                    :options="addressjsonop"
                                    :props="{ expandTrigger: 'hover',children:'childList',value:'id',label:'name' }">
                                    </el-cascader>
                                </div>
                            </div>
                            <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 100px;">详细地址: </label>
                                <div class="el-form-item__content" style="margin-left: 20px;width:60%;flex:1" >
                                    <el-input type="textarea" v-model="xingaxiadress"></el-input>                      
                                </div>
                            </div>

                            <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 20px;"> </label>
                                <div class="el-form-item__content" style="margin-left: 20px;width:60%;flex:1" >
                                    <el-checkbox v-model="normalAddressChecked">设为默认地址</el-checkbox>                  
                                </div>
                            </div>
                        
                            <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                <el-button @click="addressdialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="editshouHuoaddress">确 定</el-button>
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
import settingnav from './settingnav';
import api from '../../utils/api';
import addressjson from "../../../static/address.json";
// import aa  from "../../../static/ad";
export default {
    data() {
        return {
            loading : true,
            tableData:[],
            totalCount:0,
            value1:'',
            changeAddressDialog: false,
            changeAddressName: '',
            changeAddressPhone: '',
            addressdialogFormVisible: false,
            startaddressdialogFormVisible: false,
            startAddressName: '',
            startAddressPhone: '',
            startAddress: '',
            addressjsonop: '',
            normalAddressChecked: false,
        };
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.getData(1);
            } else {
                next('/login');
            }
		})
    },
     mounted() {
        this.syebol();

        let newArr = [];
        for (var i in addressjson.region) {
            newArr.push(addressjson.region[i]);
        }
        this.addressjsonop = newArr;
        // this.request_orderList('', 1);
        // this.expressmethod();
        // this.reqOrderNum();
        // this.exportHui();
      
    },
    methods:{
        normalClick(index){

        },
        setNormalClick(index){
            
        },
        editClick(index){
            this.startaddressdialogFormVisible = true;
        },
        changeAddressConfirm(){
            this.startaddressdialogFormVisible = false;
        },
        editshouHuoaddress() {
            let data = new FormData();
            let that = this;
            data.append('receiverName', this.startAddressName); //收货人 
            data.append('receiverPhone', this.startAddressPhone); //收货电话
            data.append('receiverAddress', this.xingaxiadress); //收货地址
            data.append('regionId', this.shophuoSmallId); //收货id  
            data.append('no', that.editadressid)

            this.$http({
                    method: "post",
                    url: baseapi.mhorderupodate,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'), userId: this.editadressuserid }
                })
                .then(function(res) {
                    if (res.data.status == 505) {
                        that.$message.error('服务器异常');
                        return false;
                    }
                    if (res.data.status == 500) {
                        that.$message.error(res.data.message);
                        return false;
                    }
                    if (res.data.status == 200) {
                        that.$message.success('修改地址成功');
                        that.shuaixuanmethod(that.shuaixuanid, that.thispageindex);
                        that.addressvalue = [];
                        that.addressdialogFormVisible = false;

                    } else {
                        that.$message.error('修改地址不成功');
                    }
                })
        },
        editwuliuaddress(no, uerid) {
            this.addressdialogFormVisible = true;
            this.editadressid = no;
            this.editadressuserid = uerid;
        },
        //需要最小的地址id
        editthisDress() {
            this.startaddressdialogFormVisible = false;
            this.addressdialogFormVisible = true;
        },
        editwuliuaddressStart(parme1, parme2, parme3, parme4, parme5, regionid) {

            this.editadressid = parme1;
            this.editadressuserid = parme2;
            this.startAddressName = parme3;
            // let hiddenphone = parme4.substr(0,3) + "****" + parme4.substr(7)

            this.startAddressPhone = parme4;
            this.startAddress = parme5
            this.startaddressdialogFormVisible = true;
            let newArr = parme5.split(" ");
            this.smalladdressname = newArr[newArr.length - 2];
            this.xingaxiadress = newArr[newArr.length - 1];
            this.smalladdressid = regionid;
            // this.gethref(this.addressjsonop,this.smalladdressname);
        },
        startAddressid() {
            let data = new FormData();
            let that = this;
            data.append('receiverName', this.startAddressName); //收货人 
            data.append('receiverPhone', this.startAddressPhone); //收货电话
            data.append('receiverAddress', this.xingaxiadress); //收货地址
            data.append('regionId', this.smalladdressid); //收货id  
            data.append('no', that.editadressid)

            this.$http({
                    method: "post",
                    url: baseapi.mhorderupodate,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'), userId: this.editadressuserid }
                })
                .then(function(res) {
                    if (res.data.status == 505) {
                        that.$message.error('服务器异常');
                        return false;
                    }
                    if (res.data.status == 500) {
                        that.$message.error(res.data.message);
                        return false;
                    }
                    if (res.data.status == 200) {
                        that.$message.success('修改地址成功');
                        that.startaddressdialogFormVisible = false;
                        that.shuaixuanmethod(that.shuaixuanid, that.thispageindex);

                    } else {
                        that.$message.error('修改地址不成功');
                    }
                })
        },
        handleChange() {
            console.log(this.addressvalue);
            let newArr = this.addressvalue;
            let index = newArr.length - 1;
            this.shophuoSmallId = newArr[index];

        },
        reqaddressJson() {
            let data = new FormData();
            let that = this;

            this.$http({
                    method: "get",
                    url: 'http://sanyetongsj.oss-cn-shanghai.aliyuncs.com/region.json',
                    data: data,
                    headers: { "Content-Type": "multipart/form-data" }
                })
                .then(function(res) {
                    console.log(res);

                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        getData(parme,status){
            let that = this;
            let data = new FormData();       
            data.append('page', parme);  
            data.append('limit',20);
        
            if(this.value1 != ''){
                 data.append('saccount',this.value1);//账号手机号
            }

            this.$http({
                method: "post",
                url:api.logList,
                data: data
            })
            .then(function(res){
                console.log(res);
                if(res.data.status ==200){
                    let data =   res.data.list;
                   
                    that.tableData = data;
                    that.totalCount = res.data.totalCount;
                    that.loading = false
                    if (status == 9) {
                        that.$message.success({
                            showClose: true,
                            message: '筛选成功',
                            type:'success',
                            duration:600
                         });
                    }     
                }else{
                    that.$message.error(res.data.message);
                }
            }).catch(function(error){
                console.error(error);
            }); 

        },
        syebol(){
            let that = this;
            this.$http({
                method: "post",
                url:api.sysbelNum
            }).then(function(res){
                    let list =  res.data.data;
                    // that.syebolArr = res.data.data;
                     let keys = Object.values(list);
                    that.optionsMoudle = keys

            })
        },
        shuaixuan(){
            this.getData(1,9)
        },
        clearData(){
            this.value1 = '';
            this.value2 = '';
            this.value3 = '';
            this.value4 = '';
        },
        handleCurrentChange(val){
            this.getData(val)
        },
        
       
    },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>

<style scoped>
.sa_normal{
    display: inline-flex;
}
.sa_edit{
    float: right;
}

.sa_normal1 {
  background: #FEF0F0 !important;
  border-color: #FF7A7D !important;
  border: solid #FF7A7D 0.5px;
  border-radius: 4px;
  color: red;
  padding: 5px 15px 5px 15px;
}
.sa_opreate{
    margin-top: 20px;
}

.el-table >>> tbody tr:hover>td { background-color: #fff;  color: #000; }
.sa_TableView >>> .el-table__row>td{
    border: none;
}
.sa_TableView >>> th.is-leaf {
    border: none;
}
.el-table::before {
    height: 0px;
}
.sa_TableView .el-table::before{
    height: 0px;
}
.sa_cell{
    padding: 8px 10px 8px 10px;
    border: #E7ECF0 1px solid;
    border-radius: 4px;
    width: 500px;
}

.mh-mhset-logs_select .el-input__icon{
    line-height: 28px;
}
.mh-mhset_logs_header-body{
    padding: 0 !important;
    box-sizing: border-box;
}
.mh-mhset_logs_header{
   width:100%;
   border-bottom: 1px solid #ebeef5;
   padding: 18px 20px;
  
   margin-bottom: 20px;
       box-sizing: border-box;
   
}
.mh-mhset_logs_header>h5{
    color: #303133;
    font-weight: normal;
}
.mh-mhsegt-logs_pages{
    width: 100%;
    display: flex;
    justify-items: center;
    justify-content: flex-end;
    margin: 15px 0 0;
}
.goods_list_dibu-seven{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}
.mh-seven-div{
    display: flex;
    /* flex-direction: column; */

    align-items: center;
}
.mh-seven-div-span{
    display: flex;
    align-items: center;
    width: 100%;
    overflow:hidden; /*超出的部分隐藏起来。*/ 
    white-space:nowrap;/*不显示的地方用省略号...代替*/
    text-overflow:ellipsis;/* 支持 IE */
}
.mh-seven-div-parent{
    width: 150px;
}

.mh-seven-div-span>span:nth-child(2){
    width: 80%;
      overflow:hidden; /*超出的部分隐藏起来。*/ 
    white-space:nowrap;/*不显示的地方用省略号...代替*/
    text-overflow:ellipsis;/* 支持 IE */
}
.mh-market-timeleght .el-date-editor .el-range__icon{
    line-height: 26px !important
}
.mh-market-timeleght .el-date-editor .el-range-separator{
    line-height: 26px !important
}

</style>




            
           