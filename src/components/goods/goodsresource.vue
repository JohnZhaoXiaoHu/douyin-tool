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
                 <div class="goods-card_body" v-loading="loading">

                   <div id="output"></div>
                    <div>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                            <el-tab-pane label="图片" name="first">
                                <!--我的资源图片开始-->
                              <button  type="button" class="el-button el-button--primary el-button--small" style="margin-bottom: 20px"><span @click="dialogFormVisible = true">上传图片</span></button>

                              <div class="res-imgmain">

                                  <div class="res-imgleft">
                                     <!-- <div class="res-imgleftdiv">
                                        <button type="button" class="el-button el-button--default el-button--small" @click="addResGrounp(1)"><span><i class="el-icon-plus"></i>添加分组</span></button>
                                      </div> -->
                                      <el-tree
                                          :default-expanded-keys="zhanarrqy"
                                          :data="data"
                                          highlight-current
                                          node-key="id"
                                          ref="imgtree"
                                          :props="defaultProps"
                                          @node-click="handleNodeClick"                              
                                          accordion                                                                                                                     
                                         > 
                                        <span class="custom-tree-node" slot-scope="{ node, data }">
                                        <span   v-if="data.delect !=2" class="newnode">{{ data.name }}</span>
                                        <el-input  ref="mark" type="text"   @change="newgrounp(data)" v-if="data.delect ==2" v-model="newaddvalue" placeholder="分组名称"></el-input>
                                        <span>
                                          <el-button
                                                v-if=" data.layer != undefined ||  data.layer  != null "   
                                                  type="text"
                                                  size="mini"
                                                  @click.stop="() => append(data)">
                                           <el-tooltip  effect="dark" content="添加子分类" placement="top">
                                                <i class="el-icon-plus"></i>
                                           </el-tooltip>
                                          </el-button>

                                           <el-button type="text"
                                                  size="mini"   @click.stop="chongmingming(1,data.id,data.name)">
                                          <el-tooltip  effect="dark" content="重命名" placement="top">
                                                 <i class="el-icon-edit" style="font-size: 12px;color: #409eff" ></i>
                                                
                                          </el-tooltip>
                                            </el-button>
                                          <el-button
                                                  type="text"
                                                  size="mini"
                                                  @click.stop="() => remove(node, data,1)">

                                               <el-tooltip  effect="dark" content="删除分类" placement="top">
                                                   <i class="el-icon-delete"></i>
                                               </el-tooltip>

                                          </el-button>

                                        </span>
                                      </span>
                                      </el-tree>
                                  </div>

                                  <div class="res-img-right">
                                      <div class="res-img-right-div" v-show =" imgarr.length != 0"  v-for="(item,index) of imgarr" :key="index"> 
                                          <!-- <div class="res-img-right-divimg"  @click="tanimgBing(item.smallpath)" :style="{backgroundImage:`url(${item.smallpath})`}"></div> -->
                                          <img :src="item.path" alt="" title="点击预览大图" class="res-img-right-divimg" @click="tanimgBing(item.path)">
                                          <div class="res-img-right-span">{{item.name}}</div>
                                          <div class="res-img-right-grounp"> 
                                            <button type="button" class="el-button el-button--text"><span @click="myresedit(item.id,item.name,item.groupId)">改名</span></button>
                                            <button type="button" class="el-button el-button--text"><span @click="editlianjie(item.path)">链接</span></button>
                                            <!-- <button type="button" class="el-button el-button--text"><span>分组</span></button> -->
                                            <button type="button" class="el-button el-button--text"><span @click="imgdelResA(item.id,item.groupId)">删除</span></button>

                                          </div>
                                      </div>

                                      <div v-if="imgarr.length == 0" style="color:#909399;display:Flex;align-items: center;font-size:12px;margin-top:100px;margin-left:100px">
                                         <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/logging.png" alt="" width="150" height="152">
    
                                      </div>

                                      <!--  -->
                                      <div class="mh-jinze-resimggrounp">
                                          <el-pagination
                                              @size-change="handleSizeChange"
                                              @current-change="handleCurrentChange"
                                              :current-page="currentPage4"
                                              :page-sizes="[100, 200, 300, 400]"
                                              :page-size="18"
                                              layout="total, prev, pager, next, jumper"
                                              :total="totalCount">
                                          </el-pagination>    
                                      </div>    

                                      <!-- 分页 -->
                                 
                                  </div>

                              </div>
                               
                            </el-tab-pane>
                             <!--我的资源图片结束-->

                        </el-tabs>
                    </div>


                <!--上传图片-->
                <el-dialog title="上传图片" :visible.sync="dialogFormVisible">
                  <div class="mh-resoure-grounp">
                        <span class="mh-resoure-grounp_onespan">图片分组:</span>
                        <div class="block" >

                          <el-cascader
                            :change-on-select="true"                          
                            v-model="name"
                            :options="tupiangrounp"
                            :props="{ expandTrigger: 'hover',children:'childlist',value:'id',label:'name' }"
                            @change="handleChangevalue"
                          >
                          </el-cascader>
                        <!-- <el-select v-model="imgvalue" placeholder="请选择">
                          <el-option
                            v-for="item in tupiangrounp"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                          </el-option>
                        </el-select> -->
                         
                        </div>

                  </div>

                   <div class="mh-resoure-grounp">
                        <span class="mh-resoure-grounp_onespan">图片名称:</span>
                        <div class="block">
                          <el-input v-model="newimgname" placeholder="图片名称"></el-input>                     
                        </div>                       
                  </div>

                   <div class="mh-resoure-grounp">
                        <span class="mh-resoure-grounp_onespan">网络图片:</span>
                        <div class="block">
                          <el-input v-model="netimgUrl" placeholder="添加网络图片链接地址"></el-input>                     
                        </div>                       
                  </div>

                  <div class="mh-resoure-grounp">
                      <span class="mh-resoure-grounp_onespan">本地图片:</span>
                      <el-upload
                        drag
                        multiple
                        action="#"
                        list-type="picture-card"
                        :on-change="handleChange"
                        :on-remove="imgRome"
                        ref='upload'  
                        :auto-upload="false">
                            <i slot="default" class="el-icon-plus"></i>
                            <div slot="upfile" slot-scope="{upfile}">
                            <img
                                class="el-upload-list__item-thumbnail"
                                :src="upfile.url" alt=""
                            >
                            <span class="el-upload-list__item-actions">
                                <span
                                class="el-upload-list__item-preview"
                                @click="handlePictureCardPreview(file)"
                                >
                                <i class="el-icon-zoom-in"></i>
                                </span>
                                <!-- <span v-if="!disabled" class="el-upload-list__item-delete"
                                @click="handleDownload(file)" >
                                <i class="el-icon-download"></i>
                                </span>
                                -->
                                <span
                                v-if="!disabled"
                                class="el-upload-list__item-delete"
                                @click="imgRome(file)"
                                >
                                <i class="el-icon-delete"></i>
                                </span> 
                            </span>
                            </div>
                            
                        </el-upload>
                        <el-dialog :visible.sync="dialogVisible">
                               <img width="100%" :src="dialogImageUrl" alt="">
                        </el-dialog>
                  </div>
                  
                   <span slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="uploadimg(file)" :loading="imgvideotrue">{{imgvideovalue}}</el-button>
                    </span>
                </el-dialog>


                 <el-dialog title="修改资源名称" :visible.sync="vdieoeditimgnamedata">
                    <div class="mh-resoure-grounp">
                        <span class="mh-resoure-grounp_onespan">资源名称:</span>
                        <div class="block" >
                          <el-input v-model="editimgnamedataname" placeholder="资源名称"></el-input>                        
                        </div>
                  </div>
                   <span slot="footer" class="dialog-footer">
                        <el-button @click="vdieoeditimgnamedata = false">取 消</el-button>
                        <el-button type="primary" @click="vdeioeditimgnamethod">确 定</el-button>
                    </span>

                </el-dialog>

                <el-dialog title="复制链接" :visible.sync="vdieolianjie">
                    <div class="mh-resoure-grounp">
                        <span class="mh-resoure-grounp_onespan">资源链接:</span>
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
                <!-- 上传视频over -->

               <el-dialog title="修改分组名称" :visible.sync="editname">
                    <div class="mh-resoure-grounp">
                        <span class="mh-resoure-grounp_onespan">分组名称:</span>
                        <div class="block" >
                          <el-input v-model="editnamevalue" placeholder="修改分组名称"></el-input>                        
                        </div>
                  </div>
                   <span slot="footer" class="dialog-footer">
                        <el-button @click="editname = false">取 消</el-button>
                        <el-button type="primary" @click="editgrunpname">确 定</el-button>
                    </span>

                </el-dialog>

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



                 <el-dialog title="修改图片名称" :visible.sync="editimgnamedata">
                    <div class="mh-resoure-grounp">
                        <span class="mh-resoure-grounp_onespan">图片名称:</span>
                        <div class="block" >
                          <el-input v-model="editimgnamedataname" placeholder="图片名称"></el-input>                        
                        </div>
                  </div>
                   <span slot="footer" class="dialog-footer">
                        <el-button @click="editimgnamedata = false">取 消</el-button>
                        <el-button type="primary" @click="editimgnamethod">确 定</el-button>
                    </span>

                </el-dialog>

                <el-dialog title="复制链接" :visible.sync="lianjie">
                    <div class="mh-resoure-grounp">
                        <span class="mh-resoure-grounp_onespan">图片链接:</span>
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
                        <el-button @click="lianjie = false">确定</el-button>
                    </span>

                </el-dialog>

                <!-- 视频弹窗事件 -->
                <div class="mh-vdeio">
                    <el-dialog
                      :visible.sync="tandialogVisible"
                      width="800px"
                      height="480" 
                    >
                <!-- :poster="posterimg" -->
                      <video id="video" controls width="800" height="480" ref="videomy">
                        <source :src="vdeioPath" type="video/mp4">
                      </video>
                      <span slot="footer" class="dialog-footer">
                        <el-button @click="tandialogVisible = false">取 消</el-button>
                      </span>
                    </el-dialog>
                </div>

                </div>
                <!-- 商品中心over-->

                 <el-dialog :visible.sync="TandialogVisible" @close="closeguan" custom-class="mh-weiquan_img">
                      <img width="100%" :src="TandialogImageUrl" alt="">
                 </el-dialog>

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
import axios from "axios";

