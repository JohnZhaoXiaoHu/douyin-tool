//定义公共数据前缀（M：毛诗、P：peter、TF：滕飞）
const MIP = window.g.baseURL;
const PIP = window.g.PIP;
const NOROUTER = window.g.noRouter;


//-------------------推客、渠道商、活动、优惠券-------------------
// 是否是线上正式环境
function isOnline(){
  if (window.g.baseURL=='https://saas.mihuanshop.com') {
    return true;
  } else {
    return false;
  }
}
const TIP         =  isOnline() ?  (window.g.PIP +'/shop') : (window.g.testApiURL);
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

// const TIP = window.g.PIP +'/shop';
// const TIP = window.g.testApiURL;
// const TIP = window.g.noRouter; //api
// const MSIP = window.g.noRouter;//api
// tfURL:'http://172.16.1.181:8080'   //滕飞：测试环境域名
const TFIP = window.g.tfURL;




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
const  shachuResGrounp = MIP +  '/shop/shop/resource/group/admin/delete';
const addgoodsResSon = MIP + '/shop/shop/resource/group/admin/add';
const imgresRught = MIP +'/shop/shop/resource/admin/list';
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
const orderDetailMehod  = MIP + '/order/order/order/admin/detail';
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
const anziduanExport  = MIP + '/user/user/setting/mngUserDetail';
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
const orderfinance  = MIP + '/finance/finance/cmsrebate/admin/order';

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
const sysbelNum = NOROUTER +'/order/dict/type?t=28';//操作日志字典量
const sysbelNum14 = NOROUTER +'/order/dict/type?t=14'; //地址详情
const logList = NOROUTER+'/log/operation/admin/list';
const sysbelNum12 =  NOROUTER + '/order/dict/type?t=12';


