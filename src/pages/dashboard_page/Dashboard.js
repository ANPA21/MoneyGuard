import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { DashboardStyled } from './Dashboard.styled';
import { Header } from '../../components/dashboard/header/Header';
import { DynamicSidebar } from '../../components/dashboard/dynamic_sidebar/DynamicSidebar';

export const Dashboard = () => {
  return (
    <DashboardStyled>
      <Header />
      <DynamicSidebar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </DashboardStyled>
  );
};

