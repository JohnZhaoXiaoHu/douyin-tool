//定义公共数据前缀（M：毛诗、P：peter、TF：滕飞）
const MIP = window.g.baseURL;
const PIP = window.g.PIP;
const NOROUTER = window.g.noRouter;
// const TIP = window.g.tfURL;
// const TFIP = window.g.tfURL;


//-------------------推客、渠道商、活动、优惠券-------------------
// 是否是线上正式环境
function isOnline(){
  if (window.g.baseURL=='https://saas.mihuanshop.com' || window.g.baseURL=='https://api.mihuanshop.com') {
    return true;
  } else {
    return false;
  }
}
const TIP         =  isOnline() ?  (window.g.PIP +'/live') : (window.g.testApiURL);
const TFIP        =  isOnline() ?  (window.g.PIP +'/live') : (window.g.tfURL);
const MSIP        =  isOnline() ?  (window.g.baseURL +'/live') : (window.g.msURL);
const PTIP        =  isOnline() ?  (window.g.PIP +'/live') : (window.g.tfURL);


const marketingIP =  isOnline() ?  (window.g.PIP +'/marketing') : (window.g.testApiURL);
const shopIP      =  isOnline() ?  (window.g.PIP +'/shop')      : (window.g.testApiURL);
const userIP      =  isOnline() ?  (window.g.PIP +'/user')      : (window.g.testApiURL);
const userMSIP    =  isOnline() ?  (window.g.baseURL +'/user')  : (window.g.testApiURL);
const orderIP     =  isOnline() ?  (window.g.PIP +'/order')     : (window.g.noRouter+'/order');
const financeIP   =  isOnline() ?  (window.g.PIP +'/finance')   : (window.g.noRouter+'/finance');

const userApiIP     =  isOnline() ?  (window.g.noRouter +'/user')   : (window.g.testApiURL);
const orderApiIP    =  isOnline() ?  (window.g.noRouter +'/order')  : (window.g.testApiURL+'/order');
const financeApiIP  =  isOnline() ?  (window.g.noRouter +'/finance'): (window.g.testApiURL+'/finance');
const marketingApiIP=  isOnline() ?  (window.g.noRouter +'/marketing') : (window.g.testApiURL);

const logIP         =  isOnline() ?  (window.g.PIP +'/log')         : (window.g.testApiURL);
const integralIP    =  isOnline() ?  (window.g.baseURL +'/integral'): (window.g.testApiURL);
const integralApiIP =  isOnline() ?  (window.g.noRouter): (window.g.testApiURL);

// https://api.mihuanshop.com/live/region/list

// 抖店端
const dydRegister       = PIP + '/dyd/register';        // 1.抖店注册
const dydLogin          = PIP + '/dyd/login';           // 2.抖店登录
const baseAuthorize     = PIP + '/base/authorize';      // 3.抖店授权
const dydShopPut        = PIP + '/dyd/shop/put';        // 4.抖店添加店铺
const dydShopCancel     = PIP + '/dyd/shop/auth/cancel';// 5.取消授权
const dydShopList       = PIP + '/dyd/shop/list/get';   // 6.获取店铺列表
const dydSuppliersList  = PIP + '/dyd/suppliers/get';   // 7.获取供应商列表
const dydSuppliersDetail = PIP + 'dyd/suppliers/detail/get'; // 8.获取供应商详情
// 供应商端（抖音）
const supplierRegister  = PTIP + '/supplier/register'; // 1.供应商注册
const supplierLogin     = PTIP + '/supplier/login';    // 2.供应商登录
const supplierBasegGet  = PTIP + '/supplier/base/get'; // 3.查询供应商认证信息
const supplierBasegPost = PTIP + '/supplier/base/post';// 4.提交供应商认证
// （滕飞）
const supplierProductAdd    = TFIP + '/supplier/t/product/add';    // 供应商添加商品
const supplierProductCopy   = TFIP + '/supplier/t/product/copy';   // 把供应商的商品复制到抖店
const supplierProductDetail = TFIP + '/supplier/t/product/detail'; // 商品详情
const supplierProductList   = TFIP + '/supplier/t/admin/list';     // 商品列表
const supplierGetShopCategory     = TFIP + '/supplier/t/dy/shop/getShopCategory';     // 类目列表接口
const supplierFreightTemplateList = TFIP + '/supplier/t/dy/freightTemplate/list';     // 运费模板查询

