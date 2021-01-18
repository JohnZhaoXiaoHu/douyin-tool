
let routes=[
  {path:'/goods/test',component:resolve => require(['@/components/goods/test'],resolve)},
  {path:'/',redirect: '/login'},
  {path:'*',component:resolve => require(['@/components/error'],resolve)},
  {path:'/login',component:resolve => require(['@/components/login'],resolve)},

  // 首页
  // {path:'/home',component:resolve => require(['@/components/home'],resolve), meta: { requiresAuth: true }},
  {path:'/home',component:resolve => require(['@/components/home/hm_BasicIndicators'],resolve)},
  {path:'/home/hm_pageBasicData',component:resolve => require(['@/components/home/hm_pageBasicData'],resolve)},
  {path:'/home/hm_userBehaviorAnalysis',component:resolve => require(['@/components/home/hm_userBehaviorAnalysis'],resolve)},
 

  //商品
  {path:'/goodslist/goodsgroupmodule',component:resolve => require(['@/components/goods/goodsgroupmodule'],resolve)},
  {path:'/goodslist/goodsresource',component:resolve => require(['@/components/goods/goodsresource'],resolve)},
  {path:'/goodslist/goodscategory',component:resolve => require(['@/components/goods/goodscategory'],resolve)},
  {path:'/goodslist/goodsimport',component:resolve => require(['@/components/goods/goodsimport'],resolve)},
  {path:'/goodslist/goodsgroup',component:resolve => require(['@/components/goods/goodsgroup'],resolve)},
  {path:'/goodslist/goodsissue',component:resolve => require(['@/components/goods/goodsissue'],resolve)},
  {path:'/goodslist/goodsset',component:resolve => require(['@/components/goods/goodsset'],resolve)},
  {path:'/goodslist',component:resolve => require(['@/components/goods/goodslist'],resolve)},
  {path:'/goodslist/goodscategoryDetail/:id',component:resolve => require(['@/components/goods/goodscategoryDetail'],resolve)},
  {path:'/goodslist/goods_evaluateManager',component:resolve => require(['@/components/goods/goods_evaluateManager'],resolve)},
  {path:'/goodslist/goods_evaluateManagerCreate',component:resolve => require(['@/components/goods/goods_evaluateManagerCreate'],resolve)},
  {path:'/goodslist/goods_evaluateManagerEdit',component:resolve => require(['@/components/goods/goods_evaluateManagerEdit'],resolve)},
  {path:'/goodslist/goods_freightTemplate',component:resolve => require(['@/components/goods/goods_freightTemplate'],resolve)},
  {path:'/goodslist/goods_freightTemplateCreate',component:resolve => require(['@/components/goods/goods_freightTemplateCreate'],resolve)},
  {path:'/goodslist/select_goodslist',component:resolve => require(['@/components/goods/select_goodslist'],resolve)},
  {path:'/goodslist/select_goodsissue',component:resolve => require(['@/components/goods/select_goodsissue'],resolve)},
  {path:'/goodslist/select_goodscategory',component:resolve => require(['@/components/goods/select_goodscategory'],resolve)},
  {path:'/goodslist/select_goodscategoryDetail/:id',component:resolve => require(['@/components/goods/select_goodscategoryDetail'],resolve)},

  // 会员
  {path:'/memberlist/membercentre',component:resolve => require(['@/components/member/membercentre'],resolve)},
  {path:'/memberlist/membergrade',component:resolve => require(['@/components/member/membergrade'],resolve)},
  {path:'/memberlist/memberset',component:resolve => require(['@/components/member/memberset'],resolve)},
  {path:'/memberlist',component:resolve => require(['@/components/member/memberlist'],resolve)},
  {path:'/memberlist/memberDetail/:id',component:resolve => require(['@/components/member/memberDetail'],resolve)},
  {path:'/memberlist/mb_IntegralSetting',component:resolve => require(['@/components/member/mb_IntegralSetting'],resolve)},
  {path:'/memberlist/mb_IntegralManage',component:resolve => require(['@/components/member/mb_IntegralManage'],resolve)},

  {path:'/wxstore',component:resolve => require(['@/components/store/wxstore'],resolve)},
  {path:'/wxstore/custom',component:resolve => require(['@/components/store/custom'],resolve)},
  {path:'/wxstore/storenav',component:resolve => require(['@/components/store/storenav'],resolve)},
  {path:'/wxstore/storemsg',component:resolve => require(['@/components/store/storemsg'],resolve)},

  {path:'/order/orderdetail/:id',component:resolve => require(['@/components/mhorder/orderdetail'],resolve)},
  {path:'/order',component:resolve => require(['@/components/mhorder/shoporder'],resolve)},
  {path:'/orderset',component:resolve => require(['@/components/mhorder/orderset'],resolve)},
  {path:'/ordersafe',component:resolve => require(['@/components/mhorder/ordersafe'],resolve)},
  {path:'/orderbatch',component:resolve => require(['@/components/mhorder/orderbatch'],resolve)},
  {path:'/orderevaluate',component:resolve => require(['@/components/mhorder/orderevaluate'],resolve)},//评价
  {path:'/ordersafeDetail/:id',component:resolve => require(['@/components/mhorder/ordersafeDetail'],resolve)},
  {path:'/memberlist/createOrder/:id',component:resolve => require(['@/components/member/createOrder'],resolve)},

   
  
  {path:'/channel',component: resolve => require(['@/components/channel/chmanage'],resolve)},
  {path:'/chset',component: resolve => require(['@/components/channel/chset'],resolve)},
  {path:'/chname',component: resolve => require(['@/components/channel/chname'],resolve)},
  {path:'/chapply',component: resolve => require(['@/components/channel/chapply'],resolve)},
  {path:'/chmarket',component: resolve => require(['@/components/channel/chmarket'],resolve)},
  {path:'/chitemset',component: resolve => require(['@/components/channel/chitemset'],resolve)},
  {path:'/chrecommend',component: resolve => require(['@/components/channel/chrecommend'],resolve)},
  {path:'/chperf',component: resolve => require(['@/components/channel/chperf'],resolve)},

  {path:'/twker',component: resolve => require(['@/components/twker/twlist'],resolve)},
  {path:'/twapply',component: resolve => require(['@/components/twker/twapply'],resolve)},
  {path:'/twinshop',component: resolve => require(['@/components/twker/twinshop'],resolve)},
  {path:'/twname',component: resolve => require(['@/components/twker/twname'],resolve)},
  {path:'/twset',component: resolve => require(['@/components/twker/twset'],resolve)},
  {path:'/twrank',component: resolve => require(['@/components/twker/twrank'],resolve)},
  {path:'/wxset',component:resolve => require(['@/components/miniprogram/wxset'],resolve)},
  {path:'/wxpath',component:resolve => require(['@/components/miniprogram/wxpath'],resolve)},
  
  // 设置
  {path:'/mhset/',component:resolve => require(['@/components/mhset/set_platformInfo'],resolve)},
  {path:'/mhset/set_common',component:resolve => require(['@/components/mhset/set_common'],resolve)},
  {path:'/mhset/cashconfig',component: resolve => require(['@/components/mhset/cashconfig'],resolve)},
  {path:'/mhset/permission/:id',component:resolve => require(['@/components/mhset/permission'],resolve)},
  {path:'/mhset/set_gathering',component:resolve => require(['@/components/mhset/set_gathering'],resolve)},
  {path:'/mhset/payment/roleadd',component:resolve => require(['@/components/mhset/role/roleadd'],resolve)},
  {path:'/mhset/role/roleedit/:id',component:resolve => require(['@/components/mhset/role/roleedit'],resolve)},
  {path:'/mhset/logs',component:resolve => require(['@/components/mhset/logs'],resolve)},
  {path:'/mhset/set_notify',component:resolve => require(['@/components/mhset/set_notify'],resolve)},
  {path:'/mhset/set_domain',component:resolve => require(['@/components/mhset/set_domain'],resolve)},
  {path:'/mhset/set_takeCommission',component:resolve => require(['@/components/mhset/set_takeCommission'],resolve)},

  
  {path:'/goodslist/goodsdetail/:id',component: resolve => require(['@/components/goods/goodsdetail'],resolve)},
  {path:'/goodslist/select_goodsdetail/:id',component: resolve => require(['@/components/goods/select_goodsdetail'],resolve)},
  {path:'/goodsedit/:id',component:resolve => require(['@/components/goods/goodsedit'],resolve)},
  {path:'/menberDetail/:id',component:resolve => require(['@/components/member/menberDetail'],resolve)},
  {path:'/txmannge',component:resolve => require(['@/components/money/txmannge'],resolve)},
  {path:'/czmannge',component:resolve => require(['@/components/money/czmannge'],resolve)},
  {path:'/yymannge',component:resolve => require(['@/components/money/yymannge'],resolve)},
  {path:'/balance',component:resolve => require(['@/components/money/balance'],resolve)},
  {path:'/yjmannge',component:resolve => require(['@/components/money/yjmannge'],resolve)},

  //数据
  {path:'/crsdata',component:resolve => require(['@/components/crsdata/goodsData'],resolve)},
  {path:'/resimg',component:resolve => require(['@/components/resource/imgsrc'],resolve)},
  {path:'/upshop',component:resolve => require(['@/components/resource/upshop'],resolve)},
  {path:'/goodsSpec',component:resolve => require(['@/components/resource/goodsSpec'],resolve)},
  {path:'/mhmodule',component:resolve => require(['@/components/mhmodule'],resolve)},

  //peter
  {path:'/module',component:resolve => require(['@/components/module/index'],resolve)},
  {path:'/wxstore/custom/add',component:resolve => require(['@/components/module/add'],resolve)},
  {path:'/wxstore/custom/edit/:id',component:resolve => require(['@/components/module/edit'],resolve)},

  {path:'/goods/goodsgroup/addgoodsgroup',component:resolve => require(['@/components/module/addgoodsgroup'],resolve)},

  // //营销 marknav
  // {path:'/marketing',component:resolve => require(['@/components/marketing/marketing'],resolve)},
  // {path:'/marketing/coupon',component:resolve => require(['@/components/marketing/coupon/coupon'],resolve)},
  // {path:'/marketing/coupon/CouponDetail',component:resolve => require(['@/components/marketing/coupon/CouponDetail'],resolve)},
  // {path:'/marketing/coupon/giftPack',component:resolve => require(['@/components/marketing/coupon/giftPack'],resolve)},
  // {path:'/marketing/coupon/giftPackCreate',component:resolve => require(['@/components/marketing/coupon/giftPackCreate'],resolve)},

  // // 购物送又优惠券
  // {path:'/marketing/coupon/shoppingcoupon',component:resolve => require(['@/components/marketing/coupon/shoppingcoupon'],resolve)},
  // {path:'/marketing/coupon/followcoupon',component:resolve => require(['@/components/marketing/coupon/followcoupon'],resolve)},
  // // 新人红包
  // {path:'/marketing/newman',component:resolve => require(['@/components/marketing/redbao/newman'],resolve)},
  // {path:'/marketing/creatredb',component:resolve => require(['@/components/marketing/redbao/creatredb'],resolve)},
  // // 拼团
  // {path:'/marketing/collage',component:resolve => require(['@/components/marketing/collage/collage'],resolve)},
  // {path:'/marketing/collage/creatcollage',component:resolve => require(['@/components/marketing/collage/creatcollage'],resolve)},
  // // 砍价
  // {path:'/marketing/kanprice/creatBargain',component:resolve => require(['@/components/marketing/kanprice/creatBargain'],resolve)},
  // {path:'/marketing/kanprice/bargain',component:resolve => require(['@/components/marketing/kanprice/bargain'],resolve)},
  // // 秒杀
  // {path:'/marketing/miaoSha',
  // name: 'miaoSha', 
  // component:resolve => require(['@/components/marketing/miaoSha/miaoSha'],resolve)
  // },
  // // {path:'/marketing/miaoSha/ms_create',component:resolve => require(['@/components/marketing/miaoSha/ms_create'],resolve)},
  // {path:'/marketing/miaoSha/ms_create',
  //   name: 'ms_create', 
  //   component:resolve => require(['@/components/marketing/miaoSha/ms_create'],resolve),
  //   meta: {
  //     keepAlive: true,
  //     isUseCache: false, // 默认不缓存
  //     title: '创建秒杀'
  //   }
  // },
  // {path:'/marketing/miaoSha/ms_goodsManage',
  // name: 'ms_goodsManage', 
  // component:resolve => require(['@/components/marketing/miaoSha/ms_goodsManage'],resolve)
  // },
  // // 邀请好友
  // {path:'/marketing/taskPlugin',component:resolve => require(['@/components/marketing/taskPlugin/inviteFriends'],resolve)},
  // {path:'/marketing/taskPlugin/itCreate',component:resolve => require(['@/components/marketing/taskPlugin/itCreate'],resolve)},


  // //抢购活动（夺宝：上下架、创建、统一设置） shangxiajia qiangGouList
  // {path:'/marketing/qiangGouing',component:resolve => require(['@/components/marketing/qiangGouing'],resolve)},
  // {path:'/marketing/qiangGou/qiang_gou',component:resolve => require(['@/components/marketing/qiangGou/qiang_gou'],resolve)},
  // {path:'/marketing/qiangGou/chaung_jian',component:resolve => require(['@/components/marketing/qiangGou/chaung_jian'],resolve)},
  // {path:'/marketing/qiangGou/setting_page',component:resolve => require(['@/components/marketing/qiangGou/setting_page'],resolve)},
  // {path:'/marketing/qiangGou/edit_activity',component:resolve => require(['@/components/marketing/qiangGou/edit_activity'],resolve)},
  // {path:'/marketing/qiangGou/earningsRank',component:resolve => require(['@/components/marketing/qiangGou/earningsRank'],resolve)},
    

  // //推客（新）
  // {path:'/twitter',component:resolve => require(['@/components/twitter/pg_twitterList'],resolve)},
  // {path:'/twitter/pgLevel',component:resolve => require(['@/components/twitter/pgLevel'],resolve)},
  // {path:'/twitter/pgSetting',component:resolve => require(['@/components/twitter/pgSetting'],resolve)},
  // {path:'/twitter/pgCard',component:resolve => require(['@/components/twitter/pgCard'],resolve)},
  // {path:'/twitter/pgApply',component:resolve => require(['@/components/twitter/pgApply'],resolve)},
  // {path:'/twitter/pgShopInShop',component:resolve => require(['@/components/twitter/pgShopInShop'],resolve)},
  // {path:'/twitter/pgMoneyTable',component:resolve => require(['@/components/twitter/pgMoneyTable'],resolve)},
  // {path:'/twitter/pgNextLevel',component:resolve => require(['@/components/twitter/pgNextLevel'],resolve)},
  // {path:'/twitter/pgDetail',component:resolve => require(['@/components/twitter/pgDetail'],resolve)},
// //渠道商（新）
// {path:'/ChannelBusiness',component:resolve => require(['@/components/ChannelBusiness/ChannelBusinessList'],resolve)},
// {path:'/ChannelBusiness/cb_detail',component:resolve => require(['@/components/ChannelBusiness/cb_detail'],resolve)},
// {path:'/ChannelBusiness/cb_apply',component:resolve => require(['@/components/ChannelBusiness/cb_apply'],resolve)},
// {path:'/ChannelBusiness/cb_award',component:resolve => require(['@/components/ChannelBusiness/cb_award'],resolve)},
// {path:'/ChannelBusiness/cb_card',component:resolve => require(['@/components/ChannelBusiness/cb_card'],resolve)},
// {path:'/ChannelBusiness/cb_moneyTable',component:resolve => require(['@/components/ChannelBusiness/cb_moneyTable'],resolve)},
// {path:'/ChannelBusiness/cb_nextLevel',component:resolve => require(['@/components/ChannelBusiness/cb_nextLevel'],resolve)},
// {path:'/ChannelBusiness/cb_performanceStatistics',component:resolve => require(['@/components/ChannelBusiness/cb_performanceStatistics'],resolve)},
// {path:'/ChannelBusiness/cb_referralBonus',component:resolve => require(['@/components/ChannelBusiness/cb_referralBonus'],resolve)},
// {path:'/ChannelBusiness/cb_resultsList',component:resolve => require(['@/components/ChannelBusiness/cb_resultsList'],resolve)},
// {path:'/ChannelBusiness/cb_settting',component:resolve => require(['@/components/ChannelBusiness/cb_settting'],resolve)},
// {path:'/ChannelBusiness/cb_teamPerformanceSetting',component:resolve => require(['@/components/ChannelBusiness/cb_teamPerformanceSetting'],resolve)},
// // {path:'/ChannelBusiness/cb_EditChannelBusiness',component:resolve => require(['@/components/ChannelBusiness/cb_EditChannelBusiness'],resolve)},
// {path:'/ChannelBusiness/cb_InventoryManage',component:resolve => require(['@/components/ChannelBusiness/cb_InventoryManage'],resolve)},


  // zm测试
  {path:'/zmTest',          component:resolve => require(['@/components/zmTest/zmTestList'],resolve)},
  {path:'/zmTest/aaTest',   component:resolve => require(['@/components/zmTest/aaTest'],resolve)},
  {path:'/zmTest/bbTest',   component:resolve => require(['@/components/zmTest/bbTest'],resolve)},
  {path:'/zmTest/ccTest',   component:resolve => require(['@/components/zmTest/ccTest'],resolve)},
  {path:'/zmTest/zm_ECharts',   component:resolve => require(['@/components/zmTest/zm_ECharts'],resolve)},
  {path:'/zmTest/zm_elupload',  component:resolve => require(['@/components/zmTest/zm_elupload'],resolve)},
  {path:'/zmTest/zm_tableView', component:resolve => require(['@/components/zmTest/zm_tableView'],resolve)},
  {path:'/zmTest/zm_elTree',    component:resolve => require(['@/components/zmTest/zm_elTree'],resolve)},
  {path:'/zmTest/zm_elCheckbox',component:resolve => require(['@/components/zmTest/zm_elCheckbox'],resolve)},
  
  
  // //七人成团
  // {path:'/marketing/sevent',component:resolve => require(['@/components/marketing/sevent/seven'],resolve)},
  // {path:'/marketing/sevent/detail/:id',component:resolve => require(['@/components/marketing/sevent/detail'],resolve)},

  //微店 
  {path:'/shopMin',component:resolve => require(['@/components/shopMin/shopMinList'],resolve)},
  //供应商
  {path:'/supplier',component:resolve => require(['@/components/supplier/supplierList'],resolve)},
  {path:'/supplier/supplierCreate',component:resolve => require(['@/components/supplier/supplierCreate'],resolve)},

  //财务模块
  // {path:'/Finance/finance',component:resolve => require(['@/components/Finance/finance'],resolve)},
  {path:'/Finance/commissionRecord',component:resolve => require(['@/components/Finance/commissionRecord'],resolve)},
  {path:'/Finance/balance',component:resolve => require(['@/components/Finance/balance'],resolve)},
  {path:'/Finance/commission',component:resolve => require(['@/components/Finance/commission'],resolve)},
  //提现管理（会员）
  {path:'/Finance/finance_member',component:resolve => require(['@/components/Finance/finance_member'],resolve)},
  //提现管理（微店）  
  {path:'/Finance/finance_shopMin',component:resolve => require(['@/components/Finance/finance_shopMin'],resolve)},
  //提现管理（供应商）  
  {path:'/Finance/finance_supplier',component:resolve => require(['@/components/Finance/finance_supplier'],resolve)},
  //积分记录  
  {path:'/Finance/finance_integral',component:resolve => require(['@/components/Finance/finance_integral'],resolve)},


  // //素材模块
  // {path:'/marketing/source/:id',component:resolve => require(['@/components/marketing/source/source'],resolve)},
  // {path:'/marketing/activityMaterial',component:resolve => require(['@/components/marketing/source/activityMaterial'],resolve)},
  // {path:'/marketing/goodsMaterial/:id',component:resolve => require(['@/components/marketing/source/goodsMaterial'],resolve)},
  

];

// export default routes;
export default {routes}