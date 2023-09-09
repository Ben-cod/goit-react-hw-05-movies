import { Link, NavLink } from 'react-router-dom';
import css from './AppLayout/AppLayout.module.css';
export const Nav = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.nav_list}>
        <li className={css.nav_item}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li className={css.nav_item}>
          <NavLink to="movies">Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};
