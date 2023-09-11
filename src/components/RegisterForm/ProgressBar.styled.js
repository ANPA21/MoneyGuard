import styled from "styled-components";

export const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 4px;
  background-color: lightgray;
  margin-top: 6px;
  border-radius: 20px; 
`;

export const Progress = styled.div`
  height: 100%;
  background: ${(props) => props.background || 'red'}; 
  width: ${(props) => (props.strength / 4) * 100}%;
  border-radius: 5px;
`;
