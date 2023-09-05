// import { useEffect, useState } from 'react';
// import css from './Searchbar.module.css';
// import { getSearchMovie } from 'components/FetchApi';
// import { useLocation, useSearchParams } from 'react-router-dom';

// export const Searchbar = () => {
//   const [query, setQuery] = useState('');
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams('');
//   const location = useLocation();

//   const serchQuery = searchParams.get('query');
//   useEffect(() => {
//     serchQuery && getSearchMovie(serchQuery).then(setMovies);
//   }, [serchQuery]);

//   const handleSubmit = async e => {
//     e.preventDefault();

//     const respons = await getSearchMovie({ query });
//     setMovies(respons);
//     setSearchParams({ query });
//     setQuery('');
//   };

//   const onChange = e => {
//     setQuery(e.target.value);
//   };
//   return (
//     <>
//       <div className={css.searchbar}>
//         <form className={css.form} onSubmit={handleSubmit}>
//           <button type="submit" className={css.button}>
//             <span className={css.buttonLabel}></span>
//           </button>

//           <input
//             className={css.input}
//             type="text"
//             name="search"
//             autoComplete="off"
//             autoFocus={true}
//             placeholder="Search movies"
//             value={query}
//             onChange={onChange}
//           />
//         </form>
//       </div>
//       {movies.length > 0 && (
//         <ul className={css.gallery}>
//           {movies.map(({ id, title, poster }) => (
//             <li key={id}>
//               <img src={poster} alt={title} width={150} />
//               <h3>{title}</h3>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// };
