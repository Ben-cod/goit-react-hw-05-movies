import axios from 'axios';
import noPhoto from './image/Nophoto.png';
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
        poster: poster ? IMG_URL + poster : noPhoto,
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
        poster: poster ? IMG_URL + poster : noPhoto,
      }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

export const getMovieDetails = movieId => {
  return api
    .get(`/movie/${movieId}`)
    .then(
      ({
        data: {
          id,
          title,

          genres,
          vote_average: userScore,
          release_date: release,
          overview,
          poster_path: poster,
        },
      }) => ({
        id,
        title,
        overview,
        userScore: Math.round(userScore * 10),
        genres,
        release: new Date(release).getFullYear(),
        poster: poster ? IMG_URL + poster : noPhoto,
      })
    )

    .catch(error => {
      console.log(error.message);
    });
};

export const getMovieCast = async movieId => {
  return await api
    .get(`/movie/${movieId}/credits`)
    .then(({ data: { cast } }) =>
      cast.map(({ id, name, profile_path: photo, character }) => ({
        id,
        name,
        character,
        photo: photo ? IMG_URL + photo : noPhoto,
      }))
    )
    .catch(error => {
      console.log(error.message);
    });
};

export const getMovieReviews = async movieId => {
  return await api
    .get(`/movie/${movieId}/reviews`)
    .then(({ data: { results } }) =>
      results.map(({ id, author, content }) => ({
        id,
        author,
        content,
      }))
    )
    .catch(error => {
      console.log(error.message);
    });
};
