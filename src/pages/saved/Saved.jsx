import React from "react";

const Saved = ({ savedMovies }) => {
  if (!savedMovies || savedMovies.length === 0) {
    return <div>No saved movies</div>;
  }

  return (
    <div className="saved-movies">
      {savedMovies.map((movie) => (
        <div key={movie.id} className="saved-movie">
          <h1>{movie.title}</h1>
          <img
            src={`${import.meta.env.VITE_IMAGE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default Saved;