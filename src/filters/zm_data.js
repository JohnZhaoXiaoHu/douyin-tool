// 网络配置
export {
	produce_dpIP,
	test_dpIP,
	//正式数据
	zm_getOrderStatus,
	zm_getOrderCourse,
	zm_getOrderType,
	zm_getOrderTypeList,
	zm_getPayType,
	zm_getMoneyTable_array3,
	zm_cityList,
	zm_homeBasicInfo,
	//测试数据
	zm_fundsSetup,
	zm_getList1,
	zm_getList,
	zm_twitterList,
	zm_getCityList,
	get_NewUserRetentionRate_array,
	get_basicInfoPV_array,
	get_moneyTable_array1,
	get_moneyTable_array2,
	get_moneyTable_array3,
}

var produce_dpIP = 'https://saas.mihuanshop.com'
var test_dpIP = 'http://106.15.192.67:8080'



//--------------支付方式--------------
function zm_getPayType(status){
	if (status==1) { 		return '支付宝';
	} else if (status==2) { return '微信';
	} else if (status==3) { return '余额';
	} else if (status==4) { return '线下';
	} else if (status==5) { return '货到付款';
	} else {
		return '未知';
	}
}
//--------------订单类型--------------
function zm_getOrderType(status){
	if (status==1) { 		return '直购订单';
	} else if (status==2) { return '秒杀订单';
	} else if (status==3) { return '限时折扣订单';
	} else if (status==4) { return '拼团订单';
	} else if (status==5) { return '砍价订单';
	} else if (status==6) { return '积分兑换订单';
	} else if (status==7) { return '预售订单';
	} else if (status==8) { return '知识付费订单';
	} else if (status==9) { return '手动订单';
	} else {
		return '未知';
	}
}

// function zm_getOrderStatusData(){
// 	return  [{
// 		value: '-4', label: '系统关闭'
// 	}, {
// 		value: '-3', label: '用户拒收'
// 	}, {
// 		value: '-2', label: '用户取消'
// 	}, {
// 		value: '-1', label: '未付款'
// 	}, {
// 		value: '0', label: '代发货'
// 	}, {
// 		value: '1', label: '配送中'
// 	}, {
// 		value: '2', label: '退款完成'
// 	}, {
// 		value: '3', label: '已收货'
// 	}, {
// 		value: '4', label: '正在付款'
// 	}, {
// 		value: '5', label: '正在取消'
// 	}, {
// 		value: '6', label: '取消审核'
// 	}, {
// 		value: '7', label: '已完成'
// 	}, {
// 		value: '8', label: '发起售后'
// 	}];
// }

//--------------订单状态（新）--------------
function zm_getOrderCourse(status){
	if (status==-3) {        return '退货拒绝';
	} else if (status==-2) { return '售后失败';
	} else if (status==-1) { return '拒绝售后申请';
	} else if (status==0) { return '其他';
	} else if (status==1) { return '售后申请';
	} else if (status==2) { return '退货中';
	} else if (status==3) { return '已发货';
	} else if (status==4) { return '用户已收货';
	} else if (status==5) { return '确认退款';
	} else if (status==6) { return '售后成功';
	} else if (status==7) { return '商家已收货';
	} else {
		return '未知';
	}
}


