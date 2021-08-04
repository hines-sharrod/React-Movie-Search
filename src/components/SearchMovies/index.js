import React, { useState } from "react";

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

      {movies.map((movie) => {
        return (
          <div className="card" key={movie.id}>
            <div className="card_left">
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + " movie poster"}
              />
            </div>
            <div className="card_right">
              <h1>{movie.title}</h1>
              <div className="card_right__details">
                <ul>
                  <li>{movie.release_date ? new Date(movie.release_date).getFullYear() : ''}</li>
                  <li>111 min</li>
                  <li>Action</li>
                </ul>
                <div className="card_right__review">
                  <p>{movie.overview.substring(0,200) + '...'}</p>
                  <a
                    href="https://www.imdb.com/title/tt0266697/plotsummary?ref_=tt_stry_pl"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Read more
                  </a>
                </div>
                <div className="card_right__button">
                  <a
                    href="https://www.youtube.com/watch?v=ot6C1ZKyiME"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WATCH TRAILER
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SearchMovie;
