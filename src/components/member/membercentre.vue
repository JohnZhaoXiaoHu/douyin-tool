<!--该模块需要引入商品分组的css组件集成在home.css中-->

<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <membersecnavbar></membersecnavbar>
            <div class="main-goods-right membercentre-main">
                <!-- 商品中心内容 -->
              <div class="wx-body wx-membercentre-main mh-member-body">

                    <!--手机H5页面-->
                    <div class="wx-content">
                        <div class="wx-main" >

                            <div class="wx-h5" >
                                <div class="wx-h5-header">
                                    <div class="wx-h5-hd_title">
                                        会员中心
                                    </div>
                                    <div class="wx-h5-hd_nav"><div class="divider"></div><div class="options-btn"></div><div class="close-btn"></div></div>
                                </div>
                            </div>


                            <!--会员中心-->
                            <div class="vip-wx" :style="hT.bgcss">
                                <div class="vip-wx-header" @click="hTwoMethod('FLOGONE')">
                                    <img :style="hT.hdimg" src="http://img.wkdao.com/image/system/2019/10/30/1a39acfb9c8ce8f74b3b71e9f7208641.jpg" alt="" class="vip-wx-header_img">
                                    <div class="vip-wx-header_div">
                                        <span class="vip-wx-header_divspan" :style="{color:hT.namecolor}">会员昵称</span>
                                        <div class="vip-wx-header_div_div">
                                             <span :style="{border:border,backgroundColor:hT.bgcolor,color:hT.fontcolor}">会员等级：xx </span>
                                             <span :style="{border:border,backgroundColor:hT.bgcolor,color:hT.fontcolor}">会员ID：xx</span></div>

                                    </div>
                                    <div class="vip-wx-header-checkBox"><img src="http://img.wkdao.com/image/system/2019/08/19/389f00fe29d21d91b066fbb2a3e3de0b.png" lazy-load="true" draggable="false"><span>签到</span></div>
                                </div>

                                <!--我的资产-->

                                <div class="vip-wx-asset" @click="hTwoMethod('FLOGTwo')" 
                                     :style="{backgroundColor:Assets.bg}" v-show="Assets.isshow == 1">
                                    <dl>
                                        <dt :style="{color:Assets.numcolor}">xx</dt>
                                        <dd :style="{color:Assets.fontcolor}">优惠卷</dd>
                                    </dl>
                                    <dl>
                                        <dt :style="{color:Assets.numcolor}">0</dt>
                                        <dd :style="{color:Assets.fontcolor}">积分</dd>
                                    </dl>
                                    <dl>
                                        <dt :style="{color:Assets.numcolor}">0</dt>
                                        <dd :style="{color:Assets.fontcolor}">盈余</dd>
                                    </dl>
                                    <dl>
                                        <dt :style="{color:Assets.numcolor}">0</dt>
                                        <dd :style="{color:Assets.fontcolor}">拥金</dd>
                                    </dl>
                                </div>


                                <div class="vip-money"  @click="hTwoMethod('NOFLOGTHERE')" v-show="taB.isshow == 1" :style="{marginTop:taB.upM+'px',marginBottom:taB.downM+'px'}">
                                    <div class="vip-money_div" >
                                       <div>
                                            <div class="vip-money_item">
                                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/vip/vip01.png" alt="" class="vip-money_item_img">
                                                <span  class="vip-money_item_span"  v-show="taB.jiaoisshow == 1">0</span>
                                            </div>
                                            <span :style="{color:taB.fontcolor}" class="vip-money_item_status">待付款</span>
                                       </div>
                                        <div>
                                            <div class="vip-money_item">
                                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/vip/vip02.png" alt="" class="vip-money_item_img">
                                                <span  class="vip-money_item_span" v-show="taB.jiaoisshow == 1">0</span>
                                            </div>
                                            <span :style="{color:taB.fontcolor}" class="vip-money_item_status">待发货</span>
                                        </div>
                                        <div>
                                            <div class="vip-money_item">
                                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/vip/vip03.png" alt="" class="vip-money_item_img">
                                                <span  class="vip-money_item_span" v-show="taB.jiaoisshow == 1">0</span>
                                            </div>
                                            <span :style="{color:taB.fontcolor}" class="vip-money_item_status">待收货</span>
                                        </div>
                                        <div>
                                            <div class="vip-money_item">
                                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/vip/vip04.png" alt="" class="vip-money_item_img">
                                                <span  class="vip-money_item_span" v-show="taB.jiaoisshow == 1">0</span>
                                            </div>
                                            <span :style="{color:taB.fontcolor}" class="vip-money_item_status">已完成</span>
                                        </div>
                                        <div>
                                            <div class="vip-money_item">
                                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/vip/vip05.png" alt="" class="vip-money_item_img">
                                                <span  class="vip-money_item_span" v-show="taB.jiaoisshow == 1">0</span>
                                            </div>
                                            <span :style="{color:taB.fontcolor}" class="vip-money_item_status">全部订单</span>
                                        </div>
                                    </div>
                                </div>


                                <!--我的资产-->
                                <div class="mh-myzichan" @click="hTwoMethod('NOFLOGFOUR')">
                                <!--我的服务-->
                                    <div class="vip-my-server">
                                        <span class="vip-my-server_span">我的服务</span>
                                        <div class="vip-server">
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/b73df50c556fbcd1f0d73374f24c9b45.png" draggable="false"></dt>
                                                <dd>我的推荐人</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/089414dc6a7787134aa0c94ea8ce02f6.png" draggable="false"></dt>
                                                <dd>领劵中心</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/0c646a26b2fb1ffffa99a2ed66222311.png" draggable="false"></dt>
                                                <dd>充值中心</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/99e09bb8634543dc0188aee7d59f14e9.png" draggable="false"></dt>
                                                <dd>会员俱乐部</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/d2e5047f53027a1a67024329dd7fc90d.png" draggable="false"></dt>
                                                <dd>我的评价</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/fc7a99a3e4ca5a35e82092af6eae3758.png" draggable="false"></dt>
                                                <dd>维权订单</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/7de3134ebfa0ac5c58d920fd79100455.png" draggable="false"></dt>
                                                <dd>我的会员</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/ef4f7612a1e30cb42858b251806a3f4d.png" draggable="false"></dt>
                                                <dd>修改资料</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/c05a7848ae0bf7cabb8beb487cb9fc34.png" draggable="false"></dt>
                                                <dd>账户与安全</dd>
                                            </dl>
                                        </div>
                                    </div>

                                <!--我的服务over-->

                                <!--vip客户中心-->
                                    <div class="vip-my-server">
                                        <span class="vip-my-server_span">VIP客户中心</span>
                                        <div class="vip-server">
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/68fffad41111bdaff379a924c943c37d.png" draggable="false"></dt>
                                                <dd>分销商品</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/6495f26e833a32f9af8ff94b325cefcf.png" draggable="false"></dt>
                                                <dd>分销订单</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/1f61d7ae7df2edb902620b89885e051d.png" draggable="false"></dt>
                                                <dd>我的推客</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/99e09bb8634543dc0188aee7d59f14e9.png" draggable="false"></dt>
                                                <dd>团队订单</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/7325363be53ec959dcbf4bce753811e3.png" draggable="false"></dt>
                                                <dd>我的名片</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/30/24b310f84ef3e555bfb150914004b7cd.png" draggable="false"></dt>
                                                <dd>店中店</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/f8c3928551063c4e3d8da02e91c03d7e.png" draggable="false"></dt>
                                                <dd>业务统计</dd>
                                            </dl>
                                        </div>
                                    </div>
                                <!--vip客户中心over-->

                                    <!--调度商中心-->
                                    <div class="vip-my-server">
                                        <span class="vip-my-server_span">调度商中心</span>
                                        <div class="vip-server">
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/946b1c7e4344f7889d5e785536a0db27.png" draggable="false"></dt>
                                                <dd>库存</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/1231d0db710b81db4eeca2472fabcf62.png" draggable="false"></dt>
                                                <dd>我的进货单</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/fb83424278a5d2c6eff70ccda4d14a9e.png" draggable="false"></dt>
                                                <dd>下级进货单</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/97432c207c46471c7db2e47b33663a06.png" draggable="false"></dt>
                                                <dd>团队订单</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/3acd2d7a08b49fb699ea3697df44a498.png" draggable="false"></dt>
                                                <dd>我的团队</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/7325363be53ec959dcbf4bce753811e3.png" draggable="false"></dt>
                                                <dd>我的名片</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/system/2019/10/29/f8c3928551063c4e3d8da02e91c03d7e.png" draggable="false"></dt>
                                                <dd>业务统计</dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <!--调度商中心over-->

                                    <!--门店中心-->
                                    <div class="vip-my-server">
                                        <span class="vip-my-server_span">门店中心</span>
                                        <div class="vip-server">
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/65/2019/11/15/f41c7fb38cee6bbac55042e25ebd51f3.png" draggable="false"></dt>
                                                <dd>我的门店</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/65/2019/11/15/ab8c94d0d0b8cdc2de76734f9a719745.png" draggable="false"></dt>
                                                <dd>门店订单</dd>
                                            </dl>
                                            <dl>
                                                <dt><img src="http://img.wkdao.com/image/65/2019/11/15/083c75854d4e5cdb1ba3755ae3726227.png" draggable="false"></dt>
                                                <dd>扫码核销</dd>
                                            </dl>
                                        </div>
                                    </div>
                                    <!--门店中心over-->

                                </div>
                                <!--我的服务外框结束-->
                            </div>

                            <!--会员中心over-->
                        </div>              
                        <!--基础信息-->
                        <div class="wx-edit-right" style="height:160%!important" v-show="FLOG.FLOGONE">
                            <div class="wx-edit">
                                <div class="wx-edit-hd">基础信息</div>
                            </div>

                            <div class="wx-mu-style-mudle" >
                                <div class="wx-mu-style shuixng-title">背景图片：</div>
                                <div class="vip-wximg-style-img" >
                                    <div class="vip-wximg-box show" :style="hT.bgcss"><div class="change-img func-bar" @click="genghuanIMG">更换图片</div>
                                        <i  @click="mhHImg" class="el-icon-close vip-close-btn"></i>
                                    </div>
                                   <span class="vip-wximg-box-tit"> 建议尺寸：宽750，高自定义</span>
                                </div>
                            </div>


                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">风格：</div>
                                <div class="block">
                                    <el-radio v-model="hT.style" label="1">风格1</el-radio>
                                    <el-radio v-model="hT.style" label="2">风格2</el-radio>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style  vip-header-style">会员头像位置：</div>
                                <div class="block">
                                    <el-radio v-model="hT.txwz" label="1">居左</el-radio>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style  vip-header-style">会员头像形状：</div>
                                <div class="block">
                                    <el-radio v-model="hT.xing" label="1">圆形</el-radio>
                                    <el-radio v-model="hT.xing" label="2">矩形</el-radio>       
                                </div>
                            </div>
                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style  vip-header-style">会员昵称颜色：</div>
                                <div class="block">
                                    <el-color-picker v-model="hT.namecolor"></el-color-picker>
                                </div>
                            </div>
                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-styledengjit">会员等级/ID边框颜色：</div>
                                <div class="block">
                                    <el-color-picker v-model="hT.bordercolor"></el-color-picker>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-styledengji">会员等级/ID边框背景色：</div>
                                <div class="block">
                                    <el-color-picker v-model="hT.bgcolor"></el-color-picker>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-styledengji">会员等级/ID边字体颜色：</div>
                                <div class="block">
                                    <el-color-picker v-model="hT.fontcolor"></el-color-picker>
                                </div>
                            </div>
                        </div>
                        <!--基础信息over-->

                        <!--我的资产-->
                        <div class="wx-edit-right" v-show="FLOG.FLOGTwo">
                            <div class="wx-edit">
                                <div class="wx-edit-hd">我的资产</div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">是否隐藏：</div>
                                <div class="block">
                                    <el-radio v-model="Assets.isshow" label="1">是</el-radio>
                                    <el-radio v-model="Assets.isshow" label="2">否</el-radio>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">是否显示佣金:</div>
                                <div class="block">
                                    <el-radio v-model="Assets.commission" label="1">是</el-radio>
                                    <el-radio v-model="Assets.commission" label="2">否</el-radio>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">风格：</div>
                                <div class="block">
                                    <el-radio v-model="Assets.style" label="1">样式1</el-radio>
                                    <el-radio v-model="Assets.style" label="2">样式2</el-radio>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style  vip-header-style">背景色：</div>
                                <div class="block">
                                    <el-color-picker v-model="Assets.bg"></el-color-picker>
                                </div>
                            </div>
                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-styledengjit vip-zichanse">字体颜色：</div>
                                <div class="block">
                                    <el-color-picker v-model="Assets.fontcolor"></el-color-picker>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-styledengji vip-zichanse">数值颜色：</div>
                                <div class="block">
                                    <el-color-picker v-model="Assets.numcolor"></el-color-picker>
                                </div>
                            </div>















                        </div>
                        <!--我的资产over-->
                        <!--我的订单-->
                        <div class="wx-edit-right"  v-show="FLOG.NOFLOGTHERE">
                            <div class="wx-edit">
                                <div class="wx-edit-hd">我的订单</div>
                            </div>
                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">是否隐藏：</div>
                                <div class="block">
                                    <el-radio v-model="taB.isshow" label="1">是</el-radio>
                                    <el-radio v-model="taB.isshow" label="2">否</el-radio>
                                </div>
                            </div>
                             <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">角标是否显示</div>
                                <div class="block">
                                    <el-radio v-model="taB.jiaoisshow" label="1"></el-radio>
                                    <el-radio v-model="taB.jiaoisshow" label="2">否</el-radio>
                                </div>
                            </div>
                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">发布图标：</div>
                                <div class="block vip-order-block">
                                    <div class="vip-right-oder">
                                        <span class="vip-right-oder_status">待付款</span>
                                        <img src="http://img.wkdao.com/image/system/2019/10/30/610e7454974e9d8c4d6ff790b2334f3f.png" alt="" class="vip-right-oder_img">
                                        <span class="vip-right-oder_huanimg" @click="TWOimg(1)">更换图片</span>
                                    </div>
                                    <div class="vip-right-oder">
                                        <span class="vip-right-oder_status">待发货</span>
                                        <img src="http://img.wkdao.com/image/system/2019/10/30/a2a2dc4d6438f2c26a2ef31e33ac1a1d.png" alt="" class="vip-right-oder_img">
                                        <span class="vip-right-oder_huanimg" @click="TWOimg(2)">更换图片</span>
                                    </div>

                                    <div class="vip-right-oder">
                                        <span class="vip-right-oder_status">待收货</span>
                                        <img src="http://img.wkdao.com/image/system/2019/10/30/cdb9c41502aeeecccdb4ae3ed9165bb0.png" alt="" class="vip-right-oder_img">
                                        <span class="vip-right-oder_huanimg" @click="TWOimg(3)">更换图片</span>
                                    </div>

                                    <div class="vip-right-oder">
                                        <span class="vip-right-oder_status">已完成</span>
                                        <img src="http://img.wkdao.com/image/system/2019/10/30/16ecd77172ad3d21efad25b7fbd1d923.png" alt="" class="vip-right-oder_img">
                                        <span class="vip-right-oder_huanimg" @click="TWOimg(4)">更换图片</span>
                                    </div>

                                    <div class="vip-right-oder">
                                        <span class="vip-right-oder_status">全部订单</span>
                                        <img src="http://img.wkdao.com/image/system/2019/10/30/2491fd3d705816ddd166924f8b71d8de.png" alt="" class="vip-right-oder_img">
                                        <span class="vip-right-oder_huanimg" @click="TWOimg(5)">更换图片</span>
                                    </div>
                                </div>
                            </div>
                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">角标风格：</div>
                                <div class="block">
                                    <el-radio v-model="taB.style" label="1">样式1</el-radio>
                                    <el-radio v-model="taB.style" label="2">样式2</el-radio>
                                </div>
                            </div>
                      
                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-styledengjit vip-zichanse">字体颜色：</div>
                                <div class="block">
                                    <el-color-picker v-model="taB.fontcolor"></el-color-picker>
                                </div>
                            </div>
                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">上间距：</div>
                                <div class="block">
                                    <el-slider
                                            v-model="taB.upM"
                                            show-input>
                                    </el-slider>
                                </div>
                            </div>
                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">下间距：</div>
                                <div class="block">
                                    <el-slider
                                            v-model="taB.downM"
                                            show-input>
                                    </el-slider>
                                </div>
                            </div>
                        </div>

                        <!--我的订单over-->



                        <!--必备工具-->
                        <div class="wx-edit-right" v-show="FLOG.NOFLOGFOUR" >
                            <div class="wx-edit">
                                <div class="wx-edit-hd">必备工具</div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">风格：</div>
                                <div class="block">
                                    <el-radio v-model="tool.styleno" label="1">图标版</el-radio>
                                    <el-radio v-model="tool.styleno" label="2">金典版</el-radio>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">标题：</div>
                                <div class="block">
                                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">我的服务：</div>
                                <div class="block vip-order-block">
                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/b73df50c556fbcd1f0d73374f24c9b45.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">我的推荐人</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/089414dc6a7787134aa0c94ea8ce02f6.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">领劵中心</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/0c646a26b2fb1ffffa99a2ed66222311.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">排位免单</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/99e09bb8634543dc0188aee7d59f14e9.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">修改资料</el-checkbox></p>
                                    </div>

                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">推客中心是否显示：</div>
                                <div class="block">
                                    <el-radio v-model="radio" label="4">是</el-radio>
                                    <el-radio v-model="radio" label="3">否</el-radio>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">推客中心：</div>
                                <div class="block vip-order-block">
                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/b73df50c556fbcd1f0d73374f24c9b45.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">我的推荐人</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/089414dc6a7787134aa0c94ea8ce02f6.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">领劵中心</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/0c646a26b2fb1ffffa99a2ed66222311.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">排位免单</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/99e09bb8634543dc0188aee7d59f14e9.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">修改资料</el-checkbox></p>
                                    </div>

                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">渠道商中心是否显示：</div>
                                <div class="block">
                                    <el-radio v-model="radio" label="4">是</el-radio>
                                    <el-radio v-model="radio" label="3">否</el-radio>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">渠道商中心：</div>
                                <div class="block vip-order-block">
                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/b73df50c556fbcd1f0d73374f24c9b45.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">我的推荐人</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/089414dc6a7787134aa0c94ea8ce02f6.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">领劵中心</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/0c646a26b2fb1ffffa99a2ed66222311.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">排位免单</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/99e09bb8634543dc0188aee7d59f14e9.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">修改资料</el-checkbox></p>
                                    </div>

                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">门店中心是否显示：</div>
                                <div class="block">
                                    <el-radio v-model="radio" label="4">是</el-radio>
                                    <el-radio v-model="radio" label="3">否</el-radio>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">门店中心：</div>
                                <div class="block vip-order-block">
                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/b73df50c556fbcd1f0d73374f24c9b45.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">我的推荐人</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/089414dc6a7787134aa0c94ea8ce02f6.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">领劵中心</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/0c646a26b2fb1ffffa99a2ed66222311.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">排位免单</el-checkbox></p>
                                    </div>

                                    <div class="vip-right-tubiao">
                                        <div class="vip-right-oder vip-right-oder_div">
                                            <i class="el-icon-close vip-right-close-btn"></i>
                                            <img src="http://img.wkdao.com/image/system/2019/10/29/99e09bb8634543dc0188aee7d59f14e9.png" alt="" class="vip-right-oder_img">
                                            <span class="vip-right-oder_huanimg">更换图片</span>
                                        </div>
                                        <p class="vip-right-oder_p">  <el-checkbox v-model="checked">修改资料</el-checkbox></p>
                                    </div>

                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">背景色：</div>
                                <div class="block">
                                    <el-color-picker v-model="color1"></el-color-picker>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">字体颜色：</div>
                                <div class="block">
                                    <el-color-picker v-model="color1"></el-color-picker>
                                </div>
                            </div>

                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style vip-header-style">上间距：</div>
                                <div class="block">
                                    <el-slider
                                            v-model="value"
                                            show-input>
                                    </el-slider>
                                </div>
                            </div>

                        </div>
                        <!--必备工具over-->

                        <!--H5over-->

                    </div>

                    <imgsrc ref="imgsrc"> </imgsrc>
                    <!-- 商品中心over -->
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
import membersecnavbar from './membersecnavbar';
import imgsrc from "../resource/imgsrc";
let that = this;
export default {
    data() {
        return {
            FLOG:{
                FLOGONE:true,
                FLOGTwo:false,
                NOFLOGTHERE:false,
                NOFLOGFOUR:false
            },
            tool:{
                styleno:'1',

            },
        
            hT:{
                bgcss:'background: url(http://img.wkdao.com/image/system/2019/10/29/842ed4af5438e4ec47d4fd1afd785323.png) center top / contain no-repeat rgb(247, 247, 247);',
                style:'1',
                txwz:'1',
                xing:'1',
                hdimg:'',
                namecolor:'',
                bordercolor:'',
                bgcolor:'',
                fontcolor:'',
            },
            //资产
            Assets:{
                isshow:'1',
                commission:'1',
                style:'1',
                bg:'',
                fontcolor:'',
                numcolor:'',

            },
            taB:{
                isshow:'1',
                jiaoisshow:'1',
                style:'1',
                fontcolor:'',
                upM:'',
                downM:''

            },   
           value:0,
            //    必备工具
            input: ''
        };
    },
    watch:{
        'hT.xing'(val, oldval){
            val == 1 ? this.hT.hdimg = 'border-radius:50%' : this.hT.hdimg = 'border-radius:0;'
        },

        deep:true //true 深度监听
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
        this.taB.downM = 20;
    },
    methods:{
        //更换图片
        genghuanIMG(){
            this.$refs.imgsrc.imgdialogFormVisible = true;
            this.$refs.imgsrc.pid = 'mine01';
        },
        mhHImg(){
            this.hT.bgcss = '';
            this.hT.bg = '';
        },
        hTwoMethod(FLOG){
            for( let k in this.FLOG){
                if(FLOG == k){
                  this.FLOG[FLOG] = true;
                }else{
                  this.FLOG[k] = false
                }
            }
        }
    },
    
    computed:{
        border:function () {
            // return `1px solid ${this.hT.bordercolor}`
        }
    },
    components:{
        navbar,sidebar,membersecnavbar,imgsrc   
    }
}
</script>

