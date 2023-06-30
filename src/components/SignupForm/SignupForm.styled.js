import { styled } from '@mui/material';
import { Form, Field } from 'formik';
import { Button } from '@mui/material';

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 25px;

  @media screen and (max-width: 479px) {
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
  }
  @media screen and (min-width: 1024px) {
  }
`;

export const LabelStyled = styled(`label`)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
`;

export const FieldStyled = styled(Field)`
  padding: 5px;
  background-color: #e0f2f1;
  border: 1px solid rgb(0, 105, 92);
  border-radius: 4px;
  min-height: 35px;
`;
export const SignUpBtn = styled(Button)`
  margin-top: 5px;
  width: 70vw;
  max-width: 300px;
  ${({ theme }) => `
background-color : ${theme.palette.buttons.bg};
color: ${theme.palette.buttons.text};
`}
`;
