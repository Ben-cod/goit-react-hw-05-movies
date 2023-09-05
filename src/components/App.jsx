import { Route, Routes } from 'react-router-dom';
import { AppLayout } from './AppLayout/AppLayout';
import Home from 'page/Home';
import MovieDetalis from 'page/MovieDetails';
import Movies from 'page/Movies';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/ Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetalis />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};
