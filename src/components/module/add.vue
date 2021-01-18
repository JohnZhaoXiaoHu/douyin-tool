
<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start 自定义模块-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <storesecnavbar></storesecnavbar>

            <div class="p-main-goods-right">
                <!-- 商品中心内容 -->
                <div class="mh-moudel-div">
                    <!--中心内容-->
                     <div class="container">
                      <div class="component-small">
                        <div class="component-small-list">
                            <div class="mwx-inputparent">
                                <div class="wx-use-module mwx-input" style="margin-bottom:10px">
                                    <el-input v-model="customtxt" type="text" placeholder="自定义模块名称"></el-input>
                                </div>
                           </div>
                           <div v-on:click="smallComponentClick" :data-id="item.id" class="component-small-item" v-for="(item, index) in smallComponents" :key="index">
                            <div class="component-small-item-box">
                              <i class="fa fa-bandcamp component-small-item-icon"></i><span class="component-small-item-name">{{item.componentName}}</span>
                            </div>
                          </div>

                            <div class="wx-conmoent-btn"> 
                              <el-button type="primary" size='small' plain @click="savePage">保存</el-button>
                              <el-button type="primary" size='small' plain @click="closeCao">取消</el-button>
                           </div>



                        </div>
                      </div>
                      <div class="mh-module-style">
                          <div class="virtual-container" :style="{backgroundColor: pageCustomAttribute.backgroundColor, backgroundImage: 'url(' + pageCustomAttribute.backgroundImage + ')'}">
                          <!-- <div class="blank"></div> -->
                          <!-- <div v-on:click="pageAttributeClick" class="navgation-bar component" key="navgation-bar" :class="'navgation-bar' == active ? 'active' : ''">
                            <el-page-header :content="pageCustomAttribute.pageTitle"></el-page-header>
                          </div> -->
                          <div v-on:click="componentClick" :data-no="item.no" class="component" :class="item.no == active.no ? 'active' : ''" v-for="(item, index) in components" :key="item.no">
                            <div v-on:click.stop="componentRemove" :data-no="item.no" class="remove-component"><i class="fa fa-close"></i></div>
                            <div v-on:click.stop="componentUp" :data-no="item.no" class="up-component"><i class="el-icon-top"></i></div>
                            <div v-on:click.stop="componentDown" :data-no="item.no" class="down-component"><i class="el-icon-bottom"></i></div>
                            <customnav v-if="item.id == 2" :key="item.no" :config="item.content.config" :customStyle="item.content.customStyle" :datas="item.content.datas"></customnav>
                            <customgood v-if="item.id == 7" :key="item.no" :config="item.content.config" :customStyle="item.content.customStyle" :datas="item.content.datas" :group="item.content.group"></customgood>
                            <customswiper v-if="item.id == 1" :key="item.no" :config="item.content.config" :customStyle="item.content.customStyle" :datas="item.content.datas"></customswiper>
                            <customgoodgroup v-if="item.id == 8" :key="item.no" :config="item.content.config" :customStyle="item.content.customStyle" :datas="item.content.datas"></customgoodgroup>
                            <customrichtext v-if="item.id == 5" :key="item.no" :content="item.content"></customrichtext>
                            <customtimelimitbuy v-if="item.id == 10" :key="item.no" :config="item.content.config" :customStyle="item.content.customStyle" :datas="item.content.datas"></customtimelimitbuy>
                            <customtext v-if="item.id == 3" :key="item.no" :config="item.content.config" :customStyle="item.content.customStyle" :datas="item.content.datas"></customtext>
                            <customcube v-if="item.id == 9" :key="item.no" :config="item.content.config" :customStyle="item.content.customStyle" :datas="item.content.datas"></customcube>
                          </div>
                          </div>
                          <!-- over -->
                         </div>
                     	<div class="component-compile-form">
                      <div class="component-compile-form-box">
                        <custompageform key="navgation-bar" v-if="active == 'navgation-bar'" :pageCustomAttribute="pageCustomAttribute"></custompageform>
                        <customnavform :key="active.no" v-if="active.id == 2" :config="active.content.config" :customStyle="active.content.customStyle" :datas="active.content.datas"></customnavform>
                        <customgoodform :key="active.no" v-if="active.id == 7" :config="active.content.config" :customStyle="active.content.customStyle" :datas="active.content.datas" :group="active.content.group"></customgoodform>
                        <customswiperform :key="active.no" v-if="active.id == 1" :config="active.content.config" :customStyle="active.content.customStyle" :datas="active.content.datas"></customswiperform>
                        <customgoodgroupform :key="active.no" v-if="active.id == 8" :config="active.content.config" :customStyle="active.content.customStyle" :datas="active.content.datas"></customgoodgroupform>
                        <customrichtextform :key="active.no" v-if="active.id == 5" :content="active.content" :no="active.no"></customrichtextform>
                        <customtimelimitbuyform :key="active.no" v-if="active.id == 10" :config="active.content.config" :customStyle="active.content.customStyle" :datas="active.content.datas"></customtimelimitbuyform>
                        <customtextform :key="active.no" v-if="active.id == 3" :config="active.content.config" :customStyle="active.content.customStyle" :datas="active.content.datas"></customtextform>
                        <customcubeform :key="active.no" v-if="active.id == 9" :config="active.content.config" :customStyle="active.content.customStyle" :datas="active.content.datas"></customcubeform>
                      </div>
                    </div>

                    </div>
                    <!--中心 over-->
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

  import customtext from "./text/text.vue"
  import customtextform from "./text/textform.vue"
  import customcube from "./cube/cube.vue"
  import customcubeform from "./cube/cubeform.vue"
  import custompageform from "./pageAttribute/pageform.vue"


  import storesecnavbar from '../store/storesecnavbar';
  import customnav from "./nav/nav";
  import customnavform from "./nav/navform";
  import customgoodform from "./good/goodform";
  import customgood from "./good/good";
  import customswiper from "./swiper/swiper";
  import customswiperform from "./swiper/swiperform";
  import customgoodgroup from "./goodgroup/goodgroup";
  import customgoodgroupform from "./goodgroup/goodgroupform";

  import customtimelimitbuy from "./timelimitbuy/timelimitbuy";
  import customtimelimitbuyform from "./timelimitbuy/timelimitbuyform";

  
  import UTIL from "../../utils/utils";
  import Qs from 'qs';  
  import "../../../static/font/css/font-awesome.min.css";

  import navbar from '../navbar';
  import sidebar from '../sidebar';
  export default {
    name: "Index",
    mounted() {
      let self = this; //当前this指向 VueComponent
      let promises = new Promise(function(resolve, reject) {
        UTIL.vueRequest(self, "/miniprogram/wx/component/platform/get.do", "post", "json", self.$qs.stringify({}),
          "application/x-www-form-urlencoded",
          function(data) {
            console.log(data);
            if (data && data instanceof Array && data.length > 0) {
              self.smallComponents = data;
              resolve();
            }
            else {
              self.$message("组件库初始化失败");
            }
         }, undefined, undefined, "saas")
      });
      promises.then(function() {
            self.components = [];
      })
    },
    data() {
      return {
        customtxt:'',
        active: {},
        smallComponents: [],
        components: [],
        shop: 0,
        page: 0,
        pageType: 0,
        pageCustomAttribute: {}
        
      }
    },
    methods: {
      pageAttributeClick(event) {
        this.active = "navgation-bar";
      },
      smallComponentClick(event) {
        let id = event.currentTarget.dataset.id;
        let component = {};
        let no = event.timeStamp.toString();
        component.no = no;
        component.id = id;
        component.orderNum = this.components.length + 1;
        for (let i in this.smallComponents) {
          if (this.smallComponents[i].id == id) {
            component.content = JSON.parse(this.smallComponents[i].defaultContent);
            this.$set(this.components, this.components.length, component);
            this.active = component;
            break;
          }
        }
      },
      componentClick(event) {
        let no = event.currentTarget.dataset.no;
        if (no != this.active.no) {
          for (let i in this.components) {
            if (this.components[i].no == no) {
              this.active = this.components[i];
              break;
            }
          }
        }
      },
      componentRemove(event) {
        let no = event.currentTarget.dataset.no;
        let index= -1;
        for(let i in this.components) {
          if(this.components[i].no == no) {
            index = i;
            break;
          }
        }
        if(index >= 0) {
          this.components.splice(index, 1)
        }
        // this.components = this.components.filter(function(item) {
        //   return item.no != no;
        // })
        this.active = {};
      },
      componentUp(event) {
        let no = event.currentTarget.dataset.no;
        let index= -1;
        for(let i in this.components) {
          if(this.components[i].no == no) {
            index = i;
            break;
          }
        }
        if(index > 0 && index <= this.components.length - 1) {
          let prev = index - 1;
          this.components[prev] = this.components.splice(index, 1, this.components[prev])[0];
          for(let i in this.components) {
            this.components[i].orderNum = i + 1;
          }
        }
      },
      componentDown(event) {
        let no = event.currentTarget.dataset.no;
        let index= -1;
        for(let i in this.components) {
          if(this.components[i].no == no) {
            index = i;
            break;
          }
        }
        if(index <  this.components.length - 1 && index >= 0) {
          let next = parseInt(index) + 1;
          this.components[next] = this.components.splice(index, 1, this.components[next])[0];
          for(let i in this.components) {
            this.components[i].orderNum = i + 1;
          }
        }
      },
      closeCao(){
        this.$router.go(-1);
      },
      savePage() {
        //保存编辑的组件上传到服务器
        let self = this;
        let objs = []
        for(let i in this.components) {
          let obj = {}
          obj.id = i;
          obj.componentId = this.components[i].id;
          obj.orderNum = this.components[i].orderNum;
          obj.content = JSON.stringify(this.components[i].content);
          // obj.pageId = this.page;
          objs.push(obj);
        }



        UTIL.vueRequest(self, "/miniprogram/wx/custom/detail/add.do", "post", "json", self.$qs.stringify({content: JSON.stringify(objs),name:self.customtxt,description:'空'}),
          "application/x-www-form-urlencoded",
          function(data) {
            console.log(data);
            if(data.status == 200){
              self.$message.success('保存成功');
            }else{
               self.$message.error('保存失败');
            }
         }, undefined, undefined, "saas")
      },
     
    },
     components:{

        customnav,
        customnavform,
        customgoodform,
        customgood,
        customswiper,
        customswiperform,
        customgoodgroup,
        customgoodgroupform,
        customtimelimitbuy,
        customtimelimitbuyform,
        navbar,
        sidebar,
        storesecnavbar,
        customtext,
        customtextform,
        customcube,
        customcubeform,
        custompageform
      }
  }
