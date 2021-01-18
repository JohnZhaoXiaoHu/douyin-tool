import axios from 'axios' ;//创建axios实例
import { Message } from 'element-ui';    //Message是element库的组件，可以去掉
import VueCookie from 'vue-cookie';

var service = axios.create({
    baseURL: 'http://api.mihuanshop.com', 
    timeout: 2000,                      
        headers: {
        "Content-Type": "multipart/form-data",
        "userId"  :VueCookie.get('userId'),
        "suserId": VueCookie.get('userId'),
        "roleId" : VueCookie.get('roleId'),     
        "adminId" : VueCookie.get('id')	
    }
});
//兼用post 请求  文件上传  get 请求另行封装(一般post相对安全)
export default {
    //post 修改method
    post(url,data,externalservice) {
        externalservice == undefined ? externalservice = service : externalservice;
        return new Promise((cback, reject) => {
            externalservice({
                method: 'post',
                url,
                data:data,    // 这边不能JSON.string(会出问题 -- )
            }).then(res => { 
                //axios返回的是一个promise对象 
                var res_code = res.status.toString();
                if (res_code.charAt(0) == 2) {
                    cback(res);   //cback在promise执行器内部
                } else {
                    console.log(res, '异常1');
                }
            }).catch(err => {
                if (!err.response) {
                //   服务器重启  err.response undefined
                    console.log('请求错误');
                    Message({         
                        showClose: true,
                        message: err.message + ' 服务器启动中',
                        type: 'error'
                    });  
                                          
                
                } else {
                    // reject(err.response); 
                    console.error(err.response, '异常2');
                 
                    //处理异常
                    switch(err.response.status){
                        case 400:
                            Message({         
                                showClose: true,
                                message: '参数错误,请检查',
                                type: 'error'
                            });     
                            break;  
                        case 301:
                            Message({         
                                showClose: true,
                                message: '登录过期',
                                type: 'error'
                            }); 
                            router.replace({
                                path: '/login',
                                // query: { redirect: router.currentRoute.fullPath }
                            }); 
                            break;
                        case 403:  
                            Message({         
                                showClose: true,
                                message: '参数错误请检查',
                                type: 'error'
                            });     
                            break;  
                        case 404:  
                            Message({         
                                showClose: true,
                                message: '请求地址不存在',
                                type: 'error'
                            });     
                            break; 
                        case 405:  
                            Message({         
                                showClose: true,
                                message: '请求方式姿势错误',
                                type: 'error'
                            });     
                            break;
                        case 500:
                            Message({         
                                showClose: true,
                                message: '服务器500',
                                type: 'error'
                            });     
                            break;  
                        case 502:
                            Message({         
                                showClose: true,
                                message: '服务器正在启动中',
                                type: 'error'
                            }); 
                            break;
                        case 503:  
                            Message({         
                                showClose: true,
                                message: '服务器开小差',
                                type: 'error'
                            });     
                            break;  
                        case 505:  
                            Message({         
                                showClose: true,
                                message: '服务器异常505',
                                type: 'error'
                            });     
                            break;
                        default:
                            Message({         
                                showClose: true,
                                message:  err.response.data.message,
                                type: 'error'
                            });  
                    }
                }
            })

        })
    }
} 