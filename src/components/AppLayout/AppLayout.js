import { Nav } from 'components/Nav';
import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

const AppLayout = () => {
  return (
    <>
      <Nav />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default AppLayout;
