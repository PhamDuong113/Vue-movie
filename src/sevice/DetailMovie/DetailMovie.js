import axios from "axios";
const Api_key = "9f601206f79006240b2e92657fec046e";

const GetMoveDetail = (id) => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${Api_key}`
  );
};

const GetDetailType = (media_type, id) => {
  return axios.get(
    `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${Api_key}`
  );
};

const GetDetailTV = (id, ss) => {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${id}/season/${ss}?api_key=${Api_key}&language=en-US`
  );
};
export { GetDetailTV, GetDetailType, GetMoveDetail };
