import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { toggleLogOutModal } from 'redux/modal/ModalSlice';
import Modal from '../../Modal/Modal';
import Logout from '../../Logout/Logout';
import {
  Div,
  HeaderDiv,
  Box,
  ExitButton,
  ExitOutline,
  ExitText,
  HeaderContainer,
  Logo,
  LogoBox,
  LogoName,
  Name,
  Stick,
} from './Header.styled';

import mainLogo from '../../../icons/logo.svg';
import { selectUser } from '../../../redux/authReducer/selectors';
import { selectModalState, selectModalTypeState } from 'redux/modal/selectors';

export const Header = () => {
  const navigate = useNavigate();
  const { useDispatch, useSelector } = require('react-redux');
  const dispatch = useDispatch();

  const modalType = useSelector(selectModalTypeState);
  const isModalOpen = useSelector(selectModalState);
  const buttonRef = useRef(null);

  const user = useSelector(selectUser);
  const username = user.email ? user.email.split('@')[0] : '';

  const goToHome = () => {
    navigate('/home');
  };


  return (
    <Div>
      <HeaderContainer>
        <HeaderDiv>
          <LogoBox onClick={goToHome} ref={buttonRef}>
            <Logo src={mainLogo} alt="logo" />
            <LogoName>Money Guard</LogoName>
          </LogoBox>
          <Box>
            <Name>{username}</Name>
            <Stick />
            <ExitButton
              id="exit"
              type="button"
              onClick={() => dispatch(toggleLogOutModal())}
            >

              <ExitOutline />
              <ExitText>Exit</ExitText>
            </ExitButton>
          </Box>
        </HeaderDiv>
      </HeaderContainer>

      {modalType === 'modal/toggleLogOutModal' && isModalOpen && (
        <Modal children={<Logout />} />
      )}
    </Div>
  );
};
