import styled from 'styled-components';
export const ContactItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  gap: 5px;
  border: 1px solid ${p => p.theme.colors.border};
`;

export const Button = styled.button`
  border-radius: ${p => p.theme.radius.large};
  background-color: ${p => p.theme.colors.accent};

  :hover {
    background-color: ${p => p.theme.colors.secondary};
    cursor: pointer;
    color: ${p => p.theme.colors.white};
  }
`;
