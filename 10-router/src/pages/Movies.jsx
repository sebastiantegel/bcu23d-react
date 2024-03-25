import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();

  useEffect(() => {
    if (movies.length > 0) return;

    const getMovies = async () => {
      const response = await axios.get(
        "http://omdbapi.com?apikey=416ed51a&s=star"
      );
      setMovies(response.data.Search);
    };

    getMovies();
  });

  const getMovie = async (id) => {
    const response = await axios.get(
      "http://omdbapi.com?apikey=416ed51a&i=" + id
    );
    setMovie(response.data);
  };

  return (
    <>
      <div
        className="modal fade"
        id="movieModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {movie?.Title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>{movie?.Plot}</p>
              <p>{movie?.Actors}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="movies">
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            data-bs-toggle="modal"
            data-bs-target="#movieModal"
            onClick={() => getMovie(movie.imdbID)}
          >
            <h3>{movie.Title}</h3>
            <div className="image-container">
              <img src={movie.Poster} alt={movie.Title} />
            </div>

            {/* <Link to={`/movie/${movie.imdbID}`}>Läs mer...</Link> */}
          </div>
        ))}
      </div>
    </>
  );
};
