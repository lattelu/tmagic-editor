import type { AxiosResponse } from 'axios'
import axios from 'axios'
import type { App } from 'vue'

const service = axios.create({
  withCredentials: true,
  timeout: 7000
})

const requestHandler = function (config: Record<any, any>) {
  return config
}

const responseHandler = function (response: AxiosResponse) {
  return response
}

service.interceptors.request.use(requestHandler)
service.interceptors.response.use(responseHandler)

export default {
  install(app: App) {
    app.provide('request', service)
  }
}
