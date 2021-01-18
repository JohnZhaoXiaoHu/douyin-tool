<template>
<!-- 维权订单 -->
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
                    <!--会员设置-->

                    <div class="shuaixuan vip-alllist mh-order-hight">

                        <div class="m-search-box el-row el-row-my-div">
                            <div class="sx-input mh-order">
                                 <label class="el-form-item__label" style="width: 130px;">订单编号:</label>
                                <el-input v-model="orderparseFloat" placeholder=""></el-input>
                            </div>

                            <div>
                                <label class="el-form-item__label" style="width: 130px;">退款编号</label>
                                <el-input v-model="tuikuanparseFloat" placeholder=""></el-input>
                            </div>

                            <div>
                                <label class="el-form-item__label" style="width: 130px;">售后类型:</label>
                                <el-select v-model="souhouvalue" placeholder="请选择">
                                    <el-option
                                            v-for="item in options"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                        </div>

                        <!-- 两行-->
                        <div class="m-search-box el-row el-row-my-div">
                            <div class="vip-item-list_time mh-order mihuanorder-time mh-shoporderlist-xx">
                                <label class="el-form-item__label" style="width: 130px;">申请时间:</label>
                                <el-date-picker
                                       value-format="timestamp"             
                                        v-model="shouhoutime"
                                        type="datetimerange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        style="width: 100%"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </div>


                        </div>

                        <div class="vip-item-list_time mh-order-shuai" style="padding-left:100px">
                                <button type="button" class="el-button el-button--primary el-button--small">
                                    <span @click="selectdata">筛选</span></button>
                                <button type="button" class="el-button el-button--text">
                                    <span @click="clearshuai">清空筛选条件</span></button>          
                        </div>
                        <!---->
                    </div>

                    <!-- 维权订单详情页面 -->
                      <!--筛选-->

                <div class="ordersafe-main">  
                    <el-tabs type="border-card" v-model="activeName"  @tab-click="handleClick" >
                        <el-tab-pane label="全部" name="1">
                            <!--全部-->
                            <ul class="mhsafe-order_ul">
                                <li class="mh-order_ul-one">商品</li>
                                <!-- <li class="mh-order_ul-two">订单金额</li> -->
                                <li class="mh-order_ul-there" style="text-indent: 4.5rem;">单价/数量</li>
                                <li class="mh-order_ul-four">买家信息</li>
                                <li class="mh-order_ul-five">退款金额</li>
                                <li class="mh-order_ul-sex">售后类型</li>
                                <li class="mh-order_ul-seven">售后状态</li>
                                <li class="mh-order_ul-night">操作</li>
                            </ul>
                            <div class="mhorder-table" v-show="listdata.length != 0 " v-for="(item,index) of listdata" :key="index" >
                                <div class="mhorder-table-top">
                                    <div class="mhorder-table-top-div">
                                        <dl v-if="item.no">
                                            <dt>退款编号 :&nbsp; </dt>
                                            <dd>{{item.no == undefined || item.no == null || item.no == '' ? '----' : item.no}}</dd>
                                        </dl>
                                        <dl v-if="item.orderNo"> 
                                            <dt>订单号 :&nbsp;</dt>
                                            <dd>{{item.orderNo}}</dd>
                                        </dl>
                                        <dl v-if="item.createTime != null">
                                            <dt>申请时间 :&nbsp; </dt>
                                            <dd>{{item.createTime.time | formatDate}}</dd>
                                        </dl>
                                        <dl v-if="item.cancelTime">
                                            <dt>处理时间 :&nbsp; </dt>
                                            <dd>{{item.cancelTime.time | formatDate}}</dd>
                                        </dl>
                                    </div>
                                    <dl class="lastdl">
                                        <dt @click="Seedetails(item.no,item.type)">查看详情</dt>
                                        <dd @click="Beizhu(item.no)" style="cursor: pointer;">备注</dd>
                                        <!-- <dd style="margin-left:10px;cursor: pointer;">打印发货单</dd> -->
                                    </dl>
                                    
                                </div>
                                <div class="mhorder-table-bottomfusafe">
                                    <div class="mhorder-table-bottomfu">
                                        <div  class="mhorder-table-bottom"  v-for="(skuitem,skuindex) of item.detailList" :key="skuindex"> 
                                            <div class="mhorder-table-bottom-div" style="width:80%">
                                                <img :src="skuitem.imageurl" alt="" width="50" height="50" class="ordersafe-tab-img">
                                                <dl class="mhorder-table-bottom-div_dl">
                                                    <dt class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">商品名称 : </span><span class="mhorder-table-bottom-divdtspan">{{skuitem.name}}</span></dt>
                                                    <dd class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">商品ID : </span><span>{{skuitem.skuId}}</span></dd>
                                                    <!-- <dd><span>规格: </span><span>红/M</span></dd> -->
                                                    <!-- <dd class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">退款数量 : </span><span>{{skuitem.quantity}}</span></dd> -->
                                                </dl>
                                            </div>   
                                            <div class="orderdafe-price" style="width:10%">
                                                <span class="orderdafe-price-fhao">¥</span>{{parseFloat(skuitem.moneyTotal/100)}}
                                            </div>
                                            <div class="orderdafe-num" style="width:10%">
                                            1
                                            </div>
                                        </div>
                                     </div>
                                    <div class="orderdafe-note">
                                        <div>
                                            <img :src="item.userHeadportrait" alt="" width="40" height="40" class="ordersafe-tab-img">
                                            <dl>
                                                <dt><span>会员ID: </span><span>{{item.userId}} </span></dt>
                                                <dd style="text-align: left;"><span>昵称:</span><span>{{item.userNickName}}</span></dd>                                        
                                            </dl> 
                                        </div>
                                        <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                <div style="display:flex;padding:20px">
                                                    <img :src="upnote.headportrait" alt="" width="40" height="40" style="margin-right:10px">
                                                    <ul class="mh-seewuliu-ulaa">
                                                        <li><span class="mh-order-note-span">上级昵称 : </span><span>{{upnote.nickName}}</span></li>
                                                        <li><span class="mh-order-note-span">上级ID : </span><span>{{upnote.id}}</span></li>                                      
                                                    </ul>
                                                </div>     
                                                <div  slot="reference" style="color: #409eff;cursor: pointer;"  @click="selectUp(item.userId)">查看上级</div>       
                                        </el-popover>
                                    </div>

                                    <div class="orderdafe-tuiprice">
                                        <span class="orderdafe-price-fhao">¥</span>{{ item.money == undefined || item.money == null ? '0' : parseFloat(item.money/100)}}
                                    </div>

                                    <div class="orderdafe-tuikaun">
                                         {{item.type == 1 ? '仅退款': item.type == 2 ? '退货退款' : item.type == 3 ? '换货' : ''}}
                                        <el-popover
                                            placement="left"
                                            width="100"
                                            trigger="click"
                                            popper-class="mh-triclass"
                                        >                       
                                        <div class="mh-seewuliu">
                                            <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                            <div class="mh-seewuliu-divtwo">订单号 : {{courierparseFloat}} </div>
                                            <ul>
                                                <li v-for="(listitem,listindex) of courierparseFloatlist" :key="listindex">
                                                   <div>{{listitem.context}}</div>
                                                   <div>{{listitem.logisticsTime |formatDate}}</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div @click="orderGoodswuliu(item.no,item.userId)">查看物流</div>                           
                                        </el-popover> 
                                    </div>

                                    <div class="orderdafe-status" v-if="item.status == 0">处理中 </div> 

                                 
                                    <div class="orderdafe-status" v-if="item.status == 1 && item.course !=2   && item.course !=0 && item.course !=3">审核通过</div>                               
                                    <div class="orderdafe-status" v-if="item.status == -1">退款关闭</div>
                                    <div class="orderdafe-status" v-if="item.status == 2">正在退款  </div>
                                    <div class="orderdafe-status" v-if="item.status == -2">用户取消   </div>
                                    <div class="orderdafe-status" v-if="item.status == 3">退款完成   </div>
                                    <div class="orderdafe-status" v-if="item.status == null">暂无状态</div>


                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 0">  售后待收货 </div>
                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 3">  售后待退款 </div>

                                    <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 0 && item.course == 0"> 
                                        <el-button @click="tHtKok(item.no,item.orderMoneyTotalreal)" type="primary" size="mini" class="orderdafe-edit-btn">同意</el-button>    
                                        <el-button  @click="juJmethod(item.no,item.orderMoneyTotalreal,item.type)" type="danger" class="orderdafe-edit-btn" size="mini">拒绝</el-button>                          
                                    </div>

                                     <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 1 && item.course == 0"> 
                                        <el-button @click="querenSHO(item.no,item.userId)" type="primary" size="mini" class="orderdafe-edit-btn">确认收货</el-button>                                      
                                    </div>
                 
                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 1"> 
                                       <span>配送中</span>     
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 2"> 
                                       <span>退款完成</span>     
                                    </div>

                                    <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 1 && item.course == 3"> 
                                        <el-button @click="okTuiPrice(item.userId,item.no)" type="primary" size="mini" class="orderdafe-edit-btn">确认退款</el-button>                                   
                                    </div>

                                     <div class="orderdafe-edit" v-if="item.type == 2  && item.status ==1 && item.course ==4"> 
                                        <span>确认退款</span>
                                     </div>

                                    <!-- <div class="orderdafe-edit" v-if="item.type == 2  && item.status == -1"> 
                                        <span style="color:#f56c6c">拒绝</span>
                                    </div>    -->
  
                                    <!-- <div class="orderdafe-edit" v-if="item.type == 3  && item.status == -1 "> 
                                           <span style="color:#f56c6c">拒绝</span>
                                    </div> -->

                                    <div class="orderdafe-editbtn" v-if="item.type == 1 && item.status==1 &&  item.course != 2"> 
                                        <el-button @click="okTuiPrice(item.userId,item.no)" type="primary" size="mini" class="orderdafe-edit-btn">确认退款</el-button>                              
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 1 && item.status==1 && item.course ==2"> 
                                       <span>退款完成</span>
                                    </div>
                              
                                    <div class="orderdafe-editbtn" v-if="item.type == 1 && item.status== 0"> 
                                        <el-button type="primary" size="mini" class="orderdafe-edit-btn" @click="oktuiK(item.no,item.orderMoneyTotalreal,item.type)">同意</el-button>
                                        <el-button  @click="juJmethod(item.no,item.orderMoneyTotalreal,item.type)" type="danger" size="mini"  class="orderdafe-edit-btn">拒绝</el-button>
                                    </div>

                                    <!-- <div class="orderdafe-edit" v-if="item.type == 1 && item.status == -1 ">
                                        <span style="color:#f56c6c">退款关闭</span>
                                    </div> -->

                                    <div class="orderdafe-edit" v-if="item.type == 3 && item.status ==1 && item.course == 1"> 
                                        <span>换货配送中</span>
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 3 && item.status ==1 && item.course == 2"> 
                                        <span>换货完成</span>
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.status == 3">
                                        退款完成
                                    </div>


                               </div>

                                    
                             
                            </div>

                            <div v-if="listdata.length == 0" class="mhsafe-orderxxx">
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/order.png" alt="" srcset="">  
                            </div>    

                            <div>
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCount">
                                </el-pagination>
                            </div>       
                            </div>
                            <!--全部over-->
                        </el-tab-pane>
                        <el-tab-pane label="维权处理中" name="2">
                            <!--全部-->
                              <!--全部-->
                            <ul class="mhsafe-order_ul">
                                <li class="mh-order_ul-one">商品</li>
                                <!-- <li class="mh-order_ul-two">订单金额</li> -->
                                <li class="mh-order_ul-there" style="text-indent: 4.5rem;">单价/数量</li>
                                <li class="mh-order_ul-four">买家信息</li>
                                <li class="mh-order_ul-five">退款金额</li>
                                <li class="mh-order_ul-sex">售后类型</li>
                                <li class="mh-order_ul-seven">售后状态</li>
                                <li class="mh-order_ul-night">操作</li>
                            </ul>
                            <div class="mhorder-table" v-show="listdata.length != 0 " v-for="(item,index) of listdata" :key="index" >
                                <div class="mhorder-table-top">
                                    <div class="mhorder-table-top-div">
                                        <dl>
                                            <dt>退款编号 :&nbsp; </dt>
                                            <dd>{{item.no == undefined || item.no == null || item.no == '' ? '----' : item.no}}</dd>
                                        </dl>
                                    <dl>
                                        <dt>订单号 :&nbsp;</dt>
                                        <dd>{{item.orderNo}}</dd>
                                    </dl>
                                     <dl>
                                        <dt>申请时间 :&nbsp; </dt>
                                        <dd>{{item.createTime.time|formatDate}}</dd>
                                    </dl>
                                    </div>
                                    <dl class="lastdl">
                                        <dt @click="Seedetails(item.no,item.type)">查看详情</dt>
                                        <dd @click="Beizhu(item.no)" style="cursor: pointer;">备注</dd>
                                        <!-- <dd style="margin-left:10px;cursor: pointer;">打印发货单</dd> -->
                                    </dl>
                                    
                                </div>
                                <div class="mhorder-table-bottomfusafe">
                                    <div class="mhorder-table-bottomfu">
                                        <div  class="mhorder-table-bottom"  v-for="(skuitem,skuindex) of item.detailList" :key="skuindex"> 
                                            <div class="mhorder-table-bottom-div" style="width:80%">
                                                <img :src="skuitem.imageurl" alt="" width="50" height="50" class="ordersafe-tab-img">
                                                <dl class="mhorder-table-bottom-div_dl">
                                                    <dt class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">商品名称 : </span><span class="mhorder-table-bottom-divdtspan">{{skuitem.name}}</span></dt>
                                                    <dd class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">商品ID : </span><span>{{skuitem.skuId}}</span></dd>
                                                    <!-- <dd><span>规格: </span><span>红/M</span></dd> -->
                                                    <!-- <dd class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">退款数量 : </span><span>{{skuitem.quantity}}</span></dd> -->
                                                </dl>
                                            </div>   
                                            <div class="orderdafe-price" style="width:10%">
                                                <span class="orderdafe-price-fhao">¥</span>{{parseFloat(skuitem.moneyTotal/100)}}
                                            </div>
                                            <div class="orderdafe-num" style="width:10%">
                                            1
                                            </div>
                                        </div>
                                     </div>
                                    <div class="orderdafe-note">
                                        <div>
                                            <img :src="item.userHeadportrait" alt="" width="40" height="40" class="ordersafe-tab-img">
                                            <dl>
                                                <dt><span>会员ID: </span><span>{{item.userId}} </span></dt>
                                                <dd style="text-align: left;"><span>昵称:</span><span>{{item.userNickName}}</span></dd>                                        
                                            </dl> 
                                        </div>
                                        <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                <div style="display:flex;padding:20px">
                                                    <img :src="upnote.headportrait" alt="" width="40" height="40" style="margin-right:10px">
                                                    <ul class="mh-seewuliu-ulaa">
                                                        <li><span class="mh-order-note-span">上级昵称 : </span><span>{{upnote.nickName}}</span></li>
                                                        <li><span class="mh-order-note-span">上级ID : </span><span>{{upnote.id}}</span></li>                                      
                                                    </ul>
                                                </div>     
                                                <div  slot="reference" style="color: #409eff;cursor: pointer;"  @click="selectUp(item.userId)">查看上级</div>       
                                        </el-popover>
                                    </div>

                                    <div class="orderdafe-tuiprice">
                                        <span class="orderdafe-price-fhao">¥</span>{{ item.money == undefined || item.money == null ? '0' : parseFloat(item.money/100)}}
                                    </div>

                                    <div class="orderdafe-tuikaun">
                                         {{item.type == 1 ? '仅退款': item.type == 2 ? '退货退款' : item.type == 3 ? '换货' : ''}}
                                        <el-popover
                                            placement="left"
                                            width="100"
                                            trigger="click"
                                            popper-class="mh-triclass"
                                        >                       
                                        <div class="mh-seewuliu">
                                            <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                            <div class="mh-seewuliu-divtwo">订单号 : {{courierparseFloat}} </div>
                                            <ul>
                                                <li v-for="(listitem,listindex) of courierparseFloatlist" :key="listindex">
                                                   <div>{{listitem.context}}</div>
                                                   <div>{{listitem.logisticsTime |formatDate}}</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div @click="orderGoodswuliu(item.no,item.userId)">查看物流</div>                           
                                        </el-popover> 
                                    </div>

                                    <div class="orderdafe-status" v-if="item.status == 0">处理中 </div> 

                                 
                                    <div class="orderdafe-status" v-if="item.status == 1 && item.course !=2   && item.course !=0 && item.course !=3">审核通过</div>                               
                                    <div class="orderdafe-status" v-if="item.status == -1">退款关闭</div>
                                    <div class="orderdafe-status" v-if="item.status == 2">正在退款  </div>
                                    <div class="orderdafe-status" v-if="item.status == -2">用户取消   </div>
                                    <div class="orderdafe-status" v-if="item.status == 3">退款完成   </div>
                                    <div class="orderdafe-status" v-if="item.status == null">暂无状态</div>


                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 0">  售后待收货 </div>
                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 3">  售后待退款 </div>

                                    <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 0 && item.course == 0"> 
                                        <el-button @click="tHtKok(item.no,item.orderMoneyTotalreal)" type="primary" size="mini" class="orderdafe-edit-btn">同意</el-button>    
                                        <el-button  @click="juJmethod(item.no,item.orderMoneyTotalreal,item.type)" type="danger" class="orderdafe-edit-btn" size="mini">拒绝</el-button>                          
                                    </div>

                                     <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 1 && item.course == 0"> 
                                        <el-button @click="querenSHO(item.no,item.userId)" type="primary" size="mini" class="orderdafe-edit-btn">确认收货</el-button>                                      
                                    </div>
                 
                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 1"> 
                                       <span>配送中</span>     
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 2"> 
                                       <span>退款完成</span>     
                                    </div>

                                    <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 1 && item.course == 3"> 
                                        <el-button @click="okTuiPrice(item.userId,item.no)" type="primary" size="mini" class="orderdafe-edit-btn">确认退款</el-button>                                   
                                    </div>

                                     <div class="orderdafe-edit" v-if="item.type == 2  && item.status ==1 && item.course ==4"> 
                                        <span>确认退款</span>
                                     </div>

                                    <!-- <div class="orderdafe-edit" v-if="item.type == 2  && item.status == -1"> 
                                        <span style="color:#f56c6c">拒绝</span>
                                    </div>    -->
  
                                    <!-- <div class="orderdafe-edit" v-if="item.type == 3  && item.status == -1 "> 
                                           <span style="color:#f56c6c">拒绝</span>
                                    </div> -->

                                    <div class="orderdafe-editbtn" v-if="item.type == 1 && item.status==1 &&  item.course != 2"> 
                                        <el-button @click="okTuiPrice(item.userId,item.no)" type="primary" size="mini" class="orderdafe-edit-btn">确认退款</el-button>                              
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 1 && item.status==1 && item.course ==2"> 
                                       <span>退款完成</span>
                                    </div>
                              
                                    <div class="orderdafe-editbtn" v-if="item.type == 1 && item.status== 0"> 
                                        <el-button type="primary" size="mini" class="orderdafe-edit-btn" @click="oktuiK(item.no,item.orderMoneyTotalreal,item.type)">同意</el-button>
                                        <el-button  @click="juJmethod(item.no,item.orderMoneyTotalreal,item.type)" type="danger" size="mini"  class="orderdafe-edit-btn">拒绝</el-button>
                                    </div>

                                    <!-- <div class="orderdafe-edit" v-if="item.type == 1 && item.status == -1 ">
                                        <span style="color:#f56c6c">退款关闭</span>
                                    </div> -->

                                    <div class="orderdafe-edit" v-if="item.type == 3 && item.status ==1 && item.course == 1"> 
                                        <span>换货配送中</span>
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 3 && item.status ==1 && item.course == 2"> 
                                        <span>换货完成</span>
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.status == 3">
                                        退款完成
                                    </div>


                               </div>

                                    
                             
                            </div>

                            <div v-if="listdata.length ==0" class="mhsafe-orderxxx">
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/order.png" alt="" srcset="">  
                            </div>    

                            <div>
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCount">
                                </el-pagination>
                            </div>       
                            </div>
                            <!--全部over-->
                            <!--全部over-->
                        </el-tab-pane>
                        <el-tab-pane label="维权成功" name="3">
                            <!--全部-->
                             <!--全部-->
                            <ul class="mhsafe-order_ul">
                                <li class="mh-order_ul-one">商品</li>
                                <!-- <li class="mh-order_ul-two">订单金额</li> -->
                                <li class="mh-order_ul-there" style="text-indent: 4.5rem;">单价/数量</li>
                                <li class="mh-order_ul-four">买家信息</li>
                                <li class="mh-order_ul-five">退款金额</li>
                                <li class="mh-order_ul-sex">售后类型</li>
                                <li class="mh-order_ul-seven">售后状态</li>
                                <li class="mh-order_ul-night">操作</li>
                            </ul>
                            <div class="mhorder-table" v-show="listdata.length != 0 " v-for="(item,index) of listdata" :key="index" >
                                <div class="mhorder-table-top">
                                    <div class="mhorder-table-top-div">
                                        <dl>
                                            <dt>退款编号 :&nbsp; </dt>
                                            <dd>{{item.no == undefined || item.no == null || item.no == '' ? '----' : item.no}}</dd>
                                        </dl>
                                    <dl>
                                        <dt>订单号 :&nbsp;</dt>
                                        <dd>{{item.orderNo}}</dd>
                                    </dl>
                                     <dl>
                                        <dt>申请时间 :&nbsp; </dt>
                                        <dd>{{item.createTime.time|formatDate}}</dd>
                                    </dl>
                                     <dl v-if="item.cancelTime">
                                        <dt>成功时间 :&nbsp; </dt>
                                        <dd>{{item.cancelTime.time|formatDate}}</dd>
                                    </dl>
                                    </div>
                                    <dl class="lastdl">
                                        <dt @click="Seedetails(item.no,item.type)">查看详情</dt>
                                        <dd @click="Beizhu(item.no)" style="cursor: pointer;">备注</dd>
                                        <!-- <dd style="margin-left:10px;cursor: pointer;">打印发货单</dd> -->
                                    </dl>
                                    
                                </div>
                                <div class="mhorder-table-bottomfusafe">
                                    <div class="mhorder-table-bottomfu">
                                        <div  class="mhorder-table-bottom"  v-for="(skuitem,skuindex) of item.detailList" :key="skuindex"> 
                                            <div class="mhorder-table-bottom-div" style="width:80%">
                                                <img :src="skuitem.imageurl" alt="" width="50" height="50" class="ordersafe-tab-img">
                                                <dl class="mhorder-table-bottom-div_dl">
                                                    <dt class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">商品名称 : </span><span class="mhorder-table-bottom-divdtspan">{{skuitem.name}}</span></dt>
                                                    <dd class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">商品ID : </span><span>{{skuitem.skuId}}</span></dd>
                                                    <!-- <dd><span>规格: </span><span>红/M</span></dd> -->
                                                    <!-- <dd class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">退款数量 : </span><span>{{skuitem.quantity}}</span></dd> -->
                                                </dl>
                                            </div>   
                                            <div class="orderdafe-price" style="width:10%">
                                                <span class="orderdafe-price-fhao">¥</span>{{parseFloat(skuitem.moneyTotal/100)}}
                                            </div>
                                            <div class="orderdafe-num" style="width:10%">
                                            1
                                            </div>
                                        </div>
                                     </div>
                                    <div class="orderdafe-note">
                                        <div>
                                            <img :src="item.userHeadportrait" alt="" width="40" height="40" class="ordersafe-tab-img">
                                            <dl>
                                                <dt><span>会员ID: </span><span>{{item.userId}} </span></dt>
                                                <dd style="text-align: left;"><span>昵称:</span><span>{{item.userNickName}}</span></dd>                                        
                                            </dl> 
                                        </div>
                                        <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                <div style="display:flex;padding:20px">
                                                    <img :src="upnote.headportrait" alt="" width="40" height="40" style="margin-right:10px">
                                                    <ul class="mh-seewuliu-ulaa">
                                                        <li><span class="mh-order-note-span">上级昵称 : </span><span>{{upnote.nickName}}</span></li>
                                                        <li><span class="mh-order-note-span">上级ID : </span><span>{{upnote.id}}</span></li>                                      
                                                    </ul>
                                                </div>     
                                                <div  slot="reference" style="color: #409eff;cursor: pointer;"  @click="selectUp(item.userId)">查看上级</div>       
                                        </el-popover> 
                                    </div>

                                    <div class="orderdafe-tuiprice">
                                        <span class="orderdafe-price-fhao">¥</span>{{ item.money == undefined || item.money == null ? '0' : parseFloat(item.money/100)}}
                                    </div>

                                    <div class="orderdafe-tuikaun">
                                         {{item.type == 1 ? '仅退款': item.type == 2 ? '退货退款' : item.type == 3 ? '换货' : ''}}
                                        <el-popover
                                            placement="left"
                                            width="100"
                                            trigger="click"
                                            popper-class="mh-triclass"
                                        >                       
                                        <div class="mh-seewuliu">
                                            <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                            <div class="mh-seewuliu-divtwo">订单号 : {{courierparseFloat}} </div>
                                            <ul>
                                                <li v-for="(listitem,listindex) of courierparseFloatlist" :key="listindex">
                                                   <div>{{listitem.context}}</div>
                                                   <div>{{listitem.logisticsTime |formatDate}}</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div @click="orderGoodswuliu(item.no,item.userId)">查看物流</div>                           
                                        </el-popover> 
                                    </div>

                                    <div class="orderdafe-status" v-if="item.status == 0">处理中 </div> 

                                 
                                    <div class="orderdafe-status" v-if="item.status == 1 && item.course !=2   && item.course !=0 && item.course !=3">审核通过</div>                               
                                    <div class="orderdafe-status" v-if="item.status == -1">退款关闭</div>
                                    <div class="orderdafe-status" v-if="item.status == 2">正在退款  </div>
                                    <div class="orderdafe-status" v-if="item.status == -2">用户取消   </div>
                                    <div class="orderdafe-status" v-if="item.status == 3">退款完成   </div>
                                    <div class="orderdafe-status" v-if="item.status == null">暂无状态</div>


                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 0">  售后待收货 </div>
                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 3">  售后待退款 </div>

                                    <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 0 && item.course == 0"> 
                                        <el-button @click="tHtKok(item.no,item.orderMoneyTotalreal)" type="primary" size="mini" class="orderdafe-edit-btn">同意</el-button>    
                                        <el-button  @click="juJmethod(item.no,item.orderMoneyTotalreal,item.type)" type="danger" class="orderdafe-edit-btn" size="mini">拒绝</el-button>                          
                                    </div>

                                     <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 1 && item.course == 0"> 
                                        <el-button @click="querenSHO(item.no,item.userId)" type="primary" size="mini" class="orderdafe-edit-btn">确认收货</el-button>                                      
                                    </div>
                 
                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 1"> 
                                       <span>配送中</span>     
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 2"> 
                                       <span>退款完成</span>     
                                    </div>

                                    <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 1 && item.course == 3"> 
                                        <el-button @click="okTuiPrice(item.userId,item.no)" type="primary" size="mini" class="orderdafe-edit-btn">确认退款</el-button>                                   
                                    </div>

                                     <div class="orderdafe-edit" v-if="item.type == 2  && item.status ==1 && item.course ==4"> 
                                        <span>确认退款</span>
                                     </div>

                                    <!-- <div class="orderdafe-edit" v-if="item.type == 2  && item.status == -1"> 
                                        <span style="color:#f56c6c">拒绝</span>
                                    </div>    -->
  
                                    <!-- <div class="orderdafe-edit" v-if="item.type == 3  && item.status == -1 "> 
                                           <span style="color:#f56c6c">拒绝</span>
                                    </div> -->

                                    <div class="orderdafe-editbtn" v-if="item.type == 1 && item.status==1 &&  item.course != 2"> 
                                        <el-button @click="okTuiPrice(item.userId,item.no)" type="primary" size="mini" class="orderdafe-edit-btn">确认退款</el-button>                              
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 1 && item.status==1 && item.course ==2"> 
                                       <span>退款完成</span>
                                    </div>
                              
                                    <div class="orderdafe-editbtn" v-if="item.type == 1 && item.status== 0"> 
                                        <el-button type="primary" size="mini" class="orderdafe-edit-btn" @click="oktuiK(item.no,item.orderMoneyTotalreal,item.type)">同意</el-button>
                                        <el-button  @click="juJmethod(item.no,item.orderMoneyTotalreal,item.type)" type="danger" size="mini"  class="orderdafe-edit-btn">拒绝</el-button>
                                    </div>

                                    <!-- <div class="orderdafe-edit" v-if="item.type == 1 && item.status == -1 ">
                                        <span style="color:#f56c6c">退款关闭</span>
                                    </div> -->

                                    <div class="orderdafe-edit" v-if="item.type == 3 && item.status ==1 && item.course == 1"> 
                                        <span>换货配送中</span>
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 3 && item.status ==1 && item.course == 2"> 
                                        <span>换货完成</span>
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.status == 3">
                                        退款完成
                                    </div>


                               </div>

                                    
                             
                            </div>

                            <div v-if="listdata.length ==0" class="mhsafe-orderxxx">
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/order.png" alt="" srcset="">  
                            </div>    

                            <div>
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCount">
                                </el-pagination>
                            </div>       
                            </div>
                            <!--全部over-->
                            <!--全部over-->
                        </el-tab-pane>
                        <el-tab-pane label="维权关闭" name="4">
                            <!--全部-->
                            <!--全部-->
                            <ul class="mhsafe-order_ul">
                                <li class="mh-order_ul-one">商品</li>
                                <!-- <li class="mh-order_ul-two">订单金额</li> -->
                                <li class="mh-order_ul-there" style="text-indent: 4.5rem;">单价/数量</li>
                                <li class="mh-order_ul-four">买家信息</li>
                                <li class="mh-order_ul-five">退款金额</li>
                                <li class="mh-order_ul-sex">售后类型</li>
                                <li class="mh-order_ul-seven">售后状态</li>
                                <li class="mh-order_ul-night">操作</li>
                            </ul>
                            <div class="mhorder-table" v-show="listdata.length != 0 " v-for="(item,index) of listdata" :key="index" >
                                <div class="mhorder-table-top">
                                    <div class="mhorder-table-top-div">
                                        <dl>
                                            <dt>退款编号 :&nbsp; </dt>
                                            <dd>{{item.no == undefined || item.no == null || item.no == '' ? '----' : item.no}}</dd>
                                        </dl>
                                    <dl>
                                        <dt>订单号 :&nbsp;</dt>
                                        <dd>{{item.orderNo}}</dd>
                                    </dl>
                                     <dl>
                                        <dt>申请时间 :&nbsp; </dt>
                                        <dd>{{item.createTime.time|formatDate}}</dd>
                                    </dl>

                                     <dl v-if="item.cancelTime">
                                        <dt>关闭时间 :&nbsp; </dt>
                                        <dd>{{item.cancelTime.time|formatDate}}</dd>
                                    </dl>
                                    </div>
                                    <dl class="lastdl">
                                        <dt @click="Seedetails(item.no,item.type)">查看详情</dt>
                                        <dd @click="Beizhu(item.no)" style="cursor: pointer;">备注</dd>
                                        <!-- <dd style="margin-left:10px;cursor: pointer;">打印发货单</dd> -->
                                    </dl>
                                    
                                </div>
                                <div class="mhorder-table-bottomfusafe">
                                    <div class="mhorder-table-bottomfu">
                                        <div  class="mhorder-table-bottom"  v-for="(skuitem,skuindex) of item.detailList" :key="skuindex"> 
                                            <div class="mhorder-table-bottom-div" style="width:80%">
                                                <img :src="skuitem.imageurl" alt="" width="50" height="50" class="ordersafe-tab-img">
                                                <dl class="mhorder-table-bottom-div_dl">
                                                    <dt class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">商品名称 : </span><span class="mhorder-table-bottom-divdtspan">{{skuitem.name}}</span></dt>
                                                    <dd class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">商品ID : </span><span>{{skuitem.skuId}}</span></dd>
                                                    <!-- <dd><span>规格: </span><span>红/M</span></dd> -->
                                                    <!-- <dd class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">退款数量 : </span><span>{{skuitem.quantity}}</span></dd> -->
                                                </dl>
                                            </div>   
                                            <div class="orderdafe-price" style="width:10%">
                                                <span class="orderdafe-price-fhao">¥</span>{{parseFloat(skuitem.moneyTotal/100)}}
                                            </div>
                                            <div class="orderdafe-num" style="width:10%">
                                            1
                                            </div>
                                        </div>
                                     </div>
                                    <div class="orderdafe-note">
                                       <div>
                                            <img :src="item.userHeadportrait" alt="" width="40" height="40" class="ordersafe-tab-img">
                                            <dl>
                                                <dt><span>会员ID: </span><span>{{item.userId}} </span></dt>
                                                <dd style="text-align: left;"><span>昵称:</span><span>{{item.userNickName}}</span></dd>                                        
                                            </dl> 
                                        </div>
                                        <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                <div style="display:flex;padding:20px">
                                                    <img :src="upnote.headportrait" alt="" width="40" height="40" style="margin-right:10px">
                                                    <ul class="mh-seewuliu-ulaa">
                                                        <li><span class="mh-order-note-span">上级昵称 : </span><span>{{upnote.nickName}}</span></li>
                                                        <li><span class="mh-order-note-span">上级ID : </span><span>{{upnote.id}}</span></li>                                      
                                                    </ul>
                                                </div>     
                                                <div  slot="reference" style="color: #409eff;cursor: pointer;"  @click="selectUp(item.userId)">查看上级</div>       
                                        </el-popover>
                                    </div>

                                    <div class="orderdafe-tuiprice">
                                        <span class="orderdafe-price-fhao">¥</span>{{ item.money == undefined || item.money == null ? '0' : parseFloat(item.money/100)}}
                                    </div>

                                    <div class="orderdafe-tuikaun">
                                         {{item.type == 1 ? '仅退款': item.type == 2 ? '退货退款' : item.type == 3 ? '换货' : ''}}
                                        <el-popover
                                            placement="left"
                                            width="100"
                                            trigger="click"
                                            popper-class="mh-triclass"
                                        >                       
                                        <div class="mh-seewuliu">
                                            <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                            <div class="mh-seewuliu-divtwo">订单号 : {{courierparseFloat}} </div>
                                            <ul>
                                                <li v-for="(listitem,listindex) of courierparseFloatlist" :key="listindex">
                                                   <div>{{listitem.context}}</div>
                                                   <div>{{listitem.logisticsTime |formatDate}}</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div @click="orderGoodswuliu(item.no,item.userId)">查看物流</div>                           
                                        </el-popover> 
                                    </div>

                                    <div class="orderdafe-status" v-if="item.status == 0">处理中 </div> 

                                 
                                    <div class="orderdafe-status" v-if="item.status == 1 && item.course !=2   && item.course !=0 && item.course !=3">审核通过</div>                               
                                    <div class="orderdafe-status" v-if="item.status == -1">退款关闭</div>
                                    <div class="orderdafe-status" v-if="item.status == 2">正在退款  </div>
                                    <div class="orderdafe-status" v-if="item.status == -2">用户取消   </div>
                                    <div class="orderdafe-status" v-if="item.status == 3">退款完成   </div>
                                    <div class="orderdafe-status" v-if="item.status == null">暂无状态</div>


                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 0">  售后待收货 </div>
                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 3">  售后待退款 </div>

                                    <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 0 && item.course == 0"> 
                                        <el-button @click="tHtKok(item.no,item.orderMoneyTotalreal)" type="primary" size="mini" class="orderdafe-edit-btn">同意</el-button>    
                                        <el-button  @click="juJmethod(item.no,item.orderMoneyTotalreal,item.type)" type="danger" class="orderdafe-edit-btn" size="mini">拒绝</el-button>                          
                                    </div>

                                     <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 1 && item.course == 0"> 
                                        <el-button @click="querenSHO(item.no,item.userId)" type="primary" size="mini" class="orderdafe-edit-btn">确认收货</el-button>                                      
                                    </div>
                 
                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 1"> 
                                       <span>配送中</span>     
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 2"> 
                                       <span>退款完成</span>     
                                    </div>

                                    <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 1 && item.course == 3"> 
                                        <el-button @click="okTuiPrice(item.userId,item.no)" type="primary" size="mini" class="orderdafe-edit-btn">确认退款</el-button>                                   
                                    </div>

                                     <div class="orderdafe-edit" v-if="item.type == 2  && item.status ==1 && item.course ==4"> 
                                        <span>确认退款</span>
                                     </div>

                                    <!-- <div class="orderdafe-edit" v-if="item.type == 2  && item.status == -1"> 
                                        <span style="color:#f56c6c">拒绝</span>
                                    </div>    -->
  
                                    <!-- <div class="orderdafe-edit" v-if="item.type == 3  && item.status == -1 "> 
                                           <span style="color:#f56c6c">拒绝</span>
                                    </div> -->

                                    <div class="orderdafe-editbtn" v-if="item.type == 1 && item.status==1 &&  item.course != 2"> 
                                        <el-button @click="okTuiPrice(item.userId,item.no)" type="primary" size="mini" class="orderdafe-edit-btn">确认退款</el-button>                              
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 1 && item.status==1 && item.course ==2"> 
                                       <span>退款完成</span>
                                    </div>
                              
                                    <div class="orderdafe-editbtn" v-if="item.type == 1 && item.status== 0"> 
                                        <el-button type="primary" size="mini" class="orderdafe-edit-btn" @click="oktuiK(item.no,item.orderMoneyTotalreal,item.type)">同意</el-button>
                                        <el-button  @click="juJmethod(item.no,item.orderMoneyTotalreal,item.type)" type="danger" size="mini"  class="orderdafe-edit-btn">拒绝</el-button>
                                    </div>

                                    <!-- <div class="orderdafe-edit" v-if="item.type == 1 && item.status == -1 ">
                                        <span style="color:#f56c6c">退款关闭</span>
                                    </div> -->

                                    <div class="orderdafe-edit" v-if="item.type == 3 && item.status ==1 && item.course == 1"> 
                                        <span>换货配送中</span>
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 3 && item.status ==1 && item.course == 2"> 
                                        <span>换货完成</span>
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.status == 3">
                                        退款完成
                                    </div>


                               </div>

                                    
                             
                            </div>

                            <div v-if="listdata.length == 0" class="mhsafe-orderxxx">
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/order.png" alt="" srcset="">  
                            </div>    

                            <div>
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCount">
                                </el-pagination>
                            </div>       
                            </div>
                            <!--全部over-->
                            <!--全部over-->
                        </el-tab-pane>
                        <el-tab-pane label="维权取消" name="5">
                            <!--全部-->
                            <ul class="mhsafe-order_ul">
                                <li class="mh-order_ul-one">商品</li>
                                <!-- <li class="mh-order_ul-two">订单金额</li> -->
                                <li class="mh-order_ul-there" style="text-indent: 4.5rem;">单价/数量</li>
                                <li class="mh-order_ul-four">买家信息</li>
                                <li class="mh-order_ul-five">退款金额</li>
                                <li class="mh-order_ul-sex">售后类型</li>
                                <li class="mh-order_ul-seven">售后状态</li>
                                <li class="mh-order_ul-night">操作</li>
                            </ul>
                            <div class="mhorder-table" v-show="listdata.length != 0 " v-for="(item,index) of listdata" :key="index" >
                                <div class="mhorder-table-top">
                                    <div class="mhorder-table-top-div">
                                        <dl>
                                            <dt>退款编号 :&nbsp; </dt>
                                            <dd>{{item.no == undefined || item.no == null || item.no == '' ? '----' : item.no}}</dd>
                                        </dl>
                                    <dl>
                                        <dt>订单号 :&nbsp;</dt>
                                        <dd>{{item.orderNo}}</dd>
                                    </dl>
                                     <dl>
                                        <dt>申请时间 :&nbsp; </dt>
                                        <dd>{{item.createTime.time|formatDate}}</dd>
                                    </dl>

                                    <dl v-if="item.cancelTime">
                                        <dt>取消时间 :&nbsp; </dt>
                                        <dd>{{item.cancelTime.time|formatDate}}</dd>
                                    </dl>
                                    </div>
                                    <dl class="lastdl">
                                        <dt @click="Seedetails(item.no,item.type)">查看详情</dt>
                                        <dd @click="Beizhu(item.no)" style="cursor: pointer;">备注</dd>
                                        <!-- <dd style="margin-left:10px;cursor: pointer;">打印发货单</dd> -->
                                    </dl>
                                    
                                </div>
                                <div class="mhorder-table-bottomfusafe">
                                    <div class="mhorder-table-bottomfu">
                                        <div  class="mhorder-table-bottom"  v-for="(skuitem,skuindex) of item.detailList" :key="skuindex"> 
                                            <div class="mhorder-table-bottom-div" style="width:80%">
                                                <img :src="skuitem.imageurl" alt="" width="50" height="50" class="ordersafe-tab-img">
                                                <dl class="mhorder-table-bottom-div_dl">
                                                    <dt class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">商品名称 : </span><span class="mhorder-table-bottom-divdtspan">{{skuitem.name}}</span></dt>
                                                    <dd class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">商品ID : </span><span>{{skuitem.skuId}}</span></dd>
                                                    <!-- <dd><span>规格: </span><span>红/M</span></dd> -->
                                                    <!-- <dd class="mhorder-table-bottom-divdt"><span class="mhorder-table-bottom-name">退款数量 : </span><span>{{skuitem.quantity}}</span></dd> -->
                                                </dl>
                                            </div>   
                                            <div class="orderdafe-price" style="width:10%">
                                                <span class="orderdafe-price-fhao">¥</span>{{parseFloat(skuitem.moneyTotal/100)}}
                                            </div>
                                            <div class="orderdafe-num" style="width:10%">
                                            1
                                            </div>
                                        </div>
                                     </div>
                                    <div class="orderdafe-note">
                                        <div>
                                            <img :src="item.userHeadportrait" alt="" width="40" height="40" class="ordersafe-tab-img">
                                            <dl>
                                                <dt><span>会员ID: </span><span>{{item.userId}} </span></dt>
                                                <dd style="text-align: left;"><span>昵称:</span><span>{{item.userNickName}}</span></dd>                                        
                                            </dl> 
                                        </div>
                                        <el-popover placement="left" width="300" trigger="click" popper-class="mh-triclass">
                                                <div style="display:flex;padding:20px">
                                                    <img :src="upnote.headportrait" alt="" width="40" height="40" style="margin-right:10px">
                                                    <ul class="mh-seewuliu-ulaa">
                                                        <li><span class="mh-order-note-span">上级昵称 : </span><span>{{upnote.nickName}}</span></li>
                                                        <li><span class="mh-order-note-span">上级ID : </span><span>{{upnote.id}}</span></li>                                      
                                                    </ul>
                                                </div>     
                                                <div  slot="reference" style="color: #409eff;cursor: pointer;"  @click="selectUp(item.userId)">查看上级</div>       
                                        </el-popover>
                                    </div>

                                    <div class="orderdafe-tuiprice">
                                        <span class="orderdafe-price-fhao">¥</span>{{ item.money == undefined || item.money == null ? '0' : parseFloat(item.money/100)}}
                                    </div>

                                    <div class="orderdafe-tuikaun">
                                         {{item.type == 1 ? '仅退款': item.type == 2 ? '退货退款' : item.type == 3 ? '换货' : ''}}
                                        <el-popover
                                            placement="left"
                                            width="100"
                                            trigger="click"
                                            popper-class="mh-triclass"
                                        >                       
                                        <div class="mh-seewuliu">
                                            <div class="mh-seewuliu-div">{{courierServicesCompany}}</div>
                                            <div class="mh-seewuliu-divtwo">订单号 : {{courierparseFloat}} </div>
                                            <ul>
                                                <li v-for="(listitem,listindex) of courierparseFloatlist" :key="listindex">
                                                   <div>{{listitem.context}}</div>
                                                   <div>{{listitem.logisticsTime |formatDate}}</div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div @click="orderGoodswuliu(item.no,item.userId)">查看物流</div>                           
                                        </el-popover> 
                                    </div>

                                    <div class="orderdafe-status" v-if="item.status == 0">处理中 </div>     
                                    <div class="orderdafe-status" v-if="item.status == 1 && item.course !=2   && item.course !=0 && item.course !=3">审核通过</div>                               
                                    <div class="orderdafe-status" v-if="item.status == -1">退款关闭</div>
                                    <div class="orderdafe-status" v-if="item.status == 2">正在退款  </div>
                                    <div class="orderdafe-status" v-if="item.status == -2">用户取消   </div>
                                    <div class="orderdafe-status" v-if="item.status == 3">退款完成   </div>
                                    <div class="orderdafe-status" v-if="item.status == null">暂无状态</div>


                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 0">  售后待收货 </div>
                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 3">  售后待退款 </div>

                                    <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 0 && item.course == 0"> 
                                        <el-button @click="tHtKok(item.no,item.orderMoneyTotalreal)" type="primary" size="mini" class="orderdafe-edit-btn">同意</el-button>    
                                        <el-button  @click="juJmethod(item.no,item.orderMoneyTotalreal,item.type)" type="danger" class="orderdafe-edit-btn" size="mini">拒绝</el-button>                          
                                    </div>

                                     <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 1 && item.course == 0"> 
                                        <el-button @click="querenSHO(item.no,item.userId)" type="primary" size="mini" class="orderdafe-edit-btn">确认收货</el-button>                                      
                                    </div>
                 
                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 1"> 
                                       <span>配送中</span>     
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 2  && item.status== 1 && item.course == 2"> 
                                       <span>退款完成</span>     
                                    </div>

                                    <div class="orderdafe-editbtn" v-if="item.type == 2  && item.status== 1 && item.course == 3"> 
                                        <el-button @click="okTuiPrice(item.userId,item.no)" type="primary" size="mini" class="orderdafe-edit-btn">确认退款</el-button>                                   
                                    </div>

                                     <div class="orderdafe-edit" v-if="item.type == 2  && item.status ==1 && item.course ==4"> 
                                        <span>确认退款</span>
                                     </div>


                                    <div class="orderdafe-editbtn" v-if="item.type == 1 && item.status==1 &&  item.course != 2"> 
                                        <el-button @click="okTuiPrice(item.userId,item.no)" type="primary" size="mini" class="orderdafe-edit-btn">确认退款</el-button>                              
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 1 && item.status==1 && item.course ==2"> 
                                       <span>退款完成</span>
                                    </div>
                              
                                    <div class="orderdafe-editbtn" v-if="item.type == 1 && item.status== 0"> 
                                        <el-button type="primary" size="mini" class="orderdafe-edit-btn" @click="oktuiK(item.no,item.orderMoneyTotalreal,item.type)">同意</el-button>
                                        <el-button  @click="juJmethod(item.no,item.orderMoneyTotalreal,item.type)" type="danger" size="mini"  class="orderdafe-edit-btn">拒绝</el-button>
                                    </div>

                                    <!-- <div class="orderdafe-edit" v-if="item.type == 1 && item.status == -1 ">
                                        <span style="color:#f56c6c">退款关闭</span>
                                    </div> -->

                                    <div class="orderdafe-edit" v-if="item.type == 3 && item.status ==1 && item.course == 1"> 
                                        <span>换货配送中</span>
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.type == 3 && item.status ==1 && item.course == 2"> 
                                        <span>换货完成</span>
                                    </div>

                                    <div class="orderdafe-edit" v-if="item.status == 3">
                                        退款完成
                                    </div>
                               </div>           
                            </div>

                            <div v-if="listdata.length == 0" class="mhsafe-orderxxx">
                                <img src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/crs/order.png" alt="" srcset="">  
                            </div>    

                            <div>
                                <div class="goods_list_dibu-twodiv cssbilie1" style="width:100%;margin-top:20px">
                                <el-pagination
                                        @size-change="handleSizeChange"
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCount">
                                </el-pagination>
                            </div>       
                            </div>
                            <!--全部over-->
                            <!--全部over-->
                        </el-tab-pane>
                    </el-tabs>
                </div>

                    <!-- 维权订单详情over -->
                    <!-- 同意弹框操作 -->
                    <el-dialog :title="orderStatus" :visible.sync="okdialogFormVisible" width="30%">
                        <div class="add-shop-cate">
                            <div class="df-basic_row_new el-form-item" style="display:flex;font-weight:600;color:red">
                                是否同意退款,同意后不可撤销
                            </div>
                            <div class="df-basic_row_new el-form-item" style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">退款金额 : </label>
                                     <div class="el-form-item__content" style="margin-left: 10px;width:50%;display:flex">
                                        <el-input type="text" v-model="refundprice" disabled="true"></el-input>
                                        <span style="display: inline-block;margin-left:15px">元</span>
                                    </div>       
                                
                            </div>
                            <div class="df-basic_row_new el-form-item" style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">修改退款金额 : </label>
                                     <div class="el-form-item__content" style="margin-left: 10px;width:70%">
                                        <el-input type="text" v-model="refundpriceOne" ></el-input> 

                                    </div>       
                               
                            </div>
        
                        
                            <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                <el-button @click="okdialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="agressMethod">确 定</el-button>
                            </div>
                        </div>
                    </el-dialog>
                    <!-- 同意over  -->

                        <!-- 拒绝弹框操作 -->
                    <el-dialog :title="judtype" :visible.sync="jectdialogFormVisible" width="30%">
                        <div class="add-shop-cate">
                            <div class="df-basic_row_new el-form-item" style="display:flex;font-weight:600;color:red">
                                是否拒绝{{judtype}},拒绝后不可撤销
                            </div>
                            <div class="df-basic_row_new el-form-item" style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">退款金额 : </label>
                                    <div class="el-form-item__content" style="margin-left: 10px;width:50%;display:flex">
                                        <el-input type="text" v-model="judprice" disabled="true" ></el-input>
                                        <span style="display: inline-block;margin-left:15px">元</span>
                                    </div>       
                                
                            </div>
                            <div class="df-basic_row_new el-form-item" style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">拒绝理由 : </label>
                                     <div class="el-form-item__content" style="margin-left: 10px;width:70%">
                                        <el-input type="text" v-model="jutext" ></el-input> 
                                    </div>       
                               
                            </div>
        
                        
                            <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                <el-button @click="jectdialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="rejctMehod">确 定</el-button>
                            </div>
                        </div>
                    </el-dialog>
                    <!-- 拒绝over  -->

                    <!-- 备注 -->
                       <!-- 备注弹窗 -->
                    <el-dialog title="备注" :visible.sync="dialogFormVisible" width="30%">
                        <div class="add-shop-cate">
                            <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 80px;">备注信息</label>
                                <div class="el-form-item__content" style="margin-left: 50px;">
                                    <div class="el-input el-input--small" style="width: 88%; display: flex;">
                                        <div class="el-input">
                                             <el-input type="textarea" v-model="remarkvalue"   maxlength="80" show-word-limit></el-input>
                                        </div>

                                    </div>
                                      <div class="tips el-col el-col-24 df-tps-zi" style="padding-left:29px">温馨提示：该备注仅作为商家对订单的标记，不会被买家查看到。</div>
                                </div>
                            </div>
                        
                            <div slot="footer" class="dialog-footer add-shop-cate-footer" style="display: flex;justify-content: center;">
                                <el-button @click="dialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="orderRemake">确 定</el-button>
                            </div>
                        </div>
                    </el-dialog>

                    <!-- 备注 -->

                     <!-- 修改地址 -->
                    <el-dialog title="售后发回收货地址" :visible.sync="addressdialogFormVisible" width="40%">
                        <div class="add-shop-cate">
                            <div class="df-basic_row_new el-form-item" style="display:flex">
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">退款金额 :</label>
                                <div class="el-form-item__content" style="margin-left: 50px;width:60%;flex:1">                
                                    <el-input type="text" v-model="tuikuanmoney"></el-input>                                   
                                </div>
                            </div>
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
                                <label for="item_title" class="el-form-item__label" style="width: 120px;">收货地址 : </label>
                                <div class="el-form-item__content" style="margin-left: 50px;width:60%;flex:1">
                                  
                                    <el-cascader
                                    :change-on-select="true"     
                                    v-model="addressvalue"
                                    :options="addressjsonop"
                                    :props="{ expandTrigger: 'hover',children:'childList',value:'name',label:'name' }"
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
                    <!-- 备注over -->       
                </div>
                <!-- 商品中心over-->
            </div>
        </div>


        <!--   over     -->

    </div>
    <!--主体 over-->
    </div>
