
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
  // {path:'/goodslist/select_goodslist',component:resolve => require(['@/components/goods/select_goodslist'],resolve)},
  // {path:'/goodslist/select_goodsissue',component:resolve => require(['@/components/goods/select_goodsissue'],resolve)},
  // {path:'/goodslist/select_goodscategory',component:resolve => require(['@/components/goods/select_goodscategory'],resolve)},
  // {path:'/goodslist/select_goodscategoryDetail/:id',component:resolve => require(['@/components/goods/select_goodscategoryDetail'],resolve)},

  {path:'/order/orderdetail/:id',component:resolve => require(['@/components/mhorder/orderdetail'],resolve)},
  {path:'/order',component:resolve => require(['@/components/mhorder/shoporder'],resolve)},
  {path:'/orderset',component:resolve => require(['@/components/mhorder/orderset'],resolve)},
  {path:'/ordersafe',component:resolve => require(['@/components/mhorder/ordersafe'],resolve)},
  {path:'/orderbatch',component:resolve => require(['@/components/mhorder/orderbatch'],resolve)},
  {path:'/orderevaluate',component:resolve => require(['@/components/mhorder/orderevaluate'],resolve)},//评价
  {path:'/ordersafeDetail/:id',component:resolve => require(['@/components/mhorder/ordersafeDetail'],resolve)},
  {path:'/supplierOrder',component:resolve => require(['@/components/mhorder/supplierOrder'],resolve)},

  {path:'/memberlist/createOrder/:id',component:resolve => require(['@/components/member/createOrder'],resolve)},
  {path:'/wxset',component:resolve => require(['@/components/miniprogram/wxset'],resolve)},
  {path:'/wxpath',component:resolve => require(['@/components/miniprogram/wxpath'],resolve)},
  
  // 设置
  {path:'/mhset/',component:resolve => require(['@/components/mhset/set_platformInfo'],resolve)},
  {path:'/mhset/set_common',component:resolve => require(['@/components/mhset/set_common'],resolve)},
  {path:'/mhset/set_cooperativeManagement',component: resolve => require(['@/components/mhset/set_cooperativeManagement'],resolve)},
  {path:'/mhset/set_shippingAddress',component:resolve => require(['@/components/mhset/set_shippingAddress'],resolve)},
  {path:'/mhset/set_shopManage',component:resolve => require(['@/components/mhset/set_shopManage'],resolve)},
  {path:'/mhset/set_goodslist',component:resolve => require(['@/components/mhset/set_goodslist'],resolve)},
  // {path:'/mhset/permission/:id',component:resolve => require(['@/components/mhset/permission'],resolve)},
  // {path:'/mhset/payment/roleadd',component:resolve => require(['@/components/mhset/role/roleadd'],resolve)},
  // {path:'/mhset/role/roleedit/:id',component:resolve => require(['@/components/mhset/role/roleedit'],resolve)},
  // {path:'/mhset/set_notify',component:resolve => require(['@/components/mhset/set_notify'],resolve)},
  // {path:'/mhset/set_domain',component:resolve => require(['@/components/mhset/set_domain'],resolve)},
  // {path:'/mhset/set_gathering',component:resolve => require(['@/components/mhset/set_gathering'],resolve)},

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
  
  //微店 
  {path:'/shopMin',component:resolve => require(['@/components/shopMin/shopMinList'],resolve)},
  //供应商
  {path:'/supplier',component:resolve => require(['@/components/supplier/supplierList'],resolve)},
  {path:'/supplier/supplierCreate',component:resolve => require(['@/components/supplier/supplierCreate'],resolve)},

];

export default {routes}