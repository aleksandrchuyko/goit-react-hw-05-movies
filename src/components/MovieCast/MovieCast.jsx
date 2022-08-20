import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api-themoviedb';
import { IMG_BASE_URL } from 'constants';

const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    getMovieCredits(movieId).then(res => {
      setCredits([...res.data.cast]);
    });
  }, [movieId]);

  return (
    <>
      {credits && (
        <ul>
          {credits.map(actor => (
            <li key={actor.id}>
              {actor.profile_path && <img
                src={`${IMG_BASE_URL}${actor.profile_path}`}
                alt="something"
                width={120}
              />}
              <p>{actor.name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MovieCast;
