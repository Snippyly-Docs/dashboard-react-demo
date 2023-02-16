import styles from './Section.module.css';

const Section = (props: any) => {

  return (
    <div className={styles['section']}>
      { props.content ? props.content : null }
    </div>
  );
};

export default Section;