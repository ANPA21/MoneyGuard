import React from 'react';
import Typography from '@mui/material/Typography';

export const CustomSwitch = ({ checked, onChange }) => {
  const handleSwitchChange = () => {
    onChange(!checked);
  };

  const switchStyles = {
    position: 'relative',
    width: '80px',
    height: '40px',
    backgroundColor: 'white',
    borderRadius: '30px',
    cursor: 'pointer',
  };

  const sliderStyles = {
    position: 'absolute',
    top: '50%',
    transform: `translateY(-50%) translateX(${checked ? '40px' : '0'})`,
    width: '44px',
    height: '44px',
    backgroundColor: checked ? '#FF868D' : '#FFB627',
    boxShadow: checked
      ? '0px 6px 15px 0px rgba(255, 134, 141, 0.50)'
      : '0px 6px 15px 0px rgba(255, 199, 39, 0.50)',
    borderRadius: '50%',
    transition: '0.3s',
    marginLeft: checked ? '0' : '-4px',
  };

  const plusStyles = {
    content: '""',
    position: 'absolute',
    width: '20px',
    height: '2px',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: checked
      ? 'translate(-50%, -50%) rotate(0deg)'
      : 'translate(-50%, -50%) rotate(90deg)',
    transition: '0.3s',
  };

  const minusStyles = {
    content: '""',
    position: 'absolute',
    width: '20px',
    height: '2px',
    backgroundColor: 'white',
    top: '50%',
    left: '50%',
    transform: checked
      ? 'translate(-50%, -50%) rotate(0deg)'
      : 'translate(-50%, -50%) rotate(0deg)',
    transition: '0.3s',
  };

  return (
    <div style={switchStyles} onClick={handleSwitchChange}>
      <Typography
        variant="subtitle1"
        color={checked ? 'rgba(255, 255, 255, 0.60)' : '#FFB627'}
        style={{
          position: 'absolute',
          right: '100px',
        }}
      >
        Income
      </Typography>
      <Typography
        variant="subtitle1"
        color={checked ? '#FF868D' : 'rgba(255, 255, 255, 0.60)'}
        style={{
          position: 'absolute',
          left: '100px',
        }}
      >
        Expense
      </Typography>
      <div style={sliderStyles}>
        <div style={plusStyles}></div>
        <div style={minusStyles}></div>
      </div>
    </div>
  );
};