// 合作管理
const supplierCooperationPartnerShop= TFIP + '/supplier/t/cooperation/partnerShop'; //已合作店铺
const supplierCooperationApplyShop  = TFIP + '/supplier/t/cooperation/applyShop';   //申请合作店铺
const supplierCooperationAgree      = TFIP + '/supplier/t/cooperation/agree';       //同意合作
const supplierCooperationCancel     = TFIP + '/supplier/t/cooperation/cancel';      //终止合作
// 订单
const orderList       = MSIP + '/order/admin/list';                 //查询订单列表
const orderDetail     = MSIP + '/order/admin/detail';               //查询订单明细（订单详情）
const logisticsList   = MSIP + '/logistics/info/lgslist';           //查看物流
const orderStatusNum  = MSIP + '/order/admin/statusNum';            //查询订单各状态数量 
const orderExport     = MSIP + '/order/admin/export';               //订单导出 
const orderUploadfile = MSIP + '/logistics/order/admin/uploadfile'; //订单-批量发货 
const orderSend       = MSIP + '/order/admin/send';                 //订单-发货 
const orderAftersaleList = MSIP + '/order/aftersale/admin/list';    //售后订单列表
const orderReceive       = MSIP + '/order/aftersale/admin/receive'; //售后订单-商家已收货
const orderNote          = MSIP + '/order/admin/note';              //订单-修改卖家备注

// 收货地址
const addressAdd      = MSIP + '/logistics/address/admin/add';      //设置-收货地址-添加 
const addressUpdate   = MSIP + '/logistics/address/admin/update';   //设置-收货地址-修改 
const addressDetail   = MSIP + '/logistics/address/admin/detail';   //设置-收货地址-查看明细
const addressList     = MSIP + '/logistics/address/admin/list';     //设置-收货地址-查看列表
// 资源管理
const resourceAdd     = TFIP + '/resource/admin/add';     // 添加资源
const resourceDelete  = TFIP + '/resource/admin/delete';  // 删除资源 
const resourceList    = TFIP + '/resource/admin/list';    // 资源列表   
const resourceUpdate  = TFIP + '/resource/admin/update';  // 我的资源-修改



/**查询商品列表接口
 * post 方法 , 对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} param [请求时携带的参数]
*/

