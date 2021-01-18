function vueRequest(target, url, method, dataType, data, contentType, success, complete, error, prefix) {

  if (!url || url == null || url == "") {
    target.$message.error("远程地址为空");
  } else {
    let openId = target.$cookie.get("openId");
    let token = target.$cookie.get("token");
    if (!openId || !token || openId == null || token == null) {
      target.$message.error("未登录");
    } else {
      let uri = target.$global[prefix];
      target.$http.post(uri + url + "?openId=" + openId, data, {
        headers: {
          "Authorization": "Bearer " + token,
        }
      }).then(
        resolve => {
          if (resolve.status == 200) {
            let result = resolve.data;
            if (result.status) {
              let status = result.status;
              if (status == "200" && success && typeof success == "function") {
                success(result);
              }
              else {
                if(result.status == 301){
                  target.$router.push({
                     path: '/'
                  });
                  target.$message.warning('检测到登录过期,请重新登录');
                }else{
                  target.$message.error(result.message)
                }

              }
            } else {
              if (success && typeof success == "function") {
                success(result);
              }
            }

          } else {

            target.$message.error(success.statusText);
          }
        },
        reject => {
          console.log(reject);
        })
    }
  }
}
function vueRequestApi(target, url, method, dataType, data, contentType, success, complete, error, prefix) {
  if (!url || url == null || url == "") {
    target.$message("远程地址为空");
  } else {
    let token = target.$cookie.get("token");
    let suserId = target.$cookie.get("userId");
    if (!token || token == null || !suserId || suserId == null) {
      target.$message.error("未登录");
    } else {
      let uri = target.$global[prefix];
      target.$http.post(uri + url, data, {
        headers: {
          suserId: suserId
        }
      }).then(
        resolve => {
          if (resolve.status == 200) {
            let result = resolve.data;
            if (result.status) {
              let status = result.status;
              if (status == "200" && success && typeof success == "function") {
                success(result);
              }
              else {
                target.$message.error(result.message)
              }
            } else {
              if (success && typeof success == "function") {
                success(result);
              }
            }

          } else {
            target.$message.error(success.statusText);
          }
        },
        reject => {
          console.log(reject);
        })
    }
  }
}
function formatDate(d, s, half) {
  let year = d.getFullYear();
  let month = d.getMonth() + 1;
  let date = d.getDate();
  let hour = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();
  return ([year, month, date].map(function(item) {
    item = item.toString()
     return item[1] ? item : '0' + item;
  }).join(s ? s : "-")) + ((half && half == true) ? "": (" " + [hour, minutes, seconds].map(function(item) {
    item = item.toString()
    return item[1] ? item : '0' + item;
  }).join(":")));
}
function formateDateChinese(d) {
  let month = (d.getMonth() + 1).toString();
  month = month[1] ? month : "0" + month;
  let date = (d.getDate()).toString();
  date = date[1] ? date : "0" + date;
  return month + "月" + date + "日";
}
module.exports = {
  vueRequest: vueRequest,
  vueRequestApi: vueRequestApi,
  formatDate: formatDate,
  formateDateChinese: formateDateChinese
}
