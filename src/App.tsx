import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import Card from "./components/Card";
import Chart from './components/Chart';
import Transactions from './components/Transactions';
import styles from './App.module.css';

const App = () => {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);

  }, [client]);

  return (
    <div className={styles['app-container']}>
      <div className={styles['sidebar']}>

      </div>
      <div className={styles['content']}>
        <div className={styles['toolbar']}>
          Toolbar
        </div>
        <h1 className={styles['padding']}>Dashboard</h1>
        <div className={`${styles['dashboard']} ${styles['padding']}`}>
          <div className={styles['main-content']}>
            <div className={styles['layout']}>
              <div className={styles['hero-card']}>
                <Card content={
                  <Chart />
                } />
              </div>
              <div className={styles['card-stack']}>
                <Card content={
                  <div className={styles['header']}></div>

                } />
                <Card content={
                  <h2>Test</h2>
                } />
              </div>
            </div>
            <h1 style={{ paddingTop: '3vh', paddingBottom: '2vh' }}>Recent Transactions</h1>
            <div className={styles['layout']}>
              <Transactions />
              <div className={styles['card-stack']}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;