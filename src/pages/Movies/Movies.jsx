import { Box } from 'components/Box';
import { SearchForm, SearchButton, SearchInput } from './Movies.styled';
import { useState, useEffect } from 'react';
import * as Api from 'services/api-themoviedb';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const description = searchQuery.get('query') ?? '';
  const isDescriptionEmpty = Boolean(!description.trim());
  const isMovieStackEmpty = movies.length === 0;

  useEffect(() => {
    if (isDescriptionEmpty) {
      return;
    }
    Api.getMoviesByDescription(description)
      .then(res => {
        setMovies([...res.data.results]);
      })
      .catch();
  }, [description, isDescriptionEmpty]);

  const handleSubmit = e => {
    const searchInValue = e.target.elements.description.value.trim();
    e.preventDefault();
    if (searchInValue) {
      setSearchQuery({ query: searchInValue });
      e.target.reset();
    }
  };

  return (
    <Box>
      <SearchForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          name="description"
          autoComplete="on"
          autoFocus
          placeholder="Search movie"
        />
        <SearchButton type="submit">
          <b>Search</b>
        </SearchButton>
      </SearchForm>
      <hr />
      {!isMovieStackEmpty && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`${movie.id}`} state={{ from: location }}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Box>
  );
};

export default Movies;