//创建活动（qg：抢购）
const qg_createPanicbuy = '/shop' +'/panicbuy/createPanicbuy';
//已 上架/下架
const qg_upordown = '/shop' +'/panicbuy/upordown'; 
const qg_doornot = '/shop' +'/panicbuy/doornot'; 
const qg_nameAndTime = '/shop' +'/panicbuy/nameAndTime';//模糊查询
const qg_thisrank   = '/shop' +'/panicbuy/thisrank';    //收益明细
const qg_update     = '/shop' +'/panicbuy/update';      //编辑
const qg_delete     = '/shop' +'/panicbuy/delete';      //删除
const qg_soldout    = '/shop' +'/panicbuy/soldout';    //下架
const qg_soldup     = '/shop' +'/panicbuy/soldup';     //上架
const qg_updatemore = '/shop' +'/panicbuy/updatemore'; //批量下架
const qg_deletemore = '/shop' +'/panicbuy/deletemore'; //批量删除
const qg_TYset = '/shop' +'/panicbuy/TYset';      //统一设置
const qg_TYsetHX = '/shop' +'/panicbuy/TYsetHX';  //统一设置回显
const qg_TYsetUpdate = '/shop' +'/panicbuy/uniformSetting/update'; //统一设置修改（新）
const qg_TYsetDelete = '/shop' +'/panicbuy/uniformSetting/delete'; //统一设置删除（新）
const qg_TYsetInsert = '/shop' +'/panicbuy/uniformSetting/insert'; //统一设置添加（新）
const qg_TYsetFindall= '/shop' +'/panicbuy/uniformSetting/findall';//统一设置回显（新）
//优惠券（cp：coupon）
const cp_list = '/order' +'/coupon/admin/list';        //列表
const cp_add = '/shop' +'/tPanicbuyConpon/add';        //添加优惠券
const cp_update = '/shop' +'/tPanicbuyConpon/update';  //修改优惠券
const cp_delete = '/shop' +'/tPanicbuyConpon/delete';  //删除优惠券
const cp_findall = '/shop' +'/tPanicbuyConpon/findall';//查询优惠券
const cp_open = '/shop' +'/tPanicbuyConpon/open';      //启用
const cp_close = '/shop' +'/tPanicbuyConpon/close';    //关闭
const cp_selectByTpcid= '/shop' +'/tPanicbuyConpon/selectByTpcid';  //根据优惠券id查询优惠券详情
//礼包 
const cp_addPackage = '/shop' +'/tPanicbuyConpon/addPackage';       //添加优惠券 礼包
const cp_deletePackage = '/shop' +'/tPanicbuyConpon/deletePackage'; //删除优惠券 礼包
const cp_updatePackage = '/shop' +'/tPanicbuyConpon/updatePackage'; //修改优惠券 礼包
const cp_findallPackage= '/shop' +'/tPanicbuyConpon/findallPackage';//查询优惠券 礼包
const cp_findpackagebyId= '/shop' +'/tPanicbuyConpon/findpackagebyId';//根据礼包id查询礼包详情

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
//整点秒杀
const ms_seckillList    =  '/marketing'+'/seckill/admin/seckillList';    //整点秒杀列表
const ms_deleteKind     =  '/marketing'+'/seckill/admin/deleteKind';     //整点秒杀页面 -删除
const ms_addKind        =  '/marketing'+'/seckill/admin/addKind';        //秒杀 -创建（假）
const ms_addActivity    =  '/marketing'+'/seckill/admin/addActivity';    //秒杀 -创建场次（假）
const ms_updateseckill  =  '/marketing'+'/seckill/admin/updateseckill';  //秒杀 -编辑
const ms_deleteActivity =  '/marketing'+'/seckill/admin/deleteActivity'; //秒杀-删除场次
const ms_skulist        =  '/marketing'+'/seckill/admin/skulist';  //秒杀-商品管理
const ms_addsku         =  '/marketing'+'/seckill/admin/addsku';   //秒杀-添加商品
const ms_deletesku      =  '/marketing'+'/seckill/admin/deletesku';//秒杀-删除商品 
const ms_updatesku      =  '/marketing'+'/seckill/admin/updatesku';//秒杀-修改商品（秒杀价和秒杀销量）
const ms_findById       =  '/marketing'+'/seckill/admin/findById'; // 秒杀-回显
const ms_updateUseStatus=  '/marketing'+'/seckill/admin/updateUseStatus'; // 秒杀-启用按钮
//整点砍价
const kj_list   =  '/marketing'+'/bargain/kind/admin/list';   //后台-砍价-列表
const kj_status =  '/marketing'+'/bargain/kind/admin/status'; //后台-砍价-下架/上架
const kj_detail =  '/marketing'+'/bargain/kind/admin/detail'; //后台-砍价-详情
const kj_delete =  '/marketing'+'/bargain/kind/admin/delete'; //后台-砍价-删除
const kj_update =  '/marketing'+'/bargain/kind/admin/update'; //后台-砍价-更新
const kj_add    =  '/marketing'+'/bargain/kind/admin/add';    //后台-砍价-新增
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
// const set_findServiceMoney  = '/user'+ "/info/admin/findServiceMoney";    //抽佣设置- 后台回显
// const set_updateServiceMoney= '/user'+ "/info/admin/updateServiceMoney";  //抽佣设置- 后台管理设置
// const set_findServiceMoney  = '/user'+ "/setting/admin/findServiceMoney";    //抽佣设置- 后台回显
// const set_updateServiceMoney= '/user'+ "/setting/admin/updateServiceMoney";  //抽佣设置- 后台管理设置
const set_findServiceMoney  = '/user'+ "/setting/detail";         //抽佣设置- 后台回显
const set_updateServiceMoney= '/user'+ "/setting/admin/update/";  //抽佣设置- 后台管理设置




