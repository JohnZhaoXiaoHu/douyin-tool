
let routes=[
  {path:'/goods/test',component:resolve => require(['@/components/goods/test'],resolve)},
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
  
  {path:'/goodslist/goods_freightTemplate',component:resolve => require(['@/components/goods/goods_freightTemplate'],resolve)},
  {path:'/goodslist/goods_freightTemplateCreate',component:resolve => require(['@/components/goods/goods_freightTemplateCreate'],resolve)},
  {path:'/goodslist/goodsdetail/:id',component: resolve => require(['@/components/goods/goodsdetail'],resolve)},
  {path:'/goodsedit/:id',component:resolve => require(['@/components/goods/goodsedit'],resolve)},


  {path:'/order/orderdetail',component:resolve => require(['@/components/mhorder/orderdetail'],resolve)},
  // {path:'/order/orderdetail/:id',component:resolve => require(['@/components/mhorder/orderdetail'],resolve)},
  {path:'/order',component:resolve => require(['@/components/mhorder/shoporder'],resolve)},
  {path:'/orderset',component:resolve => require(['@/components/mhorder/orderset'],resolve)},
  {path:'/ordersafe',component:resolve => require(['@/components/mhorder/ordersafe'],resolve)},
  {path:'/orderbatch',component:resolve => require(['@/components/mhorder/orderbatch'],resolve)},
  {path:'/orderevaluate',component:resolve => require(['@/components/mhorder/orderevaluate'],resolve)},//评价
  {path:'/ordersafeDetail/:id',component:resolve => require(['@/components/mhorder/ordersafeDetail'],resolve)},


  {path:'/wxset',component:resolve => require(['@/components/miniprogram/wxset'],resolve)},
  {path:'/wxpath',component:resolve => require(['@/components/miniprogram/wxpath'],resolve)},
  // 设置
  // {path:'/mhset/',component:resolve => require(['@/components/mhset/set_platformInfo'],resolve)},
  // {path:'/mhset/set_common',component:resolve => require(['@/components/mhset/set_common'],resolve)},
  {path:'/mhset',component: resolve => require(['@/components/mhset/set_cooperativeManagement'],resolve)},
  {path:'/mhset/set_shippingAddress',component:resolve => require(['@/components/mhset/set_shippingAddress'],resolve)},
  {path:'/mhset/set_shopManage',component:resolve => require(['@/components/mhset/set_shopManage'],resolve)},
  {path:'/mhset/set_goodslist',component:resolve => require(['@/components/mhset/set_goodslist'],resolve)},
  //数据
  {path:'/crsdata',component:resolve => require(['@/components/crsdata/goodsData'],resolve)},
  {path:'/resimg',component:resolve => require(['@/components/resource/imgsrc'],resolve)},
  {path:'/upshop',component:resolve => require(['@/components/resource/upshop'],resolve)},
  {path:'/goodsSpec',component:resolve => require(['@/components/resource/goodsSpec'],resolve)},
  {path:'/mhmodule',component:resolve => require(['@/components/mhmodule'],resolve)},
  //peter
  {path:'/module',component:resolve => require(['@/components/module/index'],resolve)},
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
  //供应商
  {path:'/supplier',component:resolve => require(['@/components/supplier/supplierList'],resolve)},
  {path:'/supplier/supplierCreate',component:resolve => require(['@/components/supplier/supplierCreate'],resolve)},



  {path:'/',redirect: '/login'},
  {path:'*',component:resolve => require(['@/components/error'],resolve)},

];

export default {routes}