const getGoodsListApi = MIP+'/shop/shop/item/admin/list';  
const goodscategory = MIP + '/shop/shop/category/simplist';
const goodsCategoryList   = '/shop/category/simplist';
const editgoodsMethod = MIP + '/shop/shop/item/admin/all';  //编辑商品
const shopcatexiang = MIP + "/shop/shop/category/admin/list"; //商城分类详情
const addcategory = MIP + "/shop/shop/category/admin/add";//添加分类接口
const delectcategory = MIP + "/shop/shop/category/admin/delete"; //删除类型
const qycategory = MIP + "/shop/shop/category/admin/status";  //启用禁用
const editcategory = MIP + "/shop/shop/category/admin/update";  //分类编辑接口
const goodsshuixng = MIP + "/shop/shop/property/publiclist";  //查询共有属性 -- 发布商品  -- 规格名
const goodsguige = MIP + "/shop/shop/propertyvalue/simpleproplist"; //商品属性值列表
const copygoods = MIP + "/shop/shop/item/admin/copy"; //复制商品
const shopgrounplist = MIP + "/shop/shop/group/simpleList";//商品分组  
const editshopprice = MIP + "/shop/shop/sku/admin/batchUpdateSkus";   //商城修改价格
const mhgoodsgrounpadd = MIP + "/shop/shop/group/admin/add";    //新增
const mhgoodsgrounplist = MIP + "/shop/shop/group/admin/list";     //列表
const mhgoodsgrounpedit = MIP + "/shop/shop/group/admin/update";  
const myresedit = MIP + "/shop/shop/resource/admin/update";  
const selectGrounpList = MIP + "/shop/shop/resource/group/admin/list";
const addImgRes = MIP + "/shop/shop/resource/admin/add"; /**添加图片资源* */
const editResName = MIP + "/shop/shop/resource/group/admin/update"; //资源修改
const delectresdata = MIP+"/shop/shop/resource/admin/delete";//删除资源数据
const getgoodsmnote = MIP + "/shop/shop/sku/infos"; //获取商品信息戒空话
const goodsissueGoods = MIP + "/shop/shop/item/admin/add"; //发布商品
const getSupp = MIP + "/shop/shop/supplier/admin/listBySaas";
const goodsShopName = MIP + '/shop/shop/item/admin/update';
const goodsShopNameTwo = MIP + '/shop/shop/item/admin/name';
const delectgoodsApi = MIP + '/shop/shop/item/admin/delete';  //删除商品
const sortGoodsApi = MIP + '/shop/shop/item/admin/sort';  //排序
const issueGoodsApi = MIP +'/shop/shop/item/admin/isissue'; //批量上下架
const editgoodsCategory = MIP + '/shop/shop/item/admin/category';//批量修改分类
const goodsGrounpApi = MIP + '/shop/shop/item/admin/group';  // 批量修改分组
const delectgoods = MIP + '/shop/shop/item/admin/delete'; //删除商品
const goodsAllcategory = MIP + '/shop/shop/category/admin/all';//全部分类
const goodsanditApi = MIP + '/shop/shop/item/admin/audit';
const resGrounpTee = MIP + '/shop/shop/resource/group/admin/all';
const addgoodsGunp = MIP +'/shop/shop/resource/group/admin/add';
const shachuResGrounp = MIP +  '/shop/shop/resource/group/admin/delete'; //删除资源图片
const addgoodsResSon = MIP + '/shop/shop/resource/group/admin/add';
const imgresRught = MIP +'/shop/shop/resource/admin/list';  //资源图片列表
const editWangDescription = MIP + '/shop/shop/item/admin/description';
const addGoodsCategory = MIP + '/shop/shop/category/admin/add';;
const chaGoodsCategoryDetail = MIP + '/shop/shop/category/admin/detail'
const goodsNumber = MIP + '/shop/shop/item/admin/totalnum';
const goodsshopseeting = MIP + "/shop/shop/setting/admin/update"; 
const goodsseetingquery = MIP + "/shop/shop/setting/query";



/**查询订单列表接口
 * post 方法 , 对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} param [请求时携带的参数]
 */
const selectOrdecrList  = MIP + '/order/order/order/admin/list';/**查询订单列表 wei'tong*/
const safeguardOrder    = MIP + '/order/order/aftersale/admin/list';/*查询维权订单列表 */
const goodsseeting      = MIP + "/order/order/setting/admin/update";  //订单设置
const mhorderupodate    = MIP + "/order/order/order/admin/update";   //订单修改
const updataorderprice  = MIP + '/order/order/order/admin/update'; //修改价格
const orderexport       = MIP + '/order/order/order/admin/export'; //订单导出
const moenyAddress      = MIP + '/order/order/logistics/admin/uploadfile';//批量发货
const fhuomoenyAddress  = MIP + '/order/order/logistics/admin/shipments';//发货物流
const express           = NOROUTER + '/order/express/list';  //快递公司接口
const editorderDress    = MIP + '/order/order/order/admin/update';
const adminorderSetall  = MIP + '/order/order/setting/query';  //定单设置详情
const orderDetailMehod  = MIP + '/order/order/order/admin/detail'; //订单详情
const reqOrderNumber    = NOROUTER + '/order/order/admin/statusNum'; //订单统计数（状态码）
const orderxiugaiFa     = MIP + '/order/order/logistics/admin/updateNo';//修改发货
const weiquanorderAgree = MIP + '/order/order/aftersale/admin/agree'; //维权定单同意
const weiquanorderReject= MIP + '/order/order/aftersale/admin/reject';
const weiquanOrderTui   = MIP + '/order/order/aftersale/admin/refund';
const weiquanOKreceive  = MIP + '/order/order/aftersale/admin/receive'; //确认收货
const weiquanDelactorder= MIP + '/order/order/aftersale/admin/delete';
const weiquanDelacrmake = MIP + '/order/order/aftersale/admin/update';
const weiquanDelacdetail = MIP + '/order/order/aftersale/admin/detail';
const orderwuliu      = MIP + '/order/order/logistics/admin/lgslist'; //查看物流
const xiaofeiApi      = MIP + '/order/order/order/admin/expenseCapacity';//消费能力
const couponApi       = MIP + '/order/order/coupon/admin/list';//优惠券
const dayorderxse     = MIP + '/order/order/order/admin/day';
const senvenMethod    = MIP + '/order/order/marketing/group7/admin/list';//七人成团
const senvendetail    = MIP + '/order/order/marketing/group7/admin/detail'
const orderMingxi     = MIP + '/order/order/detail/admin/list';
const aftersaleNum    = MIP + '/order/order/aftersale/admin/day';

