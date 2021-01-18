<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <homeNav></homeNav>
            

            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div>
                    <!--选项卡组件-->
                    
                    <!-- pbd: hm_pageBasicData -->
                    <!-- 各页面基础数据情况、基础数据PV折线图 -->
                    <div class="pbd_dataView1">
                        <!-- 各页面基础数据情况 -->
                        <div class="pbd_pageDataView">
                            <div class="pbd_itemTitle">各页面基础数据情况</div>
                            <div class="pbd_itemDate"> {{selectDateString1}}</div>
                            <div class="pbd_itemOpreate">
                                <!-- <div> -->
                                    <el-tabs v-model="pageDataOpreateName" @tab-click="handleClick1">
                                        <el-tab-pane label="今日" name="first"> </el-tab-pane>
                                        <el-tab-pane label="7日" name="second"> </el-tab-pane>
                                        <el-tab-pane label="30日" name="third"> </el-tab-pane>
                                        <el-tab-pane label="全部" name="fourth"> </el-tab-pane>
                                        <el-tab-pane label="自定义" name="five"> </el-tab-pane>
                                    </el-tabs>
                                    <!-- <div class="pbd_selectDate">
                                        {{selectDate}}
                                    </div> -->
                                <!-- </div> -->
                            </div>

                            <el-table :data="tableData1" class="pbd_pageDataTable">
                                <el-table-column prop="date" label="序号" width="80"> 
                                    <template slot-scope="scope" align="left">
                                        <div>{{scope.$index}}</div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="name" label="页面名称" width="80" align="center"> </el-table-column>
                                <el-table-column prop="pv" label="pv" width="60" align="center"> </el-table-column>
                                <el-table-column prop="uv" label="uv" width="60" align="center"> </el-table-column>
                                <el-table-column prop="newUser" label="新用户数" width="80" align="center"> </el-table-column>
                                <el-table-column prop="activityUser" label="活跃用户数" width="80" align="center"> </el-table-column>
                                <el-table-column prop="name" label="累积用户数" width="80" align="center"> </el-table-column>
                                <el-table-column prop="staySec" label="平均停留时间（S）" width="130" align="center"> </el-table-column>
                            </el-table>
                        </div>

                        <!-- 基础数据PV折线图 -->
                        <div class="pbd_pvLineChartView">
                            <div class="pbd_itemTitle">基础数据PV折线图</div>
                            <div class="pbd_itemDate">{{selectDateString2}}</div>
                            <div class="pbd_itemOpreate">
                                <el-tabs v-model="pvPageDataOpreateName" @tab-click="pvHandleClick">
                                    <el-tab-pane label="今日" name="first"> </el-tab-pane>
                                    <el-tab-pane label="7日" name="second"> </el-tab-pane>
                                    <el-tab-pane label="30日" name="third"> </el-tab-pane>
                                    <el-tab-pane label="全部" name="fourth"> </el-tab-pane>
                                    <el-tab-pane label="自定义" name="five"> </el-tab-pane>
                                </el-tabs>
                            </div>
                            <div class="pbd_pvLineChartDataView">

                                <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
                                <div id="zm_ECharts" style="width: 800px; height:400px;"></div>

                            </div>

                        </div>
                    </div>


                    <!-- <br><br><br><br><br> -->
                    <!-- 3、数据漏斗 -->
                    <div class="pbd_DataFunnelView" :v-model="tableData3">
                        <div class="pbd_itemTitle">数据漏斗</div>
                        <div class="pbd_DataFunnelItemView">
                            <div class="pbd_DataFunnelTitleView">
                                <div class="pbd_DataFunnelTitle"> 1.访问商城 </div>
                                <div class="pbd_DataFunnelData"> {{tableData3.item}}人 </div>
                            </div>
                            <el-progress class="pbd_DataFunnelProgres" :text-inside="true" :show-text="false" :stroke-width="26" :percentage="tableData3.percent1"></el-progress>
                        </div>
                        <div class="pbd_DataFunnelNextView">
                            <img class="pbd_DataFunnelNextImg" src="../../../static/images/icon/hm_down2.png" alt="" srcset="">
                            <div class="pbd_DataFunnelNextProgres">{{tableData3.percent12}}%</div>
                        </div>

                        <div class="pbd_DataFunnelItemView">
                            <div class="pbd_DataFunnelTitleView">
                                <div class="pbd_DataFunnelTitle"> 2.浏览商品详情页 </div>
                                <div class="pbd_DataFunnelData"> {{tableData3.itemDetail}}人 </div>
                            </div>
                            <el-progress class="pbd_DataFunnelProgres" :text-inside="true" :show-text="false" :stroke-width="26" :percentage="tableData3.percent2"></el-progress>
                        </div>
                        <div class="pbd_DataFunnelNextView">
                            <img class="pbd_DataFunnelNextImg" src="../../../static/images/icon/hm_down2.png" alt="" srcset="">
                            <div class="pbd_DataFunnelNextProgres">{{tableData3.percent23}}%</div>
                        </div>

                        <div class="pbd_DataFunnelItemView">
                            <div class="pbd_DataFunnelTitleView">
                                <div class="pbd_DataFunnelTitle"> 3.提交订单 </div>
                                <div class="pbd_DataFunnelData"> {{tableData3.order}}人 </div>
                            </div>
                            <el-progress class="pbd_DataFunnelProgres" :text-inside="true" :show-text="false" :stroke-width="26" :percentage="tableData3.percent3"></el-progress>
                        </div>
                        <div class="pbd_DataFunnelNextView">
                            <img class="pbd_DataFunnelNextImg" src="../../../static/images/icon/hm_down2.png" alt="" srcset="">
                            <div class="pbd_DataFunnelNextProgres">{{tableData3.percent34}}%</div>
                        </div>

                        <div class="pbd_DataFunnelItemView">
                            <div class="pbd_DataFunnelTitleView">
                                <div class="pbd_DataFunnelTitle"> 4.支付订单 </div>
                                <div class="pbd_DataFunnelData"> {{tableData3.pay}}人 </div>
                            </div>
                            <el-progress class="pbd_DataFunnelProgres" :text-inside="true" :show-text="false" :stroke-width="26" :percentage="tableData3.percent4"></el-progress>
                        </div>
                    </div>

                    <!-- 4、区域曝光数 -->
                    <div class="pbd_AreaExposureNumView">
                        <div class="pbd_itemTitle">区域曝光数</div>
                        <!-- <div class="pbd_itemDate">2020-09-01 ~ 2020-10-31</div> -->
                        <div class="pbd_itemDate">{{selectDateString4}}</div>
                        <div class="pbd_itemOpreate">
                            <el-tabs v-model="opreateName4" @tab-click="handleClick4">
                                <el-tab-pane label="今日" name="first"> </el-tab-pane>
                                <el-tab-pane label="7日" name="second"> </el-tab-pane>
                                <el-tab-pane label="30日" name="third"> </el-tab-pane>
                                <el-tab-pane label="全部" name="fourth"> </el-tab-pane>
                                <el-tab-pane label="自定义" name="five"> </el-tab-pane>
                            </el-tabs>
                        </div>

                        <div class="pbd_AreaExposureNumTitle">首页（区域曝光数）</div>
                        <el-table class="pbd_AreaExposureNumHomeTable" :data="tableData41" border="1" style="width: 481px">
                            <!-- <el-table-column label="首页（区域曝光数）"> -->
                                <el-table-column prop="banner" label="搜索分类banner" width="120" align="center">  </el-table-column>
                                <el-table-column prop="rushPurchase" label="抢购赚钱" width="120" align="center"> </el-table-column>
                                <el-table-column prop="group7" label="7人拼团" width="120" align="center"> </el-table-column>
                                <el-table-column prop="category" label="各个分类商品列表" width="120" align="center"> </el-table-column>
                            <!-- </el-table-column> -->
                        </el-table>

                        <div class="pbd_AreaExposureNumTitle">抢购活动页（区域曝光数）</div>
                        <el-table class="pbd_AreaExposureNumHomeTable" :data="tableData42" border="1" style="width: 601px">
                            <!-- <el-table-column label="抢购活动页（区域曝光数）"> -->
                                <el-table-column prop="awardPond" label="大奖池"   width="120" align="center">  </el-table-column>
                                <el-table-column prop="revenueReport" label="收益播报" width="120" align="center"> </el-table-column>
                                <el-table-column prop="revenueRank" label="收益排行" width="120" align="center"> </el-table-column>
                                <el-table-column prop="activityRule" label="活动规则" width="120" align="center"> </el-table-column>
                                <el-table-column prop="activityList" label="活动列表" width="120" align="center"> </el-table-column>
                            <!-- </el-table-column> -->
                        </el-table>

                        <div class="pbd_AreaExposureNumTitle">个人中心（区域曝光数）</div>
                        <el-table class="pbd_AreaExposureNumHomeTable" :data="tableData43" border="1" style="width: 841px">
                            <!-- <el-table-column class="pbd_AreaExposureNumHomeTableHeader" label="个人中心（区域曝光数）"> -->
                                <el-table-column class="pbd_AreaExposureNumHomeTableHeader2" prop="info" label="会员信息" width="120" align="center">  </el-table-column>
                                <el-table-column class="pbd_AreaExposureNumHomeTableHeader2" prop="money" label="余额" width="120" align="center"> </el-table-column>
                                <el-table-column class="pbd_AreaExposureNumHomeTableHeader2" prop="integral" label="积分" width="120" align="center"> </el-table-column>
                                <el-table-column class="pbd_AreaExposureNumHomeTableHeader2" prop="group" label="我的拼团" width="120" align="center"> </el-table-column>
                                <el-table-column class="pbd_AreaExposureNumHomeTableHeader2" prop="rushPurchase" label="我的抢购" width="120" align="center"> </el-table-column>
                                <el-table-column class="pbd_AreaExposureNumHomeTableHeader2" prop="order" label="订单列表模块" width="120" align="center"> </el-table-column>
                                <el-table-column class="pbd_AreaExposureNumHomeTableHeader2" prop="serv" label="我的服务模块" width="120" align="center"> </el-table-column>
                            <!-- </el-table-column> -->
                        </el-table>
                    </div>


                     <!-- 5.各品类数据概况、
                          6.商品数概况 -->
                    <div class="pbd_dataView56">
                        <!-- 5、各品类数概况 -->
                        <div class="pbd_everTypeView">
                            <div class="pbd_itemTitle">各品类数据概况</div>
                            <div class="pbd_itemDate">{{selectDateString5}}</div>
                            <div class="pbd_itemOpreate">
                                <el-tabs v-model="opreateName5" @tab-click="handleClick5">
                                    <el-tab-pane label="今日" name="first"> </el-tab-pane>
                                    <el-tab-pane label="7日" name="second"> </el-tab-pane>
                                    <el-tab-pane label="30日" name="third"> </el-tab-pane>
                                    <el-tab-pane label="全部" name="fourth"> </el-tab-pane>
                                    <el-tab-pane label="自定义" name="five"> </el-tab-pane>
                                </el-tabs>
                            </div>

                            <el-table :data="tableData5" class="pbd_typeTable" width="500px">
                                <el-table-column prop="date" label="排行" width="80"> 
                                    <template slot-scope="scope" align="left">
                                        <div>{{scope.$index}}</div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="name" label="品类名称" width="80" align="center"> </el-table-column>
                                <el-table-column prop="times" label="分类tab点击数" width="120" align="center"> </el-table-column>
                                <el-table-column prop="sellNum" label="购买次数" width="80" align="center"> </el-table-column>
                                <el-table-column prop="sellUser" label="购买人数" width="80" align="center"> </el-table-column>
                                <el-table-column prop="" label="销售额" width="70" align="center"> 
                                    <template slot-scope="scope" align="left">
                                        <div>{{scope.row.sellMoney/100}}</div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>

                        <!-- 6、商品数概况 -->
                        <div class="pbd_productNumView">
                            <div class="pbd_itemTitle">商品数概况</div>
                            <div class="pbd_itemDate">{{selectDateString6}}</div>
                            <div class="pbd_itemOpreate">
                                <el-tabs v-model="opreateName6" @tab-click="handleClick6">
                                    <el-tab-pane label="今日" name="first"> </el-tab-pane>
                                    <el-tab-pane label="7日" name="second"> </el-tab-pane>
                                    <el-tab-pane label="30日" name="third"> </el-tab-pane>
                                    <el-tab-pane label="全部" name="fourth"> </el-tab-pane>
                                    <el-tab-pane label="自定义" name="five"> </el-tab-pane>
                                </el-tabs>
                            </div>
                            
                            <el-table :data="tableData6" class="pbd_productNumTable" width="900px">
                                <el-table-column prop="date" label="排行" width="50"> 
                                    <template slot-scope="scope" align="left">
                                        <div>{{scope.$index}}</div>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="itemName" label="商品名称" align="center"> </el-table-column>
                                <el-table-column prop="itemType" label="普通商品" align="center"> </el-table-column>
                                <el-table-column prop="times" label="浏览商品详情页总次数" width="150" align="center"> </el-table-column>
                                <el-table-column prop="share" label="分享次数" width="80" align="center"> </el-table-column>
                                <el-table-column prop="purchase" label="支付订单详情总次数" width="150" align="center"> </el-table-column>
                                <el-table-column prop="sellNum" label="销量" width="60" align="center"> </el-table-column>
                                <el-table-column prop="sellMoney" label="销售额" width="70" align="center"> 
                                    <template slot-scope="scope" align="left">
                                        <div>{{scope.row.sellMoney/100}}</div>
                                    </template>
                                </el-table-column>
                            </el-table>
                        </div>
                    </div>


                    <!-- 7、页面动作采集 -->
                    <div class="pbd_actionCollectView">
                        <div class="pbd_itemTitle">页面动作采集</div>
                        <!-- <div class="pbd_itemDate">2020-09-01 ~ 2020-10-31</div> -->
                        <div class="pbd_itemDate">{{selectDateString7}}</div>
                        <div class="pbd_itemOpreate">
                            <el-tabs v-model="opreateName7" @tab-click="handleClick7">
                                <el-tab-pane label="今日" name="first"> </el-tab-pane>
                                <el-tab-pane label="7日" name="second"> </el-tab-pane>
                                <el-tab-pane label="30日" name="third"> </el-tab-pane>
                                <el-tab-pane label="全部" name="fourth"> </el-tab-pane>
                                <el-tab-pane label="自定义" name="five"> </el-tab-pane>
                            </el-tabs>
                        </div>

                        <!-- <div class="pbd_AreaExposureNumTitle">首页（动作采集）</div> -->
                        <el-table class="pbd_actionCollectTable pbd_acTable1" :data="tableData71" border="1" style="width: 961px">
                            <el-table-column label="首页（动作采集）">
                                <el-table-column prop="back" label="关闭退出" width="80" align="center">  </el-table-column>
                                <el-table-column prop="itemRush" label="抢购赚钱点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="vip" label="vip专区点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="integral" label="积分商城点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="discount99" label="9.9包邮点击" width="120" align="center"> </el-table-column>
                                <el-table-column prop="itemRush" label="去抢购点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="bottomMain" label="底部首页ab点击" width="120" align="center"> </el-table-column>
                                <el-table-column prop="bottomVip" label="底部VIPtab点击" width="120" align="center"> </el-table-column>
                                <el-table-column prop="bottomMy" label="底部我的tab点击" width="120" align="center"> </el-table-column>
                            </el-table-column>
                        </el-table>

                        <!-- <div class="pbd_AreaExposureNumTitle">抢购活动页（动作采集）</div> -->
                        <el-table class="pbd_actionCollectTable" :data="tableData72" border="1" style="width: 1131px">
                            <el-table-column label="抢购活动页（动作采集）">
                                <el-table-column prop="back" label="关闭退出"   width="80" align="center">  </el-table-column>
                                <el-table-column prop="share" label="顶部三个分享按钮点击" width="150" align="center"> </el-table-column>
                                <el-table-column prop="rule" label="活动规则点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="revenueReport" label="收益播报点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="revenueRank" label="收益排行点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="tabUnderway" label="进行中tab点击" width="120" align="center"> </el-table-column>
                                <el-table-column prop="tabFinish" label="已结束tab点击" width="120" align="center"> </el-table-column>
                                <el-table-column prop="bottomMain" label="底部首页tab点击" width="120" align="center"> </el-table-column>
                                <el-table-column prop="zip" label="底部VIPtab点击" width="120" align="center"> </el-table-column>
                                <el-table-column prop="bottomVip" label="底部我的tab点击" width="120" align="center"> </el-table-column>
                            </el-table-column>
                        </el-table>

                        <!-- <div class="pbd_AreaExposureNumTitle">xx（动作采集）</div> -->
                        <el-table class="pbd_actionCollectTable" :data="tableData73" border="1" style="width: 361px">
                            <el-table-column class="pbd_acTableHeader1" label="抢购活动详情页（动作采集）">
                                <el-table-column class="pbd_acTableHeader2" prop="join" label="立即参与改活动" width="120" align="center">  </el-table-column>
                                <el-table-column class="pbd_acTableHeader2" prop="share" label="邀请好友按钮" width="120" align="center"> </el-table-column>
                                <el-table-column class="pbd_acTableHeader2" prop="back" label="返回上一页" width="120" align="center"> </el-table-column>
                            </el-table-column>
                        </el-table>


                        <!-- 7.4 <div class="pbd_AreaExposureNumTitle">xxx（动作采集）</div> -->
                        <el-table class="pbd_actionCollectTable" :data="tableData74" border="1" style="width: 621px">
                            <el-table-column label="七人拼团详情页（动作采集）">
                                <el-table-column prop="purchase" label="立即购买按钮点击" width="120" align="center">  </el-table-column>
                                <!-- <el-table-column prop="zip" label="立即参与按钮点击" width="120" align="center"> </el-table-column> -->
                                <el-table-column prop="main" label="首页按钮点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="cs" label="客服按钮点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="evaluation" label="宝贝评价点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="coupon" label="使用优惠券次数" width="120" align="center"> </el-table-column>
                                <el-table-column prop="back" label="关闭退出" width="80" align="center"> </el-table-column>
                            </el-table-column>
                        </el-table>

                        <!-- 7.5 <div class="pbd_AreaExposureNumTitle">xxx（动作采集）</div> -->
                        <el-table class="pbd_actionCollectTable" :data="tableData75" border="1" style="width: 981px">
                            <el-table-column label="个人中心页（动作采集）">
                                <el-table-column prop="back" label="关闭退出" width="80" align="center">  </el-table-column>
                                <el-table-column prop="share" label="顶部分享按钮点击" width="120" align="center"> </el-table-column>
                                <el-table-column prop="cs" label="在线客服点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="address" label="收货地址点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="faq" label="常见问题点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="invite" label="邀请好友点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="group" label="我的拼团点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="rushPurchase" label="我的抢购点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="money" label="账户余额点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="setting" label="设置点击" width="80" align="center"> </el-table-column>
                            </el-table-column>
                        </el-table>

                        <!-- 7.6 <div class="pbd_AreaExposureNumTitle">xxx（动作采集）</div> -->
                        <el-table class="pbd_actionCollectTable" :data="tableData76" border="1" style="width: 701px">
                            <el-table-column label="普通商品详情页（动作采集）">
                                <el-table-column prop="purchase" label="立即购买按钮点击" width="120" align="center">  </el-table-column>
                                <el-table-column prop="join" label="立即分享按钮点击" width="120" align="center"> </el-table-column>
                                <el-table-column prop="main" label="首页按钮点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="cs" label="客服按钮点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="evaluation" label="宝贝评价点击" width="100" align="center"> </el-table-column>
                                <el-table-column prop="back" label="关闭退出" width="80" align="center"> </el-table-column>
                                <el-table-column prop="share" label="分享按钮" width="80" align="center"> </el-table-column>
                            </el-table-column>
                        </el-table>

                        <!-- 7.7 <div class="pbd_AreaExposureNumTitle">xxx（动作采集）</div> -->
                        <el-table class="pbd_actionCollectTable" :data="tableData77" border="1" style="width: 401px">
                            <el-table-column label="订单确认页（动作采集）">
                                <el-table-column prop="zip" label="返回上一页" width="100" align="center">  </el-table-column>
                                <el-table-column prop="submit" label="提交订单" width="100" align="center"> </el-table-column>
                                <el-table-column prop="newAddress" label="添加地址" width="100" align="center"> </el-table-column>
                                <el-table-column prop="coupon" label="优惠券" width="100" align="center"> </el-table-column>
                            </el-table-column>
                        </el-table>


                        <!-- 7.8 <div class="pbd_AreaExposureNumTitle">xxx（动作采集）</div> -->
                        <el-table class="pbd_actionCollectTable" :data="tableData78" border="1" style="width: 801px">
                            <el-table-column label="选择付款方式（动作采集）">
                                <el-table-column prop="back" label="返回上一页" width="100" align="center">  </el-table-column>
                                <el-table-column prop="typeAli" label="支付宝支付" width="100" align="center"> </el-table-column>
                                <el-table-column prop="typeWx" label="微信支付" width="100" align="center"> </el-table-column>
                                <el-table-column prop="typeBalance" label="余额支付" width="100" align="center"> </el-table-column>
                                <el-table-column prop="typeCms" label="佣金支付" width="100" align="center"> </el-table-column>
                                <el-table-column prop="zip" label="我的抢购" width="100" align="center"> </el-table-column>
                                <el-table-column prop="submit" label="确认支付" width="100" align="center"> </el-table-column>
                                <el-table-column prop="succeed" label="支付成功" width="100" align="center"> </el-table-column>
                            </el-table-column>
                        </el-table>
                    </div>


                    <el-dialog title="时间范围" align="center" :visible.sync="dateDialogVisible" width="500px"
                    :before-close="dateHandleClose">

                        <el-date-picker v-model="customDate" type="daterange"
                        start-placeholder="开始日期" range-separator="至"
                        end-placeholder="结束日期">
                        </el-date-picker>

                        <span slot="footer" class="dialog-footer">
                            <el-button @click="dateDialogVisible = false">取 消</el-button>
                            <el-button type="primary" @click="dateHandleConfirm">确 定</el-button>
                        </span>
                    </el-dialog>




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
import navbar from '../navbar';
import sidebar from '../sidebar';
import baseapi from '../../utils/api';
import homehttp from '../../utils/http.js';
import homeNav from './HomeNav';
import {    
        zm_cityList,
        zm_getList1,
        zm_homeBasicInfo,
        get_basicInfoPV_array,
        get_moneyTable_array1,
	    get_moneyTable_array2,
	    get_moneyTable_array3,
} from "../../filters/zm_data.js";
import {    
    zm_standardDateToFormatDate,
    zm_jsonToString,
    zm_formDataToString,
    // zm_getCurrenDateYYYYMMDD,
 } from "../../filters/zm_tools.js";
