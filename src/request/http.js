import axios from "axios";
import Vue from "vue";

axios.defaults.baseURL = "http://localhost:7331";
axios.defaults.headers.post['Content-Type'] = "application/json";

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
    return response;
  },
  error => {
    if (error.response) {
      console.log(error.response.statusCode);
      switch (error.response.statusCode) {
        case 401:
          router.replace({
            path: "Login",
            query: {redirect: router.currentRoute.fullPath}
          });
      }
    }
    return Promise.reject(error.response.data);
  }
)

Vue.prototype.$http = axios;