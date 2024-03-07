import { useState } from "react";
import { getMoviesByTitle } from "../services/movieService";

export const MovieSearch = ({ updateStateInParent }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    const movies = await getMoviesByTitle(searchText);

    updateStateInParent(movies);
    setSearchText("");
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button>Sök</button>
    </form>
  );
};