import {    
    zm_getCurrenTimestamp,
    zm_getCurrenDateYYYYMMDD,
    zm_dateStringToTimestamp,
    zm_DateToTimestamp,
    zm_todayZeroTimestamp,
    zm_isLeapYear,
    zm_generateSevenDay,
    zm_getLateSevenDay,
    zm_getBeforeLaterDate,
 } from "../../filters/zm_dateTime.js";



import basicInfoView from './hm_BasicInfoView';

export default {
    data() {
        return {
            pageDataOpreateIndex: 0,
            pageDataOpreateName: 'first', //默认选项
            pvPageDataOpreateIndex: 0,
            pvPageDataOpreateName: 'first', //默认选项
            pvBasicInfoArray: [],
            opreateIndex5: 0,
            opreateName5: 'first', //默认选项
            opreateIndex6: 0,
            opreateName6: 'first', //默认选项
            opreateIndex7: 0,
            opreateName7: 'first', //默认选项
            opreateDateType: 1,
            dateDialogVisible: false,
            customDate: '',
            startTime: '',
            endTime: '',
            startDate: '',
            endDate: '',
            startTimestamp: '',
            endTimestamp: '',

            selectDateString1: '',
            selectDateString2: '',
            selectDateString4: '',
            selectDateString5: '',
            selectDateString6: '',
            selectDateString7: '',

            selectDate1: ['', ''],
            selectDate2: ['', ''],
            selectDate4: ['', ''],
            selectDate5: ['', ''],
            selectDate6: ['', ''],
            selectDate7: ['', ''],
            // dataList : zm_cityList(),
            // dataList : [],
            tableData: zm_getList1(),
            tableData1: [],
            tableData2: [zm_getList1()[0]],
            tableData3: '',
            tableData41: [],
            tableData42: [],
            tableData43: [],
            tableData5: [],
            tableData6: [],
            tableData71: [],
            tableData71: [],
            tableData72: [],
            tableData73: [],
            tableData74: [],
            tableData75: [],
            tableData76: [],
            tableData77: [],
            tableData78: [],
            hmChart: '',
            hmOption: '',
            
            dayAllZeroTimestamp: '1546272000000', //2019-01-01 00:00:00
            todayZeroTimestamp: '',
            todayEndTimestamp: "",
            todayTimestamp: [],
            day7Timestamp: [],
            day30Timestamp: [],
            dayAllTimestamp: [],
            currenDateYYYYMMDD: '',
            day7String: '',
            day30String: '',
            dayAllString: '2019-01-01~至今',
            
        };
    },
    //路由前置
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                // vm.sassData();
                // vm.vipMoneySort();
            } else {
                next('/login');
            }
		})
	},
    mounted(){
        // 基于准备好的dom，初始化echarts实例（ECharts 折线图）
        // 指定图表的配置项和数据 
        var dom = document.getElementById("zm_ECharts");
        this.hmChart = echarts.init(dom, 'light');
        this.hmOption = {
            title: {
                text: "", 
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                // data: ['付款订单金额', '付款订单数', '成功订单金额', '成功订单数', '佣金金额']
                data: ["首页", "抢购活动页", "抢购活动详情页", "7人拼团页", "7人拼团详情页", "个人中心页", "商品详情页", "订单确认页"],
            },
            //刻度名称：X轴 
            xAxis: {
                type: 'category',
				boundaryGap: false,
                data: ["09-01", "09-02", "09-03", "09-04", "09-05", "09-06", "09-07", "09-08", "09-09", "09-10", 
                       "09-10", "09-11", "09-12", "09-13", "09-14", "09-15", "09-16", "09-17", "09-18", "09-19", 
                       "09-20", "09-21", "09-22", "09-23", "09-24", "09-25", "09-30"],
            },
            //刻度名称：Y轴
            yAxis: {
                type: 'value',
				axisLabel: {
					formatter: '{value}'
                }
            },
            series: [],
        };
        // 使用刚指定的配置项和数据显示图表。  get_basicInfoPV_array 、 get_moneyTable_array1
        this.pvBasicInfoArray= get_basicInfoPV_array(false);
        this.hmOption.series = this.pvBasicInfoArray;
        this.hmChart.setOption( this.hmOption );

        this.request_trackAdminData("base.all", "", "", 1, "1各页面基础数据情况");    
        this.request_trackAdminData("base.chart", "", "", 2, "2基础数据PV折线图");  
        this.request_trackAdminData("base.funnel", "", "", 3, "3数据漏斗"); //3、
        this.request_trackAdminData("exposure.main", "", "", 4.1, "4.1区域曝光数-首页");  
        this.request_trackAdminData("exposure.rush", "", "", 4.2, "4.2区域曝光数-抢购活动页");  
        this.request_trackAdminData("exposure.center", "", "", 4.3, "4.3区域曝光数-个人中心");
        this.request_trackAdminData("base.category", "", "", 5, "5各品类数据概况");       
        this.request_trackAdminData("base.item", "", "", 6, "6商品数据概况");           
        
        this.request_trackAdminData("action.main", "", "", 7.1, "7.1首页动作采集");         
        this.request_trackAdminData("action.rush", "", "", 7.2, "7.2抢购活动页动作采集");         
        this.request_trackAdminData("action.rush.detail", "", "", 7.3, "7.3抢购活动详情页动作采集");   
        this.request_trackAdminData("action.rush", "", "", 7.4, "7.4七人拼团活动页动作采集");         
        this.request_trackAdminData("action.center", "", "", 7.5, "7.5个人中心页动作采集");      
        this.request_trackAdminData("action.item", "", "", 7.6, "7.6普通商品详情页动作采集");         
        this.request_trackAdminData("action.order", "", "", 7.7, "7.7订单确认页动作采集");        
        this.request_trackAdminData("action.pay", "", "", 7.8, "7.8选择付款方式动作采集");           
        

        // const start = new Date(new Date(new Date().toLocaleDateString()).getTime());
        // console.log('---currentDate= '+start); //Mon Dec 04 2017 00:00:00 GMT+0800 (中国标准时间)
        // 获取今天 凌晨日期时间戳 
        // console.log('---currentDate= '+zm_getBeforeLaterDate(-7));
        // console.log('---currentDate= '+zm_getBeforeLaterDate(20));
        // console.log('---currentDate= '+zm_getBeforeLaterDate(22));
        // 当前日期
        this.currenDateYYYYMMDD      = zm_getCurrenDateYYYYMMDD();
        let currenDateYYYYMMDDHHMMSS = zm_getCurrenDateYYYYMMDD() + " 23:59:59";
        this.todayZeroTimestamp = zm_todayZeroTimestamp();
        this.todayEndTimestamp  = zm_dateStringToTimestamp(currenDateYYYYMMDDHHMMSS, 2);
        // 今日
        this.todayTimestamp = [this.todayZeroTimestamp, this.todayEndTimestamp]; 
        // 7日 
        // this.day7Timestamp  = zm_getBeforeLaterDate(this.currenDateYYYYMMDD, 7, 2);
        let day7Array = zm_getBeforeLaterDate(this.currenDateYYYYMMDD, 7, 1);
        this.day7String     = day7Array[0] +" ~ "+ day7Array[1];
        this.day7Timestamp  = [zm_dateStringToTimestamp(day7Array[0], 1) , zm_dateStringToTimestamp(day7Array[1], 2) ];

        // 30日
        // this.day30Timestamp = zm_getBeforeLaterDate(this.currenDateYYYYMMDD, 30,2);
        let day30Array = zm_getBeforeLaterDate(this.currenDateYYYYMMDD, 30, 1);
        this.day30String     = day30Array[0] +" ~ "+ day30Array[1];
        this.day30Timestamp  = [zm_dateStringToTimestamp(day30Array[0], 1) , zm_dateStringToTimestamp(day30Array[1], 2) ];
        // 全部
        this.dayAllTimestamp    = [this.dayAllZeroTimestamp, this.todayEndTimestamp];
        
        this.selectDateString1 = this.currenDateYYYYMMDD;
        this.selectDateString2 = this.currenDateYYYYMMDD;
        this.selectDateString4 = this.currenDateYYYYMMDD;
        this.selectDateString5 = this.currenDateYYYYMMDD;
        this.selectDateString6 = this.currenDateYYYYMMDD;
        this.selectDateString7 = this.currenDateYYYYMMDD;
        // console.log('---dayAllZeroTimestamp= '+this.dayAllZeroTimestamp);
        // console.log('---todayZeroTimestamp= '+ this.todayZeroTimestamp);
        // console.log('---todayEndTimestamp = '+ this.todayEndTimestamp);

        console.log('---currenDateYYYYMMDD= '+this.currenDateYYYYMMDD);
        console.log('---day7String        = '+this.day7String);
        console.log('---day30String       = '+this.day30String);
        console.log('---dayAllString      = '+this.dayAllString);

        console.log('---todayTimestamp = '+this.todayTimestamp);
        console.log('---day7Timestamp  = '+this.day7Timestamp);
        console.log('---day30Timestamp = '+this.day30Timestamp);
        console.log('---dayAllTimestamp= '+this.dayAllTimestamp);
        
    
        //  [this.todayZeroTimestamp, this.todayEndTimestamp]
        

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
        customDate: function(val) {
		    console.log('---customDate: ' + val)
			if(val) {
                this.startTime = val[0];
                this.endTime   = val[1];

				this.startDate = zm_standardDateToFormatDate(val[0], 1);
                this.endDate   = zm_standardDateToFormatDate(val[1], 1);
                this.startTimestamp = zm_DateToTimestamp(val[0], 1);
                this.endTimestamp   = zm_DateToTimestamp(val[1], 1);                
                console.log("---startTimestamp= "+ this.startTimestamp+ "、endTimestamp= "+this.endTimestamp);
                console.log("---startDate= "+ this.startDate+ "、endDate= "+this.endDate);
			}
        },
        deep:true
    },
    methods:{
        dateHandleClose(){
            console.log( '---DateHandleClose: opreateDateType= '+  this.opreateDateType);
            this.dateDialogVisible = false;
        },
        dateHandleConfirm(){
            this.dateDialogVisible = false;
            var getSelectDate = this.startDate +' 至 '+ this.endDate;
            console.log('---opreateDateType= '+  this.opreateDateType);
            console.log("---getSelectDate= "+ getSelectDate);
            if (this.opreateDateType==1) {
                this.selectDateString1 = getSelectDate;
                this.selectDate1 = [this.startTimestamp, this.endTimestamp];

            } else if (this.opreateDateType==2) {
                this.selectDateString2 = getSelectDate;
                this.selectDate2 = [this.startTimestamp, this.endTimestamp];
                // 重新设置数据
                let seriesData = get_basicInfoPV_array(false);
                for (let index = 0; index < seriesData.length; index++) {
                    const element = seriesData[index];
                    if (index==0 || index==1) {
                        element.smooth = true;
                    } else if (index==5 || index==6) {
                        element.smooth = false;
                    } else {
                        element.data = []
                    }
                }
                this.hmOption.legend.data = ['付款订单金额', '付款订单数', '成功订单金额', '成功订单数', '佣金金额'];
                this.hmOption.series = seriesData;
                this.hmChart.setOption( this.hmOption );



            } else if (this.opreateDateType==4) {
                this.selectDateString4 = getSelectDate;
                this.selectDate4 = [this.startTimestamp, this.endTimestamp];

            }else if (this.opreateDateType==5) {
                this.selectDateString5 = getSelectDate;
                this.selectDate5 = [this.startTimestamp, this.endTimestamp];

            }else if (this.opreateDateType==6) {
                this.selectDateString6 = getSelectDate;
                this.selectDate6 = [this.startTimestamp, this.endTimestamp];

            }else if (this.opreateDateType==7) {
                this.selectDateString7 = getSelectDate;
                this.selectDate7 = [this.startTimestamp, this.endTimestamp];
            }



        },
        // 1、各页面基础数据情况
        handleClick1(tab, event) {
            console.log( '---itemIndex= '+  tab.index);
            this.pageDataOpreateIndex = tab.index;
            this.opreateDateType = 1;
            if (this.pageDataOpreateIndex==0) {
                this.selectDateString1 = this.currenDateYYYYMMDD;
                this.selectDate1       = this.todayTimestamp;
            }
            else if (this.pageDataOpreateIndex==1) {
                this.selectDateString1 = this.day7String;
                this.selectDate1       = this.day7Timestamp;
            }
            else if (this.pageDataOpreateIndex==2) {
                this.selectDateString1 = this.day30String;
                this.selectDate1       = this.day30Timestamp;
            }
            else if (this.pageDataOpreateIndex==3) {
                this.selectDateString1 = this.dayAllString;
                this.selectDate1       = this.dayAllTimestamp;
            }
            else if (this.pageDataOpreateIndex==4) {
                this.dateDialogVisible = true;
            }
            if (this.pageDataOpreateIndex==0 ||
                this.pageDataOpreateIndex==1 ||
                this.pageDataOpreateIndex==2 ||
                this.pageDataOpreateIndex==3 ) {
                this.request_trackAdminData("base.all", this.selectDate1[0], this.selectDate1[1], 1, "1各页面基础数据情况"); 
            }
            
        },
        // 2、基础数据PV折线图
        pvHandleClick(tab, event) {
            console.log( '---itemIndex= '+  tab.index);
            this.pvPageDataOpreateIndex = tab.index;
            this.opreateDateType = 2;
            if (this.pageDataOpreateIndex==0) {
                this.selectDateString2 = this.currenDateYYYYMMDD;
                this.selectDate2       = this.todayTimestamp;
            }
            else if (this.pageDataOpreateIndex==1) {
                this.selectDateString2 = this.day7String;
                this.selectDate2       = this.day7Timestamp;
            }
            else if (this.pageDataOpreateIndex==2) {
                this.selectDateString2 = this.day30String;
                this.selectDate2       = this.day30Timestamp;
            }
            else if (this.pageDataOpreateIndex==3) {
                this.selectDateString2 = this.dayAllString;
                this.selectDate2       = this.dayAllTimestamp;
            }
            else if (this.pageDataOpreateIndex==4) {
                this.dateDialogVisible = true;
            }
            if (this.pageDataOpreateIndex==0 ||
                this.pageDataOpreateIndex==1 ||
                this.pageDataOpreateIndex==2 ||
                this.pageDataOpreateIndex==3 ) {
                this.request_trackAdminData("base.all", this.selectDate2[0], this.selectDate2[1], 2, "2基础数据PV折线图"); 
            }
        },
        // 4、区域曝光数
        handleClick4(tab, event) {
            console.log( '---itemIndex= '+  tab.index);
            this.pvPageDataOpreateIndex = tab.index;
            this.opreateDateType = 4;
            if (this.pageDataOpreateIndex==0) {
                this.selectDateString4 = this.currenDateYYYYMMDD;
                this.selectDate4       = this.todayTimestamp;
            }
            else if (this.pageDataOpreateIndex==1) {
                this.selectDateString4 = this.day7String;
                this.selectDate4       = this.day7Timestamp;
            }
            else if (this.pageDataOpreateIndex==2) {
                this.selectDateString4 = this.day30String;
                this.selectDate4       = this.day30Timestamp;
            }
            else if (this.pageDataOpreateIndex==3) {
                this.selectDateString4 = this.dayAllString;
                this.selectDate4       = this.dayAllTimestamp;
            }
            else if (this.pageDataOpreateIndex==4) {
                this.dateDialogVisible = true;
            }
            if (this.pageDataOpreateIndex==0 ||
                this.pageDataOpreateIndex==1 ||
                this.pageDataOpreateIndex==2 ||
                this.pageDataOpreateIndex==3 ) {
                this.request_trackAdminData("exposure.main", this.selectDate4[0], this.selectDate4[1], 4.1, "4.1区域曝光数-首页"); 
                this.request_trackAdminData("exposure.rush", this.selectDate4[0], this.selectDate4[1], 4.2, "4.2区域曝光数-抢购活动页"); 
                this.request_trackAdminData("exposure.center", this.selectDate4[0], this.selectDate4[1], 4.3, "4.3区域曝光数-个人中心"); 
            }
        },
        // 5.各品类数据概况
        handleClick5(tab, event) {
            console.log( '---itemIndex= '+  tab.index);
            this.opreateIndex5 = tab.index;
            this.opreateDateType = 5;
            if (this.pageDataOpreateIndex==0) {
                this.selectDateString5 = this.currenDateYYYYMMDD;
                this.selectDate5       = this.todayTimestamp;
            }
            else if (this.pageDataOpreateIndex==1) {
                this.selectDateString5 = this.day7String;
                this.selectDate5       = this.day7Timestamp;
            }
            else if (this.pageDataOpreateIndex==2) {
                this.selectDateString5 = this.day30String;
                this.selectDate5       = this.day30Timestamp;
            }
            else if (this.pageDataOpreateIndex==3) {
                this.selectDateString5 = this.dayAllString;
                this.selectDate5       = this.dayAllTimestamp;
            }
            else if (this.pageDataOpreateIndex==4) {
                this.dateDialogVisible = true;
            }
            if (this.pageDataOpreateIndex==0 ||
                this.pageDataOpreateIndex==1 ||
                this.pageDataOpreateIndex==2 ||
                this.pageDataOpreateIndex==3 ) {
                this.request_trackAdminData("base.category", this.selectDate5[0], this.selectDate5[1], 5, "5各品类数据概况"); 
            }
        },
        // 6.商品数概况
        handleClick6(tab, event) {
            console.log( '---itemIndex= '+  tab.index);
            this.opreateIndex6 = tab.index;
            this.opreateDateType = 6;
            if (this.pageDataOpreateIndex==0) {
                this.selectDateString6 = this.currenDateYYYYMMDD;
                this.selectDate6       = this.todayTimestamp;
            }
            else if (this.pageDataOpreateIndex==1) {
                this.selectDateString6 = this.day7String;
                this.selectDate6       = this.day7Timestamp;
            }
            else if (this.pageDataOpreateIndex==2) {
                this.selectDateString6 = this.day30String;
                this.selectDate6       = this.day30Timestamp;
            }
            else if (this.pageDataOpreateIndex==3) {
                this.selectDateString6 = this.dayAllString;
                this.selectDate6       = this.dayAllTimestamp;
            }
            else if (this.pageDataOpreateIndex==4) {
                this.dateDialogVisible = true;
            }
            if (this.pageDataOpreateIndex==0 ||
                this.pageDataOpreateIndex==1 ||
                this.pageDataOpreateIndex==2 ||
                this.pageDataOpreateIndex==3 ) {
                this.request_trackAdminData("base.item", this.selectDate6[0], this.selectDate6[1], 6, "6商品数据概况"); 
            }
        },
        // 7.页面动作采集
        handleClick7(tab, event) {
            console.log( '---itemIndex= '+  tab.index);
            this.opreateIndex7 = tab.index;
            this.opreateDateType = 7;
            if (this.pageDataOpreateIndex==0) {
                this.selectDateString7 = this.currenDateYYYYMMDD;
                this.selectDate7       = this.todayTimestamp;
            }
            else if (this.pageDataOpreateIndex==1) {
                this.selectDateString7 = this.day7String;
                this.selectDate7       = this.day7Timestamp;
            }
            else if (this.pageDataOpreateIndex==2) {
                this.selectDateString7 = this.day30String;
                this.selectDate7       = this.day30Timestamp;
            }
            else if (this.pageDataOpreateIndex==3) {
                this.selectDateString7 = this.dayAllString;
                this.selectDate7       = this.dayAllTimestamp;
            }
            else if (this.pageDataOpreateIndex==4) {
                this.dateDialogVisible = true;
            }
            if (this.pageDataOpreateIndex==0 ||
                this.pageDataOpreateIndex==1 ||
                this.pageDataOpreateIndex==2 ||
                this.pageDataOpreateIndex==3 ) {
                this.request_trackAdminData("action.main", this.selectDate7[0], this.selectDate7[1], 7.1, "7.1首页动作采集"); 
                this.request_trackAdminData("action.rush", this.selectDate7[0], this.selectDate7[1], 7.2, "7.2抢购活动页动作采集");
                this.request_trackAdminData("action.rushDetail", this.selectDate7[0], this.selectDate7[1], 7.3, "7.3抢购活动详情页动作采集");
                this.request_trackAdminData("action.group7", this.selectDate7[0], this.selectDate7[1], 7.4, "7.4七人拼团活动页动作采集");
                this.request_trackAdminData("action.center", this.selectDate7[0], this.selectDate7[1], 7.5, "7.5个人中心页动作采集");
                this.request_trackAdminData("action.item", this.selectDate7[0], this.selectDate7[1], 7.6, "7.6普通商品详情页动作采集");
                this.request_trackAdminData("action.order", this.selectDate7[0], this.selectDate7[1], 7.7, "7.7订单确认页动作采集");
                this.request_trackAdminData("action.pay", this.selectDate7[0], this.selectDate7[1], 7.8, "7.8选择付款方式动作采集");  
            }
        },
        // 请求页面分析数据
        request_trackAdminData(type, startTime, endTime, dataType, dataName){
            let self = this;
            let params = new FormData();       
            params.append('startTime', this.startTime);
            params.append('endTime', this.endTime);
            params.append('t', type);
            let urlStr = baseapi.logIP + baseapi.bp_adminData;
            
            console.log('---'+dataName+': params=' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),			
                }
            }).then(function(res){
                console.log('---'+dataName+': response= '+zm_jsonToString(res.data));
                if (res.data.status != "200") {
                    self.$message.error(res.data.message);
                    return;
                }

                if (dataType == 1) {            
                    self.tableData1 = res.data.list;

                } else if (dataType == 2) {  
                    // 基础数据PV折线图   
                    self.tableData2 = res.data.list;
                    // console.log('---'+dataName+': self.tableData2= '+zm_jsonToString(self.tableData2));
                    let BaseData = [];
                    let RushData = [];
                    let OrderData = [];
                    let Group7DetailData = [];
                    let RushDetailData = [];
                    let ItemData = [];
                    let Group7Data = [];
                    let CenterData = [];

                    for (let i = 0; i < self.tableData2.length; i++) {
                        const element = self.tableData2[i];
                        BaseData.push(element.pv_Base);
                        RushData.push(element.pv_Rush);
                        RushDetailData.push(element.pv_RushDetail);
                        Group7Data.push(element.pv_Group7);
                        Group7DetailData.push(element.pv_Group7Detail);

                        CenterData.push(element.pv_Center);
                        ItemData.push(element.pv_Item);
                        OrderData.push(element.pv_Order);
                    }
                    //             {
                    // 	name: '首页',
                    // 	type: 'line',
                    // 	smooth: smooth,
                    // 	data: ["162408", "84274", "51885", "32385", "29434", "44453", "113740", "228128", "344679", "462128", "585712", "661449", "704045", "698178", "642736", "621051", "614459", "604958", "615722", "606564", "721321", "700773", "519813", "297617", "557617"]
                    // },
                    // console.log('---'+dataName+': BaseData= '+zm_jsonToString(BaseData));
                    // console.log('---'+dataName+': RushData= '+zm_jsonToString(RushData));
                    // console.log('---'+dataName+': RushDetailData= '+zm_jsonToString(RushDetailData));
                    // console.log('---'+dataName+': Group7Data= '+zm_jsonToString(Group7Data));

                    let original_BaseData         = self.pvBasicInfoArray[0];
                    let original_RushData         = self.pvBasicInfoArray[1];
                    let original_RushDetailData   = self.pvBasicInfoArray[2];
                    let original_Group7Data       = self.pvBasicInfoArray[3];
                    let original_Group7DetailData = self.pvBasicInfoArray[4];
                    let original_CenterData     = self.pvBasicInfoArray[5];
                    let original_ItemData       = self.pvBasicInfoArray[6];
                    let original_OrderData      = self.pvBasicInfoArray[7]; 

                    original_BaseData.data          = BaseData;
                    original_RushData.data          = RushData;
                    original_RushDetailData.data    = RushDetailData;
                    original_Group7Data.data        = Group7Data;
                    original_Group7DetailData.data  = Group7DetailData;
                    original_CenterData.data = CenterData;
                    original_ItemData.data   = ItemData;
                    original_OrderData.data  = OrderData;
                    
                    // 使用刚指定的配置项和数据显示图表。  get_basicInfoPV_array
                    self.hmOption.series = self.pvBasicInfoArray;
                    self.hmChart.setOption( self.hmOption );


                } else if (dataType == 3) { 
                    // 3数据漏斗   
                    console.log( '---3数据漏斗= '+ dataType);
                    var tableData3 = res.data.data;
                    tableData3.percent1 = 100;
                    tableData3.percent2 = tableData3.itemDetail / tableData3.item;
                    tableData3.percent3 = tableData3.order / tableData3.item;
                    tableData3.percent4 = tableData3.pay / tableData3.item;
                    tableData3.percent12 = tableData3.itemDetail / tableData3.item;
                    tableData3.percent23 = tableData3.order / tableData3.itemDetail;
                    tableData3.percent34 = tableData3.pay / tableData3.order;
                    if (isNaN(tableData3.percent12)) {
                        tableData3.percent12 = 0;
                    }
                    if (isNaN(tableData3.percent23)) {
                        tableData3.percent23 = 0;
                    }
                    if (isNaN(tableData3.percent34)) {
                        // console.log('---percent34 000= ', tableData3.percent34);
                        tableData3.percent34 = 0;
                    }
                    tableData3.percent12 = tableData3.percent12.toFixed(2);
                    tableData3.percent23 = tableData3.percent23.toFixed(2);
                    tableData3.percent34 = tableData3.percent34.toFixed(2);
                    self.tableData3 = tableData3;
                    // console.log('---percent12= ', tableData3.percent12);
                    // console.log('---percent23= ', tableData3.percent23);
                    console.log('---percent34= ', tableData3.percent34);

                } else if (dataType == 4.1) {  
                    self.tableData41 = [res.data.data];

                } else if (dataType == 4.2) {   
                    self.tableData42 = [res.data.data];

                } else if (dataType == 4.3) {   
                    self.tableData43 = [res.data.data];

                } else if (dataType == 5) {     self.tableData5 = res.data.list;
                } else if (dataType == 6) {     self.tableData6 = res.data.list;
                } else if (dataType == 7.1) {   self.tableData71 = [res.data.data];
                } else if (dataType == 7.2) {   self.tableData72 = [res.data.data];
                } else if (dataType == 7.3) {   self.tableData73 = [res.data.data];
                } else if (dataType == 7.4) {   self.tableData74 = [res.data.data];
                } else if (dataType == 7.5) {   
                    self.tableData75 = [res.data.data];
                    console.log('---setting= ', self.tableData75 .setting);

                } else if (dataType == 7.6) {   
                    self.tableData76 = [res.data.data];
                    console.log('---evaluation= ', self.tableData76 .evaluation);

                } else if (dataType == 7.7) {   
                    self.tableData77 = [res.data.data];
                    console.log('---back= ', self.tableData77 .back);

                } else if (dataType == 7.8) { 
                    self.tableData78 = [res.data.data];  
                    
                } 

            },function(res){
                self.$message.error(res.data.message);
            })
        },
        
 
    },
    components:{
        navbar,sidebar, homeNav, basicInfoView
    }
}
</script>

