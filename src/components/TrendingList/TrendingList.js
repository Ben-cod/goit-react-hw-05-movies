import css from './TrendingList.module.css';

const TrendingList = ({ trendingMovies }) => {
  return (
    <ul className={css.gallery}>
      {trendingMovies.map(({ id, title, poster }) => (
        <li className={css.galleryItem} key={id}>
          <img className={css.galleryItem_image} src={poster} alt={title} />
          <h3>{title}</h3>
        </li>
      ))}
    </ul>
  );
};
export default TrendingList;