<style>
.wx-membercentre-main{
    height: 120%
}
.vip-wx{
    width:100%;
    height: 100%;
    /* background: url(http://img.wkdao.com/image/system/2019/10/29/842ed4af5438e4ec47d4fd1afd785323.png) center top / contain no-repeat rgb(247, 247, 247); */
    /*background: url(http://img.wkdao.com/image/system/2019/10/29/842ed4af5438e4ec47d4fd1afd785323.png) ;*/
    box-sizing: border-box;

}

.vip-wx-header_img{
    border-radius:50% ;
    width: 52px;
    height: 52px;
    box-shadow: 0 3.816px 4.24px 0 rgba(106,87,90,.1);
    margin-right: 5.936px;
}

.vip-wx-header{
    display: flex;
    align-items: center;
    padding: 16px 15px 0;
    cursor:pointer;
       box-sizing: content-box;

}
.vip-wx-header:hover{
    border:1px dashed #eee
}

.vip-wx-header_div{
    display: flex;
    flex-direction: column;
    font-size: 12px;
    align-items: flex-end;
    color: rgb(255, 255, 255);
    width: 160px;
    margin-right: 72px;
}
.vip-wx-header_divspan{

    display: inline-block;
    width: 100%;
    text-align: left;
    font-weight: 700;
    margin-bottom: 8px;
}
.vip-wx-header-checkBox{
    color: #fff;
    border: 1px solid #fff;
    border-radius: 8.48px;
    padding: 3.392px 5.088px;
    font-size: 12px;
}
.vip-wx-header-checkBox>img{
   width: 9.328px;
    height: 9.328px;
    margin-right: 4.24px;
    margin-top: -2.12px;
}
.vip-wx-header_div_div{
    width: 100%;
    text-align: left;
}
.vip-wx-header_div_div>span{
    display:inline-block;
    border:none
}
.vip-wximg-box{
    width: 375px;
    max-height: 375px;
    min-height: 290px;
    position: relative;
    border: 1px solid #e5e5e5;
}

 .vip-wximg-box img {
     top: 20px;
    width: 375px;
    max-height: 375px;
    min-height: 290px;
}
.vip-close-btn {
    position: absolute;
    right: -8px;
    top: -8px;
    font-size: 16px;
    background-color: #bbb;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
}

