export const ts2str = function (ts) {
  let time_str = new Date(ts * 1000);
  return time_str.getFullYear() + "-" + (time_str.getMonth()+1) + "-" + time_str.getDate() + " " + time_str.getHours() + ":" + time_str.getMinutes() + ":" + time_str.getSeconds();
}