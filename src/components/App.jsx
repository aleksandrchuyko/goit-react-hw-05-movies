import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from './Box';
import Home from 'pages/Home/Home';
import Layout from './Layout/Layout';
import { lazy } from 'react';

const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('components/MovieReviews/MovieReviews'));

export const App = () => {
  return (
    <Box
      as="main"
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'center',
        // alignItems: 'center',
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          {/* <Route index element={<Navigate to="home" />} /> */}
          {/* <Route path="home" element={<Home />} /> */}
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Box>
  );
};
