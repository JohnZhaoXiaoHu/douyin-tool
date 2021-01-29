<template>
<!-- 批量发货模块 -->
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <shopnavbar></shopnavbar>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
               <div class="goods-card_body">
                    <!--会员设置-->
                 

                    <div class="edit-item goods-itembatch orderbatch-div">
                        <div class="edit-info">
                            <h3>订单分解衍生</h3>
                            <p>如选择（不分单，单物流）发货请编辑更新的表格，只保留三个分段：订单号，快递公司，快递单号，再上传文件即可。</p>
                            <p class="orderbatch-p">如选择（分单，多物流）发货请编辑导出的表格，保留四个分段：订单号，商品ID，快递公司，快递单号。</p>
                            <h3>附快递公司参照名称</h3>
                            <p>顺丰速运，申通快递，圆通速递，EMS，中通快递，韵达快运，中国邮政平邮，宅急送，天天快递，百世快递，德邦物流，UC优速快递，运通快递，京东快递，其他</p>
                        </div>
                    
                    </div>

                    <div class="orderbartch-sitting">
                        <span class="vip-sit_span">选择订单类型</span>
                        <div class="orderbatch-lei">
                           <el-radio v-model="radio" label="1" @change="danwuliu">普通订单（不分单，单物流）</el-radio>
                           <el-radio v-model="radio" label="2" @change="danwuliu">普通订单（分单，多物流）</el-radio>
                        </div>
                    </div>

                 <div class="orderbartch-sitting">
                    <span class="vip-sit_span">发布文件 : </span>
                    <el-upload
                        class="upload-demo"
                        action="#"
                        ref='upload'
                        :auto-upload="false"
                        :on-preview="handlePreview"
                        :on-change="addvdeio"
                        :on-remove="handleRemove"
                        :before-remove="beforeRemove"
                        accept=".xls,.xlsx" 
                        multiple
                        :limit="3"
                        :on-exceed="handleExceed"
                        :file-list="fileList">
                        <div style="display:flex">
                            <el-button size="mini" type="primary">点击上传</el-button>
                        
                        </div>
                    </el-upload>
                       <div slot="tip" class="el-upload__tip" style="padding-left:8px">仅支持.xls和.xlsx后缀文件</div>
                    </div>
                    
                    <div class="orderbartch-sitting">
                        <a href="http://sanyetongsj.oss-cn-shanghai.aliyuncs.com/%E6%89%B9%E9%87%8F%E5%8F%91%E8%B4%A7%E6%A8%A1%E7%89%88.xls" download="模板下载">
                          <el-button type="text"  class="orderbartch-moban">模板下载</el-button>
                        </a>
                      
                    </div>

                    <button type="button" class="el-button el-button--primary el-button--small" style="margin-left:112px " size="mini" 
                    @click="request_upFile"><span>确定</span></button>
                    <!--会员设置over-->
                </div>
                <!-- 商品中心over-->
            </div>
        </div>


        <!--   over     -->

    </div>
    <!--主体 over-->
    </div>
</template>
<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import shopnavbar from './shopnavbar';
import baseapi from '../../utils/api';
export default {
      data() {
        return {
            fileList: [],
            radio: '1',//订单类型
            options: []
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

    },
    methods: {
      //点击单物流 -- 多物流操作
      danwuliu(){
          if (this.radio ==2) {
            this.$message.warning('选择分单');
            } else {
                this.$message.warning('选择不分单');
            }   
        },
        // 请求发货：baseapi.moenyAddress
        request_upFile(){
            let that = this;
            let params = new FormData();
        		  if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("supplierId", '2');
            }
    
            params.append('type', this.radio);
            for(let a=0;a< this.fileList.length;a++){
                params.append('files',this.fileList[a].raw);
            }        
            this.$http({
                method: "post",
                url: baseapi.orderUploadfile,
                data: params,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
            })
            .then(function(res){
                if(res.data.status == 200){
                    that.$message.success('提交模板文件成功');
                    that.files = [];
                    that.$refs.upload.clearFiles();  
                }else{
                    that.$message.error(res.data.message);
                }
            })
            .catch(function(error){
                console.log(error);         
            }); 
      },
      addvdeio(file,fileList){
          console.log(fileList);
          this.fileList = fileList;
      },
       handleRemove(file, fileList) {
        console.log(file, fileList);
        this.fileList = fileList;
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      }
    },
    components:{
        navbar,sidebar,shopnavbar    
    }
}
</script>
<style lang="">
.vip-sitting .el-input__inner{
    height: 32px;
    line-height: 32px;
}
.vip-sitting  .el-input__suffix .el-input__icon{
    line-height: 32px;
}
.vip-sit_span{
    color: #606266;
    padding: 0 12px 0 0;
    display: inline-block;
    width: 100px;
    font-size: 12px;
    text-align: right;
}

.orderbatch-div{
    width: 100%!important
}
.orderbatch-div .edit-info{
    width: 100%!important;
    color:#303133
}
.orderbatch-p{
    margin-bottom: 15px
}
.orderbartch-sitting{
    display: flex;
    align-items: center;
    margin-bottom: 16px
    
}
.orderbartch-sitting .el-radio__label{
    font-size: 12px
}
.orderbatch-span{
    color: #606266;
    font-size: 12px
}
.orderbartch-moban{
    color: #409eff;
    font-size: 12px;
    padding-left: 112px !important 
}
.goods-itembatch{
    display: flex;
    font-size: 12px!important;
    padding: 15px;
    background-color: #f4f4f4;
    border-radius: 8px;
    line-height: 5px;    
    box-sizing: border-box;  
    height: 172px;       
    margin-bottom: 18px;
}
</style>