import React, { useState, useEffect } from 'react';
import zxcvbn from 'zxcvbn';
import { Progress, ProgressBarWrapper } from './ProgressBar.styled';

export const ProgressBar = ({ password }) => {
  const [strength, setStrength] = useState(0); 

  useEffect(() => {
  const passwordStrength = calculatePasswordStrength(password);
  const limitedStrength = Math.min(passwordStrength.score, 12);
    setStrength(limitedStrength);
  }, [password]);

  const calculatePasswordStrength = (password) => {
    const result = zxcvbn(password);
    return result;
  };

  const getBackgroundColor = (strength) => {
    switch (strength) {
      case 0:
        return 'red';
      case 1:
        return 'orange';
      case 2:
        return 'yellow';
      case 3:
        return 'green';
      case 4:
        return 'darkgreen';
      default:
        return 'red';
    }
  };

  return (
    <ProgressBarWrapper>
      <Progress strength={strength} background={getBackgroundColor(strength)} />
    </ProgressBarWrapper>
  );
};
