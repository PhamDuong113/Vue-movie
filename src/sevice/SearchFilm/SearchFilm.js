import axios from "axios";
const Api_key = "9f601206f79006240b2e92657fec046e";

const Getsearch = (keyword, pageid) => {
  return axios.get(
    `https://api.themoviedb.org/3/search/multi?api_key=${Api_key}&language=en-US&page=${pageid}&include_adult=false&query=${keyword}`
  );
};

export { Getsearch };
