import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Layout from './components/Layout';
import Toolbar from './components/Toolbar';
import CardGrid from './components/CardGrid';
import Section from './components/Section';

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
          <Section content={
            <>
              <h1>Dashboard</h1>
              <CardGrid primary={
                <div className={styles.card}>

                </div>
              }
                secondary={
                  <>
                    <div className={styles.card}>

                    </div>
                    <div className={styles.card}>

                    </div>
                  </>
                }
              />
            </>
          } />
          <Section content={
            <>
              <h2>Recent transactions</h2>
              <CardGrid style={{ height: '100%' }} />
            </>
          } />
        </>
      } />
  );
};

export default App;