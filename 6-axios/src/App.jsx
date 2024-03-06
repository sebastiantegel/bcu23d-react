import { useEffect, useState } from "react";
import "./App.css";
import { SearchMovies } from "./components/SearchMovies";
import { MoviesApp } from "./components/MoviesApp";

const APIKEY = "416ed51a";

function App() {
  const [movies, setMovies] = useState([]);

  // Används när vi vill hämta data när vi startar
  // useEffect(() => {
  //   if (movies.length > 0) return;

  //   const getData = async () => {
  //     // const response = await fetch(
  //     //   "http://omdbapi.com?apikey=416ed51a&s=harry"
  //     // );
  //     // const data = await response.json();
  //     const data = await getMoviesByTitle("harry");
  //     setMovies(data);
  //   };

  //   getData();
  // });

  return (
    <>
      <MoviesApp />
      {/* <div className="movies">
        {movies.map((m) => (
          <div key={m.imdbID} className="movie">
            <h3>{m.Title}</h3>
            <div className="image-wrapper">
              <img src={m.Poster} alt={m.Title} />
            </div>
          </div>
        ))}
      </div> */}
    </>
  );
}

export default App;
