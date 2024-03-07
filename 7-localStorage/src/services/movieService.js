import axios from "axios";

export const getMovies = async () => {
  const response = await axios.get(
    "http://www.omdbapi.com/?s=star&apikey=416ed51a"
  );

  return response.data.Search;
};

export const getMoviesByTitle = async (title) => {
  const response = await axios.get(
    "http://www.omdbapi.com/?apikey=416ed51a&s=" + title
  );

  return response.data.Search;
};