<style scoped>


.pbd_dataView1{
    display: flex;
    margin: 0 0 20px 0;
}
/************* 1、各页面基础数据情况 *************/
.pbd_pageDataView{
    background: white !important;
    width: 700px;
    height: 500px;
    border: 0.5px solid #DFE6E8;
    padding: 5px;
}

.pbd_pageDataTable {
    width: 680px;
}
.pbd_itemTitle{
    font-size: 22px !important;
    font-weight: 500;
    color: #4B5769;
    margin: 10px 0 0 0px;
}
.pbd_itemDate{
    color: #7B8088;
    margin: 10px 0 0 2px;
}

.pbd_itemOpreate {
    display: flex;
    justify-content: flex-end;
    margin: -30px 20px 0 0;
}
.pbd_selectDate{
    background: yellow;
}
.pbd_itemOpreate >>> .el-tabs__nav-wrap::after {
    height: 0px;
}
.pbd_itemOpreate >>> .el-tabs__active-bar {
    height: 0px;
}
.pbd_itemOpreate >>> .el-tabs__item {
    padding: 0 5px;
}



/************* 2、基础数据PV折线图 *************/
.pbd_pvLineChartView{
    background: white !important;
    /* width: 700px; */
    /* min-width: 500px; */
    height: 500px;
    border: 0.5px solid #DFE6E8;
    padding: 5px;
    margin: 0 0 0 20px;
}
.pbd_pvLineChartDataView{
    margin: 5px;
    /* background: lavenderblush; */
    display: flex;
    min-width: 680px;
    height: 400px;
}


