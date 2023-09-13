import { DynamicSidebarStyled } from './DynamicSidebar.styled';
import { DivForNavigBalancyStaled } from './DivForNavigBalancyStaled.styled';
import { Navigation } from './navigation/Navigation';
import { Balance } from './balance/Balance';
import { Currency } from './currency/Currency';
import { useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';


export const DynamicSidebar = () => {
  const location = useLocation();
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

  const currencyActive = location.pathname.includes('/currency');
  const homeActive = location.pathname.includes('/home');

  return !isMobile ? (
    <DynamicSidebarStyled>
      <DivForNavigBalancyStaled>
        <Navigation />
        <Balance />
      </DivForNavigBalancyStaled>
      <Currency />
    </DynamicSidebarStyled>
  ) : (
    <DynamicSidebarStyled>
      <Navigation />
      {homeActive && <Balance />}
      {currencyActive && <Currency />}
    </DynamicSidebarStyled>
  );
};
