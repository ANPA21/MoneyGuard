import { DashboardContainer, DashboardStyled } from './Dashboard.styled';
import { Header } from '../../components/dashboard/header/Header';
import { Main } from 'components/dashboard/main/Main';

const Dashboard = () => {
  return (
    <DashboardStyled>
      <Header />
      <DashboardContainer>
        <Main />
      </DashboardContainer>
    </DashboardStyled>
  );
};

export default Dashboard;
