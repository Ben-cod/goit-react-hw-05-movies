import { getMovieDetails } from 'components/FetchApi';
import { Suspense, useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import css from './Page.module.css';
import { Loader } from 'components/Loader/Loader';
const MovieDetalis = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const backLink = location.state?.from ?? '/movies';
  const { title, overview, userScore, genres, release, poster } = movie ?? {};

  useEffect(() => {
    getMovieDetails(movieId).then(setMovie);
  }, [movieId]);

  const goBackLink = () => {
    navigate(backLink);
  };
  return (
    <div>
      <div>
        <button className={css.button} type="button" onClick={goBackLink}>
          ⬅️ Go back
        </button>
        {movie && (
          <div>
            <div className={css.detalis_wrap}>
              <div>
                <img
                  className={css.galleryItem_image}
                  src={poster}
                  alt={title}
                />
              </div>
              <div className={css.detalis_info}>
                <h2>
                  {title}({release})
                </h2>
                <p>{userScore}%</p>
                <h3>Overview</h3>
                <p>{overview}</p>
                {genres.length > 0 && (
                  <div>
                    <h3>Genres</h3>
                    <p>{genres.map(({ name }) => name).join(', ')}</p>
                  </div>
                )}
              </div>
            </div>
            <h3>Additional information</h3>
            <ul className={css.voice_list}>
              <Link
                className={css.voice_item}
                to={'cast'}
                state={{ from: location?.state?.from }}
              >
                Cast
                <li className={css.voice_wrap}></li>
              </Link>

              <Link
                className={css.voice_item}
                to={'reviews'}
                state={{ from: location?.state?.from }}
              >
                Reviews
                <li className={css.voice_wrap}></li>
              </Link>
            </ul>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetalis;
