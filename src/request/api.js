// import {post} from "./http"
import axios from "axios";
import {get} from "./http";

export const apiLogin = p => {
  let config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }
  let data = new FormData();
  data.append("username", p.username);
  data.append("password", p.password);
  return axios.post("http://127.0.0.1:7331/api/v1/user/token", data, config);
}

export const apiPosts = (page=1, step=20) => {
  let url = "/posts/?" + "page=" + page + "&" + "step=" + step;
  return get(url);
}

export const apiPost = (post_id) => {
  let url = "/posts/" + post_id;
  return get(url)
}