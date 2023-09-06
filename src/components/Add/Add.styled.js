import styled from 'styled-components';
import { Form, Field } from 'formik';
// import Switch from '@mui/material/Switch';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const AddTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-family: Poppins;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: #fbfbfb;
`;

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 50px;
  padding: 12px 68px;
  margin-bottom: 20px;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  border: none;
  border-radius: 20px;
  line-height: 1.5;
  font-size: 18px;
  font-family: Poppins;
  color: rgba(251, 251, 251, 1);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;
`;
export const StyledLabel = styled.label`
  margin-bottom: 40px;
  width: 100%;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledSum = styled(Field)`
  display: block;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);

  text-align: center;
  font-family: 'Poppins';
  line-height: 1.5;
  font-size: 18px;
  font-weight: 600;
  color: rgba(255, 255, 255, 1);
  width: 181px;

  &::placeholder {
    align: center;
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
    padding: 0 8px;
  }

  &:focus {
    outline: 0;
  }
`;
export const StyledCategory = styled(Field)`
  background-color: transparent;
`;
// export const StyledCategory = styled(Field)`
//   display: block;
//   width: 100%;
//   background-color: transparent;
//   border: none;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.4);
//   padding: 0 8px;
//   font-family: 'Poppins';
//   line-height: 1.5;
//   font-size: 18px;
//   font-weight: 400;
//   color: rgba(255, 255, 255, 1);

//   &::placeholder {
//     background-color: transparent;
//     align: center;
//     font-family: 'Poppins';
//     font-weight: 400;
//     font-size: 18px;
//     line-height: 1.5;
//     color: rgba(255, 255, 255, 0.6);
//   }

//   &:focus {
//     outline: 0;
//     background-color: transparent;
//   }
// `;

export const StyledComment = styled(Field)`
  display: inherit;
  width: 100%;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  font-family: 'Poppins';
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);

  &::placeholder {
    padding: 0 8px;
    padding: 0 8px;
    align: center;
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.6);
  }

  &:focus {
    outline: 0;
  }
`;

export const SwitcherWrapper = styled.label`
  width: 254px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 42px;
`;
export const Label = styled.label`
  width: 181px;
  &:not(:last-child) {
    margin-right: 32px;
  }
`;

export const Wrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: baseline;
  width: 100%;
`;
export const StyledDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  display: inherit;
  width: 181px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  font-family: 'Poppins';
  line-height: 1.5;
  font-size: 18px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  padding: 0 8px;
`;
// export const StyledSwitch = styled(Switch)`
//     padding: 0;

// & .MuiSwitch-root: {
//     width: 80px,
//     height: 40px,
// }

//   & .MuiSwitch-switchBase: {
//     margin: 1,
//     padding: 0,
//     transform: 'translateX(6px)',

//     &.Mui-checked: {
//       color: '#fff',
//       transform: 'translateX(22px)',

//       & .MuiSwitch-thumb:before: {
//     // backgroundImage: none ,
//       },

//         & + .MuiSwitch-track: {
//         opacity: 1,
//         // backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//       },
//     },
//     },

//   & .MuiSwitch-thumb: {
//     backgroundColor: #001e3c,
//     width: 44,
//     height: 44,
//     '&:before': {
//       content: "''",
//       position: 'absolute',
//       width: '100%',
//       height: '100%',
//       left: 0,
//       top: 0,
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//     //   backgroundImage: none,
//     },
//   },

//     & .MuiSwitch-track: {
//     opacity: 1,
//     backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
//     borderRadius: 20 / 2,
//   },`;