/**查询会员列表接口
 * post 方法 , 对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} param [请求时携带的参数]
 */
const vipList         = MIP + "/user/user/user/admin/list";         /**会员列表*/
const vipdengji       = MIP + "/user/user/grade/admin/list";      /* 会员等级列表*/
const setzhevipdengji = MIP + "/user/user/user/admin/grade";//设置会员等级
const setqudaoshang   = MIP + "/user/user/user/admin/ch";
const settuike        = MIP + "/user/user/user/admin/rcm";         /*设为推客*/
const vipdengjil      = MIP + "/user/user/ch/setting/detail";    /*会员等级*/
const addvipdengji    = MIP + "/user/user/grade/admin/add";    /*会员等级新增*/
const editvipdengji   = MIP + "/user/user/grade/admin/update";//修改会员等级
const vipdengjilistnew= MIP + "/user/user/grade/admin/list";//会员等级列表
const tuikedengji     = MIP + "/user/user/rcm/grade/admin/list"; //推客等级
const  qudaogoods     = MIP + "/user/user/ch/nickName";           //渠道商等级列表
const  settingvipdengji = MIP + "/user/user/setting/admin/update";//指定会员等级
const setUpren        = MIP + '/user/user/user/admin/superior';
const editvipNote     = MIP +'/user/user/user/admin/update';
const delectVipApi    = MIP + '/user/user/user/admin/delete';//删除会员
const qiyongstatusApi = MIP + '/user/user/user/admin/status';
const homevipMoney    = MIP + '/user/user/user/admin/expend';
const hometkMoney     = MIP +'/user/user/rcm/admin/cmsRank';//佣金
const homeqdMoney     = MIP +'/user/user/ch/admin/dealRank';
const vipDetailApi    = MIP + '/user/user/user/admin/detail';//会员详情
const vipsetingquery  = MIP + "/user/user/setting/detail";
const reqaddress      = MIP + '/user/user/region/list';
const seeVipdengjiDetail = MIP + '/user/user/grade/admin/detail';
const  vipexport      = MIP + '/user/user/user/admin/export';//会员导出
const anziduanExport  = MIP + '/user/user/setting/mngUserDetail'; //导出
const settingTx = MIP + '/user/user/setting/detail';
const settingSz = MIP + '/user/user/setting/admin/update';
const allZhi    = MIP + '/user/user/user/admin/descendantData';
const selectUp  = MIP + '/user/user/user/admin/recommend';


/**查询财务列表接口
 * post 方法 , 对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} param [请求时携带的参数]
 */
const tzyueMeth     = MIP + '/finance/finance/balance/log/admin/modify';//调整余额
const CommissionIp  = MIP + '/finance/finance/cms/log/admin/modify';    //调整佣金
const homeDatavip   = MIP + '/finance/finance/data/admin/index';
const CommissionApi = MIP + '/finance/finance/cmsrebate/admin/list';    //佣金明细
const balanceApi    = MIP + '/finance/finance/balance/log/admin/list';  //余额记录
const financeNum    = MIP + '/finance/finance/data/admin/visitDay';     //访问量
const orderfinance  = MIP + '/finance/finance/cmsrebate/admin/order'; //佣金信息

const financeList   = MIP + '/finance/finance/withdraw/admin/list';     //提现列表
const financeListTy = MIP + '/finance/finance/withdraw/admin/audit';    //提现同意
const financeListShTy = MIP + '/finance/finance/withdraw/admin/withdraw';//提现同意
const financetradeNo  = MIP + '/finance/finance/withdraw/admin/tradeNo';
const yongjinYeList   = MIP + '/finance/finance/cmstobalance/admin/list';
const yongjinYeListTy = MIP + '/finance/finance/cmstobalance/admin/audit';


