import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { selectorTransactions } from 'redux/transactionsRedux/transactionsSelectors';
import { HomeStyled } from './Home.styled';
import Modal from '../../components/Modal/Modal';
import AddTransaction from '../../components/Add/Add';
import EditTransaction from '../../components/Edit/Edit';
import Logout from '../../components/Logout/Logout';
import { toggleAddModal, toggleEditModal } from 'redux/modal/ModalSlice';
import { selectModalState, selectModalTypeState } from 'redux/modal/selectors';
import { CustomButton } from 'components/CustomElements/CustomButton';
import { BiPencil } from 'react-icons/bi';

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
  const isMobile = useMediaQuery({ minWidth: 240, maxWidth: 767 });

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
      {!isMobile && (
        <table className="table">
          <thead className="head">
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Sum</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map(
              ({ createdAt, type, category, comment, value, _id }) => {
                let date = new Date(createdAt).toLocaleDateString();
                let numberSign = '+';
                let colorClassName = 'colorIncome';
                if (type === 'expense') {
                  numberSign = '-';
                  colorClassName = 'colorExpense';
                }
                return (
                  <tr key={_id} className="data">
                    <td>{date}</td>
                    <td>{numberSign}</td>
                    <td>{category}</td>
                    <td>{comment}</td>
                    <td className={colorClassName}>{value}</td>
                    <td>
                      <BiPencil
                        className="icon editItem"
                        onClick={() => handleEditClick(_id)}
                      />
                    </td>
                    <td>
                      <CustomButton
                        className="deleteItem"
                        onClick={() => {
                          deleteTransactions(_id);
                        }}
                      >
                        Delete
                      </CustomButton>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      )}

    {isMobile && (
      <div>
          Тут будут карточки данных
      </div>
    )}  

      <CustomButton
            className="addItem"
            type="button"
            onClick={() => dispatch(toggleAddModal())}
          >
            +
      </CustomButton>
              
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
