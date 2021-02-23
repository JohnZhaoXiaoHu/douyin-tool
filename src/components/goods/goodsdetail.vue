<template>
  <div class="main" id="goodsissuemain">
    <sidebar></sidebar>
    <!--主体 start-->
    <div class="main-right">
      <navbar></navbar>
      <!--二级导航栏 -->
      <div class="main-goods">
        <secnavbar></secnavbar>
        <div class="main-goods-right">
          <!-- 商品中心内容 -->
          <div class="goods-card_body" id="fabushop">
              <div class="g-card_top">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/' }">商品管理</el-breadcrumb-item>
                  <!-- <el-breadcrumb-item>添加商品</el-breadcrumb-item> -->
                  <el-breadcrumb-item>编辑商品</el-breadcrumb-item>
                </el-breadcrumb>
              </div>

              <div class="g-issue">
                <div class="g-is-state">
                  <div class="mh-shopfabu-header">
                    <el-steps :active="1">
                      <el-step title="编辑商品信息" icon="el-icon-edit"></el-step>    
                      <el-step title="编辑商品详情" icon="el-icon-upload"></el-step>
                    </el-steps>
                  </div>
                </div>
              </div>

              <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
                  <el-tab-pane label="基本信息" name="first">
                    <div class="el-form">
                      <div class="gf-form-div">
                      
                        <div :class="[{'g-type-ul':obj.flog,'gf-type-active':obj.flogone}]">
                          <ul @click="shiwugoods(1)">
                            <li class="g-type-name">实物商品</li>
                            <li class="g-type-huo">（物流发货）</li>
                          </ul>
                          <i class="el-icon-success g-type-img"></i>
                        </div>                     

                      </div>

                    </div>

                    <div>
                          <div class="df-basic">
                          <div class="df-basic_row el-form-item is-required">
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">商品名：</label>
                            <input type="text" autocomplete="off" class="el-input__inner" v-model="name" />
                          </div>

                          <div class="df-basic_row el-form-item">
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">分享描述备注：</label>
                            <input type="text" autocomplete="off" class="el-input__inner" v-model="shareName"/>
                          </div>


                          <!-- 商品主图必填 -->
                          <div class="df-basic_row el-form-item xxxx is-required" >
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">商品主图：</label>
                            <div style="width: 80%" class="oooo" >
                                <!-- <img :src="goodsfenimg" alt="" v-if="goodsfenimg!=''" class="oooo_img" > -->
                                <div class="mh-goodsissue-goodsimg" style="position: relative;"  v-for="(itemimg,indeximg) of goodsMainImgList" :key="indeximg"> 
                                  <i  @click="delectimg(indeximg, 1)" class="el-icon-close " style="position: absolute;right: 6px;top: -5px;cursor: pointer;color:red"></i>
                                  <img :src="itemimg" alt=""  >
                                </div>

                                <div class="mh-goods-resimg"  @click="fenhgmiantu"> 
                                  <i class="el-icon-plus mh-goods-resimg-i"></i>
                                </div>
                              </div>   
                          </div>

                            <!-- 商品图图必填 -->
                          <!-- <div class="df-basic_row el-form-item xxxx is-required" >
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">商品图：</label>
                            <div style="width: 80%" class="oooo" >
                                <img :src="goodsfenimg" alt="" v-if="goodsfenimg!=''" class="oooo_img" >
                                <div class="mh-goods-resimg"  @click="fenhgmiantu"> 
                                <i   class="el-icon-plus mh-goods-resimg-i"></i>
                                </div>
                              </div>                  
                          </div> -->
                          <!-- 商品图： -->
                          <!-- <div class="df-basic_row el-form-item xxxx is-required" >
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">商品图：</label>
                            <div style="width: 80%" class="oooo" >
                                <div class="mh-goodsissue-goodsimg" style="position: relative;"  v-for="(itemimg,indeximg) of sonurl" :key="indeximg"> 
                                  <i  @click="delectimg(indeximg)" class="el-icon-close " style="position: absolute;right: 6px;top: -5px;cursor: pointer;color:red"></i>
                                  <img :src="itemimg" alt=""  >
                                </div>
                                
                                <div class="mh-goods-resimg"  @click="getsonimg"> 
                                <i  class="el-icon-plus mh-goods-resimg-i"></i>
                                </div>
                              </div>                  
                          </div> -->


                          </div>


                          <div class="gf-more">
                            <div class="mh-goodsgf-more"  @click="show4 = !show4">  
                                <span>更多设置</span>
                                <i :class="{'el-collapse-item__arrow':true,'el-icon-arrow-right':true,'is-active':show4}"></i>
                            </div>
                          </div>
                          <el-collapse-transition>
                        <div v-show="show4">
                            <div class="df-basic_row el-form-item pppp">
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">商品分类：</label>
                            <div class="block" style="width:500px">
                              <el-select v-model="catevalue" placeholder="请选择">
                                <el-option v-for="item in shopcategory"
                                  :key="item.id"
                                  :label="item.name"
                                  :value="item.id">
                                </el-option>
                              </el-select>

                            </div>
                          </div>

                          <div class="df-basic_row el-form-item is-required">
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">商品卖点：</label>
                            <input type="text" autocomplete="off" class="el-input__inner" v-model="maidian" style="flex:1"/>
                          </div>
                          <br><br><br><br><br><br>

                        </div>
                      </el-collapse-transition>
                    </div>
                  
                  </el-tab-pane>
                  <el-tab-pane label="价格库存" name="second">
                    <div class="df-kucun">
                      

                      <div class="df-basic_row el-form-item">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">商品规格：</label>
                        <div style="width: 88%">
                          <div v-if="isshowgglist">
                  
                              <test ref="refgui" :isSupplierGoods="isSupplierGoods" 
                              :mhqdaoflag="mhqdaoflagsTATUS"  
                              :protableData="tableDataone"  
                              :prospecArr="specArrtwo" 
                              :proallData="thereallData">
                                  <!--规格View  -->
                              </test>

                            </div>
                            <button v-if="addgoodsisshow" @click="goodsguilist" type="button" class="el-button el-button--default el-button--mini" >
                            <span>添加规格项目</span>
                          </button> 
                        </div>
                      </div>

                      <div class="df-basic_row el-form-item is-required">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">价格</label>
                          <div class="df-kucun-price">
                            <div>
                              <el-input placeholder="请输入价格" v-model="viprice"  :disabled="xuanzeshuxi" type='number'>
                                <template slot="prepend">￥</template>
                              </el-input>
                            </div>
                            
                          </div>
                      </div>
                      

                      <div class="df-basic_row_new el-form-item is-required">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">划线价：</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small" style="width: 25%;">
                            <input type="number" autocomplete="off" class="el-input__inner" v-model="zhekoujia" />
                          </div>
                          <div class="tips el-col el-col-24 df-tps-zi">商品没有优惠的情况下，划线价在商品详情会以划线形式显示</div>
                        </div>
                      </div>

                      <div class="df-basic_row_new el-form-item">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">重量：</label>
                        <div class="el-form-item__content" style="margin-left: 150px dispaly:flex;">
                          <div class="el-input el-input--small" style="width: 25%;  dispaly:flex;">
                            <input type="number" autocomplete="off" class="el-input__inner" v-model="shopweight" />
                            <div class="">克</div>
                          </div>
                          
                        </div>
                      </div>

                      <br><br><br>

                    </div>

                  </el-tab-pane>

                  <el-tab-pane label="商品图片详情" name="third">
                      <div class="gf-qita">
                       -
                      </div>
                      <div>
                        <!-- 商品描述图必填 sonurl-->
                          <div class="df-basic_row el-form-item xxxx is-required" >
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">商品描述图：</label>
                            <div style="width: 80%" class="oooo" >
                                <div class="mh-goodsissue-goodsimg" style="position: relative;"  v-for="(itemimg,indeximg) of goodsDetailImgList" :key="indeximg"> 
                                  <i  @click="delectimg(indeximg, 2)" class="el-icon-close " style="position: absolute;right: 6px;top: -5px;cursor: pointer;color:red"></i>
                                  <img :src="itemimg" alt=""  >
                                </div>
                                
                                <div class="mh-goods-resimg"  @click="getsonimg"> 
                                  <i  class="el-icon-plus mh-goods-resimg-i"></i>
                                </div>
                            </div>
                          </div>
                      </div>

                      <div class="goodsDetailView">
                        <el-table class="sonurlImgListView" :data="sonurlImgList" border>
                          <el-table-column prop="date" label="商品详情预览" align="center" >
                            <template slot-scope="scope">
                              <div > 
                                <img class="sonurlImgView" :src="scope.row.imgUrl" alt="" srcset="">
                              </div>
                            </template>
                          </el-table-column>
                        </el-table>
                      </div>
                      <br><br><br>
                  </el-tab-pane>


              </el-tabs>     

    
              <div class="footer-bar fix" style="position: absolute; z-index: 100;">
                <button @click="baocunreqgoods" type="button" class="el-button el-button--primary el-button--small">
                  <span>保存</span>
                </button>
                <!-- <button  @click="baocunreq"  type="button" class="el-button el-button--default el-button--small" >
                  <span>下一步</span>
                </button> -->
              </div>
              <!-- 发布商品中心 -->
            </div>
          </div>


          <!-- 弹框： 模板列表-->
                    <el-dialog title="模板列表" :visible.sync="ft_tableDialogVisible" width="700px">
                        <div class="gq_zmtuanId">
                            <freightTemplate_list ref="ftList" :tableData="ft_tableData" :totalCount="totalCount" 
                            @ftl_ToFatherSelect="ft_selectBackClick" 
                            @pageMethodSon="ft_fatherPage">
                            </freightTemplate_list>
                        </div>
                        <div slot="footer" class="dialog-footer">
                            <el-button type="primary" @click="ft_closeclick">确认</el-button>
                        </div>
                    </el-dialog>

          <!-- 弹窗：资源图片 -->
          <imgsrc ref="imgsrc"> </imgsrc>
          <imgsrc2 ref="imgsrc2"> </imgsrc2>

          <videoson ref="videoson"> </videoson>


          <!-- 商品中心over-->
        </div>
      </div>
      <!--        -->
    </div>
    <!--主体 over-->

  
