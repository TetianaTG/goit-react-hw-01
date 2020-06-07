import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({transactions}) => (
  <table className={styles.table}>
    <thead>
      <tr className={styles.headRow}>
        <th className={styles.title}>Type</th>
        <th className={styles.title}>Amount</th>
        <th className={styles.title}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(transaction => (
        <tr className={styles.textRow} key={transaction.id}>
          <td className={styles.text}>{transaction.type}</td>
          <td className={styles.text}>{transaction.amount}</td>
          <td className={styles.text}>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired
};

export default TransactionHistory;