//--------------订单状态--------------
function zm_getOrderType(){
	if (status==-4) { 		 return '系统关闭';
	} else if (status==-3) { return '用户拒收';
	} else if (status==-2) { return '用户取消';
	} else if (status==-1) { return '未付款';
	} else if (status==0) { return '代发货';
	} else if (status==1) { return '配送中';
	} else if (status==2) { return '退款完成';
	} else if (status==3) { return '已收货';
	} else if (status==4) { return '正在付款';
	} else if (status==5) { return '正在取消';
	} else if (status==6) { return '取消审核';
	} else if (status==7) { return '已完成';
	} else if (status==8) { return '发起售后';
	} else {
		return '未知';
	}
}
// 订单状态 
function zm_getOrderTypeList(){
	return [{
			value: '-4',
			label: '系统关闭'
		},{
			value: '-3',
			label: '用户拒收'
		},{
			value: '-2',
			label: '用户取消'
		},{
			value: '-1',
			label: '未付款'
		},{
			value: '0',
			label: '待发货'
		},{
			value: '1',
			label: '配送中'
		}, {
			value: '2',
			label: '退款完成'
		}, {
			value: '3',
			label: '已收货'
		}, {
			value: '4',
			label: '正在付款'
		}, {
			value: '5',
			label: '正在取消'
		}, {
			value: '6',
			label: '取消审核'
		}, {
			value: '7',
			label: '已完成'
		}, {
			value: '8',
			label: '发起售后'
		}]
}
//正式：数据列表（抢购-小奖池资金设置）
function zm_fundsSetup(){
	return [{
		id: 0,
		switch: false,
		percent: '0',
		name: '参与奖励',
	  }, {
		id: 1,
		switch: false,
		percent: '0',
		name: '直接邀请好友奖励',
	  }, {
		id: 2,
		switch: false,
		percent: '0',
		name: '间接邀请好友奖励',
	  }, {
		id: 3,
		switch: false,
		percent: '0',
		name: '合计',
	  }];
}
// 财务报表初始数据
function zm_getMoneyTable_array3() {
	return [{
			name: '付款订单金额',
			type: 'line',
			smooth: true,
			data: ["162408", ]
		},
		{
			name: '付款订单数',
			type: 'line',
			smooth: true,
			data: ["152827", ]
		},
		{
			name: '成功订单金额',
			type: 'line',
			smooth: true,
			data: ["115483", ]
		},
		{
			name: '成功订单数',
			type: 'line',
			smooth: true,
			data: ["66091"]
		},
		{
			name: '佣金金额',
			type: 'line',
			smooth: true,
			data: [52622.02, ]
		}
	];
}

// Home 首页初始数据
function zm_homeBasicInfo(){
	return [
		// 第一行
		{
			type: 1,
			title: '小程序uv',  
			num: '0', 
			numUnit: '人', 
			percent1: 0, 
			percent2: 0, 
			allNum: '0',
			allUnit: '人',    
		},
		{
			type: 2,
			title: '小程序pv',  
			num: '0', 
			numUnit: '次', 
			percent1: 0, 
			percent2: 0, 
			allNum: '0',
			allUnit: '次',    
		},
		{
			type: 3,
			title: '小程序新用户数',  
			num: '0', 
			numUnit: '人', 
			percent1: 0, 
			percent2: 0, 
			allNum: '0',
			allUnit: '人',    
		},
		{
			type: 4,
			title: '小程序活跃用户数',  
			num: '0', 
			numUnit: '万人', 
			percent1: 0, 
			percent2: 0, 
			allNum: '123456',
			allUnit: '人',    
		},
		// 第二行
		{
			type: 5,
			title: '小程序销售额',  
			num: '0', 
			numUnit: '万', 
			percent1: 0, 
			percent2: 0, 
			allNum: '123456',
			allUnit: '万',    
		},
		{
			type: 6,
			title: '支付订单数',  
			num: '0', 
			numUnit: '次', 
			percent1: 0, 
			percent2: 0, 
			allNum: '0',
			allUnit: '次',    
		},
		{
			type: 7,
			title: '维权订单数',  
			num: '0', 
			numUnit: '笔', 
			percent1: 0, 
			percent2: 0, 
			allNum: '0',
			allUnit: '笔',    
		},
		{
			type: 8,
			title: '平均访问时长',  
			num: '0', 
			numUnit: 'S', 
			percent1: 0, 
			percent2: 0, 
			allNum: '0',
			allUnit: 'S',    
		},
	]
}