//首页（埋点：bury points）
/*  二、后端接口：/track/admin/data
	1.	页面数据分析-选择付款方式动作采集
	2.	页面数据分析-首页动作采集
	3.	页面数据分析-订单确认页动作采集
	4.	页面数据分析-普通商品详情页动作采集
	5.	页面数据分析-个人中心页动作采集
	6.	页面数据分析-抢购活动页动作采集
	7.	页面数据分析-7人拼团活动页动作采集
	8.	页面数据分析-各品类数据概况
	9.	页面数据分析-各页面基础数据情况
	10.	页面数据分析-基础数据PV折线图
  11.	页面数据分析-数据漏斗
  12. 页面数据分析-区域曝光数-首页
  13. 页面数据分析-区域曝光数-抢购活动页
  14. 页面数据分析-区域曝光数-个人中心
*/
const bp_trackAdd   =  '/log'+'/track/add';   
const bp_adminBasic  =  '/log'+'/track/admin/basic';   
const bp_adminData  =  '/log'+'/track/admin/data';   
// 邀请插件
const it_updateInviteTask =  '/marketing'+'/invite/admin/updateInviteTask';   //编辑任务
const it_addInviteTask    =  '/marketing'+'/invite/admin/addInviteTask';      //创建任务 
const it_selectRecordById =  '/marketing'+'/invite/admin/selectRecordById';   //查看（领取流水） 
const it_selectById       =  '/marketing'+'/invite/admin/selectById';     //回显 
const it_updateStatus     =  '/marketing'+'/invite/admin/updateStatus';   //启用（上架/下架）
const it_delete           =  '/marketing'+'/invite/admin/delete';         //删除任务 
const it_inviteList       =  '/marketing'+'/invite/admin/inviteList';     //后台列表 
// 微店（shopMin）
const sm_vshopList =  '/user'+'/vshop/admin/list';          //微店列表  
const sm_findApply =  '/user'+'/vshop/admin/findApply';     //查看申请
const sm_closeOropen =  '/user'+'/vshop/admin/closeOropen'; //店铺开关按钮
// 供应商（supplier）
const sp_add        =  '/user'+'/supplier/admin/add';     //添加
const sp_update     =  '/user'+'/supplier/admin/update';  //修改
const sp_detail     =  '/user'+'/supplier/admin/detail';  //明细
const sp_list       =  '/user'+'/supplier/admin/list';    //供应商列表
const sp_simplist   =  '/user'+'/supplier/admin/simplist';//列表（全平台可用）
const sp_distribute =  '/shop'+'/item/admin/distribute';  //分销
// 推客
const tk_list             =  '/user' + "/rcm/admin/list";   //推客列表
const tk_spList           =  "/rcm/supplier/list";             //推客列表（根据 供应商Id 查询）
const tk_update           =  "/rcm/admin/update"; //设置等级
const tk_cancel           =  '/user' + "/rcm/admin/cancel"; //取消推客
const tk_regionList       =  '/user' + "/region/list";            //请求地区	
const tk_applyList        =  '/user' + "/rcm/apply/admin/list";   //推客申请列表（status：-1：不通过，1：通过，0：未处理）
const tk_despose          =  '/user' + "/rcm/apply/admin/despose";//推客申请审核
const tk_saasuserDetail   =  '/user' + "/saasuser/admin/detail";  //获取saas个人信息
const tk_saasuserChcard   =  '/user' + "/saasuser/admin/chcard";  //上传名片
const tk_detail           =  '/user' + "/rcm/admin/detail";       //推客详情
const tk_expenseCapacity  =  '/order' + "/order/admin/expenseCapacity"; //消费能力
const tk_orderList        =  '/order' + "/order/admin/list";      //查询订单列表（消费能力）
const tk_couponList       =  '/order' + "/coupon/admin/list";//用户优惠券列表
const tk_balanceList      =  '/finance' + "/balance/log/admin/list"; //余额记录-列表
const tk_cmsrebateList    =  '/finance' + "/cmsrebate/admin/list";    //佣金明细
const tk_settingDetail    =  '/user' + "/rcm/setting/detail";         //推客设置查询接口（推客升级条件：1：交易成功订单。2：已付款订单）
const tk_settingUpdate    =  '/user' + "/rcm/setting/admin/update";   //推客设置
const tk_memberGradeList  =  '/user' + "/grade/admin/list";       //会员等级列表（指定会员等级）
const tk_gradeList        =  '/user' + "/rcm/grade/admin/list";   //推客等级列表
const tk_gradeDelete      =  '/user' + "/rcm/grade/admin/delete"; //推客等级删除
const tk_gradeStatus      =  '/user' + "/rcm/grade/admin/status"; //推客等级变更状态
const tk_gradeDetail      =  '/user' + "/rcm/grade/admin/detail"; //推客等级详情
const tk_gradeAdd         =  '/user' + "/rcm/grade/admin/add";    //推客等级 新增
const tk_gradeUpdate      =  '/user' + "/rcm/grade/admin/update"; //推客等级 修改
const tk_financeTable     =  '/user' + "/user/admin/finance";     //财务报表-获取基本信息
const tk_orderDetail      =  '/order' + "/order/admin/detail";    //后台管理-订单-分佣订单
const tk_junior           =  '/user' + "/rcm/admin/junior";       //查看下级
const tk_applyItemDetail  =  '/user' + "/rcm/apply/item/admin/detail";  //推客申请项详情
const tk_applyItemDelete  =  '/user' + "/rcm/apply/item/admin/delete";  //推客申请项删除
const tk_applyItemAdd     =  '/user' + "/rcm/apply/item/admin/add";     //推客申请项 1新增
const tk_applyItemUpdate  =  '/user' + "/rcm/apply/item/admin/update";  //推客申请项 2修改
const tk_goodsList        = '/shop' + "/item/admin/list";               //商品列表
const tk_qrcode           =  "/miniprogram/wx/mini/qrcode/page/get.do"; //后台-获取二维码 
const tk_balanceAdd       =  '/finance' + "/balance/log/admin/add";     //调整佣金（finance）
//渠道商
const cb_chList       =  '/user' + "/ch/admin/list";      //渠道商列表
const cb_detail       =  '/user' + "/ch/admin/detail";    //渠道商详情
const cb_update       =  '/user' + "/ch/admin/update";    //渠道商更新
const cb_gradeList    =  '/user' + "/ch/nickName";        //渠道商等级列表
const cb_upgradeCh    =  '/user' + "/ch/admin/upgradeCh"; //修改渠道商等级
const cb_cancel       =  '/user' + "/ch/admin/cancel";    //取消渠道商
const cb_expenseCapacity =  '/order' + "/admin/expenseCapacity";    //消费能力
// const cb_couponList=  '/order' + "/coupon/admin/list";    //优惠券列表
const cb_juniorList   =  '/user' + "/rcm/juniorList";    //下级推客
const cb_crllist      =  '/order' + "/admin/crllist";    //分佣订单
const cb_performance  =  '/order' + "/admin/performance";     //业绩统计-获取基本信息
const cb_performanceList ='/user' + "/admin/performanceList"; //业绩统计列表

