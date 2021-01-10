import axios from "axios";

axios.defaults.baseURL = "http://localhost:7331";
axios.defaults.headers.post['Content-Type'] = "application/json";