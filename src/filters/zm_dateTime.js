/*
 *  =======================  时间日期 功能配置   =======================
 */
export {
	zm_getCurrenTimestamp,		// 获取当前时间戳
	zm_getCurrenDate,			//1、获取当前时间 YYYY-MM-DD hh:mm:ss
	zm_getCurrenDateYYYYMMDD,	//2、获取当前时间 YYYY-MM-DD 
	zm_getCurrenDateHHMMSS,		//3、获取当前时间 hh:mm:ss
	zm_todayZeroDateTime,		// 获取今天 凌晨日期时间  
	zm_todayZeroTimestamp,		// 获取今天 凌晨日期时间戳 
	zm_DateToTimestamp,
	zm_dateStringToTimestamp,
	zm_dateFormat,
	zm_zeroFill,
	zm_standardDateToString,

	zm_isLeapYear,
	zm_generateSevenDay,
	zm_getLateSevenDay,
	zm_getBeforeLaterDate, //获取: 之前/之后 的日期  

	zm_test
}
 // console.log('--------CurrenTimestamp1= '+zm_getCurrenTimestamp(1));
 // console.log('--------CurrenTimestamp2= '+zm_getCurrenTimestamp(2));
 // console.log('--------CurrenTimestamp3= '+zm_getCurrenTimestamp(3));



// 获取今天 凌晨日期时间 （例如：Mon Dec 04 2017 00:00:00 GMT+0800 (中国标准时间)）
function zm_todayZeroDateTime() {
	const currentDateTime = new Date(new Date(new Date().toLocaleDateString()).getTime());
	return currentDateTime
}
// 获取今天 凌晨日期时间戳 
function zm_todayZeroTimestamp() {
	const currentDateTime = new Date(new Date(new Date().toLocaleDateString()).getTime());
	return zm_DateToTimestamp(currentDateTime);
}

/*
 * 获取当前时间戳
 */
function zm_getCurrenTimestamp(type) {
	if ( (type !=1) && (type!=2)  && (type!=3) ) {
		type = 1;
	}
	var timestamp = '';
	if (type==1) {
		timestamp = Date.parse(new Date());
	} else if (type==2) {
		timestamp = (new Date()).valueOf();
	} else if (type==3) {
		timestamp = (new Date()).getTime();
	}
	return timestamp;
}
/*
 * 1、获取当前时间 YYYY-MM-DD hh:mm:ss
 */
function zm_getCurrenDate() {
	var currenDate = new Date();
	var year = currenDate.getFullYear();
	var month = currenDate.getMonth();
	var date = currenDate.getDate();

	var hour = currenDate.getHours();
	var minute = currenDate.getMinutes();
	var second = currenDate.getSeconds();

	var getCurrenDate = year + "-" + zm_zeroFill(month) + "-" + zm_zeroFill(date) + " " + zm_zeroFill(hour) + ":" + zm_zeroFill(minute) + ":" + zm_zeroFill(second);
	return getCurrenDate;
}
/*
 * 2、获取当前时间 YYYY-MM-DD 
 */
function zm_getCurrenDateYYYYMMDD() {
	var currenDate = new Date();
	var year = currenDate.getFullYear();
	var month = currenDate.getMonth();
	var date = currenDate.getDate();

	var getCurrenDate = year + "-" + zm_zeroFill(month) + "-" + zm_zeroFill(date);
	return getCurrenDate;
}
/*
 * 3、获取当前时间 hh:mm:ss
 */
function zm_getCurrenDateHHMMSS() {
	var currenDate = new Date();
	var hour = currenDate.getHours();
	var minute = currenDate.getMinutes();
	var second = currenDate.getSeconds();

	if (minute < 10) {
		minute = "0" + minute;
	}
	if (second < 10) {
		second = "0" + second;
	}
	var getCurrenDate = hour + ":" + minute + ":" + second;
	return getCurrenDate;
}
/*
 * 4、获取昨日时间 YYYY-MM-DD 
 */
// function zm_getYesterdayDateYYYYMMDD() {
// 	var currenDate = new Date();
// 	var year  = currenDate.getFullYear();
// 	var month = currenDate.getMonth();
// 	var date  = currenDate.getDate();

// 	if ( (date*1) == 1) {
		
// 	}
// 	var getCurrenDate = year + "-" + zm_zeroFill(month) + "-" + zm_zeroFill(date);
// 	return getCurrenDate;
// }



/*
 * 日期 转换成 时间戳
 * date: 必须是字符串
 * type: 第1、第2种：会精确到毫秒，第3种：只能精确到秒，毫秒用000替代，
 * 注意：获取到的时间戳除以1000就可获得Unix时间戳，就可传值给后台得到。
 *  
 * zm_DateToTimestamp(newVal, 1); 首页数据分析中使用
 * newVal = Wed Oct 14 2020 00:00:00 GMT+0800 (中国标准时间)
 */
