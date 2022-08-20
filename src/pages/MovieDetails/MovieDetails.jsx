import { Box } from 'components/Box';
import { IMG_BASE_URL } from 'constants';
import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'services/api-themoviedb';
import { OverviewText, PosterImg } from './MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(movieId).then(res => {
      setMovie({ ...res.data });
    });
  }, [movieId]);

  const backRef = location.state?.from ?? '/home';
  const movieDate = movie ? new Date(Date.parse(movie.release_date)) : null;

  return (
    <Box as="main" mt="16px">
      <Box>
        <Link to={backRef}>Go back</Link>
        <Box mt="16px">
          {movie && (
            <Box display="grid" gridTemplateColumns="300px 1fr">
              <div>
                <PosterImg
                  src={`${IMG_BASE_URL}${movie.poster_path}`}
                  alt="Something"
                ></PosterImg>
              </div>
              <div>
                <h3>
                  {movie.title} ({movieDate.getFullYear()})
                </h3>
                <b>
                  <OverviewText>Overview</OverviewText>
                </b>
                <OverviewText>{movie.overview}</OverviewText>
                <b>
                  <OverviewText>Genres</OverviewText>
                </b>
                <OverviewText>
                  {movie.genres.reduce(
                    (prev, next) => prev + ' ' + next.name,
                    ''
                  )}
                </OverviewText>
              </div>
            </Box>
          )}
        </Box>
        <hr />
        <Box>
          <ul>
            <li>
              <Link to="cast" state={{ from: location.state.from }}>
                Cast
              </Link>
            </li>
            <li>
              <Link to="reviews" state={{ from: location.state.from }}>
                Reviews
              </Link>
            </li>
          </ul>
        </Box>
        <hr />
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default MovieDetails;