//其他公共
const mh_regionAllList= 'http://api.chainfos.com/order/region/list23';  //区域列表（省/市）
const mh_regionList= 'https://api.mihuanshop.com/user/region/list';     //区域列表（省）
//NOROUTER
const sysbelNum   = NOROUTER +'/order/dict/type?t=28';//操作日志字典量
const sysbelNum14 = NOROUTER +'/order/dict/type?t=14'; //地址详情
const logList     = NOROUTER+'/log/operation/admin/list';
const sysbelNum12 =  NOROUTER + '/order/dict/type?t=12';
const qg_TYset = '/shop' +'/panicbuy/TYset';      //统一设置
const qg_TYsetHX = '/shop' +'/panicbuy/TYsetHX';  //统一设置回显


//商品 （ cm：commodity ）
const cm_skuInfos = '/shop' + "/sku/infos";                       //获取商品信息（商品列表）
const cm_selectBySpus = '/shop' + "/tPanicbuyConpon/selectBySpus";//查询spu
// 收益排行榜（phb：paiHangBang）
const phb_findAllnew = '/shop'+ "/panicbuy/activity/findAllnew"; //列表
const phb_insert = '/shop'+'/panicbuy/activity/insert';//添加
const phb_update = '/shop'+ "/panicbuy/activity/update";//编辑
const phb_delete = '/shop'+ "/panicbuy/activity/delete";//删除
//评论
const setting_detail= '/user/setting/detail';       // 财务设置
const setting_update= '/user/setting/admin/update'; // 设置（隐藏评论）
const em_invisible= '/order/evaluation/admin/invisible';  //评论（显示/隐藏）
const em_list= '/order/evaluation/admin/list';            //评论列表
const em_delete= '/order/evaluation/admin/delete';        //删除评论
const em_copy= '/order/evaluation/admin/copy';            //复制评论
const em_add= '/order/evaluation/admin/add';              //创建评论
const em_detail= '/order/evaluation/admin/detail';        //评论详情
const em_update= '/order/evaluation/admin/update';        //评论编辑
//运费模板
const ft_findAll =  '/shop'+'/panicbuy/freight/findAll'; //列表
const ft_delete  =  '/shop'+'/panicbuy/freight/delete';  //删除（列表中的一个）
const ft_copy    =  '/shop'+'/panicbuy/freight/copy';    //复制（列表中的一个）
const ft_update  =  '/shop'+'/panicbuy/freight/update';  //编辑
const ft_insert  =  '/shop'+'/panicbuy/freight/insert';  //创建
const ft_findById=  '/shop'+'/panicbuy/freight/findById';//查询详情
const ft_deletecontent =  '/shop'+'/panicbuy/freight/deletecontent'; //删除：指定区域运费设置
const ft_deletefree    =  '/shop'+'/panicbuy/freight/deletefree';    //删除：指定条件包邮

// 设置（通用、财务、通知）
const set_findById     = '/shop'+ "/panicbuy/w/findById";
const set_update       = '/shop'+ "/panicbuy/w/update";
const set_noticeInsert = '/shop'+ "/panicbuy/notice/insert"; //公告：添加
const set_noticeUpdate = '/shop'+ "/panicbuy/notice/update"; //公告：编辑
const set_noticeDelete = '/shop'+ "/panicbuy/notice/delete"; //公告：删除
const set_noticeFindAll= '/shop'+ "/panicbuy/notice/findAll";//公告：列表
const set_updateStatus    = '/shop'+ "/switch/button/updateStatus";     //直播：修改状态
const set_findButtonStatus= '/shop'+ "/switch/button/findButtonStatus"; //直播：回显
const set_domainAdd       = '/user'+ "/domain/admin/add";     //域名-申请域名
const set_domainFindOne   = '/user'+ "/domain/admin/findOne"; //域名-回显
const set_domainUpdate    = '/user'+ "/domain/admin/update";  //域名-修改
const set_settingUpdate   = '/user'+ "/setting/admin/update"; //后台-设置-设置接口
const set_settingDetail   = '/user'+ "/setting/detail";       //后台-会员设置-查询接口 
const set_infoAddOrUpdate   = '/user'+ "/info/admin/addOrUpdate";         //设置-平台信息
const set_infoFindBySuserId = '/user'+ "/info/admin/findBySuserId";       //查询saas平台信息
const set_findServiceMoney  = '/user'+ "/setting/detail";         //抽佣设置- 后台回显
const set_updateServiceMoney= '/user'+ "/setting/admin/update/";  //抽佣设置- 后台管理设置


