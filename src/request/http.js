import axios from "axios";
import Vue from "vue";
import router from "../router"
import CONFIG from "../config"

axios.defaults.baseURL = CONFIG.BASE_SERVER + CONFIG.BASE_API;
axios.defaults.headers.post['Content-Type'] = "application/json";
axios.defaults.headers.patch['Content-Type'] = "application/json";
axios.defaults.timeout = 10000;

// 验证 request 拦截器
axios.interceptors.request.use(
  config => {
    if (localStorage.JWT_TOKEN) {
      config.headers.Authorization = `Bearer ${localStorage.JWT_TOKEN}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error)
  }
)

// 验证 response 拦截器
axios.interceptors.response.use(
  response => {
    console.log(response.data)
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          localStorage.removeItem("JWT_TOKEN");
          localStorage.removeItem("username");
          router.replace({
            path: "Login",
            query: {redirect: router.currentRoute.fullPath}
          });
          break;
      }
    }
    return Promise.reject(error.response.data);
  }
)

Vue.prototype.$http = axios;

/**
 * 封装 get 请求
 * @param url
 * @param params
 * @returns {Promise<unknown>}
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
        resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })
  })
}

/**
 * 封装 post 请求
 * @param url
 * @param params
 * @returns {Promise<unknown>}
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params).then(res => {
      resolve(res.data);
    }).catch(error => {
      reject(error.data);
    })
  })
}

/**
 *
 * @param url
 * @param params
 * @returns {Promise<unknown>}
 */
export function patch(url, params) {
  return new Promise((resolve, reject) => {
    axios.patch(url, params).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })
  })
}


export function delete_(url) {
  return new Promise((resolve, reject) => {
    axios.delete(url).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })
  })
}