</template>
<script>
/*  
    status， 0未处理， 1同意， -1,拒绝
    
    维权订单退货退款状态
    0 待回寄
    1 配送中
    2 退款完成
    3 已收货
    4 确认退款
    -1 拒绝
*/
import navbar from '../navbar';
import sidebar from '../sidebar';
import shopnavbar from './shopnavbar';
import baseapi from '../../utils/api';
import {formatDate} from "../../filters/date";
import addressjson from "../../../static/address.json";
export default {
      data() {
        return {
            upnote:{},
            loading: true,
            thisstatus:'',
            tuihuono:'',
            tuikuanmoney:'',
            startAddressName:'',
            startAddressPhone:'',
            xingaxiadress:'',
            addressvalue:'',
            addressjson:[],
            addressjsonop: '',
            addressdialogFormVisible:false,
            activeName:'1',
            thispageindex:1,
            totalCount:0,
            shouhoutime:'',
            souhouvalue:'',
            remarkNo:'',
            remarkvalue:'',
            jutext:'',
            judprice:0,
            judtype:'',
            jectdialogFormVisible:false,
            orderStatus:'',//同意后当前的订单状态
            agreeno:'',
            dialogFormVisible:false,
            okdialogFormVisible:false,
            refundpriceOne:'',
            refundprice:'',
            quanbu:"全部",
            listdata:[
                {
                    course: null,
                    createTime: {time:''},
                    detailList: [{
                        deliveryTime: null,
                        expressId: null,
                        expressName: null,
                        id: '',
                        imageurl: "",
                        itemId: '',
                        logisticsInfo: null,
                        logisticsNo: null,
                        money: '',
                        moneyTotal: '',
                        name: "",
                        orderNo: "",
                        quantity: 1,
                        skuId: '',
                        status: '',
                        userId: ''
                    }
                    ],
                    money: '',
                    no: "",
                    orderMoneyTotalreal: '',
                    orderName: "",
                    orderNo: "",
                    orderPaytime: {time:''},
                    orderStatus: '',
                    status: 0,
                    type: 1,
                    userHeadportrait: "",
                    userId: '',
                    userNickName: ""
                }
            ],
            input:1,
            orderparseFloat:'',
            tuikuanparseFloat:'',
            value:'',
            value1:"",
            options: [{
                value: '0',
                label: '全部'
            }, {
                value: '1',
                label: '仅退款'
            }, {
                value: '2',
                label: '退货退款'
            }, {
                value: '3',
                label: '换货'
            }]
        };
    },
    filters : {
        formatDate(time) {
            if(time == ''){
                time = 0;
            }
            if(time == '正在进行中'){
                return '正在进行中';
            }else{
            let date = new Date(time)
                return formatDate(date, 'yyyy-MM-dd hh:mm')    
            }       
        }
    },
    beforeRouteEnter (to, from, next) {
		next(vm => {
            if( vm.$cookie.get('userId') != null && vm.$cookie.get('userId')  != '' && vm.$cookie.get('userId') != undefined   ){
                vm.goodShop('',vm.thispageindex);
                next();
            } else {
                next('/login');
            }
		})
	},
    mounted(){
        let newArr = [];
        for (var i in addressjson.region) {
            newArr.push(addressjson.region[i]);
        }
        this.addressjsonop = newArr;  
    },
    methods: {
        selectUp(userid){
            let data = new FormData();
            let that = this;
             that.upnote = {};
            this.$http({
                    method: "post",
                    url: baseapi.selectUp,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId: userid}
                })
                .then(function(res) {
                    console.log(res);
                    
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
        //确认收货
        querenSHO(no,userid){
            let that = this;
            this.$confirm('确定售后收货吗, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    let data = new FormData();
                    data.append('no',no)
                      this.$http({
                        method: "post",
                        url: baseapi.weiquanOKreceive,
                        data: data,
                        headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:userid }
                    })
                    .then(function(res){
                        console.log(res);
                        if(res.data.status == 500){
                            that.$message.error(res.data.message);  
                            return false;
                        }
                        if(res.data.status == 200){
                            that.$message.success('确认收货成功');  
                            that.goodShop('',that.thispageindex);
                        }
                    })     
            })
        },
        editshouHuoaddress(){
            let that = this;
            let str = '';
            this.addressvalue.forEach(element => {
                str += element
            });    
             if(that.tuikuanmoney == '' || that.tuikuanmoney == undefined || that.tuikuanmoney ==null){
                that.$message.error("请填写退款金额");
                return false;
            }
             if(that.startAddressName == '' || that.startAddressName == undefined || that.startAddressName ==null){
                that.$message.error("请填写用户名");
                return false;
            }
              if(that.startAddressPhone == '' || that.startAddressPhone == undefined || that.startAddressPhone ==null){
                that.$message.error("请填写手机号");
                return false;
            }
           
       
            let data = new FormData();
            data.append('no',that.tuihuono );   
            data.append('money',parseInt(that.tuikuanmoney*100) );    
            data.append('receiveName',this.startAddressName );    
            data.append('receivePhone',this.startAddressPhone);    
            data.append('receiveAddress',str+this.xingaxiadress );    

            this.$http({
                method: "post",
                url: baseapi.weiquanorderAgree,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 500){
                    that.$message.error(res.data.message);
                    that.okdialogFormVisible = false;
                    return false;
                }
                if(res.data.status == 200){
                    that.$message.success('已同意');   
                    that.addressdialogFormVisible = false;
                    that.goodShop('',that.thispageindex);
                }
            })

        },
        //退货退款同意
        tHtKok(no,money){
            this.tuikuanmoney = parseFloat(money/100);
            this.tuihuono = no;
            this.addressdialogFormVisible = true;
        },
        orderRemake(){
            let that = this;
            let data = new FormData();       
            data.append('no',that.remarkNo);  
            data.append('remark',that.remarkvalue); 
            this.$http({
                method: "post",
                url: baseapi.weiquanDelacrmake,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
            })
            .then(function(res){
                console.log(res);
                if(res.data.status ==505){
                    that.$message.error('服务器异常');
                    return false;
                }
                if(res.data.status ==500){
                    that.$message.error(res.data.message);
                    return false;
                }
                if(res.data.status ==200){
                    that.$message.success('备注成功');
                    that.dialogFormVisible = false;
                    thta.goodShop('',that.thispageindex);
                } 
            }).catch(function(error){
                console.error(error);
            }); 
        },
        //删除订单
        delectOrder(no){
            let that = this;
            this.$confirm('您确认删除该维权订单吗, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                let data = new FormData();       
                data.append('no',no);  
                this.$http({
                    method: "post",
                    url: baseapi.weiquanDelactorder,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
                })
                .then(function(res){
                    console.log(res);
                    if(res.data.status ==505){
                        that.$message.error('服务器异常');
                        return false;
                    }
                    if(res.data.status ==500){
                        that.$message.error(res.data.message);
                        return false;
                    }
                    if(res.data.status ==200){
                        that.$message.success('删除成功');
                        thta.goodShop('',that.thispageindex);
                    } 
                }).catch(function(error){
                      console.error(error);
                }); 
            }); 
        },
        //确认收货
        okShou(userid,no){
            let that = this;
            this.$confirm('您确认收货吗, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                let data = new FormData();       
                data.append('no',no);  
                this.$http({
                    method: "post",
                    url: baseapi.weiquanOKreceive,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:userid }
                })
                .then(function(res){
                    console.log(res);
                    if(res.data.status ==505){
                        that.$message.error('服务器异常');
                        return false;
                    }
                    if(res.data.status ==500){
                        that.$message.error(res.data.message);
                        return false;
                    }
                    if(res.data.status ==200){
                        that.$message.success('确认收货成功');
                        thta.goodShop('',that.thispageindex);
                    } 
                }).catch(function(error){
                        console.log(error);
                }); 
            }); 
        },
        //确认退款
        okTuiPrice(userid,no){
            let that = this;
            this.$confirm('您确认退款吗, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
            }).then(() => {
                let data = new FormData();       
                data.append('no',no);  
            
                this.$http({
                    method: "post",
                    url: baseapi.weiquanOrderTui,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:userid }
                })
                .then(function(res){
                    console.log(res);
                    if(res.data.status ==505){
                        that.$message.error('服务器异常');
                        return false;
                    }
                    if(res.data.status ==500){
                        let message = res.data.message == undefined ? '无提示' :  res.data.message;
                        that.$message.error('状态码500 , 错误提示 : '+ message);
                        return false;
                    }
                    if(res.data.status ==200){
                        that.$message.success('退款成功');
                        that.goodShop('',that.thispageindex);
                    } 
                }).catch(function(error){
                        console.log(error);
                }); 
            }); 
        },
        //备注
        Beizhu(no){
            this.remarkNo = no;
            this.dialogFormVisible = true;
        },
        //查看详情
        Seedetails(papams,type){   
            let paramsobj = "id="+papams+'&type='+1;
            let routerJump = this.$router.resolve({
                path: `/ordersafeDetail/${paramsobj}`
            })
            window.open(routerJump.href, '_blank');
        },
        //拒绝
        juJmethod(parmad,money,type){
            let jumethodtype = '';
            this.juJmethodno = parmad;
            type == 1 ? jumethodtype ='仅退款': type == 2 ? jumethodtype = '退货退款' : type == 3 ? jumethodtype ='换货' : jumethodtype ='';
            this.judtype = jumethodtype;
            this.judprice  = parseFloat(money/100)
            this.jectdialogFormVisible = true;     
        },
        rejctMehod(){
            let that = this;
            let data = new FormData();      
            data.append('no',that.juJmethodno);  
            data.append('reason',that.jutext);  
            
            this.$http({
                method: "post",
                url: baseapi.weiquanorderReject,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
            })
            .then(function(res){
                if(res.data.status ==500){
                    that.$message.error(res.data.message);
                    return false;
                }
                if(res.data.status ==200){
                    that.$message.success('操作成功');
                    that.jectdialogFormVisible = false;
                    that.goodShop('',that.thispageindex);
                }
            
            }).catch(function(error){
                    console.log(error);
            });  
        },
        //同意退款
        oktuiK(no,money,type){
            let thisstatus = '';
            type == 1 ? thisstatus ='仅退款': type == 2 ? thisstatus = '退货退款' : type == 3 ? thisstatus ='换货' : thisstatus ='';
            this.orderStatus = thisstatus;
            this.okdialogFormVisible = true;
            this.agreeno = no;
            this.refundprice  = parseFloat(money/100)

        },
        agressMethod(){
            let that = this;
            if(that.refundpriceOne == '' || that.refundpriceOne == undefined || that.refundpriceOne ==null){
                that.$message.error("请填写退款金额");
                return false;
            }
            if(this.refundpriceOne > this.refundprice ){
                that.$message.error("退款金额不可超过实付金额");;
                return false;
            }
       
            let data = new FormData();
            data.append('no',that.agreeno );   
            data.append('money',parseInt(that.refundpriceOne*100) );            
            this.$http({
                method: "post",
                url: baseapi.weiquanorderAgree,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 500){
                     that.$message.error(res.data.message);
                     that.okdialogFormVisible = false;
                     return false;
                }
                if(res.data.status == 200){
                    that.$message.success('已同意');   
                    that.okdialogFormVisible = false;
                    that.goodShop('',that.thispageindex);
                }
            })
        },
        clearshuai(){
            this.orderparseFloat = '';                
            this.souhouvalue = '',
            this.tuikuanparseFloat = '';
            this.shouhoutime = '';
            this.$message.success('清空筛选成功');
                          
         },
        selectdata(){
            this.goodShop( this.thisstatus ,this.thispageindex);
         },  
        handleCurrentChange(val) {
            this.goodShop(this.thisstatus,val);
            this.thispageindex = val;
            console.log(`当前页: ${val}`);
        },
        goodShop(status,page){
            let that = this;
            let data = new FormData();
                if(this.orderparseFloat !=''){         
                    data.append('sorderNo',this.orderparseFloat);
                }
                if(this.tuikuanparseFloat != ''){
                    data.append('sno',this.tuikuanparseFloat);    
                }

                if(this.shouhoutime != '' ){
                    data.append('screateTimeStart',this.shouhoutime[0]);   
                    data.append('screateTimeEnd',this.shouhoutime[1]);   
                }
                if(this.souhouvalue != ""){
                    data.append('stype',this.souhouvalue);            
                }

                if(status != undefined  && status !=null){
                    data.append('sstatus',status);
                } 
                    data.append('page',page);
                    data.append('limit',20);
                
                this.$http({
                    method: "post",
                    url: baseapi.safeguardOrder,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
                })
                .then(function(res){
                    if(res.data.status ==200){
                        if(status == 999){
                            that.$message.success('筛选成功');
                            that.totalCount =  res.data.totalCount;
                            that.listdata = res.data.list;
                            return false;
                        }
                        that.loading =  false;
                        that.listdata = res.data.list;
                        that.totalCount =  res.data.totalCount;
                    }else{
                        that.$message.error(res.data.message);
                    }
                })
                .catch(function(error){        
                         that.$message.error('服务器异常');              
                    console.log(error);
                }) ; 
            },

            handleClick(tab, event) {
                console.log(tab.name);
                if(tab.name == 1){
                    this.thisstatus = '';
                    this.goodShop('',1); 
                }else if(tab.name == 2){
                    this.goodShop('0',1);
                    this.thisstatus = '0'
                }else if(tab.name == 3){
                    this.thisstatus = '1';
                    this.goodShop(1,1);
                }else if(tab.name == 5){
                    this.thisstatus = '-2';
                    this.goodShop(-2,1);
                }else{
                    this.thisstatus = '-1';
                    this.goodShop(-1,1);    
                }
           
            },
    },
    components:{
        navbar,sidebar,shopnavbar    
    }
}
</script>
<style>

