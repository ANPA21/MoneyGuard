import { CustomButton } from 'components/CustomElements/CustomButton';
import { BiPencil } from 'react-icons/bi';
import styled from 'styled-components';

export const StyledListCard = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0 52px 0;
`;

export const StyledCard = styled.li`
  width: 280px;
  margin-bottom: 10px;
  background: linear-gradient(
    220deg,
    rgba(82, 59, 126, 0.6) 28.31%,
    #652392 66.76%
  );
  box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 60px 0px;
  border-radius: 10px;
  border-left: ${props =>
    props.type === 'expense' ? '5px solid #ff868d' : '5px solid var(--yellow)'};
`;

export const ColorSign = styled.span`
  font-weight: 600;
  color: ${props => (props.type === 'expense' ? '#ff868d' : 'var(--yellow)')};
`;

export const StyledTypeOfField = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
  border-bottom: #776289 1px solid;
`;

export const StyledText = styled.p`
  color: white;
  font-weight: 600;
`;

export const StyledComment = styled.p`
  color: white;
  font-weight: 400;
  padding-left: 30px;
`;

export const StyledCategory = styled.p`
  color: white;
  font-weight: 400;
  padding-left: 74px;
`;

export const StyledSpan = styled.span`
  color: white;
  font-weight: 400;
`;

export const StyledButtonDelete = styled(CustomButton)`
  && {
    margin: 0;
    width: 69px;
    height: 29px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
  }
`;

export const StyledPencilEdit = styled.li`
  display: flex;
  align-items: center;
  color: #c2b1d6;
  cursor: pointer;
`;

export const StyledPencil = styled(BiPencil)`
  && {
    margin-right: 5px;
  }
`;

export const StyledWrapperButtons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 20px;
`;
