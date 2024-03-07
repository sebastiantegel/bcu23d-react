export const ShowMovies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.imdbID}>
          <h2>{movie.Title}</h2>
          <img src={movie.Poster} alt={movie.Title} />
        </div>
      ))}
    </div>
  );
};
