import React, { useEffect } from 'react';
import { Graph, Ball, BallEur, Wrap, StyledTable } from './Currency.styled';
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
import { didOneHourPass } from './didOneHourPass';

export const Currency = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedCurrencyData = localStorage.getItem('persist:currency');
    const savedCurrencyObj = JSON.parse(savedCurrencyData);
    if (savedCurrencyObj.data !== 'null') {
      if (didOneHourPass()) {
        dispatch(fetchCurrency());
      }
    } else {
      dispatch(fetchCurrency());
    }
  }, [dispatch]);

  const currency = useSelector(selectCurrency);
  return (
    <div>
      {!currency ? (
        <SpinnerLoader />
      ) : (
        <Wrap>
          <StyledTable>
            <thead>
              <tr>
                <th>Currency</th>
                <th>Purchase</th>
                <th>Sale</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>USD</td>
                <td>{currency.USD.buy.toFixed(2)}</td>
                <td>{currency.USD.sale.toFixed(2)}</td>
              </tr>
              <tr>
                <td>EUR</td>
                <td>{currency.EUR.buy.toFixed(2)}</td>
                <td>{currency.EUR.sale.toFixed(2)}</td>
              </tr>
            </tbody>
          </StyledTable>
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
            <img src={tablet1x} alt="Currency" draggable="false" />
            <Ball>{currency.USD.buy.toFixed(2)}</Ball>
            <BallEur>{currency.EUR.buy.toFixed(2)}</BallEur>
          </Graph>
        </Wrap>
      )}
    </div>
  );
};
