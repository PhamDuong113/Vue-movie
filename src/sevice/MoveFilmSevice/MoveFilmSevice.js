import axios from "axios";
const Api_key = "9f601206f79006240b2e92657fec046e";

const GetDiscovery = (typemoveid, year, rankmove, page) => {
  return axios.get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&language=en-US&sort_by=${rankmove}&include_adult=false&include_video=false&page=${page}&with_genres=${typemoveid}&primary_release_year=${year}`
  );
};
export default GetDiscovery;
