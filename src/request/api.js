// import {post} from "./http"
import axios from "axios";
import {get, patch} from "./http";

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

export const apiInfo = () => {
  let url = "/info";
  return get(url);
}

export const apiUpdatePost = (post_update, post_id) => {
  let url = "/posts/" + post_id;
  return patch(url, post_update);
}

export const apiUpdateProject = (projecct_update, project_id) => {
  let url = "/projects/" + project_id;
  return patch(url, projecct_update);
}

export const apiUpdatePostCategory = (post_category, post_category_id) => {
  let url = "/posts/categories/" + post_category_id;
  return patch(url, post_category);
}

export const apiUpdateProjectCategory = (project_category, project_category_id) => {
  let url = "/projects/categories/" + project_category_id;
  return patch(url, project_category);
}

export const apiUpdateInfo = (info) => {
  let url = "/info";
  return patch(url, info);
}

export const apiUploadImage = (file) => {
  let url = "/info/image";
  let config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }
  let data = new FormData();
  data.append("image", file.file);

  return axios.post(url, data, config);
}