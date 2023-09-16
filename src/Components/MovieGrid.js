// MovieGrid.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/top_rated',
          {
            params: {
              api_key: '189ec8cc1c12f4195765dc81bb13454a',
              sort_by: 'popularity.desc',
              page: 1,
            },
          }
        );
        console.log(response.data)
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGrid;
