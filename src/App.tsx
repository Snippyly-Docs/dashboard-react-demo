import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Layout from './components/Layout';
import Toolbar from './components/Toolbar';
import CardGrid from './components/CardGrid';
import Section from './components/Section';
import Card from './components/Card';
import Chart from './components/Chart';

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
                <Card content={
                  <Chart />
                } />
              }
                secondary={
                  <>
                    <Card content={
                      <></>
                    } />
                    <Card content={
                      <></>
                    } />
                  </>
                }
              />
            </>
          } />
          <Section content={
            <>
              <h2>Recent transactions</h2>
              <CardGrid style={{ height: '100%' }}
                primary={
                  <table className={styles['table']}>
                    <tr className={styles['header']}>
                      <th><span className="responsive-text">Name</span></th>
                      <th><span className="responsive-text">Date</span></th>
                      <th><span className="responsive-text">Amount</span></th>
                      <th><span className="responsive-text">Status</span></th>
                    </tr>
                    <tr className={styles['row']}>
                      <td><span className="responsive-text">Loreal</span></td>
                      <td><span className="responsive-text">Jan 11</span></td>
                      <td><span className="responsive-text">$5000</span></td>
                      <td><span className="responsive-text">Success</span></td>
                    </tr>
                    <tr className={styles['row']}>
                      <td><span className="responsive-text">J&J</span></td>
                      <td><span className="responsive-text">Jan 11</span></td>
                      <td><span className="responsive-text">$7000</span></td>
                      <td><span className="responsive-text">Success</span></td>
                    </tr>
                  </table>
                }
              />
            </>
          } />
        </>
      } />
  );
};

export default App;