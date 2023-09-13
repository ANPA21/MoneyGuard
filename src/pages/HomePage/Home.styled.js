import styled from 'styled-components';

export const Container = styled.div`
  width: 704px;
  height: 312px;

  @media screen and (min-width: 1280px) {
    width: 715px;
    height: 308px;
  }
`;

export const ContainerHeader = styled.div`
  width: 704px;
  height: 56px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(50px);

  @media screen and (min-width: 1280px) {
    width: 715px;
    height: 67px;
  }
`;

export const TableHead = styled.div`
  color: var(--white);
  width: 543px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  margin-left: 20px;
  align-items: center;
  height: 100%;

  @media screen and (min-width: 1280px) {
    width: 565px;
  }
`;

export const Data = styled.div`
  color: var(--white);
`;

export const TableRow = styled.div`
  color: var(--white);
  width: 684px;
  height: 53px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.41);
  align-items: center;
  margin-left: 20px;
  font-size: 14px;
`;

export const TableData = styled.div``;

export const PencilButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 91px;
`;

export const BiPencil = styled.div`
  width: 24px;
  height: 24px;
  padding: 5px;
  cursor: pointer;
`;
export const CustomButton = styled.div`
  height: 29px;
  display: flex;
  padding: 4px 12px;
  align-items: center;
  border-radius: 20px;
  background: var(
    --button-gradient,
    linear-gradient(97deg, #ffc727 -16.42%, #9e40ba 97.04%, #7000ff 150.71%)
  );

  box-shadow: 1px 9px 15px 0px rgba(0, 0, 0, 0.2);
`;

export const Button = styled.div``;


export const TableDataColor = styled.div`
  /* color: ${props => (props.type === 'expense' ? '#ff868d' : 'var(--yellow)')}; */
`;

export const TableDataComment = styled.div`
  width: 140px;
  justify-content: space-between;
  align-items: center;
`;
export const TableDataDate = styled.div`
  width: 74px;
`;
export const TableDataType = styled.div`
  width: 65px;
  justify-content: space-between;
  align-items: center;
`;
export const TableDataCategory = styled.div`
  width: 65px;
  justify-content: space-between;
  align-items: center;
`;


