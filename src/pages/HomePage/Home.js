import { useEffect } from 'react';
import { selectorTransactions } from 'redux/transactionsRedux/transactionsSelectors';
import { HomeStyled } from './Home.styled';

export const Home = () => {
  const { useDispatch, useSelector } = require('react-redux');
  const {
    fetchTransactions,
    deleteItem,
  } = require('redux/transactionsRedux/transactionsOperations');
  const dispatch = useDispatch();

  const deleteTransactions = id => {
    dispatch(deleteItem(id));
  };

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch, fetchTransactions]);

  const transactions = useSelector(selectorTransactions).transactions;
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

      <button>+</button>
    </HomeStyled>
  );
};
