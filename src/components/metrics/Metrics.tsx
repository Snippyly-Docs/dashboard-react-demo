import styles from './Metrics.module.css';
import GraphIcon from '../../icons/graph.svg';
import TrendIcon from '../../icons/trend.svg';

const Metrics = (props: any) => {
  return (

    <div className={styles['metrics-container']}>
      <div className={styles['metrics-header']}>
        <div className={styles['icon']}>
          <img src={GraphIcon} />
        </div>
        <div className={styles['trend']}>
          <p className={styles['trend-value']}>{ props.trendValue }</p>
          <img src={TrendIcon} />
        </div>
      </div>
      <p className={styles['label']}>{ props.label }</p>
      <p className={styles['value']}>{ props.value }</p>
    </div>
  );
};

export default Metrics;