// 工具类
export {
	zm_tipsMsg,
	zm_DateToTimestamp,
    zm_timestampToDate,
	zm_jsonToString,
	zm_formDataToJson,
	zm_formDataToString,
	zm_getCurrenTimestamp,
	zm_getCurrenDate,
	zm_getCurrenDateYYYYMMDD,
	zm_getCurrenDateHHMMSS,
	zm_standardDateToFormatDate,
	zm_copyToClip,
	dateFormat,
	getzf,
	zm_isPhoneNum,
}

/**
 * 复制内容到粘贴板
 * content : 需要复制的内容
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
function zm_copyToClip(content) {
	if(content != null &&  content != '') {
		var aux = document.createElement("input");
		aux.setAttribute("value", content);
		document.body.appendChild(aux);
		aux.select();
		document.execCommand("copy");
		document.body.removeChild(aux);
		return true;
	}else {
		return false;
	}
}

/*
 *   ======================= 特殊功能配置  =======================
 */
//判断是否为手机号的正则表达式
function zm_isPhoneNum(phoneNum){
    var myreg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
    if (!myreg.test(phoneNum)) {
        console.log('手机号格式不正确')
      	return false;
    } else {
        console.log('手机号格式正确')
      	return true;
    }
}


// ============================ 消息提示 处理 ============================ 
/*
 * 提示框
 */
function zm_tipsMsg(message, icon, mask, duration) {
	uni.showToast({
		title: message || "提示",
		icon: icon || "none",
		mask: mask || true,
		duration: duration || 1500
	})
}


// ============================ 时间日期 处理 ============================ 



// ============================ 时间日期 处理 ============================ 

/*
 * 获取当前时间戳
 */
function zm_getCurrenTimestamp(type) {
	var timestamp = '';
	if (type==0) {
		timestamp = Date.parse(new Date());
	} else if (type==1) {
		timestamp = (new Date()).valueOf();
	} else if (type==2) {
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

	var getCurrenDate = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
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

	var getCurrenDate = year + "-" + month + "-" + date;
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


//时间处理函数
function dateFormat(row, column, cellValue, index) {
	const daterc = row[column.property];
	if (daterc != null) {
		const dateMat = new Date(daterc.time);
		//const dateMat= new Date(parseInt(daterc.replace("/Date(", "").replace(")/", ""), 10));
		const year = dateMat.getFullYear();
		const month = dateMat.getMonth() + 1;
		const day = dateMat.getDate();
		const hh = dateMat.getHours();
		const mm = dateMat.getMinutes();
		const ss = dateMat.getSeconds();
		const timeFormat = this.getzf(year) + "-" + this.getzf(month) + "-" + this.getzf(day) + " " + this.getzf(hh) + ":" + this.getzf(mm) + ":" + this.getzf(ss);
		return timeFormat;
	}
}
//补0操作  
function getzf(num){
	if (parseInt(num) < 10) {
		num = '0' + num;
	}
	return num;
}

				
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
		return dateTime.getTime();

	} else if (type==2) {
		return dateTime.valueOf();

	}else if (type==3) {
		return  Date.parse(dateTime);
	}else {
		return date;
	}
}

/*
 * 时间戳 转换成 日期
 * 测试案例：
	console.log('---timestampToDate1：' + timestampToDate(1533293827000))
	console.log('---timestampToDate2：' + timestampToDate(1533293827))
	console.log('---timestampToDate2：' + timestampToDate(1533293827,1))
 */
function zm_timestampToDate(timestamp, type) {
	if (timestamp == '' || timestamp == null || !timestamp) {
		return;
	}
	if (timestamp.toString().length < 13) {
		timestamp = timestamp * 1000;
	}
	timestamp = timestamp * 1; //若是字符 需要转换成 数字
	var date = new Date(timestamp) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var Y = date.getFullYear() + '-'
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-'
	var D = date.getDate() + ' '
	var h = ''
	var m = ''
	var s = ''
	if (!type) {
		h = date.getHours() 
		m = date.getMinutes()
		s = date.getSeconds()

		// if (M.length < 10) {
		// 	M = "0" + M
		// }
		// if (D.length < 10) {
		// 	D = "0" + D
		// }
		// console.log('------h= '+h.length);
		// console.log('------m= '+m);
		// console.log('------s= '+s);

		if (h < 10) {
			h = "0" + h
		}
		if (m < 10) {
			m = "0" + m
		}
		if (s < 10) {
			s = "0" + s
		}
		h = h + ':';
		m = m + ':';

		return Y + M + D + h + m + s
	} else {
		return Y + M + D
	}
}

