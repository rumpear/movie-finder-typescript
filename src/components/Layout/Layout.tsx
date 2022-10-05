import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '..';
import { Loader } from '../ui';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
