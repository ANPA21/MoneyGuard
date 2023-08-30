import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { DashboardStyled } from './Dashboard.styled';
import { Test } from 'components/test';

export const Dashboard = () => {
  return (
    <DashboardStyled>
      <Test />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </DashboardStyled>
  );
};
// до suspense нужно вставить навигацию (шапку)
