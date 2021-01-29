<template>
    <div class="imgtanzhujian">
        <div>
            <el-dialog  :visible.sync="imgdialogFormVisible" custom-class="mh-jintan"  :show-close="true"  @close="closeDialog" width="70%">
                <div>
                    <!--我的资源图片开始-->
                    <button @click="dialogFormVisible = true" type="button" class="el-button el-button--primary el-button--small" style="margin-bottom: 20px;"><span>上传图片</span></button>
                    <div class="res-imgmain">
                        <div class="res-imgleft" style="height: 500px;overflow: scroll;">
                            <el-tree 
                                :data="data"  
                                highlight-current
                                node-key="id"
                                accordion
                                ref="imgtree"
                                :props="defaultProps"
                                @node-click="handleNodeClick">
                            </el-tree>
                        </div>
    
                        <div class="res-img-right">

                            <!-- v-show=" imgarr.length != 0" :class="{xxactive:index==isShow}" -->
                            <div @click="imgkuan($event,index,item.path)" :class="{xxactive:index==isShow}"  :style="imgkuanstyle" id="res-img-right-divgoods"  v-for="(item,index) of imgarr" :key="index">
                              
                                <div class="res-img-rightshuxing" :data-id="FLOG" :style="{display:FLOG}">     
                                     <!--         -->
                                      <!-- <span class="titleimgshunum" >{{sonindex+1}}</span> -->
                                    </div>
                                    <img :src="item.path" alt="" class="res-img-right-divimg">
                                    <div class="res-img-right-span">{{item.name}}</div>
                                
                               
                            </div>


    
                            <div v-if="imgarr.length == 0" style="color:#909399;display:Flex;align-items: center;font-size:12px;margin-top:100px;margin-left:100px">
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/logging.png" alt="" width="150" height="152">
    
                            </div>
    
                        </div>
    
    
                    </div>
                    <div class="mh-jinze-pagefen">
                        <el-pagination
                            @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage4"
                            :page-sizes="[100, 200, 300, 400]"
                            :page-size="14"
                            layout="total, prev, pager, next, jumper"
                            :total="totalCount">
                        </el-pagination>    
                    </div>    

                    <div class="mg-imgsrc-buttom">
                     
                        <el-button type="primary" @click="getChild">确定</el-button>
                    </div>
                    <!--我的资源图片结束-->
                </div>
            </el-dialog>
        </div>
    
        <!--商品推广弹窗-->
        <el-dialog title="上传图片" :visible.sync="dialogFormVisible">
            <div class="mh-resoure-grounp">
                <span class="mh-resoure-grounp_onespan">图片分组:</span>
                <div class="block">
                    <el-cascader :change-on-select="true" v-model="name" :options="tupiangrounp" :props="{ expandTrigger: 'hover',children:'childlist',value:'id',label:'name' }" @change="handleChangevalue">
                    </el-cascader>
    
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
                <el-upload action="#" list-type="picture-card" multiple :on-change="handleChange" ref='upload'    :on-remove="imgRome" :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="upfile" slot-scope="{upfile}">
                        <img class="el-upload-list__item-thumbnail" :src="upfile.url" alt="">
                        <span class="el-upload-list__item-actions">
                                    <span
                                    class="el-upload-list__item-preview"
                                    @click="handlePictureCardPreview(file)"
                                    >
                                    <i class="el-icon-zoom-in"></i>
                                    </span>
                                    <!-- <span
                                    v-if="!disabled"
                                    class="el-upload-list__item-delete"
                                    @click="handleDownload(file)"
                                    >
                                    <i class="el-icon-download"></i>
                                    </span> -->
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
                            <el-button type="primary" @click="uploadimg(file)" :loading="videotrue">{{videovalue}}</el-button>
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

