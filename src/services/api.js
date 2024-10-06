import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common["Authorization"] =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmNjYTAyYjkwMzYyMDNlZGI2ZWM3NTMxNGFhNWUzMyIsIm5iZiI6MTcyNzkwNzU0MS4xOTY2Nywic3ViIjoiNjZmNDVjYWU0ZmQ0ZWJlMjI0MGUwMDBjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.-1qGIT0T4qLSqOcrM7wbY5eUc-GdUGfNJN8qRuAlse0";

export const fetchMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data.results;
};

export const fetchMoviesById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}"`);
  return data;
};

export const fetchCastById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const fetchReviewsById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export const fetchMoviesSearch = async (query) => {
  const { data } = await axios.get(`/search/movie`, {
    params: {
      query,
    },
  });
  return data.results;
};
