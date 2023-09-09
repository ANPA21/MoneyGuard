import { useEffect } from 'react';
import { CurrencyStyled } from './Currency.styled';
import { selectCurrency } from 'redux/currencyReducer/currencySelectors';
import { fetchCurrency } from 'redux/currencyReducer/currencyOperations';
const { useDispatch, useSelector } = require('react-redux');
export const Currency = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const dataCurrencyStore = localStorage.getItem('persist:currency');
    if (dataCurrencyStore) {
      const parsedData = JSON.parse(JSON.parse(dataCurrencyStore).data);
      const dateCurrencFetch = new Date(
        parsedData.time * 1000
      ).toLocaleDateString();
      if (dateCurrencFetch === new Date().toLocaleDateString()) {
        return;
      }
    }
    dispatch(fetchCurrency());
  }, [dispatch]);
  const currency = useSelector(selectCurrency);
  return (
    <CurrencyStyled>
      <span>USD {currency.USD}</span>
      <span>EUR {currency.EUR}</span>
    </CurrencyStyled>
  );
};
