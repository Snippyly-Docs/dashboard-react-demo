import styles from './Transactions.module.css';

const Transactions = () => {
  return (
    <table>
      <tr className={styles['table-header']}>
        <th><span className="responsive-text">Name</span></th>
        <th><span className="responsive-text">Date</span></th>
        <th><span className="responsive-text">Amount</span></th>
        <th><span className="responsive-text">Status</span></th>
      </tr>
      <tr>
        <td><span className="responsive-text">Loreal</span></td>
        <td><span className="responsive-text">Jan 11</span></td>
        <td><span className="responsive-text">$5000</span></td>
        <td><span className="responsive-text">Success</span></td>
      </tr>
      <tr>
        <td><span className="responsive-text">J&J</span></td>
        <td><span className="responsive-text">Jan 11</span></td>
        <td><span className="responsive-text">$7000</span></td>
        <td><span className="responsive-text">Success</span></td>
      </tr>
    </table>
  );
};

export default Transactions;