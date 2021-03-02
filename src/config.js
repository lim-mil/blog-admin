// eslint-disable-next-line no-unused-vars
import merge from "lodash/merge"

let PORT = 5076
let HOST = "localhost"

let CONFIG = {
  BASE_SERVER: `http://${HOST}:${PORT}`,
  BASE_API: `/api/v1`,
  MEDIA_API: "/media",
  STATIC_API: "/static"
}

try {
  const pri = require("./private.js");
  merge(CONFIG, pri.default);
} catch (e) {
  console.log("Failed to load private configuration!");
}

export default CONFIG;