function zm_homeBasicInfo2(){
	return [
		// 第一行
		{
			type: 1,
			title: '小程序uv',  
			num: '581', 
			numUnit: '人', 
			percent1: 5.78, 
			percent2: -12.06, 
			allNum: '123456',
			allUnit: '人',    
		},
		{
			type: 2,
			title: '小程序pv',  
			num: '581', 
			numUnit: '次', 
			percent1: -5.78, 
			percent2: 12.06, 
			allNum: '123456',
			allUnit: '次',    
		},
		{
			type: 3,
			title: '小程序新用户数',  
			num: '581', 
			numUnit: '人', 
			percent1: 5.78, 
			percent2: 12.06, 
			allNum: '123456',
			allUnit: '人',    
		},
		{
			type: 4,
			title: '小程序活跃用户数',  
			num: '581', 
			numUnit: '万人', 
			percent1: 5.78, 
			percent2: 12.06, 
			allNum: '123456',
			allUnit: '人',    
		},
		// 第二行
		{
			type: 5,
			title: '小程序销售额',  
			num: '581', 
			numUnit: '万', 
			percent1: -5.78, 
			percent2: 12.06, 
			allNum: '123456',
			allUnit: '万',    
		},
		{
			type: 6,
			title: '支付订单数',  
			num: '581', 
			numUnit: '次', 
			percent1: 5.78, 
			percent2: 12.06, 
			allNum: '123456',
			allUnit: '次',    
		},
		{
			type: 7,
			title: '维权订单数',  
			num: '581', 
			numUnit: '笔', 
			percent1: 5.78, 
			percent2: 12.06, 
			allNum: '123456',
			allUnit: '笔',    
		},
		{
			type: 8,
			title: '平均访问时长',  
			num: '581', 
			numUnit: 'S', 
			percent1: 5.78, 
			percent2: 12.06, 
			allNum: '123456',
			allUnit: 'S',    
		},
	]
}


function zm_cityList(){
	return [
		{
			name: "南海诸岛",
			value: 0
		},
		{
			name: '北京',
			value: 0
		},
		{
			name: '天津',
			value: 0
		},
		{
			name: '上海',
			value: 101
		},
		{
			name: '重庆',
			value: 2
		},
		{
			name: '河北',
			value: 0
		},
		{
			name: '河南',
			value: 0
		},
		{
			name: '云南',
			value: 0
		},
		{
			name: '辽宁',
			value: 0
		},
		{
			name: '黑龙江',
			value: 0
		},
		{
			name: '湖南',
			value: 0
		},
		{
			name: '安徽',
			value: 0
		},
		{
			name: '山东',
			value: 0
		},
		{
			name: '新疆',
			value: 0
		},
		{
			name: '江苏',
			value: 0
		},
		{
			name: '浙江',
			value: 0
		},
		{
			name: '江西',
			value: 0
		},
		{
			name: '湖北',
			value: 0
		},
		{
			name: '广西',
			value: 0
		},
		{
			name: '甘肃',
			value: 0
		},
		{
			name: '山西',
			value: 0
		},
		{
			name: '内蒙古',
			value: 0
		},
		{
			name: '陕西',
			value: 0
		},
		{
			name: '吉林',
			value: 0
		},
		{
			name: '福建',
			value: 0
		},
		{
			name: '贵州',
			value: 0
		},
		{
			name: '广东',
			value: 0
		},
		{
			name: '青海',
			value: 0
		},
		{
			name: '西藏',
			value: 0
		},
		{
			name: '四川',
			value: 0
		},
		{
			name: '宁夏',
			value: 0
		},
		{
			name: '海南',
			value: 0
		},
		{
			name: '台湾',
			value: 0
		},
		{
			name: '香港',
			value: 0
		},
		{
			name: '澳门',
			value: 0
		}
	]
}


//=========================== 测试数据 ===========================
//测试：推客数据列表
function zm_twitterList(){
	return [{
		"grade": 10009,
		"id": 10557,
		"passTime": 1597125463802,
		"ugs": {
		  "balance": 0,
		  "commissionTotal": 0,
		  "bargainNum": 0,
		  "bargainMoney": 0
		},
		"pu": [
		  {
			"id": 10570,
			"nickName": "韩YS"
		  }
		],
		"user": {
		  "headportrait": "http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKlePFB7vO5xx4Vib3HlQG5NuqOliamJXibicEsGor9UAbGaT1vDcCIibg13IYUgHKeibR8baoY3SnV7fDA/132",
		  "phone": "18936489341",
		  "nickName": "cheng"
		},
		"puser": {
		  "id": 10570,
		  "nickName": "韩YS"
		},
		"gradeName": "VIP"
	  }];
}

