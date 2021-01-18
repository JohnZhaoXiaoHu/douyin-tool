
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
                <div class="goods-card_body">
                    <div style="margin-bottom:10px;padding-bottom: 12px;border-bottom: 1px dashed #eee;">
                         <el-breadcrumb separator-class="el-icon-arrow-right">
                            <el-breadcrumb-item :to="{ path: '/goodslist/goodsissue' }">发布商品</el-breadcrumb-item>
                            <el-breadcrumb-item>商品详情</el-breadcrumb-item>
                        </el-breadcrumb>
                    </div>
                    <div style="margin-bottom:10px" >
                   
                        <el-button type="primary" size="mini" @click="uploadAdd"  plain >从图片库上传</el-button>
                        <el-button type="primary" size="mini" @click="clearedit" plain>清空编辑器</el-button>
                    </div>
                    <div id="editorElem" style="text-align:left;position: relative;z-index:2;"></div>
                    <!-- <button v-on:click="getContent">查看内容</button> -->

                   <div style="display:flex;justify-content: center;margin-top: 20px;">
                        <el-button type="primary" size="medium" @click="intoreq" :loading="subitstatus">提交商品详情</el-button>
                   </div>
                 

               
                </div>
                <!-- 商品中心over-->
            </div>
        </div>

     <imgsrc ref="imgsrc"> </imgsrc>
        <!--        -->

    </div>
    <!--主体 over-->
    </div>
</template>
<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import secnavbar from './secnavbar';
import E from 'wangeditor';
import baseapi from '../../utils/api';
import imgsrc from "../resource/imgsrc";
export default {
    //   name: 'editor',
      data() {
        return {
            isshow:true,
            subitstatus:false,
            imgarrT:[],
            editorContent: '',
            skuId:0,
            xianeditor:''
        };
    },
    beforeMount(){
            
    },
    watch:{
         imgarrT(val, oldVal){
             this.isshow = true;
             let str = '';
             val.forEach(function(item,index){
                 str += `<img src ="${item}">`
             })
                this.xianeditor.txt.append(`${str}`);
         },
        //  deep:true //true 深度监听
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

        this.skuId = this.$route.params.id;
        var editor = new E('#editorElem');
        this.xianeditor = editor;
        editor.customConfig.onchange = (html) => {
              console.log(html);
          this.editorContent = html
        }
        // editor.txt.text()
       // editor.customConfig.onchangeTimeout = 1000 ;
        editor.customConfig.uploadFileName = 'files';
        editor.customConfig.uploadImgMaxSize = 10 * 1024 * 1024;
        editor.customConfig.uploadImgServer = baseapi.ip+'/shop/base/wangeditor/img';
            // 配置服务器端地址 upload:上传图片地址
        //可使用监听函数在上传图片的不同阶段做相应处理
        editor.customConfig.uploadImgHooks = {
        before: function (xhr, editor, files) {
            // 图片上传之前触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
            // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
            // return {
            //     prevent: true,
            //     msg: '放弃上传'
            // }
        },
        success: function (xhr, editor, result) {
          
            // 图片上传并返回结果，图片插入成功之后触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        },
        fail: function (xhr, editor, result) {
            // 图片上传并返回结果，但图片插入错误时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
        },
        error: function (xhr, editor) {
            // 图片上传出错时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },
        timeout: function (xhr, editor) {
            // 图片上传超时时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
        },
        // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
        // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
        customInsert: function (insertImg, result, editor) {
            // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
            // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
            // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
            console.log(result);
            console.log(JSON.stringify(result));
             var url = result.data
              insertImg(url)
            // result 必须是一个 JSON 格式字符串！！！否则报错
        }
        };
        editor.create();
        this.qusertEchoData(editor);


    },
    methods:{
       clearedit(){
            this.xianeditor.txt.clear();
            this.$message({
               showClose: true,
               message: '清空编辑器成功',
               type:'success',
               duration:800
          });
       },
       uploadAdd(){ 

          this.$refs.imgsrc.imgdialogFormVisible = true; 
          this.$refs.imgsrc.pid = 11;
       },
       getContent: function () {
            alert(this.editorContent)
        },
       intoreq(){
        this.subitstatus =true;
        let that =this;
        let data = new FormData();
        let submitContent = that.editorContent;
       
        if(that.editorContent == '' || that.editorContent == null || that.editorContent == undefined) {
           let xianContent = that.xianeditor.txt.html();
           data.append('description',xianContent);
        } else {
              data.append('description',submitContent) ;
        }
         data.append('id',parseInt(that.skuId)) ;
         this.http.post( baseapi.editWangDescription,data).then(res=>{
                if(res.data.status  == 505){
                    that.$message.error('服务器异常');
                    return false;
                }
                if(res.data.status == 200){
                    that.subitstatus = false;
                    that.$message.success('保存成功');
                        that.$router.push({
                        path: '/goodslist'
                    })
                }else{
                    that.$message.error('保存失败');
                    that.subitstatus = false;
                }
            })  
        },
        //查询回显数据
        qusertEchoData(editor) {
            let that = this; 
            let data = new FormData();
            data.append('id',that.skuId);    
            this.http.post( baseapi.editgoodsMethod,data).then(res=>{
                let list = res.data.spu;
                console.log(list);
                if(list.description!= null && list.description != '' ){
                    editor.txt.html(`${list.description}`);
                }    

            })  
        }
    },
    components:{
        navbar,sidebar,E,secnavbar,imgsrc
    }
}
</script>
<style>

.w-e-text-container{
    height: 500px !important;/*!important是重点，因为原div是行内样式设置的高度300px*/
}
.wxset-xin{
    display:flex;
    align-items:center;
    justify-content: space-between
}
.wxset-xin-left{
    font-size: 12px
}
.wxset-xin-left dl{
    display: flex;
    margin-bottom: 12px
}
.wxset-xin-left dl dt{
    display: flex;
    align-items: center;
    margin-right: 8px
}
.wxset-xin-left dl dd{
    display: flex;
    align-items: center;
    color: rgba(0,0,0,.65);
}
.wxset-xin-right{
    width: 160px;
    height: 160px
}
.wxset-shouquan{
    margin-left: 15px
}
</style>

