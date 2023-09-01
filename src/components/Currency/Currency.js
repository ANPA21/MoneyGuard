import { useEffect } from 'react';
import { selectCurrency } from 'redux/currencyReducer/currencySelectors';
import { CurrCompContainter } from './Currency.styled';

const { useDispatch, useSelector } = require('react-redux');
const { fetchCurrency } = require('redux/currencyReducer/currencyOperations');

export const Currency = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);
  const currency = useSelector(selectCurrency);
  return (
    <CurrCompContainter>
      <span>USD {currency.USD}</span>
      <span>EUR {currency.EUR}</span>
    </CurrCompContainter>
  );
};
