import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export const MovieDetails = () => {
  const [movie, setMovie] = useState();
  const { id } = useParams();

  useEffect(() => {
    const getSingleMovie = async () => {
      const response = await axios.get(
        "http://omdbapi.com?apikey=416ed51a&i=" + id
      );
      setMovie(response.data);
    };

    if (id) {
      getSingleMovie();
    } else {
      return;
    }
  });

  return (
    <div className="movie">
      <h2>{movie?.Title}</h2>
      <p>{movie?.Plot}</p>
      <p>{movie?.Actors}</p>
    </div>
  );
};
