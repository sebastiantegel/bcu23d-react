import { useEffect, useState } from "react";
import "./App.css";
import { MovieSearch } from "./components/MovieSearch";
import { ShowMovies } from "./components/ShowMovies";

function App() {
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("movies") || "[]")
  );

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <>
      <MovieSearch updateStateInParent={setMovies} />
      <ShowMovies movies={movies} />
    </>
  );
}

export default App;
