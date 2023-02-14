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
        <div className={styles['dashboard']}>
          <h1>Dashboard</h1>
          <div className={styles['cards']}>
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
          <h2>Recent Transactions</h2>
          <Transactions />
        </div>
      </div>
    </div>
  );
};

export default App;