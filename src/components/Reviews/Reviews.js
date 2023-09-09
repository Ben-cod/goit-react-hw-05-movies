import { getMovieReviews } from 'components/FetchApi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';

const Reviews = () => {
  const { movieId } = useParams('movieId');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  return (
    <div className={css.container}>
      {reviews.length > 0 ? (
        <ul className={css.reviews_list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.reviews_item}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.no_reviews}>
          We don`t have any reviews for this movie
        </p>
      )}
    </div>
  );
};
export default Reviews;