</template>

<script>
import navbar from "../navbar"; 
import sidebar from "../sidebar";
import imgsrc from "../resource/imgsrc";
import imgsrc2 from "../resource/imgsrc";

import videoson from "../resource/video";
import secnavbar from "./secnavbar";
import baseapi from '../../utils/api';
import test from './test';
import freightTemplate_list from './goods_freightTemplate_list';
import {    
        zm_jsonToString,
        zm_formDataToString, zm_formDataToJson
    } from "../../filters/zm_tools"


export default {
  el : '#goodsissuemain',
  data() {
    return {
      //模板列表 弹框
          ft_Id: '',
          ft_name: '请选择运费模板',
          ft_reightTemplate: '',
          ft_tableDialogVisible: false,
          ft_tableData: [],
      // //
      // goodsfenimg:'',
       // 1.商品主图、2.商品详情预览图
        selectImgType: 1,
        goodsfenimg:'',
        sonurl:[],
        openimgsrc1: false,
        goodsMainImgList: [],
        sonurl2:[],
        openimgsrc2: false,
        goodsDetailImgList: [],
        sonurlImgList:[],
      obj:{
        flog:true,
        flogone:true,
        flogtwo:false,
        flogthree:false,
        flogfour:false
      },
      activeName: 'first',
      basexiaoling:0,
      // onupclass:'1',
      goodsnum:0,
      qudaoshang1:   [ ],
      qudaoshang2:   [ ],
      qudaoshang3:   [ ],
      // integralIsdeposit:'1',
      wuliyouValue:'1',
        addspv:'',
        xuanzeshuxi:false,
        xuanzeshuxi2: false, //选择属性
      addgoodsisshow:true,
   
      //先
      firstsx:'',
      //规格
      guigearr:[{id:1,name:'*价格'},{id:2,name:'*库存'},{id:3,name:'*规格编码'},{id:4,name:'*供货价'},{id:5,name:'*成本价'},{id:6,name:'*分销价'}],

      spvarr:["spv1","spv2","spv3","spv4","spv5"],
      spv1:'',
        spv2:'',
          spv3:'',
            spv4:'',
              spv5:'',
                spv6:'',
                  spv7:'',
                    spv8:10,
                      spv9:'', 
                       spv10:'',
      vipitemid:'',
      //推客等级
      tuikedengji:[],
      //规格值数组
      ggzarr:[{
            price: '' ,
            inventoryTotal: '' ,
            inventoryUnit: '' ,
            priceDiscount: '' ,
            weight: '' ,
            isShowInventory: 1 ,
            isMemberDiscount: false ,
            // isMemberDiscountvale:0,
            isVirtual: "1",
            inventoryVirtualMin: 1 ,
            priceCost: '' ,
            priceSupplierSupply: '' ,
            pricePlatform: '' ,
          
            imgReqName: 1 ,
            spuImgs:'',
            guigezhivalue:"",
            pv: [
              {pId: null,pName: null , vId: null, vText: null,img:'' }
              ] 
            }],
        //属性值循环数据
        isshowgglistarr:[],

        guigeimg:[],
      jinebiliefanyong:true, //会员价
        accuseitem: {},
      accuseVisible: false,
        isshowgglist :false,

        typetate:false,
      //商品属性
      guigearrlist:[],
      guigezhilist:[],
      value: '',
        shuxinvalue:'',   //规格绑定的value
        guigezhivalue:'', //绑定的属性值
      qudaoArr:[],
      //发布接口数据
      netimgUrl:'1',
      //快递是否显示
      iskuaidishow:true,
      iskuaidishowtwo:false,
      yugou:false,
      suserId: 1, //saas id
    
      name: "", //spu名称  1.为实物商品   2.为虚拟商品

      //运费
      yiyoufei:"1",
      youfeivalue:0,
      isyfmoban:true,
      isyfmoban1:false,

      // isqudaoxiaosou:false,
      isVirtual: "1",  //虚拟库存
      skus: [
          {
            price: '' ,
            inventoryTotal: '' ,
            inventoryUnit: '',
            priceDiscount: '' ,
            weight: '',
            isShowInventory: 1 ,
            isMemberDiscount: false ,
            // isMemberDiscountvale:0,
            isVirtual: "1",
            inventoryVirtualMin: 1 ,
            priceCost: '' ,
            priceSupplierSupply: '' ,
            pricePlatform: '' ,
            imgReqName: 1 ,
           pv: [
             {pId: 111,pName: 111 , vId: 111, vText: 111,img:'' }
             ] 
           }],
      preorder: [
        { isPreorder: 11 },
        { handsel: 10 },
        { deduction: 10 },
        { presellEndtime: 1582619911 },
        { deliverStarttime: 1582619911 },
        { deliverEndtime: 1582619911 }
      ], //说明字段
      // limitUserids: [1, 2, 3, 4, 5], // 限制每人的购买件数
      commissionFollowSys: 1, //计算佣金是否跟谁系统 1.是 0 否
      chIsCommission: 1, //渠道商是否返佣  1：按佣金金额或比例返佣。2：按积分返佣。3：按佣金金额或比例与积分返佣
      rcmIsCommission: 0, //推客是否返佣 1是 0否
      chXsjIsCommission: 0, //渠道商销售奖是否返佣 1是 0否

      shareName: "", //分享描述备注
      buyingPoint: "11", //买点
      categoryId: 111, //分类ID
      groupId: 111, //分组ID
      brandId: 111, //品牌ID
      // isshowComment: false, //是否展示评论  1：是。0：否
      postageType: 1, //邮费类型  1：统一邮费，2：邮费模板，3：自提
      postagePrice: 10, //邮费  选择统一邮费时必填
      putawayTimestart: 11, //上架时间
      putawayTimeend: 11, //下架时间
      integralNeet: 11, //所需积分
      // integralIsdeposit: 1, //是否参与积分抵现 1.是 0 否
      integralDepositper: 10, //积分抵现百分比
      serviceFeetype: 1, //服务费类型  1：金额，2：百分比
      serviceFee: 10, //服务费

      isneedRemark: '1', //留言是否必填0：否，1：是
      // videoFile: "", //上传视频时填入，文件file类型
      imgsFile: "", //多个图片文件（数组）文件file类型
      input1: "1",
      input: "11",
      value1: 1,
      checked: false,
      imageUrl: "",
      radio: "1",
      value: [],
      props: { multiple: true },
    
      value2: [],
      input: 1,
      value: "",
      // gysvalue:'',

      //实物goods  
      isxu:true,
      //虚拟goods
      isshiwu:false,
      // show33: true,
      // show3: false,
      show4: true,
      show5: true,
      // show6: false,
      // show7: false,
      show8: false,
      show9: false,
      show10: false,
      show11: false,
      show12:false,
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        //上架时间
        shangjiatime:'1',
        xiajiatime:'',
        isjifenbuy:'',
        fuwufei:1,
        waivideourl:'',
        qudaoxiaosou:"0",
        maidian:'',
      
        // chengmoney:null,
        // //分销价
        // ptMoney:null,
        // //供货价
        // gonghuomoney:null,
        //
        viprice:'',
        priceMember:'',
        inventoryTotal:'',
        kucundan:'件',
        // 折扣价 null
        zhekoujia:null,
        isMemberDiscount:1,
        // vipxuniku:0,
        // xunigou:null,
        qudaogoodsprice:null,
        shopweight:null,
        //商品分类（供应商商品类型 0普通 3虚拟 6玉石闪购 7云闪购）
        shopcategory:[
          { id: 0,
            name: '普通'
          },
          { id: 3,
            name: '虚拟'
          },
          { id: 6,
            name: '玉石闪购'
          },
          { id: 7,
            name: '云闪购'
          }
        ],
        catevalue:'',  
        type: 1, //商品类型 1.实物  2.虚拟
        upsahngjiatime:[], // 上下架时间
        isshowuptime:false,

        qudaoshang:[],//渠道商等级
        diffindex:1,
        showsonvdeio:false,
        // sonpath:'',
        sonaccuseVisible :false,
        goodsisuserTwoUrl:'',
        suinde:0,
        vipdengjiid:[],
        skuvipdengjiid:[],
        skupriceindex:0,
        bsegoodsid:0,
        skusdata:[],
        editskuidArr:[],
        typeThere:false,
        mhqdaoflagsTATUS:true,
        tableDataone:[],
        specArrtwo:[],
        thereallData:[],
        zhongoneArr:[],
        zhongtwoArr:[],
        zhongthrereArr:[],
        goodsDetail: '',
        supplierId: '',
        isSupplierGoods: false,
    };
  },
  beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.bsegoodsid = vm.$route.params.id;
            } else {
               next('/login');
            }
		})
	},
  mounted() {
    let that = this;
    new  Promise((resolve,reject)=>{
      // that.request_selectqudo();
      // that.request_reqvipdengjilist();//请求会员列表
      resolve();
    }).then(()=>{
      if(that.bsegoodsid){
          that.request_InitializationData(); //回显详情数据
      }
    });
    // this.request_freightTemplateList();
    console.log('--------商品编辑--------');
    // this.goodsguilist();
       
  },
  updated(){
  },
  watch:{   
      type(type) {
        // if(type == 3 || type == 4){
        //     this.typeThere = true;
        //     this.jinebiliefanyong = false;
        //     // this.mhqdaoflagsTATUS = false;
        // }else{
        //     this.typeThere = false;
        //     // this.mhqdaoflagsTATUS = true;
        // }
        console.log('--------商品type：this.mhqdaoflagsTATUS= ', this.mhqdaoflagsTATUS );
      },
      sonurl(sonurl) {
         if (sonurl==null || sonurl==undefined || sonurl=='') {
           return;
         }
        console.log('---sonurl1 this.selectImgType: '+ this.selectImgType);
        if (this.selectImgType==1) {
          // console.log('--商品主图 sonurl 111: '+ sonurl);
          this.goodsMainImgList = [];
          for (let index = 0; index < sonurl.length; index++) {
            const element = sonurl[index];
            this.goodsMainImgList.push(element);
          }

        } else if (this.selectImgType==2 ){
          
        }
      },
      sonurl2(sonurl2) {
          console.log('--sonurl2 this.selectImgType: '+ this.selectImgType);
          this.goodsDetailImgList = [];
          this.sonurlImgList = [];          
          for (let index = 0; index < sonurl2.length; index++) {
            const element = sonurl2[index];
            this.goodsDetailImgList.push(element);
            let imgDic = {
              id: index,
              imgUrl: element,
            }
            this.sonurlImgList.push(imgDic);
          }
      },

       deep:true //true 深度监听
  },
  methods: {
    request_freightTemplateList(){
            let self = this;
            let params = new FormData();   
            params.append('page', 0);
            params.append('size', 100);
            let urlStr = baseapi.TIP + baseapi.ft_findAll;
                urlStr = baseapi.supplierFreightTemplateList;

            this.$http({
                method: "post",
                url: urlStr,
                data: params,
            }).then(function(res){
                // console.log('---运费模板列表：response= '+zm_jsonToString(res));
                if(res.status ==200){
                    if (res.data) {
                        if (res.data.list.length>0) {
                            self.ft_tableData = res.data.list;
                            console.log('---运费模板列表: length= '+self.ft_tableData.length);
                            // self.totalCount = res.data.total;
                        }
                    }
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                // self.$message.error(res.data.message);
            })
        },
       
    //请求：商品详情  回显数据（ editgoodsMethod ）
    request_InitializationData(){
        let that = this; 
        let data = new FormData();
        data.append('id',that.bsegoodsid);  
        data.append('itemId', that.bsegoodsid);  
        console.log('---参数：回显商品详情数据 id= '+that.bsegoodsid);

        this.http.post( baseapi.supplierProductDetail, data)
        .then(res=>{
          console.log('---请求：商品详情 res= '+zm_jsonToString(res.data));

          that.goodsDetail = res.data;  
          that.supplierId = that.goodsDetail.item.supplierId;
          let gData   = res.data.item;      //商品 item
          let skuList = res.data.skuList;  //商品 skuList
          // console.log('---请求：商品详情 skuList= '+zm_jsonToString(skuList));

          if (that.supplierId!=null || that.supplierId!=0) {
              that.xuanzeshuxi2 = true;
          }else{
              that.xuanzeshuxi2 = false;
          }
          // if (that.goodsDetail.item.supplierId==null || that.goodsDetail.item.supplierId==0) {
          //   that.isSupplierGoods = false;
          // }else{
          //   that.isSupplierGoods = true;
          // }
          //规格
          that.xuanzeshuxi2 = true;
          that.isSupplierGoods = false;
          that.mhqdaoflagsTATUS = true;

          if(res.data.status == 200){

              //----------item1：基本信息---------
               //封面、商品图、分享描述备注-备注
              // if(gData.pic != ''&& gData.pic != undefined && gData.pic != null){
              //   that.goodsfenimg = gData.pic;
              //   that.itemimg     = gData.pic; //pic 
              // }
              // that.description     = gData.description;
              if (gData.pic != ''&& gData.pic != undefined && gData.pic != null) {
                  var picImg = gData.pic.split('|');
                  that.goodsMainImgList = picImg;
              }
              if (gData.description != ''&& gData.description != undefined && gData.description != null) {
                  var descriptionImg = gData.description.split('|');
                  that.goodsDetailImgList = descriptionImg;
                  // that.imgsrc2.goodsisuserOneUrl = descriptionImg;
                  // this.sonurlImgList = [];
                  for (let index = 0; index <  that.goodsDetailImgList.length; index++) {
                    const element =  that.goodsDetailImgList[index];
                    let imgDic = {
                      id: index,
                      imgUrl: element,
                    }
                    that.sonurlImgList.push(imgDic);
                  }
              }


              that.name      = gData.name; 
              that.shareName = gData.remark; 
              that.catevalue = gData.productType;
              that.maidian   = gData.recommendRemark;

              // console.log('---请求：商品详情 gData= '+zm_jsonToString(gData));

              console.log('---请求：商品详情 recommendRemark= '+ gData.recommendRemark);

              //----------item2：价格库存---------
              // 价格、划线价、重量
              that.viprice   =  parseFloat(gData.discountPrice/100);
              that.zhekoujia =  parseFloat(gData.marketPrice/100);
              // that.inventoryTotal = 库存
              that.shopweight = Number(gData.weight/1000); 
              

              //----------item3：其他---------

              that.editskuid = skuList[0].id;
              let editskuidArr = [];
              skuList.forEach(function(item,index){
                  editskuidArr.push(item.id);
              })
              that.editskuidArr = editskuidArr;
              //开始回显数据
              // if( gData.type == 1){that.isxu = true ;that.isshiwu = false; }else{ that.isxu = false ;that.isshiwu = true; };


              if( gData.type == 1){
                this.type = 1;
                this.obj = {
                    flog:true,
                    flogone:true,
                    flogtwo:false,
                    flogthree:false,
                    flogfour:false
                  }
              }else if( gData.type == 2){
                  this.type = 2;
                  this.obj = {
                    flog:true,
                    flogone:false,
                    flogtwo:true,
                    flogthree:false,
                    flogfour:false
                  }
              }else if(gData.type == 3){

                this.type = 3;
                this.obj = {
                    flog:true,
                    flogone:false,
                    flogtwo:false,
                    flogthree:true,
                    flogfour:false
                  }
              }else{
                this.type = 4;
                this.obj = {
                    flog:true,
                    flogone:false,
                    flogtwo:false,
                    flogthree:false,
                    flogfour:true
                  }
              }

              // gData.name == undefined || gData.name == null ? that.name == '' : that.name =  gData.name;
              // gData.shareName == undefined || gData.shareName == null ?    that.shareName == '' :    that.shareName =  gData.shareName;

              that.sonurl = gData.spuImgs;
              // gData.setting.groundless7d == undefined || gData.setting.groundless7d == null ?    gData.setting.groundless7d == '' : that.wuliyouValue = gData.setting.groundless7d.toString();
              // gData.groupId == undefined || gData.groupId == null ?   that.shopgrounpvalue  = '' :  that.shopgrounpvalue = gData.groupId;
              //  gData.buyingPoint == undefined || gData.buyingPoint ==null ?  that.maidian  ='':  that.maidian = gData.buyingPoint;
  
        
              //skupv 数据回显
              //SKUS数据回显
              // if(gData.skuList[0].pv.length>0){
              if(skuList.length>0){
                that.isshowgglist = true;
                that.addgoodsisshow = false;
                that.xuanzeshuxi = true;
                this.xuanzeshuxi2 = true;

                let skudata = JSON.parse( gData.attech); //let skudata = JSON.parse( gData.setting.attech);
                //根据返回的sku信息修改规格的价格 gData.skuList
                 skuList.forEach((skuItem,skuIndex)=>{
                    skudata.forEach((attItem,attIndex)=>{
                        
                        if(skuItem.id == attItem.id){  //修改零售价
                           if(skuItem.price != attItem.price){
                             attItem.price = skuItem.price
                           }

                            if(skuItem.priceSupplierSupply != attItem.gprice){
                              attItem.gprice = parseFloat(skuItem.priceSupplierSupply/100)
                            }
                            if(skuItem.pricePlatform != attItem.pPrice){
                              attItem.pPrice = parseFloat(skuItem.pricePlatform/100)
                            }
                           
                        }
                    })
                 })
                
                
                //  console.log(skudata);
                //  console.log(gData.skuList);

                skudata.forEach(function(item,index){
                    item.price = parseFloat(item.price/100);
                    item.specs = [];
                    item.specs = item.vtext;              
                })

                that.skusdata = skudata;
                that.tableDataone =  that.skusdata;
                console.log('---skusdata= '+ zm_jsonToString(skudata));

                that.specArrtwo = that.skusdata[0].Cshu;
                console.log('---specArrtwo= '+ zm_jsonToString(that.specArrtwo)); 

                let sonarr = [];
                that.skusdata.forEach(function(item,index){
                    sonarr.push(item.specs);
                })
                that.thereallData = JSON.parse(JSON.stringify(sonarr));
                console.log('---thereallData= '+ that.thereallData); 

                that.zhongoneArr =  that.skusdata;
                // this.skusdata[0].Cshu.forEach((item,index)=>{
                //     if(item.pId == null){
                //       item.pId = gData.skuList[0].pv[index].pId
                //     }
                // })
                that.zhongtwoArr = that.skusdata[0].Cshu;
                that.zhongthrereArr = JSON.parse(JSON.stringify(sonarr));

              }    
             }else{
               console.error('请求回显数据失败,'+res.data.message);
             }    
        });  

            
    },

    //封面图：商品主图
    fenhgmiantu(){
      console.log('---封面图：商品主图');
      this.$refs.imgsrc.imgdialogFormVisible = true;
      this.$refs.imgsrc.pid = 1;  //= 88;
      this.$refs.imgsrc.selectImgType = 1;
      this.selectImgType = 1;
      if (this.openimgsrc1==false) {
        this.openimgsrc1 = true;
        let that = this;
        setTimeout(() => {
          for (let index = 0; index < that.goodsMainImgList.length; index++) {
              const element = that.goodsMainImgList[index];
              that.$refs.imgsrc.goodsisuserOneUrl.push(element);
            }
        }, 500);
      } 
    },
    // 商品描述图
    getsonimg(){
      console.log('---商品描述图');
      
      this.$refs.imgsrc2.imgdialogFormVisible = true;
      this.$refs.imgsrc2.pid = 1;
      this.$refs.imgsrc2.selectImgType = 2;
      this.selectImgType = 2;
      if (this.openimgsrc2==false) {
        this.openimgsrc2 = true;
        let that = this;
        setTimeout(() => {
           for (let index = 0; index < that.goodsDetailImgList.length; index++) {
              const element = that.goodsDetailImgList[index];
              that.$refs.imgsrc2.goodsisuserOneUrl.push(element);
            }
        }, 500);

      } 
    },
    //属性规格获取图片
    getsonshuimg(index){
        this.suinde = index;
        this.$refs.imgsrc.imgdialogFormVisible = true;
        this.$refs.imgsrc.pid = 2;
    },

    // //删除图片
    // delectimg(index){
    //    this.sonurl.splice(index,1);
    // },
    //删除图片
    delectimg(index, selectImgType){
      //  this.sonurl.splice(index,1);
       if (selectImgType==1) {
          let imgURL = this.goodsMainImgList[index];
          for (let i = 0; i < this.$refs.imgsrc.goodsisuserOneUrl.length; i++) {
            let itemImg = this.$refs.imgsrc.goodsisuserOneUrl[i];
            if (imgURL == itemImg) {
              console.log('---相同 删除 ');
              this.$refs.imgsrc.goodsisuserOneUrl.splice(i,1);
            }
          }
          console.log('---主图2 length= '+ this.$refs.imgsrc.goodsisuserOneUrl.length);
          this.goodsMainImgList.splice(index,1);

       }else if (selectImgType==2) {
         let imgURL = this.goodsDetailImgList[index];
          for (let i = 0; i < this.$refs.imgsrc.goodsisuserOneUrl.length; i++) {
            let itemImg = this.$refs.imgsrc.goodsisuserOneUrl[i];
            if (imgURL == itemImg) {
              console.log('---相同 删除 ');
              this.$refs.imgsrc.goodsisuserOneUrl.splice(i,1);
            }
          }
          console.log('---详情图2 length= '+ this.$refs.imgsrc.goodsisuserOneUrl.length);

         this.goodsDetailImgList.splice(index,1);
         this.sonurlImgList.splice(index,1);
       }
    },
    delectguigeimg(index){

      this.ggzarr[index].spuImgs = '';
    },

    hauhau(){
      console.log('---hauhau= '+ this.upsahngjiatime);
    },
    //上架的方式
    uptimemethod(){
      // alert(this.shangjiatime);
      if(this.shangjiatime != 2){
        this.isshowuptime = false
      }else{
        this.isshowuptime = true
      }
    },

    request_reqvipdengjilist(){
        let data = new FormData();
        data.append('page',1);
        data.append('limit',10);   
          this.http.post( baseapi.vipdengji, data).then(res=>{
              this.vipdengjiid = res.data.list  
        })     
    },

    Close_dialog (val,url) {
      this.accuseVisible = false;
      // alert(this.diffindex );
      if(this.diffindex ==1){
        this.sonurl = url;
      }else{
        this.guigeimg = url;
      }
      console.log('---sonurl= '+  this.sonurl);

    },
    showDilog(index) {
      //index 用来区分  商品图还是规格图  1  -2 
      // alert(index)
      this.diffindex = index;
      this.accuseVisible = true;
    },

    xxxx(){
      this.typetate = true;
    },
    //运费模板样式
    goodsissueyfmethod(){
       if(this.yiyoufei ==1 ){
         this.isyfmoban = true
        this.isyfmoban1 = false
       }
       if(this.yiyoufei ==2 ){
         this.isyfmoban = false
        this.isyfmoban1 = true
       }
        if(this.yiyoufei ==3 ){
         this.isyfmoban = false
        this.isyfmoban1 = false
       }
    },

    //显示spu属性列表事件
      goodsguilist(){
          this.isshowgglist = true;
          this.isshowgglistarr.push({id:1});
          this.addgoodsisshow = false;
          this.xuanzeshuxi=true;
          if (this.supplierId==null || this.supplierId==0) {
              this.xuanzeshuxi2 = true;
          }else{
              this.xuanzeshuxi2 = true;
          }
          // this.jinebiliefanyong = false;
          // this.isgoodsdengji = false;
      },
  
      baocunreq(){
          this.getdata();
        
      },
      baocunreqgoods(){
        this.getdata(1);
      },
    yugoudata(){
    if(this.yugou == true){
      this.kaiqiyusou = 1;
    }else{
      this.kaiqiyusou = 0;
    }
        this.show12= this.yugou;


    },

     handleRemove(file) {
        console.log(file);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleDownload(file) {
        console.log(file);
      },

     shiwugoods(papme){

      if(papme == 1){
        this.type = 1;
        this.iskuaidishow =true;
        this.iskuaidishowtwo =false;
        this.obj = {
          flog:true,
          flogone:true,
          flogtwo:false,
          flogthree:false,
          flogfour:false
        }
      }else if(papme == 2){
        this.type = 2;
        this.iskuaidishow =false;
        this.iskuaidishowtwo =true;
        this.obj = {
          flog:true,
          flogone:false,
          flogtwo:true,
          flogthree:false,
          flogfour:false
        }
      }else if(papme == 3){
        this.type = 3;
        this.obj = {
          flog:true,
          flogone:false,
          flogtwo:false,
          flogthree:true,
          flogfour:false
        }
      }else{
        this.type = 4;
        this.obj = {
          flog:true,
          flogone:false,
          flogtwo:false,
          flogthree:false,
          flogfour:true
        }
      }
    },
    xunigoods(){
        this.isxu = false;
        this.isshiwu = true;
        this.type = 2;
         this.iskuaidishow =false;
        this.iskuaidishowtwo =true;

    },
    getdata(parameter) {
      let that = this;
      let data = new FormData();

      data.append('itemId',that.bsegoodsid);
      data.append("type", that.type);
      //商品名称
      if( that.name != '' &&  that.name !=undefined &&  that.name !=null){
           data.append("name", that.name);   
      }else{
           this.$message.error('商品名称不能为空');
           return false;
      }
      data.append("status", '0');                   //商品显示状态：默认不显示
      data.append("productFormat", '0');            // 商品格式
      // data.append("recommendRemark", '商品物美价廉'); // 商家推荐
      //卖点 --> 商家推荐
      if( that.maidian != ''){
          //  data.append("buyingPoint", that.maidian); 
          data.append("recommendRemark", that.maidian);
      }
      data.append("remark", that.shareName); // 商家可见备注
      // data.append("description", that.shareName); 

      //  //封面图（商品主图 最多5张）
      //   if(that.goodsfenimg != '' && that.goodsfenimg != null  && that.goodsfenimg != undefined){
      //       data.append("pic", that.goodsfenimg);
      //   }else{
      //       this.$message.error('商品封面图必传');
      //       return false;
      //   }

       let picImg = '';
        if(that.goodsMainImgList.length>0){
          for (let index = 0; index < that.goodsMainImgList.length; index++) {
            const element = that.goodsMainImgList[index];
            if (index==0) {
              picImg = element;
            } else {
              picImg = picImg+ '|' + element;
            }
          }
          data.append("pic", picImg);

        }else{
            this.$message.error('商品主面图必传');
            return false;
        }
        let descriptionImg = '';
        if(that.goodsDetailImgList.length>0){
          
          for (let index = 0; index < that.goodsDetailImgList.length; index++) {
            const element = that.goodsDetailImgList[index];
            if (index==0) {
              descriptionImg = element;
            } else {
              descriptionImg = descriptionImg+ '|' + element;
            }
          }
          data.append("description", descriptionImg);
        }else{
            this.$message.error('商品详情图必传');
            return false;
        }
        console.log('---picImg= '+ picImg);
        console.log('---descriptionImg= '+ descriptionImg);
        // return;


      data.append("weightUnit", 1);  // 商品重量单位：0-kg , 1-g
      data.append("productType", this.catevalue); // 分类ID  this.catevalue
      //图片展示方式           
      // data.append("imageShowType",that.imageShowType);  


    //  data.append("groundless7d", that.wuliyouValue); //是否支持7天无理由

    if(that.upsahngjiatime != undefined && that.upsahngjiatime != '' ){
          data.append("putawayTimestart",that.upsahngjiatime[0]);  //  上架时间戳
    }

    if(that.upsahngjiatime != undefined && that.upsahngjiatime != '' ){
         data.append("putawayTimeend", that.upsahngjiatime[1]);   //  下架时间戳 
    }
      data.append("putawayType", that.shangjiatime); // 上架的方式


      data.append("brandId", 11);  
      // //详情
      // data.append('description','');

      if(that.isgoodsdengji){

        //渠道商等级价格结束
        data.append("skus", JSON.stringify(
          [{ 
            id:that.editskuid,
            priceMember:vipDengArr,
            chmoney:shDengArr,
            price: parseInt(that.viprice*1000/10),
            inventoryTotal: Number(that.inventoryTotal), //库存数字必传
            inventoryUnit: that.kucundan,
            // priceDiscount:parseInt(that.zhekoujia*1000/10),        //折扣价       
            // weight: Number(that.shopweight*1000),              //重量
            isShowInventory: 1 ,                           //是否显示库存 页面不存在不显示
       
            pv: [ {pId:Number(that.shuxinvalue),pName: that.firstsx,vId:Number(that.guigezhivalue), vText: that.addspv }]       
            }]
        ));
    }

    //无新增sku结束
    //新增sku   判断 
    // console.log('---jinebiliefanyong= '+ that.jinebiliefanyong);
    // console.log('---isgoodsdengji= '+ that.isgoodsdengji);

    if(true){ 
        let Cshu=   this.$refs.refgui.specArr;
        let shulist  =  this.$refs.refgui.allData;
        let Cgoos = this.$refs.refgui.tableData;
        let guiGe_skus = [];
        let specs = '';  
        let specPic = [];          
        let guiGe_pv = null;
        let guiGe_Cshu = null;

                // console.log('---Cshu= '+ Cshu);
                // console.log('---shulist= '+ shulist);
                // console.log('---Cgoos= '+ Cgoos);
        Cgoos.forEach(function (item,index) {
            item.Cshu = Cshu;
            console.log('--Cshu= '+zm_jsonToString(item.specs));
            let skuItme = {
                price: item.price*100,
                stockNum: item.stock,
                specDetail: item.specs.toString(),
            }
            specPic.push(item.img);
            guiGe_skus.push(skuItme);
        });
        // console.log(Cgoos);
        data.append("specPic", specPic); // 规格图片

        //规格值
        Cgoos.forEach(function (item,index) {
              item.vtext = [];
              item.specs.forEach(function(sunitem,sunindex){
                  item.vtext.push(sunitem);
                  if(item.Cshu[sunindex].shuXarr){
                      item.Cshu[sunindex].shuXarr.forEach(function(sonitem,sonindex){
                        if(sunitem == sonitem.text){
                            item.specs[sunindex] = sonitem.id
                        }
                    })
                  }else{
                      //  item.specs[sunindex] = null;
                  }
            })
        });

        const isDeep = shulist.some(function(item){
          return  item instanceof Array
        })
        console.log('--shulist= '+shulist);
        console.log('--Cgoos= '+Cgoos);
        data.append("specName", '颜色-尺码'); 

       //规格1 是一位数组
       //多个规格是二维数组
      //  console.log('---Cgoos= '+ Cgoos);
      //  console.log('---shulist= '+ shulist);

        if(isDeep){
            //  console.log('---Cgoos= '+ Cgoos);
             Cgoos.forEach(function (item,index) {
                item.pv = [];
                if (guiGe_Cshu==null) {
                  guiGe_Cshu = item.Cshu;
                }
                // console.log( '---Cshu= '+  item.Cshu);
                item.Cshu.forEach(function(sonitem,sonindex){
                    sonitem.pId == '' || sonitem.pId == null  ? sonitem.pId = null : null ;   
                    //item.pv.push({pName: sonitem.name,pId: sonitem.pId,vText:shulist[index][sonindex],vId: typeof(item.specs[sonindex]) == 'string' ? item.specs[sonindex] = null : item.specs[sonindex] });
                      item.pv.push({pName: sonitem.name,pId: sonitem.pId,vText:item.vtext[sonindex],vId: typeof(item.specs[sonindex]) == 'string' ? item.specs[sonindex] = null : item.specs[sonindex] });
                      if (guiGe_pv==null) {
                        guiGe_pv = item.pv;
                      }
               });
            });
        }else{
        
           Cgoos.forEach(function (item,index) {
                item.pv = [];
                console.log('---item.Cshu22= '+ item.Cshu);
                if (guiGe_Cshu==null) {
                  guiGe_Cshu = item.Cshu;
                }

                item.Cshu.forEach(function(sonitem,sonindex){
                   
                  sonitem.pId == '' || sonitem.pId == null  ? sonitem.pId = null : null ;   
                  //item.pv.push({pName: sonitem.name,pId: sonitem.pId,vText:shulist[index],vId: typeof(item.specs[sonindex]) == 'string' ? item.specs[sonindex] = null : item.specs[sonindex] });
                  item.pv.push({pName: sonitem.name,pId: sonitem.pId,vText:item.vtext[sonindex],vId: typeof(item.specs[sonindex]) == 'string' ? item.specs[sonindex] = null : item.specs[sonindex] });
                  if (guiGe_pv==null) {
                      guiGe_pv = item.pv;
                    }
              });
            });
        }

        console.log('---item.guiGe_Cshu= '+ zm_jsonToString(guiGe_Cshu));
        console.log('---item.guiGe_pv= '+ zm_jsonToString(guiGe_pv));
        // 颜色|黑色,白色,黄色^尺码|S,M,L 
        guiGe_Cshu.forEach(function(item, index){
          if (index==0) {
            specs = item.name + '|' + item.conName.toString();
          }else{
            specs = specs + '^' + item.name + '|' + item.conName.toString()
          }
        });
        console.log('---specs= '+ zm_jsonToString(specs));
        data.append("specs", specs);
        // data.append("specPic", '');


      let addskuDengPrice = JSON.parse(JSON.stringify(Cgoos));

      addskuDengPrice.forEach(function(item,indexnum){
          item.price = parseInt(item.price*1000/10);               //价格
          item.inventoryTotal = Number(item.stock); //库存
          // item.code = Number(item.code);                     //编码
          // item.priceSupplierSupply = parseInt(item.gprice*1000/10);   //供货价
          // item.priceCost = parseInt(item.qprice*1000/10);       //成本价 
          // item.pricePlatform = parseInt(item.pPrice*1000/10);       //分销价

          item.discountPrice = parseInt(that.zhekoujia*1000/10);   //划线价
          item.inventoryUnit = that.kucundan;  
          item.weight = Number(that.shopweight*1000);
          item.isShowInventory =  1 ;
          // item.isMemberDiscount = Number(that.isMemberDiscountvale);
          // item.isVirtual = Number(that.vipxuniku);
          // item.inventoryVirtualMin = Number(that.xunigou);
          item.pv = item.pv;
          item.id = that.editskuidArr[indexnum],
          item.photo    = item.img;
          
      })  

    //  data.append("skus", JSON.stringify(addskuDengPrice));
    //  data.append("attech", JSON.stringify(addskuDengPrice));

     
      data.append("marketPrice", parseInt(that.zhekoujia*1000/10) ); //商品划线价
      data.append("discountPrice", parseInt(that.viprice*1000/10) ); //商品售价
      data.append("weight",  Number(that.shopweight*1000));  //重量
      data.append("weightUnit", 1);

      console.log('---addskuDengPrice.count= '+ addskuDengPrice.count);
      data.append("skus", JSON.stringify(guiGe_skus));
      // data.append("skus", JSON.stringify(addskuDengPrice));
      data.append("attech", JSON.stringify(addskuDengPrice));

    }

       //类目
      data.append("firstCid", '0');
      data.append("secondCid", '0');
      data.append("thirdCid", '0');
      if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
         data.append("supplierId", that.$cookie.get('supplierId'));
      }else{
         data.append("supplierId", '2');
      }
      var urlStr = baseapi.supplierProductUpdate;
      console.log('---请求：商品编辑 参数= '+zm_formDataToString(data) +'urlStr= '+urlStr);
     
      // 请求：商品编辑
      this.http.post( urlStr, data).then(res=>{
        console.log('---请求: 商品编辑 data= '+zm_jsonToString(res) );
    
        if(res.data.status == 505){
            that.$message.error("服务器异常");  return false;
        }
        if(res.data.status == 500 && res.data.message == "SKU库存不正确"){
           that.$message.error("商品库存必填"); return false;
        }
        // if(res.data.status == 500 && res.data.message == "会员价不合法"){
        //    that.$message.error("会员价必填");   return false;
        // }
        if(res.data.status == 500 && res.data.message == "重量不合法"){
           that.$message.error("商品重量不合规范"); return false;
        }
        if(res.data.status == 500 && res.data.message == "spu图片不存在"){
           that.$message.error("商品图不存在"); return false;
        }
        if(res.data.status == 500){
           that.$message.error(res.data.message); return false;
        }

        if(res.data.status == 200){
          that.$message({showClose: true, message: '保存成功',
              type:'success', duration:800
          });
          let sonDatail = that.$route.params.id;;
          if(parameter != 1){
               that.$router.push({
                path: '/goodsedit/'+sonDatail
            })
          }else{
               that.$router.push({
                path: '/goodslist'
            })
          }

        }else{
           that.$message("发布失败," + res.data.message);
        }
      })
    },
    //查询渠道商 
    request_selectqudo(){
        let data = new FormData();
        this.http.post( baseapi.qudaogoods,data).then(res=>{
            // console.log('---查询渠道商 = '+res.data.list);
            this.qudaoshang = res.data.list;
            this.qudaoshang1 = res.data.list;
            this.qudaoshang2 = res.data.list;
            this.qudaoshang3 =    res.data.list.filter(function(ele,idx,arr){
              return idx !== 0;
            });
        })       
    } ,  
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    handleChange(value) {
      console.log(value);
    },
    handleClick(tab, event){
        if(tab.name != 'second' && this.$refs.refgui != undefined){
            this.zhongoneArr = this.$refs.refgui.tableData;
            this.zhongtwoArr = this.$refs.refgui.specArr;
            this.zhongthrereArr = this.$refs.refgui.allData;
        }else{
             this.tableDataone =  this.zhongoneArr;
              this.specArrtwo =  this.zhongtwoArr;
              this.thereallData =  this.zhongthrereArr;
        } 
    },
  },
  components: {
    navbar,
    sidebar,
    secnavbar,
    imgsrc,
    imgsrc2,
    videoson,
    test,
    freightTemplate_list
  }
};
</script>

