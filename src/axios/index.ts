import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

const config = {

}

class Request {
  // axios 实例
  instance: AxiosInstance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
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
        return res.data
      },
      (err: any) => err,
    )
  }
  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }
}

export default Request 