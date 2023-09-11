import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setBalance } from 'redux/balance/balance.Slice';
import { selectorTransactions } from 'redux/transactionsRedux/transactionsSelectors';
import { selectorBalance } from 'redux/balance/balance.Selectors';
import { BalanceStyled } from './Balance.styled';

export const Balance = () => {
    const dispatch = useDispatch();
    const transactions = useSelector(selectorTransactions);
    const balance = useSelector(selectorBalance);

    useEffect(() => {
        const totalSum = transactions.reduce((sumValue, transaction) => {
            let numberValue = parseFloat(transaction.value);
            let numberSign = 1;
                if (transaction.type === "expense") {
                    numberSign = -1;
                }
            return sumValue + numberSign*numberValue;
        }, 0);
        dispatch(setBalance(totalSum))
    }, [dispatch,transactions]);

    return (
        <BalanceStyled>
            <h3>Your balance</h3>
            <p>₴ {balance}</p>
        </BalanceStyled>
    );
}