import { NavLink } from 'react-router-dom';
import { NavigationStyled } from './Navigation.styled';

export const Navigation = () => {
    return (
        <NavigationStyled>
            <ul>
                <li>
                    <NavLink to='home'>Home</NavLink>
                </li>
                <li>
                    <NavLink to='statistics'>Statistics</NavLink>
                </li>

                <li className='currency'>
                    <div>кнопка menu (по условию) "currency" вместо CurrencyMobilePage</div>
                </li>

            </ul> 
        </NavigationStyled>
    );
}