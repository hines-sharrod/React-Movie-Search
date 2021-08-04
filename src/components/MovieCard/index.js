import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card">
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
            <li>
              {movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : ""}
            </li>
            <li>Rating: {movie.vote_average ? movie.vote_average : 'No Rating'}</li>
            <li>Popularity Score: {Math.round(movie.popularity) + '%'}</li>
          </ul>
          <div className="card_right__review">
            <p>{movie.overview.substring(0, 200) + "..."}</p>
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
};

export default MovieCard;
