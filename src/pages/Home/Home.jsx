import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as Api from 'services/api-themoviedb';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  const isMovieStackEmpty = trendingMovies.length === 0;

  useEffect(() => {
    if (!isMovieStackEmpty) {
      return;
    }
    Api.getTrendingMovies().then(res => {
      setTrendingMovies([...res.data.results]);
    });
  }, [isMovieStackEmpty, trendingMovies]);

  

  return (
    <div>
      <h2>Trending today</h2>

      {!isMovieStackEmpty && (
        <ul>
          {trendingMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Home;
