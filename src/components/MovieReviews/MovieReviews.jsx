import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api-themoviedb';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

    useEffect(() => {
    getMovieReviews(movieId).then(res => {
      setReviews([...res.data.results]);
    });
  }, [movieId]);
    
  return (
    <>
      {reviews && (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              
              <p>Author: {review.author}</p>
              <p>Character: {review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default MovieReviews;
