<template>
    <div class="main">
        <sidebar></sidebar>
          <!--主体 start-->
    <div class="main-right">
        <navbar></navbar>
        <!--二级导航栏 -->
        <div class="main-goods membertableMain" >
            <membersecnavbar></membersecnavbar>
            <div class="main-goods-right">
                <!-- 商品中心内容 -->
                 <div class="goods-card_body"  v-loading="loading">
                    <!--选项卡组件-->
                    <div class="shuaixuan vip-alllist vip-xxxx">


                        <div style="display: flex;">
                            <div class="headerTitle1">当前展示的为 <div class="headerTitle2">店铺名称</div> 的会员列表</div>
                            <div class="headerTitle3">切换：</div>
                            <el-select v-model="ssupplierId" placeholder="请选择平台商城">
                                    <el-option
                                            v-for="item in supplierList"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                            </el-select>
                        </div>

                        <div class="m-search-box el-row el-row-my-div">
                            <div class="sx-input">
                                <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员编号：</label>
                                <el-input v-model="vipbianhao" placeholder="" ></el-input>
                            </div>
                            <div>
                                <label class="el-form-item__label" style="width: 130px;">手机号码：</label>
                                <el-input v-model="vipphone" placeholder=""></el-input>
                            </div>
                            <div>
                                <label class="el-form-item__label" style="width: 130px;">微信昵称：</label>
                                <el-input v-model="wxname" placeholder=""></el-input>
                            </div>
                        </div>
                        <!--  一行   -->
                        <div class="m-search-box el-row el-row-my-div">
                            <div>
                                <label class="el-form-item__label" style="width: 190px;min-width: 128px">购买次数：</label>
                                <el-select v-model="shopvalue1" placeholder="请选择购买次数">
                                    <el-option v-for="item in shopnum"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div>
                                <label class="el-form-item__label" style="width: 130px;">会员等级：</label>
                                <el-select v-model="shopvalue2" placeholder="请选择会员等级">
                                    <el-option
                                            v-for="item in vipdengji "
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <div>
                                <label class="el-form-item__label" style="width: 130px;">地域：</label>
                                <el-select v-model="shopvalue3" placeholder="请选择地域">
                                    <el-option
                                            v-for="item in vipaddress"
                                            :key="item[0]"
                                            :label="item[1]"
                                            :value="item[0]">
                                    </el-option>
                                </el-select>
                            </div>

                        </div>
                        <!-- 两行-->
                        <!--  一行   -->
                        <div class="m-search-box el-row el-row-my-div">
                            <div>
                                <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员状态：</label>
                                <el-select v-model="shopvalue4" placeholder="请选择会员状态">
                                    <el-option
                                            v-for="item in vipstatus"
                                            :key="item.value"
                                            :label="item.label"
                                            :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div>
                                <label class="el-form-item__label" style="width: 130px;">推客等级：</label>
                                <el-select v-model="shopvalue5" placeholder="请选择推客等级">
                                    <el-option
                                            v-for="item in tuikedengji"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>
                            </div>
                            <div>
                                <label class="el-form-item__label" style="width: 130px;">渠道商等级：</label>
                                <el-select v-model="shopvalue6" placeholder="请选择渠道商等级">
                                    <el-option
                                            v-for="item in qudaoshang"
                                            :key="item.grade"
                                            :label="item.nickName"
                                            :value="item.grade">
                                    </el-option>
                                </el-select>
                            </div>

                        </div>
                        <!--                       两行-->
                        <div class="m-search-box el-row el-row-my-div">
                            <div>
                                <label class="el-form-item__label" style="width: 190px;min-width: 128px">会员来源：</label>
                                <el-select v-model="shopvalue7" placeholder="请选择会员来源">
                                    <el-option
                                            v-for="item in nulldata"
                                            :key="item.name"
                                            :label="item.property"
                                            :value="item.name">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="vip-item-list_time">
                                <label class="el-form-item__label" style="width: 130px;">创建时间：</label>
                                <el-date-picker 
                                        v-model="shopvalue8"
                                         value-format="timestamp"
                                        type="daterange"
                                        range-separator="至"
                                        start-placeholder="拼团开始时间"
                                        style="width: 100%"
                                        end-placeholder="拼团结束时间">
                                </el-date-picker>
                            </div>
                        </div>
                        <div class="goods-sx-btn">
                            <button @click="vipshuaixuan"  type="button" class="el-button el-button--primary el-button--small"><span >筛选</span></button>
                            <button @click="cleartiaojian"  type="button" class="el-button el-button--text"><span>清空筛选条件</span></button>
                            <button @click="vipexportMethod" type="button" class="el-button el-button--warning el-button--small"><span>导出</span> </button>
                     
                        </div>

                    </div>


                    <!-- table-->
                    <div class="goods_table-all">
                        <el-table
                                ref="multipleTable"
                                :data="tableData"
                                tooltip-effect="dark"
                                border
                                style="width: 100%"
                                :default-sort = "{prop: 'date', order: 'descending'}"
                                @selection-change="handleSelectionChange">
                            <el-table-column
                                    type="selection"
                                    width="55">
                            </el-table-column>

                            <el-table-column
                                    prop="goods"
                                    label="会员"
                                    width="200">
                                <template slot-scope="scope">
                                    <div class="goods-table">
                                    <img v-if="scope.row.userHeadportrait || scope.row.wxHeadportrait" :src="scope.row.userHeadportrait == null ? scope.row.wxHeadportrait:scope.row.userHeadportrait" onerror="javascript:this.src='https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/websyt/index/default-boy.png';" alt=""  width="60" height="60" style="border-radius:10px;margin-right: 6px;">
                                    <img v-if="!scope.row.userHeadportrait && !scope.row.wxHeadportrait" src="https://sanyetongsj.oss-cn-shanghai.aliyuncs.com/system/root/websyt/index/default-boy.png" alt="该实际用户头像为获取到"  width="60" height="60" style="border-radius:10px;margin-right: 6px;">
                                    <ul class="good_table-ul">
                                        <!-- <li style="width:100%"><span style="width:100%">已关注</span></li> -->
                                    <li style="display:flex;width: 125px;" v-if="scope.row.wxNickName != null || scope.row.userName != null"><span class="memberlist-table">昵称:</span>
                                    <span style="width:55%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1">{{ scope.row.userName == null ? scope.row.wxNickName : scope.row.userName}}</span></li>
                                    <li style="display:flex;" ><span style="color: #606266;">ID:</span><span style="min-width:70px">{{scope.row.userId}}</span></li>
                                    <li style="display:flex" v-if="scope.row.puserName != undefined || scope.row.puserName != null"><span>上级:</span><span style="width: 70%;text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">{{scope.row.puserName}}</span></li>
                                    <li style="display:flex" v-if="scope.row.puserId != undefined && scope.row.puserId != null && scope.row.puserId != 0"><span style="width: 55px !important;">上级ID:</span><span style="width: 70%;text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">{{scope.row.puserId}}</span></li>
                                    </ul></div>
                                </template>
                            </el-table-column>
                            <el-table-column prop="userPhone" label="手机号" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="balance" label="余额" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="userCreateTime" label="注册时间" width="150"
                                    :formatter="dateFormat"
                                    show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="orderNum" label="购买次数" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="gradeName" label="会员等级" show-overflow-tooltip>
                            </el-table-column>
                            <el-table-column prop="integral" label="积分"  align="center" show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div>累积积分：{{scope.row.integralTotal}}</div>
                                    <div>可用积分：{{scope.row.integralUsable}}</div>
                                </template>
                            </el-table-column>
                              <el-table-column prop="cmsUsable" width="140px" label="佣金信息" show-overflow-tooltip>
                                     <template slot-scope="scope">
                                        <div class="memberlist-div-yongjin" v-cloak>
                                            <dl>
                                                <dt>可提现: </dt>
                                                <dd>{{scope.row.cmsUsable | money}}</dd>
                                            </dl>  
                                            <dl>
                                                <dt>提现中: </dt>
                                                <dd>{{scope.row.cmsWithdrawing | money}}</dd>
                                            </dl>  
                                            <dl>
                                                <dt>冻结中: </dt>
                                                <dd>{{scope.row.cmsFreeze  | money}}</dd>
                                            </dl>                                         
                                         
                                            <dl>
                                                <dt>待收益: </dt>
                                                <dd>{{scope.row.cmsPend | money}}</dd>
                                            </dl>
                                            <dl>
                                                <dt>已提现: </dt>
                                                <dd>{{scope.row.cmsWithdraw | money}}</dd>
                                            </dl> 
                                            <dl>
                                                <dt>总佣金: </dt>
                                                <dd>{{scope.row.cmsTotal | money}}</dd>
                                            </dl> 
                                        </div>
                                     </template> 
                            </el-table-column>
                             
                            <el-table-column prop="handle" label="操作"  width="200"> show-overflow-tooltip>
                                <template slot-scope="scope">
                                    <div class="memberlist-button">
                                        <el-button type="text" size="small" @click="editusernote(scope.row)">编辑信息</el-button>
                                        <!-- <el-button type="text" size="small">查看资料</el-button> -->
                                        <el-button @click="seeDetail(scope.row.userId)"  type="text" size="small">查看详情</el-button>
                                        <el-button @click="setshangji(scope.row.userId, scope.row.wxNickName, scope.row.userPhone)"  type="text" size="small">设置上级</el-button>
                                    </div>
                                    <div class="memberlist-button">
                                        <el-button @click="settuike(scope.row.userId)" type="text" size="small" >设为推客</el-button>
                                        <el-button @click="adjustment(scope.row.userId,scope.row.balance)" type="text" size="small">调整余额</el-button> 
                                        <el-button @click="adjustmentCommission(scope.row.userId,scope.row.cmsTotal)" type="text" size="small">调整佣金</el-button>
                                    </div>
                                    <div class="memberlist-button memberlist-buttonmore">                            
                                        <el-button type="text" size="small" @click="tanchudengji(scope.row.wxNickName,scope.row.userId)">设置等级</el-button>   
                                        <el-button type="text" size="small" @click="creatorder(scope.row.wxNickName, scope.row.userId)">创建订单</el-button>                                        
                                        <el-button type="text" size="small" @click="setIntegral(scope.row.integral, scope.row.userId, scope.$index)">设置积分</el-button> 
                                    </div>

                                    <div class="memberlist-button memberlist-buttonmore">                            
                                        <el-dropdown placement="bottom" trigger="click">
                                            <span class="el-dropdown-link">
                                                更多<i class="el-icon-arrow-down el-icon--right"></i>
                                            </span>
                                            <el-dropdown-menu slot="dropdown">
                                              <div class="memberlist-buttonmore-pading"> 
                                                <el-dropdown-item>  <el-button class="mem-btn" type="text" size="small" @click="delectvipMethod(scope.row.userId)">删除</el-button></el-dropdown-item>
                                                <el-dropdown-item>
                                                    <el-button class="mem-btn" type="text" size="small" v-if="scope.row.status == 1" @click="Prohibit(scope.row.status,scope.row.userId)">禁用</el-button>
                                                    <el-button class="mem-btn" type="text" size="small" v-if="scope.row.status == 0 " @click="Prohibit(scope.row.status,scope.row.userId)">启用</el-button>
                                                </el-dropdown-item>
                                                <el-dropdown-item>
                                                    <el-button class="mem-btn" type="text" size="small" @click="setqudaoshang(scope.row.userId)">设为渠道商</el-button>
                                                </el-dropdown-item> 
                                                <el-dropdown-item>
                                                    <el-button class="mem-btn" type="text" size="small" @click="selectNote(scope.row.userId)">查看直推间信息</el-button>
                                                </el-dropdown-item> 
                                                <!-- <el-dropdown-item>
                                                    <el-button class="mem-btn" type="text" size="small" @click="setqudaoshang(scope.row.userId)">设置推荐人</el-button>
                                                </el-dropdown-item> 
                                                <el-dropdown-item>
                                                    <el-button class="mem-btn" type="text" size="small" @click="passmethod">手机及验证密码</el-button>
                                                </el-dropdown-item>                                                        -->
                                              </div>      
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>

                                    <div>
                                        <!-- <el-button  @click="dialogFormFUgou = true" type="text" size="small">发优惠卷</el-button> -->
                                        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">创建订单</el-button> -->
                                        <!-- <el-dropdown>
                                          <span class="el-dropdown-link">
                                            更多<i class="el-icon-arrow-down el-icon--right"></i>
                                          </span>
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item ><span @click="setqudaoshang">设为渠道商</span></el-dropdown-item>
                                                <el-dropdown-item><span @click="settuike">设为推客</span></el-dropdown-item>
                                             
                                            </el-dropdown-menu>
                                        </el-dropdown> -->
                                    </div>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                <!-- 弹窗 -->
                <el-dialog title="设置等级" :visible.sync="dialogFormVisible" width="30%">
                  <div class="mh-resoure-grounp" style="display:flex;">
                        <span class="mh-resoure-grounp_onespan" style="width:120px;margin-bottom:22px;display:inline-block">会员名:</span>
                        <div class="block" >
                             <span>{{tanvipName}}</span>
                        </div>
                  </div>

                  <div class="mh-resoure-grounp">
                      <span class="mh-resoure-grounp_onespan" style="width:99px;display:inline-block">会员等级:</span>
                        <el-select v-model="vipdengjivalue" placeholder="请选择">
                                <el-option
                                v-for="item in vipdengji"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                                </el-option>
                        </el-select>
                      
                  </div>
                   <span slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="setvipdengji">确 定</el-button>
                        </span>
                </el-dialog>    


                <el-dialog title="调整佣金" :visible.sync="yongjindialogFormVisible" width="30%">
                    <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">账户佣金:</span>
                        <div class="block" >
                            <el-input placeholder="0.00" v-model="cmsTotalyvalue" :disabled="true"></el-input>                
                        </div>
                  </div>
                  <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">调整佣金:</span>
                        <div class="block" >
                               <input type="text" autocomplete="off" class="el-input__inner" placeholder="调整佣金" v-model="yongjintzyuevalue">
                        </div>
                  </div>

                  <div class="mh-resoure-grounp" style="display:flex;">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display:flex;justify-content: center;align-items: center;">备注:</span>
                        <div class="block" >
                              <input type="text" autocomplete="off" class="el-input__inner" placeholder="请填写备注" v-model="yongjinbeihzu">
                        </div>
                        
                      
                  </div>
                   <span slot="footer" class="dialog-footer">
                            <el-button @click="yongjindialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="CommissionMeth">确 定</el-button>
                        </span>
                </el-dialog>    

                
                <el-dialog title="编辑信息" :visible.sync="editxinxidialogFormVisible " width="40%">
                    <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">姓名:</span>
                        <div class="block" >
                            <el-input placeholder="请填写姓名" v-model="mhusername" type="text"></el-input>
                        </div>
                    </div>

                    <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">手机号:</span>
                        <div class="block" >
                            <el-input placeholder="请填写手机号" v-model="mhphone" type="number"></el-input>
                        </div>
                    </div>

                     <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">密码:</span>
                        <div class="block" >
                            <el-input placeholder="请填写密码" v-model="mhpaw" type="number"></el-input>
                        </div>
                    </div>
 
                     <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">邮箱:</span>
                        <div class="block" >
                            <el-input placeholder="请填写邮箱" v-model="mhemail" type="text"></el-input>
                        </div>
                    </div>

                    <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">生日:</span>
                        <div class="block" >
                             <el-date-picker
                                v-model="userbirthday"
                                type="date"
                                value-format="timestamp"
                                placeholder="选择生日">
                            </el-date-picker>
                        </div>
                    </div>

                    <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">微信号:</span>
                        <div class="block" >
                            <el-input placeholder="请填写微信号" v-model="mhwxcode" type="text"></el-input>
                        </div>
                    </div>

                 

                  <div class="mh-resoure-grounp" style="display:flex;">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display:flex;justify-content: center;align-items: center;">备注:</span>
                        <div class="block" >
                              <input type="text" autocomplete="off" class="el-input__inner" placeholder="请填写备注" v-model="mhbei">
                        </div>
                      
                      
                  </div>
                   <span slot="footer" class="dialog-footer">
                            <el-button @click="editxinxidialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="vipeditData">确 定</el-button>
                        </span>
                </el-dialog>   

                <el-dialog title="调整余额" :visible.sync="yuedialogFormVisible" width="30%">
                    <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">账户余额:</span>
                        <div class="block" >
                            <el-input placeholder="0.00" v-model="tzyuevalue1" :disabled="true"></el-input>
                              
                        </div>
                  </div>
                  <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">调整余额:</span>
                        <div class="block" >
                               <input type="text" autocomplete="off" class="el-input__inner" placeholder="调整余额" v-model="tzyuevalue">
                        </div>
                  </div>

                  <div class="mh-resoure-grounp" style="display:flex;">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display:flex;justify-content: center;align-items: center;">备注:</span>
                        <div class="block" >
                              <input type="text" autocomplete="off" class="el-input__inner" placeholder="请填写备注" v-model="tzbeizhu">
                        </div>
                        
                      
                  </div>
                   <span slot="footer" class="dialog-footer">
                            <el-button @click="yuedialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="tzYueMethod">确 定</el-button>
                        </span>
                </el-dialog>   

                <el-dialog title="密码" :visible.sync="passdialogFormVisible" width="30%">
                    <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">原密码:</span>
                        <div class="block" >
                            <el-input placeholder="******" v-model="passobj.ypasswd" :disabled="true"></el-input>                
                        </div>
                  </div>
                  <div class="mh-resoure-grounp" style="display:flex;margin-bottom:18px">
                        <span class="mh-resoure-grounp_onespan" style="width:110px;display: flex;justify-content: center;align-items: center;">新密码:</span>
                        <div class="block" >
                               <input type="text" autocomplete="off" class="el-input__inner" placeholder="新密码" v-model="passobj.xianpasswd">
                        </div>
                  </div>

     
                   <span slot="footer" class="dialog-footer">
                            <el-button @click="passdialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="CommissionMeth">确 定</el-button>
                        </span>
                </el-dialog>







                    <!--  -->

                    <div class="el-row goods_list_dibu">
                        <div class="goods_list_dibu-onediv">
                            <!-- <button type="button" class="el-button el-button--default el-button--small"><span>全选</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>取消全选</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>删除</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>改分类</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>发放优惠卷</span></button>
                            <button type="button" class="el-button el-button--default el-button--small"><span>设置上级</span></button> -->
                        </div>
                        <div class="goods_list_dibu-twodiv">
                            <!-- small sizes-->
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
                    <!-- table over-->


                    <!--底部组件  -->
                    <div  class="goods-footer"><p  class="copyright">Copyright 蜜獾出品</p></div>
                    <!--底部组件      -->
                    <div>
                    </div>

                    <!-- 渠道商等级 -->
                    <el-dialog title="渠道商等级" :visible.sync="qddialogFormVisible"  width="35%">
                            <div class="mh-resoure-grounp mh-goodsfabutan" style="display:flex;margin-bottom:18px">      
                                <span class="mh-resoure-grounp_onespan mh-goodsfabutan_span" style="width:100px;text-align: center;display: flex;align-items: center;" >渠道商等级 : </span>
                                <div class="block" style="margin:0 15px">
                                     <el-select v-model="qudaaoshanggradevalue" placeholder="请选择">
                                    <el-option
                                    v-for="item2 in qudaoshang"
                                    :key="item2.grade"
                                    :label="item2.nickName"
                                    :value="item2.grade">
                                    </el-option>
                                </el-select>              
                                </div>
  
                        </div>
                        <span slot="footer" class="dialog-footer">
                                <el-button @click="qddialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="setQudaoSdengMethod">确 定</el-button>
                            </span>
                    </el-dialog>
                    <!-- 渠道商等级 -->

                    <!-- 推客等级 -->
                    <el-dialog title="设置推客等级" :visible.sync="tuikedengjialogFormVisible"  width="35%">
                        <div class="mh-resoure-grounp mh-goodsfabutan" style="display:flex;margin-bottom:18px">      
                            <span class="mh-resoure-grounp_onespan mh-goodsfabutan_span" style="width:100px;text-align: center;display: flex;align-items: center;" >推客等级 : </span>
                            <div class="block" style="margin:0 15px">
                              <el-select v-model="tuikedengjivalue" placeholder="请选择推客等级">
                                    <el-option
                                            v-for="item in tuikedengji"
                                            :key="item.id"
                                            :label="item.name"
                                            :value="item.id">
                                    </el-option>
                                </el-select>            
                            </div>
  
                        </div>
                        <span slot="footer" class="dialog-footer">
                                <el-button @click="tuikedengjialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="settuikeGradedMethod">确 定</el-button>
                            </span>
                    </el-dialog>
                    <!-- 推客等级 -->
                    <!-- 弹窗 -->

                    <!-- 会员等级 -->
                    <el-dialog title="会员等级" :visible.sync="vipdialogFormVisible" width="25%">
                    
                            <div class="mh-resoure-grounp mh-goodsfabutan"   v-for="(vipitem,vipitemindex) of vipdengjiid" :key="vipitemindex">
                                <span class="mh-resoure-grounp_onespan mh-goodsfabutan_span" >{{vipitem.name}}:</span>
                                <div class="block" style="margin:0 15px">
                                    <el-input v-model="vipitem.price" placeholder="" type="number"></el-input>                     
                                </div>
                                <span class="mh-resoure-grounp_onespan">元</span>
                            </div>

                        
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="vipdialogFormVisible = false">取 消</el-button>
                                <el-button type="primary" @click="vipdialogFormVisible = false">确 定</el-button>
                            </span>
                    </el-dialog>
                    <!--  -->
                    <!--选项卡组件 over-->
                    <!-- 只推荐信息 -->
                     <!-- 会员等级 -->
                    <el-dialog title="直推间信息" :visible.sync="zhituijianFormVisible" width="40%">

                               <el-table
                                :data="zhituitableData"
                                stripe
                                style="width: 100%">
                                <el-table-column
                                    prop="user.nickName"
                                    label="用户昵称"
                                    >
                                </el-table-column>
                                <el-table-column
                                    prop="moneyTotal"
                                    label="总购买额"
                                    >
                                </el-table-column>
                                <el-table-column
                                    prop="commissionTotal"
                                    label="总佣金"
                                    >
                                </el-table-column>
                                <el-table-column
                                    prop="integralTotal"
                                    label="总积分"
                                    >
                                </el-table-column>
                                </el-table>

                        
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="zhituijianFormVisible = false">取 消</el-button>
                            </span>
                    </el-dialog>

                    <!------------------弹框：设置积分------------------>
                    <el-dialog center title="设置积分" :visible.sync="integralDialogFormVisible">
                        <el-form :model="integralForm">
                            <el-form-item label="可用积分:" :label-width="formLabelWidth">
                               <div style="display: flex;">
                                    <div style="" class=""> {{integralForm.integralUsable}}</div>
                                    <div style="" class="ml_integralNum">累计积分: {{integralForm.integralTotal}}</div>
                               </div>
                            </el-form-item>
                            <el-form-item label="调整积分:" :label-width="formLabelWidth">
                                <el-input style="width: 100px;" size='small' v-model="integralForm.integralNum" type="number" autocomplete="off"></el-input>
                                <div style="font-size: 12px;"> 正数增加积分，负数减少积分。</div>
                            </el-form-item>
                            <el-form-item label="备  注:" :label-width="formLabelWidth">
                                <el-input type="textarea" size='small' :rows="2" v-model="integralForm.remark" placeholder="请填写备注" autocomplete="off">
                                </el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="integralDialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="request_setTotalIntegral()">确 定</el-button>
                        </div>
                    </el-dialog>

                    <!--  -->
                    <!-- 直推荐信息 -->
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
import network from '../../utils/api';
import {    
        zm_jsonToString,
        zm_formDataToString
    } from "../../filters/zm_tools"


