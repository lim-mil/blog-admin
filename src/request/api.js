// import {post} from "./http"
import axios from "axios";

export const apiLogin = p => {
  let token = "";
  let config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    }
  }
  let data = new FormData();
  data.append("username", p.username);
  data.append("password", p.password);
  axios.post("http://127.0.0.1:7331/api/v1/user/token", data, config).then(response => {
    // console.log(response.data.data);
    token = response.data.data.access_token;
  })
  console.log(token);
  return token;
  // post("api/v1/user/token", p);
}