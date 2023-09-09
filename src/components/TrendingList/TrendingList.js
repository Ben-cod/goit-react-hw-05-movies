import { Link, useLocation } from 'react-router-dom';
import css from './TrendingList.module.css';

const TrendingList = ({ trendingMovies }) => {
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
export default TrendingList;
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import css from './TrendingList.module.css';

// const TrendingList = ({ trendingMovies }) => {
//   const location = useLocation();
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10;

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const moviesToDisplay = trendingMovies.slice(
//     indexOfFirstItem,
//     indexOfLastItem
//   );

//   const nextPage = () => {
//     setCurrentPage(currentPage + 1);
//   };

//   const prevPage = () => {
//     setCurrentPage(currentPage - 1);
//   };

//   return (
//     <div className={css.container}>
//       <ul className={css.gallery}>
//         {moviesToDisplay.map(({ id, title, poster }) => (
//           <li className={css.galleryItem} key={id}>
//             <Link to={`/movies/${id}`} state={{ from: location }}>
//               <img className={css.galleryItem_image} src={poster} alt={title} />
//               <h3>{title}</h3>
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <div className={css.pagination}>
//         {currentPage > 1 && (
//           <button onClick={prevPage}>Попередня сторінка</button>
//         )}
//         {moviesToDisplay.length === itemsPerPage && (
//           <button onClick={nextPage}>Наступна сторінка</button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TrendingList;