export default {
      data() {
        return {
            //调整佣金
            formLabelWidth: "120px",
            integralDialogFormVisible: false,
            integralForm: {
                integralTotal: "",
                integralUsable: "",
                integralNum: "",
                remark: "",
            },
            itemIndex: '',
            itemData: '',
            zhituitableData:[],
            zhituijianFormVisible:false,
            loading:true,
            passdialogFormVisible:false,
            passobj:{
                ypasswd:'',
                xianpasswd:''
            },

            thispage:1,
            totalCount:0,
            tuikedengjialogFormVisible:false,
            qudaaoshanggradevalue:'',
            tuikedengjivalue:'',//推客等级

            qddialogFormVisible:false,
            vipdialogFormVisible:false,
            mhusername:'',
            mhphone:'',
            mhpaw:'',
            mhemail:'',
            userbirthday:'',
            mhwxcode:'',
            mhbei:'',
            editxinxidialogFormVisible:false,
            Commissionid:0,
            tzyuevalue1:'',
            tzyuevalue2:'',
            tzyuevalue:'',
            tzbeizhu:'',
            yongjindialogFormVisible:false,
            yongjintzyuevalue :'' ,
            cmsTotalyvalue:'',
            yongjinbeihzu:'',
            yjintzbeizhu:'',
            yuedialogFormVisible:false,

            vipdengjivalue:'', //会员等级id

            shopvalue1:'',
            shopvalue2:'',
            shopvalue3:'',
            shopvalue4:'',
            shopvalue5:'',
            shopvalue6:'',
            shopvalue7:'',
            shopvalue8:'',

            //筛选数据
            vipbianhao:'', // 会员编号
            vipphone:'',   //会员手机号
            wxname:'',     //微信昵称
            shopnum:[   // 购买次数
            {
                value: '1',
                label: '全部',  
            },{
                value: '2',
                label: '1+',  
            },{
                value: '3',
                label: '2+',  
            },{
                value: '4',
                label: '5+',  
            },
            {
                value: '4',
                label: '10+',  
            }
            ],
            vipaddress:[ 
            {
                value: '1',
                label: '上海',  
            }],

            vipstatus:[
                {
                 value: '1',
                 label: '正常', 
                },{
                 value: '0',
                 label: '禁用', 
                }              
            ],
            nulldata:[
                 {
                "name": "1",
                "property": "IOS客户端",
                "pid": 52,
                "remark": "",
                "id": 53,
                "type": 10
                 },{
                "name": "2",
                "property": "安卓客户端",
                "pid": 52,
                "remark": "",
                "id": 54,
                "type": 10
                 },{
                "name": "3",
                "property": "微信小程序",
                "pid": 52,
                "remark": "",
                "id": 55,
                "type": 10
                 },{
                "name": "4",
                "property": "微信公众号",
                "pid": 52,
                "remark": "",
                "id": 56,
                "type": 10
                },{
                "name": "5",
                "property": "网页",
                "pid": 52,
                "remark": "",
                "id": 57,
                "type": 10
                }
            ],
            qudaoshang:[],
            dialogVisible: false,
            dialogFormVisible:false,  
            visible: false,
            activeName: 'first',
            options: [{
                value: '1',
                label: '设为渠道商'
            }, {
                value: '2',
                label: '设为推客'
            }],

             vipdengji:[{
                value: '1',
                label: '一级分类'
            }, {
                value: '2',
                label: '二级分类'
            }, {
                value: '3',
                label: '三级分类'
            } ],

            tuikedengji:[{
                value: '1',
                label: '一级分类'
            }, {
                value: '2',
                label: '二级分类'
            }, {
                value: '3',
                label: '三级分类'
            } ],
            value: '',
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            tableData: [{
                goodsid: 1,
                goods: "http://thirdwx.qlogo.cn/mmopen/PiajxSqBRaELWDEIO8X8iaiaX2lrtGsN7u8fmfuxzMS1ES8DU8EbaWN9ibzccr93I0hhiatYy6ndGkVKslMPgWoQ22w/132",
                pv: '200',
                stock:'200',
                total:2000,
                creatime:'2016-05-02',
                person:'蒋金泽',
                sort:1,
                handle:'ds '
            },
            ],
            multipleSelection: [],
          //  dialogFormVisible: false,//推广链接
            dialogFormFUgou:false,
            shop_lisk_input:'http://47.tecqm.com/#/pages/goods/detail/ShopDetail?secondId=5733',
            radio: '1', // 假的单选框
            currentPage4: 1, //分页

            //设置会员等级信息
            tanvipName:'',
            setdengjiUserId:'',
            //调整余额
            tzyueUserid:0,
            editmhuserid:0,
            qudaoshang:[],
            qudaosahnguserid:'',
            tuikeuserid:'',
            vipdengjiid:'',
            mhusername:'',
            supplierList: [],
            supplierIds: [],
            ssupplierId: '',
        };
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
       
        this.getdata(1);
        this.getviplist();
        this.selectqudo();//渠道商等级
        this.selectvipdenhgji(); //推客等级
        this.reqaddress();
        this.request_supplierList(); //供应商列表
    },
    methods: {
        request_supplierList(){
            let that = this;
            let params = new FormData(); 
            params.append('page', 1);  
            params.append('limit',20);
            params.append('sid','');
            params.append('sname','');
            params.append('stimeStart', '');
            params.append('stimeEnd', '');
            let urlStr = network.TIP + network.sp_list;
                urlStr = network.userIP + network.sp_list;
            
            console.log('---供应商：params=' + zm_formDataToString(params), 'urlStr= ' + urlStr);
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
                'Content-Type': 'multipart/form-data',
                headers:{
                    'Content-Type':'application/json',
                    'suserId': this.$cookie.get('suserId'),
                    'userId': this.$cookie.get('userId'),
                    'adminId': this.$cookie.get('adminId'),
                    'roleId': this.$cookie.get('roleId'),
                    'token': this.$cookie.get('token'),			
                }
            }).then(function(res){
                // console.log('---供应商response= '+zm_jsonToString(res.data));
                that.loading = false;
                if(res.data.status ==200){
                    that.supplierList  = res.data.list;
                    let platform = {
                        id: '',
                        name: '平台商城',
                    }
                    that.supplierList.unshift(platform);
                    that.supplierList.forEach(element => {
                        that.supplierIds.push(element.id);
                    });
                    // console.log('---供应商 length= '+res.data.totalCount);
                    // console.log('---供应商response= '+zm_jsonToString(that.supplierIds));

                } else {
                    that.$message.error(res.data.message);
                }
            },function(res){
                // console.log('----->供应商：报错 response= '+zm_jsonToString(res));
            })
        },
        //
        passmethod(){
            this.passdialogFormVisible = true
        },
        //会员导出
        vipexportMethod() {
            let that = this;
            let data = new FormData();
            this.vipbianhao == '' ? '' :  data.append('sid',this.vipbianhao); 
            this.vipphone == '' ? '' :  data.append('sphone',this.vipphone); 
            this.wxname == '' ? '' :  data.append('swxnickname',this.wxname); 
            this.shopvalue2 == '' ? '' :  data.append('sgrade',this.shopvalue2); //等级
            this.shopvalue3 == '' ? '' :  data.append('sregionid',this.shopvalue3); //地域iD
            this.shopvalue4 == '' ? '' :  data.append('sstatus',this.shopvalue4); //状态
            this.shopvalue5 == '' ? '' :  data.append('sgradercm',this.shopvalue5);   //推客等级
            this.shopvalue6 == '' ? '' :  data.append('sgradech',this.shopvalue6);   //渠道商
            this.shopvalue7 == '' ? '' :  data.append('ssource',this.shopvalue7); //来源

            if(this.shopvalue8 != ''){   
               data.append('screatetimestart', this.shopvalue8[0]);
               data.append('screatetimeend', this.shopvalue8[1]);
            }    
            this.$http({
                    method: "post",
                    url: network.vipexport,
                    data: data,
                    headers: { "Content-Type": "application/octet-stream;charset=utf-8", suserId: that.$cookie.get('userId') },
                    responseType: 'blob'
                })
                .then(function(res) {
                    if(res.data.size < 512){
                        that.$message.warning('查看筛选条件,导出内容无数据');
                        return false;
                    }
                    const blob = new Blob([res.data])      　　
                    const fileName = '会员导出信息.xlsx'
                    if ('download' in document.createElement('a')) { // 非IE下载
                        const elink = document.createElement('a')
                        elink.download = fileName
                        elink.style.display = 'none'
                        elink.href = URL.createObjectURL(blob)
                        document.body.appendChild(elink)
                        elink.click()
                        URL.revokeObjectURL(elink.href) // 释放URL 对象
                        document.body.removeChild(elink)
                    } else { // IE10+下载
                        navigator.msSaveBlob(blob, fileName)
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
        },
        reqaddress(){
            let that = this;
            let data = new FormData();
            this.$http({
                method: "post",
                url: network.reqaddress,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
            })
            .then(function(res){
              if(res.data.status ==200){
                  that.vipaddress = res.data.list;
              }
              if(res.data.status != 200){
                  that.$message.error(res.data.message)
              }   
            })
        },
        Prohibit(status,userId){
            let that = this;
            let nowStatus = '';
            status == 1 ? nowStatus = 0 : nowStatus = 1;
            let nowStatusstr = "";
            status == 1 ? nowStatusstr = "禁用" : nowStatusstr ="启用";
            this.$confirm('确定将该会员'+nowStatusstr+'吗, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    let data = new FormData();
                    data.append('status',nowStatus);          
                    this.$http({
                        method: "post",
                        url: network.qiyongstatusApi,
                        data: data,
                        headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:userId }
                    })
                    .then(function(res){
                        console.log(res.data.list);
                        if(res.data.status==200){
                            that.$message.success('操作成功');
                            that.getdata(that.thispage);

                        }else{
                             that.$message.error('操作失败');
                        }
                      
                    }).catch(function(error){
                          console.log(error);
                      that.$message.error('操作失败');
                    });    
                }).catch(() => {
                this.$message({
                    type: 'warning',
                    message: '已取消'+nowStatusstr
                });
            });
        },
        delectvipMethod(parmad){
            let that = this;    
            this.$confirm('将删除该用户, 是否确定?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
                }).then(() => {
                    let data = new FormData();       
                    this.$http({
                        method: "post",
                        url: network.delectVipApi,
                        data: data,
                        headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:parmad }
                    })
                    .then(function(res){
                        console.log(res.data.list);
                        if(res.data.status == 500 && res.data.message == '该用户并非禁用状态'){
                            that.$message.error(res.data.message);
                            return false;
                        }
                        if(res.data.status==200){
                            that.$message.success('删除成功');
                            that.getdata(that.thispage);
                        }else{
                            that.$message.error('删除失败');
                        }  
                    })       
                }).catch(() => {
                this.$message({
                    type: 'warning',
                    message: '已取消删除'
                });
            });

        },

        //会员等级
        reqvipdengjilist(){
            let that = this; 
            let data = new FormData();
            data.append('page',1);
            data.append('limit',10);              
            this.$http({
                method: "post",
                url: network.vipdengji,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId') }
            })
            .then(function(res){
                console.log(res.data.list);
                that.vipdengjiid = res.data.list      
            });     
        },
        editusernote(item){
            console.log(item);
            this.editxinxidialogFormVisible = true;
            this.editmhuserid = item.userId;
            // let editname = userName || '';
            this.mhusername = item.wxNickName;
            this.mhphone = item.userPhone;
        },
        vipeditData(){      
            let that = this;
            let data = new FormData();
            data.append('name',that.mhusername);
            data.append('phone',that.mhphone);
            data.append('password',that.mhpaw);
            data.append('email',that.mhemail);
            data.append('birtyday',that.userbirthday);
            data.append('remark',that.mhbei);       
            this.$http({
                method: "post",
                url: network.editvipNote,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:that.editmhuserid}
            })
            .then(function(res){
                if(res.data.status ==200){
                    that.$message.success('编辑信息成功');
                    that.editxinxidialogFormVisible =false;
                    that.getdata(that.thispage);
                    that.mhusername = '';
                    that.mhphone = '';
                    that.mhpaw = '';
                    that.mhemail = '';
                    that.userbirthday = '';
                    that.mhwxcode = '';
                    that.mhbei = '';
                }else{
                     that.$message(res.data.message);
                }            
            }); 
        },
        adjustment(userID,money){
            this.yuedialogFormVisible = true;
            this.tzyueUserid = userID;
            this.tzyuevalue1 ='¥ '+parseFloat(money);
        },
        adjustmentCommission(userID,money){
            this.yongjindialogFormVisible = true;
            this.Commissionid = userID;
            this.cmsTotalyvalue ='¥ ' +  parseFloat(money/100) ;//初始化设置佣金
        },
        //调整余额接口
        tzYueMethod(){ 
            let that = this; 
            let data = new FormData();
            data.append('money',parseFloat(that.tzyuevalue*100));
            if(that.tzbeizhu != ''){
                 data.append('remark',that.tzbeizhu);
            }
            this.$http({
                method: "post",
                url: network.tzyueMeth,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:that.tzyueUserid}
            })
            .then(function(res){
                if(res.data.status ==200){
                    that.$message.success('调整余额成功');
                    that.yuedialogFormVisible =false;
                    that.getdata(that.thispage);
                    that.tzyuevalue = '';
                    that.tzbeizhu = '';

                }else{
                     that.$message(res.data.message);
                }
                   
            });   
        },
        //调整佣金    
        CommissionMeth(){
            let that = this; 
            let data = new FormData();
            data.append('money',parseFloat(that.yongjintzyuevalue*100));
            if(that.yongjinbeihzu != ''){
                 data.append('remark',that.yongjinbeihzu);
            }
            this.$http({ 
                method: "post",
                url: network.CommissionIp,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId: that.$cookie.get('userId'),userId:that.Commissionid}
            })
            .then(function(res){
                if(res.data.status ==200){
                    that.$message.success('设置佣金成功');
                    that.yongjindialogFormVisible =false;
                    that.getdata(that.thispage);
                    that.yongjintzyuevalue = '';
                    that.yongjinbeihzu = '';
                }else{
                     that.$message(res.data.message);
                }              
            });
        },
        dateFormat(row, column, cellValue, index){
             const daterc = row[column.property];
             if(daterc!=null){
             const dateMat= new Date(daterc.time);
             const year = dateMat.getFullYear();
             const month = dateMat.getMonth() + 1;
             const day = dateMat.getDate();
             const hh = dateMat.getHours();
             const mm = dateMat.getMinutes();
             const ss = dateMat.getSeconds();
             const timeFormat= this.getzf(year) + "-" + this.getzf(month)  + "-" + this.getzf(day) + " " + this.getzf(hh)  + ":" + this.getzf(mm) + ":" + this.getzf(ss);
                    return timeFormat;
             }          
        },
        //补0操作  
        getzf(num){  
            if(parseInt(num) < 10){  
                num = '0'+num;  
            }  
            return num;  
        },
      
        //会员等级列表
        getviplist(){
            let that = this; 
            let data = new FormData();
            data.append('page',1);
            data.append('limit',20);              
            this.$http({
                method: "post",
                url: network.vipdengji,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') }
            })
            .then(function(res){
                 console.log(res);
                 that.vipdengji = res.data.list;  
            });     
        },
        vipshuaixuan(){
            let that = this; 
            let data = new FormData();
            this.vipbianhao == '' ? '' :  data.append('sid',this.vipbianhao); 
            this.vipphone == '' ? '' :  data.append('sphone',this.vipphone); 
            this.wxname == '' ? '' :  data.append('swxnickname',this.wxname); 
            this.shopvalue2 == '' ? '' :  data.append('sgrade',this.shopvalue2); //等级
            this.shopvalue3 == '' ? '' :  data.append('sregionid',this.shopvalue3); //地域iD
            this.shopvalue4 == '' ? '' :  data.append('sstatus',this.shopvalue4); //状态
            this.shopvalue5 == '' ? '' :  data.append('sgradercm',this.shopvalue5);   //推客等级
            this.shopvalue6 == '' ? '' :  data.append('sgradech',this.shopvalue6);   //渠道商
            this.shopvalue7 == '' ? '' :  data.append('ssource',this.shopvalue7); //来源

            if(this.shopvalue8 != ''){   
               data.append('screatetimestart', this.shopvalue8[0]);
               data.append('screatetimeend', this.shopvalue8[1]);
            }
            data.append('page',1);
            data.append('limit',20);  
            data.append('ssupplierId',this.ssupplierId);

            this.$http({
                method: "post",
                url: network.vipList,
                data: data,
                headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') }
            }).then(function(res){
                console.log('---会员列表 data= ' + zm_jsonToString(res.data));
                if(res.data.status ==200){
                     that.$message.success('筛选成功');
                     if( res.data.list.length == 0){
                        that.totalCount = 0;
                        that.tableData = [];
                        return false;
                     }
                    that.totalCount = res.data.totalCount;
                    let newArr = res.data.list;    
                    newArr.forEach(function(item,index){
                        item.balance = parseFloat(item.balance/100);
                        item.integral = 0;
                    })
                    //设置佣金             
                    that.tableData = newArr;  

                }else{
                      that.$message(res.data.message);
                }        
            });  
        },

        cleartiaojian(){
            this.ssupplierId = '';
            this.vipbianhao = '';
            this.vipphone = '';
            this.wxname = ''  ;
            this.shopvalue1 = '';
            this.shopvalue2 = '';
            this.shopvalue3 = '';
            this.shopvalue4 = '';
            this.shopvalue5 = '';
            this.shopvalue6 = '';
            this.shopvalue7 = '';
            this.shopvalue8 = '';
            this.$message.success('已清空筛选条件');
        },

        tanchudengji(parems,userId){
            this.dialogFormVisible = true;
            this.tanvipName = parems;
            this.setdengjiUserId = userId;
        },
        setshangji(papams,wxname,phone){

            this.$router.push({
                path: `/menberDetail/${papams}`
            })
             sessionStorage.setItem('wxname', wxname);
             sessionStorage.setItem('phone', phone);
        },
        creatorder(name,userid){
            this.$router.push({
                path: `/memberlist/createOrder/${userid}`
            })
            sessionStorage.setItem('wxname', name);
        },
        setIntegral(integral, userId, index){
            this.itemIndex = index;
            this.itemData = this.tableData[index];
            this.integralForm = {
                integralTotal: this.itemData.integralTotal,
                integralUsable: this.itemData.integralUsable,
                integralNum: 0,
                remark: this.itemData.remark,
            }
            this.integralDialogFormVisible = true;
        },
        seeDetail(userid){
            this.$router.push({
               path: `/memberlist/memberDetail/${userid}`
            })
        },
        //设置会员积分
        request_setTotalIntegral(){
            
            let that = this;
            let urlStr = network.integralApiIP + network.int_totalSet;
            let data = new FormData();
                data.append("userId",   this.itemData.userId );
                data.append("suserId",  this.$cookie.get('suserId') );
                data.append("integralNum", this.integralForm.integralNum ); 
                data.append("remark",      this.integralForm.remark );
                console.log('---设置会员积分 urlStr= ', urlStr+ '\n params'+ zm_formDataToString(data)); 

                this.$http({
                    method: "post",
                    url: urlStr,
                    data: data,
                    headers: { 
                        "Content-Type": "multipart/form-data", 
                        'suserId':  that.$cookie.get('suserId') ,
                    }
                }).then(function(res){
                   console.log('---设置会员积分：response= '+zm_jsonToString(res.data));
                   if(res.data.status == 200){
                       that.$message.success('设置成功');
                       that.getdata(that.thispage);
                       that.integralDialogFormVisible = false;
                   }else{
                       that.$message('设置失败');
                   }
                //    that.tuikedengji.push(res.data.bsCms1Name,res.data.bsCms2Name,res.data.bsCms3Name);
                //    that.options = metrodates.map((date,i) => ({date, data: figures[i]}));
                //console.log(that.vipdengji);
            }); 
        },  
        //设置会员等级
         setvipdengji(){
            this.dialogFormVisible = false;
            let that = this;
            let data = new FormData();
                data.append("grade",this.vipdengjivalue ); 
                this.$http({
                    method: "post",
                    url: network.setzhevipdengji,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') ,"userId":that.setdengjiUserId}
                })
                .then(function(res){
                   console.log( res);
                   if(res.data.status == 200){
                       that.$message.success('设置成功');
                       that.getdata(that.thispage);
                   }else{
                       that.$message('设置失败');
                   }
                //    that.tuikedengji.push(res.data.bsCms1Name,res.data.bsCms2Name,res.data.bsCms3Name);
                //    that.options = metrodates.map((date,i) => ({date, data: figures[i]}));
                //console.log(that.vipdengji);
            }); 
        },  
     //查询会员等级
         selectvipdenhgji(){
               let that = this;
               let data = new FormData();
              data.append("status","1" );  //1启用  0  警用
              data.append("page","1" );
              data.append("limit","20");
                this.$http({
                    method: "post",
                    url: network.tuikedengji,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') ,"userId": that.$cookie.get('userId')}
                })
                .then(function(res){
                  that.tuikedengji = res.data.list;
                //    that.tuikedengji.push(res.data.bsCms1Name,res.data.bsCms2Name,res.data.bsCms3Name);
                //    that.options = metrodates.map((date,i) => ({date, data: figures[i]}));
                //console.log(that.vipdengji);
                }); 
         } ,   
        //查询渠道商 
        selectqudo(){
               let that = this;
               let data = new FormData();
        
                this.$http({
                    method: "post",
                    url: network.qudaogoods,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') ,"userId": that.$cookie.get('userId')}
                })
                .then(function(res){
                  that.qudaoshang = res.data.list;
                }); 
         } ,  

 
      //设置渠道商
      //userId  里面取得
        setqudaoshang(param){
        this.qddialogFormVisible = true;

        this.qudaosahnguserid = param; 
        },
        /**设置渠道商等级 */
        setQudaoSdengMethod(){
            let that = this; 
            let data = new FormData();  
            data.append('grade',that.qudaaoshanggradevalue);
                this.$http({
                    method: "post",
                    url: network.setqudaoshang,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') ,"userId":that.qudaosahnguserid}
                })
                .then(function(res){
                    console.log(res);
                    if(res.data.status == 505){
                          that.$message.error('服务器异常');
                          that.qddialogFormVisible = false;
                          return false;
                    }
                    if(res.data.status  == 200){
                            that.$message.success('设置渠道商等级成功');
                            that.qddialogFormVisible = false;
                            that.getdata(that.thispage);
                        }else{
                            that.$message.error(res.data.message);
                            that.qddialogFormVisible = false;
                    }
            }); 
        },

        selectNote(userId){
            this.zhituijianFormVisible = true;

            let that = this; 
            let data = new FormData();  
    
                this.$http({
                    method: "post",
                    url: network.allZhi,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') ,"userId":userId}
                })
                .then(function(res){
                    console.log(res);
                    if(res.data.status == 505){
                          that.$message.error('服务器异常');
                          that.qddialogFormVisible = false;
                          return false;
                    }
                    if(res.data.status  == 200){
                        let list = res.data.list;
                        list.forEach(function(item){
                            if(item.moneyTotal != undefined && item.moneyTotal != null && item.moneyTotal != ''){
                                item.moneyTotal = parseFloat(item.moneyTotal /100).toFixed(2); // 总购买额
                            }else{
                                 item.moneyTotal =  0 ;   
                            }
                            item.commissionTotal = parseFloat(item.commissionTotal / 100).toFixed(2);
                        })
                        that.zhituitableData = list;
                    }else{
                            that.$message.error(res.data.message);
                            that.zhituijianFormVisible = false;
                    }
            }); 

        },

        settuike(parme){
            this.tuikedengjialogFormVisible = true;
            this.tuikeuserid = parme;     
        },

        settuikeGradedMethod(){     
            let that = this; 
            let data = new FormData();  
            data.append('grade',that.tuikedengjivalue);
                this.$http({
                    method: "post",
                     url: network.settuike,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') ,"userId":that.tuikeuserid}
                })
                .then(function(res){
                    console.log(res);
                    if(res.data.status == 505){
                          that.$message.error('服务器异常');
                          that.tuikedengjialogFormVisible = false;
                          return false;
                    }
                    if(res.data.status  == 200){
                            that.$message.success('设置推客等级成功');
                            that.tuikedengjialogFormVisible = false;
                            that.getdata(that.thispage);
                        }else{
                            that.$message.error(res.data.message);
                            that.tuikedengjialogFormVisible = false;
                    }
                 }); 
            },
        getdata(pageindex){
               let that = this; 
               let data = new FormData();
                data.append('page',pageindex);
                data.append('limit',20); 
                data.append('ssupplierId',this.ssupplierId);   
            let urlStr =  network.vipList;
             console.log('---会员等级列表：请求urlStr= ' + urlStr);
                this.$http({
                    method: "post",
                    url:urlStr,
                    data: data,
                    headers: { "Content-Type": "multipart/form-data", suserId:  that.$cookie.get('userId') }
                }).then(function(res){
                    // console.log('---会员等级列表：请求成功= ' + zm_jsonToString(res.data.setting));
                    console.log('---会员列表 data= ' + zm_jsonToString(res.data));
                    if(res.data.status == 200){
                        let matime =  setInterval(function(){       
                            that.totalCount = res.data.totalCount;
                            let newArr = res.data.list;    
                            newArr.forEach(function(item,index){
                                item.balance = parseFloat(item.balance/100);
                                item.integral = 0;
                            })
                            //设置佣金             
                            that.tableData = newArr;
                                that.loading =  false;
                                clearTimeout(matime);
                        },200);
                   
                    }else{
                        that.$message.error(res.data.message);
                    }      
                });     
        },
        handleClick(tab, event) {
                console.log(tab, event);
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
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            this.getdata(val);

            this.thispage = val;
            console.log(`当前页: ${val}`);

        }
        },
    components:{
        navbar,sidebar,membersecnavbar    
    }
}
</script>

