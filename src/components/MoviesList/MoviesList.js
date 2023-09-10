import { Link, useLocation } from 'react-router-dom';
import css from './MoviesList.module.css';

const MoviesList = ({ trendingMovies }) => {
  const location = useLocation();

  return (
    <div className={css.container}>
      <ul className={css.gallery}>
        {trendingMovies.map(({ id, title, poster }) => (
          <li className={css.galleryItem} key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <img className={css.galleryItem_image} src={poster} alt={title} />
              <h3>{title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MoviesList;
