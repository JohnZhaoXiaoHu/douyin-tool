<!--商品分组组件-->
<template>
  <div class="main">
    <sidebar></sidebar>
    <!--主体 start-->
    <div class="main-right">
      <navbar></navbar>
      <!--二级导航栏 -->
      <div class="main-goods">
        <!-- <secnavbar></secnavbar> -->
        <div class="main-goods-right goodsgroup-main">
          <!-- 商品中心内容  -->
          <div class="goods-card_body wx-body">
            <div class="wx-module">
              <div class="wx-use-module">常用模块</div>
              <div class="wx-use-mokuai">
                  <div class="J_module_item gradient_bg module_item--cJJyl0 mh-swiper_hover" v-on:click="swiperattribute"  >
                      <svg class="icon--sIwnGv">
                        <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" id="icon_MK_fwlb" width="100%" height="100%" >
                          <rect x="1" y="7" width="16" height="10" rx="1" ry="1" />
                          <path  d="M19,13h3a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H8A1,1,0,0,0,7,4V5H17a2,2,0,0,1,2,2Z" fill="currentColor" />
                          <rect x="1" y="19" width="16" height="2" rx="1" ry="1" />
                          <rect x="19" y="15" width="4" height="2" rx="1" ry="1" fill="currentColor" />
                        </svg>
                      </svg>
                      <span class="name--2dSrqS">轮播图</span>
                  </div>

                <div class="J_module_item gradient_bg module_item--cJJyl0"  v-on:click="cubeattribute" >
                    <svg class="icon--sIwnGv">
                      <use xlink:href="#icon_MK_mfdh" />
                      <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  id="icon_MK_mfdh"  width="100%"  height="100%" >
                        <circle cx="21" cy="8" r="3" />  <circle cx="12" cy="8" r="3" />  <circle cx="3" cy="8" r="3" fill="currentColor" />  <circle cx="21" cy="16" r="3" /> <circle cx="12" cy="16" r="3" /> <circle cx="3" cy="16" r="3" />
                      </svg>
                    </svg>
                    <span class="name--2dSrqS">魔方导航</span>
                </div>
                <div class="J_module_item gradient_bg module_item--cJJyl0"  v-on:click="wordattribute" >
                  <svg class="icon--sIwnGv">
                    <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24"  id="icon_MK_wb"  width="100%"  height="100%">
                      <path d="M12,4H2A1,1,0,0,0,2,6H6V19a1,1,0,0,0,2,0V6h4a1,1,0,0,0,0-2Z" />
                      <path  d="M22,10H14a1,1,0,0,0,0,2h3v7a1,1,0,0,0,2,0V12h3a1,1,0,0,0,0-2Z"  fill="currentColor" />
                    </svg>
                  </svg>
                  <span class="name--2dSrqS">文字</span>
                </div>
                <div class="J_module_item gradient_bg module_item--cJJyl0"   v-on:click="titleattribute" >
                  <svg class="icon--sIwnGv">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon_MK_bqmk"  width="100%" height="100%">
                      <rect x="1" y="16" width="22" height="2" rx="1" ry="1" />
                      <rect x="1" y="12" width="22" height="2" rx="1" ry="1" />
                      <rect x="1" y="6" width="8" height="3" rx="1.5" ry="1.5" fill="currentColor" />
                      <rect x="11" y="7" width="5" height="2" rx="1" ry="1" />
                      <rect x="18" y="7" width="5" height="2" rx="1" ry="1" />
                    </svg>
                  </svg>
                  <span class="name--2dSrqS">标题</span>
                </div>
                <div class="J_module_item gradient_bg module_item--cJJyl0" v-on:click="editattribute" >
                  <svg class="icon--sIwnGv">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  id="icon_MK_wzlb" width="100%" height="100%" >
                      <rect x="1" y="4" width="6" height="6" rx="1" ry="1" fill="currentColor" />
                      <rect x="10" y="4" width="13" height="2" rx="1" ry="1" fill="currentColor" />
                      <rect x="10" y="8" width="8" height="2" rx="1" ry="1" fill="currentColor" />
                      <rect x="10" y="14" width="13" height="2" rx="1" ry="1" />
                      <rect x="10" y="18" width="8" height="2" rx="1" ry="1" />
                      <rect x="1" y="14" width="6" height="6" rx="1" ry="1" />
                    </svg>
                  </svg>
                  <span class="name--2dSrqS">富文本</span>
                </div>
                <div class="J_module_item gradient_bg module_item--cJJyl0"  v-on:click="dvertisingattribute" >
                  <svg class="icon--sIwnGv">
                    <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  id="icon_MK_tw"  width="100%" height="100%"  >
                      <circle cx="16.5" cy="8.5" r="1.5" />
                      <path
                        d="M21,3H3A2,2,0,0,0,1,5V15a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V5A2,2,0,0,0,21,3Zm0,8-1.53.92a6.61,6.61,0,0,1-6.9-.06l-1.22-.76a8.37,8.37,0,0,0-7.09-.84L3,10.67V5H21Z"
                      />
                      <rect x="1" y="19" width="22" height="2" rx="1" ry="1" fill="currentColor" />
                    </svg>
                  </svg>
                  <span class="name--2dSrqS">图片广告</span>
                </div>
                <div class="J_module_item gradient_bg module_item--cJJyl0"  v-on:click="goodsattribute" >     
                  <svg class="icon--sIwnGv">
                    <svg  xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" id="icon_MK_tw"  width="100%" height="100%">
                      <circle cx="16.5" cy="8.5" r="1.5" />
                      <path  d="M21,3H3A2,2,0,0,0,1,5V15a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V5A2,2,0,0,0,21,3Zm0,8-1.53.92a6.61,6.61,0,0,1-6.9-.06l-1.22-.76a8.37,8.37,0,0,0-7.09-.84L3,10.67V5H21Z" />
                      <rect x="1" y="19" width="22" height="2" rx="1" ry="1" fill="currentColor" />
                    </svg>
                  </svg>
                  <span class="name--2dSrqS">商品</span>
                </div>
                <div class="J_module_item gradient_bg module_item--cJJyl0" v-on:click="grounpattribute" >
                 
                  <svg class="icon--sIwnGv">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon_MK_zyrq" width="100%"  height="100%" >
                      <path  d="M20,21H4a3,3,0,0,1-3-3V6A3,3,0,0,1,4,3H20a3,3,0,0,1,3,3V18A3,3,0,0,1,20,21ZM4,5A1,1,0,0,0,3,6V18a1,1,0,0,0,1,1H20a1,1,0,0,0,1-1V6a1,1,0,0,0-1-1Z" />
                      <rect x="5" y="7" width="2" height="10" rx="1" ry="1" fill="currentColor" />
                      <rect x="9" y="7" width="10" height="2" rx="1" ry="1" />
                      <rect x="9" y="11" width="10" height="6" rx="1" ry="1" />
                    </svg>
                  </svg>
                  <span class="name--2dSrqS">商品分组</span>
                </div>
                <div class="J_module_item gradient_bg module_item--cJJyl0" v-on:click="imgnavattribute">
                  <svg class="icon--sIwnGv">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="icon_MK_fwlb" width="100%" height="100%">
                      <rect x="1" y="7" width="16" height="10" rx="1" ry="1" />
                      <path  d="M19,13h3a1,1,0,0,0,1-1V4a1,1,0,0,0-1-1H8A1,1,0,0,0,7,4V5H17a2,2,0,0,1,2,2Z" fill="currentColor"/>
                      <rect x="1" y="19" width="16" height="2" rx="1" ry="1" />
                      <rect x="19" y="15" width="4" height="2" rx="1" ry="1" fill="currentColor" />
                    </svg>
                  </svg>
                  <span class="name--2dSrqS">图文导航</span>
                </div>
              </div>
            </div>

            <!--手机H5页面-->
            <div class="wx-content">
              <div class="wx-main">
                <div class="wx-h5">
                  <div class="wx-h5-header">
                    <div class="wx-h5-hd_title">店铺模板</div>
                    <div class="wx-h5-hd_nav">
                      <div class="divider"></div>
                      <div class="options-btn"></div>
                      <div class="close-btn"></div>
                    </div>
                  </div>
                </div>

         

                

              <ul class="list zujianlist" id="list">
                      <li v-for="(item,index) in wxArrdata" :key="index"  :id="index" @click="indexpageIdMethod(index)" :style="adverdata">       
                     <!-- 轮播图数据 -->
                      <div class="adver mh-adver" v-for="item in mihuanswiper" :key="item.id" v-if="wxArrdata[index].componentId == 1">
                          <div class="block" :style="wxArrdata[index].content.swipercolor">
                            <el-carousel
                                height="150px"
                                :style="wxArrdata[index].content.onestyleObj"
                                :autoplay="false"
                                :indicator-position="wxArrdata[index].content.positition"
                                :direction="wxArrdata[index].content.swipedirectioncontent" >
                                <el-carousel-item v-for="item in listimg" :key="item.id">
                                    <img :src="item.imgurl" alt class="adver_img" />
                                </el-carousel-item>
                            </el-carousel>
                          </div>
                      </div>
                      <i class="iconfont icon-guanbi delete-btn zujianlist-i" @click="dectthismudel(index)" title="点击删除该组件" ></i>

                      <!-- 魔方数据 -->
                      <div  v-if="wxArrdata[index].componentId == 2" class="adver mihuanmofang">
                          <div :style="wxArrdata[index].content.cubebgcolor">
                              <div class="wx-imgnav mh-adver" :style="wxArrdata[index].content.cubestyleObj1">
                                <dl v-for="(item,i) of wxArrdata[index].content.cubeimg" :key="i" :class="{'cubetwoclass':item.cubetwoclass}">
                                  <dt><img v-bind:src="item.cubeimg" alt /></dt>
                                  <dd><span>{{item.cubetitle}}</span></dd>
                                </dl>
                              </div>
                          </div> 
                      </div>


                      <!-- 文本数据 -->
                      <!-- <div class="adver"  :style="[textbgcolor, wxArrdata[]"  v-if="wxArrdata[index].componentId == 3"> -->
                          <!-- v-for="(item,index) of wxArrdata[index].content.textgrounp" :key="index" -->
                     <div class="adver" v-if="wxArrdata[index].componentId == 3">
                          <div class="wx-text" title="文本" :style="wxArrdata[index].content.textstyle">{{wxArrdata[index].content.textzi}}</div>
                      </div> 
               
                      <!--标题数据  -->
                      <div class="adver  mh-module-title" v-if="wxArrdata[index].componentId == 4"  :style="wxArrdata[index].content.titlestyle"> 
                          <div class="wx-text" title="文本">{{wxArrdata[index].content.wxtitle}}</div>
                          <span class="mh-fu_title" v-if="wxArrdata[index].content.subheading != ''">{{wxArrdata[index].content.subheading}}</span>
                      </div> 


                      <!-- 富文本数据 -->
                      <div v-for="(item,index) of wxArrdata[index].content.richdata" :key="index" style="background-color: rgb(249, 249, 249);">
                        <textarea placeholder="请在右侧编辑数据"></textarea>
                        
                      </div>

                      <!-- 图片广告 -->
                      <div class="wx-divlogoimg adver" v-if="wxArrdata[index].componentId == 6" :style="wxArrdata[index].content.imgagestyle" >
                        <img src="http://img.wkdao.com/image/system/2019/06/10/0ec305bb038204041315cea04689f236.png" alt class="wx-logoimg" />
                      </div>

                      <!-- 商品模块 goods -->
                      <div class="adver"  v-for="(item,index) of wxArrdata[index].content.goods" :key="index" :style="shopstylecss">
                          <div style="padding: 15px;">

                            <div class="h5-wxgoods-card" v-if="goodsliststyle" :style="shopborderstylecss">
                                <div> 
                                  <div class="h5-wxgoods">
                                      <span class="h5-wxgoods-biao"  v-if="showcontent4">新品</span>
                                  </div>
                                </div>
                                  <div class="h5-wxgoods-car_bottom">
                                    <h3 class="h5-wxgoods-fu" v-if="showcontent">家政服务</h3>
                                    <div class="h5-wxgoods-price" v-if="showcontent3">
                                        <span>￥</span>
                                        <span>100.00</span>
                                        <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px"  v-if="showcontent6">199.00</span>  
                                    </div>
                                    <div class="h5-wxgoods-gobuy"> 
                                      <span class="h5-wxgoods-people"> xx人付款</span>
                                      <div class="h5-wxgoods-gointo" v-if="mihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                                    </div>                              
                                </div>
                            </div>
                          <!--  -->
                          </div>


                          <div class="h5-wxgoods-card_two" v-if="goodslistisstyleone" :style="shopborderstylecss">
                             <div> 
                              <div class="h5-wxgoods_two" :style="h5wxgoodsoneyang">
                                  <span class="h5-wxgoods-biao" v-if="showcontent4">新品</span>
                              </div>
                            </div>
                              <div style="padding:10px">
                                <h3 class="h5-wxgoods-fu" v-if="showcontent">家政服务</h3>
                                <div class="h5-wxgoods-price"  v-if="showcontent3">
                                    <span>￥</span>
                                    <span>100.00</span>
                                    <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px" v-if="showcontent6">199.00</span>  
                                </div>
                                <div class="h5-wxgoods-gobuy"> 
                                  <span class="h5-wxgoods-people"> xx人付款</span>
                                  <div class="h5-wxgoods-gointo" v-if="mihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                                </div>
                            </div>
                          </div>

                          <div class="h5-wxgoods-card_two" v-if="goodslistisstyletwo" :style="shopborderstylecss">
                             <div> 
                              <div class="h5-wxgoods_three">
                                  <span class="h5-wxgoods-biao" v-if="showcontent4">新品</span>
                              </div>
                              </div>
                              <div style="padding:10px">
                                <h3 class="h5-wxgoods-fu" v-if="showcontent">家政服务</h3>
                                <div class="h5-wxgoods-price"  v-if="showcontent3">
                                    <span>￥</span>
                                    <span>100.00</span>
                                    <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px" v-if="showcontent6">199.00</span>  
                                </div>
                                <div class="h5-wxgoods-gobuy"> 
                                  <span class="h5-wxgoods-people"> xx人付款</span>
                                  <div class="h5-wxgoods-gointo" v-if="mihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                                </div>
                            </div>
                          </div>

                          <div class="h5-wxgoods-card-four" v-if="goodslistisstylethere" :style="shopborderstylecss">
                              <div class="mihuan-liubaifour"> 
                                <div class="h5-wxgoods-four">
                                    <span class="h5-wxgoods-biao" v-if="showcontent4">新品</span>
                                </div>
                                </div>
                                <div style="padding:10px;width:50%">
                                  <h3 class="h5-wxgoods-fu" style="margin-bottom:10px" v-if="showcontent">家政服务</h3>
                                  <div class="h5-wxgoods-price"  v-if="showcontent3">
                                      <span>￥</span>
                                      <span>100.00</span>    
                                      <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px" v-if="showcontent6">199.00</span>         
                                  </div>
                                
                                  <div class="h5-wxgoods-gobuy"> 
                                    <span class="h5-wxgoods-people"> xx人付款</span>
                                    <div class="h5-wxgoods-gointo" v-if="mihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                              </div>
                          </div>

                          </div>

                      </div>
                      <!-- 商品分组goodsgrounp -->
                         
                      <div class="h5-wx-shopgrounp-div adver" v-for="(item,index) of wxArrdata[index].content.goodsgrounp" :key="index" v-if="isgoodsstates">  
                            <div :class="meimei">
                                <el-tabs v-model="activeName"  @tab-click="handleClick">

                                <el-tab-pane label="分组1" name="first" :style="fzshopstylecss">
                                <!-- 
                                  单个商品分组类型
                                  <div class="h5-wxgoods-card">
                                      <div class="h5-wxgoods">
                                          <span class="h5-wxgoods-biao">新品</span>
                                      </div>
                                      <div style="padding:10px">
                                          <h3 class="h5-wxgoods-fu">家政服务</h3>
                                          <div class="h5-wxgoods-price">
                                              <span>￥</span>
                                              <span>100.00</span>
                                          </div>
                                          <div class="h5-wxgoods-gobuy"> 
                                            <span class="h5-wxgoods-people"> xx人付款</span>
                                            <div class="h5-wxgoods-gointo"><i  class="iconfont icon-shopcar"></i></div>
                                          </div>
                                      </div>
                                  </div>
                                -->
                          
                                    <div class="h5-wxgoods-card" v-if="fzgoodsliststyle" :style="fzshopborderstylecss">
                                        <div> 
                                          <div class="h5-wxgoods">
                                              <span class="h5-wxgoods-biao"  v-if="fzshowcontent4">新品</span>
                                          </div>
                                        </div>
                                          <div class="h5-wxgoods-car_bottom">
                                            <h3 class="h5-wxgoods-fu" v-if="fzshowcontent">家政服务</h3>
                                            <div class="h5-wxgoods-price" v-if="fzshowcontent3">
                                                <span>￥</span>
                                                <span>100.00</span>
                                                <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px"  v-if="fzshowcontent6">199.00</span>  
                                            </div>
                                            <div class="h5-wxgoods-gobuy"> 
                                              <span class="h5-wxgoods-people"> xx人付款</span>
                                              <div class="h5-wxgoods-gointo" v-if="fzmihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                                            </div>                              
                                        </div>
                                    </div>

                                    <div class="h5-wxgoods-card_two" v-if="fzgoodslistisstyleone" :style="fzshopborderstylecss">
                                      <div> 
                                        <div class="h5-wxgoods_two" :style="fzh5wxgoodsoneyang">
                                            <span class="h5-wxgoods-biao" v-if="fzshowcontent4">新品</span>
                                        </div>
                                      </div>
                                        <div style="padding:10px">
                                          <h3 class="h5-wxgoods-fu" v-if="fzshowcontent">家政服务</h3>
                                          <div class="h5-wxgoods-price"  v-if="fzshowcontent3">
                                              <span>￥</span>
                                              <span>100.00</span>
                                              <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px" v-if="fzshowcontent6">199.00</span>  
                                          </div>
                                          <div class="h5-wxgoods-gobuy"> 
                                            <span class="h5-wxgoods-people"> xx人付款</span>
                                            <div class="h5-wxgoods-gointo" v-if="fzmihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                                          </div>
                                      </div>
                                    </div>

                                    <div class="h5-wxgoods-card_two" v-if="fzgoodslistisstyletwo" :style="fzshopborderstylecss">
                                      <div> 
                                        <div class="h5-wxgoods_three">
                                            <span class="h5-wxgoods-biao" v-if="showcontent4">新品</span>
                                        </div>
                                        </div>
                                        <div style="padding:10px">
                                          <h3 class="h5-wxgoods-fu" v-if="showcontent">家政服务</h3>
                                          <div class="h5-wxgoods-price"  v-if="showcontent3">
                                              <span>￥</span>
                                              <span>100.00</span>
                                              <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px" v-if="showcontent6">199.00</span>  
                                          </div>
                                          <div class="h5-wxgoods-gobuy"> 
                                            <span class="h5-wxgoods-people"> xx人付款</span>
                                            <div class="h5-wxgoods-gointo" v-if="mihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                                          </div>
                                      </div>
                                    </div>

                                    <div class="h5-wxgoods-card-four" v-if="fzgoodslistisstylethere" :style="fzshopborderstylecss">
                                        <div class="mihuan-liubaifour"> 
                                          <div class="h5-wxgoods-four">
                                              <span class="h5-wxgoods-biao" v-if="showcontent4">新品</span>
                                          </div>
                                          </div>
                                          <div style="padding:10px;width:50%">
                                            <h3 class="h5-wxgoods-fu" style="margin-bottom:10px" v-if="showcontent">家政服务</h3>
                                            <div class="h5-wxgoods-price"  v-if="showcontent3">
                                                <span>￥</span>
                                                <span>100.00</span>    
                                                <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px" v-if="showcontent6">199.00</span>         
                                            </div>
                                          
                                            <div class="h5-wxgoods-gobuy"> 
                                              <span class="h5-wxgoods-people"> xx人付款</span>
                                              <div class="h5-wxgoods-gointo" v-if="mihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                                        </div>
                            </div>
                          </div>
                          <!-- mei样式over -->


                          </el-tab-pane>
                          <el-tab-pane label="分组2" name="second" :style="fzshopstylecss">
                              
                                <div class="h5-wxgoods-card" v-if="fzgoodsliststyle" :style="fzshopborderstylecss">
                                    <div> 
                                      <div class="h5-wxgoods">
                                          <span class="h5-wxgoods-biao"  v-if="fzshowcontent4">新品</span>
                                      </div>
                                    </div>
                                      <div class="h5-wxgoods-car_bottom">
                                        <h3 class="h5-wxgoods-fu" v-if="fzshowcontent">家政服务</h3>
                                        <div class="h5-wxgoods-price" v-if="fzshowcontent3">
                                            <span>￥</span>
                                            <span>100.00</span>
                                            <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px"  v-if="fzshowcontent6">199.00</span>  
                                        </div>
                                        <div class="h5-wxgoods-gobuy"> 
                                          <span class="h5-wxgoods-people"> xx人付款</span>
                                          <div class="h5-wxgoods-gointo" v-if="fzmihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                                        </div>                              
                                    </div>
                                </div>

                                <div class="h5-wxgoods-card_two" v-if="fzgoodslistisstyleone" :style="fzshopborderstylecss">
                                  <div> 
                                    <div class="h5-wxgoods_two" :style="fzh5wxgoodsoneyang">
                                        <span class="h5-wxgoods-biao" v-if="fzshowcontent4">新品</span>
                                    </div>
                                  </div>
                                    <div style="padding:10px">
                                      <h3 class="h5-wxgoods-fu" v-if="fzshowcontent">家政服务</h3>
                                      <div class="h5-wxgoods-price"  v-if="fzshowcontent3">
                                          <span>￥</span>
                                          <span>100.00</span>
                                          <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px" v-if="fzshowcontent6">199.00</span>  
                                      </div>
                                      <div class="h5-wxgoods-gobuy"> 
                                        <span class="h5-wxgoods-people"> xx人付款</span>
                                        <div class="h5-wxgoods-gointo" v-if="fzmihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                                      </div>
                                  </div>
                                </div>

                                <div class="h5-wxgoods-card_two" v-if="fzgoodslistisstyletwo" :style="fzshopborderstylecss">
                                  <div> 
                                    <div class="h5-wxgoods_three">
                                        <span class="h5-wxgoods-biao" v-if="showcontent4">新品</span>
                                    </div>
                                    </div>
                                    <div style="padding:10px">
                                      <h3 class="h5-wxgoods-fu" v-if="showcontent">家政服务</h3>
                                      <div class="h5-wxgoods-price"  v-if="showcontent3">
                                          <span>￥</span>
                                          <span>100.00</span>
                                          <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px" v-if="showcontent6">199.00</span>  
                                      </div>
                                      <div class="h5-wxgoods-gobuy"> 
                                        <span class="h5-wxgoods-people"> xx人付款</span>
                                        <div class="h5-wxgoods-gointo" v-if="mihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                                      </div>
                                  </div>
                                </div>

                                <div class="h5-wxgoods-card-four" v-if="fzgoodslistisstylethere" :style="fzshopborderstylecss">
                                    <div class="mihuan-liubaifour"> 
                                      <div class="h5-wxgoods-four">
                                          <span class="h5-wxgoods-biao" v-if="showcontent4">新品</span>
                                      </div>
                                      </div>
                                      <div style="padding:10px;width:50%">
                                        <h3 class="h5-wxgoods-fu" style="margin-bottom:10px" v-if="showcontent">家政服务</h3>
                                        <div class="h5-wxgoods-price"  v-if="showcontent3">
                                            <span>￥</span>
                                            <span>100.00</span>    
                                            <span style="text-decoration:line-through;color: #bbbdc0;font-size:12px;margin-left:12px" v-if="showcontent6">199.00</span>         
                                        </div>
                                      
                                        <div class="h5-wxgoods-gobuy"> 
                                          <span class="h5-wxgoods-people"> xx人付款</span>
                                          <div class="h5-wxgoods-gointo" v-if="mihuanjianvalue"><i  class="iconfont icon-shopcar"></i></div>
                                      </div>
                                </div>
                          </div>
                          </el-tab-pane>      
                          </el-tabs>
                          </div>
                      </div>  
                      

                     <!-- <div class="h5-wx-shopgrounp-div adver" v-for="(item,index) of wxArrdata[index].content.goodsgrounp" :key="index">   -->
                        <div class="mh-zujiangoodshop" v-if="isgoodsstatestwo"> 
                           <el-tabs :tab-position="tabPosition" style="height: 200px;">
                            <el-tab-pane label="商品分组1">
                              <div class="h5-wxgoods-card" style="display:flex;width:100%;border-radius: 10px;margin-bottom:12px">
                                  <div class="h5-wxgoods" style="width:85px;height:85px;border-radius: 10px;">
                                      <span class="h5-wxgoods-biao">新品</span>
                                  </div>
                                  <div style="padding:10px;width:100%;flex: 1;">
                                      <h3 class="h5-wxgoods-fu">标题</h3>
                                      <div class="h5-wxgoods-price">
                                          <span>￥</span>
                                          <span>xx.xx</span>
                                      </div>
                                      <div class="h5-wxgoods-gobuy"> 
                                        <span class="h5-wxgoods-people"> xx人付款</span>
                                        <div class="h5-wxgoods-gointo"><i  class="iconfont icon-shopcar"></i></div>
                                      </div>
                                  </div>
                               </div>

                                <div class="h5-wxgoods-card" style="display:flex;width:100%;border-radius: 10px;margin-bottom:12px">
                                  <div class="h5-wxgoods" style="width:85px;height:85px;border-radius: 10px;">
                                      <span class="h5-wxgoods-biao">新品</span>
                                  </div>
                                  <div style="padding:10px;width:100%;flex: 1;">
                                      <h3 class="h5-wxgoods-fu">标题</h3>
                                      <div class="h5-wxgoods-price">
                                          <span>￥</span>
                                          <span>xx.xx</span>
                                      </div>
                                      <div class="h5-wxgoods-gobuy"> 
                                        <span class="h5-wxgoods-people"> xx人付款</span>
                                        <div class="h5-wxgoods-gointo"><i  class="iconfont icon-shopcar"></i></div>
                                      </div>
                                  </div>
                               </div>   

                            </el-tab-pane>
                            <el-tab-pane label="商品分组2">
                               <div class="h5-wxgoods-card" style="display:flex;width:100%;border-radius: 10px;margin-bottom:12px">
                                  <div class="h5-wxgoods" style="width:85px;height:85px;border-radius: 10px;">
                                      <span class="h5-wxgoods-biao">新品</span>
                                  </div>
                                  <div style="padding:10px;width:100%;flex: 1;">
                                      <h3 class="h5-wxgoods-fu">标题</h3>
                                      <div class="h5-wxgoods-price">
                                          <span>￥</span>
                                          <span>xx.xx</span>
                                      </div>
                                      <div class="h5-wxgoods-gobuy"> 
                                        <span class="h5-wxgoods-people"> xx人付款</span>
                                        <div class="h5-wxgoods-gointo"><i  class="iconfont icon-shopcar"></i></div>
                                      </div>
                                  </div>
                               </div>   
                            </el-tab-pane>
                          
                          </el-tabs>
                        </div>
                      <!-- </div>   -->
                    <!-- 商品分组结束 -->

                     <!-- 图文导航 -->
                      <!-- <div class="wx-divlogoimg" v-if="wxArrdata[index].componentId == 6" >
                        <img src="http://img.wkdao.com/image/system/2019/06/10/0ec305bb038204041315cea04689f236.png" alt class="wx-logoimg" />
                      </div> -->

                    
                    



                </li>
              </ul>
                <!--轮播图插件结束-->

                <!--图文导航-->
                    <!--  
                        <dt><img src="http://img.wkdao.com/image/system/2019/06/10/f2bab52a7944e3a6b53307b195c9d1b1.png" alt=""></dt>

                          <dd><span>每周优惠</span></dd>
                      </dl>
                      <dl>
                          <dt><img src="http://img.wkdao.com/image/system/2019/06/10/a8c18a859ba7b3594122589d77255292.png" alt=""></dt>
                          <dd><span>企业采购</span></dd>
                      </dl>
                      <dl>
                          <dt><img src="http://img.wkdao.com/image/system/2019/06/10/2b49751ce9f0e355ac05378845a068a4.png" alt=""></dt>
                          <dd><span>拼团入口</span></dd>
                      </dl>
                      <dl>
                          <dt><img src="http://img.wkdao.com/image/system/2019/06/10/201c6ee6c3b7521f2ae135fe4da6a788.png" alt=""></dt>
                          <dd><span>花艺养护</span></dd>
                      </dl>
                      <dl>
                          <dt><img src="http://img.wkdao.com/image/system/2019/06/10/151ab36ad6c29997ee8e595dd7e767e8.png" alt=""></dt>
                          <dd><span>花财在线</span></dd>
                      </dl>
                      <dl>
                          <dt><img src="http://img.wkdao.com/image/system/2019/06/10/a2b3c1f571d4ecfe649bdff506e2758a.png" alt=""></dt>
                          <dd><span>花瓶预定</span></dd>
                      </dl>
                      <dl>
                          <dt><img src="http://img.wkdao.com/image/system/2019/06/10/3a89712a4ef4ce95f6c6bdbcf35e6833.png" alt=""></dt>
                          <dd><span>更多内容</span></dd>
                    </dl>--> 
                 

                <!--图片-->

              </div>

              <!--轮播图css操作 -->
              <div class="wx-edit-right" v-show="mihuanswiper_isshow">
                <div class="wx-edit">
                  <div class="wx-edit-hd">轮播图</div>
                </div>
                <!-- 选择模板 -->
                <div class="wx-mu-style-mudle">
                  <div class="wx-mu-style shuixng-title">选择模板：</div>
                  <div class="wx-mu-style-img">
                    <div class="bgactive">
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACACAYAAACiJkOJAAAABGdBTUEAALGPC/xhBQAAA8NJREFUeAHt2dFqE1EUheGJhCoSbxV8/2cT661Ba6nGTpmB3dKYozSQvfzOzewkp4esf/2EYbo53K/JQiCEwKuQHGIg8ECA0ESIIkDoqDqFITQHoggQOqpOYQjNgSgChI6qUxhCcyCKAKGj6hSG0ByIIkDoqDqFITQHoggQOqpOYbbXN79QQCCGgF/omCoFmQkQmgdRBAgdVacwhOZAFAFCR9UpDKE5EEWA0FF1CkNoDkQRIHRUncIQmgNRBAgdVacwhOZAFAFCR9UpDKE5EEWA0FF1CkNoDkQRIHRUncIQmgNRBAgdVacwhOZAFAFCR9UpDKE5EEWA0FF1CkNoDkQRIHRUncIQmgNRBAgdVacwhOZAFAFCR9UpDKE5EEWA0FF1CkNoDkQRIHRUncIQmgNRBAgdVacwhOZAFAFCR9UpDKE5EEWA0FF1CkNoDkQRIHRUncIQmgNRBAgdVacwWwgeE9jf3k1f9rfTt7u7hw/ebrfT+93VtLv6N1SXft7j9P1fbT5//3noH+NlElzvb6ZPX388e9jHd6+nD7s3z3527M1LP+/Y9+78vluOpb35l/SYzPOW+bN5z+i69PNGc3TbR+ilsfk249Qa2bOeMbJ3ZM+5zlvPTbsSeml0vWf+U8Eje9a/H9k7sudc563npl0Jndbof56H0IsA89OMU2tkz3rGyN6RPec6bz037UropdH50dypNbJnPWNk78iec523npt2JfTS6PyceX40d2zNn/3Ns+hLP+9Yzu7vew79pMFL/0fIS3+/J/HbvyR0+woFqATcclQa5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BDaH+9U+hQAILAT8QlMhigCho+oUhtAciCJA6Kg6hSE0B6IIEDqqTmEIzYEoAoSOqlMYQnMgigCho+oUhtAciCJA6Kg6hSE0B6II/AbOTKdomnaJGQAAAABJRU5ErkJggg==" alt />
                      <span>轮播海报</span>
                    </div>
                  </div>
                </div>
                <!-- 轮播图左右留白 -->
               <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">左右留白：</div>
                  <div class="block">
                    <!-- 
                        对象 ->   wxArrdata[1].content.oneswipervalue  ->  作用组件
                     -->
                       <el-slider v-model="third" @input="indexPageswiper" show-input></el-slider>
                  </div>
                </div>

                <!-- <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">图片间隔：</div>
                    <div class="block">
                        <el-slider
                        v-model="value"
                        show-input>
                        </el-slider>
                    </div>
                    </div> -->

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">指示显示：</div>
                  <div class="block">
                    <el-radio-group v-model="thirdswiperadio" @change="swiperindicate">
                      <el-radio :label="1">图片内</el-radio>
                      <el-radio :label="2">图片外</el-radio>
                      <el-radio :label="3">不显示</el-radio>
                    </el-radio-group>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">显示方向：</div>
                  <div class="block">
                    <el-radio-group v-model="swipedirection" @change="swiperdirectionevt">
                      <el-radio :label="1">横向</el-radio>
                      <el-radio :label="2">纵向</el-radio>
                    </el-radio-group>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">背景色：</div>
                  <div class="block">
                    <el-color-picker v-model="swiper_colorone" @change="swipercolorevent"></el-color-picker>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-img-edit">
                    <div class="wx-img-edit-div">
                      <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                      >
                        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                      </el-upload>
                      <div class="wx-img-editfunc-bar">更换图片</div>
                      <!-- <img src="http://img.alicdn.com/imgextra/i2/3001331267/O1CN01UPpRzX1LEKJL9m6FK_!!3001331267.jpg" alt="图片" draggable="false" class="wx-img-editimg"> -->
                    </div>
                    <div class="wx-imgedit-card">
                      <div class="wx-imgedit-card-title">
                        <span>标题 :</span>
                        <el-input v-model="input" placeholder="请输入标题"></el-input>
                      </div>
                      <div class="wx-imgedit-card-link">
                        <span>链接 :</span>
                        <el-select  v-model="value2" collapse-tags  style="margin-left: 20px;"  placeholder="请选择">
                            <el-option
                              v-for="item in mhswiperoptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            ></el-option>
                        </el-select>
                      </div>
                      <p style="color: rgb(153, 153, 153);font-size: 12px;padding-left: 65px"  >小程序不支持自定义链接</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--图片广告over-->

              <!--轮播图over -->

              <!--魔方-->
              <div class="wx-edit-right" v-show="mihuancube_isshow">
                <div class="wx-edit">
                  <div class="wx-edit-hd">魔方</div>
                  <!--<div class="wx-edit-mu">-->
                  <!--<div class="wx-mu-name">模块名称：</div>-->
                  <!--<el-input v-model="input" placeholder="魔方导航模块"></el-input>-->
                  <!--<el-checkbox label="隐藏" name="type"></el-checkbox>-->
                  <!--</div>-->

                  <!--<div class="wx-edit-mu ">-->
                  <!--<div class="wx-mu-name">副标题：</div>-->
                  <!--<el-input v-model="input" placeholder="副标题"></el-input>-->
                  <!--<el-checkbox label="隐藏" name="type"></el-checkbox>-->
                  <!--</div>-->

                  <div class="wx-mu-style-mudle">
                    <div class="wx-mu-style shuixng-title">模板样式：</div>
                    <div class="wx-mu-style-img">
                      <div @click="cuberowone">
                        <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACACAYAAACiJkOJAAAABGdBTUEAALGPC/xhBQAAA0xJREFUeAHt0qsRQkEUREFAkQH5ZwcRgOGjn+eM6nVr5lZ1nfP9+f6evEzgdr0cth+vz+Hv81+Bo/Z/t60RmAsIek7uYCkg6FLX9lxA0HNyB0sBQZe6tucCgp6TO1gKCLrUtT0XEPSc3MFSQNClru25gKDn5A6WAoIudW3PBQQ9J3ewFBB0qWt7LiDoObmDpYCgS13bcwFBz8kdLAUEXerangsIek7uYCkg6FLX9lxA0HNyB0sBQZe6tucCgp6TO1gKCLrUtT0XEPSc3MFSQNClru25gKDn5A6WAoIudW3PBQQ9J3ewFBB0qWt7LiDoObmDpYCgS13bcwFBz8kdLAUEXerangsIek7uYCkg6FLX9lxA0HNyB0sBQZe6tucCgp6TO1gKCLrUtT0XEPSc3MFSQNClru25gKDn5A6WAoIudW3PBQQ9J3ewFBB0qWt7LiDoObmDpYCgS13bcwFBz8kdLAUEXerangsIek7uYCkg6FLX9lxA0HNyB0sBQZe6tucCgp6TO1gKCLrUtT0XEPSc3MFSQNClru25gKDn5A6WAoIudW3PBQQ9J3ewFBB0qWt7LiDoObmDpYCgS13bcwFBz8kdLAUEXerangsIek7uYCkg6FLX9lxA0HNyB0sBQZe6tucCgp6TO1gKCLrUtT0XEPSc3MFSQNClru25gKDn5A6WAoIudW3PBQQ9J3ewFBB0qWt7LiDoObmDpYCgS13bcwFBz8kdLAUEXerangsIek7uYCkg6FLX9lxA0HNyB0sBQZe6tucCgp6TO1gKCLrUtT0XEPSc3MFSQNClru25gKDn5A6WAoIudW3PBQQ9J3ewFBB0qWt7LiDoObmDpYCgS13bcwFBz8kdLAUEXerangsIek7uYCkg6FLX9lxA0HNyB0sBQZe6tucCgp6TO1gKCLrUtT0XEPSc3MFSQNClru25gKDn5A6WAoIudW3PBQQ9J3ewFBB0qWt7LiDoObmDpYCgS13bcwFBz8kdLAUEXerangsIek7uYCkg6FLX9lxA0HNyB0sBQZe6tucCgp6TO1gKCLrUtT0XEPSc3MFSQNClru25gKDn5A6WAoIudW3PBQQ9J3ewFBB0qWt7LiDoObmDpYCgS13bc4EfS34H2ziOQdkAAAAASUVORK5CYII="  alt />
                        <span>两行8个</span>
                      </div>
                      <div @click="cuberowtwo">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACACAYAAACiJkOJAAAABGdBTUEAALGPC/xhBQAAA1xJREFUeAHt0rFxAzEAA0FZkTtQ/91JFdiJZUcf/AwaOP8y4RAReLiP59fP7+0C5/F5P/3y9f0+vf/b42r/PfY7r3ykbgSiBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNErgD7apCts/2gFdAAAAAElFTkSuQmCC" alt  />
                        <span>一行2个</span>
                      </div>
                      <!-- <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACACAYAAACiJkOJAAAABGdBTUEAALGPC/xhBQAAA1NJREFUeAHt0jtywgAUBEHjiBtw/9uZE0DCJ1Y+xZqqVqbkrao1p7/b4/XzBc/l/Hv4yuv9eXj/ry+++7N/5ljJZ7etEcgFBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927nAGyHjDdtTmOW5AAAAAElFTkSuQmCC" alt="">
                            <span>一行两4个</span>
                        </div>
                        <div>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACACAYAAACiJkOJAAAABGdBTUEAALGPC/xhBQAAA2FJREFUeAHt1LFxwgAUREHjcUAH9F8eHRCBSZXzTgSrjOSfZnmjy+v9/Aye++M5WPm+idv19/BSHA4cH/9x1P74eQcJbAUEvfW2FgsIOgZ2fisg6K23tVhA0DGw81sBQW+9rcUCgo6Bnd8KCHrrbS0WEHQM7PxWQNBbb2uxgKBjYOe3AoLeeluLBQQdAzu/FRD01ttaLCDoGNj5rYCgt97WYgFBx8DObwUEvfW2FgsIOgZ2fisg6K23tVhA0DGw81sBQW+9rcUCgo6Bnd8KCHrrbS0WEHQM7PxWQNBbb2uxgKBjYOe3AoLeeluLBQQdAzu/FRD01ttaLCDoGNj5rYCgt97WYgFBx8DObwUEvfW2FgsIOgZ2fisg6K23tVhA0DGw81sBQW+9rcUCgo6Bnd8KCHrrbS0WEHQM7PxWQNBbb2uxgKBjYOe3AoLeeluLBQQdAzu/FRD01ttaLCDoGNj5rYCgt97WYgFBx8DObwUEvfW2FgsIOgZ2fisg6K23tVhA0DGw81sBQW+9rcUCgo6Bnd8KCHrrbS0WEHQM7PxWQNBbb2uxgKBjYOe3AoLeeluLBQQdAzu/Fbi83s920hqBTsAXurN1+QQBQZ+AbrITEHRn6/IJAn+rzfvjuZr6qp3b9fjN4ND+PUftdst1ArmAoHNiA0sBQS+1beUCgs6JDSwFBL3UtpULCDonNrAUEPRS21YuIOic2MBSQNBLbVu5gKBzYgNLAUEvtW3lAoLOiQ0sBQS91LaVCwg6JzawFBD0UttWLiDonNjAUkDQS21buYCgc2IDSwFBL7Vt5QKCzokNLAUEvdS2lQsIOic2sBQQ9FLbVi4g6JzYwFJA0EttW7mAoHNiA0sBQS+1beUCgs6JDSwFBL3UtpULCDonNrAUEPRS21YuIOic2MBSQNBLbVu5gKBzYgNLAUEvtW3lAoLOiQ0sBQS91LaVCwg6JzawFBD0UttWLiDonNjAUkDQS21buYCgc2IDSwFBL7Vt5QKCzokNLAUEvdS2lQsIOic2sBQQ9FLbVi4g6JzYwFJA0EttW7mAoHNiA0sBQS+1beUCgs6JDSwFBL3UtpULCDonNrAUEPRS21YuIOic2MBSQNBLbVu5gKBzYgNLAUEvtW3lAoLOiQ0sBQS91LaVC/wDiD8U+X3KfJsAAAAASUVORK5CYII=" alt="">
                            <span>2左两右</span>
                      </div>-->
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">左右留白：</div>
                    <div class="block">
                      <el-slider v-model="cubewhitespacearound" @input="cubeinputvalue" show-input></el-slider>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">图片间隔：</div>
                    <div class="block">
                      <el-slider v-model="cubeimgspacearound" @input="cubeimgvevt" show-input></el-slider>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">布局方式：</div>
                    <div class="block">
                      <el-radio v-model="radio" label="3">固定大小</el-radio>
                      <el-radio v-model="radio" label="4">根据图片自适应</el-radio>
                    </div>
                  </div>
                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">背景颜色：</div>
                    <div class="block">
                      <el-color-picker v-model="cubecolor" @change="cubecolorevt"></el-color-picker>
                    </div>
                  </div>

                  <!--图片布局-->
                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">图片布局：</div>
                    <div class="block lyoutbuju">
                      <div class="lyout1 lyoutactive">375*375像素或同等比例</div>
                      <div class="lyout1">375*375像素或同等比例</div>
                    </div>
                  </div>
                  <!--图片布局over-->

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">链接：</div>
                    <div class="block lyoutbuju">
                      <div class="wx-mu-link">
                        <el-upload
                          class="avatar-uploader"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload"
                        >
                          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                        <el-cascader
                          v-model="value"
                          :options="options"
                          :props="{ expandTrigger: 'hover' }"
                          @change="handleChange"
                        ></el-cascader>
                        <p class="wx-mu-link-p">小程序不支持自定义链接</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!--魔方over-->

              <!-- 文本 -->
              <div class="wx-edit-right" v-show="mihuanword_isshow">
                <div class="wx-edit">
                  <div class="wx-edit-hd">文本</div>
                </div>

                <el-form ref="form" :model="form">
                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">文本：</div>
                    <div class="block">
                      <el-input type="textarea" v-model="textzi1" @input="gettext"></el-input>
                    </div>
                  </div>

                  <!--字体大小-->
                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">字体大小：</div>
                    <div class="block">
                      <el-radio v-model="textbing" label="1" @change="textbingchange">大</el-radio>
                      <el-radio v-model="textbing" label="2" @change="textbingchange">中</el-radio>
                      <el-radio v-model="textbing" label="3" @change="textbingchange">小</el-radio>
                    </div>
                  </div>
                  <!--字体大小over-->

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">字体颜色：</div>
                    <div class="block">
                      <el-color-picker v-model="textcolor" @change="textcolorevt"></el-color-picker>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">背景颜色：</div>
                    <div class="block">
                      <el-color-picker v-model="textbgcolor" @change="textbgcolorevt"></el-color-picker>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">样式：</div>
                    <div class="block">
                      <el-radio v-model="textstyle" label="1">无</el-radio>
                      <el-radio v-model="textstyle" label="2">样式一</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">显示位置：</div>
                    <div class="block">
                      <el-radio v-model="textinto" label="1"  @change="textleftintochange">居左</el-radio>
                      <el-radio v-model="textinto" label="2"  @change="textzhongintochange">居中</el-radio>
                      <el-radio v-model="textinto" label="3"  @change="textrightintochange">居右</el-radio>
                    </div>
                  </div>


                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">链接：</div>
                    <div class="block">
                      <div style="padding-top: 16px;margin-bottom: 6px">
                        <el-select v-model="value" placeholder="请选择">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                      <p class="wx-mu-link-p" style="text-align: left">小程序不支持自定义链接</p>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">更多设置：</div>
                    <div class="block">
                      <el-checkbox v-model="textchecked">显示底部分割线</el-checkbox>
                    </div>
                  </div>
                </el-form>
              </div>
              <!--文字over-->
              <!--标题-->
              <div class="wx-edit-right" v-show="mihuantitle_isshow">
                <div class="wx-edit">
                  <div class="wx-edit-hd">标题</div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">标题：</div>
                    <div class="block">
                      <el-input v-model="wxtitle"  @input="gettitle" placeholder="点击编辑标题"></el-input>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">标题：</div>
                    <div class="block">
                      <el-radio v-model="titleradio" label="1">传统样式</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">显示位置：</div>
                    <div class="block">
                      <el-radio v-model="titlelocation" label="1" @change="titleloacleft">居左</el-radio>
                      <el-radio v-model="titlelocation" label="2" @change="titleloacenter">居中</el-radio>
                      <el-radio v-model="titlelocation" label="3" @change="titleloacright">居有</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">副标题：</div>
                    <div class="block">
                      <el-input v-model="subheading" placeholder="点击编辑副标题" @input="subheadingmethod"></el-input>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">背景颜色：</div>
                    <div class="block">
                      <el-color-picker v-model="titlecolor" @change="titlechange"></el-color-picker>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style" style="height: 38px;">文本导航：</div>
                    <div class="block">
                      <div style="margin-bottom: 6px">
                        <el-select v-model="value" placeholder="请选择">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                      <p class="wx-mu-link-p" style="text-align: left">小程序不支持自定义链接</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--标题 over-->

              <!--富文本组件-->
              <div class="wx-edit-right" v-show="mihuanedit_isshow">
                <div class="wx-edit">
                  <div class="wx-edit-hd">富文本</div>
                  <div class="wx-editben-div">
                    <div class="wx-e-done">
                      <span>背景颜色</span>
                      <el-color-picker v-model="color1"></el-color-picker>
                    </div>
                    <div class="wx-e-dtwo">
                      <el-checkbox v-model="checked">是否全屏</el-checkbox>
                    </div>
                  </div>
                  <!-- <div type="text/plain" id="myEditor" style="width:100%;height:500px"></div> -->
                </div>
              </div>
              <!--富文本组件over-->

              <!--图片广告-->
              <div class="wx-edit-right" v-show="mihuanadvertising_isshow">
                <div class="wx-edit">
                  <div class="wx-edit-hd">图文广告</div>
                </div>

                <div class="wx-mu-style-mudle">
                  <div class="wx-mu-style shuixng-title">选择模板：</div>
                  <div class="wx-mu-style-img">
                    <!-- <div class="bgactive">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACACAYAAACiJkOJAAAABGdBTUEAALGPC/xhBQAAA8NJREFUeAHt2dFqE1EUheGJhCoSbxV8/2cT661Ba6nGTpmB3dKYozSQvfzOzewkp4esf/2EYbo53K/JQiCEwKuQHGIg8ECA0ESIIkDoqDqFITQHoggQOqpOYQjNgSgChI6qUxhCcyCKAKGj6hSG0ByIIkDoqDqFITQHoggQOqpOYbbXN79QQCCGgF/omCoFmQkQmgdRBAgdVacwhOZAFAFCR9UpDKE5EEWA0FF1CkNoDkQRIHRUncIQmgNRBAgdVacwhOZAFAFCR9UpDKE5EEWA0FF1CkNoDkQRIHRUncIQmgNRBAgdVacwhOZAFAFCR9UpDKE5EEWA0FF1CkNoDkQRIHRUncIQmgNRBAgdVacwhOZAFAFCR9UpDKE5EEWA0FF1CkNoDkQRIHRUncIQmgNRBAgdVacwhOZAFAFCR9UpDKE5EEWA0FF1CkNoDkQRIHRUncIQmgNRBAgdVacwWwgeE9jf3k1f9rfTt7u7hw/ebrfT+93VtLv6N1SXft7j9P1fbT5//3noH+NlElzvb6ZPX388e9jHd6+nD7s3z3527M1LP+/Y9+78vluOpb35l/SYzPOW+bN5z+i69PNGc3TbR+ilsfk249Qa2bOeMbJ3ZM+5zlvPTbsSeml0vWf+U8Eje9a/H9k7sudc563npl0Jndbof56H0IsA89OMU2tkz3rGyN6RPec6bz037UropdH50dypNbJnPWNk78iec523npt2JfTS6PyceX40d2zNn/3Ns+hLP+9Yzu7vew79pMFL/0fIS3+/J/HbvyR0+woFqATcclQa5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BAjdvkIBKgFCVxrm9gQI3b5CASoBQlca5vYECN2+QgEqAUJXGub2BDaH+9U+hQAILAT8QlMhigCho+oUhtAciCJA6Kg6hSE0B6IIEDqqTmEIzYEoAoSOqlMYQnMgigCho+oUhtAciCJA6Kg6hSE0B6II/AbOTKdomnaJGQAAAABJRU5ErkJggg==" alt="">
                                        <span>轮播海报</span>
                    </div>-->
                    <div>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACACAYAAACiJkOJAAAABGdBTUEAALGPC/xhBQAAAoBJREFUeAHt1FsNgDAUBUFK8K8TFMAPbxmbqYOzd9Kx7uc9eQpECsyRHWYo8BcAGoRUAaBT5zQGaAZSBYBOndMYoBlIFQA6dU5jgGYgVQDo1DmNAZqBVAGgU+c0BmgGUgWATp3TGKAZSBUAOnVOY4BmIFUA6NQ5jQGagVQBoFPnNAZoBlIFgE6d0xigGUgVADp1TmOAZiBVAOjUOY0BmoFUAaBT5zQGaAZSBYBOndMYoBlIFQA6dU5jgGYgVQDo1DmNAZqBVAGgU+c0BmgGUgWATp3TGKAZSBUAOnVOY4BmIFUA6NQ5jQGagVQBoFPnNAZoBlIFgE6d0xigGUgVADp1TmOAZiBVAOjUOY0BmoFUAaBT5zQGaAZSBYBOndMYoBlIFQA6dU5jgGYgVQDo1DmNAZqBVAGgU+c0BmgGUgWATp3TmHG/TwYFKgX80JVL2vEXABqEVAGgU+c0ZtmOSwUFMgX80JlTGvIVAJqDVAGgU+c0BmgGUgWATp3TGKAZSBUAOnVOY4BmIFUA6NQ5jQGagVQBoFPnNAZoBlIFgE6d0xigGUgVADp1TmOAZiBVAOjUOY0BmoFUAaBT5zQGaAZSBYBOndMYoBlIFQA6dU5jgGYgVQDo1DmNAZqBVAGgU+c0BmgGUgWATp3TGKAZSBUAOnVOY4BmIFUA6NQ5jQGagVQBoFPnNAZoBlIFgE6d0xigGUgVADp1TmOAZiBVAOjUOY0BmoFUAaBT5zQGaAZSBYBOndMYoBlIFQA6dU5jgGYgVQDo1DmNAZqBVAGgU+c0BmgGUgWATp3TGKAZSBUAOnVOY4BmIFUA6NQ5jQGagVQBoFPnNAZoBlIFgE6d05gHtMQLt6uH56cAAAAASUVORK5CYII="
                        alt
                      />
                      <span>一行一个</span>
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACACAYAAACiJkOJAAAABGdBTUEAALGPC/xhBQAAA1xJREFUeAHt0rFxAzEAA0FZkTtQ/91JFdiJZUcf/AwaOP8y4RAReLiP59fP7+0C5/F5P/3y9f0+vf/b42r/PfY7r3ykbgSiBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNEqA0NHh1N4ECL25SKMECB0dTu1NgNCbizRKgNDR4dTeBAi9uUijBAgdHU7tTYDQm4s0SoDQ0eHU3gQIvblIowQIHR1O7U2A0JuLNErgD7apCts/2gFdAAAAAElFTkSuQmCC"
                        alt
                      />
                      <span>一行3个</span>
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACACAYAAACiJkOJAAAABGdBTUEAALGPC/xhBQAAA1NJREFUeAHt0jtywgAUBEHjiBtw/9uZE0DCJ1Y+xZqqVqbkrao1p7/b4/XzBc/l/Hv4yuv9eXj/ry+++7N/5ljJZ7etEcgFBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927mAoHNSB5cCgl7q284FBJ2TOrgUEPRS33YuIOic1MGlgKCX+rZzAUHnpA4uBQS91LedCwg6J3VwKSDopb7tXEDQOamDSwFBL/Vt5wKCzkkdXAoIeqlvOxcQdE7q4FJA0Et927nAGyHjDdtTmOW5AAAAAElFTkSuQmCC"
                        alt
                      />
                      <span>一行两4个</span>
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALQAAACACAYAAACiJkOJAAAABGdBTUEAALGPC/xhBQAAA2FJREFUeAHt1LFxwgAUREHjcUAH9F8eHRCBSZXzTgSrjOSfZnmjy+v9/Aye++M5WPm+idv19/BSHA4cH/9x1P74eQcJbAUEvfW2FgsIOgZ2fisg6K23tVhA0DGw81sBQW+9rcUCgo6Bnd8KCHrrbS0WEHQM7PxWQNBbb2uxgKBjYOe3AoLeeluLBQQdAzu/FRD01ttaLCDoGNj5rYCgt97WYgFBx8DObwUEvfW2FgsIOgZ2fisg6K23tVhA0DGw81sBQW+9rcUCgo6Bnd8KCHrrbS0WEHQM7PxWQNBbb2uxgKBjYOe3AoLeeluLBQQdAzu/FRD01ttaLCDoGNj5rYCgt97WYgFBx8DObwUEvfW2FgsIOgZ2fisg6K23tVhA0DGw81sBQW+9rcUCgo6Bnd8KCHrrbS0WEHQM7PxWQNBbb2uxgKBjYOe3AoLeeluLBQQdAzu/FRD01ttaLCDoGNj5rYCgt97WYgFBx8DObwUEvfW2FgsIOgZ2fisg6K23tVhA0DGw81sBQW+9rcUCgo6Bnd8KCHrrbS0WEHQM7PxWQNBbb2uxgKBjYOe3AoLeeluLBQQdAzu/Fbi83s920hqBTsAXurN1+QQBQZ+AbrITEHRn6/IJAn+rzfvjuZr6qp3b9fjN4ND+PUftdst1ArmAoHNiA0sBQS+1beUCgs6JDSwFBL3UtpULCDonNrAUEPRS21YuIOic2MBSQNBLbVu5gKBzYgNLAUEvtW3lAoLOiQ0sBQS91LaVCwg6JzawFBD0UttWLiDonNjAUkDQS21buYCgc2IDSwFBL7Vt5QKCzokNLAUEvdS2lQsIOic2sBQQ9FLbVi4g6JzYwFJA0EttW7mAoHNiA0sBQS+1beUCgs6JDSwFBL3UtpULCDonNrAUEPRS21YuIOic2MBSQNBLbVu5gKBzYgNLAUEvtW3lAoLOiQ0sBQS91LaVCwg6JzawFBD0UttWLiDonNjAUkDQS21buYCgc2IDSwFBL7Vt5QKCzokNLAUEvdS2lQsIOic2sBQQ9FLbVi4g6JzYwFJA0EttW7mAoHNiA0sBQS+1beUCgs6JDSwFBL3UtpULCDonNrAUEPRS21YuIOic2MBSQNBLbVu5gKBzYgNLAUEvtW3lAoLOiQ0sBQS91LaVC/wDiD8U+X3KfJsAAAAASUVORK5CYII="
                        alt
                      />
                      <span>2左两右</span>
                    </div>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">左右留白：</div>
                  <div class="block">
                    <el-slider v-model="banerswiper_value" @input="bnanerswiperevent" show-input></el-slider>
                  </div>
                </div>

                <!--<div class="wx-mu-style-mudle shuixng">-->
                <!--<div class="wx-mu-style">图片间隔：</div>-->
                <!--<div class="block">-->
                <!--<el-slider-->
                <!--v-model="value"-->
                <!--show-input>-->
                <!--</el-slider>-->
                <!--</div>-->
                <!--</div>-->

                <!-- 
                            <div class="wx-mu-style-mudle shuixng">
                                <div class="wx-mu-style">指示显示：</div>
                                <div class="block">
                                    <el-radio-group v-model="swiperadio" @change="indicate">
                                        <el-radio :label="1">图片内</el-radio>
                                        <el-radio :label="2">图片外</el-radio>
                                        <el-radio :label="3">不显示</el-radio>
                                    </el-radio-group>
                                </div>
                </div>-->

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">显示方向：</div>
                  <div class="block">
                    <el-radio-group v-model="swipedirection" @change="directionevt">
                      <el-radio :label="1">横向</el-radio>
                      <el-radio :label="2">纵向</el-radio>
                    </el-radio-group>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">背景色：</div>
                  <div class="block">
                    <el-color-picker v-model="tugswiper_color" @change="tugswipercolorevt"></el-color-picker>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-img-edit">
                    <div class="wx-img-edit-div">
                      <img
                        src="http://img.alicdn.com/imgextra/i2/3001331267/O1CN01UPpRzX1LEKJL9m6FK_!!3001331267.jpg"
                        alt="图片"
                        draggable="false"
                        class="wx-img-editimg"
                      />
                      <div class="wx-img-editfunc-bar">更换图片</div>
                    </div>
                    <div class="wx-imgedit-card">
                      <div class="wx-imgedit-card-title">
                        <span>标题 :</span>
                        <el-input v-model="input" placeholder="请输入标题"></el-input>
                      </div>
                      <div class="wx-imgedit-card-link">
                        <span>链接 :</span>
                        <el-select
                          v-model="value2"
                          multiple
                          collapse-tags
                          style="margin-left: 20px;"
                          placeholder="请选择"
                        >
                          <el-option
                            v-for="item in mhswiperoptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                      <p
                        style="color: rgb(153, 153, 153);font-size: 12px;padding-left: 65px"
                      >小程序不支持自定义链接</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--图片广告over-->

              <!--商品组件-->
              <div class="wx-edit-right" v-show="mihuangoods_isshow">
                <div class="wx-edit">
                  <div class="wx-edit-hd">商品</div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">商品来源：</div>
                    <div class="block">
                      <el-radio v-model="goodsradio" label="1" @change="goodssource" >商品</el-radio>
                      <el-radio v-model="goodsradio" label="2" @change="goodssource" >商品分组</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">商品：</div>
                    <div class="block wx-goods">
                      <!--使用照片墙的功能-->
                      <el-upload
                        action="https://jsonplaceholder.typicode.com/posts/"
                        list-type="picture-card"
                        :on-preview="handlePictureCardPreview"
                        :on-remove="handleRemove"
                      >
                        <i class="el-icon-plus"></i>
                      </el-upload>
                      <el-dialog :visible.sync="dialogVisible">
                        <img width="100%" :src="dialogImageUrl" alt />
                      </el-dialog>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">列表样式：</div>
                    <div class="block">
                      <el-radio v-model="goodslistvalue" label="1" @change="goodslistvaluemethod">小图</el-radio>
                      <el-radio v-model="goodslistvalue" label="2" @change="goodslistvaluemethod">大图</el-radio>
                      <el-radio v-model="goodslistvalue" label="3" @change="goodslistvaluemethod">一大一小</el-radio>
                      <el-radio v-model="goodslistvalue" label="4" @change="goodslistvaluemethod">详细列表</el-radio>
                      <!--<el-radio v-model="goodslistvalue" label="2">一行三个</el-radio>-->
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">填充方式：</div>
                    <div class="block">
                      <el-radio v-model="goodsliubaivalue" label="1" @change="goodsliubaimethod">留白</el-radio>
                      <el-radio v-model="goodsliubaivalue" label="2" @change="goodsliubaimethod">填充</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">显示比列：</div>
                    <div class="block">
                      <el-radio v-model="ratiovalue" label="1" @change="showratiovmethod" v-if="bilieishow">3&nbsp;:&nbsp;2</el-radio>
                      <el-radio v-model="ratiovalue" label="2" @change="showratiovmethod">1&nbsp;:&nbsp;1</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">显示样式：</div>
                    <div class="block">
                      <el-radio v-model="jianradio" label="1" @change="stylejianmethod">卡片</el-radio>
                      <el-radio v-model="jianradio" label="2" @change="stylejianmethod">极简</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">显示内容：</div>
                    <div class="block wx-goods-content">
                      <el-checkbox-group v-model="checkList">
                        <el-checkbox checked="true" label="商品名称" @change="mhshowcontent"></el-checkbox>
                        <!-- <el-checkbox checked="true" label="商品简介" @change="mhshowcontent2"></el-checkbox> -->
                        <el-checkbox checked="true" label="商品价格" @change="mhshowcontent3"></el-checkbox>
                        <el-checkbox checked="true" label="商品角标" @change="mhshowcontent4"></el-checkbox>
                        <!-- <el-checkbox checked="true" label="查看更多" @change="mhshowcontent5"></el-checkbox> -->
                        <el-checkbox checked="true" label="商品划线价"  @change="mhshowcontent6" v-show="isshowhuaxian"></el-checkbox>
                      </el-checkbox-group>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">背景颜色：</div>
                    <div class="block">
                      <el-color-picker v-model="goodsbgcolor"  @change="shopbgmethod"></el-color-picker>
                    </div> 
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">边框颜色：</div>
                    <div class="block">
                      <el-color-picker v-model="bordercolor" @change="shopbordercolor"></el-color-picker>
                    </div>
                  </div>
                </div>
              </div>
              <!--商品组件over-->

              <!--商品分组组件-->
              <div class="wx-edit-right" v-show="mihuangroup_isshow">
                <div class="wx-edit">
                  <div class="wx-edit-hd">商品分组</div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">选择模板：</div>
                    <div class="block">
                      <el-radio v-model="goodsmudelradio" label="1" @change="goodgrounpup">顶部菜单</el-radio>
                      <el-radio v-model="goodsmudelradio" label="2" @change="goodgrounpup">订单菜单</el-radio>
                    </div>
                  </div>

                  <!-- <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">头部风格：</div>
                    <div class="block">
                      <el-radio v-model="radio" label="1">传统风</el-radio>
                      <el-radio v-model="radio" label="2">个性风</el-radio>
                    </div>
                  </div> -->

                    <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">头部风格</div>
                    <div class="block">
                      <el-radio v-model="goodsgrounpone" label="1" @change="goodsgrounpcaimethod">样式一</el-radio>
                      <el-radio v-model="goodsgrounpone" label="2" @change="goodsgrounpcaimethod">样式二</el-radio>
                      <el-radio v-model="goodsgrounpone" label="3" @change="goodsgrounpcaimethod">样式三</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">顶部菜单位置：</div>
                    <div class="block">
                      <el-radio v-model="goodsgrounpmenuvalue" label="1" @change="goodsgrounpmenumethod">正常模式</el-radio>
                      <el-radio v-model="goodsgrounpmenuvalue" label="2" @change="goodsgrounpmenumethod">自动置顶设置</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">列表样式：</div>
                    <div class="block">
                      <el-radio v-model="fzgoodslistvalue" label="1" @change="fzgoodslistvaluemethod">小图</el-radio>
                      <el-radio v-model="fzgoodslistvalue" label="2" @change="fzgoodslistvaluemethod">大图</el-radio>
                      <el-radio v-model="fzgoodslistvalue" label="3" @change="fzgoodslistvaluemethod">一大一小</el-radio>
                      <el-radio v-model="fzgoodslistvalue" label="4" @change="fzgoodslistvaluemethod">详细列表</el-radio>
                      <!--<el-radio v-model="goodslistvalue" label="2">一行三个</el-radio>-->
                    </div>
                  </div>

                 

               

                   <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">填充方式：</div>
                    <div class="block">
                      <el-radio v-model="fzgoodsliubaivalue" label="1" @change="fzgoodsliubaimethod">留白</el-radio>
                      <el-radio v-model="fzgoodsliubaivalue" label="2" @change="fzgoodsliubaimethod">填充</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">显示比列：</div>
                    <div class="block">
                      <el-radio v-model="fzratiovalue" label="1" @change="fzshowratiovmethod" v-if="fzbilieishow">3&nbsp;:&nbsp;2</el-radio>
                      <el-radio v-model="fzratiovalue" label="2" @change="fzshowratiovmethod">1&nbsp;:&nbsp;1</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">显示样式：</div>
                    <div class="block">
                      <el-radio v-model="fzjianradio" label="1" @change="fzstylejianmethod">卡片</el-radio>
                      <el-radio v-model="fzjianradio" label="2" @change="fzstylejianmethod">极简</el-radio>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">显示内容：</div>
                    <div class="block wx-goods-content">
                      <el-checkbox-group v-model="fzcheckList">
                        <el-checkbox checked="true" label="商品名称" @change="fzmhshowcontent"></el-checkbox>
                        <!-- <el-checkbox checked="true" label="商品简介" @change="mhshowcontent2"></el-checkbox> -->
                        <el-checkbox checked="true" label="商品价格" @change="fzmhshowcontent3"></el-checkbox>
                        <el-checkbox checked="true" label="商品角标" @change="fzmhshowcontent4"></el-checkbox>
                        <!-- <el-checkbox checked="true" label="查看更多" @change="mhshowcontent5"></el-checkbox> -->
                        <el-checkbox checked="true" label="商品划线价"  @change="fzmhshowcontent6" v-show="fzisshowhuaxian"></el-checkbox>
                      </el-checkbox-group>
                    </div>
                  </div>

                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">背景颜色：</div>
                    <div class="block">
                      <el-color-picker v-model="fzgoodsbgcolor"  @change="fzshopbgmethod"></el-color-picker>
                    </div> 
                  </div>


                  <div class="wx-mu-style-mudle shuixng">
                    <div class="wx-mu-style">左右间距：</div>
                    <div class="block">
                      <el-slider v-model="swiper_value" @input="swiperevent" show-input></el-slider>
                    </div>
                  </div>
                </div>
              </div>
              <!--商品分组组件over-->

              <!--图文导航-->
              <div class="wx-edit-right" v-show="mihuannav_isshow">
                <div class="wx-edit">
                  <div class="wx-edit-hd">图文导航</div>
                </div>

                <div class="wx-mu-style-mudle">
                  <div class="wx-mu-style shuixng-title">选择模板：</div>
                  <div class="wx-mu-style-img">
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        alt
                      />
                      <span>图片导航</span>
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        alt
                      />
                      <span>文字导航</span>
                    </div>
                    <div>
                      <img
                        src="data:image/png;base64,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"
                        alt
                      />
                      <span>图标导航</span>
                    </div>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">布局方式：</div>
                  <div class="block">
                    <el-radio v-model="radio" label="1">固定大小</el-radio>
                    <el-radio v-model="radio" label="2">根据图片自适应</el-radio>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">滑动设置：</div>
                  <div class="block">
                    <el-radio v-model="radio" label="1">固定</el-radio>
                    <el-radio v-model="radio" label="2">横向滑动</el-radio>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">导航数量：</div>
                  <div class="block">
                    <el-radio v-model="radio" label="1">一行四个</el-radio>
                    <el-radio v-model="radio" label="2">一行五个</el-radio>
                    <el-radio v-model="radio" label="3">自适应</el-radio>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">背景颜色：</div>
                  <div class="block">
                    <el-color-picker v-model="color2"></el-color-picker>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">字体大小：</div>
                  <div class="block">
                    <input
                      type="number"
                      autocomplete="off"
                      class="el-input__inner"
                      style="height: 36px;line-height: 36px"
                      value="24"
                    />
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">背景色：</div>
                  <div class="block">
                    <el-color-picker v-model="color2"></el-color-picker>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-mu-style">背景图片：</div>
                  <div class="block">
                    <div>
                      <img
                        src="http://img.wkdao.com/image/47/2019/12/10/c36515f98a7436e824fc3065a5f26c71.png"
                        alt="暂无图片"
                        style="width: 80px;"
                        draggable="false"
                      />
                      <a
                        class="func-bar"
                        style="cursor: pointer;font-size: 14px;color: #409eff;"
                        draggable="false"
                      >添加图片</a>
                    </div>

                    <div data-v-412206be>建议尺寸：750*156</div>
                  </div>
                </div>

                <div class="wx-mu-style-mudle shuixng">
                  <div class="wx-img-edit">
                    <div class="wx-img-edit-div">
                      <img
                        src="http://img.alicdn.com/imgextra/i2/3001331267/O1CN01UPpRzX1LEKJL9m6FK_!!3001331267.jpg"
                        alt="图片"
                        draggable="false"
                        class="wx-img-editimg"
                      />
                      <div class="wx-img-editfunc-bar">更换图片</div>
                    </div>
                    <div class="wx-imgedit-card">
                      <div class="wx-imgedit-card-title">
                        <span>标题 :</span>
                        <el-input v-model="input" placeholder="请输入标题"></el-input>
                      </div>
                      <div class="wx-imgedit-card-link">
                        <span>链接 :</span>
                        <el-select
                          v-model="value2"
                          multiple
                          collapse-tags
                          style="margin-left: 20px;"
                          placeholder="请选择"
                        >
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                          ></el-option>
                        </el-select>
                      </div>
                      <p
                        style="color: rgb(153, 153, 153);font-size: 12px;padding-left: 65px"
                      >小程序不支持自定义链接</p>
                    </div>
                  </div>
                </div>
              </div>
              <!--图文导航over-->

              <!--H5over-->
            </div>
            <!-- 商品中心over -->
          </div>
        </div>
      </div>
      <!--        -->
    </div>
    <!--主体 over-->
  </div>
