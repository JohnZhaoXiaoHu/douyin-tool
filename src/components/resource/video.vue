<template>  
     <div>
        <div class="imgtanzhujian">
            <el-dialog title="上传视频"
                :visible.sync="imgdialogFormVisible"
                :show-close="true"
                @close="closeDialog"
                >
                <button  @click="vdeiodialogFormVisible =true" type="button" class="el-button el-button--primary el-button--small" style="margin-bottom: 20px;"><span>上传视频</span></button>
                            <div class="res-imgmain">

                            <div class="res-imgleft">
                                <div class="res-imgleftdiv">
                                <button type="button" class="el-button el-button--default el-button--small" @click="addResGrounp"><span><i class="el-icon-plus"></i>添加分组</span></button>
                                </div>
                                <el-tree :data="data" :props="defaultProps" @node-click="videoNodeClick"></el-tree>
                            </div>

                            <div class="res-img-right">
 
                                <div @click.stop="biaozhi(index,item.path)" id="res-img-right-div" :class="{imgactive:index==isShow}" v-show ="videoarr.length != 0"  v-for="(item,index) of videoarr" :key="index">                   
                                    <img  @click="tanvideoshow(item.path)" :src="item.smallpath" alt="" title="点击观看" class="res-img-right-divimg">
                                    <div class="res-img-right-span">{{item.name}}</div>
                                    <div class="res-img-right-grounp"> 
                                    <button type="button" class="el-button el-button--text"><span @click.stop="myvdeioedit(item.id,item.name,item.groupId)">改名</span></button>
                                    <button type="button" class="el-button el-button--text"><span @click.stop="vdeioeditlianjie(item.path)">链接</span></button>
                                    <!-- <button type="button" class="el-button el-button--text"><span>分组</span></button> -->
                                    <button type="button" class="el-button el-button--text"><span @click.stop="vdeiodelResA(item.id,item.groupId)">删除</span></button>

                                    </div>
                                </div>
                            <div v-if="videoarr.length == 0" style="color:#909399;display:Flex;align-items: center;font-size:12px;margin-top:100px;margin-left:100px">
                                <!-- <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/logging.png" alt="" width="150" height="152"> -->
                                该分类下无视频
                            </div>                    
                            </div>
                        </div>

                     <span slot="footer" class="dialog-footer">
                        <el-button @click="imgdialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="sonquedingMethod">确 定</el-button>
                     </span>


                        <!--  -->
            </el-dialog>  
        </div>  
                  <!-- 上传视频 -->
              <el-dialog title="上传视频" :visible.sync="vdeiodialogFormVisible">
                    <div class="mh-resoure-grounp">
                          <span class="mh-resoure-grounp_onespan" style="text-align: center;">视频分组:</span>
                          <div class="block" style="flex:1">
                            <el-cascader
                              :change-on-select="true"
                                v-model="vdeiovalue"
                                :options="tupiangrounp"
                                :props="{ expandTrigger: 'hover',children:'childlist',value:'id',label:'name' }"
                                @change="handleChange">
                            </el-cascader>
                          </div>

                    </div>
                    <!-- <div class="mh-resoure-grounp">
                          <span class="mh-resoure-grounp_onespan">视频封面:</span>
                          <div class="block">

                            <span style="color: #409eff;">上传视频</span>
                          </div>                       
                    </div> -->

                    <div class="mh-resoure-grounp">
                          <span class="mh-resoure-grounp_onespan" style="text-align: center;">视频名称:</span>
                          <div class="block" style="flex:1">
                            <el-input v-model="netimgUrl" placeholder="添加视频名称"></el-input>                     
                          </div>                       
                    </div>

                    <div class="mh-resoure-grounp">
                        <span class="mh-resoure-grounp_onespan" style="text-align: center;">本地视频:</span>
                        <div style="flex:1">
                              <el-upload
                                class="upload-demo"
                                action="#"
                                :on-change="addvdeio"
                                :auto-upload="false"
                                ref='vdeioupload'  
                                :on-preview="handlePreview"
                                :on-remove="handleRemove"
                                :before-remove="beforeRemove"
                                multiple
                                :limit="1"
                                :on-exceed="handleExceed"
                                :file-list="fileList">
                                <el-button size="mini" type="primary" >点击上传</el-button>
                                <div slot="tip" class="el-upload__tip">视频大小不超过50M，支持mp4，mov，m4v，flv,x-flv，mkv，wmv，avi，rmvb，3gp格式</div>
                              </el-upload>
                        </div>
                    </div>
                    <span slot="footer" class="dialog-footer">
                          <el-button @click="setvideoMethodquxiao">取 消</el-button>
                          <el-button type="primary" @click="setvideoMethod(file)" :loading="videotrue">{{videovalue}}</el-button>
                      </span>
                  </el-dialog>


                  <el-dialog title="修改视频名称" :visible.sync="vdieoeditimgnamedata">
                      <div class="mh-resoure-grounp">
                          <span class="mh-resoure-grounp_onespan">视频名称:</span>
                          <div class="block" >
                            <el-input v-model="editimgnamedataname" placeholder="视频名称"></el-input>                        
                          </div>
                    </div>
                    <span slot="footer" class="dialog-footer"> 
                          <el-button @click="vdieoeditimgnamedata = false">取 消</el-button>
                          <el-button type="primary" @click="vdeioeditimgnamethod">确 定</el-button>
                      </span>

              </el-dialog>

                <el-dialog title="复制链接" :visible.sync="vdieolianjie">
                    <div class="mh-resoure-grounp">
                        <span class="mh-resoure-grounp_onespan">视频链接:</span>
                        <div class="block" style="margin-right:10px" >
                         <el-input
                          :placeholder="lianjievalue"
                          v-model="lianjievalue"
                          :disabled="true">
                         
                        </el-input>             
                        </div>

                        <button type="button" class="el-button el-button--primary el-button--small" v-clipboard:copy="lianjievalue"  v-clipboard:success="onCopy"><span>复制</span></button>
                  </div>
                   <span slot="footer" class="dialog-footer">
                        <el-button @click="vdieolianjie = false">确定</el-button>
                    </span>

                </el-dialog>

                    <!-- 视频弹窗事件 -->
                <div class="mh-vdeio">
                    <el-dialog
                      :visible.sync="tandialogVisible"
                      width="800px"
                      height="480" 
                    >
                      <video id="video" controls width="800" height="480" ref="videomy">
                        <source :src="vdeioPath" type="video/mp4">
                      </video>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="tandialogVisible = false">取 消</el-button>
                      </span>
                    </el-dialog>
                </div>

                <!-- 添加分组弹框 -->
                <el-dialog title="添加分组名称" :visible.sync="settingnametan" width="33%">
                    <div class="mh-resoure-grounp">
                        <span class="mh-resoure-grounp_onespan">分组名称:</span>
                        <div class="block" >
                          <el-input v-model="settingnamevalue" placeholder="设置分组名称"></el-input>                        
                        </div>
                  </div>
                   <span slot="footer" class="dialog-footer">
                        <el-button @click="settingnametan = false">取 消</el-button>
                        <el-button type="primary" @click="settingnameMthod">确 定</el-button>
                    </span>
                </el-dialog>
        
    </div>
