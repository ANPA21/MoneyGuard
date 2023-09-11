import { DynamicSidebarStyled } from './DynamicSidebar.styled';
import { Navigation } from './navigation/Navigation';
import { Balance } from './balance/Balance';
import { Currency } from './currency/Currency';


export const DynamicSidebar = () => {
    return (
        <DynamicSidebarStyled>
            <div className='styledBlock'>
                <Navigation />
                <Balance />
            </div>
            <Currency />
        </DynamicSidebarStyled>
    );
}