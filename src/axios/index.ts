import axios from 'axios'
import qs from 'qs'
import { ElMessage } from 'element-plus'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const baseConf: AxiosRequestConfig = {
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: 'http://150.158.96.29:8781',
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 它只能用于 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream
  // 你可以修改请求头。
  transformRequest: [function (data, headers) {
    // 对发送的 data 进行任意转换处理 
    // 将对象 序列化成URL的形式，以&进行拼接
    return qs.stringify(data);
  }],
}

class Request {
  // axios 实例
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create({ ...config, ...baseConf })
    // 请求拦截器
    this.instance.interceptors.request.use(
      (res: AxiosRequestConfig) => {
        return res
      },
      (err: any) => err,
    )
    this.instance.interceptors.response.use(
      // 响应拦截器
      (res: AxiosResponse) => {
        if (res.status) {
          ElMessage({
            message: 'success',
            type: 'success',
          })
        }
        return res.data
      },
      (err: any) => err,
    )
  }
  request(config: AxiosRequestConfig) {
    console.log(config)
    return this.instance.request(config)
  }

  get(url: string, config: AxiosRequestConfig) {
    return this.instance.get(url, config)
  }
  post(url: string, config: AxiosRequestConfig) {
    return this.instance.post(url, config)
  }
}

export default Request 