export default {
    data() {
        return {
            totalCount:'',
            FLOG:'none',
            goodsdetail:[],
            activeImg:[],
            newimgname:'',
            name: '',
            videotrue: false,
            videovalue: '确认',
            isShow: -1,
            imgkuanstyle: 'height:172px',
            url: [],
            dialogVisible: false,
            imgdialogFormVisible: false,
            lianjie: false,

            lianjievalue: '',
            neme: "",

            dialogImageUrl: '',
            disabled: false,
            //上传图片
            dialogFormVisible: false,
            editname: false,
            editimgnamedata: false,
            editimgnamedatavalue: '',
            activeName: 'first', //头部选项卡
            // handleClick:0,
            // 树形结构
            data: [],
            //我的资源
            imgarr: [{
                id: 1,
                name: '测试',
                smallpath: "http://img.wkdao.com/image/47/2020/01/20/5ddb1c2c2404b1b54fcb5cf7ff216f0e.jpg",
                redirect: 'www.baidu.com'
            }],
            //图片分组
            upfile: [],
            imgvalue: "",
            netimgUrl: '',

            chongid: '',
            editnamevalue: "",
            editimg1id: '',
            pidnewChild: [],
            goodsisuserOneUrl: [],
            pid: 1,
            goodsisuserTwoUrl: '',
            suinde: '',
            tupiangrounp: [],
            defaultProps: {
                children: 'childlist',
                label: 'name'
            },

            sonGetSonImg: '',
            swiperimgindex: 0,
            mine01:'',
            sunimg:'',
            goodsfenimg:''
        };

    },
    props: {
        accuseVisible: {
            type: Boolean,
            default: function() {
                return false
            }
        }
    },
    components: {
        navbar,
        sidebar
    },
    watch: {
        accuseVisible(newValue, oldValue) {
            this.imgdialogFormVisible = newValue
        }
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
        this.selectResGrounp(1); //查询资源组列表
        this.imgdialogFormVisible = this.$parent.sonaccuseVisible;        
    },
    methods: {
        imgRome(file){
          let that = this;
          this.upfile.forEach(function(item,index){
              if(file.name == item.name){
                that.upfile.splice(index,1)
              }
          })
        },
        closeDialog() {
            this.url = [];
        },
        getChild(url) {
            console.log(url);
             if (this.pid == 'mine01') {
                this.imgdialogFormVisible = false;
                this.$parent.hT.bgcss =`background: url(${this.mine01}) center top / contain no-repeat rgb(247, 247, 247);`;
            }
            if (this.pid == 1) {
                this.imgdialogFormVisible = false;
                this.$parent.sonurl = this.goodsisuserOneUrl;
            }
            if (this.pid == 9) {
                this.imgdialogFormVisible = false;
                this.$parent.goodscategoryimgOne = this.goodscategoryimgOne;
            }
            if (this.pid == 11) {
                this.imgdialogFormVisible = false;
                this.$parent.imgarrT = this.goodsdetail;
                this.goodsdetail = [];
            }

             if (this.pid == 99) {
                this.imgdialogFormVisible = false;
                this.$parent.imgarrT = this.activeImg;
                this.activeImg = [];
            }

            if (this.pid == 88) {
                this.imgdialogFormVisible = false;
                this.$parent.goodsfenimg = this.goodsfenimg;
            }
            if (this.pid == 2) {
                this.imgdialogFormVisible = false;
                this.$parent.goodsisuserTwoUrl = this.goodsisuserTwoUrl;
                this.$set(this.$parent.$refs.refgui.tableData[this.$parent.suinde],'img',this.sunimg); 
            }
            if (this.pid == 3) {
                let that = this;
                that.$parent.mnewSwiperArr = [];
                that.imgdialogFormVisible = false;
                console.log(this.swiperimgindex);

                that.$parent.swiperMap[this.swiperimgindex].set(this.swiperimgindex, { name: '图片' + this.swiperimgindex, title: '', imgurl: this.sonGetSonImg, jumpurl: '', order: this.swiperimgindex });
                that.$parent.swiperMap.forEach(function(item, index) {
                    item.forEach(function(sonitem, sonindex) {
                        console.log(sonitem);
                        that.$parent.mnewSwiperArr.push(sonitem);
                    })
                })

            }
        },
        indexOfimg(arr,valimg){
           for (var i = 0; i < arr.length; i++) {
                if (arr[i] == valimg) {
                        return i;
                    }
                }
                return -1;
        },
        removevalueimg(arr,valimg){
            let index = arr.indexOf(valimg);
            if (index > -1) {
                arr.splice(index, 1);
            }
        },
        imgkuan(ev,index, url) {
            let that = this;

            let evtObj = ev.target || ev.srcElement;
            let wantshuxing = evtObj.parentNode.firstChild;
            let jinze = wantshuxing.style.display == 'block' ? 'none' : 'block';
            let thissrc = evtObj.parentNode.children[1].src;
            wantshuxing.style.display = jinze;

            if(jinze == 'none'){
                if (this.pid == 1) {
                    let imgindex = this.indexOfimg(this.goodsisuserOneUrl,`'${thissrc}'`);
                    this.removevalueimg(this.goodsisuserOneUrl,imgindex);
                    this.goodsisuserOneUrl.forEach(function(item,index){
                        if(item == thissrc){
                            that.goodsisuserOneUrl.splice(index, 1); 
                        }
                    })
                }

                if (this.pid == 11) {
                    let imgindex = this.indexOfimg(this.goodsdetail,`'${thissrc}'`);
                    this.removevalueimg(this.goodsdetail,imgindex);

                    this.goodsdetail.forEach(function(item,index){
                        if(item == thissrc){
                            that.goodsdetail.splice(index, 1); 
                        }
                    })
                }


                 if (this.pid == 99) {
                    let imgindex = this.indexOfimg(this.activeImg,`'${thissrc}'`);
                    this.removevalueimg(this.activeImg,imgindex);
                    this.activeImg.forEach(function(item,index){
                        if(item == thissrc){
                            that.activeImg.splice(index, 1); 
                        }
                    })
                }
            
            }else{

                if(this.pid != 1 && this.pid != 11 && this.pid != 99){
                    wantshuxing.style.display = 'none'
                }

                if (this.pid == 1) {
                    this.goodsisuserOneUrl.push(url);
                    this.isShow = -1;
                    // this.$message.success('选取图片成功');
                    this.$message.success({
                        showClose: true,
                        message: '选取图片成功',
                        type:'success',
                        duration:600
                    });
                }

                if (this.pid == 11) {
                    this.goodsdetail.push(url);
                    this.isShow = -1;
                    this.$message.success({
                        showClose: true,
                        message: '选取图片成功',
                        type:'success',
                        duration:600
                    });
                }

                 if (this.pid == 99) {
                    this.activeImg.push(url);
                    this.isShow = -1;
                    this.$message.success({
                        showClose: true,
                        message: '选取图片成功',
                        type:'success',
                        duration:600
                    });
                }


                

                //单张图片
                if(this.pid == 'mine01'){
                    this.mine01 = url;
                    this.isShow = index;
                    this.$message.success({
                        showClose: true,
                        message: '选取图片成功',
                        type:'success',
                        duration:600
                    });
                }

                if (this.pid == 9) {
                    this.goodscategoryimgOne = url;
                    this.isShow = index;
                    this.$message.success({
                        showClose: true,
                        message: '选取图片成功',
                        type:'success',
                        duration:600
                    });
                }

                if (this.pid == 3) {
                    this.sonGetSonImg = (url);
                    this.isShow = index;
                    this.$message.success({
                        showClose: true,
                        message: '选取图片成功',
                        type:'success',
                        duration:600
                    });
                }

                if (this.pid == 2) {
                    this.sunimg = url;
                    this.isShow = index;
                    this.$message.success({
                        showClose: true,
                        message: '选取图片成功',
                        type:'success',
                        duration:600
                    });
                }

                  if (this.pid == 88) {
                    this.goodsfenimg = url;
                    this.isShow = index;
                    this.$message.success({
                        showClose: true,
                        message: '选取图片成功',
                        type:'success',
                        duration:600
                    });
                }

            }         
        },
        handleChange(file, fileList) {
            console.log(file);
            console.log(fileList);
            let arr = [];
            for (let a = 0; a < fileList.length; a++) {
                arr.push(fileList[a].raw)
            }
            this.upfile = arr;
        },
        //上传图片
        uploadimg(file) {
            let that = this;
            let data = new FormData();
            let uploadimgid = 0;
            if(this.imgvalue != ''){
                this.videotrue = true;
                this.videovalue = '上传中';   
                console.log(this.imgvalue)
            }
          
            if (this.imgvalue.length == 1) {
                data.append('groupId', this.imgvalue[0]);
                uploadimgid = this.imgvalue[0];
            }
            if (this.imgvalue.length > 1) {
                data.append('groupId', this.imgvalue[this.imgvalue.length - 1]);
                uploadimgid = this.imgvalue[this.imgvalue.length - 1];
            }

            data.append('type', 1);
            data.append('name', this.newimgname);
            

            if (this.netimgUrl != '') {
                data.append('neturl', this.netimgUrl);
            }
            console.log(this.upfile);
            for (let a = 0; a < this.upfile.length; a++) {
                data.append('files', this.upfile[a]);
            }
 
            this.http.post( baseapi.addImgRes,data).then(res=>{
                console.log(res)
            if(res.data.status != 200){
                    this.$message.error(res.data.message);
                    this.videotrue = false;
                    this.videovalue = '提交';
                    return false;
            }
            if(res.data.status == 200){
                this.$message.success("添加图片成功");
                this.selectResList(uploadimgid,1);
                this.chongid = uploadimgid;
                this.videotrue = false;
                this.videovalue = '提交';
                this.dialogFormVisible = false;    
        
                this.$refs.upload.clearFiles();       
                this.upfile = [];
                this.name =  [];
                this.netimgUrl = '';
                this.editimgnamedataname = '';
            }else{
                this.$message(res.data.message);
                this.videotrue = false;
                this.videovalue = '提交';
                } 
            }) 
        },

        //图片上传
        handleRemove(file) {
            this.dialogVisible = true;
            console.log(file);
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url;
            this.dialogVisible = true;
        },
        handleDownload(file) {
            console.log(file);
        },

        handleChangevalue(val) {
            this.imgvalue = val;
        },
        //请求左边图片分组（resGrounpTee）
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

            this.http.post( baseapi.resourceList,data).then(res=>{
                // console.log('---资源图片 data= ' + zm_jsonToString(res.data));
                if (res.data.list.length != 0) {
                    this.startid = res.data.list[0].id;
                    this.selectResList(res.data.list[0].id,1);
                    this.chongid = res.data.list[0].id
                    
                } else {
                  this.selectResList();
                }
                  console.log( res.data.list);
                  this.tupiangrounp = res.data.list;
                  this.data = res.data.list;  
            })        
        },
        //图片右边
        selectResList(parpm,page=1){
            let that = this;
            let data = new FormData(); 
            data.append('groupId',0);    
            data.append('type',1);
            data.append('page',page);
            data.append('limit',14);
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                data.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                data.append("supplierId", '2');
            }

            //baseapi.imgresRugh
            this.http.post( baseapi.resourceList, data).then(res=>{
                that.imgarr = res.data.list;    
                that.totalCount = res.data.totalCount;
            })  
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.selectResList(this.chongid, val);
            // this.thispageindex = val;
            console.log(`当前页: ${val}`);
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleClick(tab, event) {
            console.log(tab, event);
        },
       
        handleNodeClick(data) {
            this.selectResList(data.id,1);
            this.chongid = data.id;
        }
    }
}
</script>

