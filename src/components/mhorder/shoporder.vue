<template>
    <div class="main">
        <sidebar></sidebar>
        <!--主体 start-->
        <div class="main-right">
            <navbar></navbar>
            <!--二级导航栏 -->
            <div class="main-goods">
                <shopnavbar></shopnavbar>
                <div class="main-goods-right">
                    <!-- 商品中心内容 -->
                    <div class="goods-card_body" v-loading="loading">
                        <!--选项卡组件-->
                        <div class="shuaixuan vip-alllist mh-order-hight">
                            <div class="m-search-box el-row el-row-my-div">
                                <div class="sx-input mh-order">
                                    <label class="el-form-item__label" style="width: 130px;">订单号：</label>
                                    <el-input v-model="inordernumber" placeholder="">{{inordernumber}}</el-input>
                                </div>
                                <!--2-->
                                <div>
                                    <label class="el-form-item__label" style="width: 130px;">物流方式：</label>
                                    <el-select v-model="value3" placeholder="请选择">
                                        <el-option v-for="item in logisticsmode" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                </div>
                                <!--3-->
                                <div>
                                    <label class="el-form-item__label" style="width: 130px;">物流公司：</label>
                                    <el-select v-model="value9" placeholder="请选择物流公司">
                                        <el-option v-for="item in wuliugs" :key="item.id" :label="item.name" :value="item.id">
                                        </el-option>
                                    </el-select>
                                </div>
                            </div>
                            <!--  一行   -->
                            <div class="m-search-box el-row el-row-my-div">
                                  <div class="sx-input mh-order">
                                    <label class="el-form-item__label" style="width: 130px;">商品ID：</label>
                                    <el-input v-model="value6" placeholder="">{{value6}}</el-input>
                                </div>
                                <div>
                                    <label class="el-form-item__label" style="width: 130px;">商品名称：</label>
                                    <el-input v-model="value7" placeholder="请输入商品名称"></el-input>
                                </div>
                                <div>
                                    <label class="el-form-item__label" style="width: 130px;">快递单号：</label>
                                    <el-input v-model="value4" placeholder=""></el-input>
                                </div>
                            </div>
    
                            <!--3行-->
                            <div class="m-search-box el-row el-row-my-div">
                                <div class="vip-item-list_time mh-order mihuanorder-time mh-shoporderlist-xx" style="width: 500px !important">
                                
                                     <div style="display: flex;">
                                        <label class="el-form-item__label" style="width: 130px;">订单状态：</label>
                                        <el-select v-model="orderStatus" placeholder="全部">
                                            <el-option v-for="item in ordertypeList" :key="item.value" :label="item.label" :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </div>

                                    <div style="display: flex;">
                                        <label class="el-form-item__label" style="width: 100px;">供应商：</label>
                                        <el-input v-model="ssupplierId" class="so_supplier" placeholder="请输入供应商ID"></el-input>
                                    </div>

                                    <div style="display: flex;">
                                        <label class="el-form-item__label" style="width: 100px;">店铺：</label>
                                        <el-input v-model="svshopId" class="so_shop" placeholder="请输入供店铺ID"></el-input>
                                    </div>

                                </div>
                            </div>

                            <!--两行-->
                            <div class="m-search-box el-row el-row-my-div">
                                <div class="vip-item-list_time mh-order mihuanorder-time mh-shoporderlist-xx" style="width: 500px !important">
                                    
                                    <el-select v-model="value10" placeholder="下单时间">
                                        <el-option v-for="item in placeordertime" :key="item.value" :label="item.label" :value="item.value">
                                        </el-option>
                                    </el-select>
                                    <div>
                                        <el-date-picker v-model="value11" value-format="timestamp" @change="huahua" type="datetimerange" 
                                            range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" style="width: 380px !important" >
                                        </el-date-picker>
                                    </div>

                                </div>
                            </div>
            
                            <!---->
                        </div>
                        <!-- 导出 -->
                        <el-collapse-transition>
                        <div class="mh-shop-daochucontent-divcheckbox" v-show="showxia3">
                            <el-checkbox-group v-model="checkedCities"  @change="handleCheckedCitiesChange">
                                <el-checkbox size="medium" v-for="(citiesitem, citiesindex) of cities"  :label="citiesitem.id"   :key="citiesitem.id" style="width:110px;margin-bottom:8px">{{citiesitem.name}}</el-checkbox>
                            </el-checkbox-group>
                            <div>
                                
                                <el-button type="success" size="mini" v-model="checkAll" @click="newQuanXuan">全选</el-button>
                                <el-button type="success" size="mini" v-model="checkAll" @click="newQuanNoXuan">全不选</el-button>
                            </div>
                        </div>
                        </el-collapse-transition>

                        <div class="mh-goodsmh-order-shuai">
                                <el-button  @click="request_shuaixuanmethod('',1,999)"  size="small" type="primary">
                                    <span>筛选</span>
                                </el-button>

                            <button @click="okhexiao" type="button" class="el-button el-button--text">
                            <span>清空筛选条件</span></button>

                            <button type="button" class="el-button el-button--warning el-button--small" @click="orderexportMeth">
                                <span>导出</span> 
                            </button> 

                        </div>
                        <!-- 导出over -->
    
                        <!--筛选-->
                        <el-tabs type="border-card" @tab-click="handleClick" >
                            <el-tab-pane :label="'全部(' + allNumber + ')'" name="">
                                <!-- <el-tab-pane label="全部" name=""> -->
                                <!--全部-->
                                <ul class="mh-order_ul">
                                    <li class="mh-order_ul-one">商品</li>
                                    <li class="mh-order_ul-two">数量/店铺</li>
                                    <li class="mh-order_ul-eight">售后</li>
                                    <li class="mh-order_ul-there">收货人</li>
                                    <li class="mh-order_ul-five">买家留言</li>
                                     <!-- <li class="mh-order_ul-seven">店铺</li> -->

                                    <li class="mh-order_ul-night">操作</li>
                                </ul>
                                <div class="shoporder-table-" v-for="(item,index) of list" :key="index">
                                    <div class="shoporder-table--top">
                                        <div class="shoporder-table-mnewtop">
                                            <div class="shoporder-table--top-div">
                                                <el-checkbox v-model="item.checkedflog"   @change="danShaiXuan(item.no,checked)"></el-checkbox>   

                                                <dl>
                                                    <dt>订单号 :&nbsp; </dt>
                                                    <dd>{{item.no}}</dd>
                                                </dl>
                                                <dl v-if="item.payTime != null">
                                                    <dt>支付时间 :&nbsp; </dt>
                                                    <dd>{{item.payTime.time| formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.createTime != null">
                                                    <dt>创建时间 :&nbsp; </dt>
                                                    <dd>{{item.createTime == null ? '正在进行中' : item.createTime.time | formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.finishTime != null">
                                                    <dt>完成时间 :&nbsp; </dt>
                                                    <dd>{{item.finishTime == null ? '正在进行中' : item.finishTime.time | formatDate}}</dd>
                                                </dl>
    
                                                <i v-if="item.source == 3" class="iconfont icon-xiaochengxu" style="color:rgb(121,217,59);margin-left:15px"></i>
    
                                            </div>
    
                                            <dl class="lastdl">
                                                <!-- <dt class="lastdl-dt-detail" @click="seeDetail(item.supplierId, item.no, item.receiverName)">查看详情</dt> -->                                                
                                                <dd class="lastdl-dt-detail" @click="beizhuorder(item.no,item.userId)">备注</dd>
                                            </dl>
                                        </div>
                                        <div class="playmnewliu" v-if=" item.tradeNo != undefined && item.tradeNo != null && item.tradeNo!= '' ? item.tradeNo : '' "> 支付流水号 : {{item.tradeNo}} </div>
                                    </div>
    
                                    <div class="shoporder-table--bottom" >
                                        <div class="newshoporder-tableall">

                                            <div class="newshoporder-tabone-f">
                                                <div class="newshoporder-tabone-goods"   v-for="(itemgoods,indexgoods) of item.detailList" :key="indexgoods">
                                                    <div class="newshoporder-tabone-goodsdiv">
                                                        <img v-if="itemgoods.imageUrl" :src="itemgoods.imageUrl" alt="" width="40" height="40" :title="itemgoods.item.name" class="shoporder-tab-img">
                                                        <dl class="newshoporder-tabone-goodsdiv_dl" v-if="JSON.stringify(itemgoods.item) != '{}'">
                                                            <dt style="display: flex;">
                                                                <span class="mh-order-goodslisty">
                                                                    商品名称 :
                                                                </span>
                                                                <span class="mh-order-goodslisty2">{{itemgoods.item.name}}</span>
                                                            </dt>
                                                            <dd><span class="mh-order-goodslisty">商品ID : </span><span class="mh-order-goodslisty2">{{itemgoods.skuId}}</span></dd>
                                                            <!-- <dd v-if="itemgoods.sku.pvlist.length != 0 "><span class="mh-order-goodslisty">规格 : </span>
                                                                <span class="mh-order-goodslisty2">{{itemgoods.sku.pvlist[0].value}}</span></dd> -->
                                                        </dl>
                                                    </div>
                                                    <div class="newshoporder-tabone-goodsdivtwo">
                                                        <!-- <span v-if="JSON.stringify(itemgoods.item) != '{}'"> ¥ {{parseFloat(itemgoods.item.price/100)}}</span> -->
                                                        <span>{{ itemgoods.quantity}}/ {{ itemgoods.shop.name}}</span>

                                                        
                                                    </div>

                                                    <div class="newshoporder-tab_shopOne-t">
                                                  
                                                        <span v-if="item.status == -4">系统关闭</span>
                                                        <span v-if="item.status == -3">用户拒收</span>
                                                        <span v-if="item.status == -2">用户取消</span>
                                                        <span v-if="item.status == -1">未付款</span>
                                                        <!-- <span v-if="item.status == 0 && itemgoods.status == 0 ">待发货</span> -->
                                                        <!-- <span v-if="item.status == 1">已发货</span> -->
                                                        <span v-if="item.status == 2">退款完成</span>
                                                        <span v-if="item.status == 3">已收货</span>
                                                        <span v-if="item.status == 4">正在付款</span>
                                                        <span v-if="item.status == 5">正在取消</span>
                                                        <span v-if="item.status == 6">取消审核</span>
                                                        <span v-if="item.status == 7">已完成</span>
                                                        <span v-if="item.status == 8">发起售后</span>


                                                        <p v-if="item.status == 1 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>
                                                        <!-- 发了一半的货 -->
                                                        <p v-if="item.status == 0 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                        </p>

                                                        <span v-if="item.status == 0 && itemgoods.status == 0">待发货</span>
                                                        <!-- <span v-if="itemgoods.status == 0">未发货</span> -->
                                                        <!-- <span v-if="itemgoods.status ==1" >已发货</span>      -->
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mh-newshoporder-num">
                                                <dl>
                                                    <dt>{{item.receiverPhone}}</dt>
                                                    <dd>{{item.receiverName}}</dd>
                                                </dl>
                                            </div>

                                             <div class="newshoporder-tuiprice">
                                                {{item.remark == '' ||item.remark == null || item.remark ==undefined ? '暂无留言' : item.remark }}
                                            </div>
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span style="font-weight: 600;">¥ </span> {{item.moneyDeliver}}
                                            </div> -->
                                    

                                            
                                            <!-- 店铺 -->
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span class="mh_order_info" v-if="item.vshopName">{{item.vshopName}}</span> 
                                                <span class="mh_order_info" v-else></span>
                                            </div> -->


                                            <!-- 操作状态开始 -->
                                            <div class="shoporder-edit" v-if="item.status == 0">   
                                                <span class="mh-order-status">等待商家发货</span>                  
                                                <!-- <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="editwuliuaddressStart(item.no,item.userId,item.receiverName,item.receiverPhone,item.receiverAddress,item.regionId)">修改地址</el-button> -->
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no, item.detailList[0].skuId)">发货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == 10 && item.type == 10">   
                                                <span class="mh-order-status">抢购中...</span>   
                                            </div>   

                                            <div class="shoporder-edit" v-if="item.status == 1" >
                                                <span class="mh-order-status">商家已发货</span>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId,2)">修改发货</el-button>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="okgetSgoods(item.no,item.userId,3)">确认收货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == 2">
                                                <span class="mh-order-status">退款完成</span>
                                            </div>

                                            <div class="shoporder-edit" v-if="item.status == -4">
                                                <span style="color:#f56c6c">系统关闭</span>
                                            </div>
        
                                            <div class="shoporder-edit" v-if="item.status == -1">
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="cancelOrder(item.no,item.userId,-2)">取消订单</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="okPay(item.no,item.userId,0)">确认付款</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="updatePrice(item.no,item.userId,item.moneyTotalReal,item.totalCount)">修改价格</el-button>
                                            </div>
        
                                            <!-- 已完成 -->
                                            <div class="shoporder-edit" v-if="item.status == 7">
                                                <span>订单已完成</span>
                                                <!-- <el-button v-if="indexgoods == 0" type="danger" size="mini" disabled>删除</el-button> -->
                                            </div>
                                            <!-- 操作状态结束 -->

                                        </div>
                                 

                                    </div>
                                </div>
                                <!--分页  -->
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="20" layout="total, prev, pager, next, jumper" :total="totalCount">
                                    </el-pagination>
                                </div>
                                <!--全部over-->
                            </el-tab-pane>
                            <el-tab-pane :label="'待付款(' + pendingpaymentNum + ')'" name="-1">
                                <!--全部-->
                                <!--全部-->
                                <ul class="mh-order_ul">
                                    <li class="mh-order_ul-one">商品</li>
                                    <li class="mh-order_ul-two">数量/店铺</li>
                                    <li class="mh-order_ul-eight">售后</li>
                                    <li class="mh-order_ul-there">收货人</li>
                                    <!-- <li class="mh-order_ul-four">买家信息</li> -->
                                    <li class="mh-order_ul-five">买家留言</li>
                                    <!-- <li class="mh-order_ul-sex">运费</li> -->
                                     <!-- <li class="mh-order_ul-seven">店铺</li> -->
                                 
                                    <li class="mh-order_ul-night">操作</li>
                                </ul>
                                <div class="shoporder-table-" v-for="(item,index) of list" :key="index">
                                    <div class="shoporder-table--top">
                                        <div class="shoporder-table-mnewtop">
                                            <div class="shoporder-table--top-div">
                                                 <el-checkbox v-model="item.checkedflog"   @change="danShaiXuan(item.no,checked)"></el-checkbox>           
                                                <dl>
                                                    <dt>订单号 :&nbsp; </dt>
                                                    <dd>{{item.no}}</dd>
                                                </dl>
    
                                                <dl v-if="item.payTime != null">
                                                    <dt>支付时间 :&nbsp; </dt>
                                                    <dd>{{item.payTime.time| formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.createTime != null">
                                                    <dt>创建时间 :&nbsp; </dt>
                                                    <dd>{{item.createTime == null ? '正在进行中' : item.createTime.time | formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.finishTime != null">
                                                    <dt>完成时间 :&nbsp; </dt>
                                                    <dd>{{item.finishTime == null ? '正在进行中' : item.finishTime.time | formatDate}}</dd>
                                                </dl>
    
                                                <i v-if="item.source == 3" class="iconfont icon-xiaochengxu" style="color:rgb(121,217,59);margin-left:15px"></i>
    
                                            </div>
    
                                            <dl class="lastdl">
                                                <!-- <dt class="lastdl-dt-detail" @click="seeDetail(item.userId,item.no,item.user.nickName)">查看详情</dt> -->
                                                <dd class="lastdl-dt-detail" @click="beizhuorder(item.no,item.userId)">备注</dd>
                                            </dl>
                                        </div>
                                        <div class="playmnewliu" v-if=" item.tradeNo != undefined && item.tradeNo != null && item.tradeNo!= '' ? item.tradeNo : '' "> 支付流水号 : {{item.tradeNo}} </div>
                                    </div>
    
                                    <div class="shoporder-table--bottom" >
                                        <div class="newshoporder-tableall">

                                            <div class="newshoporder-tabone-f">
                                                <div class="newshoporder-tabone-goods"   v-for="(itemgoods,indexgoods) of item.detailList" :key="indexgoods">
                                                    <div class="newshoporder-tabone-goodsdiv">
                                                        <img v-if="itemgoods.imageUrl"  :src="itemgoods.imageUrl" alt="" width="40" height="40" :title="itemgoods.item.name" class="shoporder-tab-img">
                                                        <dl class="newshoporder-tabone-goodsdiv_dl" v-if="JSON.stringify(itemgoods.item) != '{}'">
                                                            <dt style="display: flex;"><span class="mh-order-goodslisty">商品名称 : </span><span class="mh-order-goodslisty2">{{itemgoods.item.name}}</span></dt>
                                                            <dd><span class="mh-order-goodslisty">商品ID : </span><span class="mh-order-goodslisty2">{{itemgoods.skuId}}</span></dd>
                                                            <!-- <dd v-if="itemgoods.sku.pvlist.length != 0 "><span class="mh-order-goodslisty">规格 : </span>
                                                                <span class="mh-order-goodslisty2">{{itemgoods.sku.pvlist[0].value}}</span></dd> -->
                                                        </dl>
                                                    </div>

                                    
                                                    <div class="newshoporder-tabone-goodsdivtwo">
                                                        <!-- <span v-if="JSON.stringify(itemgoods.item) != '{}'"> ¥ {{parseFloat(itemgoods.item.price/100)}}</span> -->
                                                        <span>{{ itemgoods.quantity}}/ {{ itemgoods.shop.name}}</span>
                                                    </div>

                                                    <div class="newshoporder-tab_shopOne-t">
                                                  
                                                        <span v-if="item.status == -4">系统关闭</span>
                                                        <span v-if="item.status == -3">用户拒收</span>
                                                        <span v-if="item.status == -2">用户取消</span>
                                                        <span v-if="item.status == -1">未付款</span>
                                                        <!-- <span v-if="item.status == 0 && itemgoods.status == 0 ">待发货</span> -->
                                                        <!-- <span v-if="item.status == 1">已发货</span> -->
                                                        <span v-if="item.status == 2">退款完成</span>
                                                        <span v-if="item.status == 3">已收货</span>
                                                        <span v-if="item.status == 4">正在付款</span>
                                                        <span v-if="item.status == 5">正在取消</span>
                                                        <span v-if="item.status == 6">取消审核</span>
                                                        <span v-if="item.status == 7">已完成</span>
                                                        <span v-if="item.status == 8">发起售后</span>
                                                        <p v-if="item.status == 1 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>
                                                        <!-- 发了一半的货 -->
                                                        <p v-if="item.status == 0 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>

                                                        <span v-if="item.status == 0 && itemgoods.status == 0">待发货</span>
                                                        <!-- <span v-if="itemgoods.status == 0">未发货</span> -->
                                                        <!-- <span v-if="itemgoods.status ==1" >已发货</span>      -->
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mh-newshoporder-num">
                                                <dl>
                                                    <dt>{{item.receiverPhone}}</dt>
                                                    <dd>{{item.receiverName}}</dd>
                                                </dl>
                                            </div>

                                            <div class="newshoporder-tuiprice">
                                                {{item.remark == '' ||item.remark == null || item.remark ==undefined ? '暂无留言' : item.remark }}
                                            </div>
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span style="font-weight: 600;">¥ </span> {{item.moneyDeliver}}
                                            </div> -->
                                        
                                            
                                            <!-- 店铺 -->
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span class="mh_order_info" v-if="item.vshopName">{{item.vshopName}}</span> 
                                                <span class="mh_order_info" v-else></span>
                                            </div> -->

                                            <!-- 操作状态开始 -->
                                            <div class="shoporder-edit" v-if="item.status == 0">   
                                                <span class="mh-order-status">等待商家发货</span>                  
                                                <!-- <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="editwuliuaddressStart(item.no,item.userId,item.receiverName,item.receiverPhone,item.receiverAddress,item.regionId)">修改地址</el-button> -->
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId)">发货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == 1" >
                                                
                                                <span class="mh-order-status">商家已发货</span>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId,2)">修改发货</el-button>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="okgetSgoods(item.no,item.userId,3)">确认收货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == 2">
                                                <span class="mh-order-status">退款完成</span>
                                            </div>

                                            <div class="shoporder-edit" v-if="item.status == -4">
                                                <span style="color:#f56c6c">系统关闭</span>
                                            </div>
        
                                            <div class="shoporder-edit" v-if="item.status == -1">
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="cancelOrder(item.no,item.userId,-2)">取消订单</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="okPay(item.no,item.userId,0)">确认付款</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="updatePrice(item.no,item.userId,item.moneyTotalReal,item.totalCount)">修改价格</el-button>
                                            </div>
        
                                            <!-- 已完成 -->
                                            <div class="shoporder-edit" v-if="item.status == 7">
                                                <span>订单已完成</span>
                                            </div>

                                        </div>
                                 

                                    </div>
                                </div>
                                <!--分页  -->
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="20" layout="total, prev, pager, next, jumper" :total="totalCount">
                                    </el-pagination>
                                </div>
                                <!--全部over-->
                                <!--全部over-->
    
                            </el-tab-pane>
                            <el-tab-pane :label="'待发货(' + pendshippedNum + ')'" name="2">
                                <!--全部-->
                                 <!--全部-->
                                <ul class="mh-order_ul">
                                    <li class="mh-order_ul-one">商品</li>
                                    <li class="mh-order_ul-two">数量/店铺</li>
                                    <li class="mh-order_ul-eight">售后</li>
                                    <li class="mh-order_ul-there">收货人</li>
                                    <!-- <li class="mh-order_ul-four">买家信息</li> -->
                                    <li class="mh-order_ul-five">买家留言</li>
                                    <!-- <li class="mh-order_ul-sex">运费</li> -->
                                     <!-- <li class="mh-order_ul-seven">店铺</li> -->
                                 
                                    <li class="mh-order_ul-night">操作</li>
                                </ul>
                                <div class="shoporder-table-" v-for="(item,index) of list" :key="index">
                                    <div class="shoporder-table--top">
                                        <div class="shoporder-table-mnewtop">
                                            <div class="shoporder-table--top-div">
                                                <el-checkbox v-model="item.checkedflog"   @change="danShaiXuan(item.no,checked)"></el-checkbox>   
                                                <dl>
                                                    <dt>订单号 :&nbsp; </dt>
                                                    <dd>{{item.no}}</dd>
                                                </dl>
    
                                                <dl v-if="item.payTime != null">
                                                    <dt>支付时间 :&nbsp; </dt>
                                                    <dd>{{item.payTime.time| formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.createTime != null">
                                                    <dt>创建时间 :&nbsp; </dt>
                                                    <dd>{{item.createTime == null ? '正在进行中' : item.createTime.time | formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.finishTime != null">
                                                    <dt>完成时间 :&nbsp; </dt>
                                                    <dd>{{item.finishTime == null ? '正在进行中' : item.finishTime.time | formatDate}}</dd>
                                                </dl>
    
                                                <i v-if="item.source == 3" class="iconfont icon-xiaochengxu" style="color:rgb(121,217,59);margin-left:15px"></i>
    
                                            </div>
    
                                            <dl class="lastdl">
                                                <!-- <dt class="lastdl-dt-detail" @click="seeDetail(item.userId,item.no,item.user.nickName)">查看详情</dt> -->
                                                <dd class="lastdl-dt-detail" @click="beizhuorder(item.no,item.userId)">备注</dd>
                                            </dl>
                                        </div>
                                        <div class="playmnewliu" v-if=" item.tradeNo != undefined && item.tradeNo != null && item.tradeNo!= '' ? item.tradeNo : '' "> 支付流水号 : {{item.tradeNo}} </div>
                                    </div>
    
                                    <div class="shoporder-table--bottom" >
                                        <div class="newshoporder-tableall">

                                            <div class="newshoporder-tabone-f">

                                               

                                                <div class="newshoporder-tabone-goods"   v-for="(itemgoods, indexgoods) of item.detailList" :key="indexgoods">
                                                    <div class="newshoporder-tabone-goodsdiv">
                                                        <img v-if="itemgoods.imageUrl" :src="itemgoods.imageUrl" alt="" width="40" height="40" :title="itemgoods.item.name" class="shoporder-tab-img">
                                                        <dl class="newshoporder-tabone-goodsdiv_dl" v-if="JSON.stringify(itemgoods.item) != '{}'">
                                                            <dt style="display: flex;"><span class="mh-order-goodslisty">商品名称 : </span><span class="mh-order-goodslisty2">{{itemgoods.item.name}}</span></dt>
                                                            <dd><span class="mh-order-goodslisty">商品ID : </span><span class="mh-order-goodslisty2">{{itemgoods.skuId}}</span></dd>
                                                            <!-- <dd v-if="itemgoods.sku.pvlist.length != 0 "><span class="mh-order-goodslisty">规格 : </span>
                                                                <span class="mh-order-goodslisty2">{{itemgoods.sku.pvlist[0].value}}</span></dd> -->
                                                        </dl>
                                                    </div>

                                                    <div class="newshoporder-tabone-goodsdivtwo">
                                                        <!-- <span v-if="JSON.stringify(itemgoods.item) != '{}'"> ¥ {{parseFloat(itemgoods.item.price/100)}}</span> -->
                                                        <span>{{ itemgoods.quantity}}/ {{ itemgoods.shop.name}}</span>
                                                    </div>

                                                    <div class="newshoporder-tab_shopOne-t">
                                                        <span v-if="item.status == -4">系统关闭</span>
                                                        <span v-if="item.status == -3">用户拒收</span>
                                                        <span v-if="item.status == -2">用户取消</span>
                                                        <span v-if="item.status == -1">未付款</span>
                                                        <!-- <span v-if="item.status == 0 && itemgoods.status == 0 ">待发货</span> -->
                                                        <!-- <span v-if="item.status == 1">已发货</span> -->
                                                        <span v-if="item.status == 2">退款完成</span>
                                                        <span v-if="item.status == 3">已收货</span>
                                                        <span v-if="item.status == 4">正在付款</span>
                                                        <span v-if="item.status == 5">正在取消</span>
                                                        <span v-if="item.status == 6">取消审核</span>
                                                        <span v-if="item.status == 7">已完成</span>
                                                        <span v-if="item.status == 8">发起售后</span>
                                                        <p v-if="item.status == 1 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>
                                                        <!-- 发了一半的货 -->
                                                        <p v-if="item.status == 0 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                        </p>

                                                        <span v-if="item.status == 0 && itemgoods.status == 0">待发货</span>
                                                        <!-- <span v-if="itemgoods.status == 0">未发货</span> -->
                                                        <!-- <span v-if="itemgoods.status ==1" >已发货</span>      -->
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mh-newshoporder-num">
                                                <dl>
                                                    <dt>{{item.receiverPhone}}</dt>
                                                    <dd>{{item.receiverName}}</dd>
                                                </dl>
                                            </div>

                                            <!-- 买家留言 -->
                                             <div class="newshoporder-tuiprice">
                                                {{item.remark == '' ||item.remark == null || item.remark ==undefined ? '暂无留言' : item.remark }}
                                            </div>
                                    
                                            <!-- 店铺 -->
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span class="mh_order_info" v-if="item.vshopName">{{item.vshopName}}</span> 
                                                <span class="mh_order_info" v-else></span>
                                            </div> -->

                                            <!-- 操作状态开始 -->
                                            <div class="shoporder-edit" v-if="item.status == 0">   
                                                <span class="mh-order-status" v-if="item.type != 10">等待商家发货</span>   
                                                <span class="mh-order-status" v-if="item.type == 10">抢购成功,等待商家发货</span>                  
                                                <!-- <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="editwuliuaddressStart(item.no,item.userId,item.receiverName,item.receiverPhone,item.receiverAddress,item.regionId)">修改地址</el-button> -->
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId)">发货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == 1" >
                                                
                                                <span class="mh-order-status">商家已发货</span>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId,2)">修改发货</el-button>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="okgetSgoods(item.no,item.userId,3)">确认收货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == 2">
                                                <span class="mh-order-status">退款完成</span>
                                            </div>

                                            <div class="shoporder-edit" v-if="item.status == -4">
                                                <span style="color:#f56c6c">系统关闭</span>
                                            </div>

                                            <div class="shoporder-edit" v-if="item.status == -1">
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="cancelOrder(item.no,item.userId,-2)">取消订单</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="okPay(item.no,item.userId,0)">确认付款</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="updatePrice(item.no,item.userId,item.moneyTotalReal,item.totalCount)">修改价格</el-button>
                                            </div>
    
        
                                            <!-- 已完成 -->
                                            <div class="shoporder-edit" v-if="item.status == 7">
                                                <span>订单已完成</span>
                                                <!-- <el-button v-if="indexgoods == 0" type="danger" size="mini" disabled>删除</el-button> -->
                                                <!-- <el-button type="primary" size="mini">评价</el-button> -->
                                            </div>
                                
                                            <!-- 操作状态结束 -->

                                        </div>
                                 

                                    </div>
                                </div>
                                <!--分页  -->
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="20" layout="total, prev, pager, next, jumper" :total="totalCount">
                                    </el-pagination>
                                </div>
                                <!--全部over-->
                               
                                <!--全部over-->
                            </el-tab-pane>  

                               <el-tab-pane :label="'已发货(' + yifahuostatus + ')'" name="3">
                                <!--全部-->
                                 <!--全部-->
                                <ul class="mh-order_ul">
                                    <li class="mh-order_ul-one">商品</li>
                                    <li class="mh-order_ul-two">数量/店铺</li>
                                    <li class="mh-order_ul-eight">售后</li>
                                    <li class="mh-order_ul-there">收货人</li>
                                    <!-- <li class="mh-order_ul-four">买家信息</li> -->
                                    <li class="mh-order_ul-five">买家留言</li>
                                    <!-- <li class="mh-order_ul-sex">运费</li> -->
                                     <!-- <li class="mh-order_ul-seven">店铺</li> -->
                                 
                                    <li class="mh-order_ul-night">操作</li>
                                </ul>
                                <div class="shoporder-table-" v-for="(item,index) of list" :key="index">
                                    <div class="shoporder-table--top">
                                        <div class="shoporder-table-mnewtop">
                                            <div class="shoporder-table--top-div">
                                                <el-checkbox v-model="item.checkedflog"   @change="danShaiXuan(item.no,checked)"></el-checkbox>        
                                                <dl>
                                                    <dt>订单号 :&nbsp; </dt>
                                                    <dd>{{item.no}}</dd>
                                                </dl>
    
                                                <dl v-if="item.payTime != null">
                                                    <dt>支付时间 :&nbsp; </dt>
                                                    <dd>{{item.payTime.time| formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.createTime != null">
                                                    <dt>创建时间 :&nbsp; </dt>
                                                    <dd>{{item.createTime == null ? '正在进行中' : item.createTime.time | formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.finishTime != null">
                                                    <dt>完成时间 :&nbsp; </dt>
                                                    <dd>{{item.finishTime == null ? '正在进行中' : item.finishTime.time | formatDate}}</dd>
                                                </dl>
    
                                                <i v-if="item.source == 3" class="iconfont icon-xiaochengxu" style="color:rgb(121,217,59);margin-left:15px"></i>
                                            </div>
    
                                            <dl class="lastdl">
                                                <!-- <dt class="lastdl-dt-detail" @click="seeDetail(item.userId,item.no,item.user.nickName)">查看详情</dt> -->
                                                <dd class="lastdl-dt-detail" @click="beizhuorder(item.no,item.userId)">备注</dd>
                                            </dl>
                                        </div>
                                        <div class="playmnewliu" v-if=" item.tradeNo != undefined && item.tradeNo != null && item.tradeNo!= '' ? item.tradeNo : '' "> 支付流水号 : {{item.tradeNo}} </div>
                                    </div>
    
                                    <div class="shoporder-table--bottom" >
                                        <div class="newshoporder-tableall">

                                            <div class="newshoporder-tabone-f">  
                                                <div class="newshoporder-tabone-goods"   v-for="(itemgoods,indexgoods) of item.detailList" :key="indexgoods">
                                                    <div class="newshoporder-tabone-goodsdiv">
                                                        <img v-if="itemgoods.imageUrl"  :src="itemgoods.imageUrl" alt="" width="40" height="40" :title="itemgoods.item.name" class="shoporder-tab-img">
                                                        <dl class="newshoporder-tabone-goodsdiv_dl" v-if="JSON.stringify(itemgoods.item) != '{}'">
                                                            <dt style="display: flex;"><span class="mh-order-goodslisty">商品名称: </span><span class="mh-order-goodslisty2">{{itemgoods.item.name}}</span></dt>
                                                            <dd><span class="mh-order-goodslisty">商品ID: </span><span class="mh-order-goodslisty2">{{itemgoods.skuId}}</span></dd>
                                                            <!-- <dd v-if="itemgoods.sku.pvlist.length != 0 "><span class="mh-order-goodslisty">规格: </span>
                                                                <span class="mh-order-goodslisty2">{{itemgoods.sku.pvlist[0].value}}</span></dd> -->
                                                            
                                                        </dl>
                                                    </div>

                                    

                                                    <div class="newshoporder-tabone-goodsdivtwo">
                                                        <!-- <span v-if="JSON.stringify(itemgoods.item) != '{}'"> ¥ {{parseFloat(itemgoods.item.price/100)}}</span> -->
                                                        <span>{{ itemgoods.quantity}}/ {{ itemgoods.shop.name}}</span>
                                                    </div>

                                                    <div class="newshoporder-tab_shopOne-t">
                                                  
                                                        <span v-if="item.status == -4">系统关闭</span>
                                                        <span v-if="item.status == -3">用户拒收</span>
                                                        <span v-if="item.status == -2">用户取消</span>
                                                        <span v-if="item.status == -1">未付款</span>
                                                        <!-- <span v-if="item.status == 0 && itemgoods.status == 0 ">待发货</span> -->
                                                        <!-- <span v-if="item.status == 1">已发货</span> -->
                                                        <span v-if="item.status == 2">退款完成</span>
                                                        <span v-if="item.status == 3">已收货</span>
                                                        <span v-if="item.status == 4">正在付款</span>
                                                        <span v-if="item.status == 5">正在取消</span>
                                                        <span v-if="item.status == 6">取消审核</span>
                                                        <span v-if="item.status == 7">已完成</span>
                                                        <span v-if="item.status == 8">发起售后</span>
                                                        <p v-if="item.status == 1 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>
                                                        <!-- 发了一半的货 -->
                                                        <p v-if="item.status == 0 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>

                                                        <span v-if="item.status == 0 && itemgoods.status == 0">待发货</span>
                                                        <!-- <span v-if="itemgoods.status == 0">未发货</span> -->
                                                        <!-- <span v-if="itemgoods.status ==1" >已发货</span>      -->
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mh-newshoporder-num">
                                                <dl>
                                                    <dt>{{item.receiverPhone}}</dt>
                                                    <dd>{{item.receiverName}}</dd>
                                                </dl>
                                            </div>
                                            

                                             <div class="newshoporder-tuiprice">
                                                {{item.remark == '' ||item.remark == null || item.remark ==undefined ? '暂无留言' : item.remark }}
                                            </div>
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span style="font-weight: 600;">¥ </span> {{item.moneyDeliver}}
                                            </div> -->
                                          
                                            <!-- 店铺 -->
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span class="mh_order_info" v-if="item.vshopName">{{item.vshopName}}</span> 
                                                <span class="mh_order_info" v-else></span>
                                            </div> -->

                                            <!-- 操作状态开始 -->
                                            <div class="shoporder-edit" v-if="item.status == 0">   
                                                <span class="mh-order-status" v-if="item.type != 10">等待商家发货</span>  
                                                <!-- <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="editwuliuaddressStart(item.no,item.userId,item.receiverName,item.receiverPhone,item.receiverAddress,item.regionId)">修改地址</el-button> -->
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId)">发货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == 1" >
                                                
                                                <span class="mh-order-status">商家已发货</span>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId,2)">修改发货</el-button>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="okgetSgoods(item.no,item.userId,3)">确认收货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == -4">
                                                <span style="color:#f56c6c">系统关闭</span>
                                            </div>
        
                                            <div class="shoporder-edit" v-if="item.status == -1">
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="cancelOrder(item.no,item.userId,-2)">取消订单</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="okPay(item.no,item.userId,0)">确认付款</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="updatePrice(item.no,item.userId,item.moneyTotalReal,item.totalCount)">修改价格</el-button>
                                            </div>
        
                                            <!-- 已完成 -->
                                            <div class="shoporder-edit" v-if="item.status == 7">
                                                <span>订单已完成</span>
                                                <!-- <el-button v-if="indexgoods == 0" type="danger" size="mini" disabled>删除</el-button> -->
                                            </div>
                                        </div>
                                 

                                    </div>
                                </div>
                                <!--分页  -->
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="20" layout="total, prev, pager, next, jumper" :total="totalCount">
                                    </el-pagination>
                                </div>
                                <!--全部over-->
                                <!--全部over-->
    
                            </el-tab-pane>

                            <el-tab-pane :label="'已收货(' + overfahuo + ')'" name="11">
                                <!--全部-->
                                 <!--全部-->
                                <ul class="mh-order_ul">
                                    <li class="mh-order_ul-one">商品</li>
                                    <li class="mh-order_ul-two">数量/店铺</li>
                                    <li class="mh-order_ul-eight">售后</li>
                                    <li class="mh-order_ul-there">收货人</li>
                                    <!-- <li class="mh-order_ul-four">买家信息</li> -->
                                    <li class="mh-order_ul-five">买家留言</li>
                                    <!-- <li class="mh-order_ul-sex">运费</li> -->
                                     <!-- <li class="mh-order_ul-seven">店铺</li> -->
                                 
                                    <li class="mh-order_ul-night">操作</li>
                                </ul>
                                <div class="shoporder-table-" v-for="(item,index) of list" :key="index">
                                    <div class="shoporder-table--top">
                                        <div class="shoporder-table-mnewtop">
                                            <div class="shoporder-table--top-div">
                                                 <el-checkbox v-model="item.checkedflog"   @change="danShaiXuan(item.no,checked)"></el-checkbox>       
                                                <dl>
                                                    <dt>订单号 :&nbsp; </dt>
                                                    <dd>{{item.no}}</dd>
                                                </dl>
    
                                                <dl v-if="item.payTime != null">
                                                    <dt>支付时间 :&nbsp; </dt>
                                                    <dd>{{item.payTime.time| formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.createTime != null">
                                                    <dt>创建时间 :&nbsp; </dt>
                                                    <dd>{{item.createTime == null ? '正在进行中' : item.createTime.time | formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.finishTime != null">
                                                    <dt>完成时间 :&nbsp; </dt>
                                                    <dd>{{item.finishTime == null ? '正在进行中' : item.finishTime.time | formatDate}}</dd>
                                                </dl>
    
                                                <i v-if="item.source == 3" class="iconfont icon-xiaochengxu" style="color:rgb(121,217,59);margin-left:15px"></i>
    
                                            </div>
    
                                            <dl class="lastdl">
                                                <!-- <dt class="lastdl-dt-detail" @click="seeDetail(item.userId,item.no,item.user.nickName)">查看详情</dt> -->
                                                <dd class="lastdl-dt-detail" @click="beizhuorder(item.no,item.userId)">备注</dd>
                                            </dl>
                                        </div>
                                        <div class="playmnewliu" v-if=" item.tradeNo != undefined && item.tradeNo != null && item.tradeNo!= '' ? item.tradeNo : '' "> 支付流水号 : {{item.tradeNo}} </div>
                                    </div>
    
                                    <div class="shoporder-table--bottom" >
                                        <div class="newshoporder-tableall">

                                            <div class="newshoporder-tabone-f">
                                                <div class="newshoporder-tabone-goods"   v-for="(itemgoods,indexgoods) of item.detailList" :key="indexgoods">
                                                    <div class="newshoporder-tabone-goodsdiv">
                                                        <img v-if="itemgoods.imageUrl" :src="itemgoods.imageUrl" alt="" width="40" height="40" :title="itemgoods.item.name" class="shoporder-tab-img">
                                                        <dl class="newshoporder-tabone-goodsdiv_dl" v-if="JSON.stringify(itemgoods.item) != '{}'">
                                                            <dt style="display: flex;"><span class="mh-order-goodslisty">商品名称 : </span><span class="mh-order-goodslisty2">{{itemgoods.item.name}}</span></dt>
                                                            <dd><span class="mh-order-goodslisty">商品ID : </span><span class="mh-order-goodslisty2">{{itemgoods.skuId}}</span></dd>
                                                            <!-- <dd v-if="itemgoods.sku.pvlist.length != 0 "><span class="mh-order-goodslisty">规格 : </span>
                                                                <span class="mh-order-goodslisty2">{{itemgoods.sku.pvlist[0].value}}</span></dd> -->
                                                        </dl>
                                                    </div>
                                    

                                                    <div class="newshoporder-tabone-goodsdivtwo">
                                                        <!-- <span v-if="JSON.stringify(itemgoods.item) != '{}'"> ¥ {{parseFloat(itemgoods.item.price/100)}}</span> -->
                                                        <span>{{ itemgoods.quantity}}/ {{ itemgoods.shop.name}}</span>
                                                    </div>

                                                    <div class="newshoporder-tab_shopOne-t">
                                                  
                                                        <span v-if="item.status == -4">系统关闭</span>
                                                        <span v-if="item.status == -3">用户拒收</span>
                                                        <span v-if="item.status == -2">用户取消</span>
                                                        <span v-if="item.status == -1">未付款</span>
                                                        <!-- <span v-if="item.status == 0 && itemgoods.status == 0 ">待发货</span> -->
                                                        <!-- <span v-if="item.status == 1">已发货</span> -->
                                                        <span v-if="item.status == 2">退款完成</span>
                                                        <span v-if="item.status == 3">已收货</span>
                                                        <span v-if="item.status == 4">正在付款</span>
                                                        <span v-if="item.status == 5">正在取消</span>
                                                        <span v-if="item.status == 6">取消审核</span>
                                                        <span v-if="item.status == 7">已完成</span>
                                                        <span v-if="item.status == 8">发起售后</span>
                                                        <p v-if="item.status == 1 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>
                                                        <!-- 发了一半的货 -->
                                                        <p v-if="item.status == 0 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                        </p>

                                                        <span v-if="item.status == 0 && itemgoods.status == 0">待发货</span>
                                                        <!-- <span v-if="itemgoods.status == 0">未发货</span> -->
                                                        <!-- <span v-if="itemgoods.status ==1" >已发货</span>      -->
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mh-newshoporder-num">
                                                <dl>
                                                    <dt>{{item.receiverPhone}}</dt>
                                                    <dd>{{item.receiverName}}</dd>
                                                </dl>
                                            </div>


                                            <div class="newshoporder-tuiprice">
                                                {{item.remark == '' ||item.remark == null || item.remark ==undefined ? '暂无留言' : item.remark }}
                                            </div>
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span style="font-weight: 600;">¥ </span> {{item.moneyDeliver}}
                                            </div> -->
                                            
                                           
                                            <!-- 店铺 -->
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span class="mh_order_info" v-if="item.vshopName">{{item.vshopName}}</span> 
                                                <span class="mh_order_info" v-else></span>
                                            </div> -->

                                            <!-- 操作状态开始 -->
                                            <div class="shoporder-edit" v-if="item.status == 0">   
                                                <span class="mh-order-status">等待商家发货</span>                  
                                                <!-- <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="editwuliuaddressStart(item.no,item.userId,item.receiverName,item.receiverPhone,item.receiverAddress,item.regionId)">修改地址</el-button> -->
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId)">发货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == 1" >
                                                
                                                <span class="mh-order-status">商家已发货</span>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId,2)">修改发货</el-button>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="okgetSgoods(item.no,item.userId,3)">确认收货</el-button>
                                            </div>

                                            <div class="shoporder-edit" v-if="item.status == -4">
                                                <span style="color:#f56c6c">系统关闭</span>
                                            </div>
        
                                            <div class="shoporder-edit" v-if="item.status == -1">
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="cancelOrder(item.no,item.userId,-2)">取消订单</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="okPay(item.no,item.userId,0)">确认付款</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="updatePrice(item.no,item.userId,item.moneyTotalReal,item.totalCount)">修改价格</el-button>
                                            </div>
        
                                            <!-- 已完成 -->
                                            <div class="shoporder-edit" v-if="item.status == 7">
                                                <span>订单已完成</span>
                                                <!-- <el-button v-if="indexgoods == 0" type="danger" size="mini" disabled>删除</el-button> -->
                                            </div>
                                        </div>
                                 

                                    </div>
                                </div>
                                <!--分页  -->
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="20" layout="total, prev, pager, next, jumper" :total="totalCount">
                                    </el-pagination>
                                </div>
                                <!--全部over-->
                                <!--全部over-->
    
                            </el-tab-pane>
          
                            <el-tab-pane :label="'已完成(' + pendcomplete + ')'" name="7">
                                <!--全部-->
                                 <!--全部-->
                                <ul class="mh-order_ul">
                                    <li class="mh-order_ul-one">商品</li>
                                    <li class="mh-order_ul-two">数量/店铺</li>
                                    <li class="mh-order_ul-eight">售后</li>
                                    <li class="mh-order_ul-there">收货人</li>
                                    <!-- <li class="mh-order_ul-four">买家信息</li> -->
                                    <li class="mh-order_ul-five">买家留言</li>
                                    <!-- <li class="mh-order_ul-sex">运费</li> -->
                                     <!-- <li class="mh-order_ul-seven">店铺</li> -->
                                 
                                    <li class="mh-order_ul-night">操作</li>
                                </ul>
                                <div class="shoporder-table-" v-for="(item,index) of list" :key="index">
                                    <div class="shoporder-table--top">
                                        <div class="shoporder-table-mnewtop">
                                            <div class="shoporder-table--top-div">
                                                 <el-checkbox v-model="item.checkedflog"  @change="danShaiXuan(item.no,checked)"></el-checkbox>       
                                                <dl>
                                                    <dt>订单号 :&nbsp; </dt>
                                                    <dd>{{item.no}}</dd>
                                                </dl>
    
                                                <dl v-if="item.payTime != null">
                                                    <dt>支付时间 :&nbsp; </dt>
                                                    <dd>{{item.payTime.time| formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.createTime != null">
                                                    <dt>创建时间 :&nbsp; </dt>
                                                    <dd>{{item.createTime == null ? '正在进行中' : item.createTime.time | formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.finishTime != null">
                                                    <dt>完成时间 :&nbsp; </dt>
                                                    <dd>{{item.finishTime == null ? '正在进行中' : item.finishTime.time | formatDate}}</dd>
                                                </dl>
    
                                                <i v-if="item.source == 3" class="iconfont icon-xiaochengxu" style="color:rgb(121,217,59);margin-left:15px"></i>
                                            </div>
    
                                            <dl class="lastdl">
                                                <!-- <dt class="lastdl-dt-detail" @click="seeDetail(item.userId,item.no,item.user.nickName)">查看详情</dt> -->
                                                <dd class="lastdl-dt-detail" @click="beizhuorder(item.no,item.userId)">备注</dd>
                                            </dl>
                                        </div>
                                        <div class="playmnewliu" v-if=" item.tradeNo != undefined && item.tradeNo != null && item.tradeNo!= '' ? item.tradeNo : '' "> 支付流水号 : {{item.tradeNo}} </div>
                                    </div>
    
                                    <div class="shoporder-table--bottom" >
                                        <div class="newshoporder-tableall">

                                            <div class="newshoporder-tabone-f">
                                                <div class="newshoporder-tabone-goods"   v-for="(itemgoods,indexgoods) of item.detailList" :key="indexgoods">
                                                    <div class="newshoporder-tabone-goodsdiv">
                                                        <img v-if="itemgoods.imageUrl" :src="itemgoods.imageUrl" alt="" width="40" height="40" :title="itemgoods.item.name" class="shoporder-tab-img">
                                                        <dl class="newshoporder-tabone-goodsdiv_dl" v-if="JSON.stringify(itemgoods.item) != '{}'">
                                                            <dt style="display: flex;"><span class="mh-order-goodslisty">商品名称 : </span><span class="mh-order-goodslisty2">{{itemgoods.item.name}}</span></dt>
                                                            <dd><span class="mh-order-goodslisty">商品ID : </span><span class="mh-order-goodslisty2">{{itemgoods.skuId}}</span></dd>
                                                            <!-- <dd v-if="itemgoods.sku.pvlist.length != 0 "><span class="mh-order-goodslisty">规格 : </span>
                                                                <span class="mh-order-goodslisty2">{{itemgoods.sku.pvlist[0].value}}</span></dd> -->
                                                        </dl>
                                                    </div>

                                    

                                                    <div class="newshoporder-tabone-goodsdivtwo">
                                                        <!-- <span v-if="JSON.stringify(itemgoods.item) != '{}'"> ¥ {{parseFloat(itemgoods.item.price/100)}}</span> -->
                                                        <span>{{ itemgoods.quantity}}/ {{ itemgoods.shop.name}}</span>
                                                    </div>

                                                    <div class="newshoporder-tab_shopOne-t">
                                                  
                                                        <span v-if="item.status == -4">系统关闭</span>
                                                        <span v-if="item.status == -3">用户拒收</span>
                                                        <span v-if="item.status == -2">用户取消</span>
                                                        <span v-if="item.status == -1">未付款</span>
                                                        <!-- <span v-if="item.status == 0 && itemgoods.status == 0 ">待发货</span> -->
                                                        <!-- <span v-if="item.status == 1">已发货</span> -->
                                                        <span v-if="item.status == 2">退款完成</span>
                                                        <span v-if="item.status == 3">已收货</span>
                                                        <span v-if="item.status == 4">正在付款</span>
                                                        <span v-if="item.status == 5">正在取消</span>
                                                        <span v-if="item.status == 6">取消审核</span>
                                                        <span v-if="item.status == 7">已完成</span>
                                                        <span v-if="item.status == 8">发起售后</span>

                                                        <p v-if="item.status == 1 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>
                                                        <!-- 发了一半的货 -->
                                                        <p v-if="item.status == 0 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>

                                                        <span v-if="item.status == 0 && itemgoods.status == 0">待发货</span>
                                                        <!-- <span v-if="itemgoods.status == 0">未发货</span> -->
                                                        <!-- <span v-if="itemgoods.status ==1" >已发货</span>      -->
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mh-newshoporder-num">
                                                <dl>
                                                    <dt>{{item.receiverPhone}}</dt>
                                                    <dd>{{item.receiverName}}</dd>
                                                </dl>
                                            </div>
                                             

                                             <div class="newshoporder-tuiprice">
                                                {{item.remark == '' ||item.remark == null || item.remark ==undefined ? '暂无留言' : item.remark }}
                                            </div>
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span style="font-weight: 600;">¥ </span> {{item.moneyDeliver}}
                                            </div> --> 
                                            
                                            
                                            <!-- 店铺 -->
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span class="mh_order_info" v-if="item.vshopName">{{item.vshopName}}</span> 
                                                <span class="mh_order_info" v-else></span>
                                            </div> -->

                                            <!-- 操作状态开始 -->
                                            <div class="shoporder-edit" v-if="item.status == 0">   
                                                <span class="mh-order-status">等待商家发货</span>                  
                                                <!-- <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="editwuliuaddressStart(item.no,item.userId,item.receiverName,item.receiverPhone,item.receiverAddress,item.regionId)">修改地址</el-button> -->
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId)">发货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == 1" >
                                                <span class="mh-order-status">商家已发货</span>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId,2)">修改发货</el-button>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="okgetSgoods(item.no,item.userId,3)">确认收货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == -4">
                                                <span style="color:#f56c6c">系统关闭</span>
                                            </div>
        
                                            <div class="shoporder-edit" v-if="item.status == -1">
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="cancelOrder(item.no,item.userId,-2)">取消订单</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="okPay(item.no,item.userId,0)">确认付款</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="updatePrice(item.no,item.userId,item.moneyTotalReal,item.totalCount)">修改价格</el-button>
                                            </div>
                                            <!-- 已完成 -->
                                            <div class="shoporder-edit" v-if="item.status == 7">
                                                <span>订单已完成</span>
                                                <!-- <el-button v-if="indexgoods == 0" type="danger" size="mini" disabled>删除</el-button> -->
                                            </div>
                                        </div>
                                 

                                    </div>
                                </div>
                                <!--分页  -->
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="20" layout="total, prev, pager, next, jumper" :total="totalCount">
                                    </el-pagination>
                                </div>
                                <!--全部over-->
                            </el-tab-pane>
                            <el-tab-pane :label="'已关闭(' + pendClose + ')'" name="-4">
                                <!--全部-->
                                <ul class="mh-order_ul">
                                    <li class="mh-order_ul-one">商品</li>
                                    <li class="mh-order_ul-two">数量/店铺</li>
                                    <li class="mh-order_ul-eight">售后</li>
                                    <li class="mh-order_ul-there">收货人</li>
                                    <li class="mh-order_ul-five">买家留言</li>
                                    <!-- <li class="mh-order_ul-sex">运费</li> -->
                                     <!-- <li class="mh-order_ul-seven">店铺</li> -->
                                 
                                    <li class="mh-order_ul-night">操作</li>
                                </ul>
                                <div class="shoporder-table-" v-for="(item,index) of list" :key="index">
                                    <div class="shoporder-table--top">
                                        <div class="shoporder-table-mnewtop">
                                            <div class="shoporder-table--top-div">
                                                 <el-checkbox v-model="item.checkedflog"  @change="danShaiXuan(item.no,checked)"></el-checkbox>        
                                                <dl>
                                                    <dt>订单号 :&nbsp; </dt>
                                                    <dd>{{item.no}}</dd>
                                                </dl>
    
                                                <dl v-if="item.payTime != null">
                                                    <dt>支付时间 :&nbsp; </dt>
                                                    <dd>{{item.payTime.time| formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.createTime != null">
                                                    <dt>创建时间 :&nbsp; </dt>
                                                    <dd>{{item.createTime == null ? '正在进行中' : item.createTime.time | formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.finishTime != null">
                                                    <dt>完成时间 :&nbsp; </dt>
                                                    <dd>{{item.finishTime == null ? '正在进行中' : item.finishTime.time | formatDate}}</dd>
                                                </dl>
    
                                                <i v-if="item.source == 3" class="iconfont icon-xiaochengxu" style="color:rgb(121,217,59);margin-left:15px"></i>
    
                                            </div>
    
                                            <dl class="lastdl">
                                                <!-- <dt class="lastdl-dt-detail" @click="seeDetail(item.userId,item.no,item.user.nickName)">查看详情</dt> -->
                                                <dd class="lastdl-dt-detail" @click="beizhuorder(item.no,item.userId)">备注</dd>
                                            </dl>
                                        </div>
                                        <div class="playmnewliu" v-if=" item.tradeNo != undefined && item.tradeNo != null && item.tradeNo!= '' ? item.tradeNo : '' "> 支付流水号 : {{item.tradeNo}} </div>
                                    </div>
    
                                    <div class="shoporder-table--bottom" >
                                        <div class="newshoporder-tableall">

                                            <div class="newshoporder-tabone-f">
                                                <div class="newshoporder-tabone-goods"   v-for="(itemgoods,indexgoods) of item.detailList" :key="indexgoods">
                                                    <div class="newshoporder-tabone-goodsdiv">
                                                        <img v-if="itemgoods.imageUrl" :src="itemgoods.imageUrl" alt="" width="40" height="40" :title="itemgoods.item.name" class="shoporder-tab-img">
                                                        <dl class="newshoporder-tabone-goodsdiv_dl" v-if="JSON.stringify(itemgoods.item) != '{}'">
                                                            <dt style="display: flex;"><span class="mh-order-goodslisty">商品名称 : </span><span class="mh-order-goodslisty2">{{itemgoods.item.name}}</span></dt>
                                                            <dd><span class="mh-order-goodslisty">商品ID : </span><span class="mh-order-goodslisty2">{{itemgoods.skuId}}</span></dd>
                                                            <!-- <dd v-if="itemgoods.sku.pvlist.length != 0 "><span class="mh-order-goodslisty">规格 : </span>
                                                                <span class="mh-order-goodslisty2">{{itemgoods.sku.pvlist[0].value}}</span></dd> -->
                                                        </dl>
                                                    </div>

                                    

                                                    <div class="newshoporder-tabone-goodsdivtwo">
                                                        <!-- <span v-if="JSON.stringify(itemgoods.item) != '{}'"> ¥ {{parseFloat(itemgoods.item.price/100)}}</span> -->
                                                        <span>{{ itemgoods.quantity}}/ {{ itemgoods.shop.name}}</span>
                                                    </div>

                                                    <div class="newshoporder-tab_shopOne-t">
                                                  
                                                        <span v-if="item.status == -4">系统关闭</span>
                                                        <span v-if="item.status == -3">用户拒收</span>
                                                        <span v-if="item.status == -2">用户取消</span>
                                                        <span v-if="item.status == -1">未付款</span>
                                                        <!-- <span v-if="item.status == 0 && itemgoods.status == 0 ">待发货</span> -->
                                                        <!-- <span v-if="item.status == 1">已发货</span> -->
                                                        <span v-if="item.status == 2">退款完成</span>
                                                        <span v-if="item.status == 3">已收货</span>
                                                        <span v-if="item.status == 4">正在付款</span>
                                                        <span v-if="item.status == 5">正在取消</span>
                                                        <span v-if="item.status == 6">取消审核</span>
                                                        <span v-if="item.status == 7">已完成</span>
                                                        <span v-if="item.status == 8">发起售后</span>
                                                        <p v-if="item.status == 1 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>
                                                        <!-- 发了一半的货 -->
                                                        <p v-if="item.status == 0 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>

                                                        <span v-if="item.status == 0 && itemgoods.status == 0">待发货</span>
                                                        <!-- <span v-if="itemgoods.status == 0">未发货</span> -->
                                                        <!-- <span v-if="itemgoods.status ==1" >已发货</span>      -->
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mh-newshoporder-num">
                                                <dl>
                                                    <dt>{{item.receiverPhone}}</dt>
                                                    <dd>{{item.receiverName}}</dd>
                                                </dl>
                                            </div>

                                             <div class="newshoporder-tuiprice">
                                                {{item.remark == '' ||item.remark == null || item.remark ==undefined ? '暂无留言' : item.remark }}
                                            </div>
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span style="font-weight: 600;">¥ </span> {{item.moneyDeliver}}
                                            </div> -->
                                            
                                            
                                            <!-- 店铺 -->
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span class="mh_order_info" v-if="item.vshopName">{{item.vshopName}}</span> 
                                                <span class="mh_order_info" v-else></span>
                                            </div> -->

                                            <!-- 操作状态开始 -->
                                            <div class="shoporder-edit" v-if="item.status == 0">   
                                                <span class="mh-order-status">等待商家发货</span>                  
                                                <!-- <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="editwuliuaddressStart(item.no,item.userId,item.receiverName,item.receiverPhone,item.receiverAddress,item.regionId)">修改地址</el-button> -->
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId)">发货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == 1" >
                                                
                                                <span class="mh-order-status">商家已发货</span>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId,2)">修改发货</el-button>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn" @click="okgetSgoods(item.no,item.userId,3)">确认收货</el-button>
                                            </div>

                                            <div class="shoporder-edit" v-if="item.status == -4">
                                                <span style="color:#f56c6c">系统关闭</span>
                                            </div>
        
                                            <div class="shoporder-edit" v-if="item.status == -1">
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="cancelOrder(item.no,item.userId,-2)">取消订单</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="okPay(item.no,item.userId,0)">确认付款</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn" @click="updatePrice(item.no,item.userId,item.moneyTotalReal,item.totalCount)">修改价格</el-button>
                                            </div>
        
                                            <!-- 已完成 -->
                                            <div class="shoporder-edit" v-if="item.status == 7">
                                                <span>订单已完成</span>
                                                <!-- <el-button v-if="indexgoods == 0" type="danger" size="mini" disabled>删除</el-button> -->
                                            </div>
                                        </div>
                                 

                                    </div>
                                </div>
                                <!--分页  -->
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="20" layout="total, prev, pager, next, jumper" :total="totalCount">
                                    </el-pagination>
                                </div>
                                <!--全部over-->
                                <!--全部over-->
                            </el-tab-pane>
                            <el-tab-pane :label="'维权中(' + pendprotection + ')'" name="8">
                                <!--全部-->
                                  <!--全部-->
                                <ul class="mh-order_ul">
                                    <li class="mh-order_ul-one">商品</li>
                                    <li class="mh-order_ul-two">数量/店铺</li>
                                    <li class="mh-order_ul-eight">售后</li>
                                    <li class="mh-order_ul-there">收货人</li>
                                    <!-- <li class="mh-order_ul-four">买家信息</li> -->
                                    <li class="mh-order_ul-five">买家留言</li>
                                    <!-- <li class="mh-order_ul-sex">运费</li> -->
                                     <!-- <li class="mh-order_ul-seven">店铺</li> -->
                                 
                                    <li class="mh-order_ul-night">操作</li>
                                </ul>
                                <div class="shoporder-table-" v-for="(item,index) of list" :key="index">
                                    <div class="shoporder-table--top">
                                        <div class="shoporder-table-mnewtop">
                                            <div class="shoporder-table--top-div">
                                                 <el-checkbox v-model="item.checkedflog"   @change="danShaiXuan(item.no,checked)"></el-checkbox>       
                                                <dl>
                                                    <dt>订单号 :&nbsp; </dt>
                                                    <dd>{{item.no}}</dd>
                                                </dl>

                                                <dl v-if="item.payTime != null">
                                                    <dt>支付时间 :&nbsp; </dt>
                                                    <dd>{{item.payTime.time| formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.createTime != null">
                                                    <dt>创建时间 :&nbsp; </dt>
                                                    <dd>{{item.createTime == null ? '正在进行中' : item.createTime.time | formatDate}}</dd>
                                                </dl>
                                                <dl v-if="item.finishTime != null">
                                                    <dt>完成时间 :&nbsp; </dt>
                                                    <dd>{{item.finishTime == null ? '正在进行中' : item.finishTime.time | formatDate}}</dd>
                                                </dl>
    
                                                <i v-if="item.source == 3" class="iconfont icon-xiaochengxu" style="color:rgb(121,217,59);margin-left:15px"></i>
    
                                            </div>
    
                                            <dl class="lastdl">
                                                <!-- <dt class="lastdl-dt-detail" @click="seeDetail(item.userId,item.no,item.user.nickName)">查看详情</dt> -->
                                                <dd class="lastdl-dt-detail" @click="beizhuorder(item.no,item.userId)">备注</dd>
                                            </dl>
                                        </div>
                                        <div class="playmnewliu" v-if=" item.tradeNo != undefined && item.tradeNo != null && item.tradeNo!= '' ? item.tradeNo : '' "> 支付流水号 : {{item.tradeNo}} </div>
                                    </div>
    
                                    <div class="shoporder-table--bottom" >
                                        <div class="newshoporder-tableall">

                                            <div class="newshoporder-tabone-f">
                                                <div class="newshoporder-tabone-goods"   v-for="(itemgoods,indexgoods) of item.detailList" :key="indexgoods">
                                                    <div class="newshoporder-tabone-goodsdiv">
                                                        <img v-if="itemgoods.imageUrl" :src="itemgoods.imageUrl" alt="" width="40" height="40" :title="itemgoods.item.name" class="shoporder-tab-img">
                                                        <dl class="newshoporder-tabone-goodsdiv_dl" v-if="JSON.stringify(itemgoods.item) != '{}'">
                                                            <dt style="display: flex;"><span class="mh-order-goodslisty">商品名称 : </span><span class="mh-order-goodslisty2">{{itemgoods.item.name}}</span></dt>
                                                            <dd><span class="mh-order-goodslisty">商品ID : </span><span class="mh-order-goodslisty2">{{itemgoods.skuId}}</span></dd>
                                                            <!-- <dd v-if="itemgoods.sku.pvlist.length != 0 "><span class="mh-order-goodslisty">规格 : </span>
                                                                <span class="mh-order-goodslisty2">{{itemgoods.sku.pvlist[0].value}}</span></dd> -->
                                                            
                                                        </dl>
                                                    </div>

                                
                                                    <div class="newshoporder-tabone-goodsdivtwo">
                                                        <!--  <span v-if="JSON.stringify(itemgoods.item) != '{}'"> ¥ {{parseFloat(itemgoods.item.price/100)}}</span>  -->
                                                        <span>{{ itemgoods.quantity}}/ {{ itemgoods.shop.name}}</span>
                                                    </div>

                                                    <div class="newshoporder-tab_shopOne-t">
                                                  
                                                        <span v-if="item.status == -4">系统关闭</span>
                                                        <span v-if="item.status == -3">用户拒收</span>
                                                        <span v-if="item.status == -2">用户取消</span>
                                                        <span v-if="item.status == -1">未付款</span>
                                                        <!-- <span v-if="item.status == 0 && itemgoods.status == 0 ">待发货</span> -->
                                                        <!-- <span v-if="item.status == 1">已发货</span> -->
                                                        <span v-if="item.status == 2">退款完成</span>
                                                        <span v-if="item.status == 3">已收货</span>
                                                        <span v-if="item.status == 4">正在付款</span>
                                                        <span v-if="item.status == 5">正在取消</span>
                                                        <span v-if="item.status == 6">取消审核</span>
                                                        <span v-if="item.status == 7">已完成</span>
                                                        <span v-if="item.status == 8">发起售后</span>
                                                        <p v-if="item.status == 1 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>
                                                        <!-- 发了一半的货 -->
                                                        <p v-if="item.status == 0 && itemgoods.status ==1" style=" display: flex;flex-direction: column;">            
                                                            <span>已发货</span>
                                                            <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                                <div class="mh-seewuliu">
                                                                    <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                                                    <div class="mh-seewuliu-divtwo" v-if="courierNumber != undefined && courierNumber != null">订单号 : {{courierNumber}} </div>
                                                                    <ul>
                                                                        <li v-for="(listitem,listindex) of courierNumberlist" :key="listindex">
                                                                            <div>{{listitem.context}}</div> 
                                                                            <div>{{listitem.logisticsTime.time |formatDate}}</div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                                
                                                                <el-button size="mini"  slot="reference"  @click="orderGoodswuliu(item.no,item.userId,itemgoods.skuId)" style="cursor: pointer;padding:4px 8px 4px 4px" type="primary" icon="el-icon-location">查看物流</el-button>
                                                            </el-popover>
                                                         
                                                        </p>

                                                        <span v-if="item.status == 0 && itemgoods.status == 0">待发货</span>
                                                        <!-- <span v-if="itemgoods.status == 0">未发货</span> -->
                                                        <!-- <span v-if="itemgoods.status ==1" >已发货</span>      -->
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mh-newshoporder-num">
                                                <dl>
                                                    <dt>{{item.receiverPhone}}</dt>
                                                    <dd>{{item.receiverName}}</dd>
                                                </dl>
                                            </div>
                                        

                                             <div class="newshoporder-tuiprice">
                                                {{item.remark == '' ||item.remark == null || item.remark ==undefined ? '暂无留言' : item.remark }}
                                            </div>
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span style="font-weight: 600;">¥ </span> {{item.moneyDeliver}}
                                            </div> -->
                                           
                                            
                                            <!-- 店铺 -->
                                            <!-- <div class="newshoporder-tuiprice">
                                                <span class="mh_order_info" v-if="item.vshopName">{{item.vshopName}}</span> 
                                                <span class="mh_order_info" v-else></span>
                                            </div> -->

                                            <!-- 操作状态开始 -->
                                            <div class="shoporder-edit" v-if="item.status == 0">   
                                                <span class="mh-order-status">等待商家发货</span>                  
                                                <!-- <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="editwuliuaddressStart(item.no,item.userId,item.receiverName,item.receiverPhone,item.receiverAddress,item.regionId)">修改地址</el-button> -->
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId)">发货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == 1" >
                                                <span class="mh-order-status">商家已发货</span>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="orderFahuo(index,item.receiverAddress,item.receiverPhone,item.userId,item.no,item.detailList[0].skuId,2)">修改发货</el-button>
                                                <el-button type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="okgetSgoods(item.no,item.userId,3)">确认收货</el-button>
                                            </div> 

                                            <div class="shoporder-edit" v-if="item.status == -4">
                                                <span style="color:#f56c6c">系统关闭</span>
                                            </div>
        
                                            <div class="shoporder-edit" v-if="item.status == -1">
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="cancelOrder(item.no,item.userId,-2)">取消订单</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="okPay(item.no,item.userId,0)">确认付款</el-button>
                                                <el-button  type="primary" size="mini" class="shoporder-edit-btn orderBtn" @click="updatePrice(item.no,item.userId,item.moneyTotalReal,item.totalCount)">修改价格</el-button>
                                            </div>
        
                                            <!-- 已完成 -->
                                            <div class="shoporder-edit" v-if="item.status == 7">
                                                <span>订单已完成</span>
                                                <!-- <el-button v-if="indexgoods == 0" type="danger" size="mini" disabled>删除</el-button> -->
                                            </div>
                                            <!-- 操作状态结束 -->

                                        </div>
                                 

                                    </div>
                                </div>
                                <!--分页  -->
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-sizes="[100, 200, 300, 400]" :page-size="20" layout="total, prev, pager, next, jumper" :total="totalCount">
                                    </el-pagination>
                                </div>
                                <!--全部over-->
                                <!--全部over-->
                            </el-tab-pane>
                        </el-tabs>
    
                        <!---->
                        <div>
                        </div>
                        <!--选项卡组件 over-->
    
                        <!--选项卡组件-->
                        <!-- 备注弹窗 -->
                        <el-dialog title="备注" :visible.sync="dialogFormVisible" width="50%"  custom-class="m-orderdetail">
                            <div class="add-shop-cate">
                                <div class="df-basic_row_new el-form-item">
                                    <label for="item_title" class="el-form-item__label" style="width: 80px;">备注信息</label>
                                    <div class="el-form-item__content" style="margin-left: 50px;">
                                        <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                            <div class="el-input">
                                                <el-input type="textarea" :rows="5" v-model="textareacontent" maxlength="80" show-word-limit></el-input>
                                            </div>
    
                                        </div>
                                        <div class="tips el-col el-col-24 df-tps-zi" style="padding-left:29px">温馨提示：该备注仅作为商家对订单的标记，不会被买家查看到。</div>
                                    </div>
                                </div>
    
                                <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                    <el-button @click="dialogFormVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="resbeizhu">确 定</el-button>
                                </div>
                            </div>
                        </el-dialog>
    
                        <!-- 备注 -->
                        <el-dialog title="修改价格" :visible.sync="editpricedialogFormVisible" width="25%">
                            <div class="add-shop-cate">
                                <div class="df-basic_row_new el-form-item">
                                    <label for="item_title" class="el-form-item__label" style="width: 80px;">调整金额</label>
                                    <div class="el-form-item__content" style="margin-left: 50px;">
                                        <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                            <div class="el-input">
                                                <el-input type="number" v-model="updatagoodsprice"></el-input>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="df-basic_row_new el-form-item">
                                    <label for="item_title" class="el-form-item__label" style="width: 80px;">运费</label>
                                    <div class="el-form-item__content" style="margin-left: 50px;">
                                        <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                            <div class="el-input">
                                                <el-input type="number" v-model="updatagoodspricey"></el-input>
                                            </div>
    
                                        </div>
                                    </div>
                                </div>
    
                                <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                    <el-button @click="editpricedialogFormVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="okupdatePrice">确 定</el-button>
                                </div>
                            </div>
                        </el-dialog>
    
                        <!-- 发货 -->
                        <el-dialog title="商品发货" :visible.sync="ordergoodsdialogFormVisible" width="60%">
                            <div class="add-shop-cate">
                                <el-table ref="multipleTable" :data="goodsdatafahuo" tooltip-effect="dark" border style="width: 100%" @selection-change="handleSelectionChange">
                                    <el-table-column type="selection" width="55">
                                    </el-table-column>
                                    <el-table-column label="商品" width="160">
                                        <template slot-scope="scope">
                                    <!-- <img :src="scope.row.imageurl" style="width:55px;height:55px" alt=""> -->
                                    <div style="width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">{{scope.row.name}}</div>
                                    </template>
                                    </el-table-column>
                                    <el-table-column prop="quantity" label="数量" width="120">
                                    </el-table-column>
                                    <el-table-column prop="expressName" label="物流公司" show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column  prop="logisticsNo" label="单号" show-overflow-tooltip>
                                    </el-table-column>
                                    <el-table-column prop="address" label="状态"  show-overflow-tooltip>
                                    <template slot-scope="scope">
                                    <div>                          
                                        <span v-if="scope.row.status == -4">系统关闭</span>
                                        <span v-if="scope.row.status == -3">用户拒收</span>
                                        <span v-if="scope.row.status == -2">用户取消</span>
                                        <span v-if="scope.row.status == -1">未付款</span>
                                        <span v-if="scope.row.status == 0">待发货</span>
                                        <span v-if="scope.row.status == 1">已发货</span>
                                        <span v-if="scope.row.status == 2">退款完成</span>
                                        <span v-if="scope.row.status == 3">已收货</span>
                                        <span v-if="scope.row.status == 4">正在付款</span>
                                        <span v-if="scope.row.status == 5">正在取消</span>
                                        <span v-if="scope.row.status == 6">取消审核</span>
                                        <span v-if="scope.row.status == 7">已完成</span>
                                        <span v-if="scope.row.status == 8">发起售后</span>     
                                    </div>
                                </template>
                                    </el-table-column>
                                    </el-table>
                                    <div class="df-basic_row_new el-form-item" style="margin-top:15px">
                                        <label for="item_title" class="el-form-item__label" style="width: 80px;">收货地址 :</label>
                                        <div class="el-form-item__content" style="margin-left: 50px;">
                                            <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                                <div class="el-input">                                     
                                                        {{thisgoddsaddress}}
                                                </div>

                                    </div>
                                </div>
                            </div>

                            <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 80px;">联系方式 :</label>
                                <div class="el-form-item__content" style="margin-left: 50px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input">                                     
                                               {{thisgoodsphone}}
                                        </div>

                                    </div>
                                </div>
                            </div>

                             <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 80px;">发货方式 :</label>
                                <div class="el-form-item__content" style="margin-left: 50px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input">                             
                                            <el-radio v-model="orderexpreeradio" label="1" @change="orderexpree">物流发货</el-radio>
                                            <el-radio v-model="orderexpreeradio" label="2" @change="orderexpree">无需物流</el-radio>
                                            <el-radio v-model="orderexpreeradio" label="3" @change="orderexpree">电子面单发货</el-radio>
                                        </div>

                                    </div>
                                </div>
                            </div>

                              <div class="df-basic_row_new el-form-item" v-if="orderexpreeisshow">
                                <div class="el-form-item__content" style="margin-left: 50px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input" style="display:flex;align-items: center;">                                     
                                            <div class="el-form-item  is-required" style="display:flex;align-items: center;">
                                                <label for="express_number" class="el-form-item__label" style="width: 96px;">物流公司:</label>
                                                <el-select v-model="expressdatavalue" placeholder="请选择"  style="flex:1">
                                                    <el-option
                                                    v-for="item in expressdata"
                                                    :key="item.id"
                                                    :label="item.name"
                                                    :value="item.id">
                                                    </el-option>
                                                    </el-select>
                                           </div>
                                           <div class="el-form-item  is-required" style="display:flex;align-items: center;">
                                                <label for="express_number" class="el-form-item__label" style="width: 96px;">快递单号：</label>
                                                <el-input type="text" v-model="kuaididanhao" style="flex:1"></el-input>
                                           </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        
                            <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                <el-button @click="ordergoodsdialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="orderfhMethod" v-if="fahuosTatus == 1">确 定</el-button>
                                <el-button type="primary" @click="xiuorderFahuo" v-if="fahuosTatus == 2">确 定</el-button>
                            </div>
                            </div>
                         </el-dialog>
                        <!-- 发货over -->

                        <!-- 修改已有地址地址 -->
                        <el-dialog title="修改收货地址" :visible.sync="startaddressdialogFormVisible" width="40%">
                            <div class="add-shop-cate">
                                <div class="df-basic_row_new el-form-item" style="display:flex">
                                    <label for="item_title" class="el-form-item__label" style="width: 120px;">收货人姓名 :</label>
                                    <div class="el-form-item__content" style="margin-left: 50px;width:70%">
                                        <el-input type="text" v-model="startAddressName"></el-input>                  
                                    </div>
                                </div>
                                <div class="df-basic_row_new el-form-item" style="display:flex">
                                    <label for="item_title" class="el-form-item__label" style="width: 120px;">收货人手机号 : </label>
                                        <div class="el-form-item__content" style="margin-left: 50px;width:70%">
                                            <el-input type="text" v-model="startAddressPhone"   maxlength="11"   show-word-limit></el-input>
                                        </div>       
                                    
                                </div>
                                <div class="df-basic_row_new el-form-item" style="display:flex">
                                    <label for="item_title" class="el-form-item__label" style="width: 120px;">当前收货地址 : </label>
                                        <div class="el-form-item__content" style="margin-left: 50px;width:70%">
                                            <el-input type="text" v-model="startAddress" disabled="true"></el-input> 
                                            <el-button type="info" plain size="mini" @click="editthisDress">修改当前收货地址</el-button>                
                                        </div>       
                                
                                </div>
            
                            
                                <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                    <el-button @click="startaddressdialogFormVisible = false">取 消</el-button>
                                    <el-button type="primary" @click="startAddressid">确 定</el-button>
                                </div>
                            </div>
                        </el-dialog>

                    <!-- 修改已有地址over -->
                    <!-- 修改地址 -->
                    <el-dialog title="修改收货地址" :visible.sync="addressdialogFormVisible" width="40%">
                        <div class="add-shop-cate">
                            <div class="df-basic_row_new el-form-item" style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">收货人姓名 :</label>
                                <div class="el-form-item__content" style="margin-left: 50px;width:60%;flex:1">                
                                    <el-input type="text" v-model="startAddressName"></el-input>                                   
                                </div>
                            </div>
                            <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">收货人手机号 : </label>
                                <div class="el-form-item__content" style="margin-left: 50px;width:60%;flex:1">                     
                                     <el-input type="text" v-model="startAddressPhone"   maxlength="11" show-word-limit></el-input>                            
                                </div>
                            </div>
                             <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">新收货地址 : </label>
                                <div class="el-form-item__content" style="margin-left: 50px;width:60%;flex:1">
                                  
                                    <el-cascader
                                    :change-on-select="true"     
                                    v-model="addressvalue"
                                    :options="addressjsonop"
                                    :props="{ expandTrigger: 'hover',children:'childList',value:'id',label:'name' }"
                                    @change="handleChange"></el-cascader>
        
                                </div>
                            </div>
                             <div class="df-basic_row_new el-form-item"  style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">详细地址 : </label>
                                <div class="el-form-item__content" style="margin-left: 50px;width:60%;flex:1" >
                                    <el-input type="textarea" v-model="xingaxiadress"></el-input>                      
                                </div>
                            </div>
                        
                            <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                <el-button @click="addressdialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="editshouHuoaddress">确 定</el-button>
                            </div>
                        </div>
                    </el-dialog>

                    <!-- 修改地址over -->
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
import shopnavbar from './shopnavbar';
import baseapi from '../../utils/api';
import addressjson from "../../../static/address.json";
import { formatDate } from "../../filters/date";
import {
        zm_jsonToString,
        zm_formDataToString
} from "../../filters/zm_tools.js"
import {
        zm_getOrderCourse,
        zm_getOrderTypeList,
        zm_getOrderType,
} from "../../filters/zm_data.js"


export default {
    data() {
        return {
            orderDetailInfo: '',
            upnote:{},
            value13:'',
            fahuosTatus:false,
            showxia3:false, 
            checkAll: false,
            checkedCities: [],

            cities: [{'name':'订单号','id':'no'},{'name':'商品金额','id':'moneyGoods'},{'name':'实付金额','id':'moneyTotalReal'},  {'name':'邮费','id':'moneyDeliver'},
              {'name':'收件人','id':'receiverName'},{'name':'收件人电话','id':'receiverPhone'},{'name':'留言','id':'remark'}, {'name':'收件人地址','id':'receiverAddress'},{'name':'状态','id':'status'},
              {'name':'订单类型','id':'type'},{'name':'用户ID','id':'userId'},{'name':'支付方式','id':'payFrom'},{'name':'微信昵称','id':'wxNickName'},
              {'name':'属性','id':'pv'}, {'name':'商品SPU ID','id':'itemId'},{'name':'商品SKU ID','id':'skuId'}, {'name':'数量','id':'quantity'}, {'name':'商品价格','id':'price'},

            {'name':'商品市场价','id':'priceDiscount'},{'name':'商品名称','id':'itemName'},{'name':'商品类型','id':'itemType'},{'name':'下单时间','id':'createTime'}],
            isIndeterminate: true,
            //
            shaoxutiou:'',
            overfahuo: 0,
            thispageindex: 1,
            loading: true,
            xingaxiadress: '',
            startaddressdialogFormVisible: false,
            totalCount: 0,
            courierNumber: "",
            courierServicesCompany: '',
            dingdanno: '------',
            visible: false,
            kuaididanhao: '',
            thisgoodsskuid: 0,
            thisgoodsuseno: 0,
            thisgoodsuseid: 0,
            expressdatavalue: '',
            addressjsonop: '',
            number: "",
            defaultProps: {
                children: 'childList',
                label: 'name'
            },
            addressvalue: [],
            addressjson: [],
            orderaddressname: '',
            orderaddressphone: '',
            orderaddresspath: '',
            orderaddressxi: '',
            addressdialogFormVisible: false,
            orderexpreeradio: '1',
            value: '',
            expressdata: [],
            ordergoodsdialogFormVisible: false,
            editpricedialogFormVisible: false,
            listnumber: 0,
            item: [],
            updatePriceno: '',
            updatePriceuserid: '',
            updatagoodsprice: 0,
            updatagoodspricey: 0,
            //筛选
            value1: '',
            value3: '',
            value4: '',
            value6: '',
            value7: '',
            value9: '',
            value10: '',
            value11: '',
            dialogFormVisible: false, //备注的按钮
            textareacontent: '',
            userId: '',
            no: '',

            kuaidiinput: "",
            orserid: "",
            inordernumber: '', //订单号
            list: [],

            ordernovalue: '', //订单号
            orderStatus: '',
            ordertype: '', //订单类型
            ordertypeList: '',
            wuliutype: '', //物流方式
            kdnumber: '', //快递单号
            pybuy: '', //付款方式
            vipid: '', //会员id
            goodsname: '', //商品名称
            orderinto: '', //订单来源
            wuliugs: '', //物流公司
            fktime: '', //付款时间

            //物流方式
            logisticsmode: [{
                value: '1',
                label: '快递发货'
            }, {
                value: '2',
                label: '上门自提'
            }],
            //供应商
            ssupplierId: '',
            supplierType: '',
            //店铺
            svshopId: '',
            shopType: '',
            //物流公司
            wuliugs: [{
                value: '1',
                label: '申通'
            }, {
                value: '2',
                label: '中通'
            }, {
                value: '3',
                label: '圆通'
            }, {
                value: '4',
                label: '邮政'
            }, {
                value: '5',
                label: '韵达'
            }],
            //下单时间
            placeordertime: [{
                value: '1',
                label: '下单时间'
            }, {
                value: '2',
                label: '付款时间'
            }, {
                value: '3',
                label: '交易完成时间'
            }],
            value11: '',
            input: '',

            visible: false,
            activeName: '',
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }, {
                value: '选项3',
                label: '蚵仔煎'
            }, {
                value: '选项4',
                label: '龙须面'
            }, {
                value: '选项5',
                label: '北京烤鸭'
            }],
            value: '',
            tableData: [{
                goodsid: 1,
                goods: "http://thirdwx.qlogo.cn/mmopen/PiajxSqBRaELWDEIO8X8iaiaX2lrtGsN7u8fmfuxzMS1ES8DU8EbaWN9ibzccr93I0hhiatYy6ndGkVKslMPgWoQ22w/132",
                pv: '200',
                stock: '200',
                total: 2000,
                creatime: '2016-05-02',
                person: '蒋金泽',
                sort: 1,
                handle: 'ds '
            }, ],
            multipleSelection: [],
            dialogFormVisible: false, //推广链接
            dialogFormFUgou: false,
            shop_lisk_input: 'http://47.tecqm.com/#/pages/goods/detail/ShopDetail?secondId=5733',
            radio: '1', // 假的单选框
            currentPage4: 1, //分页
            itemId: [],
            goodsListNote: [],
            newarr: {},
            goodsnotegroup: [],
            orderexpreeisshow: true,
            shophuoSmallId: 130100,
            editadressid: 0,
            editadressuserid: 0,
            fahuogoodsData: [],
            //发货
            thisgoodsIndex: 0,
            goodsdatafahuo: [],
            thisgoddsaddress: '',
            thisgoodsphone: '',
            fahuogoodstr: '',
            courierNumberlist: [],
            startAddressName: '',
            startAddressPhone: '',
            startAddress: '',
            smalladdressname: '',
            smalladdressid: 0,
            shuaixuanid:'',
            pendingpaymentNum: '',
            pendshippedNum: '',
            pendcomplete: '',
            pendClose: '',
            pendprotection: '',
            yifahuostatus:0,
            expressdatavalueid:'',//默认修改发货地址id
            danShaiXuanarr:[],
            allNumber:0,
           
        };
        
    },
    components: {
        navbar,
        sidebar,
        shopnavbar
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
        let newArr = [];
        for (var i in addressjson.region) {
            newArr.push(addressjson.region[i]);
        }
        this.addressjsonop = newArr;
        this.request_orderList('', 1);
        this.expressmethod();
        this.reqOrderNum(); // 查询订单各状态数量 
        // this.exportHui();

        this.ordertypeList = zm_getOrderTypeList();
      
    },
    filters: {
        formatDate(time) {
            if (time == '正在进行中') {
                return '正在进行中';
            } else {
                // time = time * 1000
                let date = new Date(time)
                // console.log(new Date(time))
                return formatDate(date, 'yyyy-MM-dd hh:mm')
            }
        }
    },
    methods: {
        zm_getOrderType(status){
            return  zm_getOrderType(status);
        },
        zm_getOrderCourse(course){
            return  zm_getOrderCourse(course);
        },
        danShaiXuan(id,check){
            // if()
            // newArr.push(id);
            let pos = this.danShaiXuanarr.indexOf(id);
                if (pos < 0){
                this.danShaiXuanarr.push(id)
                } else {
                this.danShaiXuanarr.splice(pos, 1)
            } 

            console.log(this.danShaiXuanarr);
        },
        exportHui() {
            let that = this;
            let data = new FormData();
            data.append('type', that.orderexpreeradio); //类型
            this.$http({
                    method: "post",
                    url: baseapi.anziduanExport,
                    data: data,
                })
                .then(function(res) {
                    console.log('筛选回显数据',res);
                    if (res.data.status == 200) {
                    let extioajian =   res.data.setting.orderExportFields.split(",");
                    that.checkedCities = extioajian ;

                    }else{
                        that.$message.error(res.data.message);
                    }
                }).catch(res=>{
                    console.log('筛选回显',res);
                })
        },
        newQuanXuan(val) {
            let newArr = [];
            this.cities.forEach(function(item,index){
               newArr.push(item.id);
            })

            this.checkedCities = newArr;

            this.isIndeterminate = false;
        },
        newQuanNoXuan(val) {
            console.log( this.checkedCities);
            this.checkedCities = [];
            this.isIndeterminate = true;
        },
        handleCheckedCitiesChange(value) {
            console.log(value);
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
        },
        //请求全国地址
        Nationaladdress(){
        },
        orderexpree() {
            if (this.orderexpreeradio == 1) {
                this.orderexpreeisshow = true;
            } else if (this.orderexpreeradio == 2) {
                this.orderexpreeisshow = false;
            } else {
                this.orderexpreeisshow = false;
            }
        },
        //商品发货
        orderfhMethod() {
            this.loading = true;
            let that = this;
            let params = new FormData();
            params.append('type', that.orderexpreeradio); //类型
            if (that.orderexpreeradio != 2 && that.orderexpreeradio != 3) {
                params.append('logisticsNo', that.kuaididanhao);
                params.append('expressId', that.expressdatavalue); //快递公司ID
            }
            params.append('platform ', 1);
            params.append('no', that.thisgoodsuseno); // 订单号
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("supplierId", '2');
            }

            let skustr = that.fahuogoodstr.substring(0, that.fahuogoodstr.length - 1);
            if (skustr == '') {
                that.$message.error('请选择商品');
                return false;
            }
            params.append('skuIds', skustr); //fhuomoenyAddress 、 orderSend

            this.$http({
                    method: "post",
                    url: baseapi.orderSend,
                    headers: { "Content-Type": "application/octet-stream;charset=utf-8", suserId: that.$cookie.get('userId'), userId: that.thisgoodsuseid },
                    data: params,
                })
                .then(function(res) {
                    console.log(res);
                    console.log('---商品发货 data= ' + zm_jsonToString(res.data));

                    if (res.data.status == 200) {
                        that.loading = false;
                        that.$message.success('发货成功');
                        that.kuaididanhao = ''; //发货成功置空
                        that.expressdatavalue = '';   
                        that.ordergoodsdialogFormVisible = false;
                        // that.request_shuaixuanmethod(that.shuaixuanid, that.thispageindex);
                        this.request_orderList('', 1);
                    }else{
                        that.$message.error(res.data.message);
                    }

                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        //请求：售后订单详情（发货）
        orderFahuo(index, address, phone, uerid, no, skuid,type=1, expressId,logisticsNo) {
           let that = this;
           if (type == 1 ) {
                this.fahuosTatus = 1;
            }else{
                this.fahuosTatus = 2;
                //回显定单明细
                console.log('进入修改发货逻辑');
                return;
            }
            this.loading = true;
            this.thisgoodsIndex = index;
            this.thisgoddsaddress = address;
            this.thisgoodsphone = phone;
            this.thisgoodsuseid = uerid;
            this.thisgoodsuseno = no;
            this.thisgoodsskuid = skuid;

            let params = new FormData();
            params.append('platform', 1);
            params.append('orderNo', no);
            params.append("token", this.$cookie.get('token'));

            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("supplierId", '2');
            }
            console.log('---订单详情params' + zm_formDataToString(params));

            // orderDetailMehod、 orderSend 、 orderDetail
            this.$http({
                    method: "post",
                    url: baseapi.orderDetail,
                    data: params,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'), userId: uerid }
                })
                .then(function(res) {
                    console.log('---订单详情 res= '+ zm_jsonToString(res.data));
                    that.loading = false;
                    
                    if (res.status == 200  || res.status == "200") {
                        let newArr = [];
                        let orderData = res.data.data.detailList;
                        orderData.forEach(function(item, index) {
                            newArr.push(item);
                        })
                        that.goodsdatafahuo = newArr;
                        that.ordergoodsdialogFormVisible = true;
                       
                    } else {
                        that.$message.error(res.data.message);
                    }
                }).catch(function(res){
                    that.loading = false;
                }); 
        },
        //修改发货
        xiuorderFahuo() {
            let that = this;
            let data = new FormData();
            data.append('type', that.orderexpreeradio); //类型
            if (that.orderexpreeradio != 2 && that.orderexpreeradio != 3) {
                data.append('lgsNo', that.kuaididanhao);
                if(isNaN(that.expressdatavalue)){
                    data.append('expressId', that.expressdatavalueid)
                }else{
                    data.append('expressId', that.expressdatavalue); //快递公司ID
                }
              
                console.log(that.expressdatavalue);
            }
            data.append('orderNo', that.thisgoodsuseno); // 订单号
            let skustr = that.fahuogoodstr.substring(0, that.fahuogoodstr.length - 1);
            if (skustr == '') {
                that.$message.error('请选择商品');
                return false;
            }
            data.append('skuId', skustr);
            this.$http({
                    method: "post",
                    url: baseapi.orderxiugaiFa,
                    headers: { "Content-Type": "application/octet-stream;charset=utf-8", suserId: that.$cookie.get('userId'), userId: that.thisgoodsuseid },
                    data: data,
                })
                .then(function(res) {
                    console.log(res);
                    if (res.data.status == 500) {
                        that.$message.error(res.data.message);
                        return false;
                    }
                    if (res.data.status == 505) {
                        that.$message.error(res.data.message);
                        return false;
                    }
                    if (res.data.status == 200) {
                        that.$message.success('修改发货成功');
                        that.kuaididanhao = ''; //发货成功置空
                        that.expressdatavalue = '';   
                        that.ordergoodsdialogFormVisible = false;
                        that.request_shuaixuanmethod(that.shuaixuanid, that.thispageindex);
                    }

                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        editshouHuoaddress() {
            let data = new FormData();
            let that = this;
            data.append('receiverName', this.startAddressName); //收货人 
            data.append('receiverPhone', this.startAddressPhone); //收货电话
            data.append('receiverAddress', this.xingaxiadress); //收货地址
            data.append('regionId', this.shophuoSmallId); //收货id  
            data.append('no', that.editadressid)

            this.$http({
                    method: "post",
                    url: baseapi.mhorderupodate,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'), userId: this.editadressuserid }
                })
                .then(function(res) {
                    if (res.data.status == 505) {
                        that.$message.error('服务器异常');
                        return false;
                    }
                    if (res.data.status == 500) {
                        that.$message.error(res.data.message);
                        return false;
                    }
                    if (res.data.status == 200) {
                        that.$message.success('修改地址成功');
                        that.request_shuaixuanmethod(that.shuaixuanid, that.thispageindex);
                        that.addressvalue = [];
                        that.addressdialogFormVisible = false;
                    } else {
                        that.$message.error('修改地址不成功');
                    }
                })
        },
        editwuliuaddress(no, uerid) {
            this.addressdialogFormVisible = true;
            this.editadressid = no;
            this.editadressuserid = uerid;
        },
        //需要最小的地址id
        editthisDress() {
            this.startaddressdialogFormVisible = false;
            this.addressdialogFormVisible = true;

        },
        editwuliuaddressStart(parme1, parme2, parme3, parme4, parme5, regionid) {

            this.editadressid = parme1;
            this.editadressuserid = parme2;
            this.startAddressName = parme3;
            // let hiddenphone = parme4.substr(0,3) + "****" + parme4.substr(7)
            this.startAddressPhone = parme4;
            this.startAddress = parme5
            this.startaddressdialogFormVisible = true;
            let newArr = parme5.split(" ");
            this.smalladdressname = newArr[newArr.length - 2];
            this.xingaxiadress = newArr[newArr.length - 1];
            this.smalladdressid = regionid;
            // this.gethref(this.addressjsonop,this.smalladdressname);
        },
        //订单修改
        startAddressid() {
            let data = new FormData();
            let that = this;
            data.append('receiverName', this.startAddressName); //收货人 
            data.append('receiverPhone', this.startAddressPhone); //收货电话
            data.append('receiverAddress', this.xingaxiadress); //收货地址
            data.append('regionId', this.smalladdressid); //收货id  
            data.append('no', that.editadressid)

            this.$http({
                    method: "post",
                    url: baseapi.mhorderupodate,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'), userId: this.editadressuserid }
                })
                .then(function(res) {
                    if (res.data.status == 505) {
                        that.$message.error('服务器异常');
                        return false;
                    }
                    if (res.data.status == 500) {
                        that.$message.error(res.data.message);
                        return false;
                    }
                    if (res.data.status == 200) {
                        that.$message.success('修改地址成功');
                        that.startaddressdialogFormVisible = false;
                        that.request_shuaixuanmethod(that.shuaixuanid, that.thispageindex);
                    } else {
                        that.$message.error('修改地址不成功');
                    }
                })
        },
        handleChange() {
            console.log(this.addressvalue);
            let newArr = this.addressvalue;
            let index = newArr.length - 1;
            this.shophuoSmallId = newArr[index];

        },
        reqaddressJson() {
            let data = new FormData();
            let that = this;
            this.$http({
                    method: "get",
                    url: 'http://sanyetongsj.oss-cn-shanghai.aliyuncs.com/region.json',
                    data: data,
                    headers: { "Content-Type": "multipart/form-data" }
                })
                .then(function(res) {
                    console.log(res);
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        huahua() {
            console.log(this.value11);
        },
        orderexportMeth() {
            let data = new FormData();
            let that = this;
            //状态
            data.append('sstatus', this.shuaixuanid);
            data.append('sno', this.inordernumber);
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                data.append("ssupplierId", this.$cookie.get('supplierId'));
            }else{
                data.append("ssupplierId", '2');
            }

            //checkbox 导出功能
            if(this.danShaiXuanarr.length != 0){
                  data.append('snos',this.danShaiXuanarr.join(","))
            }
            if (this.value3 != '') {
                data.append('sdeliverType', this.value3);
            }

            if (this.value4 != '') {
                data.append('sexpressNo', this.value4);
            }
            console.log('---this.value6= '+this.value6);
            if (this.value6 != ''&& this.value13  == 'suid') {
                data.append('suid', this.value6);
            }
            if (this.value6 != ''&& this.value13  == 'sunickName') {
                data.append('sunickName', this.value6);
            }
            if (this.value7 != '') {
                data.append('sitemName', this.value7);
            }
            if (this.value9 != '') {
                data.append('sexpressId', this.value9);
            }

            if (this.value10 == '' || this.value10 == 1) {
                if (this.value11 != '') {
                    data.append('screateTimeStart', this.value11[0]);
                    data.append('screateTimeEnd', this.value11[1]);
                }
            }
            if (this.value10 == 2) {
                if (this.value11 != '') {
                    data.append('spayTimeStart', this.value11[0]);
                    data.append('spayTimeEnd', this.value11[1]);
                }
            }
            if (this.value10 == 3) {
                if (this.value11 != '') {
                    data.append('sfinishTimeStart', this.value11[0]);
                    data.append('sfinishTimeEnd', this.value11[1]);
                }
            }
            if(this.checkedCities.length>0){
                data.append('sfields',this.checkedCities.join(","))
            }
            let urlStr = baseapi.orderExport; //baseapi.orderexport
    
            this.$http({
                    method: "post",
                    url: urlStr,
                    data: data,
                    headers: { "Content-Type": "application/octet-stream;charset=utf-8", suserId: that.$cookie.get('userId') },
                    responseType: 'blob'
                })
                .then(function(res) {
                    console.log(res);
                      if(res.data.size < 512){
                        that.$message.warning('查看筛选条件,导出内容无数据');
                        return false;
                    }
                    const blob = new Blob([res.data])
                    const fileName = '订单导出信息.xlsx'
                    window.open('export:blank');
                    if ('download' in document.createElement('a')) { // 非IE下载
                        const elink = document.createElement('a')
                        elink.download = fileName
                        elink.style.display = 'none'
                        elink.target="_blank"
                        elink.href = URL.createObjectURL(blob)
                        document.body.appendChild(elink)
                        elink.click()
                        URL.revokeObjectURL(elink.href) // 释放URL 对象
                        document.body.removeChild(elink);
                    } else { // IE10+下载
                        navigator.msSaveBlob(blob, fileName)
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        //查看详情操作
        seeDetail(userId, no, nickName) {
            this.$cookie.set('orderuserId', userId, 1);
            this.$cookie.set('orderorderNo', no, 1);
            if (nickName == null || nickName == undefined || nickName == '') {
                this.$cookie.set('orderuserNickName', '', 1);
            } else {
                this.$cookie.set('orderuserNickName', nickName, 1);
            }
            let item = {
                userId: userId,
                no: no,
                nickName: nickName,
            };
            this.$router.push({
                path:'/order/orderdetail',
                query:{
                    itemData:JSON.stringify(item),
                }
            })


        },
        //订单修改价格
        updatePrice(no, userId, price, yprice) {
            this.editpricedialogFormVisible = true;
            this.updatePriceno = no;
            this.updatePriceuserid = userId;
            this.updatagoodsprice = price / 100;
            if (yprice == '' || yprice == undefined) {
                this.updatagoodspricey = 0;
            } else {
                this.updatagoodspricey = yprice / 100;
            }
        },
        //请求快递公司
        expressmethod() {

            let that = this;
            let data = new FormData();
            this.$http({
                    method: "post",
                    url: baseapi.express,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data" }
                })
                .then(function(res) {
                    console.log(res);
                    that.expressdata = res.data.list;
                    that.wuliugs =  res.data.list;

                })
        },
        //数的数据遍历
        toTree(data) {
            // 删除 所有 children,以防止多次调用
            data.forEach(function(item) {
                delete item.children;
            });

            // 将数据存储为 以 id 为 KEY 的 map 索引数据列
            var map = {};
            data.forEach(function(item) {
                map[item.id] = item;
            });
            var val = [];
            data.forEach(function(item) {
                // 以当前遍历项，的pid,去map对象中找到索引的id
                var parent = map[item.parentId];
                // 好绕啊，如果找到索引，那么说明此项不在顶级当中,那么需要把此项添加到，他对应的父级中
                if (parent) {
                    (parent.children || (parent.children = [])).push(item);
                } else {
                    //如果没有在map中找到对应的索引ID,那么直接把 当前的item添加到 val结果集中，作为顶级
                    val.push(item);
                }
            });
            return val;
        },
        okupdatePrice() {
            let data = new FormData();
            let that = this;
            data.append('no', this.updatePriceno);
            data.append('moneyTotalReal', this.updatagoodsprice * 100);
            data.append('moneyDeliver', this.updatagoodspricey);

            this.$http({
                    method: "post",
                    url: baseapi.updataorderprice,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'), userId: this.updatePriceuserid }
                })
                .then(function(res) {
                    console.log(res);
                    if (res.data.status == 200) {
                        that.$message.success('修改价格成功');
                        that.editpricedialogFormVisible = false;

                    } else {
                        that.$message('修改价格失败');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                    that.$message('备注失败');
                });
        },
        cancelOrder(no, userId, status) {
            let that = this;
            this.$confirm('您要取消该订单, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {

                that.orderStatusMethod(no, userId, status);
            })
        },
        okPay(no, userId, status) {
            let that = this;
            this.$confirm('确认付款后将无法恢复, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                that.orderStatusMethod(no, userId, status);
            })
        },
        //按钮：确认收货
        okgetSgoods(no, userId, status) {
            return;
            let that = this;
            this.$confirm('您正在确认收货, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                that.orderStatusMethod(no, userId, status);
            })
        },
        //请求：确认收货 - 订单的状态操作（updataorderprice 、 orderReceive
        orderStatusMethod(no, userId, status) {
            let params = new FormData();
            let that = this;
            params.append('no', no);
            params.append('status', status);
            params.append('platform', 1);
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("supplierId", '2');
            }

            this.$http({
                    method: "post",
                    url: baseapi.orderReceive,
                    data: params,
                    // headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'), userId: userId }
                })
                .then(function(res) {
                    console.log(res);
                    if (res.data.status == 200) {
                        if (status == -2) {
                            that.$message.success('取消订单成功');
                            that.dialogFormVisible = false;
                            that.request_shuaixuanmethod(that.shuaixuanid, that.thispageindex);

                        } else if (status == 0) {
                            that.$message.success('确认付款成功');
                            that.dialogFormVisible = false;
                            that.request_shuaixuanmethod(that.shuaixuanid, that.thispageindex);
                        } else if (status == 3) {
                            that.$message.success('确认收货成功');
                            that.dialogFormVisible = false;
                            that.request_shuaixuanmethod(that.shuaixuanid, that.thispageindex);
                        } else {
                            that.$message.error('操作失败');
                        }
                    } else {
                        that.$message(res.data.message)
                    }
                })
                .catch(function(error) {
                    console.log(error);
                    that.$message('操作失败!');
                });
        },
        value1mothod() {
          
        },
        See(e) {
            window.location.href = e
        },
        //cell按钮：备注
        beizhuorder(no, userId) {
            // return;
            this.dialogFormVisible = true;
            this.no = no;
            this.userId = userId;
        },
        //备注事件（mhorderupodate 、 orderNote）
        resbeizhu() {
            let params = new FormData();
            let that = this;
            params.append('orderNo', this.no);
            params.append('note', that.textareacontent);
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("supplierId", '1');
            }

            this.$http({
                    method: "post",
                    url: baseapi.orderNote,
                    data: params,
                    // headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId: this.userId }
                })
                .then(function(res) {
                    console.log(res);
                    if (res.status == 200) {
                        that.$message.success('备注成功');
                        that.dialogFormVisible = false;
                    } else {
                        that.$message('备注失败');
                    }
                })
                .catch(function(error) {
                    console.log(error);
                    that.$message('备注失败');
                });
        },
        // 刷新方法
        request_shuaixuanmethod(status, page, shaixuanstatus) {

            let params = new FormData();
            let that = this;
            if (that.orderStatus != '') {
                params.append('sstatus', that.orderStatus);
            } else {
                params.append('sstatus', status);
            }

            params.append('page', page);
            params.append('limit', 20);
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("ssupplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("ssupplierId", '1');
            }

            params.append('sno', this.inordernumber);
            if (this.value3 != '') {
                params.append('sdeliverType', this.value3);
            }
            if (this.value4 != '') {
                params.append('sexpressNo', this.value4);
            }
            if (this.value6 != ''&& this.value13  == 'suid') {
                params.append('suid', this.value6);
            }
            if (this.value6 != ''&& this.value13  == 'sunickName') {
                params.append('sunickName', this.value6);
            }
            if (this.value7 != '') {
                params.append('sitemName', this.value7);
            }
            if (this.value9 != '') {
                params.append('sexpressId', this.value9);
            }
            if (this.ssupplierId != '') {
                daparamsta.append('ssupplierId', this.ssupplierId);
            }
            if (this.svshopId != '') {
                params.append('svshopId', this.svshopId);
            }
            if (this.value10 == '' || this.value10 == 1) {
                if (this.value11 != '') {
                    params.append('screateTimeStart', this.value11[0]);
                    params.append('screateTimeEnd', this.value11[1]);
                }
            }

            if (this.value10 == 2) {
                if (this.value11 != '') {
                    params.append('spayTimeStart', this.value11[0]);
                    params.append('spayTimeEnd', this.value11[1]);
                }
            }
            if (this.value10 == 3) {
                if (this.value11 != '') {
                    params.append('sfinishTimeStart', this.value11[0]);
                    params.append('sfinishTimeEnd', this.value11[1]);
                }
            }
            let urlStr = baseapi.orderList; //baseapi.selectOrdecrList

            this.$http({
                    method: "post",
                    url: urlStr,
                    data: params,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
                })
                .then(function(res) {
                    console.log(res.data)

                    if (res.data.list.length == 0) {
                        that.list = [];
                        that.totalCount = 0;
                        return false;
                    }
                    if (shaixuanstatus == 999) {
                        that.$message.success('筛选成功');
                    }
                    console.log(res.data.list);
                    that.totalCount = res.data.totalCount;
    
                    if(res.data.list[0].detailList[0].item != null){
                         res.data.list.forEach(function(item){
                            item.checkedflog = false
                        })
                        that.list = res.data.list;
                    }else{
                         that.list = [];
                         that.totalCount = 0;
                         console.error('订单商品数据不存在');
                    }                
                })
                .catch(function(error) {
                    console.log(error);
                });
        },

        okhexiao() {
            this.inordernumber = '';
            this.value1 = '';
            this.value3 = '';
            this.value4 = '';
            this.value6 = '';
            this.value13 = '';
            this.value7 = '';
            this.value9 = '';
            this.value10 = '';
            this.value11 = '';
            this.ssupplierId = '';
            this.svshopId = '';
            let shailist = this.list;
            shailist.forEach(function(item){
                item.checkedflog = false;
            })
            this.list = shailist;
            this.danShaiXuanarr = [];

            console.log('---this.danShaiXuanarr= '+this.danShaiXuanarr);
            this.$message.success('清除筛选条件成功');
        },
        //请求：订单列表
        request_orderList(status, page) {
            let params = new FormData();
            let that = this;
            params.append('page', page);
            params.append('limit', 20);
            if (status != undefined && status != '' && status != null) {
                params.append('sstatus', status);
            }
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("ssupplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("ssupplierId", '1');
            }
            let urlStr = baseapi.orderList; 
                // urlStr = baseapi.selectOrdecrList
            console.log('---订单列表 params=' + zm_formDataToString(params) +'\n urlStr= ', urlStr);

            this.$http({
                    method: "post",
                    url: urlStr,
                    data: params,
                    headers: { 
                        "Content-Type": "multipart/form-data", 
                        suserId: that.$cookie.get('userId'),
                        userId: that.$cookie.get('userId'),
                        roleId: that.$cookie.get('roleId'),
                        adminId: that.$cookie.get('adminId'),
                    }
                }).then(function(res) {
                    console.log('------订单列表数据= ', zm_jsonToString(res.data));
    
                    if (res.data.status == 200) {
                        that.totalCount = res.data.totalCount;
                        console.log('订单列表.totalCount= ', that.totalCount);
                        // that.listnumber = res.data.totalCount;
                        res.data.list.forEach(function(item){
                            item.checkedflog = false;
                            item.supplierName = item.detailList[0].supplierName;
                        })
                        that.list = res.data.list;
                        that.loading = false;

                    }else{
                        that.$message.error(res.data.message);
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        //请求：商品信息查询
        queryGoodsNote(newArr) {
            let data = new FormData();
            let that = this;
            // console.log(this.goodsListNote);
            let str = newArr.join(",");
            data.append('skuIds', str);
            this.$http({
                    method: "post",
                    url: baseapi.getgoodsmnote,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
                })
                .then(function(res) {
                    // console.log('---商品信息查询= '+res);
                    // that.fahuogoodsData = res.data.data;
                    if (Object.keys(res.data.data).length == 0) {
                        return false;
                    }
                    that.newarr = res.data.data;
                    for (let i = 0; i < that.list.length; i++) {
                        let aa = that.list[i].detailList[0].skuId
                        that.goodsnotegroup.push(that.newarr[aa]);
                    };
                    // sessionStorage.setItem("goodskey", JSON.stringify(that.goodsnotegroup));

                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        selectUp(userid){
            let data = new FormData();
            let that = this;
             that.upnote = {};
            this.$http({
                    method: "post",
                    url: baseapi.selectUp,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId: userid}
                }).then(function(res) {
                    // console.log(res);
                    if (res.data.status == 500) {
                        that.$message.error(res.data.message);
                        return false;
                    }
                    if (res.data.status == 505) {
                        that.$message.error("服务器异常");
                        return false;
                    }
                    if (res.data.status == 200) {       
                        that.upnote = {'headportrait':res.data.data.headportrait,'nickName':res.data.data.nickName,'id':res.data.data.id};
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        //请求：查询订单明细
        request_orderDetail(orderNo) {
           let that = this;
           that.loading = true;

            let params = new FormData();
            params.append('platform', 1);
            params.append('orderNo', orderNo);
            params.append("token", this.$cookie.get('token'));
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("supplierId", '2');
            }
            console.log('---查询订单明细' + zm_formDataToString(params));
            this.$http({
                    method: "post",
                    url: baseapi.orderDetail,
                    data: params,
                    // headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'), }
                })
                .then(function(res) {
                    console.log('---查询订单明细 res= '+ zm_jsonToString(res.data));
                    that.loading = false;
                    
                    if (res.status == 200  || res.status == "200") {
                        // let newArr = [];
                        // let orderData = res.data.data.detailList;
                        that.orderDetailInfo = res.data.data.detailList[0];

                        var logisticsNoList = that.orderDetailInfo.logisticsNo.split(',');
                        var logisticsNo = logisticsNoList[0];
                        if (logisticsNoList.length==1) {
                            document.write(str.substring(0,logisticsNo.length-2)); 	// 从第 5 个字符开始截取到第10个字符
                        }
                        console.log('---物流单号 logisticsNo= '+ logisticsNo);
                        that.request_orderWuLiu(orderNo, logisticsNo)

                    } else {
                        that.$message.error(res.data.message);
                    }
                }).catch(function(res){
                    that.loading = false;
                }); 
        },
        //订单物流
        orderGoodswuliu(orderNo, userid,skuid) {
            
            this.request_orderDetail(orderNo);
        },
        //请求：订单物流
        request_orderWuLiu(orderNo, logisticsNo) {

            let params = new FormData();
            let that = this;
            params.append('orderNo', orderNo);
            params.append('logisticsNo', logisticsNo);
            params.append('type', 1); // 目前支持有订单的
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append("supplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("supplierId", '1');
            }
            params.append("token", this.$cookie.get('token'));
            this.courierNumberlist = []; // 显示地址置空
            let urlStr = baseapi.logisticsList;  //baseapi.orderwuliu
            console.log('---订单物流 params= '+zm_formDataToString(params));

            this.$http({
                    method: "post",
                    url: urlStr,
                    data: params,
                })
                .then(function(res) {
                    console.log('---订单物流= '+zm_jsonToString(res.data));
                    if (res.data.status == 500) {
                        that.$message.error(res.data.message);
                        return false;
                    }
                    if (res.data.status == 505) {
                        that.$message.error("服务器异常");
                        return false;
                    }
                    if (res.data.status == 200) {  
                        let logisticsData = res.data;
                        let express       = res.data.express;

                        if(express.no != undefined && express.no != null){
                            that.courierNumber = logisticsNo;
                            that.courierServicesCompany = express.name;
                            that.courierNumberlist = logisticsData.list;
                        }else{
                            that.courierNumberlist = [];
                            that.courierServicesCompany = '上门自提';
                            that.courierNumber = null;
                        }
                    }
                }).catch(function(error) {
                    console.log(error);
                });
        },
        // 查询订单各状态数量 (原：baseapi.reqOrderNumber)
        reqOrderNum() {
            let that = this;
            let urlStr = baseapi.orderStatusNum;  
            let params = new FormData();
            params.append('page', 1);
            params.append('limit', 20);
            if (this.$cookie.get('supplierId')!=null && this.$cookie.get('supplierId')!='undefined') {
                params.append('sstatus', status);
            }
            if (this.$cookie.get('supplierId')!=null) {
                params.append("ssupplierId", this.$cookie.get('supplierId'));
            }else{
                params.append("ssupplierId", '1');
            }
            // console.log('---查询订单各状态数量 params=' + zm_formDataToString(params) +'\n urlStr= ', urlStr);
            this.$http({
                    method: "post",
                    url: urlStr,
                    data: params,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
                }).then(function(res) {
                    //console.log('---订单统计= ',zm_jsonToString(res.data));
                    if (res.data.status == 200) {
                        let list = res.data.data;
                        let allNumber = 0 ; 
                        for(let key  in list){
                            allNumber += list[key];
                        }
                        that.allNumber = allNumber;
                        //代付款 -1
                        //定单列表全部没返回 -- 自己去全部的长度
                        that.pendingpaymentNum = list[-1];
                        that.pendshippedNum = list['0'];
                        that.pendcomplete = list[7];
                        that.pendClose = list[-4];
                        that.pendprotection = list[8];
                        that.overfahuo = list[3];
                        that.yifahuostatus =  list[1];
                    }

                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        // 模式切换
        handleClick(tab, event) {
            console.log(tab.name);
            this.list = [];
            this.danShaiXuanarr = [];
            if (tab.name == -1) {
                this.shuaixuanid = -1;
                this.request_shuaixuanmethod(-1, 1);
            } else if (tab.name == 2) {
                this.shuaixuanid = '0';
                this.request_shuaixuanmethod('0', 1);
            } else if (tab.name == 3) {
                this.shuaixuanid = '1';
                this.request_shuaixuanmethod(1, 1);
            } else if (tab.name == 10) {
                this.shuaixuanid = 10;
                this.request_shuaixuanmethod(10, 1);
            } else if (tab.name == 1) {
                this.shuaixuanid = 1;
                this.request_shuaixuanmethod(1, 1);
            } else if (tab.name == 7) {
                this.shuaixuanid = 7;
                this.request_shuaixuanmethod(7, 1);

            } else if (tab.name == -4) {
                this.shuaixuanid = -4;
                this.request_shuaixuanmethod(-4, 1);
            } else if (tab.name == 8) {  
                this.shuaixuanid = 8;
                this.request_shuaixuanmethod(8, 1);

            }else if (tab.name == 11) { //收货
                this.shuaixuanid = 3;
                this.request_shuaixuanmethod(3, 1);

            } else {
                this.shuaixuanid = '';
                this.request_shuaixuanmethod('', 1);

            }
        },
        //表格
        toggleSelection(rows) {
            if (rows) {
                rows.forEach(row => {
                    this.$refs.multipleTable.toggleRowSelection(row);
                });
            } else {
                this.$refs.multipleTable.clearSelection();
            }
        },
        //发货商品点击事件
        handleSelectionChange(val) {

            console.log(val);
            //单商品回显设置  
            if(val.length != 0){
                if(val[0].logisticsNo != null && val[0].expressId != null){
                    this.kuaididanhao = val[0].logisticsNo;
                    this.expressdatavalue =  val[0].expressName;
                    this.expressdatavalueid = val[0].expressId;
                }
            }else{
                this.kuaididanhao = '';
                this.expressdatavalue = '';
            }
            let newArr = '';
            val.forEach(function(item, index) {
                newArr += item.skuId + ','
            })
            console.log(newArr);
            this.fahuogoodstr = newArr;
            // this.multipleSelection = val;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.request_shuaixuanmethod(this.shuaixuanid, val);
            this.thispageindex = val;
            console.log(`当前页: ${val}`);
        }
    }
}
</script>

<style>
.so_supplier{
    width: 120px;
}
.so_shop{
    width: 120px;
}

.newshoporder-tableall{
    border-bottom: 1px dotted #eee;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
}
.lastdl-dt-detail {
    cursor: pointer;
}

.lastdl-dt-detail:hover {
    font-weight: 500;
    color: #67C23A;
}

.mh-seewuliu {
    padding: 18px 20px 0;
    max-height: 400px;
    overflow-y: auto;
    cursor: pointer;
}

.mh-seewuliu ul li {
    list-style-type: disc;
    margin-bottom: 8px;
    line-height: 1.5rem;
}

.mh-seewuliu-div {
    color: #606266;
    text-align: center;
    font-size: 14px !important;
    font-weight: 600;
}

.mh-seewuliu-divtwo {
    text-align: center;
    margin-bottom: 8px;
}

.mh-seewuliu::-webkit-scrollbar {
    display: none
}
.mh-newshoporder-num{
    width: 12%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
     border-right: 1px solid #eee;
}
.mh-newshoporder-num dl dd{
    text-align: center;
}
.mh-newshoporder-num dl dt{
    text-align: center;
}

.newshoporder-note {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 12.5%;
    text-align: center;
    border-right: 1px solid #eee;
    box-sizing: border-box;
    padding: 4px 4px;
}
.newshoporder-tuiprice{
    width: 10%;
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    border-right: 1px solid #eee;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    justify-content: center;
}
.newshoporder-tuipriceyue{
    width: 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-right: 1px solid #eee;
    flex-wrap: wrap;
    justify-content: center;
    /* text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;*/
}
.newshoporder-tuipriceyue_span {
    color:#E6A23C;
    display: inline-block;
    width: 100%;
    text-align: center;
} 
.newshoporder-tab_shopOne-t{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 22%;
    color: #409eff;

}
.newshoporder-tab_shopOne-t span{
    text-align: center;
}
.newshoporder-tabone-f{
    width:65%
}     
.newshoporder-tabone-goods {
    width:100%;display:flex;justify-content: space-between; height:100px; 
      border-bottom: 1px solid #eee;
      border-right: 1px solid #eee;box-sizing:border-box
}
.newshoporder-tabone-f .newshoporder-tabone-goods:last-child{
  border-bottom:none;
}
.newshoporder-tabone-goodsdiv{
    width:68%;
    display:flex;
    align-items: center;
    padding:10px;
    box-sizing:border-box;
    margin-right: 10px;
}
.newshoporder-tabone-goodsdivtwo{
    width:10%; 
    min-width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #eee;
} 

.mh-order-status{
    display: inline-block;
    margin-bottom: 8px;
    color: #303133;
}
.mh_order_info{
    display: inline-block;
    margin-bottom: 8px;
    color: #303133;
    /* max-width: 30px; */
    /* background: yellow; */
}
.newshoporder-tabone-goodsdiv_dl{
    /* width: 70%; */
    min-width: 220px;
}
.newshoporder-tabone-goodsdiv_dl dd{
    display: flex
}

.mh-seewuliu-ulaa li span:nth-child(1){
    display:inline-block;
    width: 60px;
    text-align: left;
    overflow:hidden;
    text-overflow:ellipsis; 
    white-space:nowrap; 
}

.mh-seewuliu-ulaa li span:nth-child(2){
    display:inline-block;
    width: 120px;
    overflow:hidden;
    text-overflow:ellipsis; 
    white-space:nowrap; 

}

.mh-seewuliu-ulaa{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}
.mh-seewuliu-ulaa li {
    display: flex;
    align-items: center;
    list-style-type:none;
}
</style>