//测试：数据列表1
function zm_getList1(){
	return [{
		id: 0,
		state: 1,
		date: '2016-05-02',
		name: '王小虎',
		province: '上海',
        city: '普陀区',
		address: '金沙江路 1518 弄',
		quan: 10,
		img: "../../../../static/images/icon/qg_setting1.png",
		zip: 200333,
	  }, {
		id: 1,
		state: 0,
		date: '2016-05-04',
		name: '王小虎',
		province: '上海',
        city: '普陀区',
		address: '金沙江路 1518 弄',
		quan: 100,
		img: "../../../../static/images/icon/qg_setting1.png",
		zip: 200333,
	  }, {
		id: 2,
		state: 0,
		date: '2016-05-01',
		name: '王小虎',
		province: '上海',
        city: '普陀区',
		address: '金沙江路 1518 弄',
		quan: 200,
		img: "../../../../static/images/icon/qg_setting1.png",
		zip: 200333,
	  }, {
		id: 3,
		state: 0,
		date: '2016-05-03',
		name: '王小虎',
		province: '上海',
        city: '普陀区',
		address: '金沙江路 1518 弄',
		quan: 300,
		img: "../../../../static/images/icon/qg_setting1.png",
		zip: 200333,
	  }];
}
//测试：数据列表2
function  zm_getList() {
	return [{
			id: '0',
			name: 'Runoob',
			iphone: '13022150001',
			user: 'A',
			sex: '男',
			level: 'le0',
			time: '2020-01-01',
			createTime:{
				time: 1533293827000,
			},
			type: 0,
			state: 0,
			checked:true,
			switchChecked:true,
			switchCheckedText:'启用',
			value:'11',
			money:'11888',
			number:'10',
			img: "../../../../static/images/icon/qg_chuang1.png"
		},
		{
			id: '1',
			name: 'Google',
			iphone: '13022150002',
			user: 'B',
			sex: '女',
			level: 'le1',
			time: '2020-01-02',
			createTime:{
				time: 1533293827000,
			},
			type: 1,
			state: 1,
			checked:false,
			switchChecked:false,
			switchCheckedText:'禁用',
			value:'22',
			money:'21888',
			number:'20',
			img: "../../../../static/images/icon/qg_setting1.png"
		},
		{
			id: '2',
			name: 'Taobao',
			iphone: '13022150003',
			user: 'C',
			sex: '男',
			level: 'le2',
			time: '2020-01-03',
			createTime:{
				time: 1533293827000,
			},
			type: 0,
			state: 2,
			checked:false,
			switchChecked:true,
			switchCheckedText:'启用',
			value:'33',
			money:'3122',
			number:'30',
			img: "../../../../static/images/icon/qg_chuang1.png"
		},
		{
			id: '3',
			name: 'Candy',
			iphone: '13022150004',
			user: 'D',
			sex: '男',
			level: 'le3',
			time: '2020-01-05',
			createTime:{
				time: 1533293827000,
			},
			type: 0,
			state: 3,
			checked:true,
			switchChecked:false,
			switchCheckedText:'禁用',
			value:'44',
			money:'104',
			number:'10',
			img: "../../../../static/images/icon/qg_chuang1.png"
		},
		{
			id: '4',
			name: 'TagnDi',
			iphone: '13022150005',
			user: 'E',
			sex: '女',
			level: 'le4',
			time: '2020-01-06',
			createTime:{
				time: 1533293827000,
			},
			type: 0,
			state: 4,
			checked:false,
			switchChecked:true,
			switchCheckedText:'启用',
			value:'55',
			money:'51888',
			number:'20',
			img: "../../../../static/images/icon/qg_chuang1.png"
		},
		{
			id: '5',
			name: 'Yicai',
			iphone: '13922220006',
			user: 'F',
			sex: '女',
			level: 'le5',
			time: '2020-01-07',
			createTime:{
				time: 1533293827000,
			},
			type: 0,
			state: 5,
			checked:false,
			switchChecked:false,
			switchCheckedText:'禁用',
			value:'66',
			money:'61888',
			number:'26',
			img: "../../../../static/images/icon/qg_chuang1.png"
		},
		{
			id: '6',
			name: 'SanYetong',
			iphone: '13922220007',
			user: 'G',
			sex: '女',
			level: 'le6',
			time: '2020-01-08',
			createTime:{
				time: 1533293827000,
			},
			type: 0,
			state: 1,
			checked:false,
			switchChecked:false,
			switchCheckedText:'禁用',
			value:'77',
			money:'71888',
			number:'70',
			img: "../../../../static/images/icon/qg_chuang1.png"
		},
		{
			id: '7',
			name: 'MiHuan',
			iphone: '13922220008',
			user: 'H',
			sex: '男',
			level: 'le7',
			time: '2020-01-09',
			createTime:{
				time: 1533293827000,
			},
			type: 0,
			state: 2,
			checked:false,
			switchChecked:false,
			switchCheckedText:'禁用',
			value:'88',
			money:'81888',
			number:'80',
			img: "../../../../static/images/icon/qg_chuang1.png"
		}
	];
}

