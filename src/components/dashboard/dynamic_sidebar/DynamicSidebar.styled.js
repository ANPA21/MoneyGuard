import styled from 'styled-components';

export const DynamicSidebarStyled = styled.div`
    display: flex;
    
    .styledBlock {
      display: flex;
      flex-direction: column;
    }
    
  @media screen and (max-width: 767px) {
    width: 320px;
    flex-direction: column;
    
    .styledBlock {
      align-items: center;
      margin-bottom: 12px;
    }
  }
  @media screen and (min-width: 768px) and (max-width: 1023px) {
    width: 768px;
    padding: 0 32px;
    justify-content: space-between;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1024px) {
    width: 37%;
    flex-direction: column;
    border-right: 1px solid rgba(251, 251, 251, 0.83);
  }

`;