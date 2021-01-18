// 工具类
export {
	zm_beArrayContains1,
	zm_beArrayContains2,
	zm_objBeingArrayContains,
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