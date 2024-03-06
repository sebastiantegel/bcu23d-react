import { useState } from "react";
import { getMoviesByTitle } from "../services/movieService";

export const SearchMovies = ({ sendMoviesToParent }) => {
  const [searchText, setSearchText] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    const data = await getMoviesByTitle(searchText);
    sendMoviesToParent(data);
    setSearchText("");
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button>Hämta filmer</button>
      </form>
    </>
  );
};