</template>
<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import baseapi from '../../utils/api';
import {
        zm_jsonToString,
        zm_formDataToString
} from "../../filters/zm_tools.js"
let id = 1000;

import axios from "axios";
export default {
    data() {
        return {
          cancel: null,//取消上传
          yinpath:'',
          settingnamevalue:'',
          settingnametan:false,
          isShow: -1,
          vdeiodialogFormVisible:false,
          fileList: [],
          vdieo:{},
          vdeiovalue:'',
          videoarr:[],
          videotrue:false,
          videovalue:'确认',
          vdieoeditimgnamedata:false,
          vdieolianjie:false,
          vdeioPath:'',
          posterimg:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/jinze/pause_publish.jpg',
          editimgnamedataname:'',//图片name

          imgkuanstyle:'height:172px',
          url:[],
          dialogVisible: false,
          imgdialogFormVisible:false,
          lianjie:false,

          lianjievalue:'',
          neme:"",
          
          dialogImageUrl: '',
          dialogVisible: false,
          disabled: false,
      
          //上传图片
          dialogFormVisible:false,
          editname:false,
          editimgnamedata:false,
          editimgnamedatavalue:'',
          activeName: 'first',
          data: [{
              
          }],
          defaultProps: {
              children: 'childlist',
              label: 'name'
          },
          value: [],
          tupiangrounp:[],
          options: [],
          //我的资源
          imgarr:[{
              id:1,
              name:'测试',
              smallpath:"http://img.wkdao.com/image/47/2020/01/20/5ddb1c2c2404b1b54fcb5cf7ff216f0e.jpg",
              redirect:'www.baidu.com'
          }
          ],
          //图片分组
          upfile:[],
          imgvalue:"",
          netimgUrl:'',

          chongid:'',
          editnamevalue:"",
          editimg1id:'',
          pidnewChild:[],
          tandialogVisible:false,
          sonpath:'' // 发布商品视频地址
      };
        
    },
    props: {

    },
    components:{
        navbar,sidebar  
    },
     watch: {
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
    mounted() {
        // this.selectResGrounp();
        this.imgdialogFormVisible  = this.$parent.showsonvdeio;
    },
    methods: {  
     tanvideoshow(path){
        this.tandialogVisible = true;
        this.$nextTick(() => {
            this.$refs.videomy.src = path;
        })      
    } , 
    addResGrounp(param){
      this.settingnametan = true;    
    },  
    settingnameMthod(){
    let data = new FormData();
        data.append('type',2);
        data.append('names',JSON.stringify([this.settingnamevalue]));
        this.http.post(baseapi.addgoodsGunp,data).then(res=>{
            this.$message.success('添加分组成功');
            this.settingnametan = false;
            this.settingnamevalue = '';
            this.selectResGrounp();
     
        })  
    },
      
    sonquedingMethod(){
      this.imgdialogFormVisible = false;
    },

    biaozhi(index,path){
        console.log(1);
          this.isShow = index;
          this.sonpath = path;
          this.$parent.sonpath = path;
    },

    handleChange(val) {
        this.imgvalue = val;
    },    


    onCopy (e) {
        this.$message.success("链接已复制到剪切板！");
        this.lianjie = false;
    },

     //确定的事件
      mhresimgok(){
          this.imgdialogFormVisible = false;
      },

      closeDialog () {
        this.url = [];
        // this.$emit('close-dialogStatus',true,this.url)
    },
     getChild (url) {
      this.$emit('close-dialogStatus',true,this.url)
    },

      addvdeio(file){
          const isLt2M = file.size / 1024 / 1024 < 50;
          if(isLt2M){
              this.vdieo = file;
          }else{
              this.$message.error('该资源超过限制50M');
          }
      },
      //上传图片
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 1个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
    

      //添加视频资源
      setvideoMethod(){
        let that = this;
        let data = new FormData();
        if  (this.vdeiovalue != '') {
            this.videotrue = true;
            this.videovalue = '上传中';
        }
        let vdeiocateid = 0;
        if  (this.vdeiovalue.length == 1) {
            data.append('groupId',this.vdeiovalue[0]);
            vdeiocateid=this.vdeiovalue[0];
        }
        if  (this.vdeiovalue.length >1) {
            data.append('groupId',this.vdeiovalue[this.vdeiovalue.length-1]);
            vdeiocateid=this.vdeiovalue[this.vdeiovalue.length-1];
        }
          data.append('type',2);
          data.append('files',this.vdieo.raw);
          data.append('name',this.netimgUrl); //视频名称可不传
          let CancelToken = axios.CancelToken
          this.$http({
                method: "post",
                url:baseapi.addImgRes,
                data: data,
                cancelToken:new CancelToken(function executor(c) {
              // executor 函数接收一个 cancel 函数作为参数
                    that.cancel = c;
                 })
            })
            .then(function(res){
                if(res.data.status == 200){
                    that.$message.success("添加视频成功");
                    that.videotrue = false;
                    that.videovalue = '确认';
                    that.selectvideoList(vdeiocateid);
                    that.vdeiodialogFormVisible = false;
                    that.$refs.vdeioupload.clearFiles();    
                    that.vdeiovalue = ''; 

                }else{
                    that.$message.error(res.data.message);
                    that.videotrue = false;
                    that.videovalue = '提交';
                } 
            }).catch(function(res){
                console.log(res);
                that.videotrue = false;
                that.videovalue = '提交';
            }) ; 
      },
      //取消视频上传 
      setvideoMethodquxiao(){
            this.cancel();
            console.log('取消视频');
            this.videotrue = false;
            this.videovalue = '确认';
    
            this.vdeiodialogFormVisible = false;
            this.$refs.vdeioupload.clearFiles();    
            this.vdeiovalue = '';    
            this.netimgUrl = '';  
      },



      myvdeioedit(id,name,cateid){
          this.vdieoeditimgnamedata = true;
          this.editimgnamedataid = id;
          this.editvdeioid = cateid;
          if(name != '' && name != undefined){
            this.editimgnamedataname = name;
          }  
      },
     //修改视频名字
      vdeioeditimgnamethod(){
          let that = this;
          let data = new FormData();
          data.append('id', this.editimgnamedataid);
          data.append('name',this.editimgnamedataname);
          this.http.post( baseapi.myresedit,data).then(res=>{
              if(res.status ==500){
                that.$message.success('资源名称不能为空');
                return false;
              }
              if(res.status == 200){
                that.$message.success('修改资源名称成功');
                that.selectvideoList(that.editvdeioid,that.resid);
                that.vdieoeditimgnamedata = false;
              }
          })  
     },
      vdeiodelResA(param,groupId){
          this.$confirm('确定删除该视频吗, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
          }).then(() => {
          let that = this;
          let data = new FormData();
              data.append('ids',param);                 
              that.http.post( baseapi.delectresdata,data).then(res=>{
                  that.$message.success('删除成功');
                  that.selectvideoList(groupId);     
              })
          });
      },
         videoNodeClick(data){
              this.selectvideoList(data.id);  
              // this.selectResoneGrounp(data.id,data);       
                      
              // this.chongid = data.id;   
          },
           //请求视频资源列表
        selectvideoList(parpm){
          let that = this;
          let data = new FormData();
          if(parpm != '' && parpm != undefined && parpm !=null){
              data.append('groupId',parpm);
          }else{
              data.append('groupId',0);
          }
            
              data.append('type',2);
              data.append('page',1);
              data.append('limit',20);
                          
          this.http.post( baseapi.imgresRught,data).then(res=>{
                that.videoarr = res.data.list;
          })  
        },


        //视频连接
        vdeioeditlianjie(param){
          this.lianjievalue = param;
          this.vdieolianjie = true;
        },
        selectResGrounp(){
          let that = this;
            let data = new FormData();
            data.append('type',2);
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                data.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                data.append("supplierId", '2');
            }

            this.http.post( baseapi.resourceList, data).then(res=>{
                if(res.data.list.length != 0){
                    that.startid = res.data.list[0].id;
                    that.selectvideoList(res.data.list[0].id);
                  }else{
                    that.selectvideoList();
                }      
                that.tupiangrounp = res.data.list;
                that.data = res.data.list;             
            })        
        },
       //添加分组数据
      addgrounpdata(){
        this.addResGrounp();
        this.data.push({id: 25, level: 1, name: "一级分类", pid: 0})

      }

    }
}
</script>
<style>
.imgactive {
  border:1px dashed #999;
  border-radius: 10px;
  

}
.mg-imgsrc-buttom{
  width: 100%;
  display: flex;
  justify-content: center;
}

