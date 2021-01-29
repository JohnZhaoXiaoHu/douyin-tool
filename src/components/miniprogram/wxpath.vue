<template>
<!-- 小程序设置 -->
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <wxnavbar></wxnavbar>

            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div class="goods-card_body">
                    <!--选项卡组件-->

                <div class="wxpath-line">
                     <el-breadcrumb separator-class="el-icon-arrow-right">
                        <el-breadcrumb-item :to="{ path: '/' }">小程序设置</el-breadcrumb-item>
                        <el-breadcrumb-item>小程序路径</el-breadcrumb-item>            
                    </el-breadcrumb>
                </div>

                <div style="width: 100%">
                     <el-table
                        :data="pathData"
                        border
                        style="width: 100%">
                        <el-table-column
                        prop="pagepath"
                     
                        label="路径"
                        >
                        </el-table-column>
                        <el-table-column
                        prop="pagename"
                        label="描述"
                        width="180"
                        >
                        </el-table-column>
                   
                        <el-table-column
                        prop="operation"
                        width="200"
                        label="操作">
                        <template slot-scope="scope">
                            <div class="scope-div">
                                <button v-clipboard:copy="scope.row.pagepath" v-clipboard:success="onCopy" type="button"  class="el-button el-button--default el-button--mini"><span>复制</span></button>
                                <button @click="getQrCode(scope.row.pagepath)" type="button"  class="el-button el-button--default el-button--mini"><span>太阳码</span></button>
                            </div>
                        </template>
                        </el-table-column>
                    </el-table>   
                    <!-- <div class="mhset_permissinon_page">
                        <el-pagination
                                @size-change="handleSizeChange"
                                @current-change="handleCurrentChange"
                                :current-page="currentPage4"
                                :page-sizes="[100, 200, 300, 400]"
                                :page-size="20"
                                layout="total, prev, pager, next, jumper"
                                :total="roleCount">
                        </el-pagination>
                    </div>    -->
                </div>    
                
                    
                    <!--选项卡组件 over-->
                </div>
                <!-- 商品中心over-->
            </div>
        </div>


        <!--推广链接-->
              <el-dialog title="小程序太阳码" :visible.sync="dialogFormVisible1" width="33%">
                    <div>
                           <div class="shop_dialog">
                                <span class="shop_dialog_tit">二维码</span>
                            </div>
                            <div class="wxpath_dialog_erweima">
                                <div>
                                    <img width="120" height="120"  :src="sharercode">
                                      <a class="wxpath_dialog_erweima_a" id="down_qrcode" download="商品推广"  :href="downimg">下载二维码</a>
                                </div>
                            </div>
                            <div class="el-dialog__footer">
                                <button @click="dialogFormVisible1 = false"  type="button" class="el-button el-button--default"><span>确 认</span></button>
                            </div>
                    </div>
                </el-dialog>


        <!-- 推广链接over  -->

    </div>
    <!--主体 over-->
    </div>
</template>
<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import wxnavbar from './wxnavbar';
import IP from '../../utils/api'
export default {
      data() {
        return {
            pathData:[{'path':'indexPage/home/HomePage','describe':'首页'}],
            dialogFormVisible1:false,
            sharercode:'blob:http://pc.wkdao.com/57194ca8-118d-4848-9c96-af7ad48103d2',
            downimg:''
        };
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
        this.selectPath();
    
        
    },
    methods:{
        // handleCurrentChange(val){
        //     this.selectPath(val)
        // },
        onCopy (e) {
            this.$message.success("小程序路径已复制到剪切板！")
        },
        selectPath(){
            //地址
            let that = this;
            let data = new FormData(); 
             //  https://api.mihuanshop.com
                this.http.post(window.g.fsassUrl + '/user/miniProgramPageUrl/admin/list',data).then(res=>{
                    console.log(res.data.list);
                    that.pathData = res.data.list;
                })   
        },
      

        //请求二维码接口
        getQrCode(urlPath){
            let that = this; 
            let data = new FormData();      
            let path = encodeURIComponent(urlPath);    
            console.log(path);
            this.$http({
                method: "get",
                url:IP.PIP + '/miniprogram/wx/mini/qrcode/page/get.do?path=' + path + '&openId='+that.$cookie.get('openId'),
                headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                if(res.data.status == 200){
                    that.sharercode =  res.data.data;
                    that.dialogFormVisible1 = true;
                }else if(res.data.status == 500){
                    that.$message.warning(res.data.message);
                    return false;   
                }else{
                    that.$message.warning(res.data.message);
                }   
            }); 
        }
    },
    components:{
        navbar,sidebar,wxnavbar    
    }
}
</script>
<style>

.scope-div{
    display: flex;
    justify-content: center;
    width: 100%;
}
.wxpath-line{
    width: 100%;
    /* height: 50px; */
    display: flex;
    align-items: center;
    border-bottom: 1px solid #ebeef5 ;
    padding-bottom: 20px;
    margin-bottom: 20px;

}

.wxpath_dialog_erweima{
    box-sizing: border-box;
     padding-right: 150px; 
     margin-bottom: 40px;
}
.wxpath_dialog_erweima>div{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.wxpath_dialog_erweima_a{
    cursor: pointer;
    font-size: 14px;
    color: #409eff;
}
.wxpath_dialog_erweima_a:hover{
    text-decoration:underline
}
</style>

