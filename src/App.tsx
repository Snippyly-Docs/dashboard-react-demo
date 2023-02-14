import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';
import GraphIcon from './icons/graph.svg';
import TrendIcon from './icons/trend.svg';

import Layout from './components/Layout';
import Toolbar from './components/Toolbar';
import CardGrid from './components/CardGrid';
import Section from './components/Section';
import Card from './components/Card';
import Chart from './components/Chart';
import Table from './components/Table';

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
                      <div className={styles['metrics-container']}>
                        <div className={styles['metrics-header']}>
                          <div className={styles['icon']}>
                            <img src={GraphIcon} />
                          </div>
                          <div className={styles['trend']}>
                            <p className={styles['trend-value']}>4.56</p>
                            <img src={TrendIcon} />
                          </div>
                        </div>
                        <p className={styles['label']}>Total revenue</p>
                        <p className={styles['value']}>500K</p>
                      </div>
                    } />
                    <Card content={
                      <div className={styles['metrics-container']}>
                        <div className={styles['metrics-header']}>
                          <div className={styles['icon']}>
                            <img src={GraphIcon} />
                          </div>
                          <div className={styles['trend']}>
                            <p className={styles['trend-value']}>3.26</p>
                            <img src={TrendIcon} />
                          </div>
                        </div>
                        <p className={styles['label']}>Views</p>
                        <p className={styles['value']}>20K</p>
                      </div>
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
                  <Table />
                }
              />
            </>
          } />
        </>
      } />
  );
};

export default App;