.mhsafe-order_ul{
    display: flex;
    font-size: 14px;
    font-weight: 600;
    text-align: center;
    margin-top: 14px
}
.mhsafe-order_ul .mh-order_ul-one{
    width: 28%;
}
.mhsafe-order_ul .mh-order_ul-two{
    width: 10%;
}
.mhsafe-order_ul .mh-order_ul-there{
    width: 12%;
}
.mhsafe-order_ul .mh-order_ul-four{
    width: 18%;
}
.mhsafe-order_ul .mh-order_ul-five{
    width: 10%;
}
.mhsafe-order_ul .mh-order_ul-sex{
    width: 10%;
}
.mhsafe-order_ul .mh-order_ul-seven{
    width: 10%;
}
.mhsafe-order_ul .mh-order_ul-night{
    width: 10%;
}


.mhsafe-orderxxx{
    display:flex;
    justify-content:center;
    align-items:center;
    padding:30px 0 ;
    color:#999;
    font-size:12px
}





.vip-sitting .el-input__inner{
    height: 32px;
    line-height: 32px;
}
.vip-sitting  .el-input__suffix .el-input__icon{
    line-height: 32px;
}
.vip-sit_span{
    color: #606266;
    padding: 0 12px 0 0;
    display: inline-block;
    width: 100px;
    font-size: 12px;
    text-align: right;
}

