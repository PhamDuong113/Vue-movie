import axios from "axios";
const Api_key = "9f601206f79006240b2e92657fec046e";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: { Authorization: `Bearer ${Api_key}` },
});
