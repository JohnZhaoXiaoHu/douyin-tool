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
                 <div class="goods-card_body goodsset-body">

                     <div class="edit-item goods-item goods-set">
                        <div  class="edit-info">
                            <h3>小程序是否隐藏头部导航栏</h3>
                            <p>开启后，小程序将显示头部导航栏</p>
                        </div>
                        <div class="goods-item-ctn">
                            <el-switch v-model="setvalue0" @change="setvalue1method(setvalue0,0)"></el-switch>
                        </div>
                    </div>


                    <div class="edit-item goods-item goods-set">
                        <div  class="edit-info">
                            <h3>购买记录</h3>
                            <p>开启后，商品详情页将显示购买记录</p>
                        </div>
                        <div class="goods-item-ctn">
                            <el-switch v-model="setvalue1" @change="setvalue1method(setvalue1,1)"></el-switch>
                        </div>
                    </div>

                    <div class="edit-item goods-item goods-set">
                        <div  class="edit-info">
                            <h3>浏览参与记录</h3>
                            <p>开启后，商品详情页将显示浏览/参与记录</p>
                        </div>
                        <div class="goods-item-ctn">
                            <el-switch v-model="value2"  @change="setvalue1method(value2,2)"></el-switch>
                        </div>
                    </div>

                    <div class="edit-item goods-item goods-set">
                        <div  class="edit-info">
                            <h3>是否显示预计佣金</h3>
                            <p>开启后，商品详情页、列表页显示预计赚取的佣金</p>
                        </div>
                        <div class="goods-item-ctn">
                            <el-switch v-model="value3" @change="setvalue1method(value3,3)"></el-switch>
                        </div>
                    </div>

                    <div class="edit-item goods-item goods-set">
                        <div  class="edit-info">
                            <h3>商品列表页小图展示</h3>
                            <p>开启后，手机端商品列表页默认显示两列</p>
                        </div>
                        <div class="goods-item-ctn">
                            <el-switch v-model="value4" @change="setvalue1method(value4,4)"></el-switch>
                        </div>
                    </div>

                    <div class="edit-item goods-item goods-set">
                        <div  class="edit-info">
                            <h3>商品列表页显示市场价</h3>
                            <p>开启后，商品列表页会展示市场价</p>
                        </div>
                        <div class="goods-item-ctn">
                            <el-switch v-model="value5" @change="setvalue1method(value5,5)"></el-switch>
                        </div>
                    </div>

                    <div class="edit-item goods-item goods-set">
                        <div  class="edit-info">
                            <h3>营销活动商品首页，详情页展示渠道商价格</h3>
                            <p>开启后，营销活动商品会在首页，详情页展示对应渠道商等级价格</p>
                        </div>
                        <div class="goods-item-ctn">
                            <el-switch v-model="value6" @change="setvalue1method(value6,6)"></el-switch>
                        </div>
                    </div>

                    <div class="edit-item goods-item goods-set">
                        <div  class="edit-info">
                            <h3>商品详情页展示积分最高抵现多少</h3>
                            <p>开启后，商品详情页展示积分最高抵现多少</p>
                        </div>
                        <div class="goods-item-ctn">
                            <el-switch v-model="value7" @change="setvalue1method(value7,7)"></el-switch>
                        </div>
                    </div>
                    <!--按钮筛选结束-->


                    <div class="goods-set-radio">
                        <span class="goods-set-radio-span">复购生效规则</span>
                         <div>
                             <el-radio v-model="value8" label="1" @change="getbuymoeny">付款后生效</el-radio>
                             <el-radio v-model="value8" label="2" @change="getbuymoeny">交易完成后生效</el-radio>
                         </div>
                    </div>

                    <div class="goods-set-radio">
                        <span class="goods-set-radio-span">复购规则设置</span>
                        <div>
                            <el-radio v-model="value9" label="1" @change="fugouguize">购买过同件商品才能享受复购价</el-radio>
                            <el-radio v-model="value9" label="2" @change="fugouguize">购买任何商品都能享受复购价</el-radio>
                            <el-radio v-model="value9" label="3" @change="fugouguize">购物满多少元才能享受复购价</el-radio>
                        </div>
                    </div>

                    <div class="goods-set-radioshop" v-if="goodpricevalue">
                            <span>购物满:</span>
                            <input type="Number" autocomplete="off" v-model="goodsvalue2" min="0" class="el-input__inner goods-set-radioinput">
                            <span>元</span>
                    </div>


                    <!--手机图片-->
                    <div class="goodset-wxphone-main">
                        <!--手机图-->
                        <div class="goodset-wxphone">
                            <div class="goodset-wxphone-detail">商品详情</div>
                            <div class="goodset-wxphone-detail-main">
                                <div class="goodset-wxphone-main-bottom">
                                    <div class="goodset-wx-mb-div">
                                        <div v-if="shopchecked" :style="shopcss">
                                            <span class="iconfont icon-shangchengshouye"></span>
                                            <span>{{shopname}}</span>
                                        </div>
                                        <div  v-if="gochecked" :style="gocss">
                                            <span class="iconfont icon-gouwuche1"></span>
                                            <span>{{goname}}</span>
                                        </div>
                                        <div v-if="erchecked" :style="ercss">
                                            <span class="iconfont icon-erweima"></span>
                                            <span>{{ername}}</span>
                                        </div>
                                    </div>
                                    
                                    <div class="goodset-wx-mb-rightdiv" v-if="xuanstyle1" :style="anniuheight">
                                       <button  class="goodset-wxphone-text-button goodset-jindain" :style="addcartcss" v-if="addgocarchecked">{{addcartname}}</button>
                                       <button  class="goodset-wxphone-text-button goodsetbuy-gexin" v-if="buychecked" :style="buycss">{{buyname}}</button>
                                   </div>

                                   <div class="goodset-wx-mb-rightdiv" v-if="xuanstyle2" :style="anniuheight">
                                       <button  class="goodset-wxphone-text-button goodset-gwc" :style="addcartcss" v-if="addgocarchecked">{{addcartname}}</button>
                                       <button  class="goodset-wxphone-text-button goodsetbuy" v-if="buychecked" :style="buycss">{{buyname}}</button>
                                   </div> 
                                </div>
                            </div>
                        </div>
                        <!--手机图over-->

                        <!--手机设置-->
                        <div class="goodset-wxphone-content">
                            <div class="goodset-wxphone-content_toptit">
                                <span class="goodset-wx-tit">商品详情页按钮自定义</span>
                                <span class="goodset-wxphone-content_toptit_span">（小程序不支持自定义链接）</span>
                            </div>

                            <div style="margin-bottom: 10px">
                                <span class="goodset-wx-tit goodset-wx-tititem">推荐主题</span>
                                <el-radio v-model="tuiitemvalue" label="1" @change="jingdianStyle()">还原经典风</el-radio>
                                <el-radio v-model="tuiitemvalue" label="2" @change="gexxingtyle()">还原个性风</el-radio>
                            </div>

                            <div class="goodset-wx-cju">
                                <div class="goodset-wx-cju_one">
                                    <span>按钮间距</span>
                                    <el-slider v-model="anniu1" style="width: 209px" @input="anniu1meth()"></el-slider>
                                </div>
                                <div>
                                    <span>按钮高度</span>
                                    <el-slider v-model="anniu2" style="width:209px" @input="anniutwometh()"></el-slider>
                                </div>
                            </div>

                            <div class="goodset-wx-backcoloe">
                                   <span class="goodset-wx-backcoloe_span">背景色</span>

                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker color-format="rgb" v-model="bgcolor1" @change="bgcolorone"></el-color-picker>
                                    <span class="goodset-wx-backcoloe_div_span">--</span>
                                    <el-color-picker color-format="rgb" v-model="bgcolor2" @change="bgcolortwo"></el-color-picker>
                                </div>
                            </div>

                            <div class="goodset-wx-backcoloe_divdianpu">
                                <el-checkbox v-model="shopchecked" style="margin-right: 16px" @change="checkedshop">店铺</el-checkbox>
                                <input type="text" autocomplete="off" placeholder="自定义按钮名称" class="el-input__inner" v-model="shopname">
                                <input type="text" autocomplete="off" placeholder="自定义跳转页" class="el-input__inner">
                            </div>

                            <div class="goodset-wx-fontw">
                                <span class="goodset-wx-fontw_span">字体粗细</span> 
                                <el-radio v-model="shopfontvalue1" label="1" @change="shopfontxi">400</el-radio>
                                <el-radio v-model="shopfontvalue1" label="2" @change="shopfontxi" >700</el-radio>
                            </div>

                            <div class="goodset-wx-backcoloe">
                                <span class="goodset-wx-backcoloe_span">背景色</span>

                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="shopcolor1" @change="shopbgcolorone"></el-color-picker>
                                    <span class="goodset-wx-backcoloe_div_span">--</span>
                                    <el-color-picker v-model="shopcolor2" @change="shopbgcolortwo"></el-color-picker>
                                </div>
                                <span class="goodset-wx-backcoloe_spantwo">字体颜色</span>
                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="shopfontcolor" @change="shopfontcolormeth"></el-color-picker>
                                   
                                </div>
                                <button  type="button" class="el-button el-button--text"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修改徽标</font></font></span></button>
                                <button  type="button" class="el-button el-button--text"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还原</font></font></span></button>
                            </div>

                            <!--购物车-->
                            <div class="goodset-wx-backcoloe_divdianpu">
                                <el-checkbox v-model="gochecked" style="margin-right: 16px">购物车</el-checkbox>
                                <input type="text" autocomplete="off" placeholder="自定义按钮名称" class="el-input__inner" v-model="goname">
                                <input type="text" autocomplete="off" placeholder="自定义跳转页" class="el-input__inner">
                            </div>

                            <div class="goodset-wx-fontw">
                                <span class="goodset-wx-fontw_span">字体粗细</span>
                                <el-radio v-model="gofontvalue1" label="1" @change="gofontxi">400</el-radio>
                                <el-radio v-model="gofontvalue1" label="2" @change="gofontxi">700</el-radio>
                            </div>

                            <div class="goodset-wx-backcoloe">
                                <span class="goodset-wx-backcoloe_span">背景色</span>

                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="gocolor1" @change="gobgcolorone"></el-color-picker>
                                    <span class="goodset-wx-backcoloe_div_span">--</span>
                                    <el-color-picker v-model="gocolor2" @change="gobgcolortwo"></el-color-picker>
                                </div>
                                <span class="goodset-wx-backcoloe_spantwo">字体颜色</span>
                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="gofontcolor" @change="gofontcolormeth"></el-color-picker>
                            
                                </div>
                                <button  type="button" class="el-button el-button--text"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修改徽标</font></font></span></button>
                                <button  type="button" class="el-button el-button--text"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还原</font></font></span></button>
                            </div>

                            <!--二维码-->
                            <!--购物车-->
                            <div class="goodset-wx-backcoloe_divdianpu">
                                <el-checkbox v-model="erchecked" style="margin-right: 16px">二维码</el-checkbox>
                                <input type="text" autocomplete="off" placeholder="自定义按钮名称" v-model="ername" class="el-input__inner">
                                <span style="color: #606266">提示：点击按钮弹出商品二维码</span>
                            </div>

                            <div class="goodset-wx-fontw">
                                <span class="goodset-wx-fontw_span">字体粗细</span>
                                <el-radio v-model="erfontvalue1" label="1" @change="erfontxi">400</el-radio>
                                <el-radio v-model="erfontvalue1" label="2" @change="erfontxi">700</el-radio>
                            </div>

                            <div class="goodset-wx-backcoloe">
                                <span class="goodset-wx-backcoloe_span">背景色</span>

                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="ercolor1" @change="erbgcolorone"></el-color-picker>
                                    <span class="goodset-wx-backcoloe_div_span">--</span>
                                    <el-color-picker v-model="ercolor2" @change="erbgcolortwo"></el-color-picker>
                                </div>
                                <span class="goodset-wx-backcoloe_spantwo">字体颜色</span>
                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="erfontcolor" @change="erfontcolormeth"></el-color-picker>
                                    
                                </div>
                                <button  type="button" class="el-button el-button--text"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修改徽标</font></font></span></button>
                                <button  type="button" class="el-button el-button--text"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还原</font></font></span></button>
                            </div>

                            <!--客服-->
                            <!-- <div class="goodset-wx-backcoloe_divdianpu">
                                <el-checkbox v-model="checked" style="margin-right: 16px">客服</el-checkbox>
                                <input type="text" autocomplete="off" placeholder="自定义按钮名称" class="el-input__inner">
                            </div>

                            <div class="goodset-wx-fontw">
                                <span class="goodset-wx-fontw_span">字体粗细</span>
                                <el-radio v-model="radio" label="1">400</el-radio>
                                <el-radio v-model="radio" label="2">700</el-radio>
                            </div>

                            <div class="goodset-wx-backcoloe">
                                <span class="goodset-wx-backcoloe_span">背景色</span>

                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="color1"></el-color-picker>
                                    <span class="goodset-wx-backcoloe_div_span">--</span>
                                    <el-color-picker v-model="color1"></el-color-picker>
                                </div>
                                <span class="goodset-wx-backcoloe_spantwo">字体颜色</span>
                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="color1"></el-color-picker>
                                    <span class="goodset-wx-backcoloe_div_span">--</span>
                                    <el-color-picker v-model="color1"></el-color-picker>
                                </div>
                                <button  type="button" class="el-button el-button--text"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">修改徽标</font></font></span></button>
                                <button  type="button" class="el-button el-button--text"><span><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">还原</font></font></span></button>
                            </div> -->
                            <!---->
                            <!--加入购物车-->
                            <div class="goodset-wx-backcoloe_divdianpu">
                                <el-checkbox v-model="addgocarchecked" style="margin-right: 16px">加入购物车</el-checkbox>
                                <input type="text" v-model="addcartname" autocomplete="off" placeholder="自定义按钮名称" class="el-input__inner">
                                <input type="text" autocomplete="off" placeholder="自定义跳转页" class="el-input__inner">
                            </div>

                            <div class="goodset-wx-cju">
                                <div class="goodset-wx-cju_one">
                                    <span>左上圆角</span> 
                                    <el-slider v-model="leftyvalue" style="width: 209px" @input="addcartlefty"></el-slider>
                                </div>
                                <div>
                                    <span>右上圆角</span>
                                    <el-slider v-model="rightyvalue" style="width: 209px" @input="addcartrighty"></el-slider>
                                </div>
                            </div>

                            <div class="goodset-wx-cju">
                                <div class="goodset-wx-cju_one">
                                    <span>左下圆角</span>
                                    <el-slider v-model="leftxiavalue" style="width: 209px" @input="addcartlxvalue"></el-slider>
                                </div>
                                <div>  
                                    <span>右下圆角</span>
                                    <el-slider v-model="rightxiavalue" style="width: 209px" @input="addcartlx"></el-slider>
                                </div>
                            </div>

                            <div class="goodset-wx-cju" style="margin-bottom: 5px">
                                <!-- <div class="goodset-wx-cju_one">
                                    <span>字体大小</span>
                                    <el-slider v-model="value1" style="width: 209px"></el-slider>
                                </div>
                                <div>
                                    <span>按钮宽度</span>
                                    <el-slider v-model="value1" style="width: 209px"></el-slider>
                                </div> -->
                            </div>

                            <div class="goodset-wx-fontw">
                                <span class="goodset-wx-fontw_span">字体粗细</span>
                                <el-radio v-model="addcartfontvalue1" label="1" @change="addcartfontxi">400</el-radio>
                                <el-radio v-model="addcartfontvalue1" label="2" @change="addcartfontxi">700</el-radio>
                            </div>

                            <div class="goodset-wx-backcoloe">
                                <span class="goodset-wx-backcoloe_span">背景色</span>

                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="addcartcolor1" @change="addcartbgcolorone"></el-color-picker>
                                    <span class="goodset-wx-backcoloe_div_span">--</span>
                                    <el-color-picker v-model="addcartcolor2" @change="addcartbgcolortwo"></el-color-picker>
                                </div>
                                <span class="goodset-wx-backcoloe_spantwo">字体颜色</span>
                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="addcartfontcolor" @change="addcartfontcolormeth"></el-color-picker>
                                </div>
                            </div>
                            <!--购物车结束-->

                            <div class="goodset-wx-backcoloe_divdianpu">
                                <el-checkbox v-model="buychecked" style="margin-right: 16px">立即购买</el-checkbox>
                                <input type="text" autocomplete="off" v-model="buyname" placeholder="自定义按钮名称" class="el-input__inner">
                                <input type="text" autocomplete="off" placeholder="自定义链接" class="el-input__inner">
                            </div>

                            <div class="goodset-wx-cju">
                                <div class="goodset-wx-cju_one">
                                    <span >左上圆角</span>
                                    <el-slider v-model="buyleftyvalue" style="width: 209px" @input="buylefty"></el-slider>
                                </div>
                                <div>
                                    <span>右上圆角</span>
                                    <el-slider v-model="buyrightyvalue" style="width: 209px" @input="buyrighty"></el-slider>
                                </div>
                            </div>

                            <div class="goodset-wx-cju">
                                <div class="goodset-wx-cju_one">
                                    <span>左下圆角</span>
                                    <el-slider v-model="buyleftxiavalue" style="width: 209px" @input="buylxvalue"></el-slider>
                                </div>
                                <div>
                                    <span>右下圆角</span>
                                    <el-slider v-model="buyrightxiavalue" style="width: 209px" @input="buylx"></el-slider>
                                </div>
                            </div>

                            <div class="goodset-wx-cju" style="margin-bottom: 5px">
                                <!-- <div class="goodset-wx-cju_one">
                                    <span>字体大小</span>
                                    <el-slider v-model="value1" style="width: 209px"></el-slider>
                                </div>
                                <div>
                                    <span>按钮宽度</span>
                                    <el-slider v-model="value1" style="width: 209px"></el-slider>
                                </div> -->
                            </div>

                            <div class="goodset-wx-fontw">
                                <span class="goodset-wx-fontw_span">字体粗细</span>
                                <el-radio v-model="buyfontvalue1" label="1" @change="buyfontxi" >400</el-radio>
                                <el-radio v-model="buyfontvalue1" label="2" @change="buyfontxi">700</el-radio>
                            </div>

                            <div class="goodset-wx-backcoloe">
                                <span class="goodset-wx-backcoloe_span">背景色</span>

                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="buycolor1" @change="buybgcolorone"></el-color-picker>
                                    <span class="goodset-wx-backcoloe_div_span">--</span>
                                    <el-color-picker v-model="buycolor2" @change="buybgcolortwo"></el-color-picker>
                                </div>
                                <span class="goodset-wx-backcoloe_spantwo">字体颜色</span>
                                <div class="goodset-wx-backcoloe_div">
                                    <el-color-picker v-model="buyfontcolor" @change="buyfontcolormeth"></el-color-picker>
                                </div>
                            </div>

                            <div style="margin-bottom: 10px">
                                <span class="goodset-wx-tit goodset-wx-tititem">结束文案</span>
                                <el-radio v-model="radio" label="1">已售多余</el-radio>
                                <el-radio v-model="radio" label="2">已结束</el-radio>
                            </div>


                            <!---->
                        </div>
                        <!--手机设置over-->
                    </div>


                    <!--手机图片over-->

                    <!--最下面保存-->
                    <div class="goodset-wxphone-footer-bar"><button @click="goodsetSave" type="button" class="el-button el-button--primary el-button--small"><span>保存</span></button></div>

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
import secnavbar from './secnavbar';
import baseapi from '../../utils/api';
export default {
      data() {
     
        return {
            goodsid:0,
            //上面选择
            setvalue0:false,
            setvalue1:false,
            value2:false,
            value3:false,
            value4:false,
            value5:false,
            value6:false,
            value7:false,
            value8:'1',
            value9:'1',
            goodpricevalue:false,
            goodsvalue2:'',
  
            radio: '1',
            color1:'',
            checked:'',
            value:[],
            
            tuiitemvalue:'1',  //推荐主题
            xuanstyle1:true,   //选择的风格
            xuanstyle2:false,  //选择的风格2

            anniu1:'',         // 按钮间距
           
            anniu2:34,
            anniuheight:'height:34px',//按钮高度

            bgcolor1:'',         //背景色
            bgcolor2:'' ,         //背景色

            shopchecked:true,       //店铺小模块
            shopname:'店铺',
            dianpuweight:'',
            shopfontvalue1:'1',
            shopcolor1:'rgb(255, 255, 255)',
            shopcolor2:'rgb(255, 255, 255)',
            shopfontcolor:'',
            shopcss:'',

            gochecked:true,       //购物车
            goname:'购物车',
            gowuweight:'',
            gofontvalue1:'1',
            gocolor1:'rgb(255, 255, 255)',
            gocolor2:'rgb(255, 255, 255)',
            gofontcolor:'',
            gocss:'',

            erchecked:true,       //二维码
            ername:'二维码',
            erweight:'',
            erfontvalue1:'1',
            ercolor1:'rgb(255, 255, 255)',
            ercolor2:'rgb(255, 255, 255)',
            erfontcolor:'',
            ercss:'',

            jianju:'margin-right:0px', //加入购物车
            addgocarchecked:true,
            addcartname:'加入购物车',
            addcartwuweight:'',
            addcartfontvalue1:'1',
            addcartcolor1:'rgb(255, 156, 0)',
            addcartcolor2:'rgb(255, 187, 0)',
            addcartfontcolor:'rgb(255, 255, 255)',
            addcartcss:'',
            leftyvalue:'',     //左上圆角
            rightyvalue:'' ,
            leftxiavalue:'',
            rightxiavalue:'',
               
            //立即购买
            buychecked:true,
            buyname:'立即购买',
            buywuweight:'',
            buyfontvalue1:'1',
            buycolor1:'rgb(255, 6, 65)',
            buycolor2:'rgb(254, 114, 100)',
            buyfontcolor:'rgb(255, 255, 255)',
            buycss:'',
            buyleftyvalue:'',     //左上圆角
            buyrightyvalue:'' ,
            buyleftxiavalue:'',
            buyrightxiavalue:''
           
        };
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.adminorderSetall();
            } else {
                next('/login');
            }
		})
	},
    mounted(){
       
       
    },
    methods:{
        //设置  // 1 yes  0 false  id写的是必传这里是假数据    
        setvalue1method(thisstatus,status){
            let that = this;
            let selectid = 0;
            thisstatus ? selectid = 1 : selectid = 0;       
            let data = new FormData();


            if(status == 0){
                data.append('mpShowNavigation',selectid);   //购买记录
            }

             if(status == 1){
                data.append('isshowBuyrecord',selectid);   //购买记录
            }
             if(status == 2){
                data.append('isshowViewrecord',selectid);  //浏览记录
            }

             if(status == 3){
                data.append('isshowPredictcommission',selectid);  //是否显示佣金
            }

             if(status == 4){
                data.append('isshowListSmallimg',selectid);       //列表页
            }
              if(status == 5){
                data.append('isshowListMarketprice',selectid); 
            }
           
             if(status == 6){
                data.append('isshowChannelprice',selectid);       //渠道商价格
            }
           
             if(status == 7){
                data.append('isshowIntegralHighoffset',selectid);  //抵现
            }
           if(this.goodsid){
                data.append('id',this.goodsid);  
           }
         
        
            this.http.post( baseapi.goodsshopseeting,data).then(res=>{
                    console.log(res);  
                    if(res.data.status == 200){
                         that.$message.success('操作成功');
                         that.adminorderSetall();
                    }
                   
                }) 
        },
        //请求订单详情
        adminorderSetall(){
            let that = this;
            let data = new FormData();
            this.http.post( baseapi.goodsseetingquery,data).then(res=>{
                    let settingData = res.data.setting;

                    if(settingData.mpShowNavigation){
                        settingData.mpShowNavigation == 1 ?   this.setvalue0  = true :   this.setvalue0 = false
                    }
                    //购买记录
                    if(settingData.buyRecord){
                        settingData.buyRecord == 1 ?   this.setvalue1  = true :   this.setvalue1 = false
                    }
                    //浏览记录
                    if(settingData.viewRecord){
                        settingData.viewRecord == 1 ?   this.value2  = true :   this.value2 = false
                    }
                    //预计佣金
                    if(settingData.predictCms){
                        settingData.predictCms == 1 ?   this.value3  = true :   this.value3 = false
                    }
                    //商品列表视图展示
                    if(settingData.listSmallImg){
                        settingData.listSmallImg == 1 ?   this.value4  = true :   this.value4 = false
                    }
                   //市场价 
                     if(settingData.listMarketPrice){
                        settingData.listMarketPrice == 1 ?   this.value5  = true :   this.value5 = false
                    }
                    // 渠道商价格
                    if(settingData.channelPrice){
                        settingData.channelPrice == 1 ?   this.value6  = true :   this.value6 = false
                    }
                    //积分底线
                     if(settingData.integralHighOffset){
                        settingData.integralHighOffset == 1 ?   this.value7 = true :   this.value7 = false
                    }

                    //复购生效规格repurchase  
                      if(settingData.repurchase){
                        settingData.repurchase == 1 ?   this.value8 = '1' :   this.value8 = '2'
                    }
                      if(settingData.repurchaseRule){
                        settingData.repurchaseRule == 1 ? this.value9 = '1' :  settingData.repurchaseRule == 2 ? this.value9 = '2':settingData.repurchaseRule == 2;
                    }

                    that.goodsid =  settingData.id;     
             })  
        },
        //复购是否生效
        getbuymoeny(){
            let that = this;
            let data = new FormData();
            if(this.goodsid){
                data.append('id',this.goodsid);  
            }
            data.append('repurchase',this.value8)
            this.http.post( baseapi.goodsseeting,data).then(res=>{
            if(res.data.status == 200){
                    that.$message.success('操作成功');
                    that.adminorderSetall();
            }
            }) 
        },
        fugouguize(){
            let data = new FormData();
             if(this.goodsid){
                data.append('id',this.goodsid);  
            }
            data.append('repurchaseRule',this.value9)
            this.http.post( baseapi.goodsseeting,data).then(res=>{
            if(res.data.status == 200){
                    this.$message.success('操作成功');
                    this.adminorderSetall();
            }
             }) 
        },
        addcartlefty(){
          //  this.leftyvalue = this.leftyvalue;
            this.addcartcss ='border-bottom-right-radius:'+this.rightxiavalue+'px;'+'border-bottom-left-radius:'+this.leftxiavalue+'px;'+'border-top-right-radius:'+this.rightyvalue+'px;'+'border-top-left-radius:'+this.leftyvalue+'px;'+'margin-right:'+this.anniu1+'px;'+'color:'+this.addcartfontcolor+';'+ this.addcartwuweight+';background:linear-gradient(to right,'+ this.addcartcolor1 +','+this.addcartcolor2+')'; 
        },
        addcartrighty(){
            this.addcartcss ='border-bottom-right-radius:'+this.rightxiavalue+'px;'+'border-bottom-left-radius:'+this.leftxiavalue+'px;'+'border-top-right-radius:'+this.rightyvalue+'px;'+'border-top-left-radius:'+this.leftyvalue+'px;'+'margin-right:'+this.anniu1+'px;'+'color:'+this.addcartfontcolor+';'+ this.addcartwuweight+';background:linear-gradient(to right,'+ this.addcartcolor1 +','+this.addcartcolor2+')'; 
        },
        addcartlxvalue(){
            this.addcartcss ='border-bottom-right-radius:'+this.rightxiavalue+'px;'+'border-bottom-left-radius:'+this.leftxiavalue+'px;'+'border-top-right-radius:'+this.rightyvalue+'px;'+'border-top-left-radius:'+this.leftyvalue+'px;'+'margin-right:'+this.anniu1+'px;'+'color:'+this.addcartfontcolor+';'+ this.addcartwuweight+';background:linear-gradient(to right,'+ this.addcartcolor1 +','+this.addcartcolor2+')'; 
        },
        addcartlx(){
            this.addcartcss ='border-bottom-right-radius:'+this.rightxiavalue+'px;'+'border-bottom-left-radius:'+this.leftxiavalue+'px;'+'border-top-right-radius:'+this.rightyvalue+'px;'+'border-top-left-radius:'+this.leftyvalue+'px;'+'margin-right:'+this.anniu1+'px;'+'color:'+this.addcartfontcolor+';'+ this.addcartwuweight+';background:linear-gradient(to right,'+ this.addcartcolor1 +','+this.addcartcolor2+')'; 
        },    

        buylefty(){
          //  this.leftyvalue = this.leftyvalue;
            this.buycss ='border-bottom-right-radius:'+this.buyrightxiavalue+'px;'+'border-bottom-left-radius:'+this.buyleftxiavalue+'px;'+'border-top-right-radius:'+this.buyrightyvalue+'px;'+'border-top-left-radius:'+this.buyleftyvalue+'px;'+'color:'+this.buyfontcolor+';'+ this.buywuweight+';background:linear-gradient(to right,'+ this.buycolor1 +','+this.buycolor2+')';         
        },
        buyrighty(){
             this.buycss ='border-bottom-right-radius:'+this.buyrightxiavalue+'px;'+'border-bottom-left-radius:'+this.buyleftxiavalue+'px;'+'border-top-right-radius:'+this.buyrightyvalue+'px;'+'border-top-left-radius:'+this.buyleftyvalue+'px;'+'color:'+this.buyfontcolor+';'+ this.buywuweight+';background:linear-gradient(to right,'+ this.buycolor1 +','+this.buycolor2+')';
        },
        buylxvalue(){
             this.buycss ='border-bottom-right-radius:'+this.buyrightxiavalue+'px;'+'border-bottom-left-radius:'+this.buyleftxiavalue+'px;'+'border-top-right-radius:'+this.buyrightyvalue+'px;'+'border-top-left-radius:'+this.buyleftyvalue+'px;'+'color:'+this.buyfontcolor+';'+ this.buywuweight+';background:linear-gradient(to right,'+ this.buycolor1 +','+this.buycolor2+')';
        },
        buylx(){
             this.buycss ='border-bottom-right-radius:'+this.buyrightxiavalue+'px;'+'border-bottom-left-radius:'+this.buyleftxiavalue+'px;'+'border-top-right-radius:'+this.buyrightyvalue+'px;'+'border-top-left-radius:'+this.buyleftyvalue+'px;'+'color:'+this.buyfontcolor+';'+ this.buywuweight+';background:linear-gradient(to right,'+ this.buycolor1 +','+this.buycolor2+')';
        },   
        /**选择风格 */
        jingdianStyle(){    
            console.log(this.tuiitemvalue);
            this.xuanstyle1 = true;
            this.xuanstyle2 = false;

            this.leftyvalue = 0;
            this.leftxiavalue = 0;
            this.rightyvalue = 0;
            this.rightxiavalue =0;

            this.buyleftyvalue =0;
            this.buyrightyvalue =0;
            this.buyleftxiavalue=0;
            this.buyrightxiavalue =0;
        },
        gexxingtyle(){
            console.log(this.tuiitemvalue);
            this.xuanstyle1 = false;
            this.xuanstyle2 = true;

            this.leftyvalue = 50;
            this.leftxiavalue = 50;
            this.rightyvalue = 0;
            this.rightxiavalue =0;

            this.buyleftyvalue =0;
            this.buyrightyvalue =50;
            this.buyleftxiavalue=0;
            this.buyrightxiavalue =50; 
        },
        /**按钮间距 */
       goodsetSave(){
           this.$message.success('保存成功');
           
           /*buttom    店铺数据 按钮名称 : shopname   跳转页 :    jumpshopname  字体粗细 : shopfontvalue1 背景色:shopcolor1 - shopcolor2  字体颜色:shopfontcolor */
           let   shopIndex = {'name':this.shopname,'jumpurl':this.jumpshopname,'css':this.shopcss};
            //购物车
           let car = {'name':this.goname,'jumpurl':this.jumpshopname,'css':this.gocss}
           //二维码
           let qrcode = {'name':this.ername,'jumpurl':this.jumpshopname,'css':this.ercss};

           //加入购物车 addcartname
            let addcart = {'name':this.addcartname,'jumpurl':this.jumpshopname,'css':this.addcartcss};
            console.dir('购物车数据',addcart)
            //立即购买
            let buyname =  {'name':this.buyname,'jumpurl':this.jumpshopname,'css':this.buycss};

            let common = {'style':this.tuiitemvalue,'jianju':this.anniu1,'height':this.anniu2,'background':this.bgcolor1,'background2':this.bgcolor2}
  
            console.log(common);
        
       },
        anniutwometh(){
            this.anniuheight = 'height:'+this.anniu2+'px;background:linear-gradient(to right,'+ this.bgcolor1 +','+this.bgcolor2+')';
            console.log(this.anniu2);        
        },
        bgcolorone(){
            this.anniuheight = 'height:'+this.anniu2+'px;background:linear-gradient(to right,'+ this.bgcolor1 +',rgb(255, 187, 0))';
            console.log(this.bgcolor1);
        },
        bgcolortwo(){
            this.anniuheight = 'height:'+this.anniu2+'px;background:linear-gradient(to right,'+ this.bgcolor1 +','+this.bgcolor2+')';   
        },
        //店铺事件
        checkedshop(){
            console.log(this.shopchecked)
        },
        //字体粗细
        shopfontxi(){
            if(this.shopfontvalue1 == 1){
                this.dianpuweight = "font-weight:400";
                 this.shopcss ='color:'+this.shopfontcolor+';'+ this.dianpuweight+';background:linear-gradient(to right,'+ this.shopcolor1 +','+this.shopcolor2+')'; 
            }else{
                this.dianpuweight = "font-weight:700";
                this.shopcss ='color:'+this.shopfontcolor+';'+ this.dianpuweight+';background:linear-gradient(to right,'+ this.shopcolor1 +','+this.shopcolor2+')'; 
            }
        },
        //店铺背景颜色
        shopbgcolorone(){
                this.shopcss ='color:'+this.shopfontcolor+';'+ this.dianpuweight+';background:linear-gradient(to right,'+ this.shopcolor1 +','+this.shopcolor2+')'; 
        },
        shopbgcolortwo(){
               this.shopcss ='color:'+this.shopfontcolor+';'+ this.dianpuweight+';background:linear-gradient(to right,'+ this.shopcolor1 +','+this.shopcolor2+')'; 
        },
        //字体颜色
        shopfontcolormeth(){ 
            this.shopfontcolor = this.shopfontcolor;
            this.shopcss ='color:'+this.shopfontcolor+';'+ this.dianpuweight+';background:linear-gradient(to right,'+ this.shopcolor1 +','+this.shopcolor2+')';     
       },
        //购物    --  字体粗细
        gofontxi(){
            if(this.gofontvalue1 == 1){
                this.gowuweight = "font-weight:400";
                 this.gocss ='color:'+this.gofontcolor+';'+ this.gowuweight+';background:linear-gradient(to right,'+ this.gocolor1 +','+this.gocolor2+')'; 
            }else{
                this.gowuweight = "font-weight:700";
                this.gocss ='color:'+this.gofontcolor+';'+ this.gowuweight+';background:linear-gradient(to right,'+ this.gocolor1 +','+this.gocolor2+')'; 
            }
        },
        //店铺背景颜色
        gobgcolorone(){
                this.gocss ='color:'+this.gofontcolor+';'+ this.gowuweight+';background:linear-gradient(to right,'+ this.gocolor1 +','+this.gocolor2+')'; 
        },
        gobgcolortwo(){
               this.gocss ='color:'+this.gofontcolor+';'+ this.gowuweight+';background:linear-gradient(to right,'+ this.gocolor1 +','+this.gocolor2+')'; 
        },
        //字体颜色
        gofontcolormeth(){
            this.gofontcolor = this.gofontcolor;
            this.gocss ='color:'+this.gofontcolor+';'+ this.gowuweight+';background:linear-gradient(to right,'+ this.gocolor1 +','+this.gocolor2+')';     
       },
        //二维码
        //字体粗细
        erfontxi(){
            if(this.erfontvalue1 == 1){
                this.erpuweight = "font-weight:400";
                 this.ercss ='color:'+this.erfontcolor+';'+ this.erpuweight+';background:linear-gradient(to right,'+ this.ercolor1 +','+this.ercolor2+')'; 
            }else{
                this.erpuweight = "font-weight:700";
                this.ercss ='color:'+this.erfontcolor+';'+ this.erpuweight+';background:linear-gradient(to right,'+ this.ercolor1 +','+this.ercolor2+')'; 
            }
        },
        //店铺背景颜色
        erbgcolorone(){
                this.ercss ='color:'+this.erfontcolor+';'+ this.erpuweight+';background:linear-gradient(to right,'+ this.ercolor1 +','+this.ercolor2+')'; 
        },
        erbgcolortwo(){
               this.ercss ='color:'+this.erfontcolor+';'+ this.erpuweight+';background:linear-gradient(to right,'+ this.ercolor1 +','+this.ercolor2+')'; 
        },
        //字体颜色
        erfontcolormeth(){ 
            this.erfontcolor = this.erfontcolor;
            this.ercss ='color:'+this.erfontcolor+';'+ this.erpuweight+';background:linear-gradient(to right,'+ this.ercolor1 +','+this.ercolor2+')';     
       },
        //加入购物车
        anniu1meth(){ 
            // this.jianju = ;
             this.addcartcss ='border-bottom-right-radius:'+this.rightxiavalue+'px;'+'border-bottom-left-radius:'+this.leftxiavalue+'px;'+'border-top-right-radius:'+this.rightyvalue+'px;'+'border-top-left-radius:'+this.leftyvalue+'px;'+'margin-right:'+this.anniu1+'px;'+'color:'+this.addcartfontcolor+';'+ this.addcartwuweight+';background:linear-gradient(to right,'+ this.addcartcolor1 +','+this.addcartcolor2+')'; 
             console.log(this.addcartcss);
       },
        addcartfontxi(){
            if(this.addcartfontvalue1 == 1){
                this.addcartwuweight = "font-weight:400"; 
                this.addcartcss ='border-bottom-right-radius:'+this.rightxiavalue+'px;'+'border-bottom-left-radius:'+this.leftxiavalue+'px;'+'border-top-right-radius:'+this.rightyvalue+'px;'+'border-top-left-radius:'+this.leftyvalue+'px;'+'margin-right:'+this.anniu1+'px;'+'color:'+this.addcartfontcolor+';'+ this.addcartwuweight+';background:linear-gradient(to right,'+ this.addcartcolor1 +','+this.addcartcolor2+')'; 
            }else{
                this.addcartwuweight = "font-weight:700";
                this.addcartcss ='border-bottom-right-radius:'+this.rightxiavalue+'px;'+'border-bottom-left-radius:'+this.leftxiavalue+'px;'+'border-top-right-radius:'+this.rightyvalue+'px;'+'border-top-left-radius:'+this.leftyvalue+'px;'+'margin-right:'+this.anniu1+'px;'+'color:'+this.addcartfontcolor+';'+ this.addcartwuweight+';background:linear-gradient(to right,'+ this.addcartcolor1 +','+this.addcartcolor2+')'; 
            }
        },
        //店铺背景颜色
        addcartbgcolorone(){
            this.addcartcss ='border-bottom-right-radius:'+this.rightxiavalue+'px;'+'border-bottom-left-radius:'+this.leftxiavalue+'px;'+'border-top-right-radius:'+this.rightyvalue+'px;'+'border-top-left-radius:'+this.leftyvalue+'px;'+'margin-right:'+this.anniu1+'px;'+'color:'+this.addcartfontcolor+';'+ this.addcartwuweight+';background:linear-gradient(to right,'+ this.addcartcolor1 +','+this.addcartcolor2+')'; 
        },
        addcartbgcolortwo(){
            this.addcartcss ='border-bottom-right-radius:'+this.rightxiavalue+'px;'+'border-bottom-left-radius:'+this.leftxiavalue+'px;'+'border-top-right-radius:'+this.rightyvalue+'px;'+'border-top-left-radius:'+this.leftyvalue+'px;'+'margin-right:'+this.anniu1+'px;'+'color:'+this.addcartfontcolor+';'+ this.addcartwuweight+';background:linear-gradient(to right,'+ this.addcartcolor1 +','+this.addcartcolor2+')'; 
        },
        //字体颜色
        addcartfontcolormeth(){
            this.addcartfontcolor = this.addcartfontcolor;
            this.addcartcss ='border-bottom-right-radius:'+this.rightxiavalue+'px;'+'border-bottom-left-radius:'+this.leftxiavalue+'px;'+'border-top-right-radius:'+this.rightyvalue+'px;'+'border-top-left-radius:'+this.leftyvalue+'px;'+'margin-right:'+this.anniu1+'px;'+'color:'+this.addcartfontcolor+';'+ this.addcartwuweight+';background:linear-gradient(to right,'+ this.addcartcolor1 +','+this.addcartcolor2+')'; 
       },

     //立即购买
           //字体粗细
        buyfontxi(){
            if(this.buyfontvalue1 == 1){
                this.buywuweight = "font-weight:400";
                this.buycss ='border-bottom-right-radius:'+this.buyrightxiavalue+'px;'+'border-bottom-left-radius:'+this.buyleftxiavalue+'px;'+'border-top-right-radius:'+this.buyrightyvalue+'px;'+'border-top-left-radius:'+this.buyleftyvalue+'px;'+'color:'+this.buyfontcolor+';'+ this.buywuweight+';background:linear-gradient(to right,'+ this.buycolor1 +','+this.buycolor2+')';
            }else{
                this.buywuweight = "font-weight:700";
                 this.buycss ='border-bottom-right-radius:'+this.buyrightxiavalue+'px;'+'border-bottom-left-radius:'+this.buyleftxiavalue+'px;'+'border-top-right-radius:'+this.buyrightyvalue+'px;'+'border-top-left-radius:'+this.buyleftyvalue+'px;'+'color:'+this.buyfontcolor+';'+ this.buywuweight+';background:linear-gradient(to right,'+ this.buycolor1 +','+this.buycolor2+')';
            }
        },
        //店铺背景颜色
        buybgcolorone(){
            this.buycss ='border-bottom-right-radius:'+this.buyrightxiavalue+'px;'+'border-bottom-left-radius:'+this.buyleftxiavalue+'px;'+'border-top-right-radius:'+this.buyrightyvalue+'px;'+'border-top-left-radius:'+this.buyleftyvalue+'px;'+'color:'+this.buyfontcolor+';'+ this.buywuweight+';background:linear-gradient(to right,'+ this.buycolor1 +','+this.buycolor2+')';
        },
        buybgcolortwo(){
            this.buycss ='border-bottom-right-radius:'+this.buyrightxiavalue+'px;'+'border-bottom-left-radius:'+this.buyleftxiavalue+'px;'+'border-top-right-radius:'+this.buyrightyvalue+'px;'+'border-top-left-radius:'+this.buyleftyvalue+'px;'+'color:'+this.buyfontcolor+';'+ this.buywuweight+';background:linear-gradient(to right,'+ this.buycolor1 +','+this.buycolor2+')';
        },
        //字体颜色
        buyfontcolormeth(){ 
            this.buyfontcolor = this.buyfontcolor;
            this.buycss ='border-bottom-right-radius:'+this.buyrightxiavalue+'px;'+'border-bottom-left-radius:'+this.buyleftxiavalue+'px;'+'border-top-right-radius:'+this.buyrightyvalue+'px;'+'border-top-left-radius:'+this.buyleftyvalue+'px;'+'color:'+this.buyfontcolor+';'+ this.buywuweight+';background:linear-gradient(to right,'+ this.buycolor1 +','+this.buycolor2+')';
       },
    },
    components:{
        navbar,sidebar,secnavbar    
    }
}
</script>

