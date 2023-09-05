import { useEffect, useState } from 'react';
import { getTrendinMovies } from '../components/FetchApi';
import TrendingList from 'components/TrendingList/TrendingList';
// import { useLocation } from 'react-router-dom';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const location = useLocation();
  useEffect(() => {
    getTrendinMovies().then(setTrendingMovies);
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <TrendingList trendingMovies={trendingMovies} />
    </main>
  );
};

export default Home;