/* type
 * 1、YYYY_MM_DD
 * 2、YYYY_MM_DD hh:mm:ss
 * 时间戳转日期
 */
function zm_standardDateToFormatDate(myDate, type) {
	//console.log('--------getStandardDateTo');
	var myDate = new Date(myDate);
	var datetime = ''
	if(type == 1) {
		datetime = myDate.getFullYear() + '-' + getzf(myDate.getMonth()+1) + '-' + getzf(myDate.getDate());
	} else if(type == 2) {
		datetime = getzf(myDate.getHours()) + ':' + getzf(myDate.getMinutes()) + ':' + getzf(myDate.getSeconds());
	} else {
		datetime = myDate.getFullYear() + '-' + getzf(myDate.getMonth() + 1) + '-' + getzf(myDate.getDate()) + ' ' 
		+ getzf(myDate.getHours()) + ':' + getzf(myDate.getMinutes()) + ':' + getzf(myDate.getSeconds());
	}
	return datetime;
}

// ============================ 数组处理 ============================ 
/*
 * 判断 obj 是否在数组中
 * 不能判断是否包含数字
 */
function zm_beingArrayContains(obj, array) {
	if(array.indexOf(obj) == 2) {
		return true;
	} else {
		return false;
	}
}
// 不能判断是否包含数字
function zm_beingArrayContains2(obj, array) {
	if(array.indexOf(obj) == 2) {
		return obj;
	} else {
		return '';
	}
}
// 判断 obj 是否在数组中 (转换成JSON来判断，使用: indexOf)
function zm_beArrayContains1(obj, array) {
	if(JSON.stringify(array).indexOf(JSON.stringify(obj)) === -1) {
		return false;
	} else {
		return true;
	}
}
// 判断 obj 是否在数组中 (转换成JSON来判断，使用: includes)
function zm_beArrayContains2(obj, array) {
	if(JSON.stringify(array).includes(JSON.stringify(obj)) === -1) {
		return false;
	} else {
		return true;
	}
}

// 可以判断是否包含数字（循环遍历）
function zm_objBeingArrayContains(obj, array) {
	var beingContain;
	for(var i = 0; i < array.length; i++) {
		var item = array[i];
		if(obj == item) {
			beingContain = true;
			break;
		} else {
			beingContain = false;
		}
	}
	return beingContain;
}

/*
 * 删除数组中 指定元素
	zm_arrayDeleteObj('11', tempArray);
	zm_arrayDeleteObj(dic1, tempArray);
	zm_arrayDeleteObj(arr1, tempArray);
 */
function zm_arrayDeleteObj(obj, arr) {　　
	var index = arr.indexOf(obj);
	arr.splice(index, 1)
}

/**
 * 复制内容到粘贴板
 * content : 需要复制的内容
 * message : 复制完后的提示，不传则默认提示"复制成功"
 */
function copyToClip(content, message) {
	var aux = document.createElement("input");
	aux.setAttribute("value", content);
	document.body.appendChild(aux);
	aux.select();
	document.execCommand("copy");
	document.body.removeChild(aux);
	if(message == null) {
		alert("复制成功");
	} else {
		alert(message);
	}
}

/*
 * FormData  to  String
 */
function zm_formDataToString(formData) {
	var jsonData = zm_formDataToJson(formData)
	return zm_jsonToString(jsonData);
}	

/*
 * FormData  to  json
 */
function zm_formDataToJson(formData) {
	var jsonData = {};
	formData.forEach((value, key) => jsonData[key] = value);
	return jsonData;
}	

/*
 * json  to  string
 */
function zm_jsonToString(json) {
	if (json == '' || json == null) {
		return "";
	}
	if (typeof json != 'string') {
		json = JSON.stringify(json, undefined, 2);
	}
	json = json.replace(/&/g, '&').replace(/</g, '<').replace(/>/g, '>');
	return json.replace(
		/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
		function(match) {
			var cls = 'number';
			if (/^"/.test(match)) {
				if (/:$/.test(match)) {
					cls = 'key';
				} else {
					cls = 'string';
				}
			} else if (/true|false/.test(match)) {
				cls = 'boolean';
			} else if (/null/.test(match)) {
				cls = 'null';
			}
			//return '<span class="' + cls + '">' + match + '</span>';
			return match;
		});
}


/*
 * --------------------- 设置/获取：Cookie --------------------- 
 */
/* 获取 cookie 值的函数
 * cname：标识
 * cvalue：值
 * exdays：保存天数
 */
function zm_setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}
/* 设置 cookie 值的函数
 * cname：标识
 */
function zm_getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		if(c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return "";
}