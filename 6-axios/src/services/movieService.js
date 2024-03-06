import axios from "axios";

const BASE_URL = "http://omdbapi.com?apikey=416ed51a&";

export const getMovies = async () => {
  //   const response = await fetch(`${BASE_URL}s=star`);
  //   const data = await response.json();
  //   return data.Search;

  const response = await axios.get(`${BASE_URL}s=star`);
  return response.data.Search;
};

export const getMoviesByTitle = async (title) => {
  const response = await axios.get(`${BASE_URL}s=${title}`);
  return response.data.Search;
};