<style>

.goodsDetailView{
  display: flex;
  /* background: yellowgreen; */
  padding: 20px;
}
.sonurlImgListView{
  /* background: yellow; */
  width: 100%;
  margin: 50px;
  padding: 20px;
}
/* 去除中间分割线*/ 
.sonurlImgListView >>> .el-table__row>td{
    border: none;
}
/* 取消悬停背景色 */
.sonurlImgListView >>> tr:hover>td{
	background-color: #ffffff !important;
}
.sonurlImgView{
  display: flex;
  width: 90%;
  margin: 20px;
  /* background: lavenderblush; */
}



.xxxx .el-upload-list--picture-card .el-upload-list__item{
  width:80px;
  height:80px;
}
.xxxx .el-upload--picture-card{
width:80px;
  height:80px;
  display:flex;
      justify-content: center;
    align-items: center;
}

.oooo>div{
  display:flex;
}
.oooo{
  display: flex;
}
.oooo_img{
  width: 84px;
  height: 84px;
  margin-right: 12px;
  object-fit: cover;
}
.pppp .el-input__inner{
  width: 100%;
  line-height: 32px;
  height: 32px!
}
.pppp  .el-input__icon{
  line-height: 32px
}
.mh-gsgoods-gui_son-spanone  .el-input__icon{
  line-height: 32px
}
.mh-gsgoods-gui .el-input__icon{
   line-height: 32px
}

#fabushop .el-select{
  min-width: 160px
}
.mh-goodsfabutan{
  display: flex;
  align-items: center;
}
.mh-goodsfabutan_span{
width:20%;display:flex;justify-content: flex-end;
}
#fabushop .el-form-item__label{
  font-size: 12px;
  color: #606266;
}

#fabushop .el-radio__label{
  font-size: 12px;
}
#fabushop .el-checkbox__label{
    font-size: 12px;
}
.goodsisue_tuike{
  font-size: 12px;
  font-weight: 800;
}
.goodsisue_tuike::before{
  content: "";
    display: inline-block;
    width: 3px;
    height: 12px;
    position: relative;
    top: 1px;
    background: #f60;
    margin-right: 5px;
}

#fabushop .el-form-item{
  margin-bottom: 18px;
}
#fabushop .df-basic .el-input__inner{
  min-width: 25%;
  max-width: 250px;
}
.mh-goodsissue-goodsimg{
  display: flex;
}
.mh-goodsissue-goodsimg>img{
  height: 82px;
  width: 82px;
  margin-right: 12px;
  border-right: 4px;
  border: 1px dashed #eee;
  object-fit: cover;
}
</style>