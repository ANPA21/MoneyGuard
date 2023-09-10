import { useEffect } from 'react';
import { selectorTransactions } from 'redux/transactionsRedux/transactionsSelectors';
import { HomeStyled } from './Home.styled';
import Modal from '../../components/Modal/Modal';
import AddTransaction from '../../components/Add/Add';
import EditTransaction from '../../components/Edit/Edit';
import Logout from '../../components/Logout/Logout';
import { toggleAddModal, toggleEditModal } from 'redux/modal/ModalSlice';
import { selectModalState, selectModalTypeState } from 'redux/modal/selectors';
import { useState } from 'react';

const Home = () => {
  const { useDispatch, useSelector } = require('react-redux');
  const {
    fetchTransactions,
    deleteItem,
  } = require('redux/transactionsRedux/transactionsOperations');
  const dispatch = useDispatch();
  const [id, setId] = useState(null);
  const modalType = useSelector(selectModalTypeState);
  const isModalOpen = useSelector(selectModalState);

  const deleteTransactions = id => {
    dispatch(deleteItem(id));
  };

  const handleEditClick = id => {
    setId(id);
    dispatch(toggleEditModal());
  };

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, fetchTransactions]);

  const transactions = useSelector(selectorTransactions);

  return (
    <HomeStyled>
      <ul className="header">
        <li>CreatedAt</li>
        <li>Type</li>
        <li>Category</li>
        <li>Comment</li>
        <li>Sum</li>
        <li></li>
      </ul>

      <ul className="transaction">
        {transactions.map(
          ({ createdAt, type, category, comment, value, _id }) => {
            return (
              <li key={_id} className="data">
                <p>{createdAt}</p>
                <p>{type}</p>
                <p>{category}</p>
                <p>{comment}</p>
                <p>{value}</p>
                <p className="editItem" onClick={() => handleEditClick(_id)}>
                  edit
                </p>
                <button
                  onClick={() => {
                    deleteTransactions(_id);
                  }}
                >
                  Delete
                </button>
              </li>
            );
          }
        )}
      </ul>

      {/* <div>Кнопки пагинации Prev - Next</div> */}
      <button
        className="addItem"
        type="button"
        onClick={() => dispatch(toggleAddModal())}
      >
        +
      </button>

      {modalType === 'modal/toggleAddModal' && isModalOpen && (
        <Modal children={<AddTransaction />} />
      )}
      {modalType === 'modal/toggleEditModal' && isModalOpen && (
        <Modal children={<EditTransaction id={id} />} />
      )}
      {modalType === 'modal/toggleLogOutModal' && isModalOpen && (
        <Modal children={<Logout />} showCloseIcon={false} />
      )}
    </HomeStyled>
  );
};

export default Home;
