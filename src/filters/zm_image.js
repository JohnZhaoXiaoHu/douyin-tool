/*
 *   ======================= 图片 功能配置  =======================
 */
export {
	zm_translateImgToBase64,
	zm_getImageFileFromImgURL,
	zm_translateBase64ImgToFile,
	zm_translateBase64ImgToBlob,
	zm_getBase64,
	zm_getBase64Image,
	zm_imgToBase64,
	zm_dataURLtoFile,
	zm_base64ToFile,
}

/* 
 * 图片的绝对路径地址 转换成base64编码 如下代码： 
 */
function zm_getBase64Image(img) {
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	img.setAttribute("crossOrigin", 'Anonymous')
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, img.width, img.height);
	var ext = img.src.substring(img.src.lastIndexOf(".") + 1).toLowerCase();
	var dataURL = canvas.toDataURL("image/" + ext);
	return {
		dataURL: dataURL,
		type: "image/" + ext
	};
}
//js Base64 转化成图片格式
function zm_dataURLtoFile(dataurl, filename = 'file') {
	let arr = dataurl.split(',')
	let mime = arr[0].match(/:(.*?);/)[1]
	let suffix = mime.split('/')[1]
	let bstr = atob(arr[1])
	let n = bstr.length
	let u8arr = new Uint8Array(n)
	while (n--) {
		u8arr[n] = bstr.charCodeAt(n)
	}
	return new File([u8arr], `${filename}.${suffix}`, {
		type: mime
	})
}



//转换 Base64 到 file
function zm_base64ToFile(data, fileName) {
	const dataArr = data.split(",");
	const byteString = atob(dataArr[1]);
	const options = {
		type: "image/jpeg",
		endings: "native"
	};
	const u8Arr = new Uint8Array(byteString.length);
	for (let i = 0; i < byteString.length; i++) {
		u8Arr[i] = byteString.charCodeAt(i);
	}
	return new File([u8Arr], fileName + ".jpg", options);
}

/** image 转换成 Base64 */
function zm_imgToBase64(image) {
	var canvas = document.createElement("canvas");
	canvas.width  = image.width;
	canvas.height = image.height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(image, 0, 0, image.width, image.height);
	var ext = image.src.substring(image.src.lastIndexOf(".") + 1).toLowerCase();
	var dataURL = canvas.toDataURL("image/" + ext);
	return dataURL;
}
/**
 * URL转base64
 * @param url String 图片链接
 * @callback Function 获取base64格式后的回调函数
 * 'image/jpeg'、'image/png'
 */
function zm_translateImgToBase64(url, imageName, callback) {

	if (imageName==null || imageName==undefined) {
		imageName = 'image/jpeg';
	}
	var canvas = document.createElement('canvas')
	context = canvas.getContext('2d')
	img = new Image  //通过构造函数绘制图片实例
	img.crossOrigin = 'Anonymous'  //处理图片跨域问题，见拓展1
	img.onload = function () {   //该加载过程为异步事件，请先确保获取完整图片
		canvas.width  = img.width
		canvas.height = img.height
		context.drawImage(img, 0, 0)  //将图片绘制在canvas中
		var URLData = canvas.toDataURL(imageName);
		callback(URLData);
		canvas = null
	}
	img.src = url
}

function zm_getImageFileFromImgURL(url, imageName,callback) {
	// imageName一定要带上后缀
	  var blob = null;
	  var xhr = new XMLHttpRequest(); 
	  xhr.open("GET", url);
	  xhr.setRequestHeader('Accept', 'image/jpeg');
	  xhr.responseType = "blob";
	  xhr.onload = () => {
	  if (xhr.status == 200) {
		blob = xhr.response;
		let imgFile = new File([blob], imageName, {type: 'image/jpeg'});
		console.log(imgFile)
		callback.call(this,imgFile);
	  }};
	  xhr.send();
  }

/**
 * 获取base64格式的回调函数
 * @param URLData 获取的base64格式
 */
function zm_getBase64(URLData) {
	console.log("base64", URLData)
}

/**
 * Base64 转 file
 * @param base64 String base64格式字符串
 * @param contentType String file对象的文件类型，如："image/png"
 * @param filename String 文件名称或者文件路径
 */
function zm_translateBase64ImgToFile(base64, filename, contentType) {
	var arr = base64.split(',')  //去掉base64格式图片的头部
	var bstr = atob(arr[1])   //atob()方法将数据解码
	var leng = bstr.length
	var u8arr = new Uint8Array(leng)
	while (leng--) {
		u8arr[leng] = bstr.charCodeAt(leng) //返回指定位置的字符的 Unicode 编码
	}
	return new File([u8arr], filename, { type: contentType })
}

/**
 * Base64转Blob
 * @param base64 String base64格式字符串
 * @param contentType String blob对象的文件类型，如："image/png"
 */
function zm_translateBase64ImgToBlob(base64,contentType){
	var arr = base64.split(',')  //去掉base64格式图片的头部
	var bstr = atob(arr[1])   //atob()方法将数据解码
	var leng = bstr.length
	var u8arr = new Uint8Array(leng)
	while(leng--){
	   u8arr[leng] =  bstr.charCodeAt(leng) //返回指定位置的字符的 Unicode 编码
	}
	var blob = new Blob([u8arr],{type:contentType})
	var blobImg = {}
	blobImg.url = URL.createObjectURL(blob )  //创建URL,
	blobImg.name = new Date().getTime() + '.png'
	return blobImg;

}
