import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalWindow, Overlay, ButtonClose, CancelBtn } from './Modal.styled';
import { useDispatch } from 'react-redux';
import { toggleModal } from 'redux/modal/ModalSlice';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ children, showCloseIcon = true }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModal());
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [dispatch]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleModal());
    }
  };

  const closeClick = e => {
    if (e.target.name === 'cancel' || e.currentTarget.name === 'closeSvg') {
      dispatch(toggleModal());
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        {showCloseIcon && (
          <ButtonClose type="button" name="closeSvg" onClick={closeClick}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L17 17" stroke="#FBFBFB" />
              <path d="M1 17L17 0.999999" stroke="#FBFBFB" />
            </svg>
          </ButtonClose>
        )}
        {children}
        <CancelBtn type="button" name="cancel" onClick={closeClick}>
          Cancel
        </CancelBtn>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
}