</template>
<script>
import navbar from "../../navbar";
import sidebar from "../../sidebar";
// import secnavbar from "./secnavbar";



import Sortable from 'sortablejs'


// 先遍历完全在渲染
// 指定 id 所有操作在这个ID下
export default {
  data() {
    return {

      //商品分组数据
      goodsmudelradio:'1',
       tabPosition: 'left',

       goodsgrounpone:'1',//菜单样式
       goodsgrounpmenuvalue:'1',//顶部菜单位置
       isgoodsstates:true,    //横向商品分组
       isgoodsstatestwo:false,  //竖向商品分组

     


         fzgoodsradio:'1',
      fzgoodslistvalue:'1',//商品列表样式
  
      fzgoodsliststyle:true,
      fzgoodslistisstyleone:false,
      fzgoodslistisstyletwo:false,
      fzgoodslistisstylethere:false,

      fzgoodsliubaivalue:'2',
      fzmihuanliubai:'', //留白填充数据

      fzratiovalue:'2',//商品显示比列

      fzh5wxgoodsoneyang:'',

      fzbilieishow:false , //比列3:2 是否显示
      fzmihuanjianvalue:true, // 极简   卡片
      fzjianradio:'1',

      fzshowcontent:true,
      fzshowcontent2:true,
      fzshowcontent3:true,
      fzshowcontent6:true,
      fzshowcontent4:true,
      fzshowcontent5:true,
      fzisshowhuaxian:true,//是否显示划线价

      fzgoodsbgcolor :'',
      fzshopstylecss:'background-color:#ffffff',
   
      fzbordercolor:'',
      fzshopborderstylecss:'',

       fzgoodsborderone : '',
      fzgoodsbordertwo : '',


      //

      //商品数据
      goodsradio:'1',
      goodslistvalue:'1',//商品列表样式
  
      goodsliststyle:true,
      goodslistisstyleone:false,
      goodslistisstyletwo:false,
      goodslistisstylethere:false,

      goodsliubaivalue:'2',
      mihuanliubai:'', //留白填充数据

      ratiovalue:'2',//商品显示比列

      h5wxgoodsoneyang:'',

      bilieishow:false , //比列3:2 是否显示
      mihuanjianvalue:true, // 极简   卡片
      jianradio:'1',

      showcontent:true,
      showcontent2:true,
      showcontent3:true,
      showcontent6:true,
      showcontent4:true,
      showcontent5:true,
      isshowhuaxian:true,//是否显示划线价

      goodsbgcolor :'',
      shopstylecss:'background-color:#ffffff',
   
      bordercolor:'',
      shopborderstylecss:'',

       goodsborderone : '',
      goodsbordertwo : '',









      //控制顺序
      uwasc:true,
      idx:'1',    
      //页面组件数据
       page:{
        "id": 1,
        "shopName": "蜜獾商城测试",
        "shopDescription": "购物系统ceshi",
        "shopBackgroundColor": "color",
        "shopBackgroundImage": "backgroundColortest",
        "navigationStyle": 2,
        "templateId": 1,
        "wxUserShopNavigations": [
            {
                "id": 11,
                "navigationName": "首页",
                "navigationIcon": "icon",
                "navigationFocusIcon": "focusIcon",
                "navigationHref": "path",
                "orderNum": 1,
                "shopId": 1
            },
            {
                "id": 12,
                "navigationName": "商品",
                "navigationIcon": "icon",
                "navigationFocusIcon": "focusIcon",
                "navigationHref": "path",
                "orderNum": 2,
                "shopId": 1
            },
            {
                "id": 13,
                "navigationName": "购物测试",
                "navigationIcon": "icon",
                "navigationFocusIcon": "focusIcon",
                "navigationHref": "path",
                "orderNum": 3,
                "shopId": 1
            },
            {
                "id": 14,
                "navigationName": "会员",
                "navigationIcon": "icon",
                "navigationFocusIcon": "focusIcon",
                "navigationHref": "path",
                "orderNum": 4,
                "shopId": 1
            }
        ],
        "pages": {
            "indexPage": {
                "id": 431,
                "pageName": "默认首页",
                "pageTitle": "默认首页",
                "pageDescription": "默认首页",
                "pageType": 1,
                "canAddComponent": 1,
                "shopId": 1,
                "wxUserShopPageComponents": [
                  {id: 0, componentId: 3, pageId: 431, content: "contrrrent", orderNum: 1},
                  {id: 0, componentId: 1, pageId: 431, content: "conterdent", orderNum: 3}
                  ]
                }
              }
            },

          //首页页面信息
          "indexPage": {
            "id": 431,
            "pageName": "默认首页",
            "pageTitle": "默认首页",
            "pageDescription": "默认首页",
            "pageType": 1,
            "canAddComponent": 1,
            "shopId": 1,
            "wxUserShopPageComponents": [
              {id: 0, componentId: 3, pageId: 431, content: "contrrrent", orderNum: 1},
              {id: 0, componentId: 1, pageId: 431, content: "conterdent", orderNum: 3}
              ]
            },
           



      //轮播图组件数据
      mihuanswiper: [{
          id: 1,
          componentName: "轮播",
          componentIcon: "萨达萨达",
          whiteSpaceAround: " ",
          indicatingDisplayDirection: " ",
          showDirection: "",
          background: "",
          //轮播图一般数据
          swiper_value: 0,
          styleObj1: "padding: 10px;",
          input: 1,
          swiperadio: 1,
          positition: "",
          swiper_color: "",
          swipercolor: "", //背景颜色
          swipedirection: 1,
          swipedirectioncontent: "horizontal",
          swperimg: [{
              name: "选择模板",
              url: "single",
              single: " ",
              href: "www.baidu.com",
              order: 1
            }, {
              name: "布局方式",
              url: "single",
              href: "www.baidu.com",
              order: 2
            }]
        }],

      oneswipervalue:0,
      onestyleObj: "padding: 10px;",
      swiper_value: 0,
   
      input: 1,
      swiperadio: 1,
      positition: "",
      swiper_color: "",
      swiper_colorone:'',
      swipercolor: "", //背景颜色
      swipedirection: 1,
      swipedirectioncontent: "horizontal",

      peter:[{a:"font-size:100px"},{b:"font-size:100px"}],

     

      //文本数据
     
    // textgrounp:[{
    //   id:5,
    //   textzi :"最新近品",
    //   textchecked:1,
    //   textinto : 1,
    //   textstyle:"1",
    //   textbgcolor:"",
    //   textcolor:"#AB956D",
    //   textbing:"2"
    // }],
//文本数据
       textzi1 :"最新近品",
       textzi :"最新近品",
       textchecked:1,
       textinto : "1",
       textintodata:{},
       textstyle:"1",    
       textcolor:"#AB956D",
       textbing:"2",
       h5text:"",
       textbgcolor:{},
       h5text2:{},
     


     //标题
    
      wxtitle:'精选主题',
      titleradio:"1",
      titlecolor:"",
      titlelocation:"1",
      subheading:'',
      meimei:{'goodsgrounpjinze':true,'goodsgrounpjinze2':false,'goodsgrounpjinze3':false},
      

  

 

      // 组件属性的操作
      mihuanswiper_isshow: true,
      //魔方
      mihuancube_isshow: false,
      //文字
      mihuanword_isshow: false,
      //标题
      mihuantitle_isshow: false,
      //富文本
      mihuanedit_isshow: false,
      //图片广告
      mihuanadvertising_isshow: false,
      //商品
      mihuangoods_isshow: false,
      //商品分组
      mihuangroup_isshow: false,
      //图文导航
      mihuannav_isshow: false,
      futitle:'1',
      value:1,


      //图片上传
      //    fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      fileList: [],
      imageUrl: "",
      mhswiperoptions: [
        {
          value: "选项1",
          label: "商城主页"
        },
        {
          value: "选项2",
          label: "所有商品"
        },
        {
          value: "选项3",
          label: "用户中心"
        },
        {
          value: "选项4",
          label: "推客申请"
        },
        {
          value: "选项5",
          label: "秒杀列表"
        }
      ],
      //轮播图over

      //魔方数据
      //2 行 6个数据
  
      cubedataone: [
        
        {
          cubeimg:
            "http://img.wkdao.com/image/system/2019/06/10/d7b3feb01552d15ddd25e4fd7a4af3c4.png",
          cubetitle: "魔方"
        },
        {
          cubeimg:
            "http://img.wkdao.com/image/system/2019/06/10/f2bab52a7944e3a6b53307b195c9d1b1.png",
          cubetitle: "魔方"
        },
        {
          cubeimg:
            "http://img.wkdao.com/image/system/2019/06/10/a8c18a859ba7b3594122589d77255292.png",
          cubetitle: "魔方"
        },
        {
          cubeimg:
            "http://img.wkdao.com/image/system/2019/06/10/2b49751ce9f0e355ac05378845a068a4.png",
          cubetitle: "魔方"
        },
        {
          cubeimg:
            "http://img.wkdao.com/image/system/2019/06/10/201c6ee6c3b7521f2ae135fe4da6a788.png",
          cubetitle: "魔方"
        },
        {
          cubeimg:
            "http://img.wkdao.com/image/system/2019/06/10/151ab36ad6c29997ee8e595dd7e767e8.png",
          cubetitle: "魔方"
        },
        {
          cubeimg:
            "http://img.wkdao.com/image/system/2019/06/10/a2b3c1f571d4ecfe649bdff506e2758a.png",
          cubetitle: "魔方"
        },
        {
          cubeimg:
            "http://img.wkdao.com/image/system/2019/06/10/3a89712a4ef4ce95f6c6bdbcf35e6833.png",
          cubetitle: "魔方"
        }
      ],
      //一行2个数据
      cubedatatwo: [
        {
          cubeimg:
            "http://img.wkdao.com/image/system/2019/06/10/d7b3feb01552d15ddd25e4fd7a4af3c4.png",
          cubetitle: "魔方",
          cubetwoclass: true
        },
        {
          cubeimg:
            "http://img.wkdao.com/image/system/2019/06/10/f2bab52a7944e3a6b53307b195c9d1b1.png",
          cubetitle: "魔方",
          cubetwoclass: true
        }
      ],

      //魔方数据over
      cubewhitespacearound: 0,
      cubestyleObj1: "",

      cubeimgspacearound: 0,
      cubecolor: "",
      cubebgcolor: "",

      input: "",
      radio: 1,
      color1: "#409EFF",
      color2: "#409EFF",
      value: 1, //左右留白
      dashed: "",


      //图片广告数据
      banerswiper_value:'',
      tugswiper_color:'',

//魔方整体数据
      // cubedata:[{
      //       cubedataone: [
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/d7b3feb01552d15ddd25e4fd7a4af3c4.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/f2bab52a7944e3a6b53307b195c9d1b1.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/a8c18a859ba7b3594122589d77255292.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/2b49751ce9f0e355ac05378845a068a4.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/201c6ee6c3b7521f2ae135fe4da6a788.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/151ab36ad6c29997ee8e595dd7e767e8.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/a2b3c1f571d4ecfe649bdff506e2758a.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //         "http://img.wkdao.com/image/system/2019/06/10/3a89712a4ef4ce95f6c6bdbcf35e6833.png",
      //         cubetitle: "魔方"
      //       }
      //     ],
      //     cubedataone: [
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/d7b3feb01552d15ddd25e4fd7a4af3c4.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/f2bab52a7944e3a6b53307b195c9d1b1.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/a8c18a859ba7b3594122589d77255292.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/2b49751ce9f0e355ac05378845a068a4.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/201c6ee6c3b7521f2ae135fe4da6a788.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/151ab36ad6c29997ee8e595dd7e767e8.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/a2b3c1f571d4ecfe649bdff506e2758a.png",
      //         cubetitle: "魔方"
      //       },
      //       {
      //         cubeimg:
      //           "http://img.wkdao.com/image/system/2019/06/10/3a89712a4ef4ce95f6c6bdbcf35e6833.png",
      //         cubetitle: "魔方"
      //       }
      //     ],
      //     cubewhitespacearound: 0,
      //     cubestyleObj1: "",

      //     cubeimgspacearound: 0,
      //     cubecolor: "",
      //     cubebgcolor: "",

      //     input: "",
      //     radio: 1,
      //     color1: "#409EFF",
      //     color2: "#409EFF",
      //     value: 1, //左右留白
      //     dashed: ""
      //  }],








      cube: {
        componentName: "魔方",
        propertyList: [
          {
            name: "选择模板",
            type: "single",
            symbol: "display",
            options: [],
            order: 1
          },
          {
            name: "布局方式",
            type: "single",
            symbol: "layout",
            options: [],
            order: 2
          },
          {
            name: "左右留白",
            type: "range",
            symbol: "h-space",
            rangeType: "integer",
            max: 10,
            min: 1
          },
          { name: "背景色", type: "backgroundColor", symbol: "color" }
        ]
      },
      //链接菜单
      // value: [1,2],
      options: [
        {
          value: "zhinan",
          label: "商城",
          children: [
            {
              value: "yizhi",
              label: "商城首页"
            },
            {
              value: "fankui",
              label: "所有商品"
            },
            {
              value: "xiaolv",
              label: "商品"
            },
            {
              value: "kekong",
              label: "所有分类"
              // value: 'shejiyuanze',
              // label: '设计原则',
            }
          ]
        }
      ],
      activeName: 'first',
      //上传图片
      imageUrl: "",
      listimg: [
        {
          imgurl:
            "http://img.wkdao.com/image/system/2019/06/10/9bb4c0f910aa8c41a730433c5fafd830.png"
        },
        {
          imgurl:
            "http://img.wkdao.com/image/system/2019/06/10/9bb4c0f910aa8c41a730433c5fafd830.png"
        },
        {
          imgurl:
            "http://img.wkdao.com/image/system/2019/06/10/9bb4c0f910aa8c41a730433c5fafd830.png"
        }
      ],
      form: { desc: "" }, // 文本数据
      //  radio: '1', //文本
      checked: true, // 是否显示分割线
      // input: '', //标题
      //文件上传
      dialogImageUrl: "",
      dialogVisible: false,
      //商品多选宽
      checkList: ["选中且禁用", "复选框 A"],
      fzcheckList: ["选中且禁用", "复选框 A"],
      //多选
      value2: [],
      swiperCssStyle:'',
      //切换id
      wxPageId:0,
      /**保存组件数据 */
      wxArrdata:[
        //  {id:0, componentId: 1, pageId: 431, content:{
        //     id: 1,
        //     componentName: "轮播",
        //     componentIcon: "萨达萨达",
        //     whiteSpaceAround: " ",
        //     indicatingDisplayDirection: " ",
        //     showDirection: "",
        //     background: "",
        //     //轮播图一般数据
        //     swiper_value: 0,
        //     styleObj1: "padding: 10px;",
        //     input: 1,
        //     swiperadio: 1,
        //     onestyleObj:1,
        //     positition: "",
        //     swiper_color: "",
        //     swipercolor: "", //背景颜色
        //     swipedirection: 1,
        //     swipedirectioncontent: "horizontal",
        //     swperimg: [{
        //         name: "选择模板",
        //         url: "single",
        //         single: " ",
        //         href: "www.baidu.com",
        //         order: 1
        //       }, {
        //         name: "布局方式",
        //         url: "single",
        //         href: "www.baidu.com",
        //         order: 2
        //       },]
        // }, orderNum: 3},
        //  {id:0, componentId: 1, pageId: 431, content:{
        //     id: 1,
        //     componentName: "轮播",
        //     componentIcon: "萨达萨达",
        //     whiteSpaceAround: " ",
        //     indicatingDisplayDirection: " ",
        //     showDirection: "",
        //     background: "",
        //     //轮播图一般数据
        //     swiper_value: 0,
        //     styleObj1: "padding: 10px;",
        //     input: 1,
        //     swiperadio: 1,
        //     onestyleObj:1,
        //     positition: "",
        //     swiper_color: "",
        //     swipercolor: "", //背景颜色
        //     swipedirection: 1,
        //     swipedirectioncontent: "horizontal",
        //     swperimg: [{
        //         name: "选择模板",
        //         url: "single",
        //         single: " ",
        //         href: "www.baidu.com",
        //         order: 1
        //       }, {
        //         name: "布局方式",
        //         url: "single",
        //         href: "www.baidu.com",
        //         order: 2
        //       },]
        // }, orderNum: 3}
          //  {id: 0, componentId: 1, pageId: 431, content: "conterdent", orderNum: 3}
      ],
      moudelindex:'', //组件当前的index
      third:"10",
      thirdswiperadio:1,
      adverdata:'',
      //重要idnexPage 轮播图数据
       "wxUserShopPageComponents": [
          {id: 0, componentId: 3, pageId: 431, content:[], orderNum: 1},
          {id: 1, componentId: 1, pageId: 431, content: "conterdent", orderNum: 3}
          ],
      };
  },
  mounted(){
      // this.ue = UE.getEditor('myEditor');
      // 组件拖拽事件
      var _this = this;
            var $ul = document.getElementById('list')
            new Sortable($ul, {
                onUpdate:function(event){
                    //修改items数据顺序
                    var newIndex = event.newIndex,
                        oldIndex = event.oldIndex,
                        $li = $ul.children[newIndex],
                        $oldLi = $ul.children[oldIndex];
                    // 先删除移动的节点
                    $ul.removeChild($li)    
                    // 再插入移动的节点到原有节点，还原了移动的操作
                    if(newIndex > oldIndex) {
                        $ul.insertBefore($li,$oldLi)
                    } else {
                        $ul.insertBefore($li,$oldLi.nextSibling)
                    }
                    // 更新items数组
                    var item = _this.wxArrdata.splice(oldIndex,1)
                    _this.wxArrdata.splice(newIndex,0,item[0])
                    // 下一个tick就会走patch更新
                },
                animation: 150,
            })
  },

  /**
   *   属性  操作  ->  数据  -> 显示     
   * 
   * 
   */
  methods: {
// 商品模块 commodity 商品的中心内容

    goodgrounpup(){
            // alert(this.goodsmudelradio);//
        if( this.goodsmudelradio ==2){ 
          this.$message('侧边菜单正在开发中~');
          this.isgoodsstates = false;
          this.isgoodsstatestwo=true;
        }
        if(this.goodsmudelradio ==1){
           this.isgoodsstates = true;
           this.isgoodsstatestwo = false;
        }
    },

    //菜单样式
    goodsgrounpcaimethod(){
      if(this.goodsgrounpone == 1){
        this.meimei.goodsgrounpjinze = true;
         this.meimei.goodsgrounpjinze3 = false;
           this.meimei.goodsgrounpjinze2 = false;
      }else if(this.goodsgrounpone == 2){
        this.meimei.goodsgrounpjinze2 = true;
         this.meimei.goodsgrounpjinze3 = false;
            this.meimei.goodsgrounpjinze = false;
      }else{
          this.meimei.goodsgrounpjinze3 = true;
           this.meimei.goodsgrounpjinze2 = false;
            this.meimei.goodsgrounpjinze = false;
      }
      // 
      
    },

    //顶部吸顶位置分组
    goodsgrounpmenumethod(){
      if(this.goodsgrounpmenuvalue == 1){
        this.$message.success('设置正常模式成功');
      }
      if(this.goodsgrounpmenuvalue ==2){
        this.$message.success('设置自动置顶成功');
      }
    },
    //分组背景颜色
    fzshopbgmethod(){
        this.fzshopstylecss = "background-color:"+ this.fzgoodsbgcolor;
      },
     //商品留白 -  填充
    fzgoodsliubaimethod(){  
       if( this.fzgoodsliubaivalue == 1){
            this.fzgoodsborderone ="box-sizing:border-box;padding:0 12px;"
            this.fzshopborderstylecss = this.fzgoodsborderone+this.fzgoodsbordertwo;   
       }else{
            this.fzgoodsborderone ="box-sizing:border-box;padding:0;"
            this.fzshopborderstylecss = this.fzgoodsborderone+this.fzgoodsbordertwo;
       }
    },

    fzmhshowcontent(checked){
     if(checked){
       this.fzshowcontent = true;
     }else{
        this.fzshowcontent = false;
     }  
   },
   fzmhshowcontent6(checked){
     if(checked){
       this.fzshowcontent6 = true;      
     }else{
        this.fzshowcontent6 = false;
     }
   },
   fzmhshowcontent2(checked){
        alert(checked);
    },
   fzmhshowcontent3(checked){
   let that =this;
       if(checked){
       that.fzshowcontent3 = true;
       that.fzisshowhuaxian = true;
     }else{
        that.fzshowcontent3 = false; 
        that.fzisshowhuaxian = false;   
     }
   },
  fzmhshowcontent4(checked){
       if(checked){
       this.fzshowcontent4 = true;
     }else{
        this.fzshowcontent4 = false;
     }
    },

       //商品分组列表样式
    fzgoodslistvaluemethod(){
      alert(this.fzgoodslistvalue);
      if(this.fzgoodslistvalue == 1){
            this.fzratiovalue = '2';
            this.fzbilieishow = false;
            this.fzgoodsliststyle = true;
            this.fzgoodslistisstyleone = false;
            this.fzgoodslistisstyletwo = false;
            this.fzgoodslistisstylethere = false;
      }else if(this.fzgoodslistvalue ==2){
            this.fzratiovalue = '1';
            this.fzbilieishow = true;
            this.fzgoodsliststyle = false;
            this.fzgoodslistisstyleone = true;
            this.fzgoodslistisstyletwo = false;
            this.fzgoodslistisstylethere = false;
      }else if(this.fzgoodslistvalue ==3){
            this.fzratiovalue = '2';
            this.fzbilieishow = false;
            this.fzgoodsliststyle = false;
            this.fzgoodslistisstyleone = false;
            this.fzgoodslistisstyletwo = true;
            this.fzgoodslistisstylethere = false;
      }else{
            this.fzratiovalue = '2';
            this.fzbilieishow = false;
            this.fzgoodsliststyle = false;
            this.fzgoodslistisstyleone = false;
            this.fzgoodslistisstyletwo = false;
            this.fzgoodslistisstylethere = true;
      }
    },

    //分组列表比例
    fzshowratiovmethod(){
        //  3:2 比列
       if(this.fzratiovalue ==1){
          if(this.fzgoodsliststyle ==true){
             this.fzh5wxgoodsoneyang = 'width:157px;height:125px'
          }
          if(this.fzgoodslistisstyleone == true){
               this.fzh5wxgoodsoneyang = 'height:200px' 
          }
        }

         //   1 : 1  比列
        if(this.fzratiovalue ==2){
          if(this.fzgoodsliststyle ==true){
             this.fzh5wxgoodsoneyang = 'width:157px;height:157px'
          }
           if(this.fzgoodslistisstyleone == true){
            this.fzh5wxgoodsoneyang = 'height:345px;width:345px'
          }
        }
    },

    //分组卡片
    fzstylejianmethod(){
        if(this.fzjianradio ==1){
          this.fzmihuanjianvalue = true;
        }else{
          this.fzmihuanjianvalue = false;
        }
      },





    //商品分组over



    //商品的背景颜色
    shopbgmethod(){
      
        this.shopstylecss = "background-color:"+ this.goodsbgcolor;
      },
    //边框颜色
    shopbordercolor(){
            this.goodsbordertwo = "border:1px solid"+ this.bordercolor;
            this.shopborderstylecss =this.goodsborderone+"border:1px solid"+ this.bordercolor;
      },
     //商品留白 -  填充
    goodsliubaimethod(){  
       if( this.goodsliubaivalue == 1){
        //  this.mihuanliubai ="box-sizing:border-box;padding:0 15px"
            this.goodsborderone ="box-sizing:border-box;padding:0 12px;"
            this.shopborderstylecss = this.goodsborderone+this.goodsbordertwo;
       
       }else{
          // this.mihuanliubai ="box-sizing:border-box;padding:0"
            this.goodsborderone ="box-sizing:border-box;padding:0;"
            this.shopborderstylecss = this.goodsborderone+this.goodsbordertwo;
       }
    },

   mhshowcontent(checked){
     if(checked){
       this.showcontent = true;
     }else{
        this.showcontent = false;
     }  
   },
   mhshowcontent6(checked){
     if(checked){
       this.showcontent6 = true;      
     }else{
        this.showcontent6 = false;
     }
   },
   mhshowcontent2(checked){
        alert(checked);
    },
   mhshowcontent3(checked){
   let that =this;
       if(checked){
       that.showcontent3 = true;
       that.isshowhuaxian = true;
     }else{
        that.showcontent3 = false; 
        that.isshowhuaxian = false;   
     }
   },
  mhshowcontent4(checked){
       if(checked){
       this.showcontent4 = true;
     }else{
        this.showcontent4 = false;
     }
    },

  mhshowcontent5(checked){
        alert(checked);
    },









  goodsattribute() {
      let that = this;  
      let id  = that.wxPageId;
      that.wxPageId = ++id ;
      that.wxArrdata.push(
        {id:that.wxPageId, componentId: 7, pageId: 431, content:{
          id: 1,
          componentName: "商品",
          componentIcon: "../img",
          goods:[{
            content: ''
          }]
        }, orderNum: 3});

      that.mihuangoods_isshow = true;
      that.mihuanadvertising_isshow = false;
      that.mihuanedit_isshow = false;
      that.mihuantitle_isshow = false;
      that.mihuanword_isshow = false;
      that.mihuancube_isshow = false;
      that.mihuanswiper_isshow = false;
      that.mihuannav_isshow = false;
      that.mihuangroup_isshow = false;
    },

    goodssource(){
        // alert(this.goodsradio);
        if(this.goodsradio == 2){
           this.$message("商品分组暂无数据");
        }
       
    },
    goodslistvaluemethod(){
      if(this.goodslistvalue == 1){
            this.ratiovalue = '2';
            this.bilieishow = false;
            this.goodsliststyle = true;
            this.goodslistisstyleone = false;
            this.goodslistisstyletwo = false;
            this.goodslistisstylethere = false;
      }else if(this.goodslistvalue ==2){
            this.ratiovalue = '1';
            this.bilieishow = true;
            this.goodsliststyle = false;
            this.goodslistisstyleone = true;
            this.goodslistisstyletwo = false;
            this.goodslistisstylethere = false;
      }else if(this.goodslistvalue ==3){
            this.ratiovalue = '2';
            this.bilieishow = false;
            this.goodsliststyle = false;
            this.goodslistisstyleone = false;
            this.goodslistisstyletwo = true;
            this.goodslistisstylethere = false;
      }else{
            this.ratiovalue = '2';
            this.bilieishow = false;
            this.goodsliststyle = false;
            this.goodslistisstyleone = false;
            this.goodslistisstyletwo = false;
            this.goodslistisstylethere = true;
      } 
    },
  
    //商品比例
    showratiovmethod(){
        // alert(this.ratiovalue);
        //  3:2 比列
       if(this.ratiovalue ==1){
          if(this.goodsliststyle ==true){
             this.h5wxgoodsoneyang = 'width:157px;height:125px'
          }
          if(this.goodslistisstyleone == true){
               this.h5wxgoodsoneyang = 'height:200px' 
          }
        }

         //   1 : 1  比列
        if(this.ratiovalue ==2){
          if(this.goodsliststyle ==true){
             this.h5wxgoodsoneyang = 'width:157px;height:157px'
          }
           if(this.goodslistisstyleone == true){
            this.h5wxgoodsoneyang = 'height:345px;width:345px'
          }
        }
    },

    //卡片极简
    stylejianmethod(){
      if(this.jianradio ==1){
        this.mihuanjianvalue = true;
      }else{
        this.mihuanjianvalue = false;
      }
    },










    //删除当前H5组件 , 删除操作改变是原数组的内容
    dectthismudel(param){
      console.log(param);  

        // console.log(this.wxArrdata);
        let data =  this.wxArrdata.splice(param,1);
        console.log(data);
    // this.wxArrdata = data;
        console.log(this.wxArrdata);
          this.$message.success('删除成功');
    },
      /**ID处理事件 当前h5模块的处理事件 */
      indexpageIdMethod(index){
      // console.log(this.wxPageId);
      console.log(index);
      /**获得当前的index */
      this.moudelindex = index;
      // this.adverdata = "border: 1px dashed #5874d8;"

      // that.$set( this.wxArrdata[index].content,oneswipervalue,this.third);
    },
    /**轮播图事件 */
    swiperattribute() {
      // let thisID = that.page.pages.indexPage.wxUserShopPageComponents.length;
      //添加轮播图组件数据 
      // wxArrdata.content
      //一个组件的数据
      //  this.wxArrdata[that.wxPageId].content.oneswipervalue = this.third;
      // console.log(this.wxArrdata);
      let that = this;
      let id  = that.wxPageId;
      that.wxPageId = ++id ;   

      that.wxArrdata.push(
          {id:that.wxPageId, componentId: 1, pageId: 431, content:{
            id: 1,
            componentName: "轮播",
            componentIcon: "萨达萨达",
            whiteSpaceAround: " ",
            indicatingDisplayDirection: " ",
            showDirection: "",
            background: "",
            //轮播图一般数据
            swiper_value: 0,
            styleObj1: "padding: 10px;",
            input: 1,
            swiperadio: 1,
            onestyleObj:1,
            positition: "",
            swiper_color: "",
            swipercolor: "", //背景颜色
            swipedirection: 1,
            swipedirectioncontent: "horizontal",
            swperimg: [{
                name: "选择模板",
                url: "single",
                single: " ",
                href: "www.baidu.com",
                order: 1
              }, {
                name: "布局方式",
                url: "single",
                href: "www.baidu.com",
                order: 2
              }]
        }, orderNum: 3});

      //console.log(that.wxArrdata);
      that.mihuanswiper_isshow = true;
      that.mihuancube_isshow = false;
      that.mihuannav_isshow = false;
      that.mihuangroup_isshow = false;
      that.mihuangoods_isshow = false;
      that.mihuanadvertising_isshow = false;
      that.mihuanedit_isshow = false;
      that.mihuantitle_isshow = false;
      that.mihuanword_isshow = false;
    },
    /**轮播图背景颜色
     * 
     */
    swipercolorevent(){
        console.log(this.swiper_color);
        let mindex = this.moudelindex;    

          this.wxArrdata[mindex].content.swiper_color = this.swiper_colorone;
          this.wxArrdata[mindex].content.swipercolor = "background-color:" +  this.wxArrdata[mindex].content.swiper_color;
    }, 
    /**轮播图显示方向
     * @swipedirection 属性双向绑定值
     */
     swiperdirectionevt() {      
        let mindex = this.moudelindex;    
        this.wxArrdata[mindex].content.swipedirection = this.swipedirection;
        console.log(this.swipedirection);  
        this.wxArrdata[mindex].content.swipedirection == 1
          ? (this.wxArrdata[mindex].content.swipedirectioncontent  = "horizontal")
          : (this.wxArrdata[mindex].content.swipedirectioncontent  = "vertical");
    },
    /**轮播图内外事件
     * @swiperadio 属性绑定值
     * @positition 轮播图绑定值
     */
    swiperindicate() {

      console.log(this.thirdswiperadio);
      let mindex = this.moudelindex;

      this.wxArrdata[mindex].content.swiperadio = this.thirdswiperadio;
      this.wxArrdata[mindex].content.swiperadio == 1
        ? (this.wxArrdata[mindex].content.positition = "")
        : this.wxArrdata[mindex].content.swiperadio == 2
        ? (this.wxArrdata[mindex].content.positition = "outside")
        :this.wxArrdata[mindex].content.swiperadio == 3
        ? (this.wxArrdata[mindex].content.positition = "none")
        : (this.wxArrdata[mindex].content.positition = "");
      // positition
    },
    // 轮播图左右留白方法
    indexPageswiper() {
      console.log(this.third);
      // console.log(this.moudelindex); /**获取点击后当前的index */
      let that = this;
      let mindex = this.moudelindex;
      that.wxArrdata[mindex].content.oneswipervalue = that.third; 
      // console.log(that.wxArrdata);
      //  that.$set(that.wxArrdata[that.wxArrdata.length -1].content[0].onestyleObj,"padding-left:" +that.wxArrdata[that.wxArrdata.length -1].content[0].oneswipervalue +"px;padding-right:" +that.wxArrdata[that.wxArrdata.length -1].content[0].oneswipervalue +"px;"); 
      that.wxArrdata[mindex].content.onestyleObj = "padding-left:" +that.wxArrdata[mindex].content.oneswipervalue +"px;padding-right:" +that.wxArrdata[mindex].content.oneswipervalue +"px;";
      //  that.wxArrdata[that.wxPageId].content.onestyleObj
      //  that.$set(that.wxArrdata[that.wxPageId].content,styleObj1,"padding-left:" +that.wxArrdata[that.wxPageId].content.swiper_value +"px;padding-right:" +that.wxArrdata[that.wxPageId].content.swiper_value +"px;"); 
      // console.log(that.wxArrdata);
      //让动态绑定的onestyleObj ? 所有同一组件的属性 
      // this.onestyleObj = "padding-left:" + this.oneswipervalue + "px;padding-right:" +this.oneswipervalue + "px;";
      // this.mihuanswiper[index].styleObj1 =  this.styleObj1;
      // for(let i= 0;a<wxArrdata.length;i++){
      //    if( wxArrdata[i].id == that.wxPageId){
      //    }
      // }
    },
    //魔方组件
    cubeattribute() {
      let that = this;
      let id  = that.wxPageId;
      that.wxPageId = ++id ; 
      console.log(that.wxArrdata);  
  
      that.wxArrdata.push(
          {id:that.wxPageId, componentId: 2, pageId: 431, content:{
            id: 1,
            componentName: "魔方",
            componentIcon: "../img",
            cubewhitespacearound: 0,
            cubestyleObj1: "",
            cubeimgspacearound: 0,
            cubecolor: "",
            cubebgcolor: "",
            input: "",
            radio: 1,
            color1: "#409EFF",
            color2: "#409EFF",
            value: 1, //左右留白
            dashed: "",
            cubeimg:[
              {
                cubeimg:
                  "http://img.wkdao.com/image/system/2019/06/10/d7b3feb01552d15ddd25e4fd7a4af3c4.png",
                cubetitle: "魔方"
              },
              {
                cubeimg:
                  "http://img.wkdao.com/image/system/2019/06/10/f2bab52a7944e3a6b53307b195c9d1b1.png",
                cubetitle: "魔方"
              },
              {
                cubeimg:
                  "http://img.wkdao.com/image/system/2019/06/10/a8c18a859ba7b3594122589d77255292.png",
                cubetitle: "魔方"
              },
              {
                cubeimg:
                  "http://img.wkdao.com/image/system/2019/06/10/2b49751ce9f0e355ac05378845a068a4.png",
                cubetitle: "魔方"
              },
              {
                cubeimg:
                  "http://img.wkdao.com/image/system/2019/06/10/201c6ee6c3b7521f2ae135fe4da6a788.png",
                cubetitle: "魔方"
              },
              {
                cubeimg:
                  "http://img.wkdao.com/image/system/2019/06/10/151ab36ad6c29997ee8e595dd7e767e8.png",
                cubetitle: "魔方"
              },
              {
                cubeimg:
                  "http://img.wkdao.com/image/system/2019/06/10/a2b3c1f571d4ecfe649bdff506e2758a.png",
                cubetitle: "魔方"
              },
              {
                cubeimg:
                  "http://img.wkdao.com/image/system/2019/06/10/3a89712a4ef4ce95f6c6bdbcf35e6833.png",
                cubetitle: "魔方"
              }
            ] 
           }, orderNum: 3});
        


        that.mihuancube_isshow = true;
        that.mihuanswiper_isshow = false;
        that.mihuannav_isshow = false;
        that.mihuangroup_isshow = false;
        that.mihuangoods_isshow = false;
        that.mihuanadvertising_isshow = false;
        that.mihuanedit_isshow = false;
        that.mihuantitle_isshow = false;
        that.mihuanword_isshow = false;
    },
        //魔方左右留白事件
        cubeinputvalue() {
            let that = this;
            let mindex = that.moudelindex;
            // console.log(mindex);
            that.wxArrdata[mindex].content.cubewhitespacearound = that.cubewhitespacearound; 
            that.wxArrdata[mindex].content.cubestyleObj1 = "padding-left:" +that.wxArrdata[mindex].content.cubewhitespacearound +"px;padding-right:" +that.wxArrdata[mindex].content.cubewhitespacearound +"px;";
        },
        //魔方背景颜色事件
        cubecolorevt() {
              console.log(this.swiper_color);
           let mindex = this.moudelindex;    

          this.wxArrdata[mindex].content.cubecolor = this.cubecolor;
          this.wxArrdata[mindex].content.cubebgcolor = "background-color:" +  this.wxArrdata[mindex].content.cubecolor;

          },
        //魔方显示个数
        cuberowone() {
            let mindex = this.moudelindex; 
            this.wxArrdata[mindex].content.cubeimg = this.cubedataone;
          },
          cuberowtwo() {
             let mindex = this.moudelindex; 
             this.wxArrdata[mindex].content.cubeimg = this.cubedatatwo;
          },



   //文本模块点击事件
      wordattribute() {
      let that = this;
      let id  = that.wxPageId;
      that.wxPageId = ++id ;

      that.wxArrdata.push(
          {id:that.wxPageId, componentId: 3, pageId: 431, content:{
            id: 1,
            componentName: "文字",
            componentIcon: "../img",
            textgrounp:[{
            textzi :"最新近品",
            textchecked:1,
            textinto : "1",
            textintodata:{},
            textstyle:"1",    
            textcolor:"#AB956D",
            titlelocation:'text-align:left',
            
            // textbing:"2",
            h5text:"font-size:16px",
            textbgcolor:'background-color:#ffffff',
            h5text2:{}
           }] 
           }, orderNum: 3});
          that.mihuanword_isshow = true;
          that.mihuancube_isshow = false;
          that.mihuanswiper_isshow = false;
          that.mihuannav_isshow = false;
          that.mihuangroup_isshow = false;
          that.mihuangoods_isshow = false;
          that.mihuanadvertising_isshow = false;
          that.mihuanedit_isshow = false;
          that.mihuantitle_isshow = false;
    },

         //获取文本内容
        gettext() {
            let that = this;
            let mindex = that.moudelindex;
             console.log(mindex);
            that.wxArrdata[mindex].content.textzi = that.textzi1; 
        },
        // 文字大小事件
        textbingchange(){
          let that = this;
          let mindex = that.moudelindex;
          console.log(this.textbing);
          if(this.textbing == 1){          
              //  that.wxArrdata[mindex].content.h5text = "font-size:20px";
                  this.$set(that.wxArrdata[mindex].content,'h5text',"font-size:20px");
                //  that.wxArrdata[mindex].content.textstyle = that.wxArrdata[mindex].content.h5text  +";color:"+ that.wxArrdata[mindex].content.textcolor+";"+that.wxArrdata[mindex].content.h5text;
                   this.$set(that.wxArrdata[mindex].content,'textstyle',that.wxArrdata[mindex].content.textstyle+';'+that.wxArrdata[mindex].content.h5text);
       }else if(this.textbing ==2){
            //  that.wxArrdata[mindex].content.h5text = {"font-size":"16px"};
            // that.wxArrdata[mindex].content.h5text = "font-size:16px";
              this.$set(that.wxArrdata[mindex].content,'h5text',"font-size:16px");
              this.$set(that.wxArrdata[mindex].content,'textstyle',that.wxArrdata[mindex].content.textstyle+';'+that.wxArrdata[mindex].content.h5text);
          }else{
                        
            //  that.wxArrdata[mindex].content.h5text = {"font-size":"12px"};
             this.$set(that.wxArrdata[mindex].content,'h5text',"font-size:12px");
              this.$set(that.wxArrdata[mindex].content,'textstyle',that.wxArrdata[mindex].content.textstyle+';'+that.wxArrdata[mindex].content.h5text);
          }
          
        },
        //字体颜色事件
        textcolorevt(){
               let that = this;
               let mindex = that.moudelindex;
               that.wxArrdata[mindex].content.textcolor = that.textcolor;
               that.$set(that.wxArrdata[mindex].content,'textstyle',that.wxArrdata[mindex].content.textstyle+';'+that.wxArrdata[mindex].content.textcolor);
          },
        //背景颜色
        textbgcolorevt(){
          let that = this;
          let mindex = that.moudelindex;
          that.wxArrdata[mindex].content.textbgcolor ="background-color:"+that.textbgcolor;
          that.$set(that.wxArrdata[mindex].content,'textstyle',that.wxArrdata[mindex].content.textstyle+';'+that.wxArrdata[mindex].content.textbgcolor);
       
        },

       //文本位置函数
        textleftintochange(){
            let that = this;
            let mindex = that.moudelindex;          
            this.$set(that.wxArrdata[mindex].content,'titlelocation',"text-align:left");
            this.$set(that.wxArrdata[mindex].content,'textstyle',that.wxArrdata[mindex].content.textstyle+';'+that.wxArrdata[mindex].content.titlelocation);
           
        },
        textzhongintochange(){
          let that = this;
          let mindex = that.moudelindex;
            this.$set(that.wxArrdata[mindex].content,'titlelocation',"text-align:center");
            this.$set(that.wxArrdata[mindex].content,'textstyle',that.wxArrdata[mindex].content.textstyle+';'+that.wxArrdata[mindex].content.titlelocation);
              // that.wxArrdata[mindex].content.titlelocation =  "text-align:center";
              // that.wxArrdata[mindex].content.textstyle = that.wxArrdata[mindex].content.h5text  +";color:"+ that.wxArrdata[mindex].content.textcolor+";"+that.wxArrdata[mindex].content.h5text+";"+ that.wxArrdata[mindex].content.textbgcolor+';'+that.wxArrdata[mindex].content.titlelocation;
        },
        textrightintochange(){
              let that = this;
              let mindex = that.moudelindex;
              this.$set(that.wxArrdata[mindex].content,'titlelocation',"text-align:right");
              this.$set(that.wxArrdata[mindex].content,'textstyle',that.wxArrdata[mindex].content.textstyle+';'+that.wxArrdata[mindex].content.titlelocation);
       }, 
       //文本over
       

   //标题模块点击事件
    titleattribute() {
      let that = this;
      let id  = that.wxPageId;
      that.wxPageId = ++id ;

      that.wxArrdata.push(
          {id:that.wxPageId, componentId: 4, pageId: 431, content:{
            id: 1,
            componentName: "魔方",
            componentIcon: "../img",
            titledata:[{
              wxtitle:'精选主题',
              titleradio:"1",
              subheading:'',                        //副标题
              titlecolor:"#ffffff",
              titlelocation:"text-align:left",     //居中显示样式
              titlestyle:'background-color:#fff'   //css 样式
            }]
           }, orderNum: 3});

      that.mihuantitle_isshow = true;
      that.mihuanword_isshow = false;
      that.mihuancube_isshow = false;
      that.mihuanswiper_isshow = false;
      that.mihuannav_isshow = false;
      that.mihuangroup_isshow = false;
      that.mihuangoods_isshow = false;
      that.mihuanadvertising_isshow = false;
      that.mihuanedit_isshow = false;
    },
        //获取标题内容
          gettitle() {
            let that = this;
            let mindex = that.moudelindex;
             console.log(mindex);
            that.wxArrdata[mindex].content.wxtitle = that.wxtitle; 
            
        },

        //副标题事件
        subheadingmethod(){
          let that = this;
          let mindex = that.moudelindex;
          that.wxArrdata[mindex].content.subheading = that.subheading; 
        },

        //标题位置
          titleloacleft(){
            let that = this;
            let mindex = that.moudelindex;          
            this.$set(that.wxArrdata[mindex].content,'titlelocation',"text-align:left");
            this.$set(that.wxArrdata[mindex].content,'titlestyle',that.wxArrdata[mindex].content.titlestyle+';'+that.wxArrdata[mindex].content.titlelocation);
            
          },
          titleloacright(){
              let that = this;
             let mindex = that.moudelindex;          
             this.$set(that.wxArrdata[mindex].content,'titlelocation',"text-align:right");
             this.$set(that.wxArrdata[mindex].content,'titlestyle',that.wxArrdata[mindex].content.titlestyle+';'+that.wxArrdata[mindex].content.titlelocation);
          },
          titleloacenter(){
             let that = this;
             let mindex = that.moudelindex;          
             this.$set(that.wxArrdata[mindex].content,'titlelocation',"text-align:center");
             this.$set(that.wxArrdata[mindex].content,'titlestyle',that.wxArrdata[mindex].content.titlestyle+';'+that.wxArrdata[mindex].content.titlelocation);
          },
          //标题背景颜色
          titlechange(){
            let that = this;
            let mindex = that.moudelindex;
            that.wxArrdata[mindex].content.titlecolor ="background-color:"+that.titlecolor;
            that.$set(that.wxArrdata[mindex].content,'titlestyle',that.wxArrdata[mindex].content.titlestyle+';'+that.wxArrdata[mindex].content.titlecolor);
          }
,

 
  //图片广告
  dvertisingattribute() {
      let that = this;
      let id  = that.wxPageId;
      that.wxPageId = ++id ;
      that.wxArrdata.push(
        {id:that.wxPageId, componentId: 6, pageId: 431, content:{
          id: 1,
          componentName: "图片广告",
          componentIcon: "../img",
          imgagetxt:[{
            content: '',
            tugswiper_color:'#ffffff',      //背景颜色
            banerswiper_value:'',    //左右留白
            imgagestyle:'background-color:#fff'
          }]
        }, orderNum: 3});  
        that.mihuanadvertising_isshow = true;
        that.mihuanedit_isshow = false;
        that.mihuantitle_isshow = false;
        that.mihuanword_isshow = false;
        that.mihuancube_isshow = false;
        that.mihuanswiper_isshow = false;
        that.mihuannav_isshow = false;
        that.mihuangroup_isshow = false;
        that.mihuangoods_isshow = false;
    }, 
        //图片广告左右留白
        bnanerswiperevent(){
            let that = this;
            let mindex = that.moudelindex;
            // console.log(mindex);
            that.wxArrdata[mindex].content.banerswiper_value = that.banerswiper_value; 
            that.wxArrdata[mindex].content.imgagestyle =that.wxArrdata[mindex].content.tugswiper_color+';'+ "padding-left:" +that.wxArrdata[mindex].content.banerswiper_value +"px;padding-right:" +that.wxArrdata[mindex].content.banerswiper_value +"px;box-sizing: border-box;";
        },
        //图片广告背景颜色
        tugswipercolorevt(){
          let that = this;
          let mindex = that.moudelindex;
          that.wxArrdata[mindex].content.tugswiper_color ="background-color:"+that.tugswiper_color;
          that.$set(that.wxArrdata[mindex].content,'imgagestyle',that.wxArrdata[mindex].content.imgagestyle+';'+that.wxArrdata[mindex].content.tugswiper_color);
       
        },

  









   //富文本模块点击事件 componentID = 5
    editattribute() {
      let that = this;
      let id  = that.wxPageId;
      that.wxPageId = ++id ;
      that.wxArrdata.push(
          {id:that.wxPageId, componentId: 5, pageId: 431, content:{
            id: 1,
            componentName: "魔方",
            componentIcon: "../img",
            richdata:[{
              content: ''
            }]
           }, orderNum: 3});
      that.mihuanedit_isshow = true;
      that.mihuantitle_isshow = false;
      that.mihuanword_isshow = false;
      that.mihuancube_isshow = false;
      that.mihuanswiper_isshow = false;
      that.mihuannav_isshow = false;
      that.mihuangroup_isshow = false;
      that.mihuangoods_isshow = false;
      that.mihuanadvertising_isshow = false;
    },




  //商品分组模块
   grounpattribute() {
      let that = this;  
      let id  = that.wxPageId;
      that.wxPageId = ++id ;
      that.wxArrdata.push(
        {id:that.wxPageId, componentId: 8, pageId: 431, content:{
          id: 1,
          componentName: "商品分组",
          componentIcon: "../img",
          goodsgrounp:[{
            content: ''
          }]
        }, orderNum: 3});

      that.mihuangroup_isshow = true;
      that.mihuannav_isshow = false;
      that.mihuangoods_isshow = false;
      that.mihuanadvertising_isshow = false;
      that.mihuanedit_isshow = false;
      that.mihuantitle_isshow = false;
      that.mihuanword_isshow = false;
      that.mihuancube_isshow = false;
      that.mihuanswiper_isshow = false;
    },
  //图文导航
  imgnavattribute() {
      let that = this;
      let id  = that.wxPageId;
      that.wxPageId = ++id ;
      that.wxArrdata.push(
          {id:that.wxPageId, componentId: 9, pageId: 431, content:{
            id: 1,
            componentName: "图文导航",
            componentIcon: "../img",
            imgagetxt:[{
              content: ''
            }]
          }, orderNum: 3});       
      that.mihuannav_isshow = true;
      that.mihuangroup_isshow = false;
      that.mihuangoods_isshow = false;
      that.mihuanadvertising_isshow = false;
      that.mihuanedit_isshow = false;
      that.mihuantitle_isshow = false;
      that.mihuanword_isshow = false;
      that.mihuancube_isshow = false;
      that.mihuanswiper_isshow = false;
    },




   swiperevent() {
        let index = (this.mihuanswiper[0].id - 1);
        this.mihuanswiper[index].styleObj1 =  this.styleObj1;
        this.styleObj1 = "padding-left:" + this.swiper_value + "px;padding-right:" + this.swiper_value + "px;";
    },
     btnUp(index){
        var item = this.page.pages.indexPage.wxUserShopPageComponents[index];
        this.page.pages.indexPage.wxUserShopPageComponents.splice(index,1);
        this.page.pages.indexPage.wxUserShopPageComponents.unshift(item);
    },
    //标题


   

 
  

    
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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

  


    //魔方图片间隔
    cubeimgvevt() {},
  

    //轮播图图片上传
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
 
    swipercolorevt() {
      console.log(this.swiper_color);
      this.swipercolor = "background-color:" + this.swiper_color;
    },
   
    indicate() {
      console.log(this.swiperadio);
      this.swiperadio == 1
        ? (this.positition = "")
        : this.swiperadio == 2
        ? (this.positition = "outside")
        : this.swiperadio == 3
        ? (this.positition = "none")
        : (this.positition = "");
      // positition
    },
    send() {
      this.$http({
        method: "get",
        // url:'172.16.1.65:6065/wx/component/platform/get.do'
        url: "./data.json"
      })
        .then(res => {
          console.log(res.data);
          console.log(JSON.parse(res.data[0].propertyTree));
        })
        .catch(err => console.log(err));
    },
    xuxian() {
      this.dashed = " border: 1px dashed #5874d8;";
    },
    handleChange(value) {
      // 链接菜单
      console.log(value);
    },
    //上传图片
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },

 


  
  },
  components: {
    navbar,
    sidebar,
    // secnavbar
  },
  created() {
    let that = this;
    // that.cubedata = that.cubedataone;
  }
};
</script>
<style scoped>


.goodsgroup-main {
  padding: 0 !important;
}
.mh-groupliststyle .el-radio {
  display: inline-block;
  margin-bottom: 8px;
}
</style>