<style  scoped>

.mh-jinze-pagefen{
 display: flex;
    justify-content: flex-end;
    margin-top:5px
   
  
}
.xxactive {
    /* border: 1px dashed #999; */
    border-radius: 10px;
    border: 2px solid #07d;
    position: relative;
}
.xxactive::after{
    position: absolute;
    display: block;
    content: " ";
    right: 0;
    top: 0;
    border: 14px solid #07d;
    border-left-color: transparent;
    border-bottom-color: transparent;
    z-index: 1;
}

.mg-imgsrc-buttom {
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

.imgtanzhujian .el-dialog {
    height: calc(100% - 100px);
    overflow: scroll;
    width: calc(100% - 250px);
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 !important;
    transform: translate(-50%, -50%);
    /* border-radius: 10px; */
}

.mh-resoure-grounp_onespan {
    display: inline-block;
    width: 130px
}

.mh-resoure-grounp {
    display: flex;
    align-items: center;
    margin-bottom: 20px
}

.block .el-select__caret {
    line-height: 32px
}

.res-imgmain {
    display: flex;
}

.res-imgleft {
    height: 100%;
    width: 240px;
    margin-right: 15px;
    text-align: left;
    background-color: #f2f2f2;
    padding: 20px 10px 20px 5px;
    color: #666;
}

.res-img-right {
    flex: 1;
    flex-wrap: wrap;
    display: flex;
    align-self: flex-start
}

.res-imgleftdiv {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
}

.res-imgleft .el-tree {
    background-color: #f2f2f2;
}

.newnode {
    display: inline-block;
    width: 105px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 19px;
    line-height: 28px;
    font-size: 12px;
}

#res-img-right-divgoods {
    width: 150px;
    height: 200px;
    margin-left: 12px;
    margin-bottom: 12px;
       box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
        border-radius: 10px;
        padding-bottom: 6px;
        position: relative;
}

