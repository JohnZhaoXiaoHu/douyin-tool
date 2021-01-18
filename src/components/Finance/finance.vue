<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods">
            <financenavbar></financenavbar>

            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                <div class="goods-card_body">
               <!--选项卡组件-->
                <el-tabs v-model="activeName" @tab-click="handleClick" v-loading="loading">

                    <el-tab-pane label="提现申请" name="first">
                  
                      <div class="shuaixuan mh-goods-shuaixuan">
                          <div class="m-search-box el-row el-row-my-div">
                              <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员ID</label>
                                  <el-input v-model="value1" placeholder="请输入会员ID"></el-input>
                              </div>

                              <div class="mh-finance-input">
                                  <label class="el-form-item__label" style="width: 130px;">支付类型</label>
                                  <el-select v-model="value2" placeholder="请选择支付类型">
                                      <el-option
                                              v-for="item in shopgrounpnote"
                                              :key="item.id"
                                              :label="item.name"
                                              :value="item.id">
                                      </el-option>
                                  </el-select>
                              </div>

                             <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 130px;min-width: 128px">收款人</label>
                                  <el-input v-model="value3" placeholder="请输入收款人"></el-input>
                              </div>
                          </div>
                          <!--  一行   -->

                          <div class="m-search-box el-row el-row-my-div mh-finance-input">
                               <div class="vip-item-list_time mh-market-timeleght" >
                                <label class="el-form-item__label" style="width: 190px;">申请时间 : </label>
                                <el-date-picker 
                                        v-model="value4"
                                        value-format="timestamp"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        style="width: 100%"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                          </div>
                          <div class="goods-sx-btn f_opreate">
                              <button  type="button" class="el-button el-button--primary el-button--small" @click="shuaixuan(1,1)"><span>筛选</span></button>
                              <button  @click="cleardata" type="button" class="el-button el-button--text"><span>清空筛选条件</span></button>
                              <div class="f_tiXian">合计：提现金额{{tiXianAll}}</div>
                              <div class="f_shiFuAll">实付金额{{shiFuAll}}</div>
                          </div>

                      </div>
                        <div class="goods_table-all">
                            <el-table
                                    ref="multipleTable"
                                    :data="financedata"
                                    tooltip-effect="dark"
                                    border
                                    style="width:100%"
                                    :default-sort = "{prop: 'date', order: 'descending'}"
                                    @selection-change="goodshandleSelectionChange">     
                                <el-table-column
                                        type="selection"
                                        width="55">
                                </el-table-column>
                                <el-table-column
                                        prop="userId"
                                        label="会员ID"
                                        width="90">
                                </el-table-column>
                                 <el-table-column  
                                        prop="userNickName"                                                       
                                        label="昵称">
                                        <template slot-scope="scope">
                                            <div class="mh-finance-tab-div">
                                                <div>{{scope.row.userNickName ? scope.row.userNickName : ''}}</div>  
                                                 <div>{{scope.row.userPhone ? parseFloat(scope.row.userPhone) : ''}}</div>                                    
                                            </div>
                                        </template>
                                </el-table-column>  
                               
                                 <el-table-column                              
                                  prop="createTime"
                                  label="申请时间"
                                  width="145px"
                                  >
                                  <template slot-scope="scope">
                                      <div>
                                          {{scope.row.createTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>

                                <el-table-column label="可提现余额" width="100px">
                                    <template slot-scope="scope">
                                        <div>{{scope.row.balanceUsable/100}}</div>
                                    </template>
                                </el-table-column>

                                <el-table-column prop="money"
                                        label="提现金额(元)" width="130px">
                                    <template slot-scope="scope">
                                    <div class="goods-table">
                                        <span>{{parseFloat(scope.row.money/100)}}</span>
                                    </div>
                                   </template>
                                </el-table-column>
                                <el-table-column prop="money" label="实付金额(元)" width="130px">
                                    <template slot-scope="scope">
                                        {{parseFloat(scope.row.money/100)}}
                                    </template>
                                </el-table-column>

                                <el-table-column
                                        prop="form"
                                        label="提现类型"
                                        show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        <div>
                                          {{scope.row.form == 1 ? '余额提现' : scope.row.form == 2 ? '佣金提现' : '' }}
                                        </div>
                                      </template>
                                </el-table-column>
                               
                                <el-table-column
                                        prop="payType"                          
                                        label="支付类型"
                                        show-overflow-tooltip>
                                </el-table-column>

                                 <el-table-column
                                        prop="incomeAccount"                                
                                        label="收款账号"
                                        show-overflow-tooltip>
                                </el-table-column>

                                 <el-table-column
                                        prop="incomeBank"                 
                                        label="开户行"
                                        show-overflow-tooltip>
                                </el-table-column>

                                <el-table-column
                                        prop="incomeName"                 
                                        label="收款人"
                                        show-overflow-tooltip>
                                </el-table-column>


                                <el-table-column
                                        prop="accountIllustration"                              
                                        label="账号说明"
                                        show-overflow-tooltip>
                                </el-table-column>
                           
          
                                <el-table-column
                                        prop="handle"
                                        label="操作"
                                        width="170px">
                                        show-overflow-tooltip>
                                     <template slot-scope="scope">
                                        <div>
                                            <el-button  size="small" @click="aggreeMethod(scope.row.id,scope.row.userId)">同意</el-button>
                                            <el-button type="danger" size="small" @click="jujueMethod(scope.row.id,scope.row.userId)">拒绝</el-button> 
                                        </div>
                                      
                                         
                                    </template>
                                </el-table-column>
                                
                            </el-table>
                        </div>

                        <div class="el-row goods_list_dibu" style="display:flex;justify-content: flex-end;">
                            <div class="goods_list_dibu-onediv">    
                                <button type="button" class="el-button el-button--default el-button--small" @click="piliangMthod"><span>同意</span></button>
                                <button type="button" class="el-button el-button--default el-button--small" @click="piliangJuejuMthod"><span>拒绝</span></button>
                            </div>
                            <div class="goods_list_dibu-twodiv cssbilie1">
                                <!-- small sizes-->
                                <el-pagination
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCountone">
                                </el-pagination>
                            </div>
                        </div>
                        <!-- table over-->
                        <div  class="goods-footer"><p  class="copyright">Copyright 蜜獾</p></div>
                        <!-- 全部over -->
                    </el-tab-pane>

                    <el-tab-pane label="财务审核" name="second">
                      <div class="shuaixuan mh-goods-shuaixuan">
                          <div class="m-search-box el-row el-row-my-div">
                              <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员ID</label>
                                  <el-input v-model="value1" placeholder="请输入会员ID"></el-input>
                              </div>

                              <div class="mh-finance-input">
                                  <label class="el-form-item__label" style="width: 130px;">支付类型</label>
                                  <el-select v-model="value2" placeholder="请选择支付类型">
                                      <el-option
                                              v-for="item in shopgrounpnote"
                                              :key="item.id"
                                              :label="item.name"
                                              :value="item.id">
                                      </el-option>
                                  </el-select>
                              </div>

                             <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 130px;min-width: 128px">收款人</label>
                                  <el-input v-model="value3" placeholder="请输入收款人"></el-input>
                              </div>
                          </div>
                          <!--  一行   -->

                          <div class="m-search-box el-row el-row-my-div mh-finance-input">
                               <div class="vip-item-list_time mh-market-timeleght" >
                                <label class="el-form-item__label" style="width: 190px;">申请时间 : </label>
                                <el-date-picker 
                                        v-model="value4"
                                        value-format="timestamp"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        style="width: 100%"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                          </div>
                          <div class="goods-sx-btn f_opreate">
                                <button  type="button" class="el-button el-button--primary el-button--small" @click="shuaixuan(1,1)"><!----><!----><span>筛选</span></button>
                                <button  @click="cleardata" type="button" class="el-button el-button--text"><!----><!----><span>清空筛选条件</span></button>
                                <div class="f_tiXian">合计：提现金额{{tiXianAll}}</div>
                                <div class="f_shiFuAll">实付金额{{shiFuAll}}</div>
                          </div>

                      </div>
                        <div class="goods_table-all">
                            <el-table
                                
                                    ref="multipleTable"
                                    :data="financedata"
                                    tooltip-effect="dark"
                                    border
                                    style="width:100%"
                                    :default-sort = "{prop: 'date', order: 'descending'}"
                                    @selection-change="goodshandleSelectionChange">     
                                <el-table-column
                                        type="selection"
                                        width="55">
                                </el-table-column>
                                <el-table-column
                                        prop="userId"
                                        label="会员ID"
                                        width="90">
                                </el-table-column>
                                 <el-table-column  
                                        prop="userNickName"                                                       
                                        label="昵称">
                                        <template slot-scope="scope">
                                            <div class="mh-finance-tab-div">
                                                <div>{{scope.row.userNickName ? scope.row.userNickName : ''}}</div>  
                                                 <div>{{scope.row.userPhone ? parseFloat(scope.row.userPhone) : ''}}</div>                                    
                                            </div>
                                        </template>
                                </el-table-column>  
                               
                                 <el-table-column                              
                                  prop="createTime"
                                  label="申请时间"
                                  width="145px"
                                  >
                                  <template slot-scope="scope">
                                      <div>
                                          {{scope.row.createTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>
                                <el-table-column label="可提现余额" width="100px">
                                    <template slot-scope="scope">
                                        <div>{{scope.row.balanceUsable/100}}</div>
                                    </template>
                                </el-table-column>

                                <el-table-column prop="money" label="提现金额(元)" width="130px">
                                    <template slot-scope="scope">
                                        {{parseFloat(scope.row.money/100)}}
                                    </template>
                                </el-table-column>
                                <el-table-column prop="money" label="实付金额(元)" width="130px">
                                    <template slot-scope="scope">
                                        {{parseFloat(scope.row.money/100)}}
                                    </template>
                                </el-table-column>

                                <el-table-column
                                        prop="form"
                                        label="提现类型"
                                        show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        <div>
                                          {{scope.row.form == 1 ? '余额提现' : scope.row.form == 2 ? '佣金提现' : '' }}
                                        </div>
                                      </template>
                                </el-table-column>
                               
                                <el-table-column
                                        prop="payType"            
                                        label="支付类型"
                                        show-overflow-tooltip>
                                </el-table-column>

                                 <el-table-column
                                        prop="incomeAccount"                                
                                        label="收款账号"
                                        show-overflow-tooltip>
                                </el-table-column>

                                 <el-table-column
                                        prop="incomeBank"                 
                                        label="开户行"
                                        show-overflow-tooltip>
                                </el-table-column>

                                 <el-table-column
                                        prop="incomeName"                 
                                        label="收款人"
                                        show-overflow-tooltip>
                                </el-table-column>
                                <el-table-column
                                        prop="accountIllustration"                              
                                        label="账号说明"
                                        show-overflow-tooltip>
                                </el-table-column>
                           
          
                                <el-table-column
                                        prop="handle"
                                        label="操作"
                                        width="170px">
                                        show-overflow-tooltip>
                                     <template slot-scope="scope">
                                        <div>
                                            <el-button  size="small" @click="caiwuaggreeMethod(scope.row.id,scope.row.userId,scope.row.payType)">发放</el-button>
                                            <el-button type="danger" size="small" @click="caiwujuMethod(scope.row.id,scope.row.userId)">驳回</el-button> 
                                        </div>
                                      
                                         
                                    </template>
                                </el-table-column>
                                
                            </el-table>
                        </div>

                         <div class="el-row goods_list_dibu" style="display:flex;justify-content: flex-end;">
                            <div class="goods_list_dibu-onediv">
                                <button type="button" class="el-button el-button--default el-button--small" @click="piliangcaiwuMthod"><span>发放</span></button>
                                <button type="button" class="el-button el-button--default el-button--small" @click="piliangjujuecaiwuMthod"><span>驳回</span></button>
                            </div>
                            <div class="goods_list_dibu-twodiv cssbilie1">
                                <!-- small sizes-->
                                <el-pagination
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCountone">
                                </el-pagination>
                            </div>
                        </div>
                        <!-- table over-->
                        <div  class="goods-footer"><p  class="copyright">Copyright 蜜獾</p></div>
                    </el-tab-pane>

                    <!-- 3.打款成功记录 -->
                    <el-tab-pane label="打款成功记录" name="third">
                        <div class="shuaixuan mh-goods-shuaixuan">
                          <div class="m-search-box el-row el-row-my-div">
                              <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员ID</label>
                                  <el-input v-model="value1" placeholder="请输入会员ID"></el-input>
                              </div>

                              <div class="mh-finance-input">
                                  <label class="el-form-item__label" style="width: 130px;">支付类型</label>
                                  <el-select v-model="value2" placeholder="请选择支付类型">
                                      <el-option
                                              v-for="item in shopgrounpnote"
                                              :key="item.id"
                                              :label="item.name"
                                              :value="item.id">
                                      </el-option>
                                  </el-select>
                              </div>

                             <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 130px;min-width: 128px">收款人</label>
                                  <el-input v-model="value3" placeholder="请输入收款人"></el-input>
                              </div>
                          </div>
                          <!--  一行   -->

                          <div class="m-search-box el-row el-row-my-div mh-finance-input">
                               <div class="vip-item-list_time mh-market-timeleght" >
                                <label class="el-form-item__label" style="width: 190px;">申请时间 : </label>
                                <el-date-picker 
                                        v-model="value4"
                                        value-format="timestamp"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        style="width: 100%"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                          </div>
                          <div class="goods-sx-btn f_opreate" style="display:flex;">
                                <button  type="button" class="el-button el-button--primary el-button--small" @click="shuaixuan(1,1)"><span>筛选</span></button>
                                <button  @click="cleardata" type="button" class="el-button el-button--text"><span>清空筛选条件</span></button>
                                <div class="f_tiXian">合计：提现金额{{tiXianAll}}</div>
                                <div class="f_shiFuAll">实付金额{{shiFuAll}}</div>
                          </div>

                      </div>
                        <div class="goods_table-all">
                            <el-table                         
                                    ref="multipleTable"
                                    :data="financedata"
                                    tooltip-effect="dark"
                                    border
                                    style="width:100%"
                                    :default-sort = "{prop: 'date', order: 'descending'}"
                                    @selection-change="goodshandleSelectionChange">     
                                <el-table-column
                                        prop="userId"
                                        label="会员ID"
                                        width="90">
                                </el-table-column>
                                 <el-table-column  
                                        prop="userNickName"                                                       
                                        label="昵称">
                                        <template slot-scope="scope">
                                            <div class="mh-finance-tab-div">
                                                <div>{{scope.row.userNickName ? scope.row.userNickName : ''}}</div>  
                                                 <div>{{scope.row.userPhone ? parseFloat(scope.row.userPhone) : ''}}</div>                                    
                                            </div>
                                        </template>
                                </el-table-column>  
                               
                                 <el-table-column                              
                                  prop="createTime"
                                  label="申请时间"
                                  width="145px"
                                  >
                                  <template slot-scope="scope">
                                      <div>
                                          {{scope.row.createTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>

                                <el-table-column label="可提现余额" width="100px">
                                    <template slot-scope="scope">
                                        <div>{{scope.row.balanceUsable/100}}</div>
                                    </template>
                                </el-table-column>

                                <el-table-column prop="money"
                                        label="提现金额(元)" width="130px">
                                    <template slot-scope="scope">
                                    <div class="goods-table">
                                        <span style="color:#5Cb87A">+{{parseFloat(scope.row.money/100)}}</span>
                                    </div>
                                   </template>
                                </el-table-column>

                                <el-table-column prop="money" label="实付金额(元)">
                                    <template slot-scope="scope">
                                        <span>{{parseFloat(scope.row.money/100)}}</span>
                                   </template>
                                </el-table-column>

                                <el-table-column
                                        prop="form"
                                        label="提现类型"
                                        show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        <div>
                                          {{scope.row.form == 1 ? '余额提现' : scope.row.form == 2 ? '佣金提现' : '' }}
                                        </div>
                                      </template>
                                </el-table-column>
                               
                                <el-table-column
                                        prop="payType"
                                    
                                        label="支付类型"
                                        show-overflow-tooltip>
                                        <template slot-scope="scope" v-if="scope.row.payTypeNumber == 4 && scope.row.tradeNo == null">
                                            <div>
                                                <div style="text-align: center;">{{scope.row.payType}}</div>
                                                <el-button type="warning" size="small" @click="editliushui(scope.row.id,scope.row.userId)">填写流水号</el-button>
                                            </div>
                                        </template>
                                </el-table-column>

                                 <el-table-column
                                        prop="tradeNo"                                
                                        label="交易流水号"
                                        show-overflow-tooltip>
                                </el-table-column>

                                 <el-table-column
                                        prop="incomeAccount"                                
                                        label="收款账号"
                                        show-overflow-tooltip>
                                </el-table-column>

                                 <el-table-column
                                        prop="incomeBank"                 
                                        label="开户行"
                                        show-overflow-tooltip>
                                </el-table-column>

                                 <el-table-column
                                        prop="incomeName"                 
                                        label="收款人"
                                        show-overflow-tooltip>
                                </el-table-column>
                                 <el-table-column                              
                                  prop="withdrawTime"
                                  label="支付时间"
                                  width="145px"
                                  >
                                  <template slot-scope="scope">
                                      <div>
                                          {{scope.row.withdrawTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>
                                <el-table-column
                                        prop="accountIllustration"                              
                                        label="操作人"
                                        show-overflow-tooltip>
                                          <template slot-scope="scope">
                                            <div class="mh-finance-tab-div">
                                                <div v-if="scope.row.auditAccount">提现审核 : {{scope.row.auditAccount}}</div>                                    
                                                <div v-if="scope.row.withdrawAccount">财务审核 : {{scope.row.withdrawAccount}}</div>   
                                            </div>
                                        </template>  
                                </el-table-column>
                                                    
                            </el-table>
                        </div>
                         <div class="el-row goods_list_dibu" style="display:flex;justify-content: flex-end;">
                            <div class="goods_list_dibu-onediv">
           
                            </div>
                            <div class="goods_list_dibu-twodiv cssbilie1">
                                <!-- small sizes-->
                                <el-pagination
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCountone">
                                </el-pagination>
                            </div>
                        </div>
                        <div  class="goods-footer"><p  class="copyright">Copyright 蜜獾</p></div>
                    </el-tab-pane>

                    <el-tab-pane label="提现拒绝记录" name="fourth">
                         <div class="shuaixuan mh-goods-shuaixuan">
                          <div class="m-search-box el-row el-row-my-div">
                              <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员ID</label>
                                  <el-input v-model="value1" placeholder="请输入会员ID"></el-input>
                              </div>

                              <div class="mh-finance-input">
                                  <label class="el-form-item__label" style="width: 130px;">支付类型</label>
                                  <el-select v-model="value2" placeholder="请选择支付类型">
                                      <el-option
                                              v-for="item in shopgrounpnote"
                                              :key="item.id"
                                              :label="item.name"
                                              :value="item.id">
                                      </el-option>
                                  </el-select>
                              </div>

                             <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 130px;min-width: 128px">收款人</label>
                                  <el-input v-model="value3" placeholder="请输入收款人"></el-input>
                              </div>
                          </div>
                          <!--  一行   -->

                          <div class="m-search-box el-row el-row-my-div mh-finance-input">
                               <div class="vip-item-list_time mh-market-timeleght" >
                                <label class="el-form-item__label" style="width: 190px;">申请时间 : </label>
                                <el-date-picker 
                                        v-model="value4"
                                        value-format="timestamp"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        style="width: 100%"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                          </div>
                          <div class="goods-sx-btn f_opreate">
                                <button  type="button" class="el-button el-button--primary el-button--small" @click="shuaixuan(1,1)"><!----><!----><span>筛选</span></button>
                                <button  @click="cleardata" type="button" class="el-button el-button--text"><!----><!----><span>清空筛选条件</span></button>
                                <div class="f_tiXian">合计：提现金额{{tiXianAll}}</div>
                                <div class="f_shiFuAll">实付金额{{shiFuAll}}</div>
                          </div>

                      </div>
                        <div class="goods_table-all">
                            <el-table                         
                                    ref="multipleTable"
                                    :data="financedata"
                                    tooltip-effect="dark"
                                    border
                                    style="width:100%"
                                    :default-sort = "{prop: 'date', order: 'descending'}"
                                    @selection-change="goodshandleSelectionChange">     
                                <el-table-column
                                        prop="userId"
                                        label="会员ID"
                                        width="90">
                                </el-table-column>
                                 <el-table-column  
                                        prop="userNickName"                                                       
                                        label="昵称">
                                        <template slot-scope="scope">
                                            <div class="mh-finance-tab-div">
                                                <div>{{scope.row.userNickName ? scope.row.userNickName : ''}}</div>  
                                                 <div>{{scope.row.userPhone ? parseFloat(scope.row.userPhone) : ''}}</div>                                    
                                            </div>
                                        </template>
                                </el-table-column>  
                               
                                 <el-table-column                              
                                  prop="createTime"
                                  label="申请时间"
                                  width="145px"
                                  >
                                  <template slot-scope="scope">
                                      <div>
                                          {{scope.row.createTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>

                                <el-table-column label="可提现余额" width="100px">
                                    <template slot-scope="scope">
                                        <div>{{scope.row.balanceUsable/100}}</div>
                                    </template>
                                </el-table-column>

                                <el-table-column prop="money"  label="提现金额(元)" width="130px">
                                    <template slot-scope="scope">
                                    <div class="goods-table">
                                        <span>{{parseFloat(scope.row.money/100)}}</span>
                                    </div>
                                   </template>
                                </el-table-column>
                                <el-table-column prop="money" label="实付金额(元)" width="130px">
                                    <template slot-scope="scope">
                                        {{parseFloat(scope.row.money/100)}}
                                    </template>
                                </el-table-column>
                               
                                <el-table-column
                                        prop="form"
                                        label="提现类型"
                                        show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        <div>
                                          {{scope.row.form == 1 ? '余额提现' : scope.row.form == 2 ? '佣金提现' : '' }}
                                        </div>
                                      </template>
                                </el-table-column>
                               
                                <el-table-column
                                        prop="payType"
                                    
                                        label="支付类型"
                                        show-overflow-tooltip>
                                </el-table-column>

                               
                                 <el-table-column
                                        prop="incomeAccount"                                
                                        label="收款账号"
                                        show-overflow-tooltip>
                                </el-table-column>

                                <el-table-column
                                        prop="incomeBank"                 
                                        label="开户行"
                                        show-overflow-tooltip>
                                </el-table-column>

                                 <el-table-column
                                        prop="incomeName"                 
                                        label="收款人"
                                        show-overflow-tooltip>
                                </el-table-column>
                                 <el-table-column                              
                                  prop="withdrawTime"
                                  label="拒绝时间"
                                  width="145px"
                                  >
                                  <template slot-scope="scope">
                                      <div>
                                          {{scope.row.createTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>
                                  <el-table-column
                                        prop="refuseReason"                              
                                        label="拒绝理由"
                                        show-overflow-tooltip>
                                </el-table-column>
                                <el-table-column
                                        prop="accountIllustration"                              
                                        label="操作人"
                                        show-overflow-tooltip>
                                     <template slot-scope="scope">
                                            <div class="mh-finance-tab-div">
                                                <div v-if="scope.row.auditAccount">提现审核 : {{scope.row.auditAccount}}</div>                                    
                                                <div v-if="scope.row.withdrawAccount">财务审核 : {{scope.row.withdrawAccount}}</div>   
                                            </div>
                                    </template>  
                                </el-table-column>
                                                    
                            </el-table>
                        </div>
                         <div class="el-row goods_list_dibu" style="display:flex;justify-content: flex-end;">
                            <div class="goods_list_dibu-onediv"></div>
                            <div class="goods_list_dibu-twodiv cssbilie1">
                                <!-- small sizes-->
                                <el-pagination
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCountone">
                                </el-pagination>
                            </div>
                        </div>
                        <div  class="goods-footer"><p  class="copyright">Copyright 蜜獾</p></div>
                    </el-tab-pane>

                    <el-tab-pane label="财务驳回记录" name="five">
                         <div class="shuaixuan mh-goods-shuaixuan">
                          <div class="m-search-box el-row el-row-my-div">
                              <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员ID</label>
                                  <el-input v-model="value1" placeholder="请输入会员ID"></el-input>
                              </div>

                              <div class="mh-finance-input">
                                  <label class="el-form-item__label" style="width: 130px;">支付类型</label>
                                  <el-select v-model="value2" placeholder="请选择支付类型">
                                      <el-option
                                              v-for="item in shopgrounpnote"
                                              :key="item.id"
                                              :label="item.name"
                                              :value="item.id">
                                      </el-option>
                                  </el-select>
                              </div>

                             <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 130px;min-width: 128px">收款人</label>
                                  <el-input v-model="value3" placeholder="请输入收款人"></el-input>
                              </div>
                          </div>
                          <!--  一行   -->

                          <div class="m-search-box el-row el-row-my-div mh-finance-input">
                               <div class="vip-item-list_time mh-market-timeleght" >
                                <label class="el-form-item__label" style="width: 190px;">申请时间 : </label>
                                <el-date-picker 
                                        v-model="value4"
                                        value-format="timestamp"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="开始日期"
                                        style="width: 100%"
                                        end-placeholder="结束日期">
                                </el-date-picker>
                            </div>
                          </div>
                          <div class="goods-sx-btn f_opreate">
                                <button  type="button" class="el-button el-button--primary el-button--small" @click="shuaixuan(1,1)"><!----><!----><span>筛选</span></button>
                                <button  @click="cleardata" type="button" class="el-button el-button--text"><!----><!----><span>清空筛选条件</span></button>
                                <div class="f_tiXian">合计：提现金额{{tiXianAll}}</div>
                                <div class="f_shiFuAll">实付金额{{shiFuAll}}</div>
                          </div>

                      </div>
                        <div class="goods_table-all">
                            <el-table                         
                                    ref="multipleTable"
                                    :data="financedata"
                                    tooltip-effect="dark"
                                    border
                                    style="width:100%"
                                    :default-sort = "{prop: 'date', order: 'descending'}"
                                    @selection-change="goodshandleSelectionChange">     
                                <el-table-column
                                        prop="userId"
                                        label="会员ID"
                                        width="90">
                                </el-table-column>
                                 <el-table-column  
                                        prop="userNickName"                                                       
                                        label="昵称">
                                        <template slot-scope="scope">
                                            <div class="mh-finance-tab-div">
                                                <div>{{scope.row.userNickName ? scope.row.userNickName : ''}}</div>  
                                                 <div>{{scope.row.userPhone ? parseFloat(scope.row.userPhone) : ''}}</div>                                    
                                            </div>
                                        </template>
                                </el-table-column>  
                               
                                 <el-table-column                              
                                  prop="createTime"
                                  label="申请时间"
                                  width="145px"
                                  >
                                  <template slot-scope="scope">
                                      <div>
                                          {{scope.row.createTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>

                                <el-table-column label="可提现余额" width="100px">
                                    <template slot-scope="scope">
                                        <div>{{scope.row.balanceUsable/100}}</div>
                                    </template>
                                </el-table-column>

                                <el-table-column prop="money" label="提现金额(元)" width="130px">
                                    <template slot-scope="scope">
                                    <div class="goods-table">
                                        <span>{{parseFloat(scope.row.money/100)}}</span>
                                    </div>
                                   </template>
                                </el-table-column>
                                <el-table-column prop="money" label="实付金额(元)" width="130px">
                                    <template slot-scope="scope">
                                        {{parseFloat(scope.row.money/100)}}
                                    </template>
                                </el-table-column>
                               
                                <el-table-column
                                        prop="form"
                                        label="提现类型"
                                        show-overflow-tooltip>
                                        <template slot-scope="scope">
                                        <div>
                                          {{scope.row.form == 1 ? '余额提现' : scope.row.form == 2 ? '佣金提现' : '' }}
                                        </div>
                                      </template>
                                </el-table-column>
                               
                                <el-table-column
                                        prop="payType"
                                    
                                        label="支付类型"
                                        show-overflow-tooltip>
                                </el-table-column>

                               
                                 <el-table-column
                                        prop="incomeAccount"                                
                                        label="收款账号"
                                        show-overflow-tooltip>
                                </el-table-column>

                                 <el-table-column
                                        prop="incomeBank"                 
                                        label="开户行"
                                        show-overflow-tooltip>
                                </el-table-column>

                                <el-table-column
                                        prop="incomeName"                 
                                        label="收款人"
                                        show-overflow-tooltip>
                                </el-table-column>
                                 <el-table-column                              
                                  prop="withdrawTime"
                                  label="驳回时间"
                                  width="145px"
                                  >
                                  <template slot-scope="scope">
                                      <div>
                                          {{scope.row.createTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>
                                  <el-table-column
                                        prop="refuseReason"                              
                                        label="驳回理由"
                                        show-overflow-tooltip>
                                </el-table-column>
                                <el-table-column
                                        prop="accountIllustration"                              
                                        label="操作人"
                                        show-overflow-tooltip>
                                     <template slot-scope="scope">
                                            <div class="mh-finance-tab-div">
                                                <div v-if="scope.row.auditAccount">提现审核 : {{scope.row.auditAccount}}</div>                                    
                                                <div v-if="scope.row.withdrawAccount">财务审核 : {{scope.row.withdrawAccount}}</div>   
                                            </div>
                                    </template>  
                                </el-table-column>
                                                    
                            </el-table>
                        </div>
                         <div class="el-row goods_list_dibu" style="display:flex;justify-content: flex-end;">
                            <div class="goods_list_dibu-onediv"></div>
                            <div class="goods_list_dibu-twodiv cssbilie1">
                                <!-- small sizes-->
                                <el-pagination
                                        @current-change="handleCurrentChange"
                                        :current-page="currentPage4"
                                        :page-sizes="[100, 200, 300, 400]"
                                        :page-size="20"
                                        layout="total, prev, pager, next, jumper"
                                        :total="totalCountone">
                                </el-pagination>
                            </div>
                        </div>
                        <div  class="goods-footer"><p  class="copyright">Copyright 蜜獾</p></div>
                    </el-tab-pane>

                </el-tabs>
       
                <!-- 商品名字 -->
                <el-dialog title="驳回" :visible.sync="jujueTan" width="40%">
                    <div class="mh-goodslist-pricetan">
                        <span class="mh-goodslist-pricetan_span">驳回理由:</span>
                        <div class="mh-goodslist-pricetan_div">
                               <el-input type="textarea" :rows="5" placeholder="请输入驳回理由" v-model="textareacontent" maxlength="80" show-word-limit ></el-input>
                                      
                        </div>                 
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="jujueTan = false">取 消</el-button>
                        <el-button type="primary" @click="jujueTanok" v-if="tixianIndex == 1 ">确 定</el-button>
                           <el-button type="primary" @click="caiwujujueMethod" v-if="tixianIndex == 2 ">确 定</el-button>
                    </span>
                </el-dialog>

                <el-dialog title="驳回" :visible.sync="PjujueTan" width="40%">
                    <div class="mh-goodslist-pricetan">
                        <span class="mh-goodslist-pricetan_span">驳回理由:</span>
                        <div class="mh-goodslist-pricetan_div">
                               <el-input type="textarea" :rows="5" placeholder="请输入驳回理由" v-model="Ptextareacontent" maxlength="80" show-word-limit ></el-input>
                                      
                        </div>                 
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="jujueTan = false">取 消</el-button>
                        <el-button type="primary" @click="pLtx" v-if="tixianIndex == 1 ">确 定</el-button>
                           <el-button type="primary" @click="pJUtank" v-if="tixianIndex == 2 ">确 定</el-button>
                    </span>
                </el-dialog>

                <!-- 修改交易流水号 -->
                <el-dialog title="填写流水号" :visible.sync="editliushuiTan" width="40%">
                    <div class="mh-goodslist-pricetan">
                        <span class="mh-goodslist-pricetan_span">交易流水号:</span>
                        <div class="mh-goodslist-pricetan_div">
                               <el-input type="text"  placeholder="请输入流水号" v-model="editliushuiNumber"></el-input>         
                        </div> 
                                      
                    </div>
                     <div style="color:#F56C6C;padding: 10px 0 0 112px;">
                            填写后不可修改,请谨慎操作    
                    </div> 
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="editliushuiTan = false">取 消</el-button>
                        <el-button type="primary" @click="editliushuiTanMethod">确 定</el-button>
                    </span>
                </el-dialog>

                <!-- 修改流水号 -->

                <div>
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
import navbar from '../navbar';
import sidebar from '../sidebar';
import financenavbar from './financenavbar';
import baseapi from '../../utils/api';
import {    
        zm_jsonToString,
        zm_formDataToString
} from "../../filters/zm_tools"

export default {
     data() {
        return {
            editliushuiTan:false,
            editliushuiNumber:'',
            tradeNoId:'',
            tradeNouserId:'',
            tiXianAll: '',
            shiFuAll: '',

            loading:true,
            value1:'',
            value2:'',
            value3:'',
            value4:[],

            shopgrounpnote:[
              {
              'id':0,
              'name':'全部'
               }, {
              'id':1,
              'name':'支付宝支付'
               }, {
              'id':2,
              'name':'微信支付'
               }, {
              'id':4,
              'name':'线下支付'
               }
            ],

            totalCountone:'',

            financedata:[],

            jujueTan:false,

            syboldata:{
              1: {name: "1", property: "支付宝", pid: 62, remark: "", id: 63, type: 12},
              2: {name: "2", property: "微信", pid: 62, remark: "", id: 64, type: 12},
              3: {name: "3", property: "余额", pid: 62, remark: "", id: 65, type: 12},
              4: {name: "4", property: "线下", pid: 62, remark: "", id: 66, type: 12},
              5: {name: "5", property: "货到付款", pid: 62, remark: "", id: 67, type: 12},
              6: {name: "6", property: "佣金付款", pid: 62, remark: "", id: 208, type: 12}
            },

            activeName:'first',
            textareacontent:'',//驳回理由
            jujueMethodid:'',
            jujueMethoduserId:'',
            tixianIndex:0,
            qiehuanstatus:0,

            manyxuArr:[],//批量
            mantxuFlog:false,
            PjujueTan:false,
            Ptextareacontent:''
        };
    },
    //路由前置
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
        this.requestFinance();
    },
    methods: {
        editliushui(id,userId){  
            this.editliushuiTan = true;
            this.tradeNoId = id;
            this.tradeNouserId = userId;
            this.editliushuiNumber = '';
        },
        editliushuiTanMethod(){
            let that = this;
            let data = new FormData();
            data.append('id',this.tradeNoId);
            data.append('tradeNo',this.editliushuiNumber);
            this.$http({
                method: "post",
                url: baseapi.financetradeNo,
                data: data,
                headers: {'userId':this.tradeNouserId}
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 200 ){
                    that.$message.success('填写流水号成功');
                    that.editliushuiTan = false;
                    that.requestFinance();
                }else{
                    that.$message.error(res.data.message);
                }
            }) 
        },
        piliangMthod(){
            let arr = this.manyxuArr;
            this.$confirm('确定批量处理提现申请吗, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    arr.forEach((item,index)=>{
                    if(item){
                        this.piliangdataMethod(item.id,item.userId,index,1)
                    }      
                })
            })  
        },
        //提现申请批量请求 同意
        piliangdataMethod(id,userId,index,status){
            let that = this;
            let data = new FormData();
            data.append('auditUserId',that.$cookie.get('userId'));
            data.append('id',id);
            data.append('userId',userId);
            data.append('status',status);
            this.$http({
                method: "post",
                url: baseapi.financeListTy,
                data: data,
                    headers: {'userId':userId }
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 200 && index == that.manyxuArr.length-1){
                    that.$message.success('批量提现申请成功');
                    that.requestFinance();
                }else{
                    that.$message.success('批量提现操作失败')
                }
            })     
        },
        //tab状态
        goodshandleSelectionChange(val) {
            console.log(val);
            this.manyxuArr = val
        
        },
        //提现申请批量请求 拒绝
        piliangJuejuMthod(){
            this.PjujueTan = true;
            this.tixianIndex = 1;
        },

        //批量提现拒绝
        pLtx(){
            let arr = this.manyxuArr;
            arr.forEach((item,index)=>{
                if(item){
                    this.pLtxMethod(item.id,item.userId)
                }      
            })
        },
        pLtxMethod(id,userId){
            let that = this;
               if(this.Ptextareacontent != ''){
                let data = new FormData();       
                    data.append('id',id);
                    data.append('status',-1);
                    data.append('refuseReason',this.Ptextareacontent);
                    data.append('auditUserId',that.$cookie.get('userId'));
                    this.$http({
                        method: "post",
                        url: baseapi.financeListTy,
                        data: data,
                        headers: {'userId':userId }
                    })
                    .then(function(res){
                      console.log(res);
                        if(res.data.status == 200){
                            that.$message.success('拒绝成功');
                            that.PjujueTan = false;
                            that.requestFinance();
                        }
                    })
            }else{
              that.$message.warning('拒绝理由不能为空');
            }
        },
        //审核 同意操作
        piliangcaiwuMthod(){
            let arr = this.manyxuArr;
            this.$confirm('确定批量处理财务审核吗, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    arr.forEach((item,index)=>{
                    if(item){
                        this.caiwuPL(item.id,item.userId,index,1)
                    }      
                })
            })    
        },
        //财务批量同意函数
        caiwuPL(id,userId,index){
            let that = this;
            let data = new FormData();
            data.append('id',id);
            data.append('status',1);
            data.append('withdrawUserId',that.$cookie.get('userId'));
            this.$http({
                method: "post",
                url: baseapi.financeListShTy,
                data: data,
                headers: {'userId':userId }
            })
            .then(function(res){
                console.log(res);
                if(res.data.status == 200 && index == that.manyxuArr.length-1){
                    that.$message.success('批量审核成功')
                    that.requestFinance();
                }else{
                    that.$message.success('批量审核操作失败')
                }
            })     
        },
        //审核驳回
        piliangjujuecaiwuMthod(id,userId){
            this.PjujueTan = true;
            this.tixianIndex = 2;
        },
        pJUtank(){
            let arr = this.manyxuArr;
            arr.forEach((item,index)=>{
                if(item){
                    this.caiwuPJU(item.id,item.userId)
                }      
            })
        },
        //批量审核拒绝
        caiwuPJU(id,userId){
            let that = this;
            if(this.Ptextareacontent != ''){
                let data = new FormData();
                    data.append('id',id);
                    data.append('status',-1);
                    data.append('refuseReason',this.Ptextareacontent);  
                    data.append('withdrawUserId',that.$cookie.get('userId')); 
                    this.$http({
                        method: "post",
                        url: baseapi.financeListShTy,
                        data: data,
                        headers: {'userId': userId }
                    })
                    .then(function(res){
                      console.log(res);
                        if(res.data.status == 200){
                            that.$message.success('驳回成功')
                            that.requestFinance();
                            that.PjujueTan = false;
                            that.Ptextareacontent = '';
                        }
                    })
            }else{
              that.$message.warning('驳回理由不能为空');
            }
        },
        // 请求列表
        requestFinance(page=1){
            let that = this;
            let data = new FormData();
            if(this.value1 != ''){
                 data.append('suid',this.value1);//账号手机号
            }
            if(this.value2 != ''){
                 data.append('spaytype',this.value2);//账号手机号
            }
            if(this.value3 != ''){
                 data.append('sincomeName',this.value3);//账号手机号
            }
            if(this.value4.length != 0){
                data.append('sptimestart',this.value4[0]);
                data.append('sptimeend',this.value4[1]); 
            }

            data.append('status',this.qiehuanstatus);
            data.append('page',page);
            data.append('limit',20);
            data.append('stype',0);

            this.$http({
                method: "post",
                url: baseapi.financeList,
                data: data

            }).then(function(res){
              console.log(res);
              if(res.data.status ==200){
                console.log('---提现记录',zm_jsonToString(res.data));
                let list = res.data.list;
                let tiXianAll = 0;
                let shiFuAll = 0;
                for (let i = 0; i < list.length; i++) {
                    const element = list[i];
                    tiXianAll = tiXianAll +element.money*1;
                    shiFuAll  = shiFuAll  +element.money*1;
                }
                for(let key in  that.syboldata ){
                    list.forEach(function(item){
                        if(item.payType == that.syboldata[key].name){
                          item.payTypeNumber = item.payType;
                          item.payType = that.syboldata[key].property;
                        }
                    })
                }
                that.tiXianAll = tiXianAll/100;
                that.shiFuAll  = shiFuAll/100;
                that.financedata = list;
                that.totalCountone = res.data.totalCount;
                that.loading = false;
              }
              if(res.data.status != 200){
                    that.$message.error(res.data.message);
                    that.financedata = [];
                    that.totalCountone = 0;
              }   
            })
        },
        //筛选
        shuaixuan(){
            this.requestFinance()
        },
        //清除
        cleardata(){
            this.value1 = '';
            this.value2 = '';
            this.value3 = '';
            this.value4 = [];
        },
        //同意处理提现开始
        aggreeMethod(id,userId){
            let that = this;
            let data = new FormData();
            this.$confirm('确定通过审核吗, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    data.append('auditUserId',that.$cookie.get('userId'));
                    data.append('id',id);
                    data.append('userId',userId);
                    data.append('status',1);
                    this.$http({
                        method: "post",
                        url: baseapi.financeListTy,
                        data: data,
                         headers: {'userId':userId }
                    })
                    .then(function(res){
                      console.log(res);
                        if(res.data.status == 200){
                           that.$message.success('提现申请成功')
                           that.requestFinance();
                        }
                    }) 
                })
        },
        //拒绝
        jujueMethod(id,userId){
            this.jujueTan = true;
            this.tixianIndex = 1;
            this.jujueMethodid = id;
            this.jujueMethoduserId = userId;
        },
        //确定拒绝 提现
        jujueTanok(){
            let that = this;
            if(this.textareacontent != ''){
                let data = new FormData();
                    data.append('auditUserId',that.$cookie.get('userId'));
                    data.append('id', that.jujueMethodid);
                    data.append('userId',that.jujueMethoduserId);
                    data.append('status',-1);
                    data.append('refuseReason',this.textareacontent);
                    
                    this.$http({
                        method: "post",
                        url: baseapi.financeListTy,
                        data: data,
                         headers: {'userId':   that.jujueMethoduserId }
                    })
                    .then(function(res){
                      console.log(res);
                        if(res.data.status == 200){
                            that.$message.success('拒绝成功');
                            that.jujueTan = false;
                            that.requestFinance();
                        }
                    })
            }else{
              that.$message.warning('拒绝理由不能为空');
            }
           
        },
        //处理提现
        //财务审核同意 -- 拒绝
        caiwujuMethod(id,userId){
            this.jujueTan = true;
            this.tixianIndex = 2;
            this.jujueMethodid = id;
            this.jujueMethoduserId = userId;
        },
        caiwujujueMethod(){
            let that = this;
            if(this.textareacontent != ''){
                let data = new FormData();
                    data.append('withdrawUserId',that.$cookie.get('userId'));
                    data.append('id', that.jujueMethodid);
                    data.append('userId',that.jujueMethoduserId);
                    data.append('status',-1);
                    data.append('refuseReason',this.textareacontent);   
                    this.$http({
                        method: "post",
                        url: baseapi.financeListShTy,
                        data: data,
                        headers: {'userId':   that.jujueMethoduserId }
                    })
                    .then(function(res){
                      console.log(res);
                        if(res.data.status == 200){
                            that.$message.success('驳回成功')
                            that.requestFinance();
                            that.jujueTan = false;
                        }
                    })
            }else{
              that.$message.warning('驳回理由不能为空');
            }
        },
        //财务同意
        caiwuaggreeMethod(id,userId){
            let that = this;
            let data = new FormData();
            this.$confirm('确定通过财务审核吗, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    data.append('id',id);
                    data.append('userId',userId);
                    data.append('status',1);
                    data.append('withdrawUserId',that.$cookie.get('userId'));//当前登录的账户ID
                    this.$http({
                        method: "post", 
                        url:"http://api.mihuanshop.com/finance/withdraw/admin/withdraw",
                        data: data,
                         headers: {'userId':userId }
                    })
                    .then(function(res){
                      console.log(res);
                        if(res.data.status == 200){
                           that.$message.success('操作成功')
                           that.requestFinance();
                        }
                    }) 
                })
        },

        //分页事件
        handleCurrentChange(val){
            this.finance(val)
        },

        //tab点击事件
        handleClick(tab, event) {
          console.log(tab.index)

            if(tab.index == 0){
              this.qiehuanstatus = 0;
              this.requestFinance(1);
            }
            if(tab.index == 1){
              this.qiehuanstatus = 1;
              this.requestFinance(1)
            }
            if(tab.index == 2){
                this.qiehuanstatus = 2;
              this.requestFinance(1)
            }
            if(tab.index == 3){
              this.qiehuanstatus = -1;
              this.requestFinance(1);
            }
            if(tab.index == 4){
              this.qiehuanstatus = -2;
              this.requestFinance(1);
            }
        },
        //请求数据字典
         shujuSmole(parme){
            let that = this;
            let data = new FormData();       
            this.$http({
                method: "post",
                url:baseapi.sysbelNum12,//随便一个工程名
                data: data
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
                    that.syboldata = res.data.data;
                    console.log(data);
                    // that.zuiStatus = data[parme].property;
                } 
            }).catch(function(error){
                console.error(error);
            }); 
        },
        //三栏目同意提现记录
    },
    components:{
        navbar,sidebar,financenavbar    
    }
}
</script>

<style>

.f_opreate{
    display:flex;
}
.f_tiXian{
    font-size: 20px !important;
    margin: 10px 50px 0 150px;
}
.f_shiFuAll{
    font-size: 20px !important;
    margin: 10px 0 0 0px;
}
/* .f_allMoney{
    margin: 10px 0 0 50px;
} */
      .mh-finance-input  .el-input__icon{
        line-height: 28px !important;
      }
       .mh-finance-input .el-date-editor .el-range-separator{
          line-height: 28px !important;
       }
</style>