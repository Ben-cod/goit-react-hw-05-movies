import css from '../components/TrendingList/TrendingList.module.css';

import { getSearchMovie } from 'components/FetchApi';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();

  const serchQuery = searchParams.get('query');
  useEffect(() => {
    serchQuery && getSearchMovie(serchQuery).then(setMovies);
  }, [serchQuery]);

  const handleSubmit = async e => {
    e.preventDefault();

    const respons = await getSearchMovie({ query });
    setMovies(respons);
    setSearchParams({ query });
    setQuery('');
  };

  const onChange = e => {
    setQuery(e.target.value);
  };
  return (
    <div>
      <div className={css.searchbar}>
        <form className={css.form} onSubmit={handleSubmit}>
          <button type="submit" className={css.button}>
            <span className={css.buttonLabel}></span>
          </button>

          <input
            className={css.input}
            type="text"
            name="search"
            autoComplete="off"
            autoFocus={true}
            placeholder="Search movies"
            value={query}
            onChange={onChange}
          />
        </form>
      </div>
      {movies.length > 0 && (
        <ul className={css.gallery}>
          {movies.map(({ id, title, poster }) => (
            <Link to={`/movies/${id}`} state={{ from: location }}>
              <li className={css.galleryItem} key={id}>
                <img
                  className={css.galleryItem_image}
                  src={poster}
                  alt={title}
                />
                <h3>{title}</h3>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
