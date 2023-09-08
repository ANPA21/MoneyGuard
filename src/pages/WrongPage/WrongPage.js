import React from 'react';
import wrongPageImage from '../../images/wrong-page-image.jpg';
import { DivStyle, Img } from './WrongPage.styled';
import { CustomButton } from 'components/CustomElements/CustomButton';

const WrongPage = () => {
  return (
    <DivStyle>
      <Img src={wrongPageImage} alt="Oops, wrong page" />

      <CustomButton
        type="button"
        onClick={() => (window.location.href = '/MoneyGuard/home')}
      >
        GO HOME{' '}
      </CustomButton>
    </DivStyle>
  );
};

export default WrongPage;
