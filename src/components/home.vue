<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <!-- <ul class="main-goods-left" id="main-goods-left_disabled">
                <a href="javascript:void(0)"><li class="goods-left_list is-active"><span>商品列表</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>发布商品</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>商品分类</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>商品分组</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>商品导入</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>我的资源</span></li></a>
                <a href="javascript:void(0)"><li class="goods-left_list"><span>商品设置</span></li></a>
            </ul> -->

            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div>
                    <!--选项卡组件-->
                    <div class="mh-homeheader-t">
                        <dl class="mh-home-titledl">
                            <dt>
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/home/jinbi.png" alt="" srcset="" class="mh-home-titleimg">
                            </dt>
                            <dd class="mh-home-titledl_dd">
                                <h3 class="mh-home-price">充值总金额</h3>
                                <h5 class="mh-home-priceNum">0</h5>
                            </dd>
                        </dl>

                         <dl class="mh-home-titledl">
                            <dt>
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/home/chongzhi.png" alt="" srcset="" class="mh-home-titleimg">
                            </dt>
                            <dd class="mh-home-titledl_dd">
                                <h3 class="mh-home-price">当前总金额</h3>
                                <h5 class="mh-home-priceNum">0</h5>
                            </dd>
                        </dl>
                        <dl class="mh-home-titledl">
                            <dt>
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/home/home3.png" alt="" srcset="" class="mh-home-titleimg">
                            </dt>
                            <dd class="mh-home-titledl_dd"> 
                                <h3 class="mh-home-price">总佣金</h3>
                                <h5 class="mh-home-priceNum">{{allYprice}}</h5>
                            </dd>
                        </dl>
                        <dl class="mh-home-titledl">
                            <dt>
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/home/home4.png" alt="" srcset="" class="mh-home-titleimg">
                            </dt>
                            <dd class="mh-home-titledl_dd">
                                <h3 class="mh-home-price">已发放总佣金</h3>
                                <h5 class="mh-home-priceNum">{{cmswithdraw}}</h5>
                            </dd>
                        </dl>
                        <dl class="mh-home-titledl">
                            <dt>
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/home/home5.png" alt="" srcset="" class="mh-home-titleimg">
                            </dt>
                            <dd class="mh-home-titledl_dd">
                                <h3 class="mh-home-price">审核中总佣金</h3>
                                <h5 class="mh-home-priceNum">{{cmswithdrawing}}</h5>
                            </dd>
                        </dl>
                        <dl class="mh-home-titledl">
                            <dt>
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/home/home6.png" alt="" srcset="" class="mh-home-titleimg">
                            </dt>
                            <dd class="mh-home-titledl_dd">
                                <h3 class="mh-home-price">待提现总佣金</h3>
                                <h5 class="mh-home-priceNum">{{cmsdaiPrice}}</h5>
                            </dd>
                        </dl>

                    


                    </div>
                    <!--二栏目-->

                    <div class="mh-homeheader-twoTop">
                        <div class="mh-homeheader-two mh-h1">
                            <div class="mh-homeheader-two_div">
                                <span class="iconfont icon-tongji icon"></span>
                                <span>今日销售额</span>
                                <span>0</span>
                            </div>
                        <div class="mh-homeheader-bottomdiv"> 
                                <span class="mh-homeheader-botspanone">总销售额</span>   
                                <span class="mh-homeheader-botspantwo">{{allxiaosouPrice}}</span> 
                                <el-popover
                                    placement="top"                 
                                    trigger="hover"
                                    popper-class="mh-homeheader-tip"
                                    content="统计已付款订单(包含已付款,已发货,交易完成订单)">
                                    <i slot="reference" class="el-tooltip right-info el-icon-warning tool_tip mh-homeheader-bottomdivinio" aria-describedby="el-tooltip-2357" tabindex="0"></i>
                                </el-popover>  
                        </div>                      
                        </div>
                        <div class="mh-homeheader-two mh-h2">
                            <div class="mh-homeheader-two_div">
                                <span class="iconfont icon-tongji icon"></span>
                                <span>今日访问量</span>
                                <span>{{dayviewNum}}</span>
                            </div>
                        <div class="mh-homeheader-bottomdiv"> 
                                <span class="mh-homeheader-botspanone">总访问量</span>   
                                <span class="mh-homeheader-botspantwo">{{viewVipnum}}</span> 
                                <el-popover
                                    placement="top"                 
                                    trigger="hover"
                                    popper-class="mh-homeheader-tip"
                                    content="统计店铺总的访问量">
                                    <i slot="reference" class="el-tooltip right-info el-icon-warning tool_tip mh-homeheader-bottomdivinio" aria-describedby="el-tooltip-2357" tabindex="0"></i>
                                </el-popover> 
                        </div>                      
                        </div>

                        <div class="mh-homeheader-two mh-h3">
                            <div class="mh-homeheader-two_div">
                                <span class="iconfont icon-tongji icon"></span>
                                <span>今日支付笔数</span>
                                <span>{{daypaytime}}</span>
                            </div>
                        <div class="mh-homeheader-bottomdiv"> 
                                <span class="mh-homeheader-botspanone">总支付笔数</span>   
                                <span class="mh-homeheader-botspantwo">{{allpaynum}}</span> 
                                <el-popover
                                    placement="top"                 
                                    trigger="hover"
                                    popper-class="mh-homeheader-tip"
                                    content="统计已付款订单(包含已付款,已发货,交易完成订单)">
                                    <i slot="reference" class="el-tooltip right-info el-icon-warning tool_tip mh-homeheader-bottomdivinio" aria-describedby="el-tooltip-2357" tabindex="0"></i>
                                </el-popover> 
                        </div>                      
                        </div>

                        <div class="mh-homeheader-two mh-h4">
                            <div class="mh-homeheader-two_div">
                                <span class="iconfont icon-tongji icon"></span>
                                <span>今日新增会员数</span>
                                <span>{{dayVip}}</span>
                            </div>
                        <div class="mh-homeheader-bottomdiv"> 
                                <span class="mh-homeheader-botspanone">总会员数</span>   
                                <span class="mh-homeheader-botspantwo">{{totalVip}}</span> 
                                    <el-popover
                                    placement="top"                 
                                    trigger="hover"
                                    popper-class="mh-homeheader-tip"
                                    content="不包含已删除的会员">
                                    <i slot="reference" class="el-tooltip right-info el-icon-warning tool_tip mh-homeheader-bottomdivinio" aria-describedby="el-tooltip-2357" tabindex="0"></i>
                                </el-popover> 
                        </div>                      
                        </div>

                        <div class="mh-homeheader-two mh-h5">
                            <div class="mh-homeheader-two_div">
                                <span class="iconfont icon-tongji icon"></span>
                                <span>今日维权订单数</span>
                                <span>{{weiDaynum}}</span>
                            </div>
                        <div class="mh-homeheader-bottomdiv"> 
                                <span class="mh-homeheader-botspanone">总维权订单数</span>   
                                <span class="mh-homeheader-botspantwo">{{weiQnum}}</span> 
                                    <el-popover
                                    placement="top"                 
                                    trigger="hover"
                                    popper-class="mh-homeheader-tip"
                                    content="统计所有维权订单(维权中、维权成功)">
                                    <i slot="reference" class="el-tooltip right-info el-icon-warning tool_tip mh-homeheader-bottomdivinio" aria-describedby="el-tooltip-2357" tabindex="0"></i>
                                </el-popover> 
                        </div>                      
                        </div>
                    </div>


                    <div class="home_basicInfoView">
                        <div class="home_basicInfoView1">
                            <basicInfoView class="home_infoView" :basicInfo="basicInfoData1" :basicInfoType="1" ></basicInfoView>
                            <basicInfoView class="home_infoView" :basicInfo="basicInfoData2" :basicInfoType="2" ></basicInfoView>
                            <basicInfoView class="home_infoView" :basicInfo="basicInfoData3" :basicInfoType="3" ></basicInfoView>
                            <basicInfoView class="home_infoView4" :basicInfo="basicInfoData4" :basicInfoType="4" ></basicInfoView>
                        </div>
                        <div class="home_basicInfoView2">
                            <basicInfoView class="home_infoView" :basicInfo="basicInfoData5" :basicInfoType="5" ></basicInfoView>
                            <basicInfoView class="home_infoView" :basicInfo="basicInfoData6" :basicInfoType="6" ></basicInfoView>
                            <basicInfoView class="home_infoView" :basicInfo="basicInfoData7" :basicInfoType="7" ></basicInfoView>
                            <basicInfoView class="home_infoView4" :basicInfo="basicInfoData8" :basicInfoType="8" ></basicInfoView>
                        </div>
                    </div>


                    <div class="mh-home-canvasTopone">
                        <div class="mh-home-canvas">
                             <h5 class="mh-home-goodsranking-h5 mh-home-goodsrankingh5-fangwen">访问分布</h5>
                             <div id="myChart" :style="{width: '100%', height: '750px'}"></div>

                        </div>
                        <div class="mh-home-goodsranking">
                            <h5 class="mh-home-goodsranking-h5">今日订单分布TOP10</h5>
                            <div class="mh-home-goodsranking-div">
                                <dl class="mh-home-goodsrankingul" v-for="(item,index) of jinday" :key="index" v-show="item.num !=0">
                                    <dt class="mhhome-goodsuldt_one">TOP{{index+1}}</dt>
                               
                                    <dd class="mh-home-goodsrankinguldd" :style="{width:item.cssbai}">
                                       <span class="mh-home-goodsrankinguldd-text1">{{item.name}}</span>
                                       <span class="mh-home-goodsrankinguldd-text2">{{item.num}}笔</span>
                                    </dd>
                                </dl>
                               

                            </div>
                        </div>

                    </div>
                  
                    <!--趋势图 -->
                    <div class="mh-home-qstopthree">
                        <h5 class="mh-home-qstopthree_title">趋势图</h5>
                        <div class="mh-home-qushiDiv">
 
                            <ul class="mh-home-qushiDivUl">
                                <li @click="qushiTab(index)" v-for="(item,index) of orderQs " :key="index" :class="{mhhomeActive:index==isShow}">{{item}}</li>
                              
                              
                            </ul>
                            <div class="mh-home-qushiDiv_div">
                                 <el-select v-model="qseltvalue" placeholder="请选择" @change="mhhomeQshi">
                                    <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                                <div class="mh-home-qushiDiv_divtwo">
                                    <el-date-picker
                                        popper-class="mihuantimeclass"
                                        @change="envTime"
                                        v-model="timevalue"
                                          unlink-panels
                                        value-format="timestamp"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        end-placeholder="结束日期">
                                    </el-date-picker>
                                </div>
                            </div>
                        </div>
                        <div id="myCanvasTwo" :style="{width: '100%', height: '750px'}"></div>
                         <!--趋势图over -->
                    </div>

                    <div class="mh-home-PriceTopfour">
                        <div class="mh-home-PriceTopfour_div">
                            <h5 class="mh-home-PriceTopfour_h5">会员消费排名</h5>
                            <dl class="mh-home-PriceTopfour_dl">
                                <dt class="mh-home-PriceTopfour_dt">
                                    <span>排名</span>
                                    <span>名称</span>
                                    <span>交易额</span>
                                    <span>交易笔数</span>
                                </dt>
                               
                                <dd class="mh-home-PriceTopfour_dd"  v-for="(item,index) of viplist" :key="index">
                                    <p v-show="index == 0"> <span  class="mh-hone-firstspan">{{index+1}}</span></p>
                                    <p v-show="index == 1"> <span class="mh-hone-erspan">{{index+1}}</span></p>
                                    <p v-show="index == 2"> <span class="mh-hone-therespan">{{index+1}}</span></p>
                                    <p v-show=" index != 0 && index != 1 && index != 2 "> <span class="mh-hone-puspan" >{{index+1}}</span></p>
                                    <span>{{item.userNickName}}</span>
                                    <span>{{parseFloat(item.totalDealMoney/100)}}</span>
                                    <span>{{item.totalDealNum}}</span>
                                </dd>
                              
                            </dl>
                        </div>

                         <div class="mh-home-PriceTopfour_div">
                            <h5 class="mh-home-PriceTopfour_h5">推客佣金排名</h5>
                            <dl class="mh-home-PriceTopfour_dl">
                                <dt class="mh-home-PriceTopfour_dt">
                                    <span>排名</span>
                                    <span>名称</span>
                                    <span>佣金总额</span>
                                    <span>佣金余额</span>
                                </dt>
                                <dd class="mh-home-PriceTopfour_dd"  v-for="(item,index) of tklist" :key="index">
                                    <p v-show="index == 0"> <span  class="mh-hone-firstspan">{{index+1}}</span></p>
                                    <p v-show="index == 1"> <span class="mh-hone-erspan">{{index+1}}</span></p>
                                    <p v-show="index == 2"> <span class="mh-hone-therespan">{{index+1}}</span></p>
                                    <p v-show=" index != 0 && index != 1 && index != 2 "> <span class="mh-hone-puspan" >{{index+1}}</span></p>
                                    <span>{{item.userNickName}}</span>
                                    <span>{{parseFloat(item.cmsTotal/100)}}</span>
                                    <span>{{parseFloat(item.cmsUsable/100)}}</span>
                                </dd>
                            </dl>
                        </div>    

                         <div class="mh-home-PriceTopfour_div">
                            <h5 class="mh-home-PriceTopfour_qdaoh5 ">渠道商交易排名</h5>
                            <dl class="mh-home-PriceTopfour_dl">
                                <dt class="mh-home-PriceTopfour_dt">
                                    <span>排名</span>
                                    <span>名称</span>
                                    <span>交易完成金额</span>
                                    <span>交易完成笔数</span>
                                </dt>
                                <dd class="mh-home-PriceTopfour_dd"  v-for="(item,index) of qdlist" :key="index">
                                    <p v-show="index == 0"> <span  class="mh-hone-firstspan">{{index+1}}</span></p>
                                    <p v-show="index == 1"> <span class="mh-hone-erspan">{{index+1}}</span></p>
                                    <p v-show="index == 2"> <span class="mh-hone-therespan">{{index+1}}</span></p>
                                    <p v-show=" index != 0 && index != 1 && index != 2 "> <span class="mh-hone-puspan" >{{index+1}}</span></p>
                                    <span>{{item.userNickName}}</span>
                                    <span>{{parseFloat(item.totalDealMoney/100)}}</span>
                                    <span>{{item.totalDealNum}}</span>
                                </dd>
                             
                            </dl>
                        </div>        

                    </div>
  
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
import navbar from './navbar';
import sidebar from './sidebar';
import baseapi from '../utils/api';
import homehttp from '../utils/http.js';

