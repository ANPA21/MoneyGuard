import React, { useEffect } from 'react';
import { Table, Row, Cell, Graph } from './Currency.styled';
import { selectCurrency } from 'redux/currencyReducer/currencySelectors';
import { fetchCurrency } from 'redux/currencyReducer/currencyOperations';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerLoader } from 'components/Spinner/Spinner';
import chart from '../../../../images/chart/chart-tablet.png';

export const Currency = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);

  const currency = useSelector(selectCurrency);
  return (
    <div>
      {!currency ? (
        <SpinnerLoader />
      ) : (
        <div>
          <Table>
            <Row>
              <Cell>Currency</Cell>
              <Cell>Purchase</Cell>
              <Cell>Sale</Cell>
            </Row>
            <Row>
              <Cell>USD</Cell>
              <Cell>{currency.USD.buy.toFixed(2)}</Cell>
              <Cell>{currency.USD.sale.toFixed(2)}</Cell>
            </Row>
            <Row>
              <Cell>EUR</Cell>
              <Cell>{currency.EUR.buy.toFixed(2)}</Cell>
              <Cell>{currency.EUR.sale.toFixed(2)}</Cell>
            </Row>
            <Graph>
              <img src={chart} alt="Currency" />
            </Graph>
            <div>
              
            </div>
          </Table>
        </div>
      )}
    </div>
  );
};