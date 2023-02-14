import styles from './Chart.module.css';

const Chart = () => {

  return (
    <div className={styles['chart-container']}>

      <div className={styles['horizontal-container']}>
        <div className={styles['horizontal-slice']}></div>
        <div className={styles['horizontal-slice']}></div>
        <div className={styles['horizontal-slice']}></div>
        <div className={styles['horizontal-slice']}></div>
        <div className={styles['horizontal-slice']}></div>
      </div>

      <div className={styles['vertical-container']}>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar']} style={{height: '70%'}} />
          <div className={styles['secondary-bar']} style={{height: '43%'}} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar']} style={{height: '50%'}} />
          <div className={styles['secondary-bar']} style={{height: '60%'}} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar']} style={{height: '50%'}} />
          <div className={styles['secondary-bar']} style={{height: '40%'}} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar']} style={{height: '65%'}} />
          <div className={styles['secondary-bar']} style={{height: '90%'}} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar']} style={{height: '55%'}} />
          <div className={styles['secondary-bar']} style={{height: '37%'}} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar']} style={{height: '43%'}} />
          <div className={styles['secondary-bar']} style={{height: '32%'}} />
        </div>
        <div className={styles['vertical-slice']}>
          <div className={styles['bar']} style={{height: '67%'}} />
          <div className={styles['secondary-bar']} style={{height: '10%'}} />
        </div>
      </div>
    </div>
  );
};

export default Chart;