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
  let url = "/posts?" + "page=" + page + "&" + "step=" + step;
  return get(url);
}

export const apiPost = (post_id) => {
  let url = "/posts/" + post_id;
  return get(url);
}

export const apiPostCategoriesSimple = () => {
  let url = "/posts/categories/simple";
  return get(url);
}

export const apiPostCategories = () => {
  let url = "/posts/categories";
  return get(url);
}

export const apiPostCategory = (post_category_id) => {
  let url = "/posts/categories/" + post_category_id;
  return get(url);
}

export const apiProjects = () => {
  let url = "/projects";
  return get(url);
}

export const apiProject = (project_id) => {
  let url = "/projects/" + project_id;
  return get(url);
}

export const apiProjectCategoriesSimple = () => {
  let url = "/projects/categories/simple";
  return get(url);
}

export const apiProjectCategories = () => {
  let url = "/projects/categories";
  return get(url);
}