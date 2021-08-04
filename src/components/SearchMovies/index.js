import React, { useState } from "react";
import MovieCard from "../MovieCard";

const SearchMovie = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const getMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=86cad986d0f8dab2d07c7fce77767edf&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      // await is used because a promise is returned
      const res = await fetch(url);
      const data = await res.json();
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form className="form" onSubmit={getMovies}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Enter a movie name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>

      {movies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
    </>
  );
};

export default SearchMovie;
