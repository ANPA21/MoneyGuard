import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const CustomButton = styled(Button)`
  && {
    width: 300px;
    border: none;
    border-radius: 20px;
    padding: 5px 10px;
    margin-right: 15px;
    margin-left: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    text-transform: uppercase;
    color: white;
    cursor: pointer;

    &.registration {
      height: 50px;
      background: linear-gradient(
        135deg,
        rgb(249, 177, 4) 12%,
        rgb(172, 43, 169) 70%,
        rgb(153, 50, 225)
      );
      color: white;
      &:hover {
        height: 50px;
        background-color: #ffffff;
        color: #623f8b;
      }
    }
    &.login {
      height: 50px;
      margin-top: 40px;
      background: linear-gradient(
        135deg,
        rgb(249, 177, 4) 12%,
        rgb(172, 43, 169) 70%,
        rgb(153, 50, 225)
      );
      color: white;
      &:hover {
        height: 50px;
        background-color: #ffffff;
        color: #623f8b;
      }
    }
    &.cancel {
      height: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      border-radius: 20px;
      padding: 5px 10px;
      margin: 10px 15px;
      font-weight: 400;
      font-size: 18px;
      line-height: 27px;
      text-transform: uppercase;
      text-decoration: none;
      cursor: pointer;
      background-color: #ffffff;
      color: #623f8b;

      &:hover {
        height: 50px;
        background-color: #f5f4fa;
        color: #623f8b;
      }
    }
  }
`;

export const CustomNavLink = styled(NavLink)`
  color: #3e7ca9;
  text-decoration: underline;
  padding: 5px;

  &:hover {
    color: #01191f;
  }
`;