function zm_DateToTimestamp(date, type) {
	let dateTime = new Date(date);
	if (type==null || type==undefined) {
		type = 1;
	}
    if (type==1) {
		return dateTime.getTime(); //精确到毫秒
	} else if (type==2) {
		return dateTime.valueOf(); //精确到毫秒
	}else if (type==3) {
		return  Date.parse(dateTime); //精确到秒
	}else {
		return date;
	}
}

/*
 * 时间字符串 转换为 时间戳
 * type=1：	10位：2015-03-05
 * type=2：	19位：2015-03-05 17:59:00.0
 * 测试案例：1
 *  var date = '2015-03-05 17:59:00.0';
	var date = '2015-03-05';
	console.log('---timestamp：' + zm_dateStringToTimestamp(date, 1))
 */
function zm_dateStringToTimestamp(dateString, type) {
	//console.log('---dateString= ', dateString)
	if (dateString.length == 0 || dateString == null || dateString == undefined) {
		return "";
	}
	if (type == 1) {
		dateString = dateString.substring(0, 10);
	} else if (type == 2) {
		dateString = dateString.substring(0, 19);
	} else {
		dateString = dateString.substring(0, 10);
	}
	dateString = dateString.replace(/-/g, '/'); //必须把日期'-'转为'/'
	var timestamp = new Date(dateString).getTime();
	return timestamp;
}

//时间处理函数
function zm_dateFormat(daterc) {
	if (daterc != null) {
		const dateMat = new Date(daterc);
		const year = dateMat.getFullYear();
		const month = dateMat.getMonth() + 1;
		const day = dateMat.getDate();
		const hh = dateMat.getHours();
		const mm = dateMat.getMinutes();
		const ss = dateMat.getSeconds();
		return zm_zeroFill(year) + "-" + zm_zeroFill(month) + "-" + zm_zeroFill(day) + " " + zm_zeroFill(hh) + ":" + zm_zeroFill(mm) + ":" + zm_zeroFill(ss);
	}else{
		return '';
	}
}

/* type
 * 1、YYYY_MM_DD
 * 2、YYYY_MM_DD hh:mm:ss
 */
function zm_standardDateToString(myDate, type) {
	//console.log('---zm_standardDateToString= '+myDate)
	var datetime = ''
	if(type == 1) {
		datetime = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate();
	} else if(type == 2) {
		datetime = zm_zeroFill(myDate.getHours()) + ':' + zm_zeroFill(myDate.getMinutes()) + ':' + zm_zeroFill(myDate.getSeconds());
	} else {
		datetime = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate() + ' ' 
		         + zm_zeroFill(myDate.getHours()) + ':' + zm_zeroFill(myDate.getMinutes()) + ':' + zm_zeroFill(myDate.getSeconds());
	}
	return datetime;
}


//补0操作  
function zm_zeroFill(num) {
	if (parseInt(num) < 10) {
		num = '0' + num;
	}
	return num;
}


/** 是否是闰年
 * param year(字符串)
 */
function zm_isLeapYear(year) {
    let flag = false;
    if (parseInt(year) % 4 == 0 && parseInt(year) % 100 !== 0) {
        flag = true;
    }
    return flag;
}
/**
 *开始月日 结束月日(数字)
 */
function zm_generateSevenDay(monthBegin, dayBegin,monthEnd, dayEnd, setDayNum){
    let count = 0;
    let sevenDayList = [];
    if (monthBegin === monthEnd) {
        // for (let i = 0; i < 7; i++) {
		for (let i = 0; i < setDayNum; i++) {
            sevenDayList.push(monthBegin+"."+dayBegin.toString());
            dayBegin++;
        }
    } else {
		// let rest = 7 - dayEnd;
		let rest = setDayNum - dayEnd;
        for(let i=0;i<rest;i++){
            sevenDayList.push(monthBegin+"."+dayBegin.toString());
            dayBegin++;
        }
        for(let i=0;i<dayEnd;i++){
            count++;
            sevenDayList.push(monthEnd+"."+count.toString());
        }
    }
    return sevenDayList;
}

/**
 * param dateNow 当前年月日(格式2020-04-09)
 * 
 * 小月：4，6，9，11
 * 大月：1，3，5，7，8，10，12
 * 二月：平年28 闰年(能被4整除且不能被100整除)29
 */
const BIGMONTH = [1, 3, 5, 7, 8, 10, 12];
const SMALLMONTH = [4, 6, 9, 11];

