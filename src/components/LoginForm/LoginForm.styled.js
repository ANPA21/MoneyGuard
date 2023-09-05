import { Form } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
 position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 42px 0;
`;

export const LabelStyled = styled(`label`)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
`;

export const LogotipStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 0 auto 52px;
    color: var(--white, #fbfbfb);
    font-size: 19px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
