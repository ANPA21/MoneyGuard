import { DynamicSidebarStyled } from './DynamicSidebar.styled';
import { DivForNavigBalancyStaled } from './DivForNavigBalancyStaled.styled';
import { Navigation } from './navigation/Navigation';
import { Balance } from './balance/Balance';
import { Currency } from './currency/Currency';


export const DynamicSidebar = () => {
  return (
    <DynamicSidebarStyled>
      <DivForNavigBalancyStaled>
        <Navigation />
        <Balance />
      </DivForNavigBalancyStaled>
      <Currency />
    </DynamicSidebarStyled>
  );
};
