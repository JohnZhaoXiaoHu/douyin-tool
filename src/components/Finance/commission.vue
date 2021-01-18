<template>
<!-- 佣金转余额 -->
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
                    <el-tab-pane label="佣金转余额申请" name="first" >
                      <div class="shuaixuan mh-goods-shuaixuan">
                          <div class="m-search-box el-row el-row-my-div">
                              <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员ID</label>
                                  <el-input v-model="value1" placeholder="请输入会员ID"></el-input>
                              </div>

                              <div class="mh-finance-input">
                                  <label class="el-form-item__label" style="width: 130px;">佣金来源</label>
                                  <el-select v-model="value2" placeholder="请选择支付类型">
                                      <el-option
                                              v-for="item in shopgrounpnote"
                                              :key="item.name"
                                              :label="item.property"
                                              :value="item.name">
                                      </el-option>
                                  </el-select>
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
                          <div class="goods-sx-btn">
                              <button  type="button" class="el-button el-button--primary el-button--small" @click="shuaixuan(1,1)"><!----><!----><span>筛选</span></button>
                              <button  @click="cleardata" type="button" class="el-button el-button--text"><!----><!----><span>清空筛选条件</span></button>
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
                                    >
                                </el-table-column>
                                 <el-table-column  
                                        prop="userName"                                                       
                                        label="昵称">
                                        <template slot-scope="scope">                                         
                                            <div>{{scope.row.userNickName ? scope.row.userNickName :scope.row.userName}}</div>  
                                         </template>
                                </el-table-column> 
                                 <el-table-column
                                        prop="userPhone"
                                        label="手机号"
                                  >
                                </el-table-column> 
                                  <el-table-column
                                        prop="money"
                                        label="转余额金额(元)">
                                    <template slot-scope="scope">
                                    <div class="goods-table">
                                        <span>{{parseFloat(scope.row.money/100)}}</span>
                                    
                                    </div>
                                   </template>
                                </el-table-column>
                             

                                 <el-table-column
                                        prop="illustration"
                                        label="类型"
                                        show-overflow-tooltip>
                                </el-table-column>

                                 <el-table-column
                                        prop="source"
                                        label="转余额来源"
                                  >
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
                                                                                
                                <el-table-column
                                        prop="handle"
                                        label="操作"
                                        width="170px">
                                        show-overflow-tooltip>
                                     <template slot-scope="scope">
                                        <div>
                                            <el-button  size="small" @click="aggreeMethod(scope.row.id,scope.row.userId)">通过</el-button>
                                            <el-button type="danger" size="small" @click="jujueMethod(scope.row.id,scope.row.userId)">驳回</el-button> 
                                        </div>
                                      
                                         
                                    </template>
                                </el-table-column>
                                
                            </el-table>
                        </div>

                        <div class="el-row goods_list_dibu" style="display:flex;justify-content: flex-end;">
                            <div class="goods_list_dibu-onediv">
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>全选</span></button> -->
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>取消全选</span></button> -->
                                <!-- <button type="button" @click="editgoodsGrounp" class="el-button el-button--default el-button--small"><span>改分组</span></button> -->
                                <!-- <button type="button" @click="editcategoryevent"  class="el-button el-button--default el-button--small"><span>改分类</span></button> -->
                                <!-- <button type="button"  @click="editUpissue" class="el-button el-button--default el-button--small"><span>下架</span></button> -->
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>删除</span></button> -->
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>更多</span></button> -->
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
                    <el-tab-pane label="佣金转余额通过记录" name="second" >
                        <div class="shuaixuan mh-goods-shuaixuan">
                          <div class="m-search-box el-row el-row-my-div">
                              <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员ID</label>
                                  <el-input v-model="value1" placeholder="请输入会员ID"></el-input>
                              </div>

                              <div class="mh-finance-input">
                                  <label class="el-form-item__label" style="width: 130px;">佣金来源</label>
                                  <el-select v-model="value2" placeholder="请选择支付类型">
                                      <el-option
                                              v-for="item in shopgrounpnote"
                                              :key="item.name"
                                              :label="item.property"
                                              :value="item.name">
                                      </el-option>
                                  </el-select>
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
                          <div class="goods-sx-btn">
                              <button  type="button" class="el-button el-button--primary el-button--small" @click="shuaixuan(1,1)"><!----><!----><span>筛选</span></button>
                              <button  @click="cleardata" type="button" class="el-button el-button--text"><!----><!----><span>清空筛选条件</span></button>
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
                                   >
                                </el-table-column>
                                 <el-table-column  
                                        prop="userNickName"                                                       
                                        label="昵称">
                                        <template slot-scope="scope">       
                                        <div>{{scope.row.userNickName ? scope.row.userNickName : scope.row.userName}}</div>                                                       
                                        </template>
                                </el-table-column>  

                                 <el-table-column
                                        prop="userPhone"
                                        label="手机号"
                                        >
                                </el-table-column>

                                <el-table-column
                                        prop="money"
                                        label="转余额金额(元)">
                                    <template slot-scope="scope">
                                    <div class="goods-table">
                                        <span style="color:#5Cb87A">+{{parseFloat(scope.row.money/100)}}</span>
                                    
                                    </div>
                                   </template>
                                    </el-table-column>

                                 <el-table-column
                                        prop="illustration"
                                        label="类型"
                                        show-overflow-tooltip>
                                </el-table-column>

                                <el-table-column
                                    prop="source"
                                    label="转余额来源"
                                    >
                                </el-table-column>
                               
                              
                                 <el-table-column                              
                                  prop="createTime"
                                  label="申请时间"
                                  >
                                  <template slot-scope="scope">
                                      <div>
                                          {{scope.row.createTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>

                                 <el-table-column                              
                                  prop="auditTime"
                                  label="通过时间"
                                  >
                                  <template slot-scope="scope">
                                      <div  v-if="scope.row.auditTime">
                                          {{scope.row.auditTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>
                                <el-table-column
                                        prop="auditAccount"                            
                                        label="操作人"
                                        show-overflow-tooltip>
                                </el-table-column>
                                                    
                            </el-table>
                        </div>
                        <div class="el-row goods_list_dibu" style="display:flex;justify-content: flex-end;">
                            <div class="goods_list_dibu-onediv">
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>全选</span></button> -->
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>取消全选</span></button> -->
                                <!-- <button type="button" @click="editgoodsGrounp" class="el-button el-button--default el-button--small"><span>改分组</span></button> -->
                                <!-- <button type="button" @click="editcategoryevent"  class="el-button el-button--default el-button--small"><span>改分类</span></button> -->
                                <!-- <button type="button"  @click="editUpissue" class="el-button el-button--default el-button--small"><span>下架</span></button> -->
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>删除</span></button> -->
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>更多</span></button> -->
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
                    <el-tab-pane label="佣金转余额驳回记录" name="third">
                         <div class="shuaixuan mh-goods-shuaixuan">
                          <div class="m-search-box el-row el-row-my-div">
                              <div class="sx-input">
                                  <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员ID</label>
                                  <el-input v-model="value1" placeholder="请输入会员ID"></el-input>
                              </div>

                              <div class="mh-finance-input">
                                  <label class="el-form-item__label" style="width: 130px;">佣金来源</label>
                                  <el-select v-model="value2" placeholder="请选择支付类型">
                                      <el-option
                                              v-for="item in shopgrounpnote"
                                              :key="item.name"
                                              :label="item.property"
                                              :value="item.name">
                                      </el-option>
                                  </el-select>
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
                          <div class="goods-sx-btn">
                              <button  type="button" class="el-button el-button--primary el-button--small" @click="shuaixuan(1,1)"><!----><!----><span>筛选</span></button>
                              <button  @click="cleardata" type="button" class="el-button el-button--text"><!----><!----><span>清空筛选条件</span></button>
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
                                     >
                                </el-table-column>
                                  <el-table-column  
                                        prop="userNickName"                                                       
                                        label="昵称">
                                        <template slot-scope="scope">       
                                        <div>{{scope.row.userNickName ? scope.row.userNickName : scope.row.userName}}</div>                                                       
                                        </template>
                                </el-table-column>   
                                 <el-table-column
                                        prop="userPhone"
                                        label="手机号"
                                      >
                                </el-table-column>

                                 <el-table-column
                                        prop="money"
                                        label="转余额金额(元)">
                                    <template slot-scope="scope">
                                    <div class="goods-table">
                                        <span>{{parseFloat(scope.row.money/100)}}</span>
                                    
                                    </div>
                                   </template>
                                  </el-table-column>

                                   <el-table-column
                                        prop="illustration"
                                        label="类型"
                                        show-overflow-tooltip>
                                </el-table-column>

                                  <el-table-column
                                        prop="source"
                                        label="转余额来源"
                                       >
                                </el-table-column>
                               
                                 <el-table-column                              
                                  prop="createTime"
                                  label="申请时间"
                           
                                  >
                                  <template slot-scope="scope">
                                      <div>
                                          {{scope.row.createTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>

                                 
                            
                                 <el-table-column                              
                                  prop="auditTime"
                                  label="驳回时间"
                                  >
                                  <template slot-scope="scope">
                                      <div v-if="scope.row.auditTime">
                                          {{scope.row.auditTime.time | dateFormat}}
                                      </div>
                                  </template>
                                  </el-table-column>
                                  <el-table-column
                                        prop="refuseReason"
                                        label="驳回理由"
                                       >
                                </el-table-column>                               
                                <el-table-column
                                        prop="auditAccount"                              
                                        label="操作人"
                                        show-overflow-tooltip>
                                </el-table-column>
                                                    
                            </el-table>
                        </div>
                        <div class="el-row goods_list_dibu" style="display:flex;justify-content: flex-end;">
                            <div class="goods_list_dibu-onediv">
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>全选</span></button> -->
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>取消全选</span></button> -->
                                <!-- <button type="button" @click="editgoodsGrounp" class="el-button el-button--default el-button--small"><span>改分组</span></button> -->
                                <!-- <button type="button" @click="editcategoryevent"  class="el-button el-button--default el-button--small"><span>改分类</span></button> -->
                                <!-- <button type="button"  @click="editUpissue" class="el-button el-button--default el-button--small"><span>下架</span></button> -->
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>删除</span></button> -->
                                <!-- <button type="button" class="el-button el-button--default el-button--small"><span>更多</span></button> -->
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
                </el-tabs>
       
    
                <!-- 弹窗 -->
                <el-dialog title="驳回" :visible.sync="jujueTan" width="40%">
                    <div class="mh-goodslist-pricetan">
                        <span class="mh-goodslist-pricetan_span">驳回理由:</span>
                        <div class="mh-goodslist-pricetan_div">
                               <el-input type="textarea" :rows="5" placeholder="请输入驳回理由" v-model="textareacontent" maxlength="80" show-word-limit ></el-input>
                                      
                        </div>                 
                    </div>
                    <span slot="footer" class="dialog-footer">
                        <el-button @click="jujueTan = false">取 消</el-button>
                        <el-button type="primary" @click="jujueTanok">确 定</el-button>
                      
                    </span>
                </el-dialog>

                <div>
            </div>

            <!--选项卡组件 over-->
            </div>
            <!-- 商品中心over-->
            </div>
        </div>
    </div>
    <!--主体 over-->
    </div>
</template>
<script>
import navbar from '../navbar';
import sidebar from '../sidebar';
import financenavbar from './financenavbar';
import baseapi from '../../utils/api';
export default {
     data() {
        return {
            loading:false,
            value1:'',
            value2:'',
            value4:[],

            shopgrounpnote:[
             {
                "name": "1",
                "property": "IOS客户端",
                "pid": 52,
                "remark": "",
                "id": 53,
                "type": 10
                },
                {
                "name": "2",
                "property": "安卓客户端",
                "pid": 52,
                "remark": "",
                "id": 54,
                "type": 10
                },
                {
                "name": "3",
                "property": "微信小程序",
                "pid": 52,
                "remark": "",
                "id": 55,
                "type": 10
                },
                {
                "name": "4",
                "property": "微信公众号",
                "pid": 52,
                "remark": "",
                "id": 56,
                "type": 10
                },
                {
                "name": "5",
                "property": "网页",
                "pid": 52,
                "remark": "",
                "id": 57,
                "type": 10
                },
                {
                "name": "6",
                "property": "后台",
                "pid": 52,
                "remark": "",
                "id": 188,
                "type": 10
                },
                {
                "name": "7",
                "property": "手机网页",
                "pid": 52,
                "remark": "",
                "id": 200,
                "type": 10
                }
            ],

            laiyuan:{  //来源
              "1": {
                    "name": "1",
                    "property": "IOS客户端",
                    "pid": 52,
                    "remark": "",
                    "id": 53,
                    "type": 10
                    },
                    "2": {
                    "name": "2",
                    "property": "安卓客户端",
                    "pid": 52,
                    "remark": "",
                    "id": 54,
                    "type": 10
                    },
                    "3": {
                    "name": "3",
                    "property": "微信小程序",
                    "pid": 52,
                    "remark": "",
                    "id": 55,
                    "type": 10
                    },
                    "4": {
                    "name": "4",
                    "property": "微信公众号",
                    "pid": 52,
                    "remark": "",
                    "id": 56,
                    "type": 10
                    },
                    "5": {
                    "name": "5",
                    "property": "网页",
                    "pid": 52,
                    "remark": "",
                    "id": 57,
                    "type": 10
                    },
                    "6": {
                    "name": "6",
                    "property": "后台",
                    "pid": 52,
                    "remark": "",
                    "id": 188,
                    "type": 10
                    },
                    "7": {
                    "name": "7",
                    "property": "手机网页",
                    "pid": 52,
                    "remark": "",
                    "id": 200,
                    "type": 10
                    }
            },

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

         
            qiehuanstatus:0
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
        this.finance();
     
    },
    methods: {
        finance(page=1){
            let that = this;
            let data = new FormData();
            if(this.value1 != ''){
                data.append('suid',this.value1);
            }
            if(this.value2 != ''){
                 data.append('ssource',this.value2);//账号手机号
            }
            if(this.value4.length != 0){
                data.append('stimestart',this.value4[0]);
                data.append('stimeend',this.value4[1]); 
            }
            data.append('status',this.qiehuanstatus);
            data.append('page',page);
            data.append('limit',20);
            this.$http({
                method: "post",
                url: baseapi.yongjinYeList,
                data: data
            })
            .then(function(res){
              console.log(res);
              if(res.data.status ==200){
                console.log('佣金转余额',res);
                let list = res.data.list;
                for(let key  in   that.syboldata ){
                    list.forEach(function(item){
                        if(item.source == that.laiyuan[key].name){
                          item.source = that.laiyuan[key].property
                        }
                    })
                }
                that.financedata = list;
                that.totalCountone = res.data.totalCount;
                that.loading = false;
              }
              if(res.data.status != 200){
                  that.$message.error(res.data.message);
                  that.financedata = [];
                  that.totalCountone =  0 ;
                }   
            })
        },
        //筛选
        shuaixuan(){
            this.finance()
        },
        //清除
        cleardata(){
            this.value1 = '';
            this.value2 = '';
            this.value3 = '';
            this.value4 = [];
        },
        //同意
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
                    data.append('status',1);
                    this.$http({
                        method: "post",
                        url: baseapi.yongjinYeListTy,
                        data: data,
                         headers: {'userId':userId }
                    })
                    .then(function(res){
                      console.log(res);
                        if(res.data.status == 200){
                           that.$message.success('佣金转余额操作成功')
                           that.finance();
                        }
                    }) 
                })
        },
        //拒绝
        jujueMethod(id,userId){
            this.jujueTan = true;
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
                    data.append('status',-1);
                    data.append('refuseReason',this.textareacontent);
    
                    this.$http({
                        method: "post",
                        url: baseapi.yongjinYeListTy,
                        data: data,
                         headers: {'userId': that.jujueMethoduserId }
                    })
                    .then(function(res){
                      console.log(res);
                        if(res.data.status == 200){
                            that.$message.success('驳回成功');
                            that.jujueTan = false;
                            that.finance();
                        }
                    })
            }else{
              that.$message.warning('驳回理由不能为空');
            }          
        },
        //分页事件
        handleCurrentChange(val){
          this.finance(val);
        },
        //ables多选事件
        goodshandleSelectionChange(){
          
        },
        //tab点击事件
        handleClick(tab, event) {
          console.log(tab.index)

           if(tab.index == 0){
              this.qiehuanstatus = 0;
              this.finance(1);
            
          }

           if(tab.index == 1){
              this.qiehuanstatus = 1;
              this.finance(1)
           
          }

          if(tab.index == 2){
              this.qiehuanstatus = -1;
              this.finance(1)
           
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
      .mh-finance-input  .el-input__icon{
        line-height: 28px !important;
      }
       .mh-finance-input .el-date-editor .el-range-separator{
          line-height: 28px !important;
       }
</style>