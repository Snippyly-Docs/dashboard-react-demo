import styles from './CardGrid.module.css';

const CardGrid = (props: any) => {

  return (
    <div style={props.style ? props.style : {}} className={styles['card-grid-container']}>
      <div className={styles['primary-slot']}>
        {props.primary ? props.primary : null}
      </div>
      <div className={styles['stacked-slot']}>
        {props.secondary ? props.secondary : null}
      </div>
    </div>
  );
};

export default CardGrid;