.vip-wximg-box .change-img {
    position: absolute;
    width: 100%;
    bottom: 12px;
    color: #fff;
    background: rgba(0,0,0,.5);
    cursor: pointer;
    text-align: center;
    height: 30px;
    line-height: 30px;
}
/* .membercentre-main .el-icon-close:before {
    content: "\E6DB";
}  */
.vip-wximg-box-tit{
    color: #303133;
    font-size: 12px;
}
.vip-header-style{
    width: 133px;
}
.vip-header-styledengji{
    width: 274px;
}
.vip-header-styledengjit{
    width: 236px;
}

.vip-money_item_span{
    min-width: 10.6px;
    height: 12.72px;
    line-height: 12.72px;
    color: #fefefe;
    font-weight: 700;
    font-size: 6.784px;
    text-align: center;
    position: absolute;
    border: 1px solid #ff576d;
    border-radius: 12.72px;
    padding: 0 3.392px;
    top: -8.48px;
    right: 10.6px;
    background: linear-gradient(90deg,#ff0641,#fe7264);
}

.vip-money_item_img{
    width: 19.08px;
    height: 19.08px;
}

.vip-money_item{
    margin-bottom: 6.36px;
    position: relative;
    box-sizing: border-box;
}

.vip-money_item_status{
    font-size: 12px;
    color: #303133;
}




.vip-wx-asset{
    display: flex;
    font-size: 12px;
    color: #fff;
    padding: 16px 20px 20px;
    box-sizing: border-box;
    justify-content: space-between;
    cursor:pointer
}

.vip-wx-asset:hover{
    border:1px dashed #eee
}


.vip-wx-asset>dl{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}


.vip-money{
    position: relative;
    display: flex;
    justify-content: center;
    background-color: transparent;;
    height: 90px;
    margin-bottom:20px;
    cursor:pointer
}
.vip-money:hover{
    border:1px dashed #eee
}
.vip-wx-asset dl dt{
    margin-bottom: 5px;
}

.vip-money_div{
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    position: absolute;
    /* top: -15px; */
    width: 90%;
    padding-top: 20px;
    height: 68px;
    display: flex;
    justify-content: space-around;
    /*box-sizing: border-box;*/
}



.vip-money_div>div{
    display: flex;
    flex-direction: column;
    justify-content: center;align-items: center;
    cursor: pointer;
}

.vip-server{
    display: flex;
    flex-wrap: wrap;
}
.vip-server>dl{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 79px;
    margin-bottom: 12px;
    cursor: pointer;
}


.vip-my-server{
    width: 90%;
    box-sizing: border-box;
    background-color: #Fff;
    margin-bottom: 12px;

}

.vip-my-server_span{
    font-weight: 700;
    display: inline-block;
    width: 100%;
    border-bottom: 1px solid #f2f2f2;
    color: #303133;
    font-size: 12px;
    height: 30px;
    line-height: 30px;
    padding: 0 10px;
    box-sizing: border-box;
    margin-bottom: 15px;
}
.mh-myzichan{
    cursor:pointer;
    box-sizing: border-box;
    background: transparent;display: flex;align-items: center;flex-direction: column;
}
.mh-myzichan:hover{
     /* border:1px dashed #eee */
}
.vip-server{
    padding: 0 10px;
    box-sizing: border-box;
}

.vip-server>dl dt img{
    width: 25px;
    height: 25px;
    display: block;
}

.vip-server>dl dt{
    margin-bottom: 4px;
}

.vip-server>dl dd{
   font-size: 12px;
    color: #303133;
}
.vip-zichanse
{
    width: 134px!important;
}


.vip-right-oder{
    width: 72px;
    height: 72px;
    position: relative;
    border: 1px solid #e5e5e5;
    font-size: 12px;
    margin-right: 8px;
    margin-bottom: 8px;

}

.vip-right-oder_img{
    width: 68px;
    height: 68px;
}
.vip-right-oder_status{
    position: absolute;
    width: 100%;
    text-align: center;
}
.vip-right-oder_huanimg{
    position: absolute;
    bottom: 0;
    left: 0;
    display: inline-block;
    width: 100%;
    text-align: center;
    color: #fff;
    height: 30px;
    line-height: 30px;
    background: rgba(0,0,0,.5);
    cursor: pointer;
}
.vip-order-block{
    display: flex;
    flex-wrap: wrap;

}

.vip-right-close-btn{
    height: 12px;
    width: 13px;
    content: '';
    display: block;
    position: absolute;
    right: -8px;
    top: -8px;
    font-size: 16px;
    background-color: #bbb;
    color: #fff;
    border-radius: 50%;
}

.vip-right-oder_p .el-checkbox__label{
    font-size: 12px;
    color: #409eff;
    margin-left: 4px;
    padding-left:0
}
.vip-right-oder_div{
    margin-bottom: 0;
    margin-right: 12px;
}
.vip-right-tubiao{
    margin-bottom: 8px;
}  

.membercentre-main{
    padding: 0 !important
}
</style>