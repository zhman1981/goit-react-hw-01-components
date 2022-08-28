import Transaction from 'components/Transaction/Transaction';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transaction_history}>
            <thead>
                <tr>
                <th className={css.transaction_colum}>Type</th>
                <th className={css.transaction_colum}>Amount</th>
                <th className={css.transaction_colum}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <Transaction 
                        key={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />)
                )}
            </tbody>
        </table>
    );
};

export default TransactionHistory;