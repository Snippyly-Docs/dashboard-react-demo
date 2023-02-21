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

  useEffect(() => {

    const isDataReset = window.sessionStorage.getItem('_snippyly_demo_reset');

    if (isDataReset === null) {
      fetch(
        "https://us-central1-snippyly-sdk-prod.cloudfunctions.net/resetDemoData",
        {
          headers: { "Content-Type": "application/json" },
          method: "POST",
          body: JSON.stringify({ documentId: 'dashboard-react-demo' }),
        }
      );
      window.sessionStorage.setItem('_snippyly_demo_reset', 'true');
    }
  }, []);

  /**
   * Snippyly Code Example
   * Initializes the Snippyly SDK.
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