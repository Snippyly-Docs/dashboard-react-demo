import styles from './Chart.module.css';

const Chart = () => {
  return (
    <div className={styles['chart-container']}>
      <div className={styles['horizontal-slice']} />
      <div className={styles['horizontal-slice']} />
      <div className={styles['horizontal-slice']} />
      <div className={styles['horizontal-slice']} />
      <div className={styles['horizontal-slice']} />

      <div className={styles['vertical-slice-container']}>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar-1']} style={{ height: '80%' }} />
          <div className={styles['bar-2']} style={{ height: '40%' }} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar-1']} style={{ height: '45%' }} />
          <div className={styles['bar-2']} style={{ height: '60%' }} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar-1']} style={{ height: '45%' }} />
          <div className={styles['bar-2']} style={{ height: '32%' }} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar-1']} style={{ height: '50%' }} />
          <div className={styles['bar-2']} style={{ height: '85%' }} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar-1']} style={{ height: '47%' }} />
          <div className={styles['bar-2']} style={{ height: '28%' }} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar-1']} style={{ height: '36%' }} />
          <div className={styles['bar-2']} style={{ height: '65%' }} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar-1']} style={{ height: '76%' }} />
          <div className={styles['bar-2']} style={{ height: '32%' }} />
        </div>
      </div>
    </div>
  );
}

export default Chart;