</script>

<style scoped>

@import url("../../assets/css/base.css");
  .pmoudel-title{
    position: fixed;
    width: 345px;
    top: 173px;
    z-index: 999;
    background-color: #fff; 
    border-top-right-radius: 20px;
}
    .mwx-inputparent{
        width: 100%;
        display: flex;
        justify-content: center;
        margin: 20px 0 0px;
    }

  .mh-moudel-div{
    position: relative;
    height:100%
  }
  .component-small {
    height: 100%;
  }

  .component-small-list {
    width: 400px;
    background-color: #DDDDDD;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .component-small-list .component-small-item {
    flex: 0 0 50%;
    padding: 8px;
    cursor: pointer;
  }

  .component-small-list .component-small-item .component-small-item-box {
    border: 1px solid #EEEEEE;
    padding: 8px;
    display: flex;
    align-items: center;
  }

  .component-small-list .component-small-item .component-small-item-box .component-small-item-name {
    margin-left: 8px;
  }

  .component-compile-form {
    width: 450px;
    background-color: #DDDDDD;
    position: relative;
    height: 100%;
  }

  .component-compile-form .component-compile-form-box {
    position: absolute;
    left: 0px;
    top: 0px;
    overflow-y: auto;
    width: 100%;
    height: 100%;
  }

  .blank {
    width: 100%;
    height: 40px;
    background-color: #DDDDDD;
  }



  .container {
    font-size: 14px;
    box-sizing: border-box;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: center;
        height: 100% ;
        justify-content: space-between;
  }

  .mh-module-style{
    height: 665px;
    overflow: hidden;
    border-radius: 20px;
  }

  .component {
    padding: 20px 10px;
    box-sizing: border-box;
    border: 1px dotted #666666;
    position: relative;
    margin-top: 12px;
    cursor: pointer;
    position: relative;
    background-color: #EEEEEE;
  }
    .wx-conmoent-btn{
      width: 100%;
      display: flex;
      justify-content: center;
      margin: 10px 0 15px;
    }

  .component::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: transparent;
  }

  .component.active {
    border: 1px dotted #DD524D;
  }

  .virtual-container {
    background-color: #fff;
    position: relative;
    top: -18px;
    width: 370px;
    padding: 20px;
    font-size: 14px;
    margin-left: auto;
    margin-right: auto;
    height: 800px;
    overflow-y: auto;
    padding-top: 67px;
    padding-bottom: 150px;
    background-position: top;
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  .virtual-container::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

  .component.active .remove-component,.component.active .up-component,.component.active .down-component {
    display: flex;
  }

  .component .remove-component {
    display: none;
    position: absolute;
    right: -10px;
    top: -10px;
    width: 20px;
    height: 20px;
    align-items: center;
    justify-content: space-around;
    border-radius: 20px;
    border: 1px dotted #333333;
    font-size: 18px;
    color: #AAAAAA;
  }
  .component .up-component {
    position: absolute;
    right: -20px;
    top: 10px;
    width: 20px;
    height: 20px;
    display: none;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #333333;
    font-size: 18px;
    color: #AAAAAA;
  }
  .component .down-component {
    position: absolute;
    right: -20px;
    top: 30px;
    width: 20px;
    height: 20px;
    display: none;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #333333;
    font-size: 18px;
    color: #AAAAAA;
  }
  .save-page {
    position: absolute;
    bottom: 0px;
    left: 0px;
    /* height: 40px; */
    background-color: white;
    /* box-shadow: 0px -3px 3px #333333; */
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  .p-main-goods-right{
        flex-grow: 1;
    max-width: 100%;
    height: 100%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow-y: auto;
    padding: 20px 20px 0 20px;
    background-color: #f2f2f2;
    min-width: 822px;
  }
   
</style>