/************* 3、数据漏斗 *************/
.pbd_DataFunnelView{
    background: white;
    padding: 5px 5px 30px 10px;
    margin-top: 40px;
}
.pbd_DataFunnelView >>> .el-progress-bar__outer{
    border-radius: 0px;
    background-color: white;
}
.pbd_DataFunnelView >>> .el-progress-bar__inner {
    border-radius: 0px;
     background-color: #518ACC; 
}
.pbd_DataFunnelProgres{
    margin: 10px;
    width: 600px;
    margin: 15px 0 0 10px;
}
.pbd_DataFunnelItemView{
    display: flex;
    margin: 10px 0 0 0;
    font-size: 15px !important;
    font-weight: 500;
}
.pbd_DataFunnelTitleView{
    width: 260px;
    height: 40px;
    border: 0.8px solid #cccccc;
    padding: 5px;
    display: flex;
}
.pbd_DataFunnelTitle{
    width: 50%;
    margin-top: 15px;
}
.pbd_DataFunnelData{
     width: 50%;
     text-align: right;
     margin-top: 15px;
}
.pbd_DataFunnelNextView{
    margin: 10px 10px 10px 90px;
    /* background: linen; */
    height: 30px;
    width: 80px;
    display: flex;
}
.pbd_DataFunnelNextImg {
    width: 80px;
    height: 30px;
    /* margin-left: 40px; */
}
.pbd_DataFunnelNextProgres{
    margin: 5px 0 0 -70px;
    width: 60px;
    text-align: center;
    /* background: yellow; */
    -webkit-transform: scale(0.85);
    transform: scale(0.85);
}