export default {
    data() {
        return {
          loading: false,
          cancel: null,//取消上传
          currentPage4:'',
          imgval:1,
          totalCount:'',
          vedionamexx:'',
          newimgname:'',
          TandialogImageUrl:'',
          TandialogVisible:false,
          settingnamevalue:'',
          resid:3,
          yinpath:'',
          yinpingname:'',
          yindialogFormVisible:false,
          paramtype:'',
          settingnametan:false,
          settingname:'',
          editrespaentid:'',
          editresID:1,
          newaddvalue:'',
          zhanarrqy:[],
          newImgid:0,
          imgvideotrue:false,
          imgvideovalue:'确认',
          fileList: [],
          vdeiodialogFormVisible:false,

          name:[],
          imgname:'',
          editimgnamedatavalueone:'',//修改图片名称
          editimgnamedataid:'',//修改图片id
          editimgnamedataname:'',//图片name
          dialogVisible: false,
          lianjie:false,
          lianjievalue:'www.baidu.com',
          neme:"",
          dialogImageUrl: '',
          dialogVisible: false,
          disabled: false,
          //上传图片
          dialogFormVisible:false,
          editname:false,
          editimgnamedata:false,
          editimgnamedatavalue:'',
          activeName: 'first',//头部选项卡
         // handleClick:0,
          data: [],
          defaultProps: {
              children: 'childlist',
              label: 'name'
          },
          value: [],
          tupiangrounp:[],
          options: [{
          value: 'zhinan',
          label: '指南',
            children: []
          }],
          //我的资源
          imgarr:[{
              id:1,
              name:'',
              smallpath:"",
              redirect:''
            }],
          upfile:[],
          imgvalue:"",
          netimgUrl:'',

          chongid:'',
          editnamevalue:"",
          editimg1id:'',
          pidnewChild:[],
          vdieo:{},
          vdeiovalue:[],
          yinvalue:[],
          videoarr:[],
          videotrue:false,
          videovalue:'确认',
          vdieoeditimgnamedata:false,
          vdieolianjie:false,
          vdeioPath:'',
          tandialogVisible: false,
          posterimg:'https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/jinze/pause_publish.jpg',
          startid:0,
          editnamecateid:0,
          editvdeioid:0,
          expandedKeys:[],
          datatree :[],
          uploadImg:[],
          xxurl:'http://sanyetongsj.oss-cn-shanghai.aliyuncs.com/test/gv9Jnbc8nO9oceXW.mp4'     
      };       
    },
    components:{
        navbar,sidebar,secnavbar    
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
      if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
          vm.selectResGrounp(1);//查询资源组列表
      } else {
          next('/login');
      }
		})
	},
    mounted() {
      // this.findvideocover();    
    },
    methods: {

        tanimgBing(url){
            this.TandialogImageUrl = url;
            this.TandialogVisible = true;
        },
        closeguan(){
            this.TandialogVisible = false;
        },
        imgRome(file){
          let that = this;
          this.upfile.forEach(function(item,index){
              if(file.name == item.name){
                that.upfile.splice(index,1)
              }
          })
        },
        audiomethod(path){
         this.yinpath = path;
           this.$nextTick(() => {
                this.$refs.audioomy.load();
                this.$refs.audioomy.play()
             })   
        } , 
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
          this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
        },
        beforeRemove(file, fileList) {
          return this.$confirm(`确定移除 ${ file.name }？`);
        },
        //弹框
        tanvideoshow(path){
           this.tandialogVisible = true;
           this.$nextTick(() => {
                this.$refs.videomy.src = path;
             })
        } , 

        //添加左边图片分组
        addResGrounp(param){
          this.paramtype = param
          this.settingnametan = true;    
        },
        //设置左边分组名称
        settingnameMthod(){
          let data = new FormData();
              data.append('type',this.paramtype);
              data.append('names',JSON.stringify([this.settingnamevalue]));
              this.http.post(baseapi.addgoodsGunp,data).then(res=>{
                  this.$message.success('添加分组成功');
                  this.settingnametan = false;
                  this.settingnamevalue = '';
                  if (this.paramtype ==1) {
                    this.selectResGrounp(1)
                    return false;
                  }
                  if (this.paramtype ==2) {
                    this.vedioResGrounp(2);
                    return false;
                  }
                  if (this.paramtype == 3) {
                    this.vedioResGrounp(3);
                    return false
                  }
              })  
        },
        //请求右边图片分组（baseapi.resGrounpTee）
        selectResGrounp(param){
      
            let data = new FormData();
            // data.append('type',param);
            data.append('groupId',0);    
            data.append('type',1);
            data.append('page',1);
            data.append('limit',14);
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                data.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                data.append("supplierId", '2');
            }

            this.http.post( baseapi.resourceList, data).then(res=>{
                if (res.data.list.length != 0) {
                    this.startid = res.data.list[0].id;
                    this.selectResList(res.data.list[0].id);
                    this.chongid = res.data.list[0].id;
                } else {
                  this.selectResList();
                }

                  this.tupiangrounp = res.data.list;
                  this.data = res.data.list;   
                  this.loading = false;
                  this.$nextTick(() => {
                    this.$refs.imgtree.setCurrentKey(this.data[0].id);
                })              
            })        
        },
        //删除左边图片分组（shachuResGrounp）
        leftdelectResGrounp(id,param){
          let that = this; 
          this.$confirm('你确定要删除该资源组吗, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
              }).then(() => {         
                let data = new FormData();
                data.append('ids',id);
                if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                    data.append("supplierId", this.$cookie.get('supplierId'));
                }else{
                    data.append("supplierId", '2');
                }

                this.http.post( baseapi.resourceDelete, data).then(res=>{
                    that.$message.success('删除成功');
                    that.selectResGrounp(param);
                })    
              });
          },     
          //左边图片重命名
          editgrunpname(){
              let that = this;
              let data = new FormData();
              data.append('name',this.editnamevalue);
              data.append('id',this.editrespaentid);
              if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                    data.append("supplierId", this.$cookie.get('supplierId'));
                }else{
                    data.append("supplierId", '2');
                }

              this.http.post( baseapi.resourceUpdate, data).then(res=>{
                  that.$message.success('修改名称成功');
                  that.editnamevalue = '';
                  that.selectResGrounp(that.editresID);
                  that.editname = false;
              })   
          }, 
          //左边添加图片子节点
          addResoneGrounp(){
            let that = this;
            let data = new FormData();   
            let adddata = [];
            data.append("pid",this.newImgid ); 

            data.append('names',[this.newaddvalue]);
            this.http.post( baseapi.addgoodsResSon,data).then(res=>{
                 that.selectResGrounp(1);
                 that.zhanarrqy = [this.newImgid];
                 that.newaddvalue = '';
             
             })  
          },
              
        //点击切换事件
        handleClick(tab, event) {
            // console.log(tab, event);
            if (tab.index == 0) {
              this.selectResGrounp(1)
            }
            if (tab.index == 2) {   
              this.vedioResGrounp(2);
           
            }
            if (tab.index == 1) {
              this.vedioResGrounp(3);
             
            }
        },
          //图片右边
          selectResList(parpm,page=1){
              let that = this;
              let data = new FormData();
              
              data.append('groupId',0);    
              data.append('type',1);
              data.append('page',page);
              data.append('limit',18);
              if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                  data.append("supplierId", this.$cookie.get('supplierId'));
              }else{
                  data.append("supplierId", '2');
              }
              // imgresRught
              this.http.post( baseapi.resourceList,data).then(res=>{
                    that.imgarr = res.data.list;
                    that.totalCount = res.data.totalCount;
              })  
          },

      myvdeioedit(id,name,cateid,resid){
          this.resid = resid;
          this.vdieoeditimgnamedata = true;
          this.editimgnamedataid = id;
          this.editvdeioid = cateid;
          if(name != '' && name != undefined){
            this.editimgnamedataname = name;
          }  
     },
     //修改图片名字
     vdeioeditimgnamethod(){
       let that = this;
       let data = new FormData();
          data.append('id', this.editimgnamedataid);
          data.append('name',this.editimgnamedataname);

          if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                    data.append("supplierId", this.$cookie.get('supplierId'));
                }else{
                    data.append("supplierId", '2');
                }
          console.log('---修改图片名字');
          this.http.post( baseapi.resourceUpdate, data).then(res=>{
              if(res.status ==500){
                that.$message.success('资源名称不能为空');
                return false;
              }
              if(res.status == 200){
                that.$message.success('修改资源名称成功');
                // that.selectvideoList(that.editvdeioid,that.resid);
                // that.vdieoeditimgnamedata = false;
              }
          })   
     },
     imgdelResA(param,groupId){
    
       let that = this;
        this.$confirm('确定删除该图片吗, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
          }).then(() => {
             let data = new FormData();
              data.append('ids',param);   
              if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                    data.append("supplierId", this.$cookie.get('supplierId'));
                }else{
                    data.append("supplierId", '2');
                }

              that.http.post( baseapi.resourceDelete, data).then(res=>{
                  that.$message.success('删除图片成功');
                  that.selectResList(groupId,that.imgval);
                  // that.selectResGrounp(1);//查询资源组列表
              })                
        });  
    },
     /**删除资源 */
      delectResGrounp(id){
          let that = this; 
          this.$confirm('你确定要删除该资源组吗, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
          }).then(() => {
              let data = new FormData();
              data.append('id',id);
              
              this.http.post( baseapi.delectresdata, data).then(res=>{
                if(res.data.status  == 200){  
                    that.$message.success('删除成功');
                    that.selectResGrounp();
                }else{
                    that.$message(res.data.message);
                }
              }) 
            });
    },
    //over
       handleChangevalue(val) {
        this.imgvalue = val;
    },
    //修改图片弹窗
    myresedit(id,name,cateid){
        this.editimgnamedata = true;
        this.editimgnamedataid = id;
        this.editnamecateid = cateid;
        if(name != '' && name != undefined){
          this.editimgnamedataname = name;
        }else{
           this.editimgnamedataname = '';
        } 
     },
     //修改图片名字
     editimgnamethod(){
       let that = this;
       let data = new FormData();
        data.append('id', this.editimgnamedataid);
        data.append('name',this.editimgnamedataname);
         if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                    data.append("supplierId", this.$cookie.get('supplierId'));
                }else{
                    data.append("supplierId", '2');
                }
          console.log('---修改图片名字');
          // this.http.post( baseapi.resourceUpdate,  myresedit

        this.http.post( baseapi.resourceUpdate, data).then(res=>{
              that.$message.success('修改图片名称成功');
              that.selectResGrounp(1);//查询资源组列表
              // that.selectResList(that.editnamecateid,that.imgval);
              that.editimgnamedata = false;
          })  
     },  

    onCopy (e) {
        this.$message.success("链接已复制到剪切板！");
        this.lianjie = false;
    },
    //链接
    editlianjie(param){
      this.lianjievalue = param;
      this.lianjie = true;
    },
    editimgname(param){
      this.editimgnamedata = true;
      this.editimg1id = param;
    },
    onerror(){
      this.$message('暂不支持');
    },
    handleChange(file,fileList){

      console.log(fileList);
      if(fileList != undefined){
      let  arr = [];
      for(let a =0;a<fileList.length;a++){
        arr.push(fileList[a].raw)
      }
        this.upfile =arr;
      }
    },
    
    //上传图片的方法
    uploadimg(file){
      let that = this;
      let data = new FormData();
      let uploadimgid = 0;
      if(this.imgvalue != ''){
          this.imgvideotrue = true;
         this.imgvideovalue = '上传中';
      }

      data.append('groupId', 0);
      data.append('type',1);
      data.append('name',this.newimgname);

      if(this.netimgUrl != ''){
          data.append('neturl',this.netimgUrl);
      }
      console.log(this.upfile);
      for(let a=0;a<this.upfile.length;a++){
          data.append('files',this.upfile[a]);
      }
      if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
          data.append("supplierId", this.$cookie.get('supplierId'));
      }else{
          data.append("supplierId", '2');
      }

      // baseapi.addImgRes
      this.http.post( baseapi.resourceAdd, data).then(res=>{

          if(res.data.status != 200){
                this.$message.error(res.data.message);
                this.imgvideotrue = false;
                this.imgvideovalue = '提交';
                return false;
          }
          if(res.data.status == 200){
              this.$message.success("添加图片成功");
              this.selectResList(uploadimgid);

              this.currentPage4 = '1';

              this.imgvideotrue = false;
              this.imgvideovalue = '提交';
              this.dialogFormVisible = false;    
       
              this.$refs.upload.clearFiles();       
              this.upfile = [];
              this.name =  [];
              this.netimgUrl = '';
              this.newimgname = '';
              this.editimgnamedataname = '';

              this.imgval = 1; //分页重置
          }else{
              this.$message(res.data.message);
              this.imgvideotrue = false;
              this.imgvideovalue = '提交';
            } 
         })         
      },
      //图片上传
      // handleRemove(file) {
      //   this.dialogVisible = true;
      //   console.log(file);
      // },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
     //添加分组数据
     addgrounpdata(){
        this.data.push({id: 25, level: 1, name: "一级分类", pid: 0})
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },
      chongmingming(parme,id,name){
         this.editresID = parme;
         this.editrespaentid = id;
         this.editnamevalue = name;
         this.editname = true;
      },
      

            /**查询单一资源列表 */
            selectResoneGrounp(param,param2){
              let that = this;
              let data = new FormData();
              data.append('pid',param);

              this.http.post( baseapi.selectGrounpList,data).then(res=>{
              if( res.data.list.length != 0){
                  let children = [];                   
                  if(that.data.children == null || that.data.children == undefined){
                    for(let i = 0; i < that.data.length; i++){                
                            that.$set(that.data[i],children,[]);   
                    　　}   
                  };                             
                  if (!param2.children) {
                    that.$set(param2, 'children', []);
                  }
                  that.$set(param2,'children',that.pidnewChild);
                  that.pidnewChild = res.data.list;   
                }
            })      
        },
        rechristen() {
            console.log(111);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {

     

          this.imgval = val;      //保存分类IDval 用作删除,修改回显

          this.selectResList(this.chongid,val);//当前数据左侧的商品分类ID
          //  this.chongid
            console.log(`当前页: ${val}`);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
    
     
        // 添加添加数据的处理问题
        newgrounp(data){
            console.log(data);
            this.addResoneGrounp(data);
        },
        append(data) {    
          let that =this;
          const newChild = { name: '新增二级分类', childlist: [],delect:2};
            if (!data.childlist) {
                this.$set(data, 'childlist', []);
            }
            data.childlist.push(newChild) 
            that.newImgid =  data.id;
            that.zhanarrqy = [data.id];
     
            setTimeout(()=>{
                this.$nextTick(()=>{
                this.$refs.mark.$el.querySelector('input').focus();
                })
            },10)
                              
            },
            /**删除资源组 */
            remove(node, data,type) {
                let id = data.id;
                this.leftdelectResGrounp(id,type);      
            },
            handleDragStart(node, ev) {
                console.log('drag start', node);
            },
            handleDragEnter(draggingNode, dropNode, ev) {
                console.log('tree drag enter: ', dropNode.label);
            },
            handleDragLeave(draggingNode, dropNode, ev) {
                console.log('tree drag leave: ', dropNode.label);
            },
            handleDragOver(draggingNode, dropNode, ev) {
                console.log('tree drag over: ', dropNode.label);
            },
            handleDragEnd(draggingNode, dropNode, dropType, ev) {
                console.log('tree drag end: ', dropNode && dropNode.label, dropType);
            },
            handleDrop(draggingNode, dropNode, dropType, ev) {
                console.log('tree drop: ', dropNode.label, dropType);
            },
            allowDrop(draggingNode, dropNode, type) {
                if (dropNode.data.label === '二级 3-1') {
                    return type !== 'inner';
                } else {
                    return true;
                }
            },
            allowDrag(draggingNode) {
                return draggingNode.data.label.indexOf('三级 3-2-2') === -1;
            },
            //点击列表请求资源
            handleNodeClick(data) {  
              console.log(data);
              if(data.id != undefined){
                    this.selectResList(data.id);  
                    this.chongid = data.id; 
              }       
            },
          videoNodeClick(data){
              this.selectvideoList(data.id,2);    
          },
          yinNodeClick(data){
              this.selectvideoList(data.id,3);  
          },
          //请求视频资源列表
          selectvideoList(parpm,type){
            let that = this;
            let data = new FormData();
            if(parpm != '' && parpm != undefined && parpm !=null){
                data.append('groupId',parpm);
            }else{
                data.append('groupId',0);
            }
            data.append('type',type);
            data.append('page',1);
            data.append('limit',20);

            this.http.post( baseapi.imgresRught,data).then(res=>{
              that.videoarr = res.data.list;
            })  
        },
            
   }
}
</script>
<style>
.mh-jinze-resimggrounp{
  margin-bottom:10px;
  display:flex;
  justify-content: flex-end;
  width:100%
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
     width: 110px;
     white-space: nowrap;
     overflow: hidden;
     text-overflow: ellipsis;
    height: 19px;
    line-height: 28px;
    font-size: 12px;
 }

 .res-img-right-div{
   width: 150px;
   height: 200px;
   margin-left: 15px;
   border-radius: 10px;
   border: 1px solid #eee;
   margin-bottom: 12px;
   transition:all .2s
 }
  .res-img-right-div:hover{
     cursor: pointer;
     box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  }
 
  .res-img-right-divimg{
    width: 150px;
    height: 150px;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    position: relative;
  }

  .res-img-right-grounp{
       display: flex;
       align-items: center;
       height: 22px;
       font-size: 12px;
       justify-content: space-around;
       padding: 0 15px;
       box-sizing: border-box;
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
  .custom-tree-node .el-input__inner{
    border:none !important;
  }
  .shipinnewnode{
    display: inline-block;
    width: 152px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 19px;
    line-height: 28px;
  }

  .mh-resYinimg{
    width: 100%;
  }
</style>