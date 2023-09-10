import React, { useEffect } from 'react';
import { Table, Row, Cell } from './Currency.styled';
import { selectCurrency } from 'redux/currencyReducer/currencySelectors';
import { fetchCurrency } from 'redux/currencyReducer/currencyOperations';
import { useDispatch, useSelector } from 'react-redux';

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
    <div>
      <Table>
        <Row>
          <Cell>Currency</Cell>
          <Cell>Purchase</Cell>
          <Cell>Sale</Cell>
        </Row>
        <Row>
          <Cell>USD</Cell>
          <Cell>{currency.USD?.buy.toFixed(2)}</Cell>
          <Cell>{currency.USD?.sale.toFixed(2)}</Cell>
        </Row>
        <Row>
          <Cell>EUR</Cell>
          <Cell>{currency.EUR?.buy.toFixed(2)}</Cell>
          <Cell>{currency.EUR?.sale.toFixed(2)}</Cell>
        </Row>
        {/* Add more rows if needed */}
      </Table>
      <img src="../../../../images/chart/chart-tablet@2x.png" alt="Currency" />
    </div>
  );
};
