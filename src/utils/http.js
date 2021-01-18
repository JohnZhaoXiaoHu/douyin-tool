import axios from 'axios' ;//创建axios实例
import { Message } from 'element-ui';    //Message是element库的组件，可以去掉
import VueCookie from 'vue-cookie';

//兼用post 请求  文件上传  get 请求另行封装(一般post相对安全)
export default {
    //post 修改method
    post(url,data) {
        return new Promise((cback, reject) => {
            axios({
                method: 'post',
                url,
                data:data,    // 这边不能JSON.string(会出问题 -- )
            }).then(res => { 
                //axios返回的是一个promise对象 
                // console.log(res)
                var res_code = res.status.toString();
                // console.log(res_code );
                if (res_code.charAt(0) == 2) {
                    if(res.data.status == 200){
                        cback(res);   //cback在promise执行器内部
                    } else if(res.data.status == 403) {
                        Message({         
                            showClose: true,
                            message: res.data.message,
                            type: 'error'
                        });  
                        return false;    
                    }else{
                        Message({         
                            showClose: true,
                            message: res.data.message,
                            type: 'error'
                        });  
                        return false;   
                    }
                   
                } else {
                    console.log(res, '异常1');
                }

                if(res.data.status == 500){
                    Message({         
                        showClose: true,
                        message: res.data.message,
                        type: 'error'
                    });  
                    return false;
                }

                if(res.data.status == 301){
                    Message({         
                        showClose: true,
                        message: '登录过期',
                        type: 'error'
                    }); 
                    router.replace({
                        path: '/login',
                        // query: { redirect: router.currentRoute.fullPath }
                    }); 
                }

                if(res.data.status == 505){
                    Message({         
                        showClose: true,
                        message:'状态码505,' +'错误信息' + res.data.message,
                        type: 'error'
                    });  
                    return false;
                }
            }).catch(err => {
                console.log(err);
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