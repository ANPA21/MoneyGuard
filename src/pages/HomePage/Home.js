import { useEffect } from 'react';
import { selectorTransactions } from 'redux/transactionsRedux/transactionsSelectors';
import { HomeStyled } from './Home.styled';
import Modal from '../../components/Modal/Modal';
import AddTransaction from '../../components/Add/Add';
import EditTransaction from '../../components/Edit/Edit';
import { getModalState } from 'redux/transactions/selectors';
import {
  toggleAddModal,
  toggleEditModal,
} from 'redux/modal/ModalSlice';
import { getModalTypeState } from 'redux/modal/selectors';

export const Home = () => {
  const { useDispatch, useSelector } = require('react-redux');
  const {
    fetchTransactions,
    deleteItem,
  } = require('redux/transactionsRedux/transactionsOperations');
  const dispatch = useDispatch();
  
  const modalType = useSelector(getModalTypeState);
  const isModalOpen = useSelector(getModalState);

  const deleteTransactions = id => {
    dispatch(deleteItem(id));
  };

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, fetchTransactions]);

  const transactions = useSelector(selectorTransactions);
  console.log(transactions);

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
                <p className='editItem' onClick={() => dispatch(toggleEditModal())}>edit</p>
                <button onClick={() => {deleteTransactions(_id)}}>
                  Delete
                </button>
              </li>
            );
          }
        )}
      </ul>

      {/* <div>Кнопки пагинации Prev - Next</div> */}
      <button className='addItem' type="button" onClick={() => dispatch(toggleAddModal())}>+</button>
        {modalType === 'modal/toggleAddModal' && isModalOpen && (
          <Modal children={AddTransaction()} />
        )}
        {modalType === 'modal/toggleEditModal' && isModalOpen && (
          <Modal children={EditTransaction()} />
        )}
    </HomeStyled>
  );
};

//
//          // TEST запросов add  edit  delete и значения Balance
//import { useState, useEffect } from "react";
//import { selectorTransactions } from 'redux/transactionsRedux/transactionsSelectors';
//import { HomeStyled } from './Home.styled';
//import { selectorBalance } from 'redux/balance/balance.Selectors';
//
//export const Home = () => {
//  const { useDispatch, useSelector } = require('react-redux');
//  const {
//    fetchTransactions,
//    deleteItem,
//    addItem,
//    editItem
//  } = require('redux/transactionsRedux/transactionsOperations');
//  const dispatch = useDispatch();
//
//  const transactions = useSelector(selectorTransactions);
//  
//            const [createdAtInput, setCreatedAtInput] = useState('');
//            const [typeInput, setTypeInput] = useState('');
//            const [valueInput, setValueInput] = useState('');
//            const [addModal, setAddModal] = useState(false); 
//
//            const hendlAddTransaction = () => {
//              setAddModal(true)
//            }
//  
//            const handleChange = ({ target: { name, value } }) => {
//              switch (name) {
//                case 'createdAt':
//                  setCreatedAtInput(value);
//                  break;
//                case 'type':
//                  setTypeInput(value);
//                  break;
//                case 'value':
//                  setValueInput(value);
//                  break;
//                default:
//              }
//            };
//          
//            const handlSubmit = (event) => {
//              event.preventDefault();
//              addTransactions( createdAtInput, typeInput, valueInput );
//              setCreatedAtInput("");
//              setTypeInput("");
//              setValueInput("");
//              setAddModal(false)
//            };
//
//            const addTransactions = (createdAt, type, value) => {
//              const newTransactions = { createdAt, type, value };
//              dispatch(addItem(newTransactions));    
//            };
//
//                        const [id, setId] = useState('');
//                        const [valueEditInput, setValueEditInput] = useState('');
//                        const [editModal, setEditModal] = useState(false);
//                      
//                        const hendlEditTransaction = (_id, value) => {
//                          setId(_id);
//                          setValueEditInput(value);
//                          setEditModal(true)
//                        }
//
//                        const handleChangeEdit = event => {
//                          setValueEditInput(event.target.value);
//                        };
//                      
//                        const handlSubmitEdit = (event) => {
//                          event.preventDefault();
//                          editTransactions(id, valueEditInput);
//                          setId("");
//                          setValueEditInput("");
//                          setEditModal(false)
//                        };
//  
//                        const editTransactions = (id, value) => {
//                          const updatedData = {
//                            "value": value,
//                          };
//                          dispatch(editItem({id, updatedData}));    
//                        };
//
//  const deleteTransactions = id => {
//    dispatch(deleteItem(id));
//  };
//
//  useEffect(() => {
//    dispatch(fetchTransactions());
//  }, [dispatch, fetchTransactions]);
//const balance = useSelector(selectorBalance);
//  console.log(transactions);
//
//  return (
//    <HomeStyled>
//
//            <p>---------------------------------------</p>
//            <p>Test Balance</p>
//            <p>{balance}</p>
//            <p>---------------------------------------</p>
//              <p>Test Add</p>
//              {addModal &&
//                <form onSubmit={handlSubmit}>
//                  <label>
//                      <p>Date</p>
//                      <input
//                          name="createdAt" type="date" value={createdAtInput} onChange={handleChange}
//                      />
//                  </label>
//                  <label>
//                      <p>Type</p>
//                      <input
//                          name="type" type="text" value={typeInput} onChange={handleChange}
//                      />
//                  </label>
//                  <label>
//                      <p>Sum</p>
//                      <input
//                          name="value" type="number" value={valueInput} onChange={handleChange}
//                      />
//                  </label>
//                  <button type="submit">Add transfction +++++</button>
//                </form>
//              }
//            <p>---------------------------------------</p>
//                        <p>Test Edit</p>
//                        {editModal && 
//                          <form onSubmit={handlSubmitEdit}>
//                            <label>
//                                <p>Sum</p>
//                                <input
//                                    name="valueEditInput" type="number" value={valueEditInput} onChange={handleChangeEdit}
//                                />
//                            </label>
//                            <button type="submit">Edit transactiion:  edit</button>
//                          </form>
//                  
//                        }
//            <p>---------------------------------------</p>
//
//      <ul className="header">
//        <li>Date</li>
//        <li>Type</li>
//        <li>Category</li>
//        <li>Comment</li>
//        <li>Sum</li>
//        <li></li>
//      </ul>
//
//      <ul className="transaction">
//        {transactions.map(
//          ({ createdAt, type, category, comment, value, _id }) => {
//            return (
//              <li key={_id} className="data">
//                <p>{createdAt}</p>
//                <p>{type}</p>
//                <p>{category}</p>
//                <p>{comment}</p>
//                <p>{value}</p>
//                <p className='editItem' onClick={() => hendlEditTransaction(_id, value)}>edit</p>
//                <button onClick={() => {deleteTransactions(_id)}}>
//                  Delete
//                </button>
//              </li>
//            );
//          }
//        )}
//      </ul>
//
//      <button className='addItem' type="button" onClick={() => {hendlAddTransaction()}}>+</button>
//
//    </HomeStyled>
//  );
//};