const ch_settingtDetail           ='/user' + "/ch/setting/detail";                  //设置详情
const ch_settingtSales            ='/user' + "/ch/setting/admin/sales";             //设置销售奖
const ch_settingtReferral         ='/user' + "/ch/setting/admin/referral";          //设置推荐奖
const ch_settingtGroupPerformance ='/user' + "/ch/setting/admin/groupPerformance";  //团队业绩


// 积分
const int_settingQuery   =  '/integral' + "/setting/query";        //管理端/用户端-积分-查询设置
const int_settingUpdate  =  '/integral' + "/setting/admin/update"; //管理端-积分-设置
const int_skuUpdate      =  '/integral' + "/sku/admin/update";     //管理端-积分商城-批量更新/批量添加
const int_skulist        =  '/integral' + "/sku/admin/list";       //管理端-积分商品列表
const int_list           =  '/integral' + "/detail/admin/list";    //管理端-积分列表
const int_delete         =  '/integral' + "/sku/admin/delete";     //管理端-积分商品删除 Id
const int_totalSet       =  '/integral' + "/total/admin/set";      //设置积分


export default {
  isOnline:isOnline,
  MIP:MIP,
  PIP:PIP,
  TIP:TIP,
  TFIP:TFIP,
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
  // 推客
  tk_list: tk_list,
  tk_spList: tk_spList,
  tk_update: tk_update,
  tk_cancel: tk_cancel,
  tk_regionList: tk_regionList,
  tk_applyList: tk_applyList,
  tk_despose: tk_despose,
  tk_saasuserDetail: tk_saasuserDetail,
  tk_saasuserChcard: tk_saasuserChcard,
  tk_detail: tk_detail,
  tk_expenseCapacity: tk_expenseCapacity,
  tk_orderList: tk_orderList,
  tk_couponList: tk_couponList,
  tk_balanceList: tk_balanceList,
  tk_cmsrebateList: tk_cmsrebateList,
  tk_settingDetail: tk_settingDetail,
  tk_settingUpdate: tk_settingUpdate,
  tk_memberGradeList: tk_memberGradeList,
  tk_gradeList: tk_gradeList,
  tk_gradeDelete: tk_gradeDelete,
  tk_gradeStatus: tk_gradeStatus,
  tk_gradeDetail: tk_gradeDetail,
  tk_gradeAdd: tk_gradeAdd,
  tk_gradeUpdate: tk_gradeUpdate,
  tk_financeTable: tk_financeTable,
  tk_orderDetail: tk_orderDetail,
  tk_junior: tk_junior,
  tk_applyItemDetail: tk_applyItemDetail,
  tk_applyItemDelete: tk_applyItemDelete,
  tk_applyItemAdd: tk_applyItemAdd,
  tk_applyItemUpdate: tk_applyItemUpdate,
  tk_goodsList: tk_goodsList,
  tk_qrcode: tk_qrcode,
  tk_balanceAdd: tk_balanceAdd,
  // 渠道商
  cb_chList: cb_chList,
  cb_detail: cb_detail,
  cb_update: cb_update,
  cb_gradeList: cb_gradeList,
  cb_upgradeCh: cb_upgradeCh,
  cb_cancel: cb_cancel,
  cb_expenseCapacity: cb_expenseCapacity,
  cb_juniorList: cb_juniorList,
  cb_crllist: cb_crllist,
  cb_performance: cb_performance,
  cb_performanceList: cb_performanceList,
  ch_settingtDetail: ch_settingtDetail,
  ch_settingtSales: ch_settingtSales,
  ch_settingtReferral: ch_settingtReferral,
  ch_settingtGroupPerformance: ch_settingtGroupPerformance,
  // 积分
  int_settingQuery: int_settingQuery,
  int_settingUpdate:int_settingUpdate,
  int_skuUpdate: int_skuUpdate,
  int_skulist: int_skulist,
  int_list: int_list,
  int_delete: int_delete,
  int_totalSet: int_totalSet,
  // 供应商
  sp_add: sp_add,
  sp_update: sp_update,
  sp_detail: sp_detail,
  sp_list: sp_list,
  sp_simplist: sp_simplist,
  sp_distribute, sp_distribute,
  // 微店
  sm_vshopList: sm_vshopList,
  sm_findApply: sm_findApply,
  sm_closeOropen: sm_closeOropen,
  // 邀请插件
  it_updateInviteTask:it_updateInviteTask,
  it_addInviteTask:it_addInviteTask,
  it_selectRecordById:it_selectRecordById,
  it_selectById:it_selectById,
  it_updateStatus:it_updateStatus,
  it_delete:it_delete,
  it_inviteList:it_inviteList,
  //整点砍价
  kj_list:kj_list,
  kj_status:kj_status,
  kj_detail:kj_detail,
  kj_delete:kj_delete,
  kj_update:kj_update,
  kj_add:kj_add,
  // 秒杀
  ms_seckillList:ms_seckillList,
  ms_deleteKind:ms_deleteKind,
  ms_addKind:ms_addKind,
  ms_addActivity:ms_addActivity,
  ms_updateseckill:ms_updateseckill,
  ms_deleteActivity:ms_deleteActivity,
  ms_skulist:ms_skulist,
  ms_addsku:ms_addsku,
  ms_deletesku:ms_deletesku,
  ms_updatesku:ms_updatesku,
  ms_findById:ms_findById,
  ms_updateUseStatus:ms_updateUseStatus,
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
  cp_list:cp_list,
  cp_add:cp_add,
  cp_close:cp_close,
  cp_update:cp_update,
  cp_delete:cp_delete,
  cp_findall:cp_findall,
  cp_open:cp_open,
  cp_addPackage:cp_addPackage,
  cp_deletePackage:cp_deletePackage,
  cp_updatePackage:cp_updatePackage,
  cp_findallPackage:cp_findallPackage,
  cp_selectByTpcid:cp_selectByTpcid,
  cp_findpackagebyId: cp_findpackagebyId,
  // 抢购
  qg_TYsetUpdate:qg_TYsetUpdate,
  qg_TYsetDelete:qg_TYsetDelete,
  qg_TYsetInsert:qg_TYsetInsert,
  qg_TYsetFindall:qg_TYsetFindall,
  qg_nameAndTime:qg_nameAndTime,
  qg_upordown:qg_upordown,
  qg_doornot:qg_doornot,
  qg_createPanicbuy:qg_createPanicbuy,
  qg_thisrank:qg_thisrank,
  qg_update:qg_update,
  qg_delete:qg_delete,
  qg_soldout:qg_soldout,
  qg_soldup:qg_soldup,
  qg_updatemore:qg_updatemore,
  qg_deletemore:qg_deletemore,
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
