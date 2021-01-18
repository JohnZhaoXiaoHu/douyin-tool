/*
 *   ======================= object、string、number 功能配置  =======================
 */

export {
    zm_getObjectAllKey,
    zm_isEmptyObject,
    zm_isNotEmptyObject,
    //
    zm_isEmptyString,
    zm_isNotEmptyString,
    zm_emptyToOne,
    zm_errorStringToEmptyString,
	zm_nullToLineString,
	zm_nullToBlankString,
    zm_isEmptyStringAlert,
    //
    zm_isRealNum,
    zm_nullOrBlankToZero,
    zm_nullOrBlankToNumber,
    zm_isPureInteger,
    zm_isInteger,
	zm_checkNumAddLetter,
}

/*
var str="www.runoob.com!";
document.write(str.substring(4)+"<br>");// 从第 5 个字符开始截取到末尾
document.write(str.substring(4,10)); 	// 从第 5 个字符开始截取到第10个字符
document.write(str.substr(4,6)); 		// 从第 4 个字符开始截取6个字符
document.write(str.slice(4)+"<br>"); 	// 从第 5 个字符开始截取到末尾
document.write(str.slice(4,10)); 		// 从第 5 个字符开始截取到第10个字符
*/

/*
 *   ======================= object 功能配置  =======================
 */
/*
 *  取出对象的所有 key，放入数组
 */
function zm_getObjectAllKey(obj) {
	var keyArray = [];
	//遍历对象的所有属性，包括原型链上的所有属性
	for(var key in obj) {　
		keyArray.push(key)　
		//console.log("key= " + key);
		//console.log(obj[key]);
	}
	return keyArray;
}

// 1-1、判断：对象 是否为空
function zm_isEmptyObject(obj) {
	if(zm_isRealNum(obj)) {
		return false;
	}
	if(obj == null || Object.keys(obj).length == 0 || obj == undefined) {
		return true;
	} else {
		return false;
	}
}
// 1-2、判断：是否为 空对象
function zm_isNotEmptyObject(obj) {
	if(obj == null || Object.keys(obj).length == 0 || obj == undefined) {
		return false;
	} else {
		return true;
	}
}


/*
 *   ======================= string 功能配置  =======================
 */
// 判断字符串 是否为空   true空、false非空
function zm_isEmptyString(string) {
	if(string.length == 0 || string == null || string == '' || string == undefined) {
		return true;
	} else {
		return false;
	}
}

// 判断是否为 空字符串  true非空、false空
function zm_isNotEmptyString(string) {
	if(string == null || string == '' || string == undefined || string == "undefined") {
		return false;
	} else {
		return true;
	}
}



// 空 转 1 
function zm_emptyToOne(val) {
	if(val == "" || val == undefined || val == null) {
		return 1;
	} else {
		return val;
	}
}

// 错误字符串 转 空字符串
function zm_errorStringToEmptyString(string) {
	if(string == null || string == '' || string == undefined || string == "undefined") {
		return "";
	} else {
		return string;
	}
}

// null 转 空字符串/特殊字符串（/ - --）
function zm_nullToLineString(obj, type) {
	if(obj) {
		console.log('---nullToBlankString：obj')
		return obj;
	} else {
		console.log('---nullToBlankString：BlankString')
		if(type == 1) {
			return "/"
		} else if(type == 2) {
			return "--"
		} else {
			return "-"
		}

	}
}
// null 转 空字符串（可能是数字零）
function zm_nullToBlankString(obj) {
	if(obj || obj*1 == 0 || obj != undefined) {
		return obj;
	} else {
		return ""
	}
}



// 空字符串警告
function zm_isEmptyStringAlert(zmString, alertString) {
	if(zm_isEmptyString(zmString)) {
		alert(alertString);
	}
}


/*
 *   ======================= number 功能配置  =======================
 */
function zm_isRealNum(val) {
	// 先判定是否为number
	if(typeof val !== 'number') {
		return false;
	}
	if(!isNaN(val)) {
		return true;
	} else {
		return false;
	}
}


// 1-1、null/空字符串 转为（数字、数字零）
function zm_nullOrBlankToZero(obj) {
	if(obj == null || obj == undefined || obj == '') {
		return 0;
	} else {
		return obj * 1
	}
}
// 1-2、null/空字符串 转为（数字、数字零）
function zm_nullOrBlankToNumber(obj) {
	if(obj == null || obj == undefined || obj == '') {
		return '';
	} else {
		return obj * 1
	}
}

//判断是否为 正整数类型（不能为空、不能为字符串）
function zm_isPureInteger(obj) {
	return typeof obj === 'number' && obj % 1 === 0;
}
//判断是否为 正整数类型
function zm_isInteger(obj) {
	return obj % 1 === 0;
}


//判断字符串是否为：数字和字母组合    
//判断正整数 /^[1-9]+[0-9]*]*$/
function zm_checkNumAddLetter(nubmer) {
	var re = /^[0-9a-zA-Z]*$/g;
	var re1 = /^[0-9]*$/g;
	var re2 = /^[a-zA-Z]*$/g;

	var bool1 = false;
	var bool2 = false;
	var bool3 = false;
	if(re1.test(nubmer)) {
		bool1 = true; //是纯数字
	} else {
		bool1 = false;
	}
	if(re2.test(nubmer)) {
		bool2 = true; //是纯字母
	} else {
		bool2 = false;
	}
	if(!re.test(nubmer)) {
		bool3 = false;
	} else {
		bool3 = true; //是：数字 或 字母 
	}
	if(!bool1 && !bool2 && bool3) {
		return true;
	} else {
		return false;
	}
}
