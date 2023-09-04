import { Button } from '@mui/material';
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
    border-radius: 20px;
    background: var(
      --button-gradient,
      linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
    );
    box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);

    &:hover {
      color:#3a2f43;
    }

  }
`;



