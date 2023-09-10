import { useEffect } from 'react';
import { Table, Row, Cell } from './Currency.styled';
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
    <div>
      <Table>
        <Row>
          <Cell>Currency</Cell>
          <Cell>Purchase</Cell>
          <Cell>Sale</Cell>
        </Row>
        <Row>
          <Cell>USD</Cell>
          <Cell>{currency.USD}</Cell>
          <Cell>{currency.USD}</Cell>
        </Row>
        <Row>
          <Cell>EUR</Cell>
          <Cell>{currency.EUR}</Cell>
          <Cell>{currency.EUR}</Cell>
        </Row>
        {/* Add more rows if needed */}
      </Table>
      <img src="../../../../images/chart/chart-tablet@2x.png" alt="Currency" />
    </div>
  );
};
