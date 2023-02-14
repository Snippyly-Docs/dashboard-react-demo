import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Layout from './components/Layout';
import Toolbar from './components/Toolbar';
import CardGrid from './components/CardGrid';

const App = () => {

  const { client } = useSnippylyClient();

  useEffect(() => {

    if (!client) return;

    const user = generateUserData();
    client.identify(user);

  }, [client]);

  return (
    <Layout
      navbar={
        <>

        </>
      }
      content={
        <>
          <Toolbar />
          <div className={styles['section']}>
            <h1>Dashboard</h1>
            <CardGrid />
          </div>
          <div className={styles['section']}>
            <h2>Recent transactions</h2>
            <CardGrid style={{height: '100%'}} />
          </div>
        </>
      } />
  );
};

export default App;