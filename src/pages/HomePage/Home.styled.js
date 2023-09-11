import styled from 'styled-components';

export const HomeStyled = styled.div`
    //height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: end;
    font-family: Poppins;
    font-style: normal;
    line-height: normal;
    color: rgb(251, 251, 251);
    padding: 0 32px;
    //background-color: rgba(0, 0, 0, 0.1);

  .colorIncome {
    color: #FFB627;
  }

  .colorExpense {
    color: #FF868D;
  }

  .editItem {
    width: 24px;
    height: 24px;
    padding: 5px;
    cursor: pointer;
  }

  .addItem {
    width: 44px;
    height: 44px;
    border-radius:50%;
    margin: 0;
    padding: 30px;
    cursor: pointer;
  }

  .deleteItem {
    width: 69px;
    height: 29px;
    color: #FFF;
    text-align: center;
    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
  }

  .table {
    border-collapse: collapse;
    margin-bottom: 100px;
  }

  thead {
    height: 56px;
    position: relative;
    font-size: 16px;
    font-weight: 600;
    background-color: transparent;
    overflow: hidden;
  }

  thead::after {
    content: "";
    display: block;
    width: 704px;
    height: 56px;
    background: rgba(82, 59, 126, 0.60);
    border-radius: 8px;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: -0;
    left: -20px;
    z-index: 100;
  }

  tbody {
    font-size: 14px;
    font-weight: 400;
  }

  th,td {
    text-align: left;
    
  }

  td {
    height: 51px;
    font-size: 14px;
    font-weight: 400;
    border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  }

  .addItem {
    width: 40px;
  }

@media screen and (min-width: 480px) and (max-width: 767px) {
   width: 320px;
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  width: 768px;
  thead::after {
    top: 0;
    left: -15px;
  }
  .table {
    th:nth-child(1), td:nth-child(1) {
      width: 103px;
      padding-left: 20px;
    }
    th:nth-child(2), td:nth-child(2) {
      width: 40px;
      text-align: center;
    }
    th:nth-child(3), td:nth-child(3) {
      width: 193px;
      padding-left: 50px;
    }
    th:nth-child(4), td:nth-child(4) {
      width: 118px;
    }
    th:nth-child(5), td:nth-child(5) {
      width: 111px;
      text-align: right;
    }
    th:nth-child(6), td:nth-child(6) {
      width: 52px;
      text-align: right;
    }
    th:nth-child(7), td:nth-child(7) {
      width: 52px;
      text-align: right;
    }
  
    tr:last-child td {
      border-bottom: none;
    }
  
    .addItem {
      width: 40px;
    }
  }
  }
  
@media screen and (min-width: 1024px) {
  width: 768px;  
  .table {
      width: 695px;
      margin-top: 46px;
    }

    thead::after {
      top: 0;
      left: -20px;
    }

    th:nth-child(1), td:nth-child(1) {
      width: 95px;
    }
    th:nth-child(2), td:nth-child(2) {
      width: 38px;
      text-align: center;
    }
    th:nth-child(3), td:nth-child(3) {
      width: 173px;
      padding-left: 50px;
    }
    th:nth-child(4), td:nth-child(4) {
      width: 118px;
    }
    th:nth-child(5), td:nth-child(5) {
      width: 96px;
      text-align: right;
    }
    th:nth-child(6), td:nth-child(6) {
      width: 52px;
      text-align: right;
    }
    th:nth-child(7), td:nth-child(7) {
      width: 52px;
      text-align: right;
    }
    tr:last-child td {
      border-bottom: none;
    }
  }
`;