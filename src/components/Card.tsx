import styles from './Card.module.css';


const Card = (props: any) => {

  return (
    <div className={styles.card}>
      { props.content ? props.content : null }
    </div>
  );
};

export default Card;