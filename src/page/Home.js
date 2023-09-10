import { useEffect, useState } from 'react';
import { getTrendinMovies } from '../components/FetchApi';

import css from './Page.module.css';
import MoviesList from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendinMovies().then(setTrendingMovies);
  }, []);

  return (
    <main>
      <h1 className={css.title_Trend}>Trending today</h1>
      <MoviesList trendingMovies={trendingMovies} />
    </main>
  );
};

export default Home;