function zm_getLateSevenDay(dateNow, setDayNum) {
    let monthInfoList = [];
    let yearNow = '';
    let monthNow = '';
    let dayNow = '';
    let yearEnd = '';
    let monthEnd = '';
    let dayEnd = '';
    let yearBegin = '';
    let monthBegin = '';
    let dayBegin = '';
    let islYear = false;//是否是闰年
    //初始化当前年月日
    yearNow = dateNow.split("-")[0];
    monthNow = dateNow.split("-")[1];
	dayNow = dateNow.split("-")[2];
	
	// console.log('\n\n-----monthNow= '+monthNow);
    if (monthNow*1 < 10) {
        monthNow = monthNow.replace('0', '');
    }
    if (dayNow*1 < 10) {
        dayNow = dayNow.replace('0', '');
	}
	// console.log('-----monthNow2= '+monthNow);
    islYear = zm_isLeapYear(yearNow);

    //初始化 monthInfoList 12个月份
    for (let i = 0; i < 12; i++) {
        monthInfoList.push({
            month: i + 1,
            dayNum: 0,
            beforeMonth: 0
        })
    }
    monthInfoList.forEach(item => {
		//dayNum		日期
		//beforeMonth 	前一个月
        if (BIGMONTH.indexOf(item.month) > -1) {
            item.dayNum = 31; // console.log('大月份');
            item.beforeMonth = item.month === 1 ? 12 : item.month - 1
        } else if (SMALLMONTH.indexOf(item.month) > -1) {
            item.dayNum = 30; // console.log('小月份');
            item.beforeMonth = item.month === 1 ? 12 : item.month - 1
        } else {
            islYear ? item.dayNum = 29 : item.dayNum = 28;
            item.beforeMonth = 1;  // console.log('二月份');
        }
    })
	// console.log('-----dayNow= '+dayNow);
	
    //计算yearEnd monthEnd dayEnd
    if (dayNow == 1) {
        let targetMonthInfo = monthInfoList.find(item => item.month == monthNow);
        yearEnd = monthNow == 1 ? (parseInt(yearNow) - 1).toString() : yearNow;
        monthEnd = targetMonthInfo.beforeMonth;
        let beforeMonthInfo = monthInfoList.find(item => item.month == targetMonthInfo.beforeMonth)
        dayEnd = beforeMonthInfo.dayNum;
    } else {
		yearEnd = yearNow;
        monthEnd = monthNow;
		dayEnd = (parseInt(dayNow) - 1).toString();		
	}
	// console.log('-----dayEnd= '+dayEnd);

    //计算yearBegin monthBegin dayBegin
    if (parseInt(dayEnd) >= setDayNum) {
	    dayBegin = (parseInt(dayEnd) - (setDayNum-1) ).toString();
	// if (parseInt(dayEnd) >= 7) {
	//     dayBegin = (parseInt(dayEnd) - 6 ).toString();
		// console.log('当月日期够');
		monthBegin = monthEnd.toString();
		
    } else {
        let targetMonthInfo = monthInfoList.find(item => item.month == monthNow);
        let beforeMonthInfo = monthInfoList.find(item => item.month == targetMonthInfo.beforeMonth);
		// dayBegin = (parseInt(beforeMonthInfo.dayNum) + parseInt(dayNow) - 6).toString();
		// console.log('当月日期不够= '+beforeMonthInfo);

		dayBegin = (parseInt(beforeMonthInfo.dayNum) + parseInt(dayNow) - (setDayNum-1)).toString();
		monthBegin = targetMonthInfo.beforeMonth.toString();		
        if (dayEnd == 1 && monthEnd == 1) {
            yearBegin = (parseInt(yearEnd) - 1).toString();
        } else {
            yearBegin = yearEnd.toString();
        }
	}
	// DayNum
	// console.log('---monthBegin= '+ parseInt(monthBegin));
	// console.log('---dayBegin= '+ parseInt(dayBegin));
	// console.log('---monthEnd= '+ parseInt(monthEnd));
	// console.log('---dayEnd= '+ parseInt(dayEnd));
	
	let sevenDayList = zm_generateSevenDay(
		parseInt(monthBegin), 
		parseInt(dayBegin), 
		parseInt(monthEnd), 
		parseInt(dayEnd),
		setDayNum);
	return sevenDayList;
	
	// return ""
}


