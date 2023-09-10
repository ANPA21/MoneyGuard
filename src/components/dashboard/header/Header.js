import React, { useRef } from 'react';

import { toggleLogOutModal } from 'redux/modal/ModalSlice';
import Modal from '../../Modal/Modal';
import Logout from '../../Logout/Logout';
import {
  Div,
  HeaderDiv,
  Box,
  ExitButton,
  ExitIcon,
  ExitText,
  HeaderContainer,
  Logo,
  LogoBox,
  LogoName,
  Name,
  Stick,
} from './Header.styled';
import exitLogo from '../../../icons/exit-logo.svg';
import mainLogo from '../../../icons/logo.svg';
import { selectUser } from '../../../redux/authReducer/selectors';
import { selectModalState, selectModalTypeState } from 'redux/modal/selectors';

export const Header = () => {
  const { useDispatch, useSelector } = require('react-redux');
  const dispatch = useDispatch();

  const modalType = useSelector(selectModalTypeState);
  const isModalOpen = useSelector(selectModalState);
  const buttonRef = useRef(null);

  const user = useSelector(selectUser);
  const username = user.email ? user.email.split('@')[0] : '';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Div>
      <HeaderContainer>
        <HeaderDiv>
          <LogoBox onClick={scrollToTop} ref={buttonRef}>
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
              <ExitIcon src={exitLogo} alt="exitLogo" />
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
