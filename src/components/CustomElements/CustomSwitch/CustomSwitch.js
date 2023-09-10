import React from 'react';
import {
  SwitchContainer,
  Text,
  TextExpense,
  Slider,
  Plus,
  Minus,
} from './CustomSwitch.styled';

export const CustomSwitch = ({ checked, onChange }) => {
  const handleSwitchChange = () => {
    onChange(!checked);
  };

  return (
    <SwitchContainer onClick={handleSwitchChange}>
      <Text checked={checked}>Income</Text>
      <TextExpense checked={checked}>Expense</TextExpense>
      <Slider checked={checked}>
        <Plus checked={checked}></Plus>
        <Minus checked={checked}></Minus>
      </Slider>
    </SwitchContainer>
  );
};
