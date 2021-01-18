<!--店铺导航组件-->
<template>
    <div class="main">
    <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <storesecnavbar></storesecnavbar>

            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                   <div class="goods-card_body">

                    <div class="store-head">店铺导航</div>

                    <div class="mh-store-title">
                        <h3>将导航应用在以下页面:</h3>
                        <div class="mh-store-title_checkbox">
                              <el-checkbox v-model="checked" @change="storenavhome">店铺首页</el-checkbox>
                              <el-checkbox v-model="checked1" @change="storenavhome">会员首页</el-checkbox>
                              <el-checkbox v-model="checked2" @change="storenavhome">商品分组</el-checkbox>
                              <el-checkbox v-model="checked3" @change="storenavhome">商品列表</el-checkbox>
                        </div>
                    </div>

                    <!--手机图片-->
                    <div class="goodset-wxphone-main">
                        <!--手机图-->
                      
                        <div class="goodset-wxphone">
                            <div class="goodset-wxphone-detail">商品详情</div>
                            <div class="goodset-wxphone-detail-main">
                                <div class="goodset-wxphone-main-bottom">
                                   <ul class="goodsset-wx-navb-syuleone" v-if="isshownavbar">
                                       <li @click="mhstorehome" :class="{ 'goodssetvcaactive': isActive1 }" :style="bgcolorstyle1">首页</li>
                                       <li @click="mhstorecategory" :class="{ 'goodssetvcaactive': isActive2 }" :style="bgcolorstyle2">分类</li>
                                       <li @click="mhshopping" :class="{ 'goodssetvcaactive': isActive3 }" :style="bgcolorstyle3">购物车</li>
                                       <li @click="mhmysql" :class="{ 'goodssetvcaactive': isActive4 }" :style="bgcolorstyle4">我的</li>
                                   </ul>

                                    <div class=" goodset-wx-mb-div-xx" v-if="isshownavbartwo">
                                        <div class="mh-tubaio-zhu" @click="mhstorehome" :class="{ 'goodssetvcaactive': isActive1 }" :style="bgcolorstyle1">
                                            <span :class="mhtabone" :style="activetubiao"></span>
                                            <span>主页</span>
                                        </div>
                                        <div class="mh-tubaio-zhu"  @click="mhstorecategory" :class="{ 'goodssetvcaactive': isActive2 }" :style="bgcolorstyle2">
                                            <span :class="mhtabtwo" :style="activetubiao"></span>
                                            <span>分类</span>
                                        </div>
                                        <div  class="mh-tubaio-zhu" @click="mhshopping" :class="{ 'goodssetvcaactive': isActive3 }" :style="bgcolorstyle3">
                                            <span :class="mhtabthere" :style="activetubiao"></span>
                                            <span>购物车</span>
                                        </div>

                                         <!-- <div  class="mh-tubaio-zhu" @click="mhshopping" :class="{ 'goodssetvcaactive': isActive3 }" :style="bgcolorstyle4">
                                              <span><i  class="el-icon-plus"></i></span>  -->
                                               <!-- <span :class="mhtabthere"></span>
                                            <span>购物车</span>
                                        </div> -->
                                    
                                         <div class="mh-tubaio-zhu" @click="mhmysql" :class="{ 'goodssetvcaactive': isActive4 }" :style="bgcolorstyle4">
                                            <span :class="mhtabfour" :style="activetubiao"></span>
                                            <span>我的</span>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <!--手机图over-->

                        <!--手机设置-->
                          <div>
                              <div class="store-wx-phont-right">
                                  <span class="store-wx-phont-right_span">在以下页面显示导航类型</span>
                                  <div class="store-wx-phont-right_div">
                                      <el-radio v-model="radiovalue" label="1" @change="testnavbar">纯文字导航</el-radio>
                                      <el-radio v-model="radiovalue" label="2" @change="testnavbar">小图标导航</el-radio>
                                  </div>  
                              </div>

                              <div class="store-wx-phont-right-bottom">
                                  <div class="store-wx-phont-right-bottom_div">
                                      <span class="store-wx-right-bottom_div_span">首页</span>
                                      <!-- <button  type="button" class="el-button el-button--text el-button--mini" style="float: right;"><span>删除导航</span></button> -->
                                  </div>

                                  <div class="store-navname_bottom">
                                      <div class="store-navname">
                                          <span class="store-navname_spanxx" style="width:81px">导航名称</span>
                                          <el-input v-model="nvabarname" @blur="Losefocus" placeholder="请输入内容"></el-input>
                                      </div>
                                      <span class="store-title-note">字数不超过4个汉字或8个字母</span>

                                      <div class="store-navname">
                                          <span class="store-navname_spanxx" style="width:68px">导航链接</span>
                                            <el-cascader                                                        
                                                v-model="newtreename"
                                                :options="newtree"
                                                :props="{ expandTrigger: 'hover',children:'children',value:'modulePath',label:'moduleName' }"
                                                @change="handleChangevalue"
                                            >
                                            </el-cascader>      

                                      </div>
                                      <span class="store-title-note">小程序不支持自定义链接</span>

                                      <div class="store-navname-color">
                                         <div class="store-navname-color_div">
                                             <span class="store-navname-color_div_span">激活背景颜色</span>
                                             <el-color-picker v-model="bgcolor" @change="actiebgvolor"></el-color-picker>
                                         </div>

                                         <div class="store-navname-color_div">
                                            <span class="store-navname-color_div_span">激活字体颜色</span>
                                            <el-color-picker v-model="textcolor"  @change="actietextvolor"></el-color-picker>
                                         </div>
                                      </div>

                                      <div class="store-navname-color">
                                          <div class="store-navname-color_div">
                                              <span class="store-navname-color_div_span">未激活的背景颜色</span>
                                              <el-color-picker v-model="nobgcolor"  @change="nobgcolormethod"></el-color-picker>
                                          </div>

                                          <div class="store-navname-color_div">
                                              <span class="store-navname-color_div_span">未激活的字体颜色</span>
                                              <el-color-picker v-model="notextcolor" @change="notextcolormethod">></el-color-picker>
                                          </div>
                                      </div>

                                      <div class="store-img" v-if="isshownavbartwo">
                                            <span class="store-img-active">激活图标</span>
                                            <div class="store-img-div">
                                                <i  :class="activeimg" :style="activetubiao"></i>
                                                <button @click="editimgmethod"  type="button" class="el-button icon-btn el-button--primary el-button--mini store-img-div_btn" style="margin-left:12px"><span>修改</span></button>
                                                <!-- <button  type="button" class="el-button icon-btn el-button--primary el-button--mini store-img-div_btn"><span>发布</span></button> -->
                                                <el-color-picker v-model="activecolorvalue" @change="colorchange"></el-color-picker>
                                            </div>
                                      </div>


                                      <div class="store-img" v-if="isshownavbartwo">
                                          <span class="store-img-active">未激活图标</span>
                                          <div class="store-img-div">
                                               <i  :class="weiactiveimg" :style="noactive.activebgcolor2"></i>
                                              <button  @click="weieditimgmethod"  type="button" class="el-button icon-btn el-button--primary el-button--mini store-img-div_btn"><span>修改</span></button>
                                              <!-- <button  type="button" class="el-button icon-btn el-button--primary el-button--mini store-img-div_btn"><span>发布</span></button> -->
                                              <el-color-picker v-model="noactive.notactivecolor2" @change="notactive"></el-color-picker>
                                          </div>
                                      </div>

                                  </div>
                              </div>
                          </div>
                        <!--手机设置over-->
                    </div>


                    <!--手机图片over-->

                    <div class="mh-storenav-tantile">  
                        <el-dialog title="选择图标" :visible.sync="editdialogFormVisible">
                            <div class="add-shop-cate">
                                <div class="mh-storen-tan">
                                
                                    <div v-for="(item,index) in shuxing" :key="index" @click="storexuanzeimg(index)" :style="imgstylecss" :class="item.data">
                                        <i :class="item.shu"></i>
                                    </div> 
                                    

                                </div>
                                <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                    <el-button @click="editdialogFormVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="editsscategory">确 定</el-button>
                                </div>
                            </div>
                        </el-dialog>   
                    </div> 

                    <div class="mh-storenav-tantile">  
                        <el-dialog title="选择图标" :visible.sync="editdialogFormVisible1">
                            <div class="add-shop-cate">
                                <div class="mh-storen-tan">
                                
                                    <div v-for="(item,index) in shuxing" :key="index" @click="weistorexuanzeimg(index)" :class="item.data" >
                                        <i :class="item.shu"></i>
                                    </div> 
                                    

                                </div>
                                <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                    <el-button @click="editdialogFormVisible1 = false">取 消</el-button>
                                    <el-button type="primary" @click="editsscategory">确 定</el-button>
                                </div>
                            </div>
                        </el-dialog>   
                    </div> 



                    <!--最下面保存-->
                    <div @click="submitData" class="goodset-wxphone-footer-bar"><button type="button" class="el-button el-button--primary el-button--small"><span>保存</span></button></div>
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
import storesecnavbar from './storesecnavbar';
import UTIL from "../../utils/api";
export default {
      data(){
        return{
            //未激样式
            noactive:{
                notactivecolor2:'',
                activebgcolor2:'color:#999;font-size:18px !important;display:block;margin-right:12px'
            },
            newtree:[],
            newtreename:[null,"page/index/index"],
            tupiangrounp:[],
            defaultProps: {
              children: 'children',
              label: 'moduleName'
          },
            activetubiao:"color: rgb(255, 58, 81);font-size:18px !important;display:block;",
            activecolorvalue:null,
            
            activeimg:'iconfont icon-img icon-gouwuche1',  //激活图标的class 属性
            weiactiveimg:'iconfont icon-img icon-gouwuche1',//未激活图标
            shuxing:[
            {id:1,shu:'iconfont active icon-shangchengshouye',data:{jinze:false}},
            {id:2,shu:'iconfont active icon-shangpin',data:{jinze:false}},
            {id:3,shu:'iconfont active icon-kefu',data:{jinze:false}},
            {id:4,shu:'iconfont active icon-shenqing',data:{jinze:false}},
            {id:5,shu:'iconfont active icon-shoucang',data:{jinze:false}},
            {id:6,shu:'iconfont active icon-kefuzhongxin',data:{jinze:false}},
            {id:7,shu:'iconfont active icon-gouwuche1',data:{jinze:false}},
            {id:8,shu:'iconfont active icon-fenxiao2',data:{jinze:false}},
            {id:9,shu:'iconfont active icon-fenlei',data:{jinze:false}}
            ],
    
            editdialogFormVisible:false,
            editdialogFormVisible1:false,
            nvabarname:'首页' ,
            checked:true,
            checked1:true,
            checked2:true,
            checked3:true,

            isActive1:true,
            isActive2:false,
            isActive3:false,
            isActive4:false,

            color2:'',
            options: [{
            value: '1',
            label: '主页'
            }, {
            value: '2',
            label: '商品分类'
            }, {
            value: '3',
            label: '购物车'
            }, {
            value: '4',
            label: '我的'
            }],
            value: '',
            radiovalue:'1',  //切换导航样式
            isshownavbar:true,
            isshownavbartwo:false,

            //激活背景颜色
            bgcolor:'#fff',
            bgcolorstyle1:'',
            bgcolorstyle2:'',
            bgcolorstyle3:'',
            bgcolorstyle4:'',

            navbarstates:1, // 默认选中nvabar状态  1  2 3 4  
            //字体颜色
            textcolor:'#000',
            nobgcolor:'',
            notextcolor:'#eee',

            //tab 图片class
            mhtabone:'iconfont icon-shangchengshouye',
            mhtabtwo:'iconfont icon-gouwuche1',
            mhtabthere:'iconfont icon-erweima',
            mhtabfour:'iconfont icon-erweima',

            imgstylecss:'',
            page:[],

            navbarstatesone:[null,"page/index/index"],
            navbarstatestwo:[null,"page/category/category"],
            navbarstatestere:[null,"page/cart/cart"],
            navbarstatesfour: [null,"page/component/user/user"],

            nameOne:'首页',
            nameOTwo:'分类',
            nameThere:'购物车',
            nameFour:'我的'         
        }
        },    
        mounted(){
            this.selectAllAddress();
            this.getshopnote();
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
      methods:{
         //查询店铺信息
         getshopnote(){
                let that = this; 
                let data = new FormData();          
                this.$http({
                    method: "get",
                    url:UTIL.PIP+'/miniprogram/wx/shop/get.do?openId='+that.$cookie.get('openId'),
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${that.$cookie.get('token')}`}
                })
                .then(function(res){
                    let list = res.data.data;
                    delete list.pages;         
                    that.page = list;  
                }); 
            },
          notactive(){
              this.noactive.activebgcolor2 = 'color:'+this.noactive.notactivecolor2+';font-size:18px !important;display:block;margin-right:12px';    
          },
          //提交
          submitData(){
            let that = this;
            let newData = that.page.wxUserShopNavigations;
            let newArr = [that.navbarstatesone,that.navbarstatestwo,that.navbarstatestere,that.navbarstatesfour];             
            let twoNewArr = [that.nameOne,that.nameOTwo,that.nameThere,that.nameFour];  
            newData.forEach(function(item,index){
                        console.log(newArr[index]);
                item.navigationName = twoNewArr[index];    
                item.navigationHref =  newArr[index][newArr[index].length-1];;
            })
            let data = new FormData();
            data.append('content',JSON.stringify(that.page)); 
        
            this.$http({
                method: "post",
                url: UTIL.PIP+'/miniprogram/wx/shop/put.do?openId='+that.$cookie.get('openId'),
                data: data,
                headers: { "Content-Type": "multipart/form-data",Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                if(res.status == 200 && res.data.status ==200){
                that.$message.success('保存成功');
                }else{           
                that.$message.success(res.data.message);
                }        
            }).catch((err)=>{
                console.log( that.$message.success("服务器开小差了"));
            })
                
          },
          handleChangevalue(val){
              console.log(val);
              let newArr = val[val.length-1];
              if(this.navbarstates ==1 ){
                 this.navbarstatesone =   val 
              }else if(this.navbarstates ==2){
                  this.navbarstatestwo = val;
              }else if(this.navbarstates ==3){
                  this.navbarstatestere = val;
              }else{
                  this.navbarstatesfour = val;
              }
          
          },
          Losefocus(){
            if(this.navbarstates ==1 ){
                 this.nameOne =   this.nvabarname 
              }else if(this.navbarstates ==2){
                  this.nameOTwo =   this.nvabarname 
              }else if(this.navbarstates ==3){
                 this.nameThere =   this.nvabarname 
              }else{
                 this.nameFour =   this.nvabarname 
            } 
          },
        //请求地址接口
        selectAllAddress(){
            let that  = this; 
            let data = new FormData();          
            this.$http({
                method: "get",
                url:UTIL.PIP+'/miniprogram/wx/module/get.do?parentId=-1&openId='+that.$cookie.get('openId'),
                data: data,
                headers: { "Content-Type": "multipart/form-data", Authorization:`Bearer ${that.$cookie.get('token')}`}
            })
            .then(function(res){
                console.log(res.data.data);
                let list = res.data.data;
                that.newtree =  that.toTree(list);          
            }).catch(function(res){
              console.log(res);
            }) ; 
         },

        //激活图标颜色
        colorchange(){
            this.activetubiao = "color:"+this.activecolorvalue+";font-size:18px !important;display:block;"
        },

        //数的数据遍历
        toTree(data) {
            // 删除 所有 children,以防止多次调用
            data.forEach(function (item) {
                delete item.children;
            });
    
            // 将数据存储为 以 id 为 KEY 的 map 索引数据列
            var map = {};
            data.forEach(function (item) {
                map[item.id] = item;
            });
            //        console.log(map);
            var val = [];
            data.forEach(function (item) {
                // 以当前遍历项，的pid,去map对象中找到索引的id
                var parent = map[item.parentId];
                // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
                if (parent) {
                    (parent.children || ( parent.children = [] )).push(item);
                } else {
                    //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
                    val.push(item);
                }
            });
            return val;
        },
   
        //导航切换
        storenavhome(){
            this.$message({
                showClose: true,
                message: '操作成功',
                type:'success',
                duration:600
            });
        },
        storenavbaocun(){
            this.$message.success('保存成功');    
        },
        //未激活图标
        weieditimgmethod(){
            this.editdialogFormVisible1 = true;
        
        },
        //点击选取未激活图片
        weistorexuanzeimg(index){
            for(let i = 0 ;i<this.shuxing.length;i++){
                if (i == index) {
                    this.shuxing[index].data.jinze = true;
                    } else {
                        this.shuxing[i].data.jinze = false;
                    }
                }
                this.weiactiveimg = this.shuxing[index].shu;
        },
        //选取图片点击保存  
        editsscategory(){
            this.editdialogFormVisible = false;
            this.editdialogFormVisible1 =false;
        },
        //点击选择图片
        storexuanzeimg(index){
            for(let i = 0 ;i<this.shuxing.length;i++){
                if(i == index){
                    this.shuxing[index].data.jinze = true;
                }else{
                    this.shuxing[i].data.jinze = false;
                }
            }
     
            // this.shuxing[index].data.jinze = true;
            this.activeimg = this.shuxing[index].shu;
            if( this.navbarstates == 1){
               this.mhtabone = this.shuxing[index].shu;
            }else if(this.navbarstates == 2){
                this.mhtabtwo = this.shuxing[index].shu;
            }else if(this.navbarstates == 3){
                this.mhtabthere = this.shuxing[index].shu;
            }else{
                this.mhtabfour = this.shuxing[index].shu;
            } 
        },
        editimgmethod(){
            this.editdialogFormVisible = true;
        },
        //未选背景颜色
        nobgcolormethod(){

        },
        //未选字体颜色
        notextcolormethod(){

        },
        //背景颜色
        actiebgvolor(){    
            if( this.navbarstates == 1){
                 this.bgcolorstyle1 = 'background-color:'+this.bgcolor + ';'+'color:'+this.textcolor; 
            }else if(this.navbarstates == 2){
                this.bgcolorstyle2 = 'background-color:'+this.bgcolor + ';'+'color:'+this.textcolor; 
            }else if(this.navbarstates == 3){
                  this.bgcolorstyle3 = 'background-color:'+this.bgcolor + ';'+'color:'+this.textcolor; 
            }else{
                this.bgcolorstyle4 = 'background-color:'+this.bgcolor + ';'+'color:'+this.textcolor; 
            }             
        },
        actietextvolor(){
            if( this.navbarstates == 1){
                this.bgcolorstyle1 = 'background-color:'+this.bgcolor + ';'+'color:'+this.textcolor; 
            }else if(this.navbarstates == 2){
                this.bgcolorstyle2 = 'background-color:'+this.bgcolor + ';'+'color:'+this.textcolor; 
            }else if(this.navbarstates == 3){
                this.bgcolorstyle3 = 'background-color:'+this.bgcolor + ';'+'color:'+this.textcolor;   
            }else{
                this.bgcolorstyle4 = 'background-color:'+this.bgcolor + ';'+'color:'+this.textcolor; 
            }     
        },
        //风格样式切换事件
        testnavbar(){
            if(this.radiovalue ==1){
                this.isshownavbar = true;
                    this.$message({
                    showClose: true,
                    message: '操作成功',
                    type:'success',
                    duration:800
                });
                this.isshownavbartwo = false;
            }else{
                this.isshownavbartwo = true;
                    this.$message({
                    showClose: true,
                    message: '操作成功',
                    type:'success',
                    duration:800
                });
                this.isshownavbar = false;
            }  
        },
        mhstorehome(){
            this.navbarstates = 1,
            this.newtreename =this.navbarstatesone;
            this.nvabarname = this.nameOne;
            this.isActive1=true;
            this.isActive2=false;
            this.isActive3=false;
            this.isActive4=false
        },
        mhstorecategory(){
            this.navbarstates = 2,
            this.newtreename = this.navbarstatestwo;
            this.nvabarname = this.nameOTwo;
            this.isActive1=false;
            this.isActive2=true;
            this.isActive3=false;
            this.isActive4=false
        },
        mhshopping(){
            this.navbarstates = 3,
            this.newtreename = this.navbarstatestere;
            this.nvabarname = this.nameThere;
            this.isActive1=false;
            this.isActive2=false;
            this.isActive3=true;
            this.isActive4=false
        },
        mhmysql(){
            this.navbarstates = 4,
            this.newtreename = this.navbarstatesfour;
            this.nvabarname = this.nameFour;
            this.isActive1=false;
            this.isActive2=false;
            this.isActive3=false;
            this.isActive4=true
        }
    },
    components:{
        navbar,sidebar,storesecnavbar    
    }
}
</script>

<style>
.jinze{
         border: 2px solid #ff5f85 !important;
}
.mh-storenav-tantile .el-dialog__title{
    font-size: 14px;
}
.mh-storen-tan{
    margin-bottom: 22px;
    display: flex;
    flex-wrap: wrap;
}
.mh-storen-tan>div{
  width: 60px;
    height: 60px;
    border: 1px solid #e5e5e5;
    display: inline-block;
    margin-right: 10px;
    text-align: center;
    position: relative;
    margin-bottom: 18px;  box-sizing: border-box;
}
.mh-storen-tan>div:hover{
border: 2px solid #ff5f85 !important;
box-sizing: border-box;
}

.mh-storen-tan>div>i{
    font-size: 50px !important;
    cursor: pointer;

   
}
.mh-tubaio-zhu{
    width: 25% !important;
    border-left: 1px solid #e7e7eb;
    
}
.goodset-wx-mb-div-xx{
    width: 100% !important;
    display: flex;
     font-size: 12px;
    color: rgb(153, 153, 153);
    font-weight: 400;
    align-items: center;
    
}
.goodset-wx-mb-div-xx>div{
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
 
    font-weight: 400;
    text-align: center;
    height: 42px;
    width: 49px;
    cursor: pointer;
}
.store-navname_spanxx{
    display: inline-block;
    text-align: right;
    color: #606266;
    font-size: 12px;
    margin-right: 13px;
}
.goodsset-wx-navb-syuleone{
      height: 100%;
      width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;

}
.goodsset-wx-navb-syuleone>li{
    height: 100%;
    width: 25%;
    display:flex;
    align-items: center;
    justify-content: center;
    border-left: 1px solid #e7e7eb;
    font-family: 微软雅黑,'microsoft yahei',宋体,新宋体,sans-serif;
    font-size: 12px;
    cursor: pointer;

}
.goodssetvcaactive{
    border: 1px solid #ff557d !important;
}
    .mh-store-title_checkbox .el-checkbox__label{
        font-size: 12px;
    }
    .mh-store-title>h3{
        font-size: 12px;
        margin-bottom: 10px;
    }
    .mh-store-title{
        margin-bottom: 20px;
    }
   .store-head {
    display: flex;
    justify-content: flex-start;;
    align-items: center;
    padding:0 20px 18px 0px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
    color: #303133;
    font-size: 12px;
    margin-bottom: 40px;

}

.store-wx-phont-right_span{
    color: #303133;
    display: inline-block;
    font-size: 12px;
    margin-bottom: 15px;
}
.store-wx-phont-right{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    min-width: 520px;
    padding: 20px;
    box-sizing: border-box;
    height: 102px;
    margin-bottom: 25px;
}

.store-wx-phont-right-bottom{
    min-width: 520px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border: 1px solid #ebeef5;
    height: 609px
;

    color: #303133;
}
.store-wx-phont-right-bottom_div{
    padding: 18px 20px;
    border-bottom: 1px solid #ebeef5;
    box-sizing: border-box;
}
.store-navname{
    display: flex;
    align-items: center;
    padding-left: 30px;
    box-sizing: border-box;

}
.store-navname .el-select__caret{
    line-height: 32px;
}
.store-navname .el-input__inner{
    height: 32px;
    line-height: 32px;
    width: 338px;
}
.store-title-note{
    color: #666;
    font-size: 12px;
    width: 100%;
    padding-left: 130px;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    margin-bottom:15px;
}

.store-navname_bottom{
    padding: 20px;
    box-sizing: border-box;

}
.store-navname-color{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}

.store-navname-color_div {
    display: flex;
    align-items: center;
    color: #606266;
    font-size: 12px;
    margin-right: 33px;
}
.store-navname-color_div_span{
    text-align: right;
    color: #606266;
    font-size: 12px;
    width: 115px;
    margin-right: 13px;
}

.store-img{
    display: flex;
    align-items: center;
    margin-bottom: 12px;
}
.store-img-active{
    color: #606266;
    font-size: 12px;
    display: inline-block;
    text-align: right;
    width: 113px;
    margin-right: 13px;
}
.store-img-div_img{
    width: 30px;
    height: 30px;
    margin-right: 10px;
}
.store-img-div{
    display: flex;
    align-items: center;
}

.store-img-div_btn{
    margin-right: 20px;
}
.store-wx-right-bottom_div_span{
    font-size: 12px;
} 
</style>