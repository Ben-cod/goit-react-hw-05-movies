import { Nav } from 'components/Nav';
import { Outlet } from 'react-router-dom';
import css from './AppLayout.module.css';

export const AppLayout = () => {
  return (
    <div className={css.container}>
      <Nav />
      <Outlet />
    </div>
  );
};
