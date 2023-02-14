import styles from './Table.module.css';

const Table = () => {
  return (
    <table className={styles['table']}>
      <tr className={styles['header']}>
        <th><span className="responsive-text">Name</span></th>
        <th><span className="responsive-text">Date</span></th>
        <th><span className="responsive-text">Amount</span></th>
        <th><span className="responsive-text">Status</span></th>
      </tr>
      <tr className={styles['row']}>
        <td><span>Loreal</span></td>
        <td><span>Jan 11</span></td>
        <td><span>$5000</span></td>
        <td><span>Success</span></td>
      </tr>
      <tr className={styles['row']}>
        <td><span>J&J</span></td>
        <td><span>Jan 11</span></td>
        <td><span>$7000</span></td>
        <td><span>Success</span></td>
      </tr>
    </table>
  );
}

export default Table;