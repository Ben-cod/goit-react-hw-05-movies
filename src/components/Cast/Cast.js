import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import { useEffect, useState } from 'react';
import { getMovieCast } from 'components/FetchApi';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredites] = useState([]);
  useEffect(() => {
    getMovieCast(movieId).then(setCredites);
  }, [movieId]);
  return (
    <div className={css.container}>
      {credits.length > 0 && (
        <ul className={css.gallery}>
          {credits.map(({ id, name, character, photo }) => {
            return (
              <li key={id} className={css.galleryItem}>
                <img className={css.galleryItem_image} src={photo} alt={name} />
                <div>
                  <h3>{name}</h3>
                  <p>Character: {character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
export default Cast;
