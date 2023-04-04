import axios from "axios";
const Api_key = "9f601206f79006240b2e92657fec046e";

const SlideShow = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/all/week?api_key=${Api_key}`
  );
};
export { SlideShow };
