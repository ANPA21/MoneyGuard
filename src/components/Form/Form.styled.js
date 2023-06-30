import { Button, styled } from '@mui/material';
import { ErrorMessage, Field, Form } from 'formik';

export const StyledContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const Title = styled(`h1`)`
  font-size: 20px;
  margin: 0;
`;

export const FormLabel = styled(`label`)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-weight: 500;
`;
export const FormField = styled(Field)`
  padding: 5px;
  background-color: #e0f2f1;
  border: 1px solid rgb(0, 105, 92);
  border-radius: 4px;
  min-height: 35px;
  min-width: 200px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-left: 10px;
`;

export const FormBtn = styled(Button)`
  margin-top: 5px;
  min-width: 100px;
  max-width: 300px;
  ${({ theme }) => `
background-color : ${theme.palette.buttons.bg};
color: ${theme.palette.buttons.text};`}
`;
