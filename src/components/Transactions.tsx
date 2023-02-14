import styles from './Transactions.module.css';

const Transactions = () => {
  return (
    <table>
      <tr className={styles['table-header']}>
        <th>Name</th>
        <th>Date</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
      <tr>
        <td>Loreal</td>
        <td>Jan 11</td>
        <td>$5000</td>
        <td>Success</td>
      </tr>
      <tr>
        <td>J&J</td>
        <td>Jan 11</td>
        <td>$7000</td>
        <td>Success</td>
      </tr>
    </table>
  );
};

export default Transactions;