import {    
        zm_cityList,
        zm_homeBasicInfo,
    } from "../filters/zm_data.js";
// import qiang_gou_list from './marketing/qiangGou/qiang_gou_list';
import basicInfoView from '../components/home/hm_BasicInfoView';
// import hm_BasicInfoView from '../components/Home/hm_BasicInfoView';
// src/components/Home/hm_BasicInfoView.vue

export default {
    data() {
        return {
            basicInfoDataList: zm_homeBasicInfo(),
            basicInfoData1:{
                title: '小程序uv',  
                num: '581', 
                numUnit: '人', 
                percent1: '5.78', 
                percent2: '12.06', 
                allNum: '123456',
                allUnit: '万',    
            },
            basicInfoType: 1,
            objcss:0,
            timevalue:"",
            FLOG:false,
            oneallprice:0,
            cmsdaiPrice:0,
            allYprice:0,
            viewdannum:0,
            viewALLnum:0,
            dayordernum:0,
            qseltvalue:'1',
            jinday:[],
            viplist:[],
            qdlist:[],
            tklist:[],
            orderQs:  ['销售额','访问量','订单数','新增会员','维权订单'],
            cmstotal:0,
            allxiaosouPrice:0,
            dayviewNum:0,
            viewVipnum:0,
            dayVip:0,
            weiDaynum:0,
            totalVip:0,
            cmswithdrawing:0,
            daypaytime:0,
            allpaynum:0,
            cmswithdraw:0,
            weiQnum:0,
          
            options: [{
                value: '1',
                label: '今日'
                }, {
                value: '2',
                label: '本周'
                },
                {
                value: '3',
                label: '本月'
                }],
            value: '',
            myChart:'',
            add:'',
            isShow: 0,
            visible: false,
            qushidata:[0,0,0,0,0,0,0],
            qushidatatime:[],
            qieFlog:1,
            allorderNumber:0,
            // dataList : zm_cityList(),
            dataList : [],
        };
    },
    //路由前置
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.sassData();
                vm.vipMoneySort();
                vm.tkMoneySort();
                vm.qdMoneySort();
                vm.qushiecharts();
                vm.dayOrderXS(1);
            } else {
                next('/login');
            }
		})
	},
    mounted(){
        //实现自适应部分
        this.resizefun = ()=>{
            echarts.init(document.getElementById('myChart')).resize();
            echarts.init(document.getElementById('myCanvasTwo')).resize()
        }
        window.addEventListener('resize',this.resizefun);

        this.basicInfoData1 = this.basicInfoDataList[0];
        this.basicInfoData2 = this.basicInfoDataList[1];
        this.basicInfoData3 = this.basicInfoDataList[2];
        this.basicInfoData4 = this.basicInfoDataList[3];
        this.basicInfoData5 = this.basicInfoDataList[4];
        this.basicInfoData6 = this.basicInfoDataList[5];
        this.basicInfoData7 = this.basicInfoDataList[6];
        this.basicInfoData8 = this.basicInfoDataList[7];

        console.log('---home.vue');

    },
    //移除事件监听，避免内存泄漏
    beforeDestroy() {
        window.removeEventListener('resize', this.resizefun)
        this.resizefun = null
    },
    watch:{
         qushidata(newVal, objVal) {
             this.qushiecharts();    
        },
        deep:true

    },
    methods:{
        /**  @vipMoneySort 会员消费排名*/
        vipMoneySort(){
            let that = this;
            let data = new FormData();
            homehttp.post( baseapi.homevipMoney,data).then(res=>{
                that.viplist = res.data.list; 
             })  
        },
        tkMoneySort(){
            let data = new FormData();
            homehttp.post( baseapi.hometkMoney,data).then(res=>{
                // console.log( res.data.list)
                this.tklist = res.data.list;
            })  
        },
        qdMoneySort(){
            let data = new FormData();
            homehttp.post( baseapi.homeqdMoney,data).then(res=>{
                this.qdlist = res.data.list;
             })  
        },
        envTime(){
            if(this.qieFlog ==1){
                this.dayOrderXS(this.timevalue,99);
            }
            if(this.qieFlog ==2){
                this.financeNum(this.timevalue,99);
            }
            if(this.qieFlog ==3){
                this.dayOrderNumMethod(this.timevalue,99);
            }
            if(this.qieFlog ==5){
                this.aftersaleNum(this.timevalue,99);
            }
            
        },

        mhhomeQshi(){
            if(this.qseltvalue ==1){
                this.timevalue ='';
            }

            if(this.qseltvalue ==2){
                this.timevalue ='';
            }
            if(this.qseltvalue ==3){
                this.timevalue ='';
            }

            if(this.qseltvalue ==1 && this.qieFlog ==1){
                this.dayOrderXS(1);
            }
            if(this.qseltvalue ==2 && this.qieFlog ==1){
                this.dayOrderXS(7);
            }
            if(this.qseltvalue ==3 && this.qieFlog ==1){
                this.dayOrderXS(30);
            }

            if(this.qseltvalue ==1 && this.qieFlog ==2){
                this.financeNum(1);
            }
            if(this.qseltvalue ==2 && this.qieFlog ==2){
                this.financeNum(7);
            }
             if(this.qseltvalue ==3 && this.qieFlog ==2){
                this.financeNum(30);
            }

            if(this.qseltvalue ==1 && this.qieFlog ==3){
                
                this.dayOrderNumMethod(1);
            }

            if(this.qseltvalue ==2 && this.qieFlog ==3){
                this.dayOrderNumMethod(7);
            }

            if(this.qseltvalue ==3 && this.qieFlog ==3){
                this.dayOrderNumMethod(30);
            }

            if(this.qseltvalue ==1 && this.qieFlog ==5){
                this.aftersaleNum(1);
            }
            if(this.qseltvalue ==2 && this.qieFlog ==5){
                this.aftersaleNum(7);
            }
            if(this.qseltvalue ==3 && this.qieFlog ==5){
                this.aftersaleNum(30);
            }         
        },
        //销售额
        dayOrderXS(papme,select){

           if(this.timevalue != ''){
               papme = this.timevalue;
               select = 99;
           }else{
                papme = this.qseltvalue;
           }

            let data = new FormData();
            //按日返回数据
            let timestamp = (Date.parse(new Date()))/1000;
            let myDate = new Date();
            let hour =   myDate.getHours();       //获取当前小时数(0-23)
            let fen =    myDate.getMinutes();     //获取当前分钟数(0-59)
            let small=   myDate.getSeconds();     //获取当前秒数(0-59)
            if(papme == 1){
                let daystartTime = timestamp - (hour*60*60 + fen*60 + small);
                data.append('timeStart',daystartTime);
                data.append('timeEnd',timestamp)
            }

            if(papme ==2){
                 //本周时间戳
                let wek =  myDate.getDay() ;
                let wekChuo = 0;      //本周时间戳
                if(wek == 0){
                    wek = 7-1;        
                    wekChuo =  timestamp - (hour*60*60 + fen*60 + small) - wek*3600*24; 
                }else{
                    wek = wek -1;
                    wekChuo =  timestamp - (hour*60*60 + fen*60 + small) - wek*3600*24;
                }
                data.append('timeStart',wekChuo);
                data.append('timeEnd',timestamp)
            }

             if(papme ==3){
                 alert(papme);
                  //本月
                let yue  = myDate.getMonth()+1;
                let nian = myDate.getFullYear();
                let yueStartTime =  new Date(`${nian} ${yue} 1 00:00:00`).getTime(); 
                //    console.log(yueStartTime);
                data.append('timeStart',yueStartTime);
                data.append('timeEnd',timestamp)
             }   

             if(select == 99){
                    data.append('timeStart',papme[0]);
                    data.append('timeEnd',papme[1])
             }
                        
            homehttp.post( baseapi.dayorderxse,data).then(res=>{
               let list = res.data.list;
               let qushidata = [];
               let qushidatatime = [];
               list.forEach(function(item,index){
                    qushidata.push(item.moneyTotalReal/100);
                    qushidatatime.push(item.time);
               })
                this.qushidata = qushidata;
                this.qushidatatime = qushidatatime;              
             })  
        },
        //访问量
        financeNum(papme,select){
          if(this.timevalue != ''){
               papme = this.timevalue;
               select = 99;
           }else{
                  papme = this.qseltvalue;
           }
            let data = new FormData();
            //按日返回数据
            let timestamp = (Date.parse(new Date()))/1000;
            let myDate = new Date();
            let hour =   myDate.getHours();       //获取当前小时数(0-23)
            let fen =    myDate.getMinutes();     //获取当前分钟数(0-59)
            let small=   myDate.getSeconds();     //获取当前秒数(0-59)
            if(papme == 1){
                let daystartTime = timestamp - (hour*60*60 + fen*60 + small);
                data.append('timeStart',daystartTime);
                data.append('timeEnd',timestamp)
            }
 
            if(papme ==2){
              
                //本周时间戳
                let wek =  myDate.getDay() ;
                let wekChuo = 0;      //本周时间戳
                if(wek == 0){
                    wek = 7-1;        
                    wekChuo =  timestamp - (hour*60*60 + fen*60 + small) - wek*3600*24; 
                }else{
                    wek = wek -1;
                    wekChuo =  timestamp - (hour*60*60 + fen*60 + small) - wek*3600*24;
                }
                data.append('timeStart',wekChuo);
                data.append('timeEnd',timestamp)
            }


             if(papme ==3){
                  //本月
                let yue  = myDate.getMonth()+1;
                let nian = myDate.getFullYear();
                let yueStartTime =  new Date(`${nian} ${yue} 1 00:00:00`).getTime(); 
                //    console.log(yueStartTime);
                data.append('timeStart',yueStartTime);
                data.append('timeEnd',timestamp)
             }   

             if(select == 99){
                    data.append('timeStart',papme[0]);
                    data.append('timeEnd',papme[1])
             }

            homehttp.post( baseapi.financeNum,data).then(res=>{
            //    console.log(res.data.list);
               let list = res.data.list;
               let qushidata = [];
               let qushidatatime = [];
               list.forEach(function(item,index){
                    qushidata.push(item.num);
                    qushidatatime.push(item.time)
               })

                this.qushidata = qushidata;
                this.qushidatatime = qushidatatime;
                  
             })  
        },
        //订单数
        dayOrderNumMethod(papme,select){
            if(this.timevalue != ''){
               papme = this.timevalue;
               select = 99;
           }else{
                  papme = this.qseltvalue;
           }
            let data = new FormData();
            //按日返回数据
            let timestamp = (Date.parse(new Date()))/1000;
            let myDate = new Date();
            let hour =   myDate.getHours();       //获取当前小时数(0-23)
            let fen =    myDate.getMinutes();     //获取当前分钟数(0-59)
            let small=   myDate.getSeconds();     //获取当前秒数(0-59)
            if(papme == 1){
                let daystartTime = timestamp - (hour*60*60 + fen*60 + small);
                data.append('timeStart',daystartTime);
                data.append('timeEnd',timestamp)
            }

            if(papme ==2){
                 //本周时间戳
                let wek =  myDate.getDay() ;
                let wekChuo = 0;      //本周时间戳
                if(wek == 0){
                    wek = 7-1;        
                    wekChuo =  timestamp - (hour*60*60 + fen*60 + small) - wek*3600*24; 
                }else{
                    wek = wek -1;
                    wekChuo =  timestamp - (hour*60*60 + fen*60 + small) - wek*3600*24;
                }
                data.append('timeStart',wekChuo);
                data.append('timeEnd',timestamp)
            }


             if(papme ==3){
                  //本月
                let yue  = myDate.getMonth()+1;
                let nian = myDate.getFullYear();
                let yueStartTime =  new Date(`${nian} ${yue} 1 00:00:00`).getTime(); 
                //    console.log(yueStartTime);
                data.append('timeStart',yueStartTime);
                data.append('timeEnd',timestamp)
             }   

             if(select == 99){
                    data.append('timeStart',papme[0]);
                    data.append('timeEnd',papme[1])
             }
                       
            homehttp.post( baseapi.dayorderxse,data).then(res=>{
            //    console.log(res.data.list);
               let list = res.data.list;
               let qushidata = [];
               let qushidatatime = [];
               list.forEach(function(item,index){
                    qushidata.push(item.num);
                    qushidatatime.push(item.time)
               })

                this.qushidata = qushidata;
                this.qushidatatime = qushidatatime;
                  
             })  
        },
        //维权订单
        aftersaleNum(papme,select){
             if(this.timevalue != ''){
               papme = this.timevalue;
               select = 99;
           }else{
                  papme = this.qseltvalue;
           }
            let data = new FormData();
            //按日返回数据
            let timestamp = (Date.parse(new Date()))/1000;
            let myDate = new Date();
            let hour =   myDate.getHours();       //获取当前小时数(0-23)
            let fen =    myDate.getMinutes();     //获取当前分钟数(0-59)
            let small=   myDate.getSeconds();     //获取当前秒数(0-59)
            if(papme == 1){
                let daystartTime = timestamp - (hour*60*60 + fen*60 + small);
                data.append('timeStart',daystartTime);
                data.append('timeEnd',timestamp)
            }

            if(papme ==2){
                 //本周时间戳
                let wek =  myDate.getDay() ;
                let wekChuo = 0;      //本周时间戳
                if(wek == 0){
                    wek = 7-1;        
                    wekChuo =  timestamp - (hour*60*60 + fen*60 + small) - wek*3600*24; 
                }else{
                    wek = wek -1;
                    wekChuo =  timestamp - (hour*60*60 + fen*60 + small) - wek*3600*24;
                }
                data.append('timeStart',wekChuo);
                data.append('timeEnd',timestamp)
            }


             if(papme ==3){
                  //本月
                let yue  = myDate.getMonth()+1;
                let nian = myDate.getFullYear();
                let yueStartTime =  new Date(`${nian} ${yue} 1 00:00:00`).getTime(); 
                //    console.log(yueStartTime);
                data.append('timeStart',yueStartTime);
                data.append('timeEnd',timestamp)
             }   

             if(select == 99){
                    data.append('timeStart',papme[0]);
                    data.append('timeEnd',papme[1])
             }
                  
            homehttp.post( baseapi.aftersaleNum,data).then(res=>{
            //    console.log(res.data.list);
               let list = res.data.list;
               let qushidata = [];
               let qushidatatime = [];
               list.forEach(function(item,index){
                    qushidata.push(item.num);
                    qushidatatime.push(item.time)
               })

                this.qushidata = qushidata;
                this.qushidatatime = qushidatatime;
                  
             })  
        },
        getadpp(){
               
        },
        //sass数据
        sassData(){
            let that = this;
            let data = new FormData();
            homehttp.post( baseapi.homeDatavip,data).then(res=>{
                let data = res.data;
                    //地区访问量      
                    let addressView = data["visit.num.region"];
                    let newArr = [];          
                    addressView.forEach(function(item){
                    let obg = {};
                       obg.name = item.name.substring(0, item.name.length - 1); 
                       obg.value = parseInt(item.num);     
                       newArr.push(obg);
                    })
                    that.dataList = newArr;
                    that.drawLine();      

                    that.oneallprice = parseFloat(data["balance.total"]/100);          //总金额
                    that.allYprice  = parseFloat(data["cms.total"]/100);               //总佣金
                    that.cmswithdraw = parseFloat(data["cms.withdraw"]/100);           //已发放总佣金
                    that.cmswithdrawing = parseFloat(data["cms.withdrawing"]/100);     //正在提现总佣金 -- 审核中佣金
                    that.cmsdaiPrice = parseFloat(data["cms.usable"]/100);              //待提现总佣金

                    that.allxiaosouPrice  = parseFloat(data["order.total.sale"]['0']/100);  //总销售额
                    that.viewVipnum = data["visit.num"]['0'];         //总访问量
                    that.allpaynum = data["order.pay.total.num"];     //总支付笔数
                    that.totalVip = data["user.total.num"];           //总会员数user.total.num
              
                     let date = new Date();
                     let Y = date.getFullYear() + '';
                     let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '';
                    
                     let D =  (date.getDate() < 10 ? '0'+(date.getDate()) : date.getDate()) + ''
                     let thisDayTime= Y+M+D
            
                    //今日订单数 thisDayTime-> 地区订单数
                    let newStrnum = parseInt(thisDayTime);
                 
                    data["shop.visit.spu.num"][newStrnum] == undefined ?   that.viewALLnum = 0 :   that.viewALLnum = data["shop.visit.spu.num"][newStrnum];
                        
                    that.dayordernum =   data["order.total.num"][newStrnum]; //维权订单数总数
                    that.weiQnum =  data["order.aftersale.num"]['0'];

                   


                    //今日维权订单数
                    data["order.aftersale.num"][newStrnum] == undefined|| data["order.aftersale.num"][newStrnum] ==null 
                    || data["order.aftersale.num"][newStrnum] == ''?  that.weiDaynum = 0 :   that.weiDaynum =  data["order.aftersale.num"][newStrnum];
                   
                    //今日新增会员数
                    data["user.total.num"][newStrnum] == undefined|| data["user.total.num"][newStrnum] ==null 
                    || data["user.total.num"][newStrnum] == ''?  that.dayVip = 0 :   that.dayVip =  data["user.total.num"][newStrnum];
                    //今日支付笔数
                    that.daypaytime =    data["order.pay.day.num"];   // 今日支付笔数
                    //今日访问量
                    data["visit.day.num"] == undefined ?  that.dayviewNum = 0  : that.dayviewNum = data["visit.day.num"];
    
                    //今日销售额  总销售额

                    //今日总订单数
                    let allorderNumber  =  data["order.total.num"][newStrnum]
                    // console.log( data["order.total.num"][newStrnum]);

                    //今日订单分布 
                    let dayorderfenbu =  data["order.num.region"] ;
                    let newDayOrder = [];
                    dayorderfenbu.forEach(function(item,index){
                     
                        if(index <= 9){
                            item.cssbai = ((item.num/allorderNumber)*100) + "%"
                            newDayOrder.push(item);
                        }
                    });
                    that.jinday = newDayOrder;

                     //    allorderNumber
                
             })  
        },
        drawLine(){
            let that = this;
            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById('myChart'));
            that.myChart = myChart;
            // 绘制图表
            myChart.setOption({
            tooltip: {
                triggerOn: "click",
                formatter: function(e, t, n) {
                    // console.log(e);
                    return .5 == e.value ? e.name + "访问量" : "访问量" + "<br />" + e.name + "：" + e.value
                }
            },
            visualMap: {
                min: 0,
                max: 1000,
                left: 26,
                bottom: 40,
                showLabel: !0,
                text: ["高", "低"],
                pieces: [{
                    gt: 100,
                    label: "> 100 人",
                    color: "#f6c143"
                }, {
                    gte: 10,
                    lte: 100,
                    label: "10 - 100 人",
                    color: "#adcd7a"
                }, {
                    gte: 1,
                    lt: 10,
                    label: "1 - 9 人",
                    color: "#8fd4a7"
                },
                // , {
                //     gt: 0,
                //     lt: 1,
                //     label: "有意向",
                //     color: "#cee6e2"
                // }, 
                {
                    value: 0,
                    color: "#e7ecf0"
                }],
                show: !0
            },
            // visualMap: { //图例值控制
            // 	min: 0,
            // 	max: 1,
            // 	calculable: true,
            // 	show: true,
            //     color:['#f6c143','#adcd7a','#8fd4a7', '#cee6e2','#e7ecf0'],  // 最后的白色
            // 	textStyle: {
            // 		color: '#fff'
            // 	}
            // },
            geo: {
                map: "china",
                roam: !1,
                scaleLimit: {
                    min: 1,
                    max: 2
                },
                zoom: 1.23,
                top: 120,
                label: {
                    normal: {
                        show: !0,
                        fontSize: "14",
                        color: "rgba(0,0,0,0.7)"
                    }
                },
                itemStyle: {
                    normal: {
                        //地图加阴影
                        // shadowBlur: 50,
                        // shadowColor: 'rgba(0, 0, 0, 0.2)',
                        borderColor: "rgba(0, 0, 0, 0.2)"
                    },
                    emphasis: {
                        areaColor: "#f2d5ad",
                        shadowOffsetX: 0,
                        shadowOffsetY: 0,
                        borderWidth: 0
                    }
                }
            },
            series: [{
                name: "商户数",
                type: "map",
                geoIndex: 0,
                data: that.dataList
                }]
            });
        },
        qushiecharts(){
            let that = this;
            let myCanvasTwo = echarts.init(document.getElementById('myCanvasTwo'));
            myCanvasTwo.setOption({
                  color: ['#7092d3'],
                   xAxis: {
                    type: 'category',
                    data: that.qushidatatime, 
                        },
                        yAxis: {
                            type: 'value',
                            splitLine: {
                            lineStyle: {
                                type: 'dashed'
                            }
                        },
                        },
                        series: [{
                            data: that.qushidata,
                            type: 'bar'
                        }]
            })
        },
        qushiTab(index){
          let that = this;
          this.isShow = index; 
          //销售额
         if(index ==0){
              this.qieFlog = 1;
              this.dayOrderXS(1);
              return false;
          }  
         //访问量
          if(index ==1){
              this.qieFlog = 2;
              this.financeNum(1);
              return false;
          }  

            if(index ==2){
              this.qieFlog = 3;
              this.dayOrderNumMethod(1);    

              return false;
          } 

            if(index ==3){
              that.qushidata=[0,0,0,0,0,0,0];  
              return false;
          } 

            if(index ==4){
              this.qieFlog = 5;
              this.aftersaleNum(1);
              return false;
          } 
        
        },
    },
    components:{
        navbar,sidebar, basicInfoView
    }
}
</script>

<style>
.home_basicInfoView {
    margin: 10px 0px 30px 0px;
}
.home_basicInfoView1{
    /* display: flex;
    justify-content: space-around;
    align-items: stretch; */
    /* width: 30%; */
    display: flex;
    align-items: stretch;
}
.home_basicInfoView2{
    display: flex;
}
.home_infoView{
    display: flex;
    margin: 10px 10px 10px 0px;
    min-width: 270px;
    background: yellow;
}
.home_infoView4{
    display: flex;
    margin: 10px 0px 10px 0px;
    min-width: 270px;
}



.mihuantimeclass{
        /* width: 100px; */
        display: flex;
        justify-items: center;
    }
.mh-home-qushiDiv_divtwo{
        width: 250px;
        position: relative;
    }

.mh-home-qushiDiv_divtwo .el-range-editor{
        width: 240px !important;
        display: flex;
        align-items: center;
    }
.mh-home-qushiDiv_divtwo .el-range-editor .el-range__icon{
        line-height: 26px;
    }
.mh-home-qushiDiv_divtwo .el-range-editor  .el-range-separator {
        line-height: 25px;
}


</style>