.mhorder-table-top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-right: 1px solid #f2f2f2;
    border-bottom: 1px solid #ebeef5;
    padding: 10px;
    background: #fafafa;
}
.mhorder-table-top-div{
    display: flex;
    align-items: center;
}
.mhorder-table-top-div dl{
    display: flex;
    align-items: center;
    color: #303133;
    font-size: 12px;
    margin-left: 18px ;


}
.lastdl{
    display: flex;
    align-items: center;
    color:#409eff;
    font-size: 12px
}
.lastdl dt{
    margin-right: 10px ;
    cursor: pointer;
    font-weight: 500;
}
.lastdl dd{
    cursor: pointer;
    font-weight: 500;
}
.lastdl dt:hover{
    font-weight: 500;
    color: #67C23A;
}
.lastdl dd:hover{
    font-weight: 500;
    color: #67C23A;
}

.mhorder-table-bottom{
    display: flex;
    align-items: center;
    color: #303133;
    font-size: 12px;
    padding: 12px 0 12px 15px;
    border-bottom: 1px solid #eee;
    /* border-right: 1px solid #eee; */
    box-sizing: border-box;
    height: 111px;
}

.mhorder-table-bottomfu{
    width: 40%;
    border-right: 1px solid #eee;
    /* display: flex; */
    /* align-items: center; */
}
.mhorder-table-bottomfusafe{
    width: 100%;
    display: flex;
}
.mhorder-table-bottomfu .mhorder-table-bottom:last-child{
      border-bottom: none;
}

