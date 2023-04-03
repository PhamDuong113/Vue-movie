import axios from "axios";
const Api_key = "9f601206f79006240b2e92657fec046e";

const TvShow = () => {
  return axios.get(
    `https://api.themoviedb.org/3/tv/popular?api_key=${Api_key}&language=en-US&page=1`
  );
};

export { TvShow };
