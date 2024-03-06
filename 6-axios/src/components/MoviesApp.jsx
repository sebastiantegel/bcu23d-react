import { useState } from "react";
import { SearchMovies } from "./SearchMovies";
import { Movies } from "./Movies";

export const MoviesApp = () => {
  const [movies, setMovies] = useState([]);

  const updateMoviesInState = (moviesFromSearch) => {
    setMovies(moviesFromSearch);
  };

  return (
    <>
      <SearchMovies sendMoviesToParent={updateMoviesInState} />
      <Movies movies={movies} />
    </>
  );
};
