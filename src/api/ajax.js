/*拦截器*/
/* 
 对axios进行二次包装
 1. 配置通用的基础路径和超时
 2. 显示请求进度条

 3. 成功返回的数据不再是response, 而直接是响应体数据response.data
 4. 统一处理请求错误, 具体请求也可以选择处理或不处理
 5. 每个请求自动携带userTempId的请求头: 在请求拦截器中实现
 */
import axios from "axios";

//当需要携带用户数据时从store里取
import store from "@/store";

// 创建instance
const instance = axios.create({
  // baseURL: 'http://182.92.128.115/api',
  baseURL: "/api",
  timeout: 20000
});

// 指定请求拦截器
instance.interceptors.request.use(config => {
  return config; // 必须返回config
});

// 指定响应拦截器
instance.interceptors.response.use(
  response => {
    // 成功的回调
    // 成功返回的数据不再是response, 而直接是响应体数据response.data
    return response;
  },

  error => {
    // 失败的回调
    // 结束进度条: 响应拦截器回调
    // 统一处理请求错误, 具体请求也可以选择处理或不处理
    alert("请求出错: " + error.message || "未知错误");

    // throw error
    return Promise.reject(error); // 将错误向下传递
  }
);

// 向外暴露instance
export default instance;
