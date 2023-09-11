import css from '../components/MoviesList/MoviesList.module.css';
import { getSearchMovie } from 'components/FetchApi';
import { Loader } from 'components/Loader/Loader';
import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const [loading, setLoading] = useState(false);

  const serchQuery = searchParams.get('query');

  useEffect(() => {
    if (!serchQuery) {
      return;
    }
    setLoading(true);

    getSearchMovie(serchQuery)
      .then(setMovies)
      .finally(() => {
        setLoading(false);
      });
  }, [serchQuery]);

  const handleSearch = query => {
    setSearchParams({ query });
  };

  return (
    <>
      <div className={css.searchbar}>
        <SearchForm onSearch={handleSearch} />
      </div>
      <div className={css.container}></div>
      {loading ? (
        <Loader />
      ) : (
        movies.length > 0 && <MoviesList trendingMovies={movies} />
      )}
    </>
  );
};

export default Movies;
