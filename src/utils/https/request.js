import axios from 'axios';
import statusCode from './statusCode';

let request = axios.create({
    baseURL: 'http://192.168.0.105:8082',
    timeout: 1000 * 2, //40s
    // true：在跨域请求时，会携带用户凭证
    // false：在跨域请求时，不会携带用户凭证；返回的 response 里也会忽略 cookie
    // withCredentials:true,
    // withCredentials: ()=>{
    //     console.log('withCredentials');
    //     return true;
    // }, // cross-site
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        //  //请求体中的数据会以普通表单形式（键值对）发送到后端，常见提交表单
        // get:{'Content-Type':'application/x-www-form-urlencoded'},
        //  //default
        //  //请求体中的数据会以json字符串的形式发送到后端
        //  post:{'Content-Type':'application/json;charset=utf-8'}
        //  // multipart/form-data 常见前端页面上传个人图像
    },
    // 在向服务器发送请求前，序列化请求数据
    transformRequest: [function (data) {
        data = JSON.stringify(data);
        return data
    }],
    // 在传递给 then/catch 前，修改响应数据
    //不加的话，直接返回解析好的data：data.data
    //加transformResponse，返回data中包含请求数据及返回数据状态码等
    transformResponse: [function (data) {
        if (typeof data == 'string') {
            return JSON.parse(data);
        }
        return data
    }],
});
let loading = document.getElementById('ajaxLoading');

request.interceptors.request.use(
    config => {
        if (!config.data) {
            loading.style.display = 'block';
        }
        //config是请求头内容
        return config;
    },
    error => {
        error.data = {};
        error.data.msg = '服务器异常,请联系管理员';
        return Promise.reject(error.data.msg);
    }
);

request.interceptors.response.use(
    config => {
        loading.style.display = 'none';
        let status = config.status;
        if (status >= 200 || status < 400) {
            return config;
        }
        let msg = statusCode(status);
        config.data = {};
        config.data.msg = msg;
        return Promise.reject(config.data.msg);
    },
    error => {
        loading.style.display = 'none';
        error.data = {};
        error.data.msg = '请求超时或者服务器异常，请检查网络';
        return Promise.reject(error.data.msg);
    }
);
export default request;
