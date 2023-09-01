// Эта страница только для мобильной версии, для отрисовки курса валют

const { Currency } = require('components/Currency/Currency');
const { CurrencyContainer } = require('./CurrencyMobile.styled');

const CurrencyPage = () => {
  return (
    <CurrencyContainer>
      <Currency />
    </CurrencyContainer>
  );
};

export default CurrencyPage;
