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
                <el-breadcrumb-item>添加商品</el-breadcrumb-item>
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

                <!-- <dl class="g-is-state-dl">
                  <dt>
                    <div class="el-step__icon is-text"></div>
                    <span>添加基本信息</span>
                  </dt>
                  <dd class="g-isstate-dl-dd_one"></dd>
                  <dd class="g-is-state-son">
                    <div class="el-step__icon is-text"></div>
                    <span>添加基本信息</span>
                  </dd>
                </dl> -->
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

                        <!-- <div :class="[{'g-type-ul':obj.flog,'gf-type-active':obj.flogtwo}]">
                          <ul @click="shiwugoods(2)">
                            <li class="g-type-name">虚拟商品</li>
                            <li class="g-type-huo">（无需物流）</li>
                          </ul>
                          <i class="el-icon-success g-type-img"></i>
                        </div>

                        <div :class="[{'g-type-ul':obj.flog,'gf-type-active':obj.flogthree}]" >
                          <ul @click="shiwugoods(3)">
                            <li class="g-type-name">超级拼团</li>
                            <li class="g-type-huo">（物流发货）</li>
                          </ul>  
                            <i class="el-icon-success g-type-img"></i>
                        </div>

                        <div :class="[{'g-type-ul':obj.flog,'gf-type-active':obj.flogfour}]" >
                          <ul @click="shiwugoods(4)">
                            <li class="g-type-name">抢购活动</li>
                            <li class="g-type-huo">（物流发货）</li>
                          </ul>  
                            <i class="el-icon-success g-type-img"></i>
                        </div> -->


                      </div>
                      <div>
                        <!-- <div class="gf-more">
                          <div class="mh-goodsgf-more"  @click="show3 = !show3">  
                              <span>更多设置</span>
                              <i :class="{'el-collapse-item__arrow':true,'el-icon-arrow-right':true,'is-active':show3}"></i>
                          </div>
                        </div> -->

                        <!-- <el-collapse-transition>
                        <div v-show="show3">
                          <el-checkbox v-model="checked">跳转到其他网站购买</el-checkbox>
                          <dl class="gf-wailink">
                            <dt>外部购买地址：</dt>
                            <dd>
                              <input
                                type="text"
                                autocomplete="off"
                                class="el-input__inner"
                                placeholder="http://"
                                v-model="redirection"
                              />
                            </dd>
                          </dl>
                          <div class="gf-tips">因特殊流程（如电影选座等）需要，可以从商品详情跳转到外部购买</div>
                        </div>
                        </el-collapse-transition> -->


                      </div>
                    </div>

                    <div>
                          <div class="df-basic">
                          <div class="df-basic_row el-form-item is-required">
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">商品名：</label>
                            <input type="text" autocomplete="off" class="el-input__inner" v-model="name" />
                          </div>

                          <div class="df-basic_row el-form-item">
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">分享描述：</label>
                            <input type="text" autocomplete="off" class="el-input__inner" v-model="description"/>
                          </div>


                          <!-- 封面图必填 -->
                          <div class="df-basic_row el-form-item xxxx is-required" >
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">封面图：</label>
                            <div style="width: 80%" class="oooo" >
                                <img :src="goodsfenimg" alt="" v-if="goodsfenimg!=''" class="oooo_img" >
                          
                                <div class="mh-goods-resimg"  @click="fenhgmiantu"> 
                                <i   class="el-icon-plus mh-goods-resimg-i"></i>
                                </div>

                                 <!-- <el-upload action="https://api.mihuanshop.com/live/base/file/single/upload " list-type="picture-card"
                                  :on-preview="handlePictureCardPreview1"
                                  :multiple="bgImg_elUpload_multipleImg1" 
                                  :file-list='bgImg_elUpload_imgFileList1' 
                                  :on-change="emc_fileChange1" 
                                  :on-remove="handleRemove1">
                                  <i class="el-icon-plus"></i>
                                </el-upload>
                                <el-dialog :visible.sync="dialogVisible1">
                                  <img width="100%" :src="dialogImageUrl1" alt="">
                                </el-dialog> -->

                              </div>   
                          </div>
                       



                          <div class="df-basic_row el-form-item xxxx is-required" >
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
                          </div>

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


                                <!-- <el-select style="width:400px" multiple filterable allow-create default-first-option
                                  v-model="catevalue"
                                  placeholder="请选择商品分类：">
                                  <el-option  v-for="item in shopcategory"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                  </el-option>
                                </el-select> -->
                            </div>
                          </div>

                          <!-- <div class="df-basic_row el-form-item" style="margin-bottom: 36px">
                        
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">商品分组：</label>
                            <div class="block" style="width:500px">
                                <el-select
                                  style="width:400px"
                                  v-model="shopgrounpvalue"
                                  multiple
                                  filterable
                                  allow-create
                                  default-first-option
                                  placeholder="请选择商品分组">
                                  <el-option
                                    v-for="item in shopgrounpnote"
                                    :key="item.id"
                                    :label="item.name"
                                    :value="item.id">
                                  </el-option>
                                </el-select>



                              <button style="margin-left:18px;"
                                type="button"
                                class="el-button el-button--text el-button--small mhbtn-a_link"            
                              >
                              <router-link tag="a" to="/goods/goodsgroup/addgoodsgroup" >      
                                <span>新建分组</span>
                              </router-link>
                              </button>
                            </div>

                          </div> -->



                          <div class="df-basic_row el-form-item">
                            <label for="item_title" class="el-form-item__label" style="width: 150px;">商品卖点：</label>
                            <input type="text" autocomplete="off" class="el-input__inner" v-model="maidian" style="flex:1"/>
                          </div>

                         

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

                              <test ref="refgui" :mhqdaoflag="mhqdaoflagsTATUS"  :protableData="tableDataone"  :prospecArr="specArrtwo" :proallData="thereallData"></test>
            
                            </div>
                            <button v-if="addgoodsisshow" @click="goodsguilist" type="button" class="el-button el-button--default el-button--mini" >
                            <span>添加规格项目</span>
                          </button> 
                          <!--  -->
                        </div>
                      </div>

                      <div class="df-basic_row el-form-item is-required">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">价格</label>
                          <div class="df-kucun-price">
                            <div>
                              <el-input placeholder="请输入价格" v-model="viprice"  type='number'>
                                <template slot="prepend">￥</template>
                              </el-input>
                            </div>
                            <!-- 会员价格弹出等级设置 -->
                            <!-- <button @click="vippopup" v-show="isgoodsdengji"
                              type="button"
                              class="el-button el-button--primary el-button--mini"
                              style="margin-left: 10px; height: 32px;"
                            >
                              <span>会员价格</span>
                            </button> -->
                            <!-- 渠道商价格弹出等级设置 -->
                            <!-- <button  @click="qdspopup"  v-show="jinebiliefanyong"
                            type="button"
                            class="el-button el-button--primary el-button--mini"
                            style="margin-left: 10px; height: 32px;"
                          >
                            <span>渠道商价格</span>
                          </button> -->


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

                      <div class="df-basic_row_new el-form-item is-required">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">库存：</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small" style="width: 25%;display: flex;align-items: center;">
                            <el-input placeholder="请输入库存" v-model="stockNum"  :disabled="xuanzeshuxi" type='number'>
                            </el-input>
                            <input
                              type="text"
                              autocomplete="off"
                              placeholder="件"
                              class="el-input__inner df-kucun-jian"
                              v-model="kucundan" 
                            />
                          </div>
                        </div>
                      </div>

                      <div class="df-basic_row_new el-form-item">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">基础销量:</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small" style="width: 25%;display: flex">
                            <input type="number" autocomplete="off" class="el-input__inner" v-model="baseSalesVolume" />
                      
                          </div>
                        
                        </div>
                      </div>

                      <div class="df-basic_row_new el-form-item">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">重量：</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small" style="width: 25%;display: flex">
                            <input type="number" autocomplete="off" class="el-input__inner" v-model="weight" />
                      
                          </div>
                          <div class="tips el-col el-col-24 df-tps-zi">千克(最多两位小数)</div>
                        </div>
                      </div>

                      <!-- <div class="df-basic_row_new el-form-item">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">会员折扣：</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small" style="width: 25%;display: flex">
                            <el-checkbox v-model="isMemberDiscount" @change="isMemberDiscounth">参加会员折扣</el-checkbox>
                          </div>
                          <div class="tips el-col el-col-24 df-tps-zi">是否勾选不影响自定义会员价生效</div>
                        </div>
                      </div> -->

                      <div class="df-basic_row_new el-form-item">
                        <label
                          for="item_title"
                          class="el-form-item__label"
                          style="width: 150px;"
                        >会员购买虚拟库存：</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small" style="width: 25%;display: flex">
                            <div>
                              <el-radio v-model="vipxuniku" label="1">是</el-radio>
                              <el-radio v-model="vipxuniku" label="0">否</el-radio>
                            </div>
                          </div>
                          <div class="tips el-col el-col-24 df-tps-zi">开启后，会员允许购买虚拟库存</div>
                        </div>
                      </div>

                      <div class="df-basic_row_new el-form-item">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">虚拟库存起购数：</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small" style="width: 25%;display: flex">
                            <input type="number" autocomplete="off" class="el-input__inner" v-model="xunigou"/>
                          </div>
                        </div>
                      </div>

                       <div class="mh-goodsgf-more"  @click="show33 = !show33">  
                          <span>更多设置</span>
                          <i :class="{'el-collapse-item__arrow':true,'el-icon-arrow-right':true,'is-active':show33}"></i>
                        </div>


                      <el-collapse-transition>
                        <div v-show="show33">
                            <div class="df-basic_row_new el-form-item">
                              <label for="item_title" class="el-form-item__label" style="width: 150px;">商品编码：</label>
                              <div class="el-form-item__content" style="margin-left: 150px">
                                <div class="el-input el-input--small" style="width: 25%;display: flex">
                                  <input type="text" autocomplete="off"  v-model="goodscode" class="el-input__inner" />
                                </div>
                              </div>
                            </div>

                            <div class="df-basic_row_new el-form-item">
                              <label for="item_title" class="el-form-item__label" style="width: 150px;">成本价：</label>
                              <div class="el-form-item__content" style="margin-left: 150px">
                                <div class="el-input el-input--small" style="width: 25%;display: flex">
                                  <el-input placeholder="请输入内容" v-model="chengmoney" :disabled="xuanzeshuxi" type="number">
                                    <template slot="prepend">￥</template>
                                  </el-input>
                                </div>
                                <div class="tips el-col el-col-24 df-tps-zi">用于按照利润计算佣金</div>
                              </div>
                            </div>

                      
                            <!-- <div class="df-basic_row_new el-form-item">
                              <label for="item_title" class="el-form-item__label" style="width: 150px;">供应商：：</label>
                              <div class="el-form-item__content" style="margin-left: 150px">
                                <div class="el-input el-input--small" style="width: 25%;display: flex">
                                  <el-select v-model="gysvalue" placeholder="请选择供应商">
                                    <el-option
                                      v-for="item in gys"
                                      :key="item.value"
                                      :label="item.label"
                                      :value="item.value"
                                    ></el-option>
                                  </el-select>
                                </div>
                              </div>
                            </div> -->

                            <!-- <div class="df-basic_row_new el-form-item">
                              <label for="item_title" class="el-form-item__label" style="width: 150px;">供货价：：</label>
                              <div class="el-form-item__content" style="margin-left: 150px">
                                <div class="el-input el-input--small" style="width: 25%;display: flex">
                                  <el-input placeholder="请输入供货价" v-model="gonghuomoney" :disabled="xuanzeshuxi" type="number">
                                    <template slot="prepend">￥</template>
                                  </el-input>
                                </div>
                              </div>
                            </div>

                            <div class="df-basic_row_new el-form-item">
                              <label for="item_title" class="el-form-item__label" style="width: 150px;">分销价：：</label>
                              <div class="el-form-item__content" style="margin-left: 150px">
                                <div class="el-input el-input--small" style="width: 25%;display: flex">
                                  <el-input placeholder="请输入供货价" v-model="ptMoney" :disabled="xuanzeshuxi" type="number">
                                    <template slot="prepend">￥</template>
                                  </el-input>
                                </div>
                              </div>
                            </div> -->


                            </div>
                      </el-collapse-transition>       
                    </div>

                  </el-tab-pane>
                  <el-tab-pane label="其他信息" name="third">
                    <div class="gf-qita">
                      
                      <div class="df-basic_row_new el-form-item">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">商品评价：</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small" style="width: 25%;display: flex">
                            <el-checkbox v-model="isshowComment" @change="clickpingjiame">商品详情不展示评价</el-checkbox>
                          </div>
                          <div class="tips el-col el-col-24 df-tps-zi">勾选后商品详情页面不展示评价信息</div>
                        </div>
                      </div>

                      
                      <div class="df-basic_row_new el-form-item">
                         <label for="item_title" class="el-form-item__label" style="width: 142px;">是否支持7天无理由:</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small" style="width: 50%;">
                            <el-radio v-model="wuliyouValue" label="1">是</el-radio>
                            <el-radio v-model="wuliyouValue" label="0" >否</el-radio>
                          
                          </div>
                        </div>
                      </div>
                         

                      <div class="df-basic_row_new el-form-item" v-if="iskuaidishow">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">快递运费：</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small" style="width: 70%;display: flex">
                            <div>
                              <div class="gf-kuaidi" style="display:flex;align-items: center;margin-bottom:15px;height: 40px;">
                                <el-radio v-model="yiyoufei" label="1"  @change="goodsissueyfmethod">统一邮费</el-radio>
                                <el-input placeholder="请输入内容" v-model="youfeivalue" v-if="isyfmoban">
                                  <template slot="prepend">￥</template>
                                </el-input>
                              </div>
                              <!-- 运费模板暂时没隐藏 -->
                              <div class="gf-kuaidi" style="display:flex;align-items: center;margin-bottom:15px;height: 40px;">
                                <el-radio v-model="yiyoufei" label="2"  @change="goodsissueyfmethod">运费模板</el-radio>
                                <!-- <el-input type="button" v-model="ft_name" @click="ft_tableDialogVisibleClick" placeholder="请选择运费模板" > </el-input> -->
                                <el-button v-if="isyfmoban1" class="ft_name" icon="el-icon-d-caret" size="small" plain  @click="ft_tableDialogVisibleClick()"> 
                                    {{ft_name}}
                                </el-button>
                                
                      
                              </div>
    
                              <div >
                                <el-radio v-model="yiyoufei" label="3"  @change="goodsissueyfmethod">仅自提/同城配送</el-radio>
                              </div>

                            </div>
                          </div>
                        
                        </div>
                      </div>

                      <div class="df-basic_row_new el-form-item" v-if="iskuaidishowtwo">
                          <label for="item_title" class="el-form-item__label" style="width: 150px;">快递运费：</label>
                          <div class="el-form-item__content" style="margin-left: 150px">
                              <el-radio v-model="radio" label="1">手动发货</el-radio>
                              <el-radio v-model="radio" label="2">自动发货</el-radio>
                              <el-radio v-model="radio" label="2">自动发货并交易完成</el-radio>
                          </div>
                      </div>

                      <div class="df-basic_row_new el-form-item">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">上架时间：</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small">
                            <div class="mh-goods-time_radius">
                              <el-radio v-model="shangjiatime" @change="uptimemethod" label="1">立即上架售卖</el-radio>
                            </div>
                            <div class="gf_time mh-goods-time_radius">
                              <el-radio v-model="shangjiatime"  @change="uptimemethod" label="2">自定义购买时间</el-radio>
                              <div class="block" v-show="isshowuptime">
                                <el-date-picker
                                  v-model="upsahngjiatime"
                                  value-format="timestamp"
                                  type="datetimerange"
                                  range-separator="至"
                                  start-placeholder="开始日期"
                                  end-placeholder="结束日期"
                                  @change="hauhau"
                                ></el-date-picker>
                              </div>
                            </div>
                            <div class="mh-goods-time_radius">
                              <el-radio v-model="shangjiatime"  @change="uptimemethod" label="3">暂不售卖, 放入仓库</el-radio>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="df-basic_row_new el-form-item">
                        <label for="item_title" class="el-form-item__label" style="width: 150px;">预购：</label>
                        <div class="el-form-item__content" style="margin-left: 150px">
                          <div class="el-input el-input--small" style="width: 25%;">
                            <div>
                              <el-switch v-model="yugou" active-color="#409EFF" inactive-color="#f8f8f8" @change="yugoudata"></el-switch>
                            </div>
                          </div>
                        </div>
                      </div>

                      <el-collapse-transition>
                      <div  v-show="show12">
                              <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 150px;">定金：</label>
                                <div class="el-form-item__content" style="margin-left: 150px">
                                  <div class="el-input el-input--small" style="width: 25%;display: flex">
                                    <el-input placeholder="请输入内容" v-model="yugouvalue1" type="number">
                                      <template slot="prepend">￥</template>
                                    </el-input>
                                  </div>
                                </div>
                              </div>

                              <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 150px;">定金抵扣金额：</label>
                                <div class="el-form-item__content" style="margin-left: 150px">
                                  <div class="el-input el-input--small" style="width: 25%;display: flex">
                                    <el-input placeholder="请输入内容" v-model="yugouvalue2" type="number">
                                      <template slot="prepend">￥</template>
                                    </el-input>
                                  </div>
                                </div>
                              </div>

                              <div class="df-basic_row_new el-form-item">
                                <label
                                  for="item_title"
                                  class="el-form-item__label"
                                  style="width: 150px;"
                                >预售定金结束时间：</label>
                                <div class="el-form-item__content" style="margin-left: 150px">
                                  <div class="el-input el-input--small" style="width: 25%;display: flex">
                                    <div class="block">
                                      <el-date-picker v-model="yugouvalue3" type="datetime" placeholder="选择日期时间"></el-date-picker>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="df-basic_row_new el-form-item">
                                <label
                                  for="item_title"
                                  class="el-form-item__label"
                                  style="width: 150px;"
                                >支付尾款结束时间：</label>
                                <div class="el-form-item__content" style="margin-left: 150px">
                                  <div class="el-input el-input--small" style="width: 25%;display: flex">
                                    <div class="block">
                                      <el-date-picker v-model="yugouvalue4" type="datetime" placeholder="选择日期时间"></el-date-picker>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div class="df-basic_row_new el-form-item">
                                <label for="item_title" class="el-form-item__label" style="width: 150px;">预计发货时间：</label>
                                <div class="el-form-item__content" style="margin-left: 150px">
                                  <div class="el-input el-input--small" style="width: 25%;display: flex">
                                    <div class="block">
                                      <el-date-picker v-model="yugouvalue5" type="datetime" placeholder="选择日期时间"></el-date-picker>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              </div>
                        </el-collapse-transition>
                        <!-- <div class="mh-goodsgf-more"  @click="show5 = !show5">  
                              <span>更多设置</span>
                              <i :class="{'el-collapse-item__arrow':true,'el-icon-arrow-right':true,'is-active':show5}"></i>
                        </div> -->

                        <div class="gf-qita-more">
                          <el-collapse-transition>
                          <div v-show="show5">

                        </div>
                        </el-collapse-transition>
                      </div>
                    </div>
                  </el-tab-pane>


              </el-tabs>      

             <!-- over -->
              <div class="footer-bar fix" style="position: absolute; z-index: 100;">
                <button @click="baocunreqgoods" type="button" class="el-button el-button--primary el-button--small">
                  <span>保存</span>
                </button>
                <button  @click="baocunreq" type="button" class="el-button el-button--default el-button--small" >
                  <span>下一步</span>
                </button>
              </div>
              <!-- 发布商品中心 -->
            </div>
          </div>


          <!-- 弹窗 -->
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

          <el-dialog title="渠道商等级" :visible.sync="qddialogFormVisible"  width="25%">  
                  <div class="mh-resoure-grounp mh-goodsfabutan"  v-for="(item,index) in qudaoshang" :key="index" data-id="item.grade">      
                      <span class="mh-resoure-grounp_onespan mh-goodsfabutan_span"  >{{item.nickName}}</span>
                      <div class="block" style="margin:0 15px">
                          <el-input v-model="item.price" placeholder=""></el-input>                     
                      </div>
                      <span class="mh-resoure-grounp_onespan">元</span>
                </div>
                  <span slot="footer" class="dialog-footer">
                      <el-button @click="qddialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="qudaoarrmethod">确 定</el-button>
                  </span>
          </el-dialog>
           <!-- sku会员价格 -->
          <!-- <el-dialog title="会员价格" :visible.sync="vippricedialogFormVisible" width="25%">
                  <div class="mh-resoure-grounp mh-goodsfabutan"   v-for="(vipitem,vipitemindex) of skusvipdengjiid" :key="vipitemindex">
                      <span class="mh-resoure-grounp_onespan mh-goodsfabutan_span" >{{vipitem.name}}:</span>
                      <div class="block" style="margin:0 15px">
                          <el-input v-model="vipitem.skupriceindex" placeholder="" type="number"></el-input>                     
                      </div>
                      <span class="mh-resoure-grounp_onespan">元</span>
                 </div>
                  <span slot="footer" class="dialog-footer">
                      <el-button @click="vippricedialogFormVisible = false">取 消</el-button>
                      <el-button type="primary" @click="okskuprice">确 定</el-button>
                  </span>
          </el-dialog> -->

          <!-- <el-dialog title="渠道商价格" :visible.sync="shpricedialogFormVisible" width="25%">
                   <div class="mh-resoure-grounp mh-goodsfabutan"  v-for="(item,index) in skuqudaoprice" :key="index" data-id="item.grade">      
                        <span class="mh-resoure-grounp_onespan mh-goodsfabutan_span"  >{{item.nickName}}</span>
                        <div class="block" style="margin:0 15px">
                            <el-input v-model="item.thisqdaoskuid" placeholder=""></el-input>                     
                        </div>
                        <span class="mh-resoure-grounp_onespan">元</span>
                  </div>      
                   <span slot="footer" class="dialog-footer">
                        <el-button @click="shpricedialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="okskuqudaoMethod">确 定</el-button>
                    </span>
           </el-dialog> -->

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



  
          <!-- 商品中心over-->
        </div>
      </div>

        <videoson ref="videoson"> </videoson>
        <imgsrc ref="imgsrc"> </imgsrc>
                    
    </div>
    <!--主体 over-->
