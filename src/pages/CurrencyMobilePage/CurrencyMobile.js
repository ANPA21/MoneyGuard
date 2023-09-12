// Эта страница только для мобильной версии, для отрисовки курса валют

import { Currency } from 'components/dashboard/dynamic_sidebar/currency/Currency';

const { CurrencyContainer } = require('./CurrencyMobile.styled');

const CurrencyPage = () => {
  return <CurrencyContainer>{/* <Currency /> */}</CurrencyContainer>;
};

export default CurrencyPage;
