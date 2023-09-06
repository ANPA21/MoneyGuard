import { getModalState } from 'redux/transactions/selectors';
import { toggleLogOutModal } from 'redux/modal/ModalSlice';
import { getModalTypeState } from 'redux/modal/selectors';
import Modal from '../../Modal/Modal';
import Logout from '../../Logout/Logout';
import { HeaderStyled } from './Header.styled';

export const Header = () => {
  const { useDispatch, useSelector } = require('react-redux');
  const dispatch = useDispatch();
  const modalType = useSelector(getModalTypeState);
  const isModalOpen = useSelector(getModalState);

    return (
    <HeaderStyled>
      <h2>Логотип, имя, Exit</h2>
      <button type="button" onClick={() => dispatch(toggleLogOutModal())}>
        Exit
      </button>

      {modalType === 'modal/toggleLogOutModal' && isModalOpen && (
          <Modal children={Logout()} />
      )}
    </HeaderStyled>
  );
}
