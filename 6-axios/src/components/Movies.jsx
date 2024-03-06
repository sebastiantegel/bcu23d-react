export const Movies = ({ movies }) => {
  return (
    <div className="movies">
      {movies.map((m) => (
        <div key={m.imdbID} className="movie">
          <h3>{m.Title}</h3>
          <div className="image-wrapper">
            <img src={m.Poster} alt={m.Title} />
          </div>
        </div>
      ))}
    </div>
  );
};
