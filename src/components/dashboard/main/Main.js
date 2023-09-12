import { MainStyled } from './Main.styled';
import { DynamicSidebar } from '../dynamic_sidebar/DynamicSidebar';
import { WorkingSpace } from '../working_space/WorkingSpace';

export const Main = () => {
  return (
    <MainStyled>
      <DynamicSidebar />
      <WorkingSpace />
    </MainStyled>
  );
};