function zm_getCityList() {
	return [{
		id: '0',
		cityName: '上海',
		value: 'sh'
	}, {
		id: '1',
		cityName: '北京',
		value: 'bj'
	}, {
		id: '2',
		cityName: '杭州',
		value: 'hz'
	}, {
		id: '3',
		cityName: '安徽',
		value: 'ah'
	}, {
		id: '4',
		cityName: '天津',
		value: 'tj'
	}, {
		id: '5',
		cityName: '广东',
		value: 'gd'
	}];
}


function get_NewUserRetentionRate_array(smooth) {
	return [{
			name: '新用户留存率',
			type: 'line',
			smooth: smooth,
			data:[],
			// data: ["10", "15", "30", "25", "20", "35", "55", "50", "45", 
			// "70", "65", "80", "75", "60", "85", "90", "95", "88", "66", "77", 
			// "68", "55", "72", "85", "98"]
		}
	];
}

// smooth:  true 曲线 、 false 折线
// 首页", "抢购活动页", "抢购活动详情页", "7人拼团页", "7人拼团详情页", "个人中心页", "商品详情页", "订单确认页
function get_basicInfoPV_array(smooth) {
	return [{
			name: '首页',
			type: 'line',
			smooth: smooth,
			data:[],
			// data: ["162408", "84274", "51885", "32385", "29434", "44453", "113740", "228128", "344679", "462128", "585712", "661449", "704045", "698178", "642736", "621051", "614459", "604958", "615722", "606564", "721321", "700773", "519813", "297617", "557617"]
		},
		{
			name: '抢购活动页',
			type: 'line',
			smooth: smooth,
			data:[],
			// data: ["152827", "67202", "37269", "20956", "18687", "34066", "103310", "214873", "327262", "426414", "524510", "572305", "600487", "596252", "544651", "520815", "509897", "500239", "501439", "491926", "577558", "552850", "401406", "219789", "397617"]
		},
		{
			name: '抢购活动详情页',
			type: 'line',
			smooth: smooth,
			data:[],
			// data: ["66091", "611735", "188959", "111632", "212664", "121576", "53996", "67038", "13033", "188639", "16757", "7034", "18368", "27084", "4718", "14087", "33928", "13212", "53042", "13501", "66424", "15824", "11331", "86073"]
		},
		{
			name: '7人拼团页',
			type: 'line',
			smooth: smooth,
			data:[],
			// data: ["115483", "47313", "26211", "14156", "12454", "24095", "74951", "157273", "237750", "305293", "373653", "403249", "423604", "409693", "367890", "349129", "343804", "333511", "333344", "327859", "391295", "371397", "265205", "143960", "297617", "327617"]
		},
		{
			name: '7人拼团详情页',
			type: 'line',
			smooth: smooth,
			data:[],
			// data: ["66091", "611735", "188959", "111632", "212664", "121576", "53996", "67038", "13033", "188639", "16757", "7034", "18368", "27084", "4718", "14087", "33928", "13212", "53042", "13501", "66424", "15824", "11331", "86073"]
		},
		{
			name: '个人中心页',
			type: 'line',
			smooth: smooth,
			data:[],
			// data: [52622.02, 5250.1, 88811.37, 5282.63, 8875.92, 99159.33, 77791.01, 976.69, 1494.82, 1859.92, 2215.17, 112379.43, 122569.69, 132477.18, 155220.92, 172134.79, 142094.97, 172039.94, 132021, 112000.8, 82325.55, 72222.01, 61590.13, 88859.93]
		},
		{
			name: '商品详情页',
			type: 'line',
			smooth: smooth,
			data:[],
			// data: [62622.02, 25250.1, 38811.37, 5282.63, 18875.92, 99159.33, 177791.01, 122976.69, 221494.82, 221859.92, 252215.17, 232379.43, 332569.69, 362477.18, 252220.92, 232134.79, 312094.97, 312039.94, 312021, 222000.8, 332325.55, 352222.01, 381590.13, 533859.93]
		},
		{
			name: '订单确认页',
			type: 'line',
			smooth: smooth,
			data:[],
			// data: [72622.02, 15250.1, 18811.37, 25282.63, 38875.92, 99159.33, 177791.01, 181976.69, 221494.82, 221859.92, 82215.17, 122379.43, 92569.69, 312477.18, 422220.92, 632134.79, 252094.97, 362039.94, 112021, 222000.8, 162325.55, 242222.01, 321590.13, 255859.93]
		}
	];
}


