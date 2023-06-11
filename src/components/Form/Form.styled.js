import { ErrorMessage, Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 15px;
  gap: 10px;
  background-color: ${p => p.theme.colors.accent};
`;
export const FormLabel = styled.label`
  font-size: 14px;
  font-weight: 500;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const FormField = styled(Field)`
  margin-left: 10px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  margin-left: 10px;
`;

export const FormBtn = styled.button`
  width: 100px;
`;
