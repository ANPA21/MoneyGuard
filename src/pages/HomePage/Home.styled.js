import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 320px;
  min-height: 568px;
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 768px;
    width: unset;
  }
  @media screen and (min-width: 1280px) {
    width: 715px;
    height: 308px;
    margin: 40px 0 0 69px;
  }
`;

export const ContainerHeader = styled.div`
  width: 704px;
  height: 56px;
  border-radius: 8px;
  background: rgba(82, 59, 126, 0.6);
  box-shadow: 0px 4px 60px 0px rgba(0, 0, 0, 0.25);

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

  &:last-child {
    border-bottom: none;
  }
`;

export const TableDataDate = styled.div`
  width: 63px;
`;

export const TableDataType = styled.div`
  width: 11px;
  margin-left: 60px;
`;

export const TableDataCategory = styled.div`
  width: 70px;
  margin-left: 70px;
`;

export const TableDataComment = styled.div`
  width: 114px;
  margin-left: 50px;

  @media screen and (min-width: 1280px) {
    margin-left: 90px;
  }
`;

export const TableDataColor = styled.div`
  width: 70px;
  margin-right: 35px;
  color: ${props => (props.type === 'expense' ? '#ff868d' : 'var(--yellow)')};
  text-align: end;
`;

export const PencilButton = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: 91px;
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

export const AddButton = styled.button`
  position: absolute;
  display: flex;
  bottom: 40px;
  right: 40px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: linear-gradient(
    97deg,
    rgba(255, 199, 39, 1) -16.42%,
    rgba(158, 64, 186, 1) 97.04%,
    rgba(112, 0, 255, 1) 150.71%
  );
  border: none;
  border-radius: 20px;
  line-height: 1.5;
  font-size: 0;
  color: rgba(251, 251, 251, 1);
  text-transform: uppercase;
  letter-spacing: 1.8px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    bottom: 10px;
    right: 137.5px;
  }
`;

export const TableData = styled.div`
  width: 70px;
  margin-left: 70px;
`;

export const PlusIcon = styled(AiOutlinePlus)`
  width: 24px;
  height: 24px;
`;