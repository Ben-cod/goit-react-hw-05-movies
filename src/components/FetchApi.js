import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '375555662ee8c437516581273f858c4c';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const getTrendinMovies = async () => {
  return await api
    .get('/trending/movie/day')
    .then(({ data: { results } }) =>
      results.map(({ id, title, poster_path: poster }) => ({
        id,
        title,
        poster: IMG_URL + poster,
      }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

export const getSearchMovie = async query => {
  return await api
    .get(`/search/movie?query=${query}`)
    .then(({ data: { results } }) =>
      results.map(({ id, title, poster_path: poster }) => ({
        id,
        title,
        poster: IMG_URL + poster,
      }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

export const getMovieDetails = async movieId => {
  const respons = await api.get(`/movie/${movieId}`);
  console.log(respons);
  return respons;
};

export const getMovieCast = async movieId => {
  const respons = await api.get(`/movie/${movieId}/credits`);
  return respons;
};

export const getMovieReviews = async movieId => {
  const respons = await api.get(`/movie/${movieId}/reviews`);
  return respons;
};
