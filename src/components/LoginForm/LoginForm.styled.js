import { Field, Form } from 'formik';
import styled from 'styled-components';
import { MdEmail, MdHttps } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';

export const FormStyled = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px;
`;

export const LabelStyled = styled(`label`)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

export const EmailIcon = styled(MdEmail)`
  color: rgba(255, 255, 255, 0.6);
`;

export const PasswordIcon = styled(MdHttps)`
  color: rgba(255, 255, 255, 0.6);
`;

export const UserIcon = styled(FaUser)`
  color: rgba(255, 255, 255, 0.6);
`;

export const IconInInput = styled.div`
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  position: absolute;
`;

export const IconStyled = styled.div`
  position: absolute;
  left: 5px;
  fill: rgba(255, 255, 255, 0.9);
`;

export const ErrorMessageStyled = styled.span`
  color: #ff868d;
  font-size: 14px;
  margin-top: 2px;
`;

export const InputStyled = styled(Field)`
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 0 35px;
  margin: 0;
  position: relative;

  &::placeholder {
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus,
  &:hover,
  &:active,
  &:visited {
    outline: none;
  }

  &:focus::placeholder,
  &:active::placeholder {
    transform: translateY(-100%);
    opacity: 1;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8px;
`;