//首页（埋点：bury points）
/*  二、后端接口：/track/admin/data
*/
const bp_trackAdd   =  '/log'+'/track/add';   
const bp_adminBasic  =  '/log'+'/track/admin/basic';   
const bp_adminData  =  '/log'+'/track/admin/data';   
// // 微店（shopMin）
// const sm_vshopList =  '/user'+'/vshop/admin/list';          //微店列表  
// const sm_findApply =  '/user'+'/vshop/admin/findApply';     //查看申请
// const sm_closeOropen =  '/user'+'/vshop/admin/closeOropen'; //店铺开关按钮
// 供应商（supplier）
const sp_add        =  '/user'+'/supplier/admin/add';     //添加
const sp_update     =  '/user'+'/supplier/admin/update';  //修改
const sp_detail     =  '/user'+'/supplier/admin/detail';  //明细
const sp_list       =  '/user'+'/supplier/admin/list';    //供应商列表
const sp_simplist   =  '/user'+'/supplier/admin/simplist';//列表（全平台可用）
const sp_distribute =  '/shop'+'/item/admin/distribute';  //分销

export default {
  // 资源管理
  resourceAdd: resourceAdd,
  resourceDelete: resourceDelete,
  resourceList: resourceList,
  resourceUpdate: resourceUpdate,
  //用户
  supplierRegister: supplierRegister,
  supplierLogin: supplierLogin,
  supplierBasegGet: supplierBasegGet,
  supplierBasegPost: supplierBasegPost,
  // 抖店端
  dydRegister: dydRegister,
  dydLogin: dydLogin,
  dydShopPut: dydShopPut,
  baseAuthorize: baseAuthorize,
  dydShopCancel: dydShopCancel,
  dydShopList: dydShopList,
  dydSuppliersList: dydSuppliersList,
  dydSuppliersDetail: dydSuppliersDetail,
  supplierProductAdd: supplierProductAdd,
  supplierProductCopy: supplierProductCopy,
  supplierProductDetail: supplierProductDetail,
  supplierProductList: supplierProductList,
  supplierGetShopCategory: supplierGetShopCategory,
  supplierFreightTemplateList: supplierFreightTemplateList,
  //合作管理
  supplierCooperationPartnerShop: supplierCooperationPartnerShop,
  supplierCooperationApplyShop: supplierCooperationApplyShop,
  supplierCooperationAgree: supplierCooperationAgree,
  supplierCooperationCancel: supplierCooperationCancel,
  //订单
  orderList: orderList,
  orderDetail: orderDetail,
  logisticsList: logisticsList,
  orderStatusNum: orderStatusNum,
  orderExport: orderExport,
  orderUploadfile: orderUploadfile,
  orderSend: orderSend,
  orderAftersaleList: orderAftersaleList,
  orderReceive: orderReceive,
  orderNote: orderNote,
  //收货地址
  addressAdd: addressAdd,
  addressUpdate: addressUpdate,
  addressDetail: addressDetail,
  addressList: addressList,
  // IP
  isOnline:isOnline,
  MIP:MIP,
  PIP:PIP,
  TIP:TIP,
  TFIP:TFIP,
  MSIP:MSIP,
  PTIP: PTIP,
  // MSIP:MSIP, 模块IP
  marketingIP:marketingIP,
  shopIP:shopIP,
  userIP:userIP,
  userMSIP:userMSIP,
  userApiIP: userApiIP,
  orderApiIP: orderApiIP,
  orderIP:orderIP,
  financeIP:financeIP,
  financeApiIP: financeApiIP,
  marketingApiIP: marketingApiIP,
  logIP: logIP,
  integralIP: integralIP,
  integralApiIP: integralApiIP,

  // 供应商
  sp_add: sp_add,
  sp_update: sp_update,
  sp_detail: sp_detail,
  sp_list: sp_list,
  sp_simplist: sp_simplist,
  sp_distribute, sp_distribute,
  // 运费模板
  ft_findAll:ft_findAll,
  ft_copy:ft_copy,
  ft_delete:ft_delete,
  ft_update:ft_update,
  ft_insert:ft_insert,
  ft_findById:ft_findById,
  ft_deletecontent:ft_deletecontent,
  ft_deletefree:ft_deletefree,
  mh_regionList:mh_regionList,
  mh_regionAllList:mh_regionAllList,
  setting_detail:setting_detail,
  setting_update:setting_update,
  // 评价管理
  em_invisible:em_invisible,
  em_list:em_list,
  em_delete:em_delete,
  em_copy:em_copy,
  em_add:em_add,
  em_detail:em_detail,
  em_update:em_update,
  // 埋点
  bp_trackAdd: bp_trackAdd,
  bp_adminBasic:bp_adminBasic,
  bp_adminData: bp_adminData,
  // 设置
  set_findById: set_findById,
  set_update: set_update,
  set_noticeInsert:set_noticeInsert,
  set_noticeUpdate:set_noticeUpdate,
  set_noticeDelete:set_noticeDelete,
  set_noticeFindAll:set_noticeFindAll,
  set_updateStatus:set_updateStatus,
  set_findButtonStatus:set_findButtonStatus,
  set_domainAdd: set_domainAdd,
  set_domainFindOne: set_domainFindOne,
  set_domainUpdate: set_domainUpdate,
  set_settingUpdate: set_settingUpdate,
  set_settingDetail: set_settingDetail,
  set_infoAddOrUpdate: set_infoAddOrUpdate,
  set_infoFindBySuserId: set_infoFindBySuserId,
  set_findServiceMoney: set_findServiceMoney,
  set_updateServiceMoney: set_updateServiceMoney,
  //
  phb_findAllnew: phb_findAllnew,
  phb_insert:phb_insert,
  phb_update:phb_update,
  phb_delete:phb_delete,
  qg_TYset:qg_TYset,
  qg_TYsetHX:qg_TYsetHX,
  cm_skuInfos:cm_skuInfos,
  cm_selectBySpus:cm_selectBySpus,

  // // 抢购
  // qg_TYsetUpdate:qg_TYsetUpdate,
  // qg_TYsetDelete:qg_TYsetDelete,
  // qg_TYsetInsert:qg_TYsetInsert,
  // qg_TYsetFindall:qg_TYsetFindall,
  // qg_nameAndTime:qg_nameAndTime,
  // qg_upordown:qg_upordown,
  // qg_doornot:qg_doornot,
  // qg_createPanicbuy:qg_createPanicbuy,
  // qg_thisrank:qg_thisrank,
  // qg_update:qg_update,
  // qg_delete:qg_delete,
  // qg_soldout:qg_soldout,
  // qg_soldup:qg_soldup,
  // qg_updatemore:qg_updatemore,
  // qg_deletemore:qg_deletemore,
  selectUp:selectUp,
  financetradeNo:financetradeNo,
  allZhi:allZhi,
  yongjinYeListTy:yongjinYeListTy,
  yongjinYeList:yongjinYeList,
  financeListShTy:financeListShTy,
  financeListTy:financeListTy,
  financeList:financeList,
  goodsseetingquery:goodsseetingquery,
  sysbelNum14:sysbelNum14,
  settingSz:settingSz,
  settingTx:settingTx,
  orderMingxi:orderMingxi,
  orderxiugaiFa:orderxiugaiFa,
  senvendetail:senvendetail,
  senvenMethod:senvenMethod,
  orderfinance:orderfinance,
  anziduanExport:anziduanExport,
  aftersaleNum:aftersaleNum,
  financeNum:financeNum,
  dayorderxse:dayorderxse,
  couponApi:couponApi,
  xiaofeiApi:xiaofeiApi,
  balanceApi:balanceApi,
  CommissionApi:CommissionApi,
  vipexport:vipexport,
  seeVipdengjiDetail:seeVipdengjiDetail,
  reqaddress:reqaddress,
  vipsetingquery:vipsetingquery,
  imgresRught:imgresRught,
  addgoodsResSon:addgoodsResSon,
  shachuResGrounp:shachuResGrounp,
  addgoodsGunp:addgoodsGunp,
  resGrounpTee:resGrounpTee,
  goodsanditApi:goodsanditApi,
  goodsAllcategory:goodsAllcategory,
  vipDetailApi:vipDetailApi,
  homeqdMoney:homeqdMoney,
  hometkMoney:hometkMoney,
  homevipMoney:homevipMoney,
  weiquanDelacdetail:weiquanDelacdetail,
  weiquanDelacrmake:weiquanDelacrmake,
  weiquanDelactorder:weiquanDelactorder,
  weiquanOKreceive:weiquanOKreceive,
    weiquanOrderTui:weiquanOrderTui,
    weiquanorderAgree:weiquanorderAgree,
    weiquanorderReject:weiquanorderReject,
    getGoodsListApi: getGoodsListApi,
    selectOrdecrList:selectOrdecrList,
    safeguardOrder:safeguardOrder,
    selectGrounpList:selectGrounpList,
    goodscategory:goodscategory,
    goodsCategoryList: goodsCategoryList,
    vipList:vipList,
    vipdengji:vipdengji,
    setqudaoshang:setqudaoshang,
    settuike:settuike,
    vipdengjil:vipdengjil,
    addImgRes:addImgRes,
    editResName:editResName,
    delectresdata:delectresdata,
    tuikedengji:tuikedengji,
    shopcatexiang:shopcatexiang,
    addcategory:addcategory,
    delectcategory:delectcategory,
    qycategory:qycategory,
    editcategory:editcategory,
    addvipdengji:addvipdengji,
    editvipdengji:editvipdengji,
    //会员等级
    vipdengjilistnew:vipdengjilistnew,
    //设置用户等级
    setzhevipdengji:setzhevipdengji,
    //查询共有属性
    goodsshuixng:goodsshuixng,
    goodsguige:goodsguige,
    //复制商品
    copygoods:copygoods,
    shopgrounplist:shopgrounplist,
    editshopprice:editshopprice,
    mhgoodsgrounpadd:mhgoodsgrounpadd,
    mhgoodsgrounplist:mhgoodsgrounplist,
    mhgoodsgrounpedit:mhgoodsgrounpedit,
    myresedit:myresedit,
    //商城设置
    goodsshopseeting:goodsshopseeting,
    goodsseeting:goodsseeting,
    getgoodsmnote:getgoodsmnote,
    qudaogoods:qudaogoods,
    settingvipdengji:settingvipdengji,
    mhorderupodate:mhorderupodate,
    goodsissueGoods:goodsissueGoods,
    getSupp:getSupp,
    updataorderprice:updataorderprice,
    orderexport:orderexport,
    moenyAddress:moenyAddress,
    setUpren:setUpren,
    tzyueMeth:tzyueMeth,
    CommissionIp:CommissionIp,
    editvipNote:editvipNote,
    goodsShopName:goodsShopName,
    express:express,
    editorderDress:editorderDress,
    fhuomoenyAddress:fhuomoenyAddress,
    delectgoods:delectgoods,
    adminorderSetall:adminorderSetall,
    editgoodsMethod:editgoodsMethod,
    delectgoodsApi:delectgoodsApi,
    sortGoodsApi:sortGoodsApi,
    issueGoodsApi:issueGoodsApi,
    editgoodsCategory:editgoodsCategory,
    goodsGrounpApi:goodsGrounpApi,
    delectVipApi:delectVipApi,
    qiyongstatusApi:qiyongstatusApi,
    orderDetailMehod:orderDetailMehod,
    orderwuliu:orderwuliu,
    editWangDescription:editWangDescription,
    goodsShopNameTwo:goodsShopNameTwo,
    addGoodsCategory:addGoodsCategory,
    chaGoodsCategoryDetail:chaGoodsCategoryDetail,
    reqOrderNumber:reqOrderNumber,
    goodsNumber:goodsNumber,
    homeDatavip:homeDatavip,
    sysbelNum:sysbelNum,
    logList:logList
}
