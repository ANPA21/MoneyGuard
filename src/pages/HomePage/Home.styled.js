import styled from 'styled-components';

export const HomeStyled = styled.div`
  width: 768px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: end;
  font-family: Poppins;
  font-style: normal;
  line-height: normal;
  color: rgb(251, 251, 251);
  padding: 0 20px;

  .colorIncome {
    color: #ffb627;
  }

  .colorExpense {
    color: #ff868d;
  }

  .editItem {
    width: 24px;
    height: 24px;
    padding: 5px;
    cursor: pointer;
  }

  .deleteItem {
    width: 69px;
    height: 29px;
    color: #fff;
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
    content: '';
    display: block;
    width: 704px;
    height: 56px;
    background: rgba(82, 59, 126, 0.6);
    border-radius: 8px;
    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: -0;
    left: -20px;
    z-index: 100;
  }

  tbody {
    position: relative;

    font-size: 14px;
    font-weight: 400;
  }

  th,
  td {
    text-align: left;
  }

  td {
    height: 51px;
    font-size: 14px;
    font-weight: 400;
    border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  }

  th:nth-child(1),
  td:nth-child(1) {
    width: 95px;
  }
  th:nth-child(2),
  td:nth-child(2) {
    width: 38px;
    text-align: center;
  }
  th:nth-child(3),
  td:nth-child(3) {
    width: 173px;
    padding-left: 50px;
  }
  th:nth-child(4),
  td:nth-child(4) {
    width: 118px;
  }
  th:nth-child(5),
  td:nth-child(5) {
    width: 96px;
    text-align: right;
  }
  th:nth-child(6),
  td:nth-child(6) {
    width: 52px;
    text-align: right;
  }
  th:nth-child(7),
  td:nth-child(7) {
    width: 52px;
    text-align: right;
  }

  tr:last-child td {
    border-bottom: none;
  }

  //
  //  .header {
  //
  //    padding-left: 20px;
  //    align-items: center;
  //    font-size: 16px;
  //    font-weight: 600;
  //    border-radius: 8px;
  //    background: rgba(82, 59, 126, 0.60);
  //    box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  //    margin-bottom: 20px;
  //
  //    li:nth-child(1) {
  //      margin-right: 64px;
  //    }
  //    li:nth-child(2) {
  //      margin-right: 51px;
  //    }
  //    li:nth-child(3) {
  //      margin-right: 69px;
  //    }
  //
  //  }
  //
  //  .heder li,
  //  .data p,
  //  .editItem :nth-child(1) {
  //    display: block;
  //    width: 100px;
  //  }
  //
  //
  //  .header li,
  //  .data p {
  //      display: block;
  //      width: 15%;
  //      height: 30px;
  //  }
  //
  //  .transaction {
  //      margin-bottom: 20px;
  //  }
  //
  //  .editItem,
  //  .deleteItem {
  //      cursor: pointer
  //  }

  @media screen and (max-width: 479px) {
    //max-width: 100%;
  }
  @media screen and (min-width: 480px) and (max-width: 767px) {
    //max-width: 100%;
  }
  @media screen and (min-width: 768px) {
    //max-width: 100%;
  }
  //@media screen and (min-width: 1024px) {
  //  //max-width: 1400px;
  //}
`;

export const LoaderWrapper = styled.td`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Button = styled.div`
  display: flex;
  font-size: 30px;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(
    97deg,
    #ffc727 -16.42%,
    #9e40ba 97.04%,
    #7000ff 150.71%
  );
  box-shadow: rgba(0, 0, 0, 0.2) 1px 9px 15px 0px;
`;