</template>

<script>
import navbar from "../navbar"; 
import sidebar from "../sidebar";
import imgsrc from "../resource/imgsrc";
import videoson from "../resource/video";
import secnavbar from "./secnavbar";
import baseapi from '../../utils/api';
import descartes from '../../utils/descartes';
import test from './test';
import freightTemplate_list from './goods_freightTemplate_list';
import {    
        zm_jsonToString,
        zm_formDataToString, zm_formDataToJson
    } from "../../filters/zm_tools"
import { FormItem } from 'element-ui';

export default {
  el : '#goodsissuemain',
  data() {
    return {
      dialogImageUrl1: '',
      dialogVisible1: false,
      bgImg_elUpload_multipleImg1: true,
      bgImg_elUpload_limitNum1: 1,
      bgImg_elUpload_imgFileList1: [],
      fileList1: [],
      fileImgList1: [],

      dialogImageUrl2: '',
      dialogVisible2: false,
      bgImg_elUpload_multipleImg2: true,
      bgImg_elUpload_limitNum2: 1,
      bgImg_elUpload_imgFileList2: [],
      fileList2: [],
      fileImgList2: [],
      
          //模板列表 弹框
          ft_Id: '',
          ft_name: '请选择运费模板',
          ft_tableDialogVisible: false,
          ft_tableData: [],
        //
        goodsfenimg:'',
        mhqdaoflagsTATUS:true,
        obj:{
          flog:true,
          flogone:true,
          flogtwo:false,
          flogthree:false,
          flogfour:false
        },
        activeName: 'first',
      
      baseSalesVolume:'',
      mhqdaoflag:true,
      basexiaoling:0,
      onupclass:'1',
      goodsnum:0,
      isgoodsdengji:true,
      goodscode:null,

      tuikeitem1value:'',
      tuikeitem2value:'',
      tuikeitem3value:'',
      tuikeitem4value:'',
      tuikeitem5value:'',
      tuikeitem6value:'',

      rcmCommissionData:
      [ { 1: { money:0 , pct: 0 } }],
       rcmCommissionData2:
      [ { 1: { money:0 , pct: 0 } }],
       rcmCommissionData3:
      [ { 1: { money:0 , pct: 0 } }],

      qudaoshang1:   [ ],
      qudaoshang2:   [ ],
      qudaoshang3:   [ ],
      songjifen:'',
      integralIsdeposit:'1',
      wuliyouValue:'1',
      addspv:'',
      xuanzeshuxi:false,
      
      //渠道商价格弹窗
      shpricedialogFormVisible:false,
      vippricedialogFormVisible:false,
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
      isMemberDiscountvale:0,
      vipitemid:'',
      //规格值数组
      ggzarr:[{
      price: '' ,
      stockNum: '' ,
      inventoryUnit: '' ,
      discountPrice: '' ,
      weight: '' ,
      isShowInventory: 1 ,
      isMemberDiscount: false ,
      isMemberDiscountvale:0,
      isVirtual: "1",
      inventoryVirtualMin: 1 ,
      // marketPrice: '' ,
      // marketPrice: '' ,
      marketPrice: '' ,
    
      imgReqName: 1 ,
      specPic:'',
      guigezhivalue:"",
      pv: [{pId: null,pName: null , vId: null, vText: null ,img:''} ] }],
     //属性值循环数据
      isshowgglistarr:[],
      guigeimg:[],
      jinebiliefanyong:true,
        
      shopgrounpvalue:'',//商品分组
      accuseitem: {},
      accuseVisible: false,
      isshowgglist :true,
      addgoodsisshow:false,
      typetate:false,
      //商品属性
      guigearrlist:[],
      guigezhilist:[],
      options: [],
      value: '',
        shuxinvalue:'',   //规格绑定的value
        guigezhivalue:'', //绑定的属性值
        qudaoArr:[],

      //发布接口数据
      netimgUrl:'1',
      vipdialogFormVisible:false,
      qddialogFormVisible:false,
      //快递是否显示
      iskuaidishow:true,
      iskuaidishowtwo:false,
      yugou:false,
      suserId: 1, //saas id
    
      name: "", //spu名称  1.为实物商品   2.为虚拟商品
      imageShowType:'1', //轮播方式  1.左右 2.纵向
      userLimitNum: 1, //卖家限购
      redirection: '', //跳转地址
      chRebateType: "2", //渠道商返佣类型 1.金额  2.比例
      // videonum:'1',

      //运费
      yiyoufei:"1",
      youfeivalue:0,
      isyfmoban:true,
      isyfmoban1:false,
      isqudaoxiaosou:false,
      isVirtual: "1",  //虚拟库存
      skus: [
          {
            price: '' ,
            stockNum: '' ,
            specDetail: '',
            inventoryUnit: '',
            discountPrice: '' ,
            weight: '',
            isShowInventory: 1 ,
            isMemberDiscount: false ,
            isMemberDiscountvale:0,
            isVirtual: "1",
            inventoryVirtualMin: 1 ,
            // marketPrice: '' ,
            // marketPrice: '' ,
            marketPrice: '' ,
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
      limitUserids: [1, 2, 3, 4, 5], // 限制每人的购买件数
      rcmCommissionData: [
        { 1: { money: 100, pct: 20 } },
        { 2: { money: 100, pct: 20 } }
      ], //推客数据

      videoType: 1, //1：本地视频，2：视频地址，3：腾讯视频
      videoUrl: "1", //   外部视频地址
      commissionFollowSys: 1, //计算佣金是否跟谁系统 1.是 0 否
      chIsCommission: 1, //渠道商是否返佣  1：按佣金金额或比例返佣。2：按积分返佣。3：按佣金金额或比例与积分返佣
      rcmIsCommission: 1, //推客是否返佣 1是 0否
      chXsjIsCommission: 1, //渠道商销售奖是否返佣 1是 0否

      description: "", //分享描述
      buyingPoint: "11", //买点
      categoryId: 111, //分类ID
      groupId: 111, //分组ID
      brandId: 111, //品牌ID
      isshowComment: false, //是否展示评论  1：是。0：否
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
      videoFile: "", //上传视频时填入，文件file类型
      imgsFile: "", //多个图片文件（数组）文件file类型
      input1: "1",
      input: "11",
      value1: 1,
      checked: false,
      pic: "",
      radio: "1",
      value: [],
      props: { multiple: true },

      gys:[{
        value:'自供'
      }],
      options: [],
      optionstwo: [
        {
          value: "1",
          label: "一级分类"
        }],
      value2: [],
      input: 1,
      value: "",
      gysvalue:'',

      //实物goods  
      isxu:true,
      //虚拟goods
      isshiwu:false,
      show33:true,
      show3: false,
      show4: true,
      show5: true,
      show6: false,
      show7: false,
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
        needjifen:'',
        isjifenbuy:'',
        dixianbai:'',
        fuwufei:1,
        fuweumany:'',
        fuweumanybai:'',
        isbtian:'1',
        // waivideourl:'',
        gengxitong:'0',
        istuikefan:"0",
        qudaoxiaosou:"0",
        maidian:'',
        //chRebateData 渠道返佣数据
        qvalue1:0,
        qvalue2:0,
        qvalue3:0,
        qvalue4:0,
        qvalue5:0,
        qvalue6:0,
        //渠道商平级
        pvalue1:0,
        pvalue2:0,
        pvalue3:0,
        pvalue4:0,
        pvalue5:0,
        pvalue6:0,

        //渠道商越级
        yvalue1:0,
        yvalue2:0,
        yvalue3:0,
        yvalue4:0,
        yvalue5:0,
        yvalue6:0,

        //推客 1级
        tvalue1:0,
        tvalue2:0,
        tvalue3:0,
        tvalue4:0,
        tvalue5:0,
        tvalue6:0,
        //推客二级
        t2value1:0,
        t2value2:0,
        t2value3:0,
        t2value4:0,
        t2value5:0,
        t2value6:0,
        //推客等级
        t3value1:0,
        t3value2:0,
        t3value3:0,
        t3value4:0,
        t3value5:0,
        t3value6:0,
        //预购
        kaiqiyusou:'',
        yugouvalue1:'',
        yugouvalue2:'',
        yugouvalue3:'',
        yugouvalue4:'',
        yugouvalue5:'',
        chengmoney:null,
        // 分销价
        ptMoney:null,
        //供货价
        gonghuomoney:null,
        //
        viprice:'',
        priceMember:'',
        stockNum:'',
        kucundan:'件',
        // 折扣价 
        zhekoujia:null,
        isMemberDiscount:1,
        vipxuniku:0,
        xunigou:null,
        weight:null,
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
        catevalue: 0,

        shopgrounpnote:[],
        sonurl:[],
        type: 1, //商品类型 1.实物  2.虚拟
        upsahngjiatime:'', // 上下架时间
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
        skusvipdengjiid:[],
        skuqudaoprice:[],
        skupriceindex:0,
        thisqdaoskuid:0,
        FLOG:true,
        typeThere:false,
        tableDataone:[],
        specArrtwo:[],
        thereallData:[],
        zhongoneArr:[],
        zhongtwoArr:[],
        zhongthrereArr:[]

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
  mounted() {
      // this.tuikedengjimethod();
      // this.shopcategoryme(); //渲染商品分类数据
      // this.selectshopproperty(); // 商品属性
      // this.shopgrounplist(); //商品分组
      // this.selectqudo(); //请求：查询渠道商 
      // this.reqvipdengjilist();           //请求: 会员列表
      this.request_freightTemplateList();//请求: 运费模板列表
      this.goodsguilist();
      console.log('------发布商品');


  },
  watch: {
      type(type) {
       if(type == 3 || type == 4){
            this.typeThere = true;
            this.jinebiliefanyong = false;
            this.mhqdaoflagsTATUS = false;
       
        }else{
            this.typeThere = false;
            this.mhqdaoflagsTATUS = true;
        
        }
      },
       deep:true //true 深度监听
  },
  methods: {
      //1、封面图
      handleRemove1(file, fileList) {
         console.log('--文件移除时的钩子: '+ file, fileList);
      },
      emc_fileChange1(file, fileList) {
          //console.log('---文件状态改变时的钩子： change：file= ' + file + '、fileList= ' + fileList.length);
          console.log('---fileList1= ', zm_jsonToString(fileList));
          this.fileList1 = fileList;
      },
      handlePictureCardPreview1(file) {
        this.dialogImageUrl1 = file.url;
        this.dialogVisible1 = true;
      },
      // 2、商品图
      handleRemove2(file, fileList) {
         console.log('--文件移除时的钩子: '+ file, fileList);
      },
      emc_fileChange2(file, fileList) {
          console.log('---fileList2= ', zm_jsonToString(fileList));
          this.fileList2 = fileList;
      },
      handlePictureCardPreview2(file) {
        this.dialogImageUrl2 = file.url;
        this.dialogVisible2 = true;
      },

    //---------------------运费模板列表--------------------- 
    ft_tableDialogVisibleClick(){
      console.log('---模板选择: ft_tableDialogVisibleClick');
        // 模板选择
        this.ft_tableDialogVisible = true;
    },
    ft_closeclick(){
        console.log('---ftList= ' +this.$refs.ftList);
        this.$refs.ftList.son_sconfirmCilck('确认选择');
        this.ft_tableDialogVisible = false;
    },
    ft_selectBackClick(obj){
        console.log('---父组件接收数据 obj= ' +obj);
        this.ft_Id   = obj.tShopFreightTemplate.sftTemplateId;
        this.ft_name = obj.tShopFreightTemplate.sftTemplateName;
        console.log('---父组件接收数据 ft_Id  = ' +this.ft_Id);
        console.log('---父组件接收数据 ft_name= ' +this.ft_name);
    },
    ft_fatherPage(val){
        console.log('-------ft_fatherPage= '+val);
    },
    // 请求：运费模板
    request_freightTemplateList(){
            let self = this;
            let params = new FormData();   
            let urlStr = baseapi.TIP + baseapi.ft_findAll;
                urlStr = baseapi.supplierFreightTemplateList
            params.append('page', 0);  
            params.append('size',100);
            //console.log('---运费模板列表: urlStr= '+urlStr + '\n params= '+ zm_formDataToString(params));
           
            this.$http({
                method: "post",
                url: urlStr,
                data: params,
            }).then(function(res){
                // console.log('---运费模板列表：response= '+zm_jsonToString(res));
                if(res.status ==200){
                    if (res.data) {
                        if (res.data.data.List.length>0) {
                            self.ft_tableData = res.data.data.List;
                            console.log('---运费模板列表: length= '+self.ft_tableData.length);
                            // self.totalCount = res.data.total;
                        }
                    }
                } else {
                    self.$message.error(res.data.message);
                }
            },function(res){
                self.$message.error(res.data.message);
            })
        },
      //---------------------主题--------------------- 
    handleClick(tab, event){
      console.log(tab.name);
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
    okskuprice(){
      let newArr = [];
      this.skusvipdengjiid.forEach(function(item,index){    
          newArr.push({"gradeid":item.id,"money":Number(item.skupriceindex*100)},)
      });
       this.$set( this.$refs.refgui.tableData[this.thisskuid],'priceMember',newArr);
       console.log(this.$refs.refgui.tableData);
        // this.$set( this.ggzarr[this.thisskuid],'priceMember',newArr);
        this.vippricedialogFormVisible= false;
        // {"priceMember":[{"gradeid":73,"money":100},{"gradeid":67,"money":100},{"gradeid":66,"money":100}]
    },
    skuspriceMethod(index) {
      this.thisskuid = index;
      this.vippricedialogFormVisible = true;
    },
    skuqudaopriceMehod(index){
        this.thisqdaoskuid = index;
        this.shpricedialogFormVisible = true;
        
    },
    okskuqudaoMethod(){
      let newArr = [];
      console.log( this.skuqudaoprice);
      this.skuqudaoprice.forEach(function(item,index){    
          newArr.push({"gradeid":item.grade,"money":Number(item.thisqdaoskuid*100)},)
      });
        this.$set( this.$refs.refgui.tableData[this.thisqdaoskuid],'chmoney',newArr);  
        this.shpricedialogFormVisible= false;
    },
    guigezhivmethod(index){
      let that =this;
      let str = '';  
      let getid = '';
      that.ggzarr.forEach(function(item){
        that.guigezhilist.forEach(function(name,value) {
            if(name.id == item.guigezhivalue){
                str = name.text;  
                getid = name.id;
            }    
        });
      })
      that.ggzarr[index].pv[0].vId = getid;
      that.ggzarr[index].pv[0].vText = str;
    },
    addshuxvalue(){
      let newString = this.ggzarr[0].pv[0].pId;
      let newStringName = this.ggzarr[0].pv[0].pName;
        this.ggzarr.push( {
            price: '' ,
            stockNum: '' ,
            specDetail: '' ,
            inventoryUnit: '' ,
            discountPrice: '' ,
            weight: '' ,
            isShowInventory: 1 ,
            isMemberDiscount: false ,
            isMemberDiscountvale:0,
            isVirtual: "1",
            inventoryVirtualMin: 1 ,
            // marketPrice: '' ,
            // marketPrice: '' ,
            marketPrice: '' ,
            code:'',
            specPic:'',
            pv: [
              {pId:newString,pName:newStringName , vId: null, vText: null,img:'' }
             ] 
         });
      },
      //删除规格值
      delectshuxvalue(index){     
        // alert(this.ggzarr.length);  
        if( this.ggzarr.length > 1){
          this.ggzarr.splice(index,1);
        }else{
          this.$message('不能在删了~')
        }
       
      },
    
    getsonimg(){
      this.$refs.imgsrc.imgdialogFormVisible = true;
      this.$refs.imgsrc.pid = 1;
    },
    //封面图
    fenhgmiantu(){
      this.$refs.imgsrc.imgdialogFormVisible = true;
      this.$refs.imgsrc.pid = 88;
    },
    //属性规格获取图片
    getsonshuimg(index){
        this.suinde = index;
        this.$refs.imgsrc.imgdialogFormVisible = true;
        this.$refs.imgsrc.pid = 2;
    },
    //删除图片
    delectimg(index){
       this.sonurl.splice(index,1);
    },
    delectguigeimg(index){

      this.ggzarr[index].specPic = '';
    },

    hauhau(){
      console.log(this.upsahngjiatime);
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

    Close_dialog (val,url) {
      this.accuseVisible = false;
      // alert(this.diffindex );
      if(this.diffindex ==1){
        this.sonurl = url;
      }else{
        this.guigeimg = url;
      }
      console.log( this.sonurl);

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

    qudaoarrmethod(){
      this.qddialogFormVisible = false;
      // console.log(this.qudaoArr);
    } ,

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
    //请求：商品分组
   shopgrounplist(){
     let data = new FormData();
      this.http.post( baseapi.shopgrounplist,data).then(res=>{
          this.shopgrounpnote = res.data.list;
      })       
    },
    //会员等级弹窗 
    vippopup(){
        this.vipdialogFormVisible = true;
    },
    //渠道商等级弹窗
    qdspopup(){
      this.qddialogFormVisible = true;
    },
      //显示spu属性列表事件（添加规格项目）
      goodsguilist(){
          this.isshowgglist = true;
          this.addgoodsisshow = false;
          this.xuanzeshuxi=true;
          this.jinebiliefanyong = false;
          this.isgoodsdengji = false;
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
    getdata(parameter) {

      let that = this;
      let data = new FormData();
   
      data.append("type", that.type);
      if(that.redirection != ''){
             data.append("redirection", that.redirection); // 外部购买地址
      }
   
      //商品名称
      if( that.name != '' &&  that.name !=undefined &&  that.name !=null){
           data.append("name", that.name);   
      }else{
           this.$message.error('商品名称不能为空');
           return false;
      }

      data.append("status", '0');                   //商品显示状态：默认不显示
      data.append("productFormat", '0');            // 商品格式
      data.append("recommendRemark", '商品物美价廉'); // 商家推荐
      //卖点 --> 商家推荐
      if( that.maidian != ''){
          //  data.append("buyingPoint", that.maidian); 
          data.append("recommendRemark", that.maidian);
      }
      data.append("remark", '备注'); // 商家可见备注

        //分享描述（description） 详情
        if(that.goodsfenimg != ''){
            data.append("description", that.goodsfenimg); 
        }

        //封面图（商品主图 最多5张）
        if(that.goodsfenimg != '' && that.goodsfenimg != null  && that.goodsfenimg != undefined){
            data.append("pic", that.goodsfenimg);
        }else{
            this.$message.error('商品封面图必传');
            return false;
        }

        // let goodsfenImg = [];
        // let picImg = [];
        // this.fileList1.forEach(element => {
        //     goodsfenImg.push(element.response.data);
        // });
        // this.fileList2.forEach(element => {
        //     picImg.push(element.response.data);
        // });

        // //封面图  分享描述（description） 详情
        // if(goodsfenImg.length> 0){
        //     data.append("description", goodsfenImg);
        // }else{
        //     this.$message.error('商品封面图必传');
        //     return false;
        // }
        // //商品图（商品主图 最多5张）
        // if(picImg.length> 0){
        //     data.append("pic", picImg);
        // }else{
        //     this.$message.error('商品图必传');
        //     return false;
        // }

      // //商品规格图片
      // if(that.sonurl != '' && that.sonurl != null  && that.sonurl != undefined){
      //     data.append("specPic", JSON.stringify(that.sonurl));
      // }else{
      //     this.$message.error('商品图片不能为空');
      //     return false;
      // }
      data.append("weightUnit", 1);  // 商品重量单位：0-kg , 1-g
      data.append("productType", this.catevalue); // 分类ID  this.catevalue
      //图片展示方式           
      data.append("imageShowType",that.imageShowType);  


      if( that.shopgrounpvalue.length != 0){
        let strarr = this.shopgrounpvalue.join(",");
        strarr = strarr.substring(0, strarr.length);
        data.append("groupIds", strarr); // 分组id
      }

      // 基础销量  
      data.append("baseSalesVolume", that.baseSalesVolume);
      //渠道商返佣类型
      data.append("chRebateType", that.chRebateType);
      //是否展示评论
      if(that.isshowComment){
            data.append("isshowComment",1);
      }else{
         data.append("isshowComment",0);
      }
      //是否展示邮费
      if(that.yiyoufei == 1){  
        data.append("postagePrice", that.youfeivalue);
      }
      // 运费模板 
      if(that.yiyoufei == 2){  
        data.append("postageTemplateId", that.ft_Id);
      }
      //邮费类型
       if(that.yiyoufei != '' && that.yiyoufei != undefined){
          data.append("postageType", that.yiyoufei);
      }


      //没有上级不能下单
      data.append("orderNoSuperior",that.onupclass); 
      if(that.upsahngjiatime != undefined && that.upsahngjiatime != '' ){
            data.append("putawayTimestart",that.upsahngjiatime[0]);  //  上架时间戳
      }
      if(that.upsahngjiatime != undefined && that.upsahngjiatime != '' ){
          data.append("putawayTimeend", that.upsahngjiatime[1]);   //  下架时间戳 
      }
      data.append("putawayType", that.shangjiatime); // 上架的方式
      data.append("integralIsdeposit", that.integralIsdeposit);  //是否积分底线     x'x
      data.append("groundless7d", that.wuliyouValue); //是否支持7天无理由
     
      if(that.fuweumany != ''){
        data.append("serviceFee", that.fuweumany); 
      }
      if(that.fuweumanybai != ''){
        data.append("serviceFeepct",(that.fuweumanybai).toString()); 
      }
      data.append("isneedRemark", that.isbtian);
      // //推客分销是否跟谁系统
      // data.append("commissionFollowSys",that.gengxitong); 
      // data.append("chIsCommission", that.chIsCommission);
      // data.append("rcmIsCommission", that.istuikefan);
      // data.append("chXsjIsCommission", that.qudaoxiaosou);
      // data.append("brandId", 11);  
      

      if(that.jinebiliefanyong || that.isgoodsdengji){
        //会员等级价格
        let vipDengArr = [];
        that.vipdengjiid.forEach(function(item,indexnum){
        if(item.price == undefined ){
         vipDengArr.push({"gradeid":item.id,"money":0})
        }else{
          vipDengArr.push({"gradeid":item.id,"money":Number(item.price*100)})  
        }   
      })
      
        //会员等级价格结束
        //渠道商等级价格
      let shDengArr = [];   
      that.qudaoshang.forEach(function(item,indexnum){
        if(item.price == undefined ){
            shDengArr.push({'gradeid':item.grade,'money':0})
        }else{
            shDengArr.push({'gradeid':item.grade,'money':Number(item.price*100)})
        }   
      })

      //渠道商等级价格结束
      data.append("skus", JSON.stringify(
        [{ 
          priceMember:vipDengArr,
          chmoney:shDengArr,
          price: parseInt(that.viprice*1000/10),
          stockNum: Number(that.stockNum), //库存数字必传
          specDetail: that.description,
          inventoryUnit: that.kucundan,
          // discountPrice:parseInt(that.zhekoujia*1000/10),     //折扣价       
          // weight: Number(that.weight*1000),               //重量
          // weightUnit: 1,
          isShowInventory: 1 ,                                //是否显示库存 页面不存在不显示
          isMemberDiscount: Number(that.isMemberDiscountvale),//是否会员折扣
          // isVirtual: Number(that.vipxuniku),                  //会员是够购买虚拟库存  1是  0 否
          // inventoryVirtualMin: Number(that.xunigou),          //虚拟库存起购数
          // //更多设置
          // marketPrice: parseInt(that.chengmoney*1000/10),     //成本价
          // marketPrice: parseInt(that.gonghuomoney*1000/10), //供货价
          // marketPrice: parseInt(that.ptMoney*1000/10),    //分销价
          // code:that.goodscode,
          // chmoney:that.qudaoArr.map(Number) ,//渠道价  ? 
          // priceMember:                         会员价 -- 有会员列表
          pv: [ {pId:Number(that.shuxinvalue),pName: that.firstsx,vId:Number(that.guigezhivalue), vText: that.addspv }]       
          }]
      ));
    }

      //无新增sku结束
      //新增sku   判断 商品多规格判断
      if(that.jinebiliefanyong == false && that.isgoodsdengji == false){ 

        that.jinzeone = this.$refs.refgui.specArr;
        that.jinzetwo = this.$refs.refgui.specArr;
        that.jinzethere = this.$refs.refgui.specArr;
        let Cshu    =   this.$refs.refgui.specArr;
        let shulist =  this.$refs.refgui.allData;
        let Cgoos   = this.$refs.refgui.tableData;
        let guiGe_skus = [];
        let specs = '';  
        let specPic = [];          
        let guiGe_pv = null;
        let guiGe_Cshu = null;

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
        // console.log('--Cgoos= '+zm_jsonToString(Cgoos));
        // console.log('--guiGe_skus= '+zm_jsonToString(guiGe_skus));
        // console.log('--specPic= '+zm_jsonToString(specPic));
        data.append("specPic", specPic); // 规格图片
        
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
                    }
            })
        });
        //判断该数组是不是二维数组
        const isDeep = shulist.some(function(item){
          return  item instanceof Array
        })
        console.log('--shulist= '+shulist);
        console.log('--Cgoos= '+Cgoos);
        data.append("specName", '颜色-尺码'); 
         
        

        if(isDeep){
             Cgoos.forEach(function (item, index) {
                item.pv = [];
                // console.log('---item.Cshu11= '+ zm_jsonToString(item.Cshu) );
                if (guiGe_Cshu==null) {
                  guiGe_Cshu = item.Cshu;
                }
                item.Cshu.forEach(function(sonitem,sonindex){
                    sonitem.pId == '' || sonitem.pId == null  ? sonitem.pId = null : null ;   
                    item.pv.push({pName: sonitem.name, pId: sonitem.pId,vText:item.vtext[sonindex],vId: typeof(item.specs[sonindex]) == 'string' ? item.specs[sonindex] = null : item.specs[sonindex] });

                    if (guiGe_pv==null) {
                      guiGe_pv = item.pv;
                    }
                    // console.log('---item.guiGe_pv= '+ zm_jsonToString(item.pv));
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
      addskuDengPrice.forEach(function(item, indexnum){
          item.price = parseInt(item.price*1000/10);               //价格
          item.stockNum = Number(item.stock); //库存
          // item.code = Number(item.code);                      //编码
          // item.marketPrice  = parseInt(item.gprice*1000/10);  //供货价
          // item.marketPrice    = parseInt(item.qprice*1000/10);  //成本价 
          // item.marketPrice= parseInt(item.pPrice*1000/10);  //分销价 
          item.discountPrice = parseInt(that.zhekoujia*1000/10);   //划线价
          item.inventoryUnit = that.kucundan;  
          item.weight = Number(that.weight*1000);//按g算
          item.isShowInventory =  1 ;
          item.isMemberDiscount = Number(that.isMemberDiscountvale);
          item.isVirtual = Number(that.vipxuniku);
          item.inventoryVirtualMin = Number(that.xunigou);
          item.pv = item.pv;
          item.photo    = item.img;
          // item.Cshu = [];
          // item.vtext = [];
          // item.specs = [];
          // item.pv[0].img = item.specPic;
      })  

      data.append("marketPrice", parseInt(that.zhekoujia*1000/10) ); //商品划线价
      data.append("discountPrice", parseInt(that.viprice*1000/10) ); //商品售价
      data.append("weight",  Number(that.weight*1000));  //重量
      data.append("weightUnit", 1);

      console.log('---addskuDengPrice.count= '+ addskuDengPrice.count);
      data.append("skus", JSON.stringify(guiGe_skus));
      // data.append("skus", JSON.stringify(addskuDengPrice));
      data.append("attech", JSON.stringify(addskuDengPrice));
    }

      let packData = new Map();
      let vuparr1 = {};
      if(that.rcmCommissionData){
        packData.set('0',{money:Number(that.tuikeitem1value*100),pct:Number(that.tuikeitem2value)} );
        that.rcmCommissionData.forEach(function(item,indexnum){         
            if(item.pcttone == undefined || item.moneytone == undefined){
                packData.set(item.id,{money:0,pct:0} );
            }else{
                packData.set(item.id,{money:Number(item.moneytone*100),pct:Number(item.pcttone)} );
            }   
        })
      }

      packData.forEach(function(value,key){
        vuparr1[key] = value;
　   　});

      let packData2 = new Map();
      let vuparr2 = {};
      if(that.rcmCommissionData2){
        packData2.set('0',{money:Number(that.tuikeitem3value*100),pct:Number(that.tuikeitem4value)} );
        that.rcmCommissionData2.forEach(function(item,indexnum){
            if(item.pctttwo == undefined || item.moneyttwo == undefined){
                  packData2.set(item.id,{money:0,pct:0} );
            }else{
                packData2.set(item.id,{money:Number(item.moneyttwo*100),pct:Number(item.pctttwo)} );
            }   
        })
      }

      packData2.forEach(function(value,key){
        vuparr2[key] = value;
　   　});

      let packData3 = new Map();
      let vuparr3 = {};
      // console.log(that.rcmCommissionData3);
      if(that.rcmCommissionData3){
        packData3.set('0',{money:Number(that.tuikeitem5value*100),pct:Number(that.tuikeitem6value)} );
        that.rcmCommissionData3.forEach(function(item,indexnum){
            if(item.pcttthere == undefined || item.moneytthere == undefined){
                  packData3.set(item.id,{money:0,pct:0} );
            }else{
                packData3.set(item.id,{money:Number(item.moneytthere*100),pct:Number(item.pcttthere)} );
            }   
        })

      }

      packData3.forEach(function(value,key){
        vuparr3[key] = value;
　   　});

      let packdataArr = [];
      packdataArr.push(vuparr1,vuparr2,vuparr3);
      
      let mhgetArr = [];
      if(this.tuikeitem1value != ''){
        let packDatatuike = new Map();
        let vuparrtuike = {};
        that.rcmCommissionData.forEach(function(item,indexnum){
            packDatatuike.set('0',{money:Number(that.tuikeitem1value*100),pct:Number(that.tuikeitem2value)} );
        })
        packDatatuike.forEach(function(value,key){
              vuparrtuike[key] = value;
　      　});
        console.log(vuparrtuike);
        mhgetArr.push(vuparrtuike);
      }

      if(this.tuikeitem3value != ''){
        let packDatatuike = new Map();
        let vuparrtuike = {};
        that.rcmCommissionData2.forEach(function(item,indexnum){
            packDatatuike.set('0',{money:Number(that.tuikeitem3value*100),pct:Number(that.tuikeitem4value)} );
        })
        packDatatuike.forEach(function(value,key){
              vuparrtuike[key] = value;
　      });
        mhgetArr.push(vuparrtuike);
      }

      if(this.tuikeitem5value != ''){
        let packDatatuike = new Map();
        let vuparrtuike = {};
        that.rcmCommissionData3.forEach(function(item,indexnum){
            packDatatuike.set('0',{money:Number(that.tuikeitem5value*100),pct:Number(that.tuikeitem6value)} );
        })
        packDatatuike.forEach(function(value,key){
              vuparrtuike[key] = value;
　      });
        mhgetArr.push(vuparrtuike);
      }
     // console.log(mhgetArr.length != 0);

      data.append("rcmCommissionData", JSON.stringify(packdataArr)); 

      // qudaoshang1
      let qpackData2 = new Map();
      let qvuparr2 = {};
      if(that.qudaoshang2.length != 0){
        that.qudaoshang2.forEach(function(item,indexnum){
            if(item.moneyone == undefined || item.pctone == undefined){
                  qpackData2.set(item.grade,{money:0,pct:0} );
            }else{
                qpackData2.set(item.grade,{money:Number(item.moneyone*100),pct:Number(item.pctone)} );
            }   
        })
        qpackData2.forEach(function(value,key){
            qvuparr2[key] = value;
    　   });       
      }
      let oneNewArr = [];
      oneNewArr.push(qvuparr2);
      data.append("chXsjEqualData",JSON.stringify(oneNewArr)); 


      let qpackData3 = new Map();
      let qvuparr3 = {};
      if(that.qudaoshang3.length != 0){
        that.qudaoshang3.forEach(function(item,indexnum){
            if(item.pctthree == undefined || item.moneythree == undefined){
                  qpackData3.set(item.grade,{money:0,pct:0} );
            }else{
                qpackData3.set(item.grade,{money:Number(item.moneythree*100),pct:Number(item.pctthree)} );
            }   
        })

        qpackData3.forEach(function(value,key){
            qvuparr3[key] = value;
    　   　});
       }

      let pingxiaosiuArr = [];
      pingxiaosiuArr.push(qvuparr3);

      data.append("chXsjExceedData",JSON.stringify(pingxiaosiuArr)); 
     
      if(that.chRebateType ==2){
          let qpackData1 = new Map();
          let qvuparr1 = {};
          if(that.qudaoshang1.length != 0){
            that.qudaoshang1.forEach(function(item,indexnum){
                if(item.moneyxx == undefined || item.pctxx == undefined){
                      qpackData1.set(item.grade,{money:0,pct:0} );
                }else{
                    qpackData1.set(item.grade,{money:Number(item.moneyxx*100),pct:Number(item.pctxx)} );
                }   
            })
          }
          qpackData1.forEach(function(value,key){
            qvuparr1[key] = value;
    　   　});
          data.append("chRebateData", JSON.stringify(qvuparr1));   //渠道商
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
     

      // 请求：商品发布  （baseapi.goodsissueGoods  supplierProductAdd ）
      var urlStr = baseapi.supplierProductAdd;
      console.log('---请求：商品发布 参数= '+zm_formDataToString(data) +'urlStr= '+urlStr);
    
      this.http.post( urlStr, data).then(res=>{

          if(res.data.status == 500 && res.data.message == "SKU库存不正确"){
            that.$message.error("商品库存必填");
            return false;
          }
          if(res.data.status == 500 && res.data.message == "会员价不合法"){
            that.$message.error("会员价必填");
            return false;
          }
          if(res.data.status == 500 && res.data.message == "重量不合法"){
            that.$message.error("商品重量不合规范");
            return false;
          }

          if(res.data.status == 500){
            that.$message.error(res.data.message);
            return false;
          }

          if(res.data.status == 200){
            that.$message.success("发布成功"); 
            // let sonDatail = res.data.itemId; //res.data.item.id;

            // if(parameter != 1){
            //     that.$router.push({
            //       path: '/goodsedit/'+sonDatail
            //   })
            // }else{
            //     that.$router.push({
            //       path: '/goodslist'
            //   })
            // }
          }else{
            that.$message("发布失败," + res.data.message);
          }
      })  
    },
    // //请求：查询渠道商 
    // selectqudo(){
    //   let data = new FormData();
    //   this.http.post( baseapi.qudaogoods,data).then(res=>{
    //       this.qudaoshang = res.data.list;
    //       this.skuqudaoprice = res.data.list;
    //       this.qudaoshang1 = res.data.list;
    //       this.qudaoshang2 = res.data.list;   
    //       this.qudaoshang3 = res.data.list.filter(function(ele,idx,arr){
    //         return idx !== 0;
    //       });
    //   })    
    // } ,  
    handleAvatarSuccess(res, file) {
      this.pic = URL.createObjectURL(file.raw);
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
    }
  },
  components: {
    navbar,
    sidebar,
    secnavbar,
    imgsrc,
    videoson,
    test,
    freightTemplate_list
  }
};
</script>

<style>
  
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