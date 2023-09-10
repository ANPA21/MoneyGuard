import React, { useEffect } from 'react';
import { Table, Row, Cell } from './Currency.styled';
import { selectCurrency } from 'redux/currencyReducer/currencySelectors';
import { fetchCurrency } from 'redux/currencyReducer/currencyOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from 'hooks';
import { selectIsLoading } from 'redux/authReducer/selectors';
import { SpinnerLoader } from 'components/Spinner/Spinner';
import chart from '../../../../images/chart/chart-tablet.png';
export const Currency = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
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
      {!isLoading ? (
        <div>
          <Table>
            <Row>
              <Cell>Currency</Cell>
              <Cell>Purchase</Cell>
              <Cell>Sale</Cell>
            </Row>
            <Row>
              <Cell>USD</Cell>
              <Cell>{currency.USD.buy}</Cell>
              <Cell>{currency.USD.sale}</Cell>
              <Cell></Cell>
              <Cell></Cell>
            </Row>
            <Row>
              <Cell>EUR</Cell>
              <Cell>{currency.EUR.buy}</Cell>
              <Cell>{currency.EUR.sale}</Cell>
              <Cell></Cell>
              <Cell></Cell>
            </Row>
          </Table>
          <img src={chart} alt="Currency" />
        </div>
      ) : (
        <SpinnerLoader />
      )}
    </div>
  );
};
