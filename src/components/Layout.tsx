import styles from './Layout.module.css';

const Layout = (props: any) => {
  return (
    <div className={styles['layout']}>
      <div className={styles['navbar']}>
        { props.navbar ? props.navbar : null }
      </div>
      <div className={styles['main-content']}>
        { props.content ? props.content : null }
      </div>
    </div>
  );
};

export default Layout;