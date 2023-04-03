import axios from "axios";
const Api_key = "9f601206f79006240b2e92657fec046e";

const GetGene = () => {
  return axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${Api_key}&language=en-US`
  );
};
export { GetGene };