#res-img-right-divgoods:hover {
    cursor: pointer;
    -webkit-box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
    border-radius: 10px;
}

.res-img-right-divimg {
    width: 150px;
    height: 150px;
    display: block
}

.res-img-right-grounp {
    display: flex;
    align-items: center;
    height: 22px;
    font-size: 12px
}

.res-img-right-span {
    font-size: 14px;
    color: #606266;
    font-weight: 500;
}

.res-img-right-span {
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
    color: #606266;
    font-weight: 500;
    display: inline-block;
    padding: 6px 10px 0px;
    box-sizing: border-box;
    font-weight: 400;
    color: #999;
}

.res-img-right-grounp>button {
    color: #606266;
}

.res-img-right-div {
    width: 150px;
    height: 200px;
    margin-left: 12px;
    border-radius: 10px;
    border: 1px solid #eee;
    margin-bottom: 12px;
    transition: all .2s
    /* */
}

.res-img-right-div:hover {
    /* border: 1px solid #000; */
    cursor: pointer;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}

.res-img-right-divimg {
    width: 150px;
    height: 150px;
    display: block;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
}

.res-img-rightshuxing{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #07d;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 6px;
    z-index:2
}

.res-img-rightshuxing::after{
        position: absolute;
    display: block;
    content: " ";
    right: 0;
    top: 0;
    border: 14px solid #07d;
    border-left-color: transparent;
    border-bottom-color: transparent;
    z-index: 1;
}
.titleimgshunum{
        position: absolute;
    right: 3px;
    top: 0;
    color: #fff;
    z-index: 2;
}
</style>