/************* 4、区域曝光数 *************/
.pbd_AreaExposureNumView {
    background: white;
    padding: 5px 5px 10px 10px;
    margin: 40px 0 10px 0;
}
.pbd_AreaExposureNumTitle{
    margin: 30px 0 5px 5px;
    font-size: 14px !important;
    font-weight: 500;
}
.pbd_AreaExposureNumHomeTable{
    /* margin-top: 20px; */
    margin-bottom: 20px;
}
/* 取消悬停背景色 */
.pbd_AreaExposureNumHomeTable >>> tr:hover>td{
	background-color: #ffffff !important;
}
/* 取消表头背景色 */
.pbd_AreaExposureNumHomeTable >>> thead.is-group th {
    background: white;
}

/************* 5.各品类数据概况、6.商品数概况 *************/
.pbd_dataView56 {
    display: flex;
    margin: 40px 0 20px 0;
}
.pbd_everTypeView{
    background: white !important;
    width: 700px;
    /* height: 500px; */
    border: 0.5px solid #DFE6E8;
    padding: 5px;
    margin: 0 0 10px 0px;
}
.pbd_productNumView{
    background: white !important;
    /* height: 500px; */
    border: 0.5px solid #DFE6E8;
    padding: 5px;
    margin: 0 0 20px 20px;
}

/************* 7.页面动作采集 *************/

.pbd_actionCollectView {
    background: white;
    padding: 5px 5px 50px 10px;
    margin: 40px 0 10px 0;
}
.pbd_actionCollectTable {
    margin-top: 40px;
    margin-bottom: 20px;
}
.pbd_acTable1 {
    margin-top: 20px;
}
/* .pbd_actionCollectTable >>> thead {
    color: #333333;
}
.pbd_actionCollectTable >>> thead {
    color: #909399;
} */
/* 取消悬停背景色 */
.pbd_actionCollectTable >>> tr:hover>td{
	background-color: #ffffff !important;
}
/* 取消表头背景色 */
.pbd_actionCollectTable >>> thead.is-group th {
    background: white;
}


/************* 总体 *************/
.home_basicInfoView {
    margin: 10px 0px 30px 0px;
}
.home_basicInfoView1{
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


</style>