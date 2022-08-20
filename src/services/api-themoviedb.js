import themoviedbApi from './themoviedb-axios-config';

export const getTrendingMovies = async () => {
  const url = 'trending/movie/day';
  try {
    return await themoviedbApi.get(url);
  } catch (error) {
    return error.message;
  }
};

export const getMoviesByDescription = async description => {
  const url = '/search/movie';
  const params = { query: description };
  try {
    return await themoviedbApi.get(url, { params });
  } catch (error) {
    return error.message;
  }
};
export const getMovieById = async movie_id => {
  const url = `/movie/${movie_id}`;
  
  try {
    return await themoviedbApi.get(url);
  } catch (error) {
    return error.message;
  }
};


export const getMovieCredits = async movie_id => {
  const url = `/movie/${movie_id}/credits`;
  
  try {
    return await themoviedbApi.get(url);
  } catch (error) {
    return error.message;
  }
};

export const getMovieReviews = async movie_id => {
  const url = `/movie/${movie_id}/reviews`;
  
  try {
    return await themoviedbApi.get(url);
  } catch (error) {
    return error.message;
  }
};