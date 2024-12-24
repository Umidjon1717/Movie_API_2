import React, { memo, useState } from 'react';
import AllmovieItem from './AllmovieItem';

const AllMovies = ({ data }) => {
  const [savedMovies, setSavedMovies] = useState([]);

  const handleSaveMovie = (movie) => {
    setSavedMovies((prevMovies) => [...prevMovies, movie]);
  };

  return (
    <div>
      <h2>Movies</h2>
      <div className="flex gap-2 justify-center flex-wrap container">
        {data?.results?.map((movie) => (
          <AllmovieItem
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            id={movie.id}
            onSave={handleSaveMovie}
          />
        ))}
      </div>
    </div>
  );
};

export default memo(AllMovies);