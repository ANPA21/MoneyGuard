import { useEffect } from 'react';
import { selectCurrency } from 'redux/currencyRedux/currencySelectors';
import { CurrencyStyled } from './Currency.styled';

const { useDispatch, useSelector } = require('react-redux');
const { fetchCurrency } = require('redux/currencyRedux/currencyOperations');

export const Currency = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const dataCurrencyStore = localStorage.getItem('persist:currency');
    if (dataCurrencyStore) {
      const parsedData = JSON.parse(JSON.parse(dataCurrencyStore).data);
      const dateCurrencFetch = new Date(parsedData.time * 1000).toLocaleDateString();
      if (dateCurrencFetch === new Date().toLocaleDateString()) {
        console.log('true')
        return
      }
    }
    console.log('jgjg')
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
