
<template>
<!-- 提现设置 模板 -->
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
                    <!--选项卡组件-->
                    <el-tabs v-model="activeName" @tab-click="handleClick">
                        <el-tab-pane label="管理员" name="first">
                             <el-button @click="intoadmin" size="small" type="primary">添加管理员</el-button>    
                                <template>
                                    <el-table
                                        :data="admindata"
                                        stripe
                                        style="width: 100%">
                                         <el-table-column
                                        prop="id"
                                        label="管理员ID"
                                       >
                                        </el-table-column>
                                        <el-table-column
                                        prop="adminAlias"
                                        label="管理员名称"
                                        >
                                        </el-table-column>
                                        <el-table-column
                                        prop="adminAccount"
                                        label="管理员账号"
                                       
                                       >
                                        </el-table-column>
                                         <el-table-column
                                        prop="role"
                                        label="拥有角色"
                                       
                                       >
                                        </el-table-column>
                                        <el-table-column
                                        prop="updateTime"
                                        label="更新时间"
                                        :formatter="dateFormat"
                                       >
                                        </el-table-column>
                                        <el-table-column
                                        prop="createTime"
                                        label="创建时间"
                                        :formatter="dateFormat"
                                       >
                                        </el-table-column>
                                        
                                        <el-table-column
                                        prop="headportrait"
                                        label="操作">
                                        <template slot-scope="scope">
                                            <div>
                                                <button @click="editAdmin(scope.row.adminAlias,scope.row.adminPhone,scope.row.adminAccount,scope.row.role,scope.row.id)" type="button"  class="el-button el-button--default el-button--mini"><span>编辑</span></button>

                                                <el-button  @click="delectAdmin(scope.row.id)" size="mini"  type="danger">删除</el-button>
                                            </div>
                                        </template>
                                        </el-table-column>
                              
                    
                                    </el-table>
                                    </template>
                                    <div class="mhset_permissinon_page">
                                    <!-- small sizes-->
                                        <el-pagination
                                                @size-change="handleSizeChange"
                                                @current-change="handleCurrentChange"
                                                :current-page="currentPage4"
                                                :page-sizes="[100, 200, 300, 400]"
                                                :page-size="20"
                                                layout="total, prev, pager, next, jumper"
                                                :total="roleCount">
                                        </el-pagination>
                                    </div>
                        </el-tab-pane>
                
                        <el-tab-pane label="权限角色" name="two">
                            <el-button @click="intoSon" size="small" type="primary">添加角色</el-button>    
                            <template>
                                <el-table
                                    :data="roledata"
                                    stripe
                                    style="width: 100%">
                                        <el-table-column
                                    prop="roleId"
                                    label="角色ID"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                    prop="roleName"
                                    label="角色名称"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                    prop="updateTime"
                                    label="更新时间"
                                    :formatter="dateFormat"
                                    >
                                    </el-table-column>
                                    <el-table-column
                                    prop="createTime"
                                    label="创建时间"
                                    :formatter="dateFormat"
                                    >
                                    </el-table-column>
                                    
                                    <el-table-column
                                    prop="headportrait"
                                    label="操作">
                                    <template slot-scope="scope">
                                        <div>
                                            <button @click="intoSonedit(scope.row.roleId,scope.row.roleName)" type="button"  class="el-button el-button--default el-button--mini"><span>编辑</span></button>
                                            <el-button  @click="delectRole(scope.row.roleId)" size="mini"  type="danger">删除</el-button>
                                        </div>
                                    </template>
                                    </el-table-column>
                                </el-table>
                            </template>
                            <!-- <div class="mhset_permissinon_page">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCount">
                                </el-pagination>
                            </div> -->
                        </el-tab-pane>
                    </el-tabs>



                    <el-dialog :title="editStatus=='add'?'添加管理员':'编辑管理员'" :visible.sync="adddialogFormVisible " width="40%">
                            <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                                <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">管理员昵称:</span>
                                <div class="block" >
                                    <el-input placeholder="管理员昵称" v-model="admin.adminAlias" type="text"></el-input>
                                </div>
                            </div>
                            <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                                <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">管理员手机号:</span>
                                <div class="block" >
                                    <el-input placeholder="管理员手机号" v-model="admin.adminPhone"  :disabled="editStatus!='add'" type="text"></el-input>
                                </div>
                            </div>

                            <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                                <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">登录账号:</span>
                                <div class="block" >
                                    <el-input placeholder="请填写登录账号" v-model="admin.adminAccount" :disabled="editStatus!='add'" type="text"></el-input>
                                </div>
                            </div>

                            <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                                <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">密码:</span>
                                <div class="block" >
                                    <el-input placeholder="请填写登录密码" v-model="admin.adminPassword" type="text"></el-input>
                                </div>
                            </div>

                            <div class="mh-resoure-grounp" style="display:flex;">
                                <span class="mh-resoure-grounp_onespan" style="width:110px;display:flex;justify-content: center;align-items: center;">选择角色:</span>
                                <div class="block mh-juese-select" >
                                    <el-select v-model="admin.roleId" placeholder="选择角色">
                                        <el-option
                                            v-for="item in roledata"
                                            :key="item.roleId"
                                            :label="item.roleName"
                                            :value="item.roleId">
                                        </el-option>
                                    </el-select>
                                </div> 
                            </div>
                   

                        

                        <span slot="footer" class="dialog-footer">
                            <el-button @click="adddialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="addAdmin" v-if="editStatus=='add'">确 定</el-button>
                            <el-button type="primary" @click="editAdminmMethod" v-if="editStatus=='edit'">确 定</el-button>
                        </span>
                     </el-dialog>   

                 

                    
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
import API from '../../utils/api';;
export default {
    data() {
        return {
            loading:true,
            roleCount:0,

            activeName: 'first',
            admindata:[],
            roledata:[],//角色

            adddialogFormVisible:false,
            admin:{
                adminAlias:'',//姓名
                adminAccount:'',//账号
                adminPhone:'',//手机号
                roleId:'',//角色ID
                adminPassword:'',//密码
            },
            editStatus:'add',
            editStatusId:'',//编辑id
          
        };
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                if (vm.$route.params.id == 2) {
                    vm.activeName = 'two';
                }
                vm.getAadmindata();
                vm.getData();
            } else {
                next('/login');
            }
        })
    },
    mounted(){
       
       
    },
    methods:{
        handleCurrentChange(val){
            this.getAadmindata(val)
        },
        intoadmin(){
        //置空
            this.admin.adminAlias = '';    
            this.admin.adminAccount = '';
            this.admin.adminPassword = '';
            this.admin.roleId = '';
            this.admin.adminPhone = '';
            this.adddialogFormVisible = true;
            this.editStatus ='add';
        },
        getData(){
            let that  = this; 
            let data = new FormData();          
            this.$http({
                method: "get",
                url:API.PIP+'/miniprogram/saas/user/role/get.do?&openId='+that.$cookie.get('openId'),
                data: data,
                headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 301){
                    that.$router.push({
                        path: '/'
                    });
                    that.$message.warning('检测到登录过期,请重新登录');
                    return false;
                }
                if(res.data.status == 200){
                    let list = res.data.data;
                    that.roledata = list;
                    that.loading = false;
                }
                if(res.data.status != 200 && res.data.status != 301){
                    that.$message.error(res.data.message);
                }
                   
            }).catch(function(res){
              console.log(res);
            }) ; 
        },
        getAadmindata(page=1){
            let that  = this; 
            let params = {'page':page,'size':20};    
            this.$http({
                method: "get",
                url:API.PIP+'/miniprogram/saas/user/admin/get.do?openId='+that.$cookie.get('openId')+'&path=page/component/index',
                params: params,
                headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                console.log(res);
                
                if(res.data.status == 200){
                    let list = res.data.data.list;
                    that.admindata = list;
                     that.roleCount =  res.data.data.total;
                }        
            }).catch(function(res){
              console.log(res);
            }) ; 
        },
        //删除管理员
        delectAdmin(id){
            let that = this;
            let data = {
                'id':id
            }
            this.$confirm('确认删除该管理员?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                this.$http({
                    method: "POST",
                    url:API.PIP+'/miniprogram/saas/user/admin/del.do?&openId='+that.$cookie.get('openId')+'&path=page/component/index',
                    data: JSON.stringify(data),
                    headers:{'Content-Type':'application/json', Authorization:`Bearer ${that.$cookie.get('token')}`}
                })
                .then(function(res){
                    console.log(res);
                    if(res.data.status == 200){
                        that.$message.success(res.data.message);
                        that.getAadmindata();
                    }else{
                        that.$message.error('状态:'+res.data.status + ' ,错误信息'+res.data.message);
                    }     
                })
            })
        },
         delectRole(roleId){
            let that = this;
      
            let param = new URLSearchParams()
            param.append('roleId',roleId);
            this.$confirm('确认删除该角色?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                this.$http({
                    method: "POST",
                    url:API.PIP+'/miniprogram/saas/user/role/del.do?&openId='+that.$cookie.get('openId')+'&path=page/component/index',
                    data: param,
                    headers:{'Content-Type':'application/x-www-form-urlencoded', Authorization:`Bearer ${that.$cookie.get('token')}`}
                })
                .then(function(res){
                    console.log(res);
                    if(res.data.status == 200){
                        that.$message.success(res.data.message);
                        that.getData();
                    }else{
                        that.$message.error('状态:'+res.data.status + ' ,错误信息'+res.data.message);
                    }     
                })
            })
        },
        //添加管理员
        addAdmin(){
            let that  = this; 
            // let data = new URLSearchParams();       
            // data.append('adminAlias',this.admin.adminAlias);
            // data.append('adminAccount',this.admin.adminAccount);    
          
            // data.append('adminPassword',this.admin.adminPassword);
            // data.append('roleId',this.admin.roleId);

            // data.append('adminPhone',this.admin.adminAccount);

            let data = {
                    'adminAlias':this.admin.adminAlias,
                    'adminAccount':this.admin.adminAccount,
                    'adminPassword':this.admin.adminPassword,
                    'roleId':this.admin.roleId,
                    'adminPhone':this.admin.adminPhone
            }

            this.$http({
                method: "POST",
                url:API.PIP+'/miniprogram/saas/user/admin/add.do?&openId='+that.$cookie.get('openId')+'&path=page/component/index',
                data: JSON.stringify(data),
                headers:{'Content-Type':'application/json', Authorization:`Bearer ${that.$cookie.get('token')}`}
                // headers: { "Content-Type": "application/x-www-form-urlencoded",}
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 200){
                    that.adddialogFormVisible = false;
                    that.getAadmindata();
                    that.$message.success(res.data.message);

                    //置空
                    that.admin.adminAlias = '';    
                    that.admin.adminAccount = '';
                    that.admin.adminPassword = '';
                    that.admin.roleId = '';
                    that.admin.adminPhone = '';
                
                }else{
                    that.$message.error('状态:'+res.data.status + ' ,错误信息'+res.data.message);
                }
           
                 
            }).catch(function(res){
              console.log(res);
            }) ; 
        },
        editAdmin(a,b,c,d,id){
            //回显赋值
            this.admin.adminAlias = a;    
            this.admin.adminAccount = c;
            this.admin.adminPhone = b;
            this.admin.roleId = d;
            this.adddialogFormVisible = true;

            // editAdmin
            this.editStatusId = id;
            this.editStatus ='edit';

        },
        myIsNaN(value) {
            return typeof value === 'number' && !isNaN(value);
        },
        editAdminmMethod(){
            let that  = this; 
            //根据中文去ID
            if(!this.myIsNaN(this.admin.roleId)){
                this.roledata.forEach(function(item){
                        if (item.roleName == that.admin.roleId) {
                            that.admin.roleId = item.roleId
                        }
                    })
                }
            
            let data = {
                'adminAlias':this.admin.adminAlias,
                'adminAccount':this.admin.adminAccount,
                'adminPassword':this.admin.adminPassword,
                'roleId':this.admin.roleId,

              

                // 'adminPhone':this.admin.adminPhone,//不支持修改电话
                'id':this.editStatusId
            }
            this.$http({
                method: "POST",
                url:API.PIP+'/miniprogram/saas/user/admin/put.do?&openId='+that.$cookie.get('openId')+'&path=page/component/index',
                data: JSON.stringify(data),
                headers:{'Content-Type':'application/json', Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 200){
                    that.adddialogFormVisible = false;
                    that.$message.success(res.data.message);
                    that.getAadmindata();
                  
                }else{
                    that.$message.error('状态:'+res.data.status + ' ,错误信息'+res.data.message);
                }
           
                 
            }).catch(function(res){
              console.log(res);
            }) ; 
        },
        intoSon(){

            this.$router.push({ path:'/mhset/payment/roleadd'})
        },
        intoSonedit(id,rolename){
            this.$router.push({ path:`/mhset/role/roleedit/${id}`});
            sessionStorage.setItem('rolename', rolename);
        },
        dateFormat(row, column, cellValue, index){
              const daterc = row[column.property]*1000;
                if(daterc!=null){
                 const dateMat= new Date(daterc);
                //const dateMat= new Date(parseInt(daterc.replace("/Date(", "").replace(")/", ""), 10));
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
        handleClick(val){
            if (val.index == 0) {
                this.$router.push({ path: '/mhset/permission/1'})//跳转传参数
            }
        }
    },
    components:{
        navbar,sidebar,settingnav    
    }
}
</script>
<style>
    .mhset_permissinon_page{
        width: 100%;
        display: flex;
        justify-content: flex-end;
        margin: 10px 0;
    }
    .mh-juese-select .el-input__icon{
        line-height: 32px;
    }
</style>