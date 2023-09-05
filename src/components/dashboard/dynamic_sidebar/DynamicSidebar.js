import { DynamicSidebarStyled } from './DynamicSidebar.styled';
//import { ExchangeRates } from './exchange_rates/ExchangeRates';
import { Navigation } from './navigation/Navigation';
import { Balance } from './balance/Balance';
import { Currency } from './currency/Currency';


export const DynamicSidebar = () => {
    return (
        <DynamicSidebarStyled>
            <Navigation />
            <Balance />
            <Currency />
        </DynamicSidebarStyled>
    );
}