/* 获取 之前/之后 的日期  
 * type: 1.日期、2.时间戳（默认为日期）
 //测试
 let result1 = zm_getBeforeLaterDate('2020-01-01', 30, 2);
 let result2 = zm_getBeforeLaterDate('2020-09-10', 7, 2);
 let result3 = zm_getBeforeLaterDate('2020-10-19', 30, 2);
 console.log('--------result1= '+result1);
 console.log('--------result2= '+result2);
 console.log('--------result3= '+result3);
*/
function zm_getBeforeLaterDate(dateNow, setDayNum, type) {
	if ( (type !=1)  && (type!=2) ) {
		type = 1;
	}
    let monthInfoList = [];
    let yearNow = '';
    let monthNow = '';
    let dayNow = '';
    let yearEnd = '';
    let monthEnd = '';
    let dayEnd = '';
    let yearBegin = '';
    let monthBegin = '';
    let dayBegin = '';
    let islYear = false;//是否是闰年
    //初始化当前年月日
    yearNow = dateNow.split("-")[0];
    monthNow = dateNow.split("-")[1];
	dayNow = dateNow.split("-")[2];
	
	// console.log('\n\n-----monthNow= '+monthNow);
	// console.log('-----yearBegin1= '+yearBegin);
    if (monthNow*1 < 10) {
        monthNow = monthNow.replace('0', '');
    }
    if (dayNow*1 < 10) {
        dayNow = dayNow.replace('0', '');
	}
	// console.log('-----monthNow2= '+monthNow);
    islYear = zm_isLeapYear(yearNow);

    //初始化 monthInfoList 12个月份
    for (let i = 0; i < 12; i++) {
        monthInfoList.push({
            month: i + 1,
            dayNum: 0,
            beforeMonth: 0
        })
    }
    monthInfoList.forEach(item => {
		//dayNum		日期
		//beforeMonth 	前一个月
        if (BIGMONTH.indexOf(item.month) > -1) {
            item.dayNum = 31; // console.log('大月份');
            item.beforeMonth = item.month === 1 ? 12 : item.month - 1
        } else if (SMALLMONTH.indexOf(item.month) > -1) {
            item.dayNum = 30; // console.log('小月份');
            item.beforeMonth = item.month === 1 ? 12 : item.month - 1
        } else {
            islYear ? item.dayNum = 29 : item.dayNum = 28;
            item.beforeMonth = 1;  // console.log('二月份');
        }
    })
	// console.log('-----dayNow= '+dayNow);
    //计算yearEnd monthEnd dayEnd
    if (dayNow == 1) {
        let targetMonthInfo = monthInfoList.find(item => item.month == monthNow);
        yearEnd = monthNow == 1 ? (parseInt(yearNow) - 1).toString() : yearNow;
        monthEnd = targetMonthInfo.beforeMonth;
        let beforeMonthInfo = monthInfoList.find(item => item.month == targetMonthInfo.beforeMonth)
        dayEnd = beforeMonthInfo.dayNum;
    } else {
		yearEnd = yearNow;
        monthEnd = monthNow;
		dayEnd = (parseInt(dayNow) - 1).toString();		
	}
	// console.log('-----dayEnd= '+dayEnd);

    //计算yearBegin monthBegin dayBegin
    if (parseInt(dayEnd) >= setDayNum) {
	    dayBegin = (parseInt(dayEnd) - (setDayNum-1) ).toString();
		// console.log('当月日期够');
		monthBegin = monthEnd.toString();

		if (dayEnd == 1 && monthEnd == 1) {
            yearBegin = (parseInt(yearEnd) - 1).toString();
        } else {
            yearBegin = yearEnd.toString();
        }
		
    } else {
        let targetMonthInfo = monthInfoList.find(item => item.month == monthNow);
        let beforeMonthInfo = monthInfoList.find(item => item.month == targetMonthInfo.beforeMonth);
		// console.log('当月日期不够= '+beforeMonthInfo);
		dayBegin = (parseInt(beforeMonthInfo.dayNum) + parseInt(dayNow) - (setDayNum-1)).toString();
		monthBegin = targetMonthInfo.beforeMonth.toString();		
        if (dayEnd == 1 && monthEnd == 1) {
            yearBegin = (parseInt(yearEnd) - 1).toString();
        } else {
            yearBegin = yearEnd.toString();
        }
	}
	// let BeginDate = parseInt(yearBegin) +'-'+ parseInt(monthBegin) +'-'+ parseInt(dayBegin);
	// let endDate   = parseInt(yearEnd) +'-'+ parseInt(monthEnd) +'-'+ parseInt(dayEnd);
	let BeginDate = yearBegin +'-'+ zm_zeroFill(monthBegin) +'-'+ zm_zeroFill(dayBegin);
	let endDate   = yearEnd   +'-'+ zm_zeroFill(monthEnd)   +'-'+ zm_zeroFill(dayEnd) + " 23:59:59";
	// console.log('---BeginDate= '+ BeginDate);
	// console.log('---endDate  = '+ endDate);
	if (type==1) {
		return [BeginDate, endDate];
	}else {
		return [zm_dateStringToTimestamp(BeginDate, 1) , zm_dateStringToTimestamp(endDate, 2) ];
	}
	
}