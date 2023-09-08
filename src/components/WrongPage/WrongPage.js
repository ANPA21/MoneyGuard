import React from 'react';
import wrongPageImage from '../../images/wrong-page-image.jpg';
import { StyledButton, DivStyle, Img } from './WrongPage.styled';

const WrongPage = () => {
  return (
    <DivStyle>
      <Img src={wrongPageImage} alt="Oops, wrong page" />
      <StyledButton type="button" onClick={() => window.location.href = '/'}>GO HOME</StyledButton>
    </DivStyle>
  );
}

export default WrongPage;