// smooth:  true 曲线 、 false 折线
function get_moneyTable_array1(smooth) {
	return [{
			name: '付款订单金额',
			type: 'line',
			smooth: smooth,
			data: ["162408", "84274", "51885", "32385", "29434", "44453", "113740", "228128", "344679", "462128", "585712", "661449", "704045", "698178", "642736", "621051", "614459", "604958", "615722", "606564", "721321", "700773", "519813", "297617"]
		},
		{
			name: '付款订单数',
			type: 'line',
			smooth: smooth,
			data: ["152827", "67202", "37269", "20956", "18687", "34066", "103310", "214873", "327262", "426414", "524510", "572305", "600487", "596252", "544651", "520815", "509897", "500239", "501439", "491926", "577558", "552850", "401406", "219789"]
		},
		{
			name: '成功订单金额',
			type: 'line',
			smooth: smooth,
			data: ["115483", "47313", "26211", "14156", "12454", "24095", "74951", "157273", "237750", "305293", "373653", "403249", "423604", "409693", "367890", "349129", "343804", "333511", "333344", "327859", "391295", "371397", "265205", "143960"]
		},
		{
			name: '成功订单数',
			type: 'line',
			smooth: smooth,
			data: ["66091", "611735", "188959", "111632", "212664", "121576", "53996", "67038", "13033", "188639", "16757", "7034", "18368", "27084", "4718", "14087", "33928", "13212", "53042", "13501", "66424", "15824", "11331", "86073"]
		},
		{
			name: '佣金金额',
			type: 'line',
			smooth: smooth,
			data: [52622.02, 5250.1, 88811.37, 5282.63, 8875.92, 99159.33, 77791.01, 976.69, 1494.82, 1859.92, 2215.17, 2379.43, 2569.69, 2477.18, 2220.92, 2134.79, 2094.97, 2039.94, 2021, 2000.8, 2325.55, 2222.01, 1590.13, 859.93]
		}
	];
}

function get_moneyTable_array2(smooth) {
	return [{
			name: '付款订单金额',
			type: 'line',
			smooth: smooth,
			data: ["162408"]
		},
		{
			name: '佣金金额',
			type: 'line',
			smooth: smooth,
			data: [52622.02]
		}
	];
}

function get_moneyTable_array3() {
	return [{
			name: '付款订单金额',
			type: 'line',
			smooth: true,
			data: ["162408", ]
		},
		{
			name: '付款订单数',
			type: 'line',
			smooth: true,
			data: ["152827", ]
		},
		{
			name: '成功订单金额',
			type: 'line',
			smooth: true,
			data: ["115483", ]
		},
		{
			name: '成功订单数',
			type: 'line',
			smooth: true,
			data: ["66091"]
		},
		{
			name: '佣金金额',
			type: 'line',
			smooth: true,
			data: [52622.02, ]
		}
	];
}
