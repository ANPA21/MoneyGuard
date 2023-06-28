import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { NavBar } from './NavBar/NavBar';
import { LayoutStyled } from './Laoyout.styled';

export const Layout = () => {
  return (
    <LayoutStyled>
      <NavBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </LayoutStyled>
  );
};