.imgtanzhujian .el-dialog__title {
    font-size: 14px !important;
    font-weight: 600;
}
.imgtanzhujian .el-dialog__wrapper::-webkit-scrollbar { 
    display: none;
}
.imgtanzhujian .el-dialog::-webkit-scrollbar { 
    display: none;
}
.imgtanzhujian .el-dialog{
  height: calc(100% - 100px);
    overflow: scroll;
    width: calc(100% - 250px);
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0!important;
    transform: translate(-50%,-50%);
    /* border-radius: 10px; */
}
.mh-resoure-grounp_onespan{
    display: inline-block;
    width: 130px
}
.mh-resoure-grounp{
    display: flex;
    align-items: center;
    margin-bottom: 20px
}

.block .el-select__caret{
  line-height: 32px
}

.res-imgmain{
    display: flex;
}
.res-imgleft{
    height: 100%;
    width: 240px;
    margin-right: 15px;
    text-align: left;
    background-color: #f2f2f2;
    padding: 20px 10px 20px 5px;
    color: #666;
}
.res-img-right{
    flex: 1;
    flex-wrap: wrap;
    display: flex;
   align-self:flex-start
}
.res-imgleftdiv{
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}
.res-imgleft .el-tree{
    background-color:#f2f2f2 ;
}
.newnode{
     display: inline-block;
     width: 105px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
    height: 19px;
    line-height: 28px;
    font-size: 12px;
 }

 #res-img-right-div{
   width: 150px;
   height: 200px;
   margin-left: 12px;
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin-bottom: 12px;
 }
  #res-img-right-div:hover{
    cursor: pointer;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 10px;
  }
   
  .res-img-right-grounp{
       display: flex;
       align-items: center;
       height: 22px;
       font-size: 12px;
    justify-content: space-around;
  }
  .res-img-right-span{
    font-size: 14px;
    color: #606266;
    font-weight: 500;
  }
   .res-img-right-span{
      width: 100%;
            overflow:hidden; 
      text-overflow:ellipsis; 
      white-space:nowrap;
    font-size: 14px;
    color: #606266;
    font-weight: 500;
    display: inline-block;
    padding: 6px 10px 0px;
    box-sizing: border-box;
    font-weight: 400;
    color: #999;
  }
  .res-img-right-grounp>button{
    color: #606266;
  }

   .res-img-right-div{
   width: 150px;
   height: 200px;
   margin-left: 12px;
   border-radius: 10px;
   border: 1px solid #eee;
   margin-bottom: 12px;
   transition:all .2s
       /* */
 }
  .res-img-right-div:hover{
    /* border: 1px solid #000; */
    cursor: pointer;
     box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
 
  .res-img-right-divimg{
    width: 150px;
    height: 150px;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
     object-fit: cover;
  }
</style>