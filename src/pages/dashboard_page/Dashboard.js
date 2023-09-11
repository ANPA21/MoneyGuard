import { DashboardStyled } from './Dashboard.styled';
import { Header } from '../../components/dashboard/header/Header';
import { Main } from 'components/dashboard/main/Main';

export const Dashboard = () => {
  return (
    <DashboardStyled>
      <Header />
      <Main />
    </DashboardStyled>
  );
};