<style>

.ml_integralNum{
    margin-left: 30%;
}
.headerTitle1{
    display: flex;
    margin-top: 5px;
    font-size: 13px !important;
}
.headerTitle2{
    margin: 0px 3px 0 3px;
    color: #267de0 !important;
    font-size: 13px !important;
}
.headerTitle3{
    margin: 5px 0px 0 30px;
}
.memberlist-button .el-button+.el-button{
    margin: 0 !important;
}
.goods_list_dibu-twodiv .el-input__inner{
    height: 28px!important;
}
.vip-alllist .el-input__inner{
    height: 32px;
    line-height: 32px;
}

.vip-alllist .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;

}
.vip-alllist .el-icon-arrow-down {
    font-size: 12px;
}
 .el-dropdown{
     font-size: 12px;
     color: #409EFF;
     cursor: pointer;
     width: 50px;
     height: 16px;
     margin-left: 10px;
     text-align: center;
}
 .el-dropdown-link{
     font-size: 12px;
}

.vip-item-list_time .el-input__icon{
    display: flex;
    align-items: center;
}

.vip-item-list_time .el-range-separator{
    display: flex;
    align-items: center;
}


.vip-xxxx .el-input__icon {
    line-height: 32px;
}

.memberlist-table{
    color: #606266 !important;

}

.memberlist-button button{
    padding: 0!important;    
  
  
    box-sizing: content-box;
}
.memberlist-button span{
    display: inline-block;
    padding-right: 5px;
    border-right: 1px solid #e8e8e8;
}
.memberlist-button button:nth-child(3) span{
    border-right: none;
}
.memberlist-buttonmore .el-dropdown-link{
    border-right: none !important;
   
}
 .mem-btn{
    width: 102px !important;
}
.memberlist-buttonmore-pading .el-dropdown-menu__item{
    padding: 0 !important;
}
.memberlist-div-yongjin dl{
    display: flex;
    align-items: center;
}
</style>