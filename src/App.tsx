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
import Table from './components/Table';
import Metrics from './components/Metrics';

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
                      <Metrics
                        trendValue="4.56"
                        label="Total revenue"
                        value="500K"
                      />
                    } />
                    <Card content={
                      <Metrics
                        trendValue="3.27"
                        label="Views"
                        value="20K"
                      />
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