.mhorder-table-bottom-div{
    display: flex;
    align-items: center;
    width:22%
}
.mhorder-table-bottom-div>dl span{
    font-size: 12px;
    color: rgb(144, 147, 153);
}

.orderdafe-price{
    width: 10%;
    text-align: center
    
}

.orderdafe-num{
    width: 10%;
    text-align: center
}
.orderdafe-note{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 18%;
    padding: 8px 0;
    text-align: center;
    border-right: 1px solid #eee;
}
.orderdafe-note dl dt{
    text-align: left
}
.orderdafe-tuiprice{
    display: flex;
    align-items: center;
    justify-content: center;
    width:10%;
    text-align: center;
    border-right: 1px solid #eee;
}
.orderdafe-tuikaun{
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #eee;
    width: 10%;
    text-align: center
}

.orderdafe-status{
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #eee;
    width: 10%;
    text-align: center;
        color: #409eff;
}
.orderdafe-edit{
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-right:1px solid #eee;
    color: #409eff;
}
.orderdafe-edit >button{
    width: 60%
}
.orderdafe-edit-btn{
    margin-bottom:6px;
    margin-left: 0 !important;
}
.orderdafe-edit .el-button+.el-button{
    margin-left: 0px
}

.ordersafe-main .el-tabs--border-card>.el-tabs__content{
    padding: 15px
}

.mhorder-table{
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    margin-top: 15px;
}
.ordersafe-tab-img{
    border-radius: 4px;
    margin-right: 6px
}


.mhsafe-orderxxx>img{
  width: 160px;
  height: 145px;
  padding: 50px 0 ;
}
.mhorder-table-bottom-divdt{
    display:flex;
    align-items: center;
   
}
.mhorder-table-bottom-divdtspan{
    min-width: 55%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
     flex: 1;

}
.mhorder-table-bottom-name{
    color: #38f !important;
    display: inline-block;
    margin-right: 4px;
    width: 70px;
}

.orderdafe-price-fhao{
    font-weight: 600;
}
.orderdafe-editbtn{
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.mhorder-table-bottom-div_dl{
    width: 70%;
}

.mh-seewuliu-ulaa li span:nth-child(1){
    display:inline-block;
    width: 66px;
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