import { useEffect } from "react";
import { useSnippylyClient } from '@snippyly/react';
import { generateUserData } from './util/user';
import styles from './App.module.css';

import Navbar from "./components/navbar/Navbar";
import Layout from './components/layout/Layout';
import Toolbar from './components/toolbar/Toolbar';
import CardGrid from './components/card-grid/CardGrid';
import Section from './components/section/Section';
import Card from './components/card/Card';
import Chart from './components/chart/Chart';
import Table from './components/table/Table';
import Metrics from './components/metrics/Metrics';


const App = () => {

  /**
   * Snippyly Code Example
   * Identifying the user and setting the document ID.
   */
  const { client } = useSnippylyClient();
  const user = generateUserData();

  useEffect(() => {

    if (!client) return;

    client.identify(user);
    client.setDocumentId('dashboard-react-demo');

  }, [client]);

  return (
    <Layout
      navbar={<Navbar user={user} />}
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