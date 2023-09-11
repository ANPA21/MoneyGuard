import React, { useEffect } from 'react';
import { Table, Row, Cell, Graph } from './Currency.styled';
import { selectCurrency } from 'redux/currencyReducer/currencySelectors';
import { fetchCurrency } from 'redux/currencyReducer/currencyOperations';
import { useDispatch, useSelector } from 'react-redux';
import { SpinnerLoader } from 'components/Spinner/Spinner';
import tablet1x from '../../../../images/chart/chart-tablet.png';
import tablet2x from '../../../../images/chart/chart-tablet@2x.png';
import tablet3x from '../../../../images/chart/chart-tablet@3x.png';
import web1x from '../../../../images/chart/chart-web.png';
import web2x from '../../../../images/chart/chart-web@2x.png';
import web3x from '../../../../images/chart/chart-web@3x.png';

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
              <source
                srcSet={`${tablet1x} 1x, ${tablet2x} 2x, ${tablet3x} 3x`}
                alt="Currency"
                media="(min-width: 768px) and (max-width: 1023px)"
              />
              <source
                srcSet={`${web1x} 1x, ${web2x} 2x, ${web3x} 3x`}
                alt="Currency"
                media="(min-width: 1024px)"
              />
              <img src={tablet1x} alt="Currency" />
            </Graph>
            <div></div>
          </Table>
        </div>